export default ({ spacing }) => {
  return {
    /** styles applied to the root element */
    root: {},

    /** styles for the `Radio` wrapper */
    item: {
      "&+$item": {
        marginTop: spacing.small,
      },
    },
  };
};
