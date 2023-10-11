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
      fontSize: { base: 'md', md: 'xl' },
    },
    detail: {
      fontSize: { base: 'xs', md: 'sm' },
      color: 'gray.150',
    },
    cart: {
      fontSize: { base: 'xs', md: 'sm' },
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      w: { base: '30px', md: '100px' },
    },
  },

  defaultProps: {
    size: 'sm',
  },
});

export default textTheme;
