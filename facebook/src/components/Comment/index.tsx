import { memo } from 'react';
import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';

// Constants
import { DEFAULT_IMAGE } from '@/constants';

interface CommentProps {
  userName: string;
  content: string;
}

const Comment = memo(({ userName, content }: CommentProps) => {
  return (
    <Flex gap='10px'>
      <Avatar src={DEFAULT_IMAGE} />
      <Box>
        <Box bg='secondary' py='7px' px='15px' borderRadius='lg'>
          <Text fontWeight='semibold'>{userName}</Text>
          <Text>{content}</Text>
        </Box>
        <Button variant='action'>like</Button>
      </Box>
    </Flex>
  );
});

export default Comment;
