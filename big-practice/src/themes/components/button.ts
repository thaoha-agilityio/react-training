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
      bg: 'primary.250',
      fontSize: { base: 'xs', md: 'sm' },
      rounded: 'none',
      _hover: {
        bg: 'primary.250',
      },
      _active: {
        bg: 'primary.250',
      },
    },

    outline: {
      bg: 'white',
      borderColor: 'primary.250',
      rounded: 'none',
      color: 'primary.250',
      fontSize: { base: 'xs', md: 'sm' },
      fontWeight: 'bold',
      lineHeight: 'xs',
      boxShadow: 'md',
      _hover: {
        bg: 'white',
      },
      _active: {
        bg: 'white',
      },
    },

    colorPrimary: {
      rounded: '10px',
      outlineColor: 'secondary.500',
      fontSize: { base: 'sm', md: 'md' },
      w: { base: '100px', md: '200px' },
      h: { base: '35px', md: '60px' },
    },

    unstyled: {
      fontSize: { base: '11px', md: 'sm' },
    },

    pagination: {
      w: '60px',
      h: '60px',
      fontSize: 'md',
      borderRadius: 'md',
      color: 'secondary.600',
      bg: 'primary.150',
      _active: {
        color: 'white',
        bg: 'primary.250',
      },
    },
  },

  defaultProps: {
    variant: 'outline',
  },
};

export default buttonTheme;
