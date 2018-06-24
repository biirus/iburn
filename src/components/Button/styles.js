import createDefaultStyle from "./lib/colors/default";
import createPrimaryStyle from "./lib/colors/primary";
import createWarningStyle from "./lib/colors/warning";
import createDangerStyle from "./lib/colors/danger";
import createHelpStyle from "./lib/colors/help";

import createThinStyle from "./lib/views/thin";
import createLinkStyle from "./lib/views/link";

export default ({
  borderRadius,
  spacing,
  colors,
  palette,
  transitions,
  typography,
}) => {
  const getHeight = (compact = false) => {
    const multiplier = compact ? 3 : 4;
    return `${(spacing.unit * multiplier) / typography.body.fontSize}em`;
  };

  return {
    root: {
      display: "inline-flex",
      flexWrap: "nowrap",
      alignItems: "baseline",

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
        cursor: "not-allowed",
      },
    },

    compact: {
      height: getHeight(true),
      lineHeight: getHeight(true),
    },

    inline: {
      lineHeight: "inherit",
      padding: 0,

      "& $content": {
        margin: 0,
      },

      "& $icon": {
        margin: 0,
      },
    },

    block: {
      width: "100%",
    },

    selected: {
      transition: "none",
    },

    wrapper: {
      alignSelf: "center",
      display: "inline-flex",
      flexWrap: "nowrap",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      justifyContent: "center",
    },

    content: {
      alignItems: "center",
      alignSelf: "center",
      flex: "1 1 auto",
      margin: [0, spacing.unit / 2,],
      maxWidth: "100%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },

    icon: {
      alignSelf: "center",
      display: "flex",
      flexShrink: 0,
      lineHeight: 0,
      fontSize: 0,
      userSelect: "none",

      "&+$content": {
        alignItems: "baseline",
        alignSelf: "baseline",
        textAlign: "left",
      },
    },

    leftIcon: {
      marginLeft: -spacing.unit / 2,
    },

    rightIcon: {
      marginRight: -spacing.unit / 2,
    },

    isOnlyIcon: {
      margin: [0, -spacing.unit / 4,],
    },

    ...createDefaultStyle(palette, colors),
    ...createPrimaryStyle(palette, colors),
    ...createWarningStyle(palette, colors),
    ...createDangerStyle(palette, colors),
    ...createHelpStyle(palette, colors),

    ...createThinStyle(palette, colors),
    ...createLinkStyle(palette, colors),
  };
};
