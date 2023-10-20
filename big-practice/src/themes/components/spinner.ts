import { defineStyleConfig } from '@chakra-ui/react';

const spinnerTheme = defineStyleConfig({
  baseStyle: {
    color: 'secondary.200',
    m: 'auto',
  },
  variants: {
    primary: {
      borderWidth: 2,
      speed: '0.8s',
    },
    secondary: {
      color: 'primary.250',
      size: 'xl',
    },
  },
});

export default spinnerTheme;
