export default ({ spacing }) => {
  return {
    root: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: `${spacing.small}px`,
    },
  };
};
