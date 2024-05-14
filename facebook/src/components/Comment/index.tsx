import { memo } from 'react';
import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';

// Types
import { IComment } from '@/types';

// Constants
import { DEFAULT_IMAGE } from '@/constants';

interface CommentProps {
  comment: IComment;
}

const Comment = memo(({ comment }: CommentProps) => {
  const { author, content } = comment || {};

  return (
    <Flex gap='10px'>
      <Avatar src={DEFAULT_IMAGE} />
      <Box>
        <Box bg='secondary' py='7px' px='15px' borderRadius='lg'>
          {/* TODO: will handle get userName by author */}
          <Text fontWeight='semibold'>{author}</Text>
          <Text>{content}</Text>
        </Box>
        <Button variant='action'>like</Button>
      </Box>
    </Flex>
  );
});

export default Comment;
