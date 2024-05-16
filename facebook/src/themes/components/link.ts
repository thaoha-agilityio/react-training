import { defineStyleConfig } from '@chakra-ui/react';

export const Link = defineStyleConfig({
  variants: {
    default: {
      color: 'text.link',
      fontWeight: 'normal',
      fontSize: 'base',
      lineHeight: 'sm',
    },

    helper: {
      color: 'text.label',
      fontWeight: 'light',
      fontSize: 'tiny',
      lineHeight: 'sm',
    },
  },

  defaultProps: {
    variant: 'default',
  },
});
