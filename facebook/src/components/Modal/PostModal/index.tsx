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
import { Comment, CustomModal, Post } from '@/components';
import { SendIcon } from '@/components/Icons';

// Constants
import { DEFAULT_IMAGE, INPUT_PLACEHOLDER, STATUS } from '@/constants';

// Types
import { IComment, IPost } from '@/types';

// Hooks
import { useCreateComment, useCustomToast } from '@/hooks';

// Stores
import { useAuthStore } from '@/stores';

// Utils
import { getAPIErrorMessage } from '@/utils';

interface PostModalProps {
  isOpen: boolean;
  post: IPost;
  comments: IComment[];
  userName: string;
  onClose: () => void;
}

interface CreateCommentFormData {
  content: string;
}

const PostModal = ({ isOpen, onClose, comments, post, userName }: PostModalProps) => {
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

  // Auth store
  const user = useAuthStore((state) => state.user);
  const { id: userId } = user || {};

  // custom hooks
  const { mutate: createComment, isLoading } = useCreateComment();
  const { showToast } = useCustomToast();

  //  Handle show toast success message
  const handleCreateSuccess = () => resetField('content');

  // Handle show toast error message
  const handleCreateError = (error: AxiosError) =>
    showToast(STATUS.ERROR, getAPIErrorMessage(error));

  // Handle add comment
  const onSubmit: SubmitHandler<CreateCommentFormData> = (data) => {
    const payload = { ...data, postId: post.id, author: userId };

    createComment(payload, {
      onSuccess: handleCreateSuccess,
      onError: handleCreateError,
    });
  };

  const isDisableButton = !isDirty || isLoading;

  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title={userName} size='2xl'>
      <Post post={post} isModal userName={userName} />

      {/* List comment */}
      <Stack spacing='10px' pl='10px'>
        {comments.map((comment: IComment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </Stack>

      {/* Write comment */}
      <Flex as='form' p='10px' gap='10px' onSubmit={handleSubmit(onSubmit)}>
        <Avatar src={DEFAULT_IMAGE} />
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
                  {...rest}
                />
                {error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
              </FormControl>
            )}
          />
          <Box pos='absolute' right={0} top='35px'>
            <IconButton
              type='submit'
              disabled={isDisableButton}
              icon={<SendIcon />}
              aria-label='comment-icon'
              variant='action'
            />
          </Box>
        </Box>
      </Flex>
    </CustomModal>
  );
};

export default PostModal;
