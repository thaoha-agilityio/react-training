import { Container, Flex } from '@chakra-ui/react';

// Components
import Posts from './Posts';
import CreatePost from './CreatePost';
import Advertisement from './Advertisement';

const Home = () => (
  <Flex w='full'>
    <Container overflowY='auto'>
      <CreatePost />
      <Posts />
    </Container>
    <Advertisement />
  </Flex>
);

export default Home;
