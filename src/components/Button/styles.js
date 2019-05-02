import createDefaultStyle from "./lib/colors/default";
import createPrimaryStyle from "./lib/colors/primary";
import createWarningStyle from "./lib/colors/warning";
import createSuccessStyle from "./lib/colors/success";
import createErrorStyle from "./lib/colors/error";
import createInfoStyle from "./lib/colors/info";

import createThinStyle from "./lib/variants/thin";
import createLinkStyle from "./lib/variants/link";

export default ({ borderRadius, spacing, colors, palette, transitions }) => {
  const getHeight = (compact = false) => {
    const multiplier = compact ? 3 : 4;
    return `${spacing.unit * multiplier}px`;
  };

  return {
    /* Styles applied to the root element. You can use all sorts of element state modifications: `root:hover`, `root:disabled`... */
    root: {
      display: "inline-flex",
      flexWrap: "nowrap",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "middle",

      maxWidth: "100%",
      height: getHeight(),
      padding: [0, spacing.unit],
      margin: 0,

      borderRadius,
      border: "none",
      outline: "none !important",

      fontSize: "inherit",
      lineHeight: getHeight(),
      textDecoration: "none",
      whiteSpace: "nowrap",
      color: colors.n400,

      transition: transitions.create(["all"], "shortest"),

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

    /* Styles applied to the default button */
    default: createDefaultStyle(palette, colors),

    /* Styles applied to the root element if `color="primary"` */
    primary: createPrimaryStyle(palette, colors),

    /* Styles applied to the root element if `color="warning"` */
    warning: createWarningStyle(palette, colors),

    /* Styles applied to the root element if `color="success"` */
    success: createSuccessStyle(palette, colors),

    /* Styles applied to the root element if `color="error"` */
    error: createErrorStyle(palette, colors),

    /* Styles applied to the root element if `color="info"`  */
    info: createInfoStyle(palette, colors),

    /* Styles applied to the root element if `variant="thin"` */
    thin: createThinStyle(palette, colors),

    /* Styles applied to the root element if `variant="link"` */
    link: createLinkStyle(palette, colors),

    /* Styles applied to the root element if `padding="compact"` */
    compact: {
      height: getHeight(true),
      lineHeight: getHeight(true),
    },

    /* Styles applied to the root element if `padding="inline"` */
    inline: {
      lineHeight: "inherit",
      padding: 0,
      height: "auto",

      "& $content": {
        margin: 0,
      },
    },

    /* Styles applied to the root element if `padding="block"` */
    block: {
      width: "100%",
    },

    /* Styles applied to the root element if `selected={true}` */
    selected: {
      transition: "none",
    },

    /* Styles applied to the button content */
    content: {
      margin: [0, spacing.unit / 2],
    },

    /* Styles applied to the `icon` element before button content */
    icon: {
      lineHeight: 0,
    },

    /* Styles applied to the `iconAfter` element after button content */
    iconAfter: {
      lineHeight: 0,
    },
  };
};
