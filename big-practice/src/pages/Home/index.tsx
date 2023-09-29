import PageLayout from '@layouts/PageLayout';
import { Hero, BrowTheRange, Adverse, OurProducts } from './components';

export const Home = () => {
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
