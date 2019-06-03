export default ({ spacing, colors }) => {
  return {
    root: {},

    header: {
      whiteSpace: "nowrap",
    },

    cell: {
      borderBottom: `1px solid ${colors.n30}`,
    },

    cellInner: {
      flexWrap: "wrap",
    },

    badge: {
      "& + $badge": {
        marginLeft: spacing.small,
      },
    },

    type: {
      whiteSpace: "pre",
      tabSize: "1em",
      lineHeight: "1.2em",
    },
  };
};
