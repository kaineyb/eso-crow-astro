import { boats } from "./boats";
import { factionBoatswain } from "./boatswain";
import { baandariCaravanStop } from "./caravan";
import { carts } from "./carts";
import { navigator } from "./navigator";
import { siltstriders } from "./siltstriders";
import { zoneTransitionPoints } from "./transition";

import { Edge, type SerializedEdge } from "./types";
import {
  generateEdges,
  getBiDirectional,
  getPotentialCombinations,
  getDirectional,
  getStartsAndEnds,
  getAllSerializedEdges,
} from "./utils";

const basicEdges: SerializedEdge[] = [
  ...boats,
  ...factionBoatswain,
  ...baandariCaravanStop,
  ...carts,
  ...navigator,
  ...siltstriders,
  ...zoneTransitionPoints,
];

export const edges: Edge[] = generateEdges(basicEdges);

export const [starts, ends] = getStartsAndEnds(edges);

export const biDirectional: Edge[] = getBiDirectional(edges, starts, ends);

export const directional: Edge[] = getDirectional(edges, biDirectional);

export const potentialCombinations: string[][] = getPotentialCombinations(
  starts,
  ends
);

export const serialisedEdges: SerializedEdge[] = getAllSerializedEdges(edges);
