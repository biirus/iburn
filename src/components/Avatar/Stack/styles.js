export default ({ spacing, colors, }) => {
  return {
    root: {
      display: "flex",
      lineHeight: 1,
    },

    item: {
      position: "relative",
      marginRight: -spacing.unit,
    },

    inner: {
      border: `2px solid ${colors.n0}`,
    },
  };
};
