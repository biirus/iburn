export default (palette, colors) => ({
  error: {
    backgroundColor: palette.actions.remove,
    color: palette.text.invert,

    "&:hover": {
      backgroundColor: colors.r300,
      color: palette.text.invert,
    },

    "&:active": {
      backgroundColor: colors.r500,
      color: palette.text.invert,
    },

    "&:disabled": {
      backgroundColor: colors.n20a,
      color: colors.n70,
    },

    "&$selected": {
      backgroundColor: colors.n700,
      color: colors.n20,
    },
  },
});
