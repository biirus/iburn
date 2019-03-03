export default ({ spacing, palette, colors, borderRadius }) => {
  return {
    root: {
      display: "inline-flex",
      padding: [[spacing.small / 2, spacing.small]],
      lineHeight: 1,
      borderRadius,
    },

    default: {
      backgroundColor: colors.n20a,
      color: colors.n400,
    },

    primary: {
      backgroundColor: colors.b200a,
      color: colors.b400,
    },
  };
};
