export default (palette, colors) => ({
  backgroundColor: "transparent",

  "&:hover, &:focus": {
    backgroundColor: colors.n30a,
  },

  "&:active": {
    backgroundColor: colors.b200a,
  },

  "&:disabled": {
    backgroundColor: "transparent",
  },

  "&$selected": {
    backgroundColor: colors.n700,
  },
});
