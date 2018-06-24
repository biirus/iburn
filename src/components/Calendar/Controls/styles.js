export default ({ spacing, }) => {
  return {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    content: {
      flex: 1,
      margin: [[0, spacing.small,],],
      justifyContent: "center",
    },
  };
};
