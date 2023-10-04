// Library
import { defineStyleConfig } from '@chakra-ui/react';

const textTheme = defineStyleConfig({
  baseStyle: {
    color: 'gray.600',
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
    title: {
      fontSize: { base: 'xl', md: '42px' },
    },
    detail: {
      fontSize: { base: 'xs', md: 'sm' },
      color: 'gray.150',
    },
  },

  defaultProps: {
    size: 'sm',
  },
});

export default textTheme;
