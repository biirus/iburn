export default ({ spacing, palette }) => {
  const navigationWidth = spacing.unit * 30;
  const navigationHeaderHeight = spacing.unit * 8;
  const contentPadding = spacing.large * 1.5;

  return {
    root: {
      display: "grid",
      gridTemplateColumns: `[navigation] ${navigationWidth}px [content] 1fr`,
      minHeight: "100vh",
    },

    navigation: {
      gridColumn: "navigation",

      display: "grid",
      gridTemplateRows: `[navigationHeader] ${navigationHeaderHeight}px [navigationContent] 1fr`,
      gridGap: `${spacing.medium}px`,
      padding: [[0, spacing.medium]],
      backgroundColor: palette.backgrounds.panel,
    },

    content: {
      gridColumn: "content",
      maxWidth: 960 + contentPadding * 2,
      width: "100%",
      padding: [[0, contentPadding]],
      justifySelf: "center",
    },

    navigationHeader: {
      gridRow: "navigationHeader",
      alignSelf: "center",
    },

    navgationContent: {
      gridRow: "navigationContent",
    },
  };
};
