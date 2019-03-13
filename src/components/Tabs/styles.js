export default theme => {
  const tabLabelXPadding = theme.spacing.medium;
  const borderWidth = 2;

  return {
    root: {
      // overflowX: "hidden",
    },

    tabsHeader: {
      position: "relative",
      display: "flex",
      margin: [[0, -tabLabelXPadding, theme.spacing.medium]],
      borderBottom: `${borderWidth}px solid transparent`,

      "&::after": {
        content: `""`,
        position: "absolute",
        zIndex: 1,
        bottom: -borderWidth,
        left: tabLabelXPadding,
        height: borderWidth,
        width: `calc(100% - ${tabLabelXPadding * 2}px)`,
        backgroundColor: theme.colors.n30,
        borderRadius: 2,
      },
    },

    tabLabel: {
      position: "relative",
      padding: [[tabLabelXPadding / 4, tabLabelXPadding]],
      cursor: "pointer",
      fontWeight: 500,
    },

    disabled: {
      opacity: 0.6,
      pointerEvents: "none",
    },

    selected: {
      color: theme.palette.primary,

      "&::after": {
        content: `""`,
        position: "absolute",
        zIndex: 2,
        bottom: -borderWidth,
        left: tabLabelXPadding,
        height: borderWidth,
        width: `calc(100% - ${tabLabelXPadding * 2}px)`,
        backgroundColor: theme.palette.primary,
        borderRadius: 2,
      },
    },

    tabsContent: {
      display: "none",
    },

    visible: {
      display: "block",
    },
  };
};
