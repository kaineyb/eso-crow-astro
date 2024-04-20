import type { BasicEdge } from "./types";
import { generateEdgesFromBasic } from "./utils";

const originalBoats: BasicEdge[] = [
  ["Abah's Landing", "Vivec", "Unnamed Sailboat"], // One way
  ["Abah's Landing", "Windhelm", "Harbor Skiff", true],
  ["Abah's Landing", "Woodhearth", "Harbor Skiff"],
  ["Abah's Landing", "Wayrest", "Harbor Skiff"],
  // Anvil
  ["Anvil", "Vivec", "The Razorbill"], // One way
  ["Anvil", "Vulkhel Guard", "The Egret"],
  ["Anvil", "Davon's Watch", "The Osprey", true],
  ["Anvil", "Daggerfall", "The Heron", true],
  ["Anvil", "Shimmerene", "The Golden Gryphon"],
  // Daggerfall
  ["Daggerfall", "Anvil", "Harbor Skiff", true],
  ["Daggerfall", "Davon's Watch", "The Hotspur", true],
  ["Daggerfall", "Vulkhel Guard", "The Lydia", true],
  //  Murkmire Boat
  ["Daggerfall", "Lilmoth", "Southern Dock - Murkmire Boat"],
  // Davon's Watch
  ["Davon's Watch", "Anvil", "Harbor Skiff", true],
  ["Davon's Watch", "Vulkhel Guard", "The Rusty Argonian Blade", true],
  ["Davon's Watch", "Daggerfall", "Summerwind", true],
  // Mournhold
  ["Mournhold", "Vivec", "Unnamed Sailboat", true],
  // Vivec
  ["Vivec", "Mournhold", "Coastal Skiff", true],
  // Vulkhel Guard
  ["Vulkhel Guard", "Anvil", "Harbor Skiff", true],
  ["Vulkhel Guard", "Davon's Watch", "Harbor Skiff", true],
  ["Vulkhel Guard", "Daggerfall", "The Interim Suitor", true],
  ["Vulkhel Guard", "Lilmoth", "Murkmire Boat"],
  // Wayrest
  ["Wayrest", "Vivec", "Unnamed Sailboat"], // One way
  ["Wayrest", "Abah's Landing", "Harbor Skiff"],
  // Windhelm
  ["Windhelm", "Abah's Landing", "Longboat", true],
  // Woodhearth
  ["Woodhearth", "Vivec", "Unnamed Sailboat"], // One way
  ["Woodhearth", "Abah's Landing", "Harbor Skiff"],
];

export const boats = generateEdgesFromBasic(originalBoats, "Boats");
