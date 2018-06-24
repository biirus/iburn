export default ({ spacing }) => {
  return {
    root: {
      "&+$root": {
        marginTop: spacing.medium
      }
    },

    title: {
      width: "100%",
      padding: [spacing.small / 2, spacing.small * 1.5],
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  };
};
