export default theme => {
  return {
    root: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      color: theme.palette.text.secondary,
    },

    link: {
      color: theme.palette.text.secondary,
      textDecoration: "none",

      "&:hover": {
        textDecoration: "underline",
      },
    },

    item: {
      "&+$item::before": {
        content: `"/"`,
        display: "inline-block",
        width: theme.spacing.medium,
        textAlign: "center",
      },
    },
  };
};
