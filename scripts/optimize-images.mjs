#!/usr/bin/env node
/**
 * Konwertuje wszystkie PNG z /public do WebP (max 2000px szerokości, q80).
 * Tworzy .webp obok oryginałów. Nie nadpisuje istniejących nowszych .webp.
 * Uruchom: node scripts/optimize-images.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = path.resolve("public");
const MAX_WIDTH = 2000;
const QUALITY = 80;

const formatBytes = (n) => {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(2)} MB`;
};

async function walk(dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (/\.(png|jpe?g)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

async function convert(file) {
  const ext = path.extname(file);
  const out = file.slice(0, -ext.length) + ".webp";

  try {
    const [srcStat, dstStat] = await Promise.all([
      fs.stat(file),
      fs.stat(out).catch(() => null),
    ]);
    if (dstStat && dstStat.mtimeMs >= srcStat.mtimeMs) {
      return { file, skipped: true, srcSize: srcStat.size, outSize: dstStat.size };
    }

    const image = sharp(file);
    const meta = await image.metadata();
    const pipeline = (meta.width ?? 0) > MAX_WIDTH
      ? image.resize({ width: MAX_WIDTH, withoutEnlargement: true })
      : image;
    await pipeline.webp({ quality: QUALITY, effort: 5 }).toFile(out);

    const outStat = await fs.stat(out);
    return { file, srcSize: srcStat.size, outSize: outStat.size };
  } catch (err) {
    return { file, error: err.message };
  }
}

const files = await walk(PUBLIC_DIR);
console.log(`Found ${files.length} raster image(s)\n`);

let totalSrc = 0;
let totalOut = 0;
const results = await Promise.all(files.map(convert));
for (const r of results) {
  const rel = path.relative(PUBLIC_DIR, r.file);
  if (r.error) {
    console.log(`✗  ${rel}  ERROR  ${r.error}`);
    continue;
  }
  totalSrc += r.srcSize;
  totalOut += r.outSize;
  const ratio = ((1 - r.outSize / r.srcSize) * 100).toFixed(1);
  const tag = r.skipped ? "·" : "✓";
  console.log(
    `${tag}  ${rel.padEnd(40)}  ${formatBytes(r.srcSize).padStart(10)} → ${formatBytes(r.outSize).padStart(10)}  (-${ratio}%)`
  );
}

console.log(
  `\nTotal:  ${formatBytes(totalSrc)} → ${formatBytes(totalOut)}  (saved ${formatBytes(totalSrc - totalOut)}, -${((1 - totalOut / totalSrc) * 100).toFixed(1)}%)`
);
