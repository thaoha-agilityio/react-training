import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  variants: {
    default: {
      fontSize: 'md',
      fontWeights: 'normal',
      color: 'text.primary',
    },

    helper: {
      fontSize: 'tiny',
      color: 'text.helper',
    },
  },

  defaultProps: {
    variant: 'default',
  },
});
