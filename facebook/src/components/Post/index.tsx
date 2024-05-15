import { memo, useEffect, useState } from 'react';
import { Box, Text, Image, Stack, Flex, Button, Divider } from '@chakra-ui/react';

// Components
import { UserProfile } from '@/components';
import { CommentIcon, LikeIcon, ShareIcon } from '@/components/Icons';

// Constants
import { PLACEHOLDER_IMAGE } from '@/constants';

// Types
import { IPost } from '@/types';

// Stores
import { useAuthStore } from '@/stores';

// Utils
import { filterItem } from '@/utils';

// Hooks
import { useLikePost } from '@/hooks';

interface PostProps {
  isModal?: boolean;
  post: IPost;
  onShowComment?: (post: IPost) => void;
}

const Post = memo(({ post, isModal = false, onShowComment }: PostProps) => {
  const { content, image, totalComments, likes, id: postId, authorName } = post || {};
  console.log('authorName', authorName);

  // Auth store
  const user = useAuthStore((state) => state.user);
  const { id: userId } = user;

  // Check if the user has liked the post or not
  const [isLike, setIsLike] = useState<boolean>(likes.includes(userId));
  const [isAction, setIsAction] = useState(false);

  // Update post data when user click like button
  const { mutate: updatePost } = useLikePost(postId);

  const handleShowComment = () => {
    onShowComment?.(post);
  };

  const handleLikePost = () => {
    setIsLike((prev) => !prev);
    setIsAction(true);
  };

  useEffect(() => {
    if (!isAction) return;

    // If isLike is true then add userId into likes list else remove useId from likes list
    const userIds = isLike ? [...likes, userId] : filterItem(likes, userId);
    updatePost({ likes: userIds });

    setIsAction(false);
  }, [isAction, isLike, likes, updatePost, userId]);

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
        <UserProfile userName={authorName} />
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

      {/* Only Show total likes and total comments in Homepage */}
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
