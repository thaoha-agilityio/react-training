import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'normal',
    fontStyle: 'normal',
    textTransform: 'capitalize',
  },

  variants: {
    primary: {
      color: 'white',
      bg: 'primary',
      fontSize: 'md',
      rounded: 'sm',
      lineHeight: 'md',
      _hover: {
        bg: 'button.primaryHoverBg',
        _disabled: {
          bg: 'background.secondary',
        },
      },
      _active: {
        bg: 'primary',
      },
      _disabled: {
        bg: 'background.secondary',
      },
    },

    secondary: {
      bg: 'button.secondary',
      rounded: 'sm',
      color: 'white',
      fontSize: 'lg',
      fontWeight: 'bold',
      lineHeight: 'xs',
      _hover: {
        bg: 'background.active',
        _disabled: {
          bg: 'background.secondary',
        },
      },
      _active: {
        bg: 'button.secondary',
      },
    },

    cancel: {
      bg: 'button.charcoal',
      rounded: 'sm',
      color: 'text.primary',
      fontSize: 'md',
      fontWeight: 'bold',
      _hover: {
        bg: 'background.secondary',
      },
    },

    unstyled: {
      color: 'text.label',
      bg: 'none',
      fontSize: 'md',
      fontWeight: 'bold',
      _hover: {
        bg: 'button.charcoal',
        rounded: 'sm',
      },
    },

    icon: {
      width: '40px',
      height: '40px',
      bg: 'button.charcoal',
      borderRadius: 'full',

      _hover: {
        bg: 'button.iconHoverBg',
        _disabled: {
          bg: 'background.secondary',
        },
      },
    },
  },

  defaultProps: {
    variant: 'primary',
  },
});
