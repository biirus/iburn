const path = require("path");

module.exports = {
  webpack: config => {
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
