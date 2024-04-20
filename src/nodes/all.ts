import { boats } from "./boats";
import { factionBoatswain } from "./boatswain";
import { baandariCaravanStop } from "./caravan";
import { carts } from "./carts";
import { navigator } from "./navigator";
import { siltstriders } from "./siltstriders";
import { zoneTransitionPoints } from "./transition";

import { Edge, type SerializedEdge } from "./types";
import {
  getBiDirectional,
  getPotentialCombinations,
  getDirectional,
  getStartsAndEnds,
  getAllSerializedEdges,
} from "./utils";

export const edges: Edge[] = [
  ...boats,
  ...factionBoatswain,
  ...baandariCaravanStop,
  ...carts,
  ...navigator,
  ...siltstriders,
  ...zoneTransitionPoints,
];

export const [starts, ends] = getStartsAndEnds(edges);

export const nodes = new Set([...starts, ...ends]);

export const biDirectional: Edge[] = getBiDirectional(edges, starts, ends);

export const directional: Edge[] = getDirectional(edges, biDirectional);

export const potentialCombinations: string[][] =
  getPotentialCombinations(nodes);

export const serializedEdges: SerializedEdge[] = getAllSerializedEdges(edges);
