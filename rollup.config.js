import path from "path";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import alias from "rollup-plugin-alias";
import minify from "rollup-plugin-babel-minify";

import pkg from "./package.json";

const external = Object.keys(pkg.dependencies);

const plugins = [
  resolve(),
  babel({
    exclude: "node_modules/**",
    plugins: ["external-helpers",],
  }),
  alias({
    components: path.join(__dirname, "src/components"),
    resolve: [".js", "/index.js",],
  }),
  process.env.NODE_ENV === "production" && minify(),
];

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "es",
      globals: {
        react: "React",
      },
    },
  ],
  external,
  plugins,
};
