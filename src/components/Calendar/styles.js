export default ({ spacing }) => {
  return {
    /* Styles applied to the root element */
    root: {
      width: "100%",
      minWidth: spacing.unit * 30,
    },

    /* Styles applied to the `<MonthView>` or the `<YearView>` if it is hidden */
    hidden: {
      display: "none",
    },
  };
};
