export default (palette, colors) => ({
  thin: {
    backgroundColor: "transparent",

    "&:hover": {
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
  },
});
