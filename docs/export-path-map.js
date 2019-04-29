const fs = require("fs");
const path = require("path");
const pagesMap = require("./lib/pages-map.json");

function getExistingDemoPages () {
  const demoPath = path.join(__dirname, "pages", "demo");

  return fs.readdirSync(demoPath).filter(page => {
    return fs.statSync(path.join(demoPath, page)).isDirectory();
  });
}

function getDemoExportPathMap (pagesMap) {
  const existingPages = getExistingDemoPages();
  const demoPagesMap = pagesMap.filter(page =>
    existingPages.includes(page.path)
  );

  return demoPagesMap.reduce((acc, page) => {
    const path = `/demo/${page.path}`;
    acc[path] = { page: path };

    return acc;
  }, {});
}

function getApiExportPathMap (pagesMap) {
  const blackList = ["Icon", "Reset"];
  return pagesMap
    .filter(page => !blackList.includes(page.name))
    .reduce((acc, page) => {
      acc[`/api/${page.path}`] = {
        page: "/api",
        query: {
          component: page.id.replace(/-/g, "/"),
        },
      };
      return acc;
    }, {});
}

function getExportPathMap () {
  return {
    ...getDemoExportPathMap(pagesMap),
    ...getApiExportPathMap(pagesMap),
  };
}

module.exports = getExportPathMap;
