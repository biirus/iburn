export default ({
  transitions,
  zIndex,
  colors,
  palette,
  shadows,
  spacing,
  borderRadius,
}) => {
  return {
    /** Styles applied to the `root` element */
    root: {
      position: "fixed",
      top: 0,
      left: -99999,
      width: "100vw",
      height: "100vh",
      zIndex: zIndex.overlay,

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      transition: transitions.create(
        ["left"],
        "instant",
        "leaveWaiting",
        "linear"
      ),

      "&$open": {
        left: 0,

        transition: transitions.create(["left"], "instant"),
      },
    },

    /** Styles applied to the `overlay` element */
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: zIndex.overlay,

      opacity: 0,
      background: colors.n100a,
      transition: transitions.create(["opacity"], "leavingScreen"),

      "&$open": {
        opacity: 1,
        transition: transitions.create(["opacity"], "enteringScreen"),
      },
    },

    /** Styles for the wrapper of inner content */
    inner: {
      position: "relative",
      zIndex: zIndex.dialog,
      display: "grid",
      gridTemplateRows: "auto 1fr auto",
      maxHeight: "90vh",
      maxWidth: "90vw",

      opacity: 0,
      background: palette.backgrounds.default,
      boxShadow: shadows.medium,
      borderRadius,

      transform: `translateY(${-spacing.large}px)`,
      transition: transitions.create(["opacity", "transform"], "leavingScreen"),

      "&$open": {
        opacity: 1,
        transform: `translateY(0px)`,
        transition: transitions.create(
          ["opacity", "transform"],
          "enteringScreen"
        ),
      },
    },

    /** Styles applied to the `inner` element when `size=small` */
    small: {
      width: spacing.unit * 50,
    },

    /** Styles applied to the `inner` element when `size=medium` */
    medium: {
      width: spacing.unit * 75,
    },

    /** Styles applied to the `inner` element when `size=large` */
    large: {
      width: spacing.unit * 100,
    },

    /** Styles applied to the `root`, `overlay` and `inner` elements when `Dialog` is open */
    open: {},
  };
};
