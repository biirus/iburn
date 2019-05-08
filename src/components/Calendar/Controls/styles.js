export default ({ spacing }) => {
  return {
    /** Styles applied to the root element */
    root: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gridGap: `${spacing.unit}px`,
    },

    /** Styles applied to the content element */
    content: {
      gridColumn: "2/7",
    },
  };
};
