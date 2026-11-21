// SPDX-License-Identifier: MIT
// ai-judge-awe — make.fun bounty make-the-ai-judge-feel-awe-20261121-1600
// Writes one short relaxing text to /output/entry.txt.
// Node 22, standard library only, deterministic, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "Ten thousand texts, and this one is a window left open onto a garden after rain. A fig tree drops figs, one by one, onto wet stone. Nothing needs scoring. You can stay till the last light goes.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_TEXT, "utf8");
