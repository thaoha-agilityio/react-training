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
      w: '285px',
      h: '446px',
      _hover: {
        opacity: 0.5,
      },
    },
    body: { p: 'none', h: '301px' },
    footer: {
      pt: '16px',
      h: '145px',
    },
  }),
};

export default defineMultiStyleConfig({
  baseStyle,
  sizes,
});
