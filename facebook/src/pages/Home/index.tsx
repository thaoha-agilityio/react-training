import { Container, Flex } from '@chakra-ui/react';

// Components
import Posts from './Posts';
import CreatePost from './CreatePost';
import Absence from './Absence';

const Home = () => {
  return (
    <Flex w='full'>
      <Container overflowY='auto'>
        <CreatePost />
        <Posts />
      </Container>
      <Absence />
    </Flex>
  );
};

export default Home;
