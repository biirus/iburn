export default (palette, colors) => ({
  backgroundColor: colors.n20a,
  color: colors.n400,

  "&:hover, &:focus": {
    backgroundColor: colors.n30a,
    color: colors.n400,
  },

  "&:active": {
    backgroundColor: colors.b200a,
    color: colors.b400,
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
