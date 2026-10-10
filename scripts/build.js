const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const output = path.join(root, "dist");
const workerAssets = path.join(root, "worker-assets");

if (!fs.existsSync(path.join(root, "index.html"))) {
  throw new Error("index.html is missing; cannot build the static site");
}

fs.mkdirSync(output, { recursive: true });
fs.copyFileSync(path.join(root, "index.html"), path.join(output, "index.html"));
fs.mkdirSync(workerAssets, { recursive: true });
fs.copyFileSync(path.join(root, "index.html"), path.join(workerAssets, "index.html"));
console.log("Static site built in dist/");
