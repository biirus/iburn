export default ({
  borderRadius,
  spacing,
  colors,
  transitions,
  typography,
  palette,
}) => {
  const getHeight = (compact = false) => {
    const multiplier = compact ? 4 : 5;
    return `${(spacing.unit * multiplier) / typography.body.fontSize}em`;
  };

  const defaultBackground = colors.n10;
  const defaultBorder = colors.n30;
  const activeBackground = colors.n0;

  return {
    root: {
      display: "inline-flex",
      flexWrap: "nowrap",
      alignItems: "center",
      justifyContent: "space-between",

      minWidth: spacing.unit * 10,
      maxWidth: "100%",
      height: getHeight(),
      padding: spacing.unit - 1,
      margin: 0,

      borderRadius,
      border: `1px solid ${defaultBorder}`,
      outline: "none !important",
      background: defaultBackground,

      fontSize: "inherit",
      fontWeight: "normal",
      lineHeight: getHeight(),
      textDecoration: "none",
      whiteSpace: "nowrap",
      color: palette.text.primary,

      transition: transitions.create(["all",], "shortest"),

      "&:hover": {
        background: defaultBorder,
        cursor: "text",

        "&$focus": {
          background: activeBackground,

          "& $rightIcon": {
            fill: activeBackground,
          },
        },

        "& $rightIcon": {
          fill: defaultBorder,
        },
      },

      "& $rightIcon": {
        fill: defaultBackground,
      },
    },

    compact: {
      height: getHeight(true),
      lineHeight: getHeight(true),

      "& $icon": {
        width: spacing.unit * 2,
        height: spacing.unit * 2,
      },
    },

    block: {
      width: "100%",
    },

    warning: {
      "& $rightIcon": {
        color: palette.messages.warning,
        fill: defaultBackground,
      },
    },

    success: {
      "& $rightIcon": {
        color: palette.messages.success,
        fill: defaultBackground,
      },
    },

    danger: {
      "& $rightIcon": {
        color: palette.messages.error,
        fill: defaultBackground,
      },
    },

    info: {
      "& $rightIcon": {
        color: palette.messages.info,
        fill: defaultBackground,
      },
    },

    focus: {
      backgroundColor: activeBackground,
      borderColor: palette.actions.primary,
      boxShadow: `inset 0 0 0 1px ${palette.actions.primary}`,
    },

    disabled: {
      pointerEvents: "none",
      opacity: 0.6,
    },

    icon: {
      display: "flex",
      alignItems: "center",
      color: palette.text.secondary,
    },

    leftIcon: {
      marginRight: spacing.small,
    },

    rightIcon: {
      marginLeft: spacing.small,
    },

    input: {
      width: "100%",

      background: "transparent",
      outline: "none !important",
      border: "none",

      color: "inherit",
      fontSize: "inherit",
      fontWeight: "normal",

      "&:disabled": {
        pointerEvents: "none",
      },

      "&::placeholder": {
        color: colors.n100a,
        fontWeight: "normal",
      },
    },
  };
};
