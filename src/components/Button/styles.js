import createDefaultStyle from "./lib/colors/default";
import createPrimaryStyle from "./lib/colors/primary";
import createWarningStyle from "./lib/colors/warning";
import createSuccessStyle from "./lib/colors/success";
import createErrorStyle from "./lib/colors/error";
import createInfoStyle from "./lib/colors/info";

import createThinStyle from "./lib/views/thin";
import createLinkStyle from "./lib/views/link";

export default ({ borderRadius, spacing, colors, palette, transitions, }) => {
  const getHeight = (compact = false) => {
    const multiplier = compact ? 3 : 4;
    return `${spacing.unit * multiplier}px`;
  };

  return {
    root: {
      display: "inline-flex",
      flexWrap: "nowrap",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "middle",

      maxWidth: "100%",
      height: getHeight(),
      padding: [0, spacing.unit,],
      margin: 0,

      borderRadius,
      border: "none",
      outline: "none !important",

      fontSize: "inherit",
      lineHeight: getHeight(),
      textDecoration: "none",
      whiteSpace: "nowrap",
      color: colors.n400,

      transition: transitions.create(["all",], "shortest"),

      "&:hover": {
        cursor: "pointer",
      },

      "&:active": {
        boxShadow: "none",
        textDecoration: "none",
      },

      "&:disabled": {
        pointerEvents: "none",
        opacity: 0.4,
      },
    },

    compact: {
      height: getHeight(true),
      lineHeight: getHeight(true),
    },

    inline: {
      lineHeight: "inherit",
      padding: 0,
      height: "auto",

      "& $content": {
        margin: 0,
      },
    },

    block: {
      width: "100%",
    },

    selected: {
      transition: "none",
    },

    content: {
      margin: [0, spacing.unit / 2,],
    },

    ...createDefaultStyle(palette, colors),
    ...createPrimaryStyle(palette, colors),
    ...createWarningStyle(palette, colors),
    ...createSuccessStyle(palette, colors),
    ...createErrorStyle(palette, colors),
    ...createInfoStyle(palette, colors),

    ...createThinStyle(palette, colors),
    ...createLinkStyle(palette, colors),
  };
};
