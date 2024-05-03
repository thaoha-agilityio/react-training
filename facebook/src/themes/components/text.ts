import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  variants: {
    default: {
      fontSize: 'md',
      fontWeights: 'normal',
      text: 'text.primary',
    },
  },

  defaultProps: {
    variant: 'default',
  },
});
