import type { BasicEdge } from "./types";
import { generateEdgesFromBasic } from "./utils";

export const siltstridersOG: BasicEdge[] = [
  // One Way
  ["Seyda Neen", "Gnisis", "Medyn Hleran", true],

  // One Way w/ different vias
  ["Gnisis", "Balmora", "Amili Yahaz", true], // One Way
  ["Balmora", "Gnisis", "Nevos Sareloth", true], // One Way

  ["Molag Mar", "Suran", "Narisa Androm", true], // One Way
  ["Suran", "Molag Mar", "Faven Thendas", true], // One Way

  ["Suran", "Seyda Neen", "Faven Thendas", true], // One Way
  ["Seyda Neen", "Suran", "Medyn Hleran", true], // One Way

  ["Tel Mora", "Molag Mar", "Adosi Delvi", true], // One Way
  ["Molag Mar", "Tel Mora", "Narisa Androm", true], // One Way

  ["Vivec", "Balmora", "Helseth Sadalvel", true], // One Way
  ["Balmora", "Vivec", "Nevos Sareloth", true], // One Way

  ["Vivec", "Gnisis", "Helseth Sadalvel", true], // One Way
  ["Gnisis", "Vivec", "Amili Yahaz", true], // One Way

  ["Suran", "Vivec", "Faven Thendas", true], // One Way,
  ["Vivec", "Suran", "Helseth Sadalvel", true], // One Way,

  ["Vivec", "Tel Mora", "Helseth Sadalvel", true], // One Way,
  ["Tel Mora", "Vivec", "Adosi Delvi", true], // One Way
];

export const siltstriders = generateEdgesFromBasic(
  siltstridersOG,
  "Siltstriders"
);
