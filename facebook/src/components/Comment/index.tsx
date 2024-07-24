import { memo, useState, useEffect } from 'react';
import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';

// Constants
import { DEFAULT_IMAGE } from '@/constants';

// Utils
import { filterItem } from '@/utils';

interface CommentProps {
  userName: string;
  content: string;
  commentId: number;
  currentUser: number;
  likes: number[];
  onLikeComment: (likes: number[], id: number) => void;
}

const Comment = memo(
  ({ userName, content, likes, currentUser, commentId, onLikeComment }: CommentProps) => {
    // Check if the user has liked the comment or not
    const isUserLiked = likes.includes(currentUser);
    const [isLike, setIsLike] = useState<boolean>(isUserLiked);

    useEffect(() => {
      setIsLike(isUserLiked);
    }, [isUserLiked]);

    const handleLikeComment = () => {
      const newIsLike = !isLike;
      setIsLike(newIsLike);

      // If isLike is true then add userId into likes list else remove useId from likes list
      const userIds = newIsLike ? [...likes, currentUser] : filterItem(likes, currentUser);
      onLikeComment(userIds, commentId);
    };

    return (
      <Flex gap='10px'>
        <Avatar src={DEFAULT_IMAGE} name='avatar' />
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
  },
);

export default Comment;
