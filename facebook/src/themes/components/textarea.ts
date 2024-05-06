import { defineStyleConfig } from '@chakra-ui/react';

export const Textarea = defineStyleConfig({
  variants: {
    default: {
      borderColor: 'white',
      _focus: {
        borderColor: 'white',
      },
    },
  },

  defaultProps: {
    variant: 'default',
  },
});
