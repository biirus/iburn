#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const toSlug = str => {
  return str.toLowerCase();
};

const toName = str => {
  return str
    .split("-")
    .map(capitalize)
    .join("");
};

function readComponentsDir (dir, parentName = null) {
  const components = fs.readdirSync(dir);

  return components.reduce((acc, c) => {
    const componentPath = path.join(dir, c);

    if (fs.statSync(componentPath).isDirectory() && /[A-Z]/.test(c)) {
      const key = parentName ? [parentName, c].join("-") : c;

      acc.push(key);
      acc = acc.concat(readComponentsDir(componentPath, c));
    }

    return acc;
  }, []);
}

function build () {
  const args = process.argv.slice(2);
  const [mapFilePath] = args;

  const componentsPath = path.join(__dirname, "..", "..", "src", "components");
  const componentsNames = readComponentsDir(componentsPath);

  const pagesMap = componentsNames.map(component => {
    return {
      id: component,
      path: `${toSlug(component)}`,
      name: toName(component),
    };
  });

  fs.writeFileSync(mapFilePath, JSON.stringify(pagesMap));

  console.log("PAGES MAP HAS BEEN SUCCESFULLY BUILT");
}

build();
