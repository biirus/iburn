export default (palette, colors) => ({
  backgroundColor: palette.messages.success,
  color: palette.text.invert,

  "&:hover": {
    backgroundColor: colors.g300,
    color: palette.text.invert,
  },

  "&:active": {
    backgroundColor: colors.g500,
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
});
