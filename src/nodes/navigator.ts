import type { BasicEdge } from "./types";
import { generateEdgesFromBasic } from "./utils";

const navigatorOG: BasicEdge[] = [
  //  Alliance Navigators

  //  AD - Selandilwen
  ["Vulkhel Guard", "Daggerfall", "Selandilwen"],
  ["Vulkhel Guard", "Davon's Watch", "Selandilwen"],

  ["Elden Root", "Vulkhel Guard", "Selandilwen"],

  ["Woodhearth", "Elden Root", "Selandilwen"],

  ["Vulkwasten", "Woodhearth", "Selandilwen"],

  ["Rawl'kha", "Vulkhel Guard", "Selandilwen"],
  ["Rawl'kha", "Vulkwasten", "Selandilwen"],

  //  EP - Falvis Raram

  ["Davon's Watch", "Riften", "Falvis Raram"],
  ["Davon's Watch", "Vulkhel Guard", "Falvis Raram"],
  ["Davon's Watch", "Daggerfall", "Falvis Raram"],

  ["Mournhold", "Stormhold", "Falvis Raram"],
  ["Mournhold", "Davon's Watch", "Falvis Raram"],

  ["Stormhold", "Windhelm", "Falvis Raram"],

  ["Riften", "Windhelm", "Falvis Raram"],

  //  DC - Azoufah

  ["Daggerfall", "Wayrest", "Azoufah"],
  ["Daggerfall", "Evermore", "Azoufah"],
  ["Daggerfall", "Vulkhel Guard", "Azoufah"],
  ["Daggerfall", "Davon's Watch", "Azoufah"],

  ["Shornhelm", "Wayrest", "Azoufah"],

  ["Sentinel", "Shornhelm", "Azoufah"],

  ["Evermore", "Sentinel", "Azoufah"],

  //  TODO Morrowind - Check Morrowind
  //  Captain Jenassa
  ["Elden Root", "Seyda Neen", "Captain Jenassa"],

  ["Daggerfall", "Seyda Neen", "Captain Jenassa"],
  ["Daggerfall", "Vivec", "Captain Jenassa"],

  ["Davon's Watch", "Seyda Neen", "Captain Jenassa"],
  ["Davon's Watch", "Vivec", "Captain Jenassa"],

  ["Stormhold", "Seyda Neen", "Captain Jenassa"],
  ["Stormhold", "Vivec", "Captain Jenassa"],

  //  Synda Imyam
  ["Vivec", "Mournhold", "Synda Imyam"],
  ["Vivec", "Wayrest", "Synda Imyam"],

  //  Taros Evosa
  ["Seyda Neen", "Bleakrock Village", "Taros Evosa"],

  //  TODO - CHECK Summerset -
  //  Ciryelda - also found in Port Hunding?

  //  Ciryelda is not here if you've evactuated Bleakrock Village!
  ["Bleakrock Village", "Alinor", "Ciryelda"],

  ["Davon's Watch", "Alinor", "Ciryelda"],
  ["Eagle's Strand", "Alinor", "Ciryelda"],

  ["Alinor", "Elden Root", "Ciryelda"],
  ["Alinor", "Mournhold", "Ciryelda"],
  ["Alinor", "Wayrest", "Ciryelda"],

  // One Ways w/ Different Vias
  ["Mournhold", "Elden Root", "Falvis Raram", true], // One Way
  ["Elden Root", "Mournhold", "Selandilwen", true], // One Way

  ["Woodhearth", "Stormhold", "Selandilwen", true], // One Way
  ["Stormhold", "Woodhearth", "Falvis Raram", true], // One Way

  ["Vulkwasten", "Windhelm", "Selandilwen", true], // One Way
  ["Windhelm", "Vulkwasten", "Falvis Raram", true], // One Way

  ["Rawl'kha", "Riften", "Selandilwen", true], // One Way
  ["Riften", "Rawl'kha", "Falvis Raram", true], // One Way

  ["Elden Root", "Wayrest", "Selandilwen", true], // One Way
  ["Wayrest", "Elden Root", "Azoufah", true], // One Way

  ["Mournhold", "Wayrest", "Falvis Raram", true], // One Way
  ["Wayrest", "Mournhold", "Azoufah", true], // One Way

  ["Woodhearth", "Shornhelm", "Selandilwen", true], // One Way
  ["Shornhelm", "Woodhearth", "Azoufah", true], // One Way

  ["Stormhold", "Shornhelm", "Falvis Raram", true], // One Way
  ["Shornhelm", "Stormhold", "Azoufah", true], // One Way

  ["Vulkwasten", "Sentinel", "Selandilwen", true], // One Way
  ["Sentinel", "Vulkwasten", "Azoufah", true], // One Way

  ["Windhelm", "Sentinel", "Falvis Raram", true], // One Way
  ["Sentinel", "Windhelm", "Azoufah", true], // One Way

  ["Rawl'kha", "Evermore", "Selandilwen", true], // One Way
  ["Evermore", "Rawl'kha", "Azoufah", true], // One Way

  ["Riften", "Evermore", "Falvis Raram", true], // One Way
  ["Evermore", "Riften", "Azoufah", true], // One Way

  ["Gnisis", "Sadrith Mora", "Ranor Sadralo", true], // One Way
  ["Sadrith Mora", "Gnisis", "Rinori Mathendis", true], // One Way

  ["Sadrith Mora", "Tel Mora", "Rinori Mathendis", true], // One Way
  ["Tel Mora", "Sadrith Mora", "Bolnora Romavel", true], // One Way

  ["Sadrith Mora", "Vivec", "Rinori Mathendis", true], // One Way
  ["Vivec", "Sadrith Mora", "Synda Imyam", true], // One Way

  ["Elden Root", "Vivec", "Captain Jenassa", true], // One Way
  ["Vivec", "Elden Root", "Synda Imyam", true], // One Way

  ["Seyda Neen", "Port Hunding", "Taros Evosa", true], // One Way
  ["Port Hunding", "Seyda Neen", "Davak Hlaren", true], // One Way

  ["Seyda Neen", "Eagle's Strand", "Taros Evosa", true], // One Way
  ["Eagle's Strand", "Seyda Neen", "Sathasa Falen", true], // One Way
];

export const navigator = generateEdgesFromBasic(navigatorOG, "Navigators");
