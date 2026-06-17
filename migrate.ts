import fs from "fs";
import path from "path";

function copyRecursiveSync(src: string, dest: string) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Remove old src and index.html
if (fs.existsSync("./src")) fs.rmSync("./src", { recursive: true, force: true });
if (fs.existsSync("./index.html")) fs.unlinkSync("./index.html");
if (fs.existsSync("./package.json")) fs.unlinkSync("./package.json");
if (fs.existsSync("./vite.config.ts")) fs.unlinkSync("./vite.config.ts");
if (fs.existsSync("./tsconfig.json")) fs.unlinkSync("./tsconfig.json");

// Copy all from /repo to /
copyRecursiveSync("./repo", "./");

// Remove original bun files
if (fs.existsSync("./bun.lock")) fs.unlinkSync("./bun.lock");
if (fs.existsSync("./bunfig.toml")) fs.unlinkSync("./bunfig.toml");

// Remove repo directory
fs.rmSync("./repo", { recursive: true, force: true });

console.log("Migration completed.");
