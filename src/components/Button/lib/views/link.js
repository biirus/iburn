export default (palette, colors) => ({
  link: {
    backgroundColor: "transparent",
    color: palette.actions.primary,

    "&:hover": {
      color: colors.b300,
      textDecoration: "underline",
    },

    "&:active": {
      color: colors.b500,
    },

    "&:disabled": {
      color: colors.n70,
    },

    "&$selected": {
      backgroundColor: colors.n700,
      color: colors.n20,
    },
  },
});
