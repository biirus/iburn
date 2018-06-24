export default ({ spacing, palette, typography, zIndex, transitions }) => {
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

      opacity: 0,
      transform: `translateY(-100%)`,

      transition: transitions.create(["opacity", "transform"], "leavingScreen")
    },

    open: {
      opacity: 1,
      transform: `translateY(0)`,

      transition: transitions.create(["opacity", "transform"], "enteringScreen")
    },

    warning: {
      backgroundColor: palette.messages.warning,
      color: palette.text.invert,

      "& $icon": {
        fill: palette.messages.warning
      }
    },

    error: {
      backgroundColor: palette.messages.error,
      color: palette.text.invert,

      "& $icon": {
        fill: palette.messages.error
      }
    },

    info: {
      backgroundColor: palette.messages.info,
      color: palette.text.invert,

      "& $icon": {
        fill: palette.messages.info
      }
    },

    success: {
      backgroundColor: palette.messages.success,
      color: palette.text.invert,

      "& $icon": {
        fill: palette.messages.success
      }
    },

    icon: {
      flex: `0 0 ${spacing.unit * 3}px`
    },

    label: {
      flex: `0 1 auto`,
      marginLeft: spacing.small / 2,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  };
};
