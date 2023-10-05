import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  cardAnatomy.keys,
);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    px: 'none',
    rounded: 'none',
    boxShadow: 'lg',
    cursor: 'pointer',
  },

  footer: {
    bg: 'gray.50',
  },
});

const sizes = {
  md: definePartsStyle({
    container: {
      borderRadius: '0px',
      w: { base: '180px', md: '285px' },
      h: { base: '340px', md: '446px' },
      // _hover: {
      //   opacity: 0.72,
      //   bg: 'gray.250',
      // },
    },
    body: {
      p: 'none',
      h: '301px',
    },
    footer: {
      px: '16px',
      py: '16px',
      h: '145px',
      fontSize: { base: 'xs', md: 'sm' },
      color: 'gray.250',
      fontWeight: 'bold',
    },
  }),
};

export default defineMultiStyleConfig({
  baseStyle,
  sizes,
});
