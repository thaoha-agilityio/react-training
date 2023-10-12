import { memo } from 'react';
import { ContainerProps, Container as ChakraContainer } from '@chakra-ui/react';

const Container = ({ children, h = '100%', ...rest }: ContainerProps) => (
  <ChakraContainer
    maxW='container.xl'
    h={h}
    minH={{ base: '0', md: 'calc(100vh - 1000px)' }}
    {...rest}
  >
    {children}
  </ChakraContainer>
);

export default memo(Container);
