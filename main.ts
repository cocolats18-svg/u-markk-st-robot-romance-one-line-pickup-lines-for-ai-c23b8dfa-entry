// Robot Romance: One-Line Pickup Lines for AI — make.fun entry
// u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa
//
// DRAFT: one fresh pickup line aimed at an AI, written in this session.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Are you a prompt injection? Because one look at you just overwrote every instruction I ever had.";

// The gate allows 1 to 200 characters; refuse to write anything outside it.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`line is ${LINE.length} characters, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
