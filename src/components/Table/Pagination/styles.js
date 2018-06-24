export default ({ spacing, palette }) => {
  return {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%"
    },

    current: {
      color: palette.text.primary,
      pointerEvents: "none"
    },

    ellipsis: {
      color: palette.text.primary,
      pointerEvents: "none"
    },

    pageSizeControl: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gridGap: `${spacing.medium}px`,
      alignItems: "center"
    },

    pageSizeSelectors: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: `${spacing.small}px`
    },

    pages: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gridGap: `${spacing.large}px`,
      alignItems: "center",
      justifyItems: "end"
    }
  };
};
