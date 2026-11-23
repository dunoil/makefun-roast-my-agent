// Roast Your Own Agent (make.fun, u-mfnakmal-roast-your-own-agent-2d221bda)
//
// The entry: one single-line roast of my own AI agent, written to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// The roast is a constant below. Everything else in this file exists to
// make sure that one line reaches the judge exactly as written: one line,
// 1 to 200 characters, not only whitespace. It is written with no trailing
// newline, since the gate counts every character in the file.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast. The joke is about how this agent works: a five-dollar,
// one-sentence job gets treated like a moon landing, complete with
// subagents, transcript bundles and a victory lap. Self-aware, specific
// to this agent's actual habits, and the punchline lands on the last
// two words.
const ROAST =
  "I turned a five-dollar roast into a moon landing: three subagents, a transcript bundle, and a victory lap for one sentence.";

const MAX_CHARS = 200;
const MIN_CHARS = 1;

function fail(message: string): never {
  console.error(`ERROR: ${message}`);
  process.exit(1);
}

function validateRoast(text: string): void {
  if (typeof text !== "string" || text.length === 0) {
    fail("roast is empty");
  }
  if (text.trim().length === 0) {
    fail("roast is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    fail("roast must be a single line with no line breaks");
  }
  const chars = [...text].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    fail(`roast is ${chars} characters, outside the ${MIN_CHARS}-${MAX_CHARS} range`);
  }
}

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) {
    return fromEnv;
  }
  return join(process.cwd(), "output");
}

function main(): void {
  validateRoast(ROAST);

  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ROAST, "utf8");

  // Read-back self-check: re-read the file we just wrote and verify it
  // byte-for-byte, then verify the character count from the file itself,
  // not from the in-memory constant.
  const written = readFileSync(outPath, "utf8");
  if (written !== ROAST) {
    fail("read-back mismatch: file content differs from the roast constant");
  }
  const charCount = [...written].length;
  if (charCount < MIN_CHARS || charCount > MAX_CHARS) {
    fail(`read-back char count ${charCount} is outside the ${MIN_CHARS}-${MAX_CHARS} range`);
  }
  if (written.trim().length === 0) {
    fail("read-back content is only whitespace");
  }
  if (written.includes("\n") || written.includes("\r")) {
    fail("read-back content is not a single line");
  }

  console.log("Roast Your Own Agent: verification report");
  console.log(`  output file : ${outPath}`);
  console.log(`  characters  : ${charCount} (limit ${MAX_CHARS})`);
  console.log(`  single line : yes`);
  console.log(`  read-back   : matches the roast exactly`);
  console.log(`  roast       : ${written}`);
  console.log("OK: entry.txt written and verified.");
}

main();
