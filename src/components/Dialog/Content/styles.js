export default ({ spacing, colors }) => {
  const shadowOffset = spacing.unit / 2;
  const shadowColor = colors.n50a;
  const shadowBlur = spacing.unit;

  const topShadow = [
    "inset",
    0,
    `${shadowOffset}px`,
    `${shadowBlur}px`,
    `-${shadowBlur - shadowOffset}px`,
    shadowColor,
  ].join(" ");

  const bottomShadow = [
    "inset",
    0,
    `-${shadowOffset}px`,
    `${shadowBlur}px`,
    `-${shadowBlur - shadowOffset}px`,
    shadowColor,
  ].join(" ");

  return {
    /** Styles applied to the `root` element */
    root: {
      padding: [0, spacing.large],
      overflow: "auto",
    },

    /** Styles applied to the `root` element when top shadow is visible */
    topShadow: {
      boxShadow: topShadow,
    },

    /** Styles applied to the `root` element when bottom shadow is visible */
    bottomShadow: {
      boxShadow: bottomShadow,

      "&$topShadow": {
        boxShadow: [[topShadow], [bottomShadow]],
      },
    },
  };
};
