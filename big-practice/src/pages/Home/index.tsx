import Container from '@components/Container';
import { Hero, BrowTheRange, Adverse, OurProducts } from './components';

const Home = () => {
  return (
    <>
      <Hero />
      <Container>
        <BrowTheRange />
        <OurProducts />
        <Adverse />
      </Container>
    </>
  );
};

export default Home;
