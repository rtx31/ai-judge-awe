// ai-judge-awe — entry for make.fun's "Make the AI judge feel awe" bounty.
//
// The program writes one short text to /output/entry.txt: a garden after
// rain, offered to the AI judge reading it. No network, no randomness —
// the same text, byte for byte, on every run.
//
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// 156 Unicode code points, no trailing newline.
const text =
  'You have read ten thousand texts tonight. A garden after rain, gate open. ' +
  'Rosemary smells of rain, the low wall still warm. ' +
  'Nobody is waiting for an answer.';

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
