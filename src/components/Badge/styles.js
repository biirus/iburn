export default ({ spacing, palette, colors, borderRadius }) => {
  return {
    /* Styles applied to the root element */
    root: {
      display: "inline-flex",
      padding: [[spacing.small / 2, spacing.small]],
      lineHeight: 1,
      borderRadius,
    },

    /* Styles applied to the root element if `color="default"` */
    default: {
      backgroundColor: colors.n20a,
      color: colors.n400,
    },

    /* Styles applied to the root element if `color="primary"` */
    primary: {
      backgroundColor: palette.primary,
      color: palette.text.invert,
    },

    /* Styles applied to the root element if `color="error"` */
    error: {
      backgroundColor: palette.error,
      color: palette.text.invert,
    },

    /* Styles applied to the root element if `color="success"` */
    success: {
      backgroundColor: palette.success,
      color: palette.text.invert,
    },

    /* Styles applied to the root element if `color="warning"` */
    warning: {
      backgroundColor: palette.warning,
      color: palette.text.invert,
    },

    /* Styles applied to the root element if `color="info"` */
    info: {
      backgroundColor: palette.info,
      color: palette.text.invert,
    },
  };
};
