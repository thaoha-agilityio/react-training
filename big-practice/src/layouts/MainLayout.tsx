import { Outlet } from 'react-router-dom';

//  Components
import Footer from '@components/Footer';
import Header from '@components/Header';
import { Box } from '@chakra-ui/react';

const MainLayout = (): JSX.Element => (
  <>
    <Header />
    <Box minH='calc(100vh - 558px)'>
      <Outlet />
    </Box>
    <Footer />
  </>
);

export default MainLayout;
