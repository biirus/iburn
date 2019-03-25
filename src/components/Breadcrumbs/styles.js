export default theme => {
  return {
    /* Styles applied to the root element. */
    root: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      color: theme.palette.text.secondary,
    },

    /* Styles applied to the item's `span` element */
    item: {
      "&+$item::before": {
        content: `"/"`,
        display: "inline-block",
        width: theme.spacing.medium,
        textAlign: "center",
      },
    },

    /* Styles applied to the item's `a` element */
    link: {
      color: theme.palette.text.secondary,
      textDecoration: "none",

      "&:hover": {
        textDecoration: "underline",
      },
    },
  };
};
