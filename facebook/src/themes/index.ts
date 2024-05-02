import { extendTheme } from "@chakra-ui/react";

// Colors
import { colors } from "./colors";

// Metrics
import { fontSizes, fontWeights, radius, lineHeights } from "./metrics";

// Fonts
import { fonts } from "./fonts";

export const theme = extendTheme({
  colors,
  fontSizes,
  fontWeights,
  radii: radius,
  fonts,
  lineHeights,
});
