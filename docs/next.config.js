const path = require("path");

module.exports = {
  webpack: config => {
    config.resolve.alias["iburn"] = path.join(__dirname, "../src");
    config.resolve.alias["docs"] = __dirname;

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

    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config;
  },
};
