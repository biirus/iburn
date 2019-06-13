export default ({ spacing }) => {
  return {
    /** Styles applied to the `root` element */
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: [spacing.large, spacing.large, spacing.medium],
      overflow: "hidden",
    },

    /** Styles for the component's children */
    children: {
      marginRight: spacing.large,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },

    /** Styles applied to the `actions` element */
    actions: {
      whiteSpace: "nowrap",
    },
  };
};
