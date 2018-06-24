export default ({ spacing, }) => {
  return {
    root: {
      margin: [0, "auto",],
      padding: [0, spacing.large,],      
      width: "100%",
    },

    dense: {
      maxWidth: "45em",
    },
  };
};
