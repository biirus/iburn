export default (palette, colors) => ({
  warning: {
    backgroundColor: palette.actions.warning,
    color: palette.text.invert,

    "&:hover": {
      backgroundColor: colors.y300,
      color: palette.text.invert,
    },

    "&:active": {
      backgroundColor: colors.y500,
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
