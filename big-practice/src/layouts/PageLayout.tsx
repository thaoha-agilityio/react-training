import { memo } from 'react';
import { ContainerProps, Container } from '@chakra-ui/react';

const PageLayout = ({ children, h = '100%', ...rest }: ContainerProps) => (
  <Container maxW='container.xl' h={h} minH={{ base: '0', md: 'calc(100vh - 1000px)' }} {...rest}>
    {children}
  </Container>
);

export default memo(PageLayout);
