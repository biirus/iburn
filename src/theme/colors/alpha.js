import color from "color";

const alpha = {
  10: 0.02,
  20: 0.04,
  30: 0.08,
  40: 0.13,
  50: 0.25,
  60: 0.31,
  70: 0.36,
  80: 0.42,
  90: 0.48,
  100: 0.54,
  200: 0.6,
  300: 0.66,
  400: 0.71,
  500: 0.77,
  600: 0.82,
  700: 0.89,
  800: 0.95,
};

const getAlphaColor = (baseColor, alpha) =>
  color(baseColor)
    .alpha(alpha)
    .toString();

const getColorsMap = (prefix, baseColor) => {
  return Object.keys(alpha).reduce((acc, key) => {
    return {
      ...acc,
      [`${prefix}${key}a`]: getAlphaColor(baseColor, alpha[key]),
    };
  }, {});
};

export default (neutral, brand) => {
  return {
    ...getColorsMap("n", neutral.n900),
    ...getColorsMap("b", brand.b75),
    ...getColorsMap("w", neutral.n0),
  };
};
