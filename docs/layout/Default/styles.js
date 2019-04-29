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

      height: "100vh",
      overflow: "auto",

      display: "grid",
      gridTemplateRows: `[navigationHeader] ${navigationHeaderHeight}px [navigationContent] 1fr`,
      gridGap: `${spacing.medium}px`,
      padding: [[0, spacing.medium]],
      backgroundColor: palette.backgrounds.panel,
    },

    main: {
      gridColumn: "content",
      height: "100vh",
      overflow: "auto",
      width: "100%",
      justifySelf: "center",
    },

    content: {
      maxWidth: 960 + contentPadding * 2,
      padding: [[0, contentPadding, contentPadding]],
      margin: "0 auto",
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
