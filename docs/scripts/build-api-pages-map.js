#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { sortBy } = require("lodash");

function getApiPagesMap () {
  const meta = require(path.join(
    __dirname,
    "..",
    "pages",
    "api",
    "_meta.json"
  ));

  return sortBy(meta.components, "info.title");
}

function build () {
  const args = process.argv.slice(2);
  const [mapFilePath] = args;

  fs.writeFileSync(mapFilePath, JSON.stringify(getApiPagesMap()));
  console.log("🚀 API pages map has been built");
}

build();
