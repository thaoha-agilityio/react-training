import { Box, Text, Image, Stack, Container, Flex, Button } from '@chakra-ui/react';

// Components
import UserProfile from '../UserProfile';
import { CommentIcon, LikeIcon, ShareIcon } from '../Icons';

// Constants
import { PLACEHOLDER_IMAGE } from '@/constants';

interface PostProps {
  userName: string;
  content: string;
  image: string;
}

const Post = ({ userName, content, image }: PostProps) => {
  return (
    <Container>
      <Stack
        spacing='15px'
        py='10px'
        borderRadius='md'
        boxShadow='0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)'
      >
        <Box pl='15px'>
          <UserProfile userName={userName} />
        </Box>
        <Text pl='15px'>{content}</Text>
        <Box w='618px' h='533px'>
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
      </Stack>
    </Container>
  );
};

export default Post;
