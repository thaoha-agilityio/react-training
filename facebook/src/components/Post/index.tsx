import { Suspense, lazy, memo } from 'react';
import { Box, Text, Image, Stack, Flex, Button, Divider, useDisclosure } from '@chakra-ui/react';

// Components
import { LoadingIndicator, UserProfile } from '@/components';
import { CommentIcon, LikeIcon, ShareIcon } from '@/components/Icons';

// Constants
import { PLACEHOLDER_IMAGE } from '@/constants';

// Types
import { IPost } from '@/types';

// Hooks
import { useGetCommentByPostId } from '@/hooks';

const PostModal = lazy(() => import('@/components/Modal/PostModal'));

interface PostProps {
  isModal?: boolean;
  userName: string;
  post: IPost;
}

const Post = memo(({ post, isModal = false, userName }: PostProps) => {
  const { content, image, id } = post || {};
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { data: comments } = useGetCommentByPostId(id);

  return (
    <Stack
      spacing='15px'
      py='10px'
      borderRadius='md'
      width='full'
      bg='white'
      boxShadow={isModal ? 'none' : '0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)'}
    >
      <Box pl='15px'>
        <UserProfile userName={userName} />
      </Box>
      <Text pl='15px'>{content}</Text>

      {image && (
        <Box w='full' h='533px'>
          <Image
            src={image}
            alt='post-img'
            width='100%'
            height='100%'
            objectFit='cover'
            fallbackSrc={PLACEHOLDER_IMAGE}
          />
        </Box>
      )}

      <Flex justifyContent='space-between' px='10px'>
        <Button variant='unstyled' leftIcon={<LikeIcon />} alignItems='center' w='150px'>
          Like
        </Button>
        <Button
          variant='unstyled'
          leftIcon={<CommentIcon />}
          alignItems='center'
          w='150px'
          onClick={onOpen}
        >
          Comment
        </Button>
        <Button variant='unstyled' leftIcon={<ShareIcon />} alignItems='center' w='150px'>
          Share
        </Button>
      </Flex>
      <Divider />

      {isOpen && (
        <Suspense fallback={<LoadingIndicator />}>
          <PostModal
            isOpen={isOpen}
            post={post}
            comments={comments}
            onClose={onClose}
            userName={userName}
          />
        </Suspense>
      )}
    </Stack>
  );
});

export default Post;
