export default ({ typography, spacing }) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      minHeight: spacing.unit * 8,
      marginBottom: spacing.medium
    },

    justified: {
      justifyContent: "center"
    },

    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },

    title: {
      ...typography.h700,
      margin: [0, spacing.large, 0, 0],
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },

    actions: {
      whiteSpace: "nowrap"
    }
  };
};
