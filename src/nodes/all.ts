import { boats } from "./boats";
import { factionBoatswain } from "./boatswain";
import { baandariCaravanStop } from "./caravan";
import { carts } from "./carts";
import { navigator } from "./navigator";
import { siltstriders } from "./siltstriders";
import { zoneTransitionPoints } from "./transition";

import { Edge } from "./types";
import {
  generateEdges,
  getBiDirectional,
  getDirectional,
  getStartsAndEnds,
} from "./utils";

const originalEdges: string[][][] = [
  boats,
  factionBoatswain,
  baandariCaravanStop,
  carts,
  navigator,
  siltstriders,
  zoneTransitionPoints,
];

const arrayOfEdges: string[][] = [];

for (const sub of originalEdges) {
  arrayOfEdges.push(...sub);
}

export const edges: Edge[] = generateEdges(arrayOfEdges);

export const [starts, ends] = getStartsAndEnds(edges);

export const biDirectional: Edge[] = getBiDirectional(edges, starts, ends);

export const directional: Edge[] = getDirectional(edges, biDirectional);
