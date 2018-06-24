export default ({ spacing, transitions, colors }) => {
  return {
    root: {
      display: "flex",
      alignItems: "center",

      width: "100%",
      padding: [[spacing.small, spacing.medium]],
      whiteSpace: "nowrap",
      overflow: "hidden",

      lineHeight: 1,
      textOverflow: "ellipsis",

      transition: transitions.create(["background"], "shortest"),

      "&:hover": {
        cursor: "pointer",
        backgroundColor: colors.n20a
      }
    }
  };
};
