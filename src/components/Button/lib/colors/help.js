export default (palette, colors) => ({
  help: {
    backgroundColor: palette.actions.help,
    color: palette.text.invert,

    "&:hover": {
      backgroundColor: colors.p300,
      color: palette.text.invert,
    },

    "&:active": {
      backgroundColor: colors.p500,
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
