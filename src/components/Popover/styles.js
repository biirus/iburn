export default ({
  palette,
  borderRadius,
  shadows,
  zIndex,
  transitions,
  spacing
}) => {
  return {
    root: {
      position: "absolute",
      top: 0,
      left: -999999,
      zIndex: zIndex.popover,

      transition: transitions.create(
        ["left"],
        "instant",
        "leaveWaiting",
        "linear"
      )
    },

    open: {
      left: 0,

      transition: transitions.create(["left"], "instant"),

      "& $inner": {
        opacity: 1,
        transform: `translateY(0)`,

        transition: transitions.create(
          ["transform", "opacity"],
          "enteringScreen"
        )
      }
    },

    inner: {
      backgroundColor: palette.backgrounds.default,
      boxShadow: shadows.medium,
      borderRadius,

      overflowY: "auto",
      overflowX: "hidden",

      opacity: 0,
      transform: `translateY(-${spacing.unit}px)`,

      transition: transitions.create(["transform", "opacity"], "leavingScreen")
    }
  };
};
