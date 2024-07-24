import { defineStyleConfig } from '@chakra-ui/react';

export const Textarea = defineStyleConfig({
  variants: {
    default: {
      borderColor: 'white',
      _focus: {
        borderColor: 'white',
      },
    },

    filled: {
      bg: 'secondary',
      borderRadius: 'lg',
      _focus: {
        borderColor: 'secondary',
        bg: 'secondary',
      },
    },
  },

  defaultProps: {
    variant: 'default',
  },
});
