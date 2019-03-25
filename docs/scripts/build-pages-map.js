#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function readComponentsDir (dir, parentName = null) {
  const components = fs.readdirSync(dir);

  return components.reduce((acc, c) => {
    const componentPath = path.join(dir, c);

    if (fs.statSync(componentPath).isDirectory() && /[A-Z]/.test(c)) {
      const key = parentName ? [parentName, c].join("-") : c;

      acc[key] = componentPath;

      acc = {
        ...acc,
        ...readComponentsDir(componentPath, c),
      };
    }

    return acc;
  }, {});
}

function build () {
  const args = process.argv.slice(2);
  const [mapFilePath] = args;

  const componentsPath = path.join(__dirname, "..", "..", "src", "components");
  const componentsMap = readComponentsDir(componentsPath);

  fs.writeFileSync(mapFilePath, JSON.stringify(componentsMap));
}

build();
