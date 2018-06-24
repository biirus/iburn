export default ({ spacing, transitions, colors }) => {
  return {
    root: {
      width: "100%",
      padding: [[spacing.small / 2, spacing.small * 1.5]],
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: transitions.create(["background"], "shortest"),

      "&:hover": {
        cursor: "pointer",
        backgroundColor: colors.n20a
      }
    }
  };
};
