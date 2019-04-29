#!/usr/bin/env node

const path = require("path");
const { execSync } = require("child_process");

function makeLink () {
  const libs = ["react", "react-jss"];
  const srcNodeModules = path.resolve(__dirname, "../node_modules");
  const targetNodeModules = path.resolve(__dirname, "../../node_modules");

  libs.forEach(lib => {
    const srcPath = path.join(srcNodeModules, lib);

    execSync(`ln -sf ${srcPath} ${targetNodeModules}`);
  });
}

makeLink();
