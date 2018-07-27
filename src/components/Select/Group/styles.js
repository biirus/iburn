export default ({ spacing, }) => {
  return {
    root: {
      marginBottom: spacing.medium,

      "&:last-child": {
        marginBottom: 0,
      },
    },

    hidden: {
      display: "none",
    },

    label: {
      width: "100%",
      padding: [0, spacing.medium,],
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  };
};
