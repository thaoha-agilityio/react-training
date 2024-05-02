import { defineStyleConfig } from '@chakra-ui/react';

export const Radio = defineStyleConfig({
  variants: {
    default: {
      container: {
        flexDir: 'row-reverse',
        gap: 8,
        border: '0.5px solid',
        borderColor: 'input.borderColor',
        borderRadius: 'xs',
        py: '8px',
        px: '5px',
      },

      label: {
        fontSize: 'md',
        color: 'text.radio',
      },
    },
  },

  defaultProps: {
    variant: 'default',
  },
});
