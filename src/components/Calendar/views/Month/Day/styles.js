export default ({ spacing, palette, colors, }) => {
  return {
    root: {
      padding: [[spacing.small / 2, 0,],],

      "&:last-child": {
        paddingRight: 0,
      },
    },

    tile: {
      width: "100%",
      justifyContent: "center",
    },

    highlighted: {
      backgroundColor: colors.b200a,
      color: colors.n400,

      borderRadius: 0,
    },

    selected: {
      backgroundColor: palette.actions.primary,
      color: palette.text.invert,

      "&:hover": {
        backgroundColor: colors.b300,
        color: palette.text.invert,
      },

      "&:active": {
        backgroundColor: colors.b500,
        color: palette.text.invert,
      },
    },

    content: {
      textAlign: "center",
    },
  };
};
