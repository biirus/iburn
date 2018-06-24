export default theme => {
  const tabTitleXPadding = theme.spacing.small;
  const borderWidth = 2;

  return {
    root: {
      // overflowX: "hidden",
    },

    tabsHeader: {
      position: "relative",
      display: "flex",
      margin: [[0, -tabTitleXPadding, theme.spacing.medium]],
      borderBottom: `${borderWidth}px solid transparent`,

      "&::after": {
        content: `""`,
        position: "absolute",
        zIndex: 1,
        bottom: -borderWidth,
        left: tabTitleXPadding,
        height: borderWidth,
        width: `calc(100% - ${tabTitleXPadding * 2}px)`,
        backgroundColor: theme.colors.n30,
        borderRadius: 2
      }
    },

    tabTitle: {
      position: "relative",
      padding: [[tabTitleXPadding / 2, tabTitleXPadding]],
      cursor: "pointer",
      fontWeight: 500
    },

    disabled: {
      opacity: 0.6,
      pointerEvents: "none"
    },

    selected: {
      color: theme.palette.primary,

      "&::after": {
        content: `""`,
        position: "absolute",
        zIndex: 2,
        bottom: -borderWidth,
        left: tabTitleXPadding,
        height: borderWidth,
        width: `calc(100% - ${tabTitleXPadding * 2}px)`,
        backgroundColor: theme.palette.primary,
        borderRadius: 2
      }
    },

    tabsContent: {
      display: "none"
    },

    visible: {
      display: "block"
    }
  };
};
