import type { BasicEdge } from "./types";
import { generateEdgesFromBasic } from "./utils";

const originalFactionBoatswain: BasicEdge[] = [
  //  From Data on https://en.uesp.net/wiki/Online:Boatswains

  //  Aldmeri Dominion
  //  Sugar-Claws will take you both ways
  ["Eagle's Strand", "Vulkhel Guard", "Sugar-Claws"],
  //  Scout Linimondil will take you both ways
  ["Haven", "Skywatch", "Scout Linimondil"],
  //  Daggerfall Covenant
  //  Gilzir will take you three ways
  ["Daggerfall", "Port Hunding", "Gilzir"],
  ["Daggerfall", "Stonetooth Fortress", "Gilzir"],
  ["Port Hunding", "Stonetooth Fortress", "Gilzir"],

  //  Ebonheart Pact
  //  TODO The Boatmaster is quest NPC that requires an invite?
  //  ["Mournhold ", "Shad Astula", "The Boatmaster"],

  //  Dastas Arenim is not here if you've evactuated Bleakrock Village!
  //  ["Bleakrock Village", "Seyda Neen", "Dastas Arenim"],

  ["Bleakrock Village", "Davon's Watch", "Liezl"],
  ["Bleakrock Village", "Dhalmora", "Liezl"],
  ["Davon's Watch", "Dhalmora", "Liezl"],
  ["Alten Corimont", "Windhelm", "Muz-Muz"],

  // One Ways w/ Different Vias
  ["Sentinel", "Wayrest", "Captain Carlier", true], // One Way
  ["Wayrest", "Sentinel", "Zihlijdel", true], // One Way
];

export const factionBoatswain = generateEdgesFromBasic(
  originalFactionBoatswain,
  "Boatswain"
);
