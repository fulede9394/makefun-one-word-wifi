import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Word for Your Wi-Fi: a single word describing the Wi-Fi.
// "Buffering" beats "Password123": it is the one experience every Wi-Fi
// user shares, and it reads as a network name.
const WORD = "Buffering";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
