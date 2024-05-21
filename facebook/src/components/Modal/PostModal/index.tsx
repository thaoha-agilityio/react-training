import { memo, useCallback, useState, KeyboardEvent } from 'react';
import { AxiosError } from 'axios';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
  Avatar,
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  IconButton,
  Stack,
  Textarea,
} from '@chakra-ui/react';

// Components
import { Comment, CommentSkeleton, CustomModal, Post } from '@/components';
import { SendIcon } from '@/components/Icons';

// Constants
import { DEFAULT_IMAGE, INPUT_PLACEHOLDER, STATUS } from '@/constants';

// Types
import { IComment, IPost } from '@/types';

// Hooks
import { useCommentPost, useCreateComment, useCustomToast, useLikeComment } from '@/hooks';

// Stores
import { useAuthStore } from '@/stores';

// Utils
import { getAPIErrorMessage } from '@/utils';

interface PostModalProps {
  isOpen: boolean;
  isCommentLoading: boolean;
  post: IPost;
  comments: IComment[];
  onClose: () => void;
  onLikePost: (likes: number[], id: number) => void;
}

interface CreateCommentFormData {
  content: string;
}

const PostModal = memo(
  ({ isOpen, onClose, comments, post, onLikePost, isCommentLoading }: PostModalProps) => {
    const {
      control,
      handleSubmit,
      resetField,
      formState: { isDirty },
    } = useForm<CreateCommentFormData>({
      mode: 'onSubmit',
      reValidateMode: 'onSubmit',
      defaultValues: {
        content: '',
      },
    });

    // Destructing object
    const { authorName, id: postId, totalComments } = post;

    // Auth store
    const user = useAuthStore((state) => state.user);
    const { id: userId, firstName, surname } = user || {};

    const [selectedCommentId, setSelectedCommentId] = useState<number>();
    const [totalCommentsPost, setTotalCommentPost] = useState(totalComments);

    // custom hooks
    const { mutate: createComment, isLoading } = useCreateComment();
    const { showToast } = useCustomToast();
    const { mutate: updateComment } = useLikeComment(selectedCommentId ? selectedCommentId : -1);
    const { mutate: commentPost } = useCommentPost(postId);

    // Handle Like Comment
    const handleLikeComment = useCallback(
      (likes: number[], id: number) => {
        setSelectedCommentId(id);
        updateComment({ likes: likes });
      },
      [updateComment],
    );

    //  Handle create comment success
    const handleCreateSuccess = async () => {
      // Update totalComments prop of post data
      commentPost(totalCommentsPost);

      // Reset field when you create a comment success
      resetField('content');
    };

    // Handle show toast error message
    const handleCreateError = (error: AxiosError) =>
      showToast(STATUS.ERROR, getAPIErrorMessage(error));

    // Handle add comment
    const onSubmit: SubmitHandler<CreateCommentFormData> = (data) => {
      const payload = {
        ...data,
        postId: postId,
        authorName: `${firstName} ${surname}`,
        authorId: userId,
        likes: [],
      };
      setTotalCommentPost((prev) => prev + 1);

      createComment(payload, {
        onSuccess: handleCreateSuccess,
        onError: handleCreateError,
      });
    };

    const isDisableButton = !isDirty || isLoading;

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter') {
        handleSubmit(onSubmit)();
      }
    };

    // Render write comment
    const renderWriteComment = () => (
      <Flex
        as='form'
        gap='10px'
        onSubmit={handleSubmit(onSubmit)}
        w='full'
        id='create-comment-form'
      >
        <Avatar src={DEFAULT_IMAGE} name='avatar' />
        <Box pos='relative' w='full'>
          <Controller
            name='content'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
              <FormControl isInvalid={!!error}>
                <Textarea
                  variant='filled'
                  placeholder={INPUT_PLACEHOLDER.COMMENT}
                  onChange={(e) => {
                    const value = e.target?.value;
                    onChange(value);
                  }}
                  onKeyDown={handleKeyDown}
                  {...rest}
                />
                {error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
              </FormControl>
            )}
          />
          <Box pos='absolute' right={0} top='19px'>
            <IconButton
              type='submit'
              aria-label='comment-icon'
              data-testid='comment'
              variant='action'
              disabled={isDisableButton}
              isLoading={isLoading}
              icon={<SendIcon />}
            />
          </Box>
        </Box>
      </Flex>
    );

    return (
      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        title={authorName}
        size='2xl'
        childrenModalFooter={renderWriteComment()}
      >
        <Post post={post} isModal onLikePost={onLikePost} />

        {/* List comment */}
        {isCommentLoading ? (
          <CommentSkeleton />
        ) : (
          <Stack spacing='10px' pl='10px'>
            {comments.map((comment: IComment) => {
              const { id, content, likes, authorName: userName } = comment || {};

              return (
                <Comment
                  content={content}
                  key={id}
                  userName={userName}
                  commentId={id}
                  likes={likes}
                  currentUser={userId}
                  onLikeComment={handleLikeComment}
                />
              );
            })}
          </Stack>
        )}
      </CustomModal>
    );
  },
);

export default PostModal;
