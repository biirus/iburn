export default theme => {
  const size = theme.spacing.unit * 5;

  return {
    root: {
      display: "flex",
      width: size,
      height: size,
      borderRadius: "50% !important",
      lineHeight: 1,
    },

    icon: {
      width: 24,
      height: 24,
    },

    iconContent: {
      margin: 0,
    },
  };
};
