import { Outlet } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

// Components
import { Header, Sidebar } from '@/components';
import { useAuthStore } from '@/stores';

const MainLayout = () => {
  const user = useAuthStore((state) => state.user);
  const { firstName, surname } = user || {};

  return (
    <>
      <Header />
      <Flex bg='secondary'>
        {/* TODO: will handle get userName later*/}
        <Sidebar userName={`${firstName} ${surname}`} />
        <Outlet />
      </Flex>
    </>
  );
};

export default MainLayout;
