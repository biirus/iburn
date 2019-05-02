export default ({ spacing }) => {
  return {
    root: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gridGap: `${spacing.unit}px`,
    },

    content: {
      gridColumn: "2/7",
    },
  };
};
