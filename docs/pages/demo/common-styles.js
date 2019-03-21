export default ({ spacing, palette }) => {
  return {
    root: {},

    section: {
      "& + $section": {
        marginTop: spacing.large * 2,
      },
    },

    sectionHeader: {
      position: "relative",
      marginBottom: spacing.large,

      cursor: "pointer",

      "&::before": {
        content: `"#"`,
        display: "block",
        position: "absolute",
        top: 0,
        left: "-1em",
        color: palette.text.secondary,
      },
    },
  };
};
