const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const output = path.join(root, "dist");

if (!fs.existsSync(path.join(root, "index.html"))) {
  throw new Error("index.html is missing; cannot build the static site");
}

fs.mkdirSync(output, { recursive: true });
fs.copyFileSync(path.join(root, "index.html"), path.join(output, "index.html"));
console.log("Static site built in dist/");
