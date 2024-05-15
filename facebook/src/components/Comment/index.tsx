import { memo, useEffect, useState } from 'react';
import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';

// Constants
import { DEFAULT_IMAGE } from '@/constants';
import { filterItem } from '@/utils';
import { useLikeComment } from '@/hooks';

interface CommentProps {
  userName: string;
  content: string;
  userId: number;
  commentId: number;
  likes: number[];
}

const Comment = memo(({ userName, content, userId, likes, commentId }: CommentProps) => {
  const isCheck = likes.includes(userId);
  console.log('first', isCheck);

  // Check if the user has liked the post or not
  const [isLike, setIsLike] = useState<boolean>(isCheck);
  const [isAction, setIsAction] = useState(false);

  const handleLikeComment = () => {
    setIsLike((prev) => !prev);
    setIsAction(true);
  };

  const { mutate: updateComment } = useLikeComment(commentId);

  useEffect(() => {
    if (!isAction) return;

    // If isLike is true then add userId into likes list else remove useId from likes list
    const userIds = isLike ? [...likes, userId] : filterItem(likes, userId);
    updateComment({ likes: userIds });

    setIsAction(false);
  }, [isAction, isLike, likes, updateComment, userId]);

  return (
    <Flex gap='10px'>
      <Avatar src={DEFAULT_IMAGE} />
      <Box>
        <Box bg='secondary' py='7px' px='15px' borderRadius='lg'>
          <Text fontWeight='semibold'>{userName}</Text>
          <Text>{content}</Text>
        </Box>
        {likes.length > 0 && <Text>{likes.length}</Text>}
        <Button
          variant='action'
          color={isLike ? 'primary' : 'text.label'}
          onClick={handleLikeComment}
        >
          like
        </Button>
      </Box>
    </Flex>
  );
});

export default Comment;
