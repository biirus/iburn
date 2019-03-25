export default ({
  spacing,
  palette,
  shadows,
  typography,
  zIndex,
  transitions,
}) => {
  const iconSize = spacing.unit * 3;

  return {
    /* Style applied to the root element */
    root: {
      ...typography.h100,

      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: zIndex.flag,

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: spacing.medium,

      boxShadow: shadows.small,
      backgroundColor: palette.backgrounds.default,
      color: palette.text.primary,

      opacity: 0,
      transform: `translateY(-100%)`,

      transition: transitions.create(["opacity", "transform"], "leavingScreen"),
    },

    /* Style applied to the root element whenever state is open */
    open: {
      opacity: 1,
      transform: `translateY(0)`,

      transition: transitions.create(
        ["opacity", "transform"],
        "enteringScreen"
      ),
    },

    /* Style applied to the root element if `color="warning"` */
    warning: {
      backgroundColor: palette.messages.warning,
      color: palette.text.invert,

      "& $icon": {
        fill: palette.messages.warning,
      },
    },

    /* Style applied to the root element if `color="error"` */
    error: {
      backgroundColor: palette.messages.error,
      color: palette.text.invert,

      "& $icon": {
        fill: palette.messages.error,
      },
    },

    /* Style applied to the root element if `color="info"` */
    info: {
      backgroundColor: palette.messages.info,
      color: palette.text.invert,

      "& $icon": {
        fill: palette.messages.info,
      },
    },

    /* Style applied to the root element if `color="success"` */
    success: {
      backgroundColor: palette.messages.success,
      color: palette.text.invert,

      "& $icon": {
        fill: palette.messages.success,
      },
    },

    /* Style applied to the icon element */
    icon: {
      flex: `0 0 ${iconSize}px`,
      lineHeight: 0,
    },

    /* Style applied to the label element */
    label: {
      flex: `0 1 auto`,
      marginLeft: spacing.small / 2,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      lineHeight: `${iconSize}px`,
    },
  };
};
