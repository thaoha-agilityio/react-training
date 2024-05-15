import { memo, useEffect, useState } from 'react';
import { Box, Text, Image, Stack, Flex, Button, Divider } from '@chakra-ui/react';

// Components
import { UserProfile } from '@/components';
import { CommentIcon, LikeIcon, ShareIcon } from '@/components/Icons';

// Constants
import { PLACEHOLDER_IMAGE } from '@/constants';

// Types
import { IPost } from '@/types';
import { useAuthStore } from '@/stores';
import { likePost } from '@/apis';
import { checkItemInArray } from '@/utils';

interface PostProps {
  isModal?: boolean;
  userName: string;
  post: IPost;
  onShowComment?: (post: IPost) => void;
}

const Post = memo(({ post, isModal = false, userName, onShowComment }: PostProps) => {
  const { content, image, totalComments, likes, id: postId } = post || {};
  const user = useAuthStore((state) => state.user);

  const [isLike, setIsLike] = useState<boolean>(checkItemInArray(likes, user.id));

  const handleLikePost = () => setIsLike((prev) => !prev);

  const handleShowComment = () => {
    onShowComment?.(post);
  };

  useEffect(() => {
    const userIds = isLike ? [...likes, user.id] : likes?.filter((item) => item !== user.id);

    const handleLikePost = async () => await likePost(postId, { likes: userIds });

    handleLikePost();
  }, [isLike, likes, postId, user]);

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

      {!isModal && (
        <>
          <Flex px='45px' justifyContent='space-between'>
            <Text variant='helper'>{likes?.length} Likes</Text>
            <Text variant='helper'>{totalComments} Comments</Text>
          </Flex>
          <Divider />
        </>
      )}

      <Flex justifyContent='space-between' px='10px'>
        <Button
          variant='unstyled'
          leftIcon={<LikeIcon color={isLike ? '#0866FF' : '#65676B'} />}
          alignItems='center'
          w='150px'
          onClick={handleLikePost}
          color={isLike ? 'primary' : 'text.label'}
        >
          Like
        </Button>
        <Button
          variant='unstyled'
          leftIcon={<CommentIcon />}
          alignItems='center'
          w='150px'
          onClick={handleShowComment}
        >
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
