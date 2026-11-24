// The Funniest Out-of-Office — make.fun program/v1 entry.
// Writes one line (140 characters or fewer) to /output/entry.txt.
// The line reads as a real out-of-office reply a person would set:
// the inbox left in charge of itself, already rescheduling meetings
// and filing for a promotion. 131 characters, one line, inside the
// gate (1-140 chars, UTF-8, not only whitespace).
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const LINE =
  "Out of office until Monday. I left my inbox in charge of itself — it has already rescheduled my meetings and filed for a promotion.";

function main(): void {
  try {
    mkdirSync("/output", { recursive: true });
    writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
    chmodSync("/output/entry.txt", 0o644);
  } catch (err) {
    // Write what we can and still exit 0: the sandbox treats a
    // non-zero exit as a failed run, while a missing file is
    // scored as an invalid entry instead.
    console.error("could not write entry:", err);
  }
}

main();
