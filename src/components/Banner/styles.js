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

      transition: transitions.create(["opacity", "transform",], "leavingScreen"),
    },

    open: {
      opacity: 1,
      transform: `translateY(0)`,

      transition: transitions.create(
        ["opacity", "transform",],
        "enteringScreen"
      ),
    },

    warning: {
      backgroundColor: palette.messages.warning,
      color: palette.text.invert,

      "& $icon": {
        fill: palette.messages.warning,
      },
    },

    error: {
      backgroundColor: palette.messages.error,
      color: palette.text.invert,

      "& $icon": {
        fill: palette.messages.error,
      },
    },

    info: {
      backgroundColor: palette.messages.info,
      color: palette.text.invert,

      "& $icon": {
        fill: palette.messages.info,
      },
    },

    success: {
      backgroundColor: palette.messages.success,
      color: palette.text.invert,

      "& $icon": {
        fill: palette.messages.success,
      },
    },

    icon: {
      flex: `0 0 ${iconSize}px`,
      lineHeight: 0,
    },

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
