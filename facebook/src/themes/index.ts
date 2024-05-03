import { extendTheme } from '@chakra-ui/react';

// Colors
import { colors } from './colors';

// Metrics
import { fontSizes, fontWeights, radius, lineHeights } from './metrics';

// Fonts
import { fonts } from './fonts';

// Components
import * as components from './components';

export const theme = extendTheme({
  components: {
    ...components,
  },

  colors,
  fontSizes,
  fontWeights,
  radii: radius,
  fonts,
  lineHeights,
});
