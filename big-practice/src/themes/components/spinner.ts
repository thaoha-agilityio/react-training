import { defineStyleConfig } from '@chakra-ui/react';

const spinnerTheme = defineStyleConfig({
  baseStyle: {
    color: 'gray.200',
    m: 'auto',
  },
  variants: {
    primary: {
      borderWidth: 2,
      speed: '0.8s',
    },
    secondary: {
      color: 'yellow.250',
      size: 'xl',
    },
  },
});

export default spinnerTheme;
