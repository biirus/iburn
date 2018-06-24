export default ({ spacing, colors, }) => {
  const getSize = n => {
    return {
      width: spacing.unit * n,
      height: spacing.unit * n,
    };
  };

  return {
    root: {
      position: "relative",
      ...getSize(3),
    },

    small: {
      ...getSize(3),

      "& $outer": {
        ...getSize(2),
      },

      "& $inner": {
        ...getSize(2 / 2),
      },

      "& $item": {
        borderWidth: 2,
      },
    },

    medium: {
      ...getSize(4),

      "& $outer": {
        ...getSize(3),
      },

      "& $inner": {
        ...getSize(3 / 2),
      },

      "& $item": {
        borderWidth: 2,
      },
    },

    large: {
      ...getSize(5),

      "& $outer": {
        ...getSize(4),
      },

      "& $inner": {
        ...getSize(4 / 2),
      },

      "& $item": {
        borderWidth: 3,
      },
    },

    xLarge: {
      ...getSize(7),

      "& $outer": {
        ...getSize(6),
      },

      "& $inner": {
        ...getSize(6 / 2),
      },

      "& $item": {
        borderWidth: 4,
      },
    },

    item: {
      display: "inline-block",
      float: "none",
      backgroundColor: "transparent",
      border: "0 solid currentColor",
      position: "absolute",
      top: "50%",
      left: "50%",
      background: "transparent",
      borderStyle: "solid",
      borderWidth: 2,
      borderRadius: "100%",
      animation: "loading-animation 1s ease-in-out infinite",
    },

    outer: {
      ...getSize(2),
      borderRightColor: "transparent",
      borderLeftColor: "transparent",
    },

    inner: {
      ...getSize(1),
      borderTopColor: "transparent",
      borderBottomColor: "transparent",
      animationDirection: "reverse",
    },

    [`@keyframes loading-animation`]: {
      "0%": {
        transform: "translate(-50%, -50%) rotate(0deg)",
      },
      "50%": {
        transform: "translate(-50%, -50%) rotate(180deg)",
      },

      "100%": {
        transform: "translate(-50%, -50%) rotate(360deg)",
      },
    },
  };
};
