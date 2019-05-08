export default ({ spacing }) => {
  return {
    /** Styles applied to the root element */
    root: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: `${spacing.small}px`,
    },

    /** Styles applied to the monthWrapper container */
    monthWrapper: {
      overflow: "hidden",
    },
  };
};
