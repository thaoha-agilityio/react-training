// Library
import { defineStyleConfig } from '@chakra-ui/react';

const textTheme = defineStyleConfig({
  baseStyle: {
    color: 'gray.500',
  },

  variants: {
    primary: {
      fontSize: { base: 'xs', md: 'sm' },
      fontWeight: 'medium',
    },
    secondary: {
      fontSize: { base: 'base', md: 'lg' },
      color: 'gray.500',
    },
    tertiary: {
      fontSize: { base: 'sm', md: 'md' },
      color: 'gray.200',
    },
  },

  defaultProps: {
    size: 'sm',
  },
});

export default textTheme;
