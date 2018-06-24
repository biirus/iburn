export default theme => {
  const iconSize = theme.spacing.unit * 3;

  return {
    root: {
      display: "flex",
      alignItems: "center",
      height: theme.spacing.unit * 5,
      padding: [[theme.spacing.small / 2, theme.spacing.small]],

      cursor: "pointer",
      color: "inherit",
      textDecoration: "none",
      backgroundColor: "transparent",
      borderRadius: theme.borderRadius,
      transition: theme.transitions.create(["background-color"], "shortest"),

      "&:hover": {
        backgroundColor: theme.colors.n20a
      },

      "&:active": {
        backgroundColor: theme.colors.b50a
      },

      "&:disabled": {
        backgroundColor: "transparent",
        color: theme.colors.n70
      }
    },

    active: {
      backgroundColor: theme.colors.n20a,
      color: theme.colors.b400
    },

    title: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },

    icon: {
      width: iconSize,
      height: iconSize,
      marginRight: theme.spacing.small,
      lineHeight: 1
    }
  };
};
