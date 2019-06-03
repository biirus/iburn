function getDemoExportPathMap (pagesMap) {
  const config = require("./lib/demo-pages-map.json");

  return config.reduce((acc, page) => {
    const path = page.path;
    acc[path] = { page: path };

    return acc;
  }, {});
}

function getApiExportPathMap (pagesMap) {
  const config = require("./lib/api-pages-map.json");
  return config.reduce((acc, page) => {
    acc[page.path] = {
      page: "/api",
      query: page.info.query,
    };
    return acc;
  }, {});
}

function getExportPathMap () {
  return {
    ...getDemoExportPathMap(),
    ...getApiExportPathMap(),
  };
}

module.exports = getExportPathMap;
