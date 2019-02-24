export default theme => {
  const { typography } = theme;
  const headers = ["h1", "h2", "h3", "h4", "h5", "h6"].reduce((acc, header) => {
    return {
      ...acc,
      [header]: { margin: 0 },
    };
  }, {});

  return {
    "@global": {
      "*": {
        boxSizing: "border-box",
      },

      html: {
        height: "100vh",
      },

      body: {
        margin: 0,
        padding: 0,
        height: "100vh",
        textDecorationSkip: "ink",
        ...typography.body,
      },

      root: {
        height: "100vh",
      },

      ".fixed": {
        maxHeight: "100vh",
        overflow: "hidden",
      },

      ...headers,

      p: {
        ...typography.paragraph,
      },
    },
  };
};
