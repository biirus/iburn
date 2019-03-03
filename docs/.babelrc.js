const presets = [
  "babel-preset-next",
  // ["@babel/preset-env", { modules: false }],
  // "@babel/preset-react",
];

const plugins = [
  // "@babel/plugin-proposal-class-properties",
  // [
  // "babel-plugin-module-resolver",
  // { alias: { components: "../src/components" } },
  // ],
];

module.exports = {
  presets,
  plugins,

  env: {
    test: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
      plugins,
    },
    es: {
      ignore: ["**/*.spec.js"],
    },
  },
};
