export default ({ spacing, typography, colors, borderRadius }) => {
  const getHeight = (compact = false) => {
    const multiplier = compact ? 3 : 4;
    return `${spacing.unit * multiplier / typography.body.fontSize}em`;
  };

  return {
    root: {
      display: "flex",
      alignItems: "center",
      height: getHeight()
    },

    compact: {
      height: getHeight(true)
    },

    row: {
      width: "100%",
      height: spacing.unit / 4,
      backgroundColor: colors.n20a,
      borderRadius
    }
  };
};
