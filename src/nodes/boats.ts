import type { BasicEdge } from "./types";
import { generateEdgesFromBasic } from "./utils";

const originalBoats: BasicEdge[] = [
  ["Abah's Landing", "Woodhearth", "Harbor Skiff"],
  ["Abah's Landing", "Wayrest", "Harbor Skiff"],
  ["Anvil", "Shimmerene", "The Golden Gryphon"],
  ["Daggerfall", "Lilmoth", "Southern Dock - Murkmire Boat"],
  ["Vulkhel Guard", "Lilmoth", "Murkmire Boat"],

  // One Ways w/ Same Via
  ["Abah's Landing", "Vivec", "Unnamed Sailboat", true], // One way
  ["Anvil", "Vivec", "The Razorbill", true], // One way
  ["Wayrest", "Vivec", "Unnamed Sailboat", true], // One way
  ["Woodhearth", "Vivec", "Unnamed Sailboat", true], // One way

  // One Ways w/ Different Via:
  ["Daggerfall", "Anvil", "Harbor Skiff", true], // One way
  ["Anvil", "Daggerfall", "The Heron", true], // One way

  ["Daggerfall", "Davon's Watch", "The Hotspur", true], // One way
  ["Davon's Watch", "Daggerfall", "Summerwind", true], // One way

  ["Vivec", "Mournhold", "Coastal Skiff", true], // One way
  ["Mournhold", "Vivec", "Unnamed Sailboat", true], // One way

  ["Davon's Watch", "Anvil", "Harbor Skiff", true], // One way
  ["Anvil", "Davon's Watch", "The Osprey", true], // One way

  ["Vulkhel Guard", "Anvil", "Harbor Skiff", true], // One way
  ["Anvil", "Vulkhel Guard", "The Egret", true], // One way

  ["Davon's Watch", "Vulkhel Guard", "The Rusty Argonian Blade", true], // One way
  ["Vulkhel Guard", "Davon's Watch", "Harbor Skiff", true], // One way

  ["Daggerfall", "Vulkhel Guard", "The Lydia", true], // One way
  ["Vulkhel Guard", "Daggerfall", "The Interim Suitor", true], // One way

  ["Windhelm", "Abah's Landing", "Longboat", true], // One way
  ["Abah's Landing", "Windhelm", "Harbor Skiff", true], // One way
];

export const boats = generateEdgesFromBasic(originalBoats, "Boats");
