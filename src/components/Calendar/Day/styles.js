export default ({ spacing, palette, colors }) => {
  return {
    /** Styles applied to the root element */
    root: {},

    /** Styles applied to the day's wrapper element */
    dayWrapper: {
      overflow: "hidden",
    },

    /** Styles applied to the `day` element when it is `highlighted` */
    highlighted: {
      backgroundColor: colors.b200a,
      color: colors.n400,

      borderRadius: 0,
    },

    /** Styles applied to the `day` element when it is `selected` */
    selected: {},
  };
};
