export default ({ palette, spacing, colors, borderRadius, transitions }) => {
  return {
    /** styles applied to the root element */
    root: {
      display: "inline-flex",
      verticalAlign: "middle",
    },

    /** styles for the hidden `input` element */
    input: {
      display: "none",

      "&:disabled": {
        "&+$wrapper": {
          pointerEvents: "none",
          cursor: "not-allowed",
          opacity: 0.5,
        },
      },

      "&:checked+$wrapper>$check": {
        fill: "white",
        color: colors.b200,
      },
    },

    /** styles applied to the element wrapper */
    wrapper: {
      display: "inline-flex",
      alignItems: "center",

      "&:hover": {
        cursor: "pointer",
      },
    },

    /** styles for the `radio` icon */
    check: {
      display: "inline-flex",
      alignSelf: "center",
      marginLeft: -6, // because of svg viewbox
      fill: "transparent",
      color: colors.n40,
    },

    /** styles for the radio label */
    label: {
      lineHeight: `${spacing.unit * 3}px`, // default icon size
    },
  };
};
