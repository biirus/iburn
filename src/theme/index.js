import zIndex from "./z-index";
import colors from "./colors";
import shadows from "./shadows";
import spacing from "./spacing";
import transitions from "./transitions";

import createPalette from "./palette/create";
import createTypography from "./typography/create";

const palette = createPalette(colors);
const typography = createTypography(palette);

const borderRadius = 3;

const theme = {
  zIndex,
  colors,
  shadows,
  spacing,
  palette,
  typography,
  transitions,
  borderRadius,
};

export default theme;
