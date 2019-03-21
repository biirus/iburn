export default ({ colors, typography, spacing }) => {
  const sizes = {
    xSmall: spacing.unit * 2,
    small: spacing.unit * 3,
    medium: spacing.unit * 4,
    large: spacing.unit * 5,
    xLarge: spacing.unit * 12,
    xxLarge: spacing.unit * 16,
  };

  const fontSizes = {
    xSmall: 6,
    small: 10,
    medium: 14,
    large: 18,
    xLarge: 40,
    xxLarge: 56,
  };

  return {
    /* Styles applied to the root element. */
    root: {
      color: colors.w700a,

      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      width: ({ size }) => sizes[size],
      height: ({ size }) => sizes[size],

      fontFamily: typography.body.fontFamily,
      lineHeight: 1,
      fontSize: ({ size }) => fontSizes[size],

      backgroundColor: ({ color }) => color || colors.n100,
      borderRadius: "50%",
    },

    /* Styles applied to the img element if either `src` or `srcSet` is defined. */
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  };
};
