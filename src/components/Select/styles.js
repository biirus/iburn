import deepExtend from "deep-extend";
import createTextFieldStyles from "components/TextField/styles";

export default theme => {
  const textFieldStyles = createTextFieldStyles(theme);
  delete textFieldStyles.input;

  const shadowOffset = theme.spacing.unit / 2 + 2;
  const shadowColor = theme.colors.n50a;
  const shadowBlur = theme.spacing.unit;

  const topShadow = [
    "inset",
    0,
    `${shadowOffset}px`,
    `${shadowBlur}px`,
    `-${shadowBlur}px`,
    shadowColor,
  ].join(" ");

  const bottomShadow = [
    "inset",
    0,
    `-${shadowOffset}px`,
    `${shadowBlur}px`,
    `-${shadowBlur}px`,
    shadowColor,
  ].join(" ");

  const selectStyles = {
    root: {
      width: "100%",
      cursor: "pointer",
    },

    compact: {
      "& $icon": {
        width: theme.spacing.unit * 3,
        height: theme.spacing.unit * 3,
      },
    },

    result: {
      display: "inline-flex",
      alignItems: "center",
      width: "100%",
      height: "100%",
      overflow: "hidden",
    },

    popover: {
      padding: [theme.spacing.medium, 0,],
    },

    search: {
      padding: [0, theme.spacing.medium, theme.spacing.medium,],
    },

    inputIcon: {
      cursor: "pointer",
      color: theme.palette.text.secondary,
    },

    placeholder: {
      color: theme.colors.n100a,
    },

    items: {
      maxHeight: theme.spacing.unit * 30,
      overflow: "auto",
    },

    topShadow: {
      boxShadow: topShadow,
    },

    bottomShadow: {
      boxShadow: bottomShadow,

      "&$topShadow": {
        boxShadow: [[topShadow,], [bottomShadow,],],
      },
    },
  };

  return deepExtend(textFieldStyles, selectStyles);
};
