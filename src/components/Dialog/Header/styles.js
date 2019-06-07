export default ({ spacing, }) => {
  return {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: [spacing.large, spacing.large, spacing.medium,],
      overflow: "hidden",
    },

    label: {
      marginRight: spacing.large,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },

    actions: {
      whiteSpace: "nowrap",
    },
  };
};
