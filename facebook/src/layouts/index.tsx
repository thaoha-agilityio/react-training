import { Outlet } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

// Components
import { Header, Sidebar } from '@/components';

const MainLayout = () => (
  <>
    <Header />
    <Flex bg='secondary'>
      {/* TODO: will handle get userName later*/}
      <Sidebar userName={'Pam'} />
      <Outlet />
    </Flex>
  </>
);

export default MainLayout;
