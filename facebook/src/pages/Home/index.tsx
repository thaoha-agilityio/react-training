import { Container } from '@chakra-ui/react';

// Components
import Posts from './Posts';
import CreatePost from './CreatePost';

const Home = () => {
  return (
    <Container>
      <CreatePost />
      <Posts />
    </Container>
  );
};

export default Home;
