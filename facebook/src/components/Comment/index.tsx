import { memo, useState } from 'react';
import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';

// Constants
import { DEFAULT_IMAGE } from '@/constants';

// Utils
import { filterItem } from '@/utils';

// Hooks
import { useLikeComment } from '@/hooks';

interface CommentProps {
  userName: string;
  content: string;
  userId: number;
  commentId: number;
  likes: number[];
}

const Comment = memo(({ userName, content, userId, likes, commentId }: CommentProps) => {
  // Check if the user has liked the comment or not
  const isUserLiked = likes.includes(userId);
  const [isLike, setIsLike] = useState<boolean>(isUserLiked);

  const { mutate: updateComment } = useLikeComment(commentId);

  const handleLikeComment = () => {
    const newIsLike = !isLike;
    setIsLike(newIsLike);

    // If isLike is true then add userId into likes list else remove useId from likes list
    const userIds = newIsLike ? [...likes, userId] : filterItem(likes, userId);
    updateComment({ likes: userIds });
  };

  return (
    <Flex gap='10px'>
      <Avatar src={DEFAULT_IMAGE} />
      <Box>
        <Box bg='secondary' py='7px' px='15px' borderRadius='lg'>
          <Text fontWeight='semibold'>{userName}</Text>
          <Text>{content}</Text>
        </Box>
        <Flex alignItems='baseline'>
          {likes.length > 0 && <Text fontSize='tiny'>{likes.length}</Text>}
          <Button
            variant='action'
            px='5px'
            color={isLike ? 'primary' : 'text.label'}
            onClick={handleLikeComment}
          >
            like
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
});

export default Comment;
