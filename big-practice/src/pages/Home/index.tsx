import PageLayout from '@layouts/PageLayout';
import { Hero, BrowTheRange, Adverse, OurProducts } from './components';

const Home = () => {
  return (
    <>
      <Hero />
      <PageLayout>
        <BrowTheRange />
        <OurProducts />
        <Adverse />
      </PageLayout>
    </>
  );
};

export default Home;
