const buttonTheme = {
  baseStyle: {
    fontWeight: 'normal',
    fontStyle: 'normal',
  },

  sizes: {
    //TODO:set width, height, padding
  },

  variants: {
    solid: {
      color: 'white',
      bg: 'yellow.250',
      fontSize: { base: 'xs', md: 'sm' },
      rounded: 'none',
      _hover: {
        bg: 'yellow.250',
      },
      _active: {
        bg: 'yellow.250',
      },
    },

    outline: {
      bg: 'white',
      borderColor: 'yellow.250',
      rounded: 'none',
      color: 'yellow.250',
      fontSize: 'sm',
      fontWeight: 'bold',
      lineHeight: 'xs',
      boxShadow: 'md',
      _hover: {
        bg: 'transparent',
      },
      _active: {
        bg: 'transparent',
      },
    },

    colorPrimary: {
      rounded: '10px',
      outlineColor: 'gray.500',
      fontSize: { base: 'sm', md: 'md' },
      w: { base: '100px', md: '200px' },
      h: { base: '35px', md: '60px' },
    },

    unstyled: {
      fontSize: { base: 'xs', md: 'sm' },
    },

    pagination: {
      w: '60px',
      h: '60px',
      fontSize: 'md',
      borderRadius: 'md',
      color: 'gray.600',
      bg: 'yellow.150',
      _active: {
        color: 'white',
        bg: 'yellow.250',
      },
    },
  },

  defaultProps: {
    variant: 'outline',
  },
};

export default buttonTheme;
