export default ({ spacing, palette }) => {
  const borderSize = 2;

  return {
    root: {
      display: "grid",
      gridTemplateColumns: `repeat(7, 1fr)`,
      boxShadow: `inset 0 -${borderSize}px 0 0 ${palette.divider}`,
      marginBottom: spacing.small,

      textAlign: "center",
    },

    weekDay: {
      margin: [[spacing.small, 0]],
    },
  };
};
