module.exports = api => {
  api.cache(true);

  const presets =
    process.env.BABEL_ENV === "es"
      ? []
      : [
          [
            "@babel/preset-env",
            {
              modules: ["esm", "production-umd"].includes(process.env.BABEL_ENV)
                ? false
                : "commonjs",
            },
          ],
        ];

  const plugins = [
    "@babel/plugin-transform-react-constant-elements",
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-object-rest-spread", { loose: true }],
    [
      "babel-plugin-module-resolver",
      { alias: { components: "./src/components" } },
    ],
  ];

  return {
    presets: presets.concat(["@babel/preset-react"]),
    plugins,

    env: {
      test: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins,
      },
    },
  };
};
