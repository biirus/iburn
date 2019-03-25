export default ({ spacing, colors }) => {
  return {
    /* Styles applied to root element */
    root: {
      display: "flex",
      lineHeight: 1,
    },

    /* Styles applied to the wrapper of `Avatar` element */
    avatarWrapper: {
      position: "relative",
    },

    /* Styles applied to each `Avatar` element */
    avatar: {
      border: `2px solid ${colors.n0}`,
    },
  };
};
