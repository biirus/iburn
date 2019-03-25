const path = require("path");

module.exports = {
  webpack (config, options) {
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

    return config;
  },

  exportPathMap: async function (defaultPathMap) {
    console.log(defaultPathMap);

    return {
      // ...defaultPathMap,
      "/api/avatar": { page: "/api", query: { component: "Avatar" } },
      "/api/avatar/stack": {
        page: "/api",
        query: { component: "Avatar/Stack" },
      },
      "/demo/avatar-stack": { page: "/demo/avatar-stack" },
    };
  },
};
