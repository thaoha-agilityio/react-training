import PageLayout from '@layouts/PageLayout';
import { Hero, BrowTheRange, FuniroFurniture, OurProducts } from './components';

export const Home = () => {
  return (
    <>
      <Hero />
      <PageLayout>
        <BrowTheRange />
        <OurProducts />
        <FuniroFurniture />
      </PageLayout>
    </>
  );
};
