import { Container, Flex } from '@chakra-ui/react';

// Components
import Posts from './Posts';
import CreatePost from './CreatePost';
import Advertisement from './Advertisement';

//
import withErrorBoundary from '@/hocs/withErrorBoundary';

const Home = () => (
  <Flex w='full' overflowY='auto'>
    <Container>
      <CreatePost />
      <Posts />
    </Container>
    <Advertisement />
  </Flex>
);

const HomPage = withErrorBoundary(Home);

export default HomPage;
