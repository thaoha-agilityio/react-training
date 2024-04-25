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
        borderColor: 'secondary.100',
        color: 'secondary.250',
        borderRadius: '10px',
      },
    },
  },

  baseStyle: {
    field: {
      px: '20px',
      h: { base: '50px', md: '75px' },
      _placeholder: {
        color: 'secondary.100',
        fontSize: { base: 'xs', md: 'tiny' },
      },
      _invalid: {
        color: 'error.400',
      },
    },
  },

  defaultProps: {
    size: 'default',
    variant: 'outline',
  },
};

export default inputTheme;
