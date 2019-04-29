const path = require("path");
const getExportPathMap = require("./export-path-map");


module.exports = {
  webpack (config, options) {
    config.resolve.alias["iburn"] = path.join(__dirname, "../src");

    config.resolve.alias["components"] = path.join(
      __dirname,
      "../src/components"
    );

    config.module.rules = config.module.rules.map(rule => {
      if (!rule.test.test(".js")) {
        return rule;
      }

      rule.include.push(path.resolve(__dirname, "../src"));
      return rule;
    });

    config.resolve.alias["docs"] = __dirname;

    return config;
  },

  target: "serverless",

  exportPathMap: async function (defaultPathMap) {
    return {
      "/": { page: "/demo/avatar" },

      ...getExportPathMap(),
    };
  },
};
