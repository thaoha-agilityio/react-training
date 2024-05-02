// Libs
import { defineStyleConfig } from '@chakra-ui/react';

export const Input = defineStyleConfig({
  baseStyle: {
    field: {
      lineHeight: 'sm',
      fontWeight: 'normal',
      w: '100%',
      _invalid: {
        color: 'error',
      },
    },
  },

  variants: {
    primary: {
      field: {
        fontSize: '17px',
        borderRadius: 'sm',
        padding: '14px 16px',
        border: '0.5px solid',
        borderColor: 'input.borderColor',
        _placeholder: { color: 'input.primaryPlaceholder', fontSize: 'md' },
        _focus: {
          borderColor: 'primary',
        },
      },
    },

    secondary: {
      field: {
        borderRadius: 'xs',
        bg: 'background.input',
        fontSize: 'md',
        padding: 11,
        border: '0.5px solid',
        borderColor: 'input.borderColor',
        _placeholder: { color: 'input.secondaryPlaceholder', fontSize: 'base' },
        _focus: {
          borderColor: 'primary',
        },
      },
    },

    filled: {
      field: {
        borderRadius: 'xl',
        bg: 'secondary',
        fontSize: 'md',
        _placeholder: { color: 'input.secondaryPlaceholder', fontSize: 'base' },
      },
    },
  },

  defaultProps: {
    variant: 'secondary',
    size: 'lg',
  },
});
