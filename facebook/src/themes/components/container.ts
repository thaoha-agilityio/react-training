import { defineStyleConfig } from '@chakra-ui/react';

export const Container = defineStyleConfig({
  baseStyle: {
    w: 'full',
  },
  sizes: {
    sm: {
      maxW: '650px',
    },
    md: {
      maxW: '1024px',
    },
    lg: {
      maxW: '1440px',
    },
  },
  defaultProps: {
    size: 'sm',
  },
});
