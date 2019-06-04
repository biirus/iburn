export default ({ spacing }) => {
  return {
    /** styles applied to the root element */
    root: {},

    /** styles for the each of `Checkbox` items */
    item: {
      "&+$item": {
        marginTop: spacing.small,
      },
    },
  };
};
