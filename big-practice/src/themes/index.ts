// Libraries
import { extendTheme } from '@chakra-ui/react';

// Custom color palette
import colors from './colors';

import fontSizes from './fontSizes';
import fontWeights from './fontWeights';
import radius from './radius';
import fonts from './fonts';

// Custom theme of Component
import buttonTheme from './components/button';
import cardTheme from './components/card';
import inputTheme from './components/input';
import formLabelTheme from './components/formLabel';
import spinnerTheme from './components/spinner';
import formErrorTheme from './components/formError';
import textTheme from './components/text';
import headingTheme from './components/heading';

const CHAKRA_THEME = {
  ...extendTheme({
    components: {
      Button: buttonTheme,
      Card: cardTheme,
      Input: inputTheme,
      FormLabel: formLabelTheme,
      FormError: formErrorTheme,
      Spinner: spinnerTheme,
      Text: textTheme,
      Heading: headingTheme,
    },
    colors: colors,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    fonts: fonts,
    radii: radius,
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
