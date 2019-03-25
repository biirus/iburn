export default ({ spacing, colors }) => {
  return {
    root: {},

    description: {
      marginBottom: spacing.large,
    },

    section: {
      "& + $section": {
        marginTop: spacing.large,
      },
    },

    sectionHeader: {
      marginBottom: spacing.medium,
    },
  };
};
