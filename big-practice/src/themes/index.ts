// Libraries
import { extendTheme } from '@chakra-ui/react';

// Custom color palette
import colors from './colors';

import fontSizes from './fontSizes';
import fontWeights from './fontWeights';

// Custom theme of Component
import buttonTheme from './components/button';
import cardTheme from './components/card';
import inputTheme from './components/input';
import formLabelTheme from './components/formLabel';
import spinnerTheme from './components/spinner';

const CHAKRA_THEME = {
  ...extendTheme({
    components: {
      Button: buttonTheme,
      Card: cardTheme,
      Input: inputTheme,
      FormLabel: formLabelTheme,
      Spinner: spinnerTheme,
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
