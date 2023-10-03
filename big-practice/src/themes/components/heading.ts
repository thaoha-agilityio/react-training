import { defineStyleConfig } from '@chakra-ui/react';

const headingTheme = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
  },

  variants: {
    primary: {
      fontSize: { base: 'lg', md: '3xl' },
      fontWeight: 'bolder',
    },
    secondary: {
      fontSize: { base: 'base', md: 'lg' },
    },
    tertiary: {
      fontSize: { base: 'xxl', md: '2xl' },
    },
  },
});

export default headingTheme;
