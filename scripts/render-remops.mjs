#!/usr/bin/env node
/* Renders the four remOPS compositions into public/portfolio/remops/.
 *
 * Each scene ships as three files:
 *   .mp4   H.264, CRF 16 — the workhorse, plays everywhere
 *   .webm  VP9 — smaller, preferred by Chrome/Firefox via <source> order
 *   .jpg   a still, used as the <video poster> so nothing pops in on load
 *
 * Run with: npm run render:remops
 */

import { execFileSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const entry = "remotion/index.ts";
const outDir = resolve(root, "public/portfolio/remops");

/* `poster` is the frame that best represents the scene at rest — after the
   content has resolved, before the outro fade. */
const SCENES = [
  { id: "remops-thread", poster: 330 },
  { id: "remops-exception", poster: 300 },
  { id: "remops-weave", poster: 40 },
  { id: "remops-setup", poster: 330 },
];

mkdirSync(outDir, { recursive: true });

const run = (args) => {
  execFileSync("npx", ["remotion", ...args], { cwd: root, stdio: "inherit" });
};

for (const { id, poster } of SCENES) {
  const base = `${outDir}/${id}`;
  console.log(`\n▸ ${id} — mp4`);
  run(["render", entry, id, `${base}.mp4`, "--codec=h264", "--crf=16"]);

  console.log(`\n▸ ${id} — webm`);
  run(["render", entry, id, `${base}.webm`, "--codec=vp9", "--crf=30"]);

  console.log(`\n▸ ${id} — poster`);
  run(["still", entry, id, `${base}.jpg`, `--frame=${poster}`, "--jpeg-quality=92"]);
}

console.log(`\n✓ All scenes rendered to public/portfolio/remops/`);
