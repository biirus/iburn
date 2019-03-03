export default ({ colors, typography, spacing }) => {
  const size = spacing.unit * 6;

  return {
    /* Styles applied to the root element. */
    root: {
      ...typography.h600,
      color: colors.w700a,

      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "baseline",
      overflow: "hidden",
      width: size,
      height: size,

      backgroundColor: colors.n100,
      borderRadius: "50%",
    },

    /* Styles applied to the img element if either `src` or `srcSet` is defined. */
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  };
};
