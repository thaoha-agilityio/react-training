import { defineStyleConfig } from '@chakra-ui/react';

export const Container = defineStyleConfig({
  sizes: {
    sm: {
      w: 'full',
      maxW: '650px',
    },
  },
  defaultProps: {
    size: 'sm',
  },
});
