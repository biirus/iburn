#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function getApiPagesMap () {
  const meta = require(path.join(
    __dirname,
    "..",
    "pages",
    "api",
    "_meta.json"
  ));

  return meta.components;
}

function build () {
  const args = process.argv.slice(2);
  const [mapFilePath] = args;

  fs.writeFileSync(mapFilePath, JSON.stringify(getApiPagesMap()));
  console.log("API pages map has been built");
}

build();
