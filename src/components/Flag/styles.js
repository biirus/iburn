export default ({
  zIndex,
  transitions,
  palette,
  shadows,
  borderRadius,
  spacing,
}) => {
  return {
    root: {
      position: "fixed",

      maxWidth: spacing.unit * 50,
      margin: spacing.large,
      zIndex: zIndex.flag,

      "&$fromLeft": {
        left: -999999,
        transition: transitions.create(
          ["left",],
          "instant",
          "leaveWaiting",
          "linear"
        ),
      },

      "&$fromRight": {
        right: -999999,
        transition: transitions.create(
          ["right",],
          "instant",
          "leaveWaiting",
          "linear"
        ),
      },
    },

    open: {
      "&$fromLeft": {
        transition: transitions.create(["left",], "instant"),
      },

      "&$fromRight": {
        transition: transitions.create(["right",], "instant"),
      },

      "& $inner": {
        opacity: 1,
        transform: `translateX(0) !important`,

        transition: transitions.create(
          ["transform", "opacity",],
          "enteringScreen"
        ),
      },
    },

    inner: {
      padding: spacing.medium,

      backgroundColor: palette.backgrounds.default,
      boxShadow: shadows.large,
      borderRadius,

      overflowY: "auto",
      overflowX: "hidden",

      opacity: 0,
      transition: transitions.create(["transform", "opacity",], "leavingScreen"),

      "&$fromLeft": {
        transform: `translateX(-100%)`,
      },

      "&$fromRight": {
        transform: `translateX(100%)`,
      },
    },

    fromLeft: {},
    fromRight: {},
  };
};
