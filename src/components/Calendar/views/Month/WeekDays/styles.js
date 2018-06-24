export default ({ spacing, }) => {
  return {
    cell: {
      padding: [[spacing.small, 0,],],

      "&:last-child": {
        paddingRight: 0,
      },
    },
  };
};
