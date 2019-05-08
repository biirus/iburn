export default ({ spacing }) => {
  return {
    /** Styles applied to the root element */
    root: {},

    /** Styles applied to the month grid */
    month: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gridRowGap: `${spacing.small}px`,
    },
  };
};
