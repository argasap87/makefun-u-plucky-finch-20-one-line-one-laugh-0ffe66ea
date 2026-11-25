import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Hook: the therapist's boundary is itself a grammar rule — every
// statement a patient makes becomes a question, so therapy turns into
// a punctuation test. One tight line, no setup, punchline lands inside it.
const LINE = "Therapist set boundaries: I only answer if you end your sentence with a question mark.";

// Gate guard: single funny line, 1-200 chars, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`Line fails gate: length ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
