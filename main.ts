import { writeFileSync, mkdirSync } from "node:fs";

// Angry Judge: The Short Rant Contest — one short, funny rant about a small
// everyday annoyance. Scene: you, alone at a supermarket self-checkout.
// Mechanism: the machine's false accusations escalate — milk, bread, then
// your own hands — and the rant ends on the reversal: you are the assistance now.
const entry = "You scan the milk. 'Unexpected item in the bagging area.' You scan the bread. 'Unexpected item.' You lift the bag — it flags your own hands. The screen blinks: 'Please wait for assistance.' The assistant is on break. You are the assistance now.";

if (entry.length < 1 || entry.length > 400 || entry.includes("\n")) {
  throw new Error("entry must be a single line of 1-400 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
