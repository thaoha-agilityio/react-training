import { ReactNode } from 'react';
import { Box, Container } from '@chakra-ui/react';

const PageLayout = ({ children, h = '100%' }: { children: ReactNode; h?: string }) => {
  return (
    <>
      <Box h={h} minH={{ base: '0', md: 'calc(100vh - 1000px)' }}>
        <Container maxW='container.xl'>{children}</Container>
      </Box>
    </>
  );
};

export default PageLayout;
