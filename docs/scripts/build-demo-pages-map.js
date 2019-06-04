#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function getExistingPages (dir) {
  const pages = fs.readdirSync(dir);

  return pages
    .map(page => ({
      id: page,
      fsPath: path.join(dir, page),
    }))
    .filter(page => fs.statSync(page.fsPath).isDirectory());
}

function getPageInfo (pagePath) {
  const metaPath = path.join(pagePath, "_meta.json");
  const info = require(metaPath);

  return info;
}

function getDemoPagesMap () {
  const demoPath = path.join(__dirname, "..", "pages", "demo");

  const demoPages = getExistingPages(demoPath);

  return demoPages.map(page => ({
    id: page.id,
    info: getPageInfo(page.fsPath),
    path: `/demo/${page.id}`,
  }));
}

function build () {
  const args = process.argv.slice(2);
  const [mapFilePath] = args;

  fs.writeFileSync(mapFilePath, JSON.stringify(getDemoPagesMap()));

  console.log("🚀 Demo pages map has been built");
}

build();
