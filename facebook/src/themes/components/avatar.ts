import { defineStyleConfig } from '@chakra-ui/react';

export const Avatar = defineStyleConfig({
  variants: {
    default: {
      container: {
        width: '40px',
        height: '40px',
      },
    },
  },

  defaultProps: {
    variant: 'default',
  },
});
