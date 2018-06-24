export default ({ spacing, }) => {
  return {
    root: {
      marginTop: spacing.small,
      paddingLeft: spacing.unit * 5,
    },

    action: {
      "& + $action": {
        marginLeft: spacing.medium,
      },
    },
  };
};
