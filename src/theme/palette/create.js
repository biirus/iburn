export default colors => {
  const blue = colors.b400;
  const neutral = colors.n30;
  const green = colors.g400;
  const yellow = colors.y400;
  const red = colors.r400;
  const purple = colors.p400;

  return {
    primary: blue,
    success: green,
    warning: yellow,
    error: red,
    info: purple,

    backgrounds: {
      default: colors.n0,
      panel: colors.n20,
      brand: blue,
    },

    text: {
      primary: colors.n900,
      secondary: colors.n100,
      heading: colors.n800,
      invert: colors.n0,
    },

    status: {
      inProgress: blue,
      todo: neutral,
      added: green,
      moved: yellow,
      removed: red,
      new: purple,
    },

    connectivity: {
      unavailable: neutral,
      available: green,
      busy: red,
      focus: purple,
    },

    actions: {
      primary: blue,
      secondary: neutral,
      confirm: green,
      warning: yellow,
      remove: red,
      help: purple,
    },

    messages: {
      success: green,
      warning: yellow,
      error: red,
      info: purple,
    },

    prioriy: {
      trivial: neutral,
      minor: green,
      medium: yellow,
      major: red,
    },
  };
};
