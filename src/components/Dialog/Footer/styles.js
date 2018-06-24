export default ({ spacing, }) => {
  return {
    root: {
      display: "flex",
      justifyContent: "space-between",
      padding: [spacing.medium, spacing.large, spacing.large,],
      overflow: "hidden",
    },

    action: {
      "& + $action": {
        marginLeft: spacing.small,
      },
    },
  };
};
