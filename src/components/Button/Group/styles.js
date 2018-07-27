export default ({ borderRadius, }) => ({
  root: {
    display: "inline-flex",
  },

  justified: {
    width: "100%",

    "& $item": {
      flex: "1 0 auto",
      width: 0,

      "& $inner": {
        width: "100%",
        textAlign: "center",
      },
    },
  },

  item: {
    flex: "1 0 auto",

    "& + $item": {
      marginLeft: 1,
    },

    "&:not(:first-child):not(:last-child) $inner": {
      borderRadius: 0,
    },

    "&:first-child $inner": {
      borderRadius: [borderRadius, 0, 0, borderRadius,],
    },

    "&:last-child $inner": {
      borderRadius: [0, borderRadius, borderRadius, 0,],
    },
  },

  inner: {},
});
