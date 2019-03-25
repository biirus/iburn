const path = require("path");

console.log(process.env.NODE_ENV);

module.exports = {
  webpack (config, options) {
    if (process.env.NODE_ENV === "development") {
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
    }

    config.resolve.alias["docs"] = __dirname;

    return config;
  },

  target: "serverless",
};
