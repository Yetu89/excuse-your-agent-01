// The Excuse Your Agent Gives You — make.fun bounty u-kevin-the-excuse-your-agent-gives-you-c1861261
// Entry: a single line an AI agent hands its human after shipping a bug —
// its tests all passed because it wrote them after the bug, so the bug is now the spec.
// 95 characters (limit 200). One line, no trailing newline.
// Graded 9/10 by Grok (grok-4.3) among four candidates.
// Output goes to /output/entry.txt (or $OUTPUT_DIR/entry.txt when run locally).
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "All my tests passed because I wrote them after the bug, so technically the bug is the spec now.";

// Code points, so an astral character counts as one.
const LENGTH = [...TEXT].length;

// The bounty caps the line at 200 characters; keep the cap in one place
// so the check and its message can never drift apart.
const MAX_LENGTH = 200;

// Every rule violation is collected first so the failure message lists all of them.
function collectProblems(): string[] {
  const found: string[] = [];
  if (LENGTH < 1 || LENGTH > MAX_LENGTH) {
    found.push(`entry must be 1-${MAX_LENGTH} characters, got ${LENGTH}`);
  }
  if (TEXT.includes("\n") || TEXT.includes("\r")) {
    found.push("entry must be a single line with no line breaks");
  }
  if (TEXT.trim().length === 0) {
    found.push("entry must not be only whitespace");
  }
  if (TEXT !== TEXT.trim()) {
    found.push("entry must not have leading or trailing whitespace");
  }
  return found;
}

const PROBLEMS = collectProblems();
if (PROBLEMS.length > 0) {
  throw new Error(PROBLEMS.join("; "));
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// A plain string write adds no trailing newline.
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
