export default ({ spacing }) => {
  return {
    /** Styles applied to the `root` element */
    root: {
      display: "flex",
      justifyContent: "space-between",
      padding: [spacing.medium, spacing.large, spacing.large],
      overflow: "hidden",
    },

    /** Styles applied to the `children` elements */
    children: {},

    /** Styles applied to the `actions` elements */
    actions: {
      whiteSpace: "nowrap",
    },
  };
};
