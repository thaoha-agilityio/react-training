const inputTheme = {
  sizes: {
    default: {
      field: {
        fontWeight: 'normal',
        fontSize: { base: 'xs', md: 'sm' },
      },
    },
  },
  variants: {
    outline: {
      field: {
        borderColor: 'gray.100',
        color: 'gray.250',
        borderRadius: '10px',
      },
    },
  },
  baseStyle: {
    field: {
      px: '20px',
      h: '75px',
      _placeholder: {
        color: 'gray.100',
      },
      _invalid: {
        color: 'red.400',
      },
    },
  },

  defaultProps: {
    size: 'default',
    variant: 'outline',
  },
};

export default inputTheme;
