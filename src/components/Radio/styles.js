export default ({ palette, spacing, colors, borderRadius, transitions }) => {
  return {
    root: {
      display: "inline-flex"
    },

    real: {
      display: "none",

      "&:disabled": {
        "&+$wrapper": {
          pointerEvents: "none",
          cursor: "not-allowed",
          opacity: 0.5
        }
      },

      "&:checked+$wrapper>$check": {
        fill: "white",
        color: colors.b200
      }
    },

    wrapper: {
      display: "inline-flex",
      alignItems: "center",

      "&:hover": {
        cursor: "pointer"
      }
    },

    check: {
      display: "inline-flex",
      alignSelf: "center",
      marginLeft: -6, // because of svg viewbox
      fill: "transparent",
      color: colors.n40
    },

    label: {
      lineHeight: `${spacing.unit * 3}px` // default icon size
    }
  };
};
