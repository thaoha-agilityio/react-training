// Libraries
import { extendTheme } from '@chakra-ui/react';

// Custom color palette
import colors from './colors';

import fontSizes from './fontSizes';
import fontWeights from './fontWeights';

// Custom theme of Component
import buttonTheme from './components/button';

const CHAKRA_THEME = {
  ...extendTheme({
    components: {
      Button: buttonTheme,
    },
    colors: colors,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
  }),
  styles: {
    global: {
      'html, body': {
        fontFamily: 'body',
      },
    },
  },
};

export default CHAKRA_THEME;
