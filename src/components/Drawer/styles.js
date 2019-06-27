export default ({ zIndex, transitions, shadows, colors, palette }) => {
  return {
    /** Styles applied to the `root` element */
    root: {
      position: "fixed",
      top: 0,
      left: -999999,
      width: "100vw",
      height: "100vh",
      zIndex: zIndex.overlay,

      transition: transitions.create(["left"], "instant", "leaveWaiting"),

      "&$open": {
        left: 0,
        transition: transitions.create(["left"], "instant"),
      },
    },

    /** Styles for the `Drawer` content */
    content: {
      position: "fixed",
      top: 0,
      height: "100vh",
      zIndex: zIndex.drawer,
      overflow: "auto",

      backgroundColor: palette.backgrounds.panel,
      boxShadow: shadows.large,
      transition: transitions.create(["transform"], "leavingScreen"),

      "&$fromLeft": {
        left: 0,
        transform: "translateX(-150%)",
      },

      "&$fromRight": {
        right: 0,
        transform: "translateX(150%)",
      },

      "&$open": {
        transform: "translateX(0)",
        transition: transitions.create(["transform"], "enteringScreen"),
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

    /** Styles applied when `isOpen={true}` */
    open: {},

    /** Styles applied when `position="left"` */
    fromLeft: {},

    /** Styles applied when `position="right"` */
    fromRight: {},
  };
};
