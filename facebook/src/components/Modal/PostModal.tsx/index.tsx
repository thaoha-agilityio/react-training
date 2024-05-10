import { Avatar, Box, Flex, IconButton, Stack, Textarea } from '@chakra-ui/react';

// Components
import { Comment, CustomModal, Post } from '@/components';
import { SendIcon } from '@/components/Icons';

// Constants
import { DEFAULT_IMAGE, INPUT_PLACEHOLDER } from '@/constants';

// Types
import { IComment, IPost } from '@/types';

interface PostModalProps {
  isOpen: boolean;
  post: IPost;
  comments: IComment[];
  onClose: () => void;
}

const PostModal = ({ isOpen, onClose, comments, post }: PostModalProps) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title={'Pam'} size='2xl'>
      <Post post={post} isModal userName='Pam' />

      {/* List comment */}
      <Stack spacing='10px' pl='10px'>
        {comments.map((comment: IComment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </Stack>

      {/* Write comment */}
      <Flex as='form' p='10px' gap='10px'>
        <Avatar src={DEFAULT_IMAGE} />
        <Box pos='relative' w='full'>
          <Textarea variant='filled' placeholder={INPUT_PLACEHOLDER.COMMENT} />
          <Box pos='absolute' right={0} top='35px'>
            <IconButton
              type='submit'
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
