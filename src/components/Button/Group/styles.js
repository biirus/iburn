export default ({ borderRadius }) => ({
  /* Styles applied to the root element */
  root: {
    display: "inline-flex",
  },

  /* Styles applied to the root element if `justified={true}` */
  justified: {
    width: "100%",

    "& $itemWrapper": {
      flex: "1 0 auto",
      width: 0,

      "& $item": {
        width: "100%",
        textAlign: "center",
      },
    },
  },

  /* Styles applied to the child wrapper element */
  itemWrapper: {
    flex: "1 0 auto",

    "& + $itemWrapper": {
      marginLeft: 1,
    },

    "&:not(:first-child):not(:last-child) $item": {
      borderRadius: 0,
    },

    "&:first-child $item": {
      borderRadius: [borderRadius, 0, 0, borderRadius],
    },

    "&:last-child $item": {
      borderRadius: [0, borderRadius, borderRadius, 0],
    },
  },

  /* Styles applied to the child item */
  item: {},
});
