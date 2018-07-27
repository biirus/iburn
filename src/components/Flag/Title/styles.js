export default ({ spacing, palette, }) => {
  const defaultBackground = palette.backgrounds.default;

  return {
    root: {
      display: "flex",
      height: spacing.unit * 4,
      alignItems: "center",
      marginBottom: spacing.small,

      backgroundColor: defaultBackground,
    },

    warning: {
      "& $icon": {
        color: palette.messages.warning,
        fill: defaultBackground,
      },
    },

    success: {
      "& $icon": {
        color: palette.messages.success,
        fill: defaultBackground,
      },
    },

    danger: {
      "& $icon": {
        color: palette.messages.error,
        fill: defaultBackground,
      },
    },

    info: {
      "& $icon": {
        color: palette.messages.info,
        fill: defaultBackground,
      },
    },

    icon: {
      display: "inline-flex",
      flex: "0 0 auto",
      width: spacing.unit * 5,
      lineHeight: 1,
    },

    label: {
      flex: "1 1 0%",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },

    close: {
      display: "inline-flex",
      flex: "0 0 auto",
      width: 16,
      height: 16,
      lineHeight: 1,
      cursor: "pointer",
    },
  };
};
