import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Hook: your phone is horrified by your morning face. Face ID doesn't fail
// or refuse — it flinches. One image, punchline on the last word, zero setup.
// Supersedes the therapist-boundaries line: shorter, faster, fresher.
const LINE = "My phone's Face ID flinches every morning.";

// Gate guard: single funny line, 1-200 chars, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`Line fails gate: length ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
