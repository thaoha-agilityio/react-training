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
      fontSize: 'md',
    },
  },

  defaultProps: {
    variant: 'outline',
  },
};

export default buttonTheme;
