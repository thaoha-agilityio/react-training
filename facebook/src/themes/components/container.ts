import { defineStyleConfig } from '@chakra-ui/react';

export const Container = defineStyleConfig({
  sizes: {
    sm: {
      w: 'full',
      maxW: '650px',
    },
    md: {
      w: 'full',
      maxW: '1024px',
    },
  },
  defaultProps: {
    size: 'sm',
  },
});
