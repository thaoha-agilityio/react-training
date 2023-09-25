const buttonTheme = {
  baseStyle: {
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  sizes: {},
  variants: {
    solid: {
      color: 'white',
      background: 'yellow.250',
    },
    outline: {
      background: 'white',
      outlineColor: 'yellow.250',
      color: 'yellow.250',
      fontSize: 'sm',
      fontWeight: 'bold',
      lineHeight: 'xs',
    },
    colorPrimary: {
      borderRadius: '15px',
      outlineColor: 'gray.500',
      fontSize: 'md',
    },
  },
  defaultProps: {
    variant: 'outline',
  },
};

export default buttonTheme;
