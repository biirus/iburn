const path = require("path");

module.exports = {
  components: "src/components/**/**/index.js",

  styleguideComponents: {
    Wrapper: path.join(__dirname, "./styleguide/Wrapper"),
  },

  webpackConfig: {
    resolve: {
      alias: { components: path.join(__dirname, "src/components"), },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
  },
};
