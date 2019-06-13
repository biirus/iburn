export default (palette, colors) => ({
  backgroundColor: palette.actions.primary,
  color: palette.text.invert,

  "&:hover, &:focus": {
    backgroundColor: colors.b300,
    color: palette.text.invert,
  },

  "&:active": {
    backgroundColor: colors.b500,
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
