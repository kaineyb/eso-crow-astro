import type { BasicEdge } from "./types";
import { generateEdgesFromBasic } from "./utils";
//  TODO ZTP was rushed, needs checking
//  Also these are ZONAL not Cities.

const ZTP_LABEL = "Zone Transition Point";

const zoneTransitionPointsOG: BasicEdge[] = [
  //  DC
  ["Glenumbra", "Stormhaven", ZTP_LABEL],

  ["Rivenspire", "Stormhaven", ZTP_LABEL],

  ["Stormhaven", "Wrothgar", ZTP_LABEL],

  ["Bangkorai", "Stormhaven", ZTP_LABEL],

  ["Bangkorai", "Wrothgar", ZTP_LABEL],

  ["Bangkorai", "Craglorn", ZTP_LABEL],

  //  AD

  ["Grahtwood", "Reaper's March", ZTP_LABEL],

  ["Malabal Tor", "Reaper's March", ZTP_LABEL],

  ["Grahtwood", "Malabal Tor", ZTP_LABEL],

  ["Greenshade", "Malabal Tor", ZTP_LABEL],

  ["Grahtwood", "Greenshade", ZTP_LABEL],

  //  EP

  ["East March", "The Rift", ZTP_LABEL],

  ["Stonefalls", "The Rift", ZTP_LABEL],

  ["Bal Foyen", "Stonefalls", ZTP_LABEL],

  ["Stonefalls", "Deshaan", ZTP_LABEL],

  ["Deshaan", "Shadowfen", ZTP_LABEL],
];

export const zoneTransitionPoints = generateEdgesFromBasic(
  zoneTransitionPointsOG,
  "zoneTransitionPoints"
);
