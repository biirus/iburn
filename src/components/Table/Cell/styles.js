export default ({ spacing, colors, typography, }) => {
  return {
    root: {
      padding: [[spacing.small, spacing.large, spacing.small, spacing.small,],],
      textAlign: "left",

      "&:last-child": {
        paddingRight: spacing.small,
      },
    },

    alignRight: {
      "& $inner": {
        justifyContent: "flex-end",
      },
    },

    alignLeft: {
      "& $inner": {
        justifyContent: "flex-start",
      },
    },

    alignCenter: {
      "& $inner": {
        justifyContent: "center",
      },
    },

    numeric: {
      "& $inner": {
        justifyContent: "flex-end",
      },
    },

    head: {
      ...typography.h200,
      boxShadow: `inset 0 -2px 0 0 ${colors.n30}`,
    },

    sortable: {
      cursor: "pointer",
    },

    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
    },

    inner: {
      display: "inline-flex",
      alignItems: "center",
      width: "100%",
    },
  };
};
