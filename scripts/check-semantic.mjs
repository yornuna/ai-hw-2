#!/usr/bin/env node
import { readFileSync } from "node:fs";

const LANDMARKS = ["header", "nav", "main", "section", "article", "footer", "aside"];

const files = process.argv.slice(2);
let failed = false;

for (const file of files) {
  let content;
  try {
    content = readFileSync(file, "utf-8");
  } catch {
    continue;
  }

  const found = LANDMARKS.some((el) =>
    new RegExp(`<${el}[\\s>/]`, "i").test(content),
  );

  if (!found) {
    process.stderr.write(`\n❌ ${file} — no semantic landmark elements found.\n`);
    process.stderr.write("   Replace generic <div> wrappers with semantic HTML:\n");
    process.stderr.write("   <header>  site header / hero\n");
    process.stderr.write("   <nav>     navigation links\n");
    process.stderr.write("   <main>    primary page content\n");
    process.stderr.write("   <section> thematic sections\n");
    process.stderr.write("   <footer>  site footer\n\n");
    failed = true;
  }
}

if (failed) {
  process.stderr.write("💡 Semantic HTML improves accessibility and SEO.\n\n");
  process.exit(1);
}
