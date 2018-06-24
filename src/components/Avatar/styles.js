export default ({ colors, typography, spacing, }) => {
  const size = spacing.unit * 6;

  return {
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

    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "baseline",
      overflow: "hidden",
      width: "100%",
      height: "100%",
    },

    img: {
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100%",
      height: "100%",
    },
  };
};
