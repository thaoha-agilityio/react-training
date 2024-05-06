import { memo } from 'react';
import { Box, Text, Image, Stack, Flex, Button, Divider } from '@chakra-ui/react';

// Components
import { UserProfile } from '@/components';
import { CommentIcon, LikeIcon, ShareIcon } from '../Icons';

// Constants
import { PLACEHOLDER_IMAGE } from '@/constants';

// Types
import { IPost } from '@/types';

// TODO: update props later
interface PostProps {
  post: IPost;
  isModal?: boolean;
}

const Post = memo(({ post, isModal = false }: PostProps) => {
  const { author, content, image } = post || {};

  return (
    <Stack
      spacing='15px'
      py='10px'
      borderRadius='md'
      width='full'
      boxShadow={isModal ? 'none' : '0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)'}
    >
      <Box pl='15px'>
        {/* TODO: will handle get userName by author */}
        <UserProfile userName={author} />
      </Box>
      <Text pl='15px'>{content}</Text>
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

      <Flex justifyContent='space-between' px='10px'>
        <Button variant='unstyled' leftIcon={<LikeIcon />} alignItems='center' w='150px'>
          Like
        </Button>
        <Button variant='unstyled' leftIcon={<CommentIcon />} alignItems='center' w='150px'>
          Comment
        </Button>
        <Button variant='unstyled' leftIcon={<ShareIcon />} alignItems='center' w='150px'>
          Share
        </Button>
      </Flex>
      <Divider />
    </Stack>
  );
});

export default Post;
