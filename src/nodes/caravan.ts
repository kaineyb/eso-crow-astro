import type { BasicEdge } from "./types";
import { generateEdgesFromBasic } from "./utils";

const originalBaandariCaravanStop: BasicEdge[] = [
  ["Elden Root", "Rimmen", "Zemmarga"],
  ["Rimmen", "Wayrest", "Zemmarga"],
  ["Rimmen", "Mournhold", "Zemmarga"],
];

export const baandariCaravanStop = generateEdgesFromBasic(
  originalBaandariCaravanStop,
  "baandariCaravanStop"
);
