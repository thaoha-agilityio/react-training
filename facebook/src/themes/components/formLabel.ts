import { defineStyleConfig } from '@chakra-ui/react';

export const FormLabel = defineStyleConfig({
  variants: {
    default: {
      fontSize: 'tiny',
      fontWeight: 'normal',
      color: 'text.label',
    },
  },

  defaultProps: {
    variant: 'default',
  },
});
