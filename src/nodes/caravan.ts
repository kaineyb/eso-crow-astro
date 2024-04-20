import type { BasicEdge } from "./types";
import { fleshOutSuperBasic } from "./utils";

const originalBaandariCaravanStop: BasicEdge[] = [
  ["Rimmen", "Elden Root", "Zemmarga"],
  ["Elden Root", "Rimmen", "Zemmarga"],
  ["Rimmen", "Wayrest", "Zemmarga"],
  ["Wayrest", "Rimmen", "Zemmarga"],
  ["Rimmen", "Mournhold", "Zemmarga"],
  ["Mournhold", "Rimmen", "Zemmarga"],
];

export const baandariCaravanStop = fleshOutSuperBasic(
  originalBaandariCaravanStop,
  "baandariCaravanStop"
);
