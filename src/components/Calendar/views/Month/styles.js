export default ({ spacing }) => {
  return {
    root: {},

    month: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gridRowGap: `${spacing.small}px`,
    },
  };
};
