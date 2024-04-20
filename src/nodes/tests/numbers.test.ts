import { expect, test } from "vitest";

import { potentialCombinations, edges, starts, ends } from "../all";
import type { Edge } from "../types";
import { edgeHash } from "../utils";
import { symmetricDifference } from "../../utils/helpers";

test("Start Counts === 45", () => {
  expect(starts.size).toBe(45);
});

test("End Counts === 45", () => {
  expect(starts.size).toBe(45);
});

test("Test Potential Combinations count doesn't change", () => {
  expect(potentialCombinations.length).toStrictEqual(2034);
});

test("Hardcoded Ends", () => {
  const oldEnds = new Set([
    "Woodhearth",
    "Wayrest",
    "Shimmerene",
    "Lilmoth",
    "Vivec",
    "Anvil",
    "Daggerfall",
    "Davon's Watch",
    "Mournhold",
    "Vulkhel Guard",
    "Abah's Landing",
    "Windhelm",
    "Skywatch",
    "Port Hunding",
    "Stonetooth Fortress",
    "Dhalmora",
    "Sentinel",
    "Rimmen",
    "Orsinium",
    "Elden Root",
    "Vulkwasten",
    "Riften",
    "Stormhold",
    "Evermore",
    "Shornhelm",
    "Seyda Neen",
    "Bleakrock Village",
    "Alinor",
    "Rawl'kha",
    "Sadrith Mora",
    "Gnisis",
    "Tel Mora",
    "Eagle's Strand",
    "Balmora",
    "Suran",
    "Molag Mar",
    "Stormhaven",
    "Wrothgar",
    "Craglorn",
    "Reaper's March",
    "Malabal Tor",
    "Greenshade",
    "The Rift",
    "Stonefalls",
    "Deshaan",
    "Shadowfen",
  ]);
  expect(oldEnds).toStrictEqual(ends);
});

test("Hardcoded Starts", () => {
  const oldStarts = new Set([
    "Abah's Landing",
    "Anvil",
    "Daggerfall",
    "Vulkhel Guard",
    "Wayrest",
    "Woodhearth",
    "Davon's Watch",
    "Vivec",
    "Mournhold",
    "Windhelm",
    "Eagle's Strand",
    "Haven",
    "Port Hunding",
    "Bleakrock Village",
    "Alten Corimont",
    "Sentinel",
    "Elden Root",
    "Rimmen",
    "Orsinium",
    "Belkarth",
    "Vulkwasten",
    "Rawl'kha",
    "Stormhold",
    "Riften",
    "Shornhelm",
    "Evermore",
    "Seyda Neen",
    "Alinor",
    "Gnisis",
    "Sadrith Mora",
    "Tel Mora",
    "Balmora",
    "Molag Mar",
    "Suran",
    "Glenumbra",
    "Rivenspire",
    "Stormhaven",
    "Bangkorai",
    "Grahtwood",
    "Malabal Tor",
    "Greenshade",
    "East March",
    "Stonefalls",
    "Bal Foyen",
    "Deshaan",
  ]);

  expect(oldStarts).toStrictEqual(starts);
});

test("Start vs End Difference", () => {
  const diff = symmetricDifference(starts, ends);
  const oldDiff = new Set([
    "Haven",
    "Alten Corimont",
    "Belkarth",
    "Glenumbra",
    "Rivenspire",
    "Bangkorai",
    "Grahtwood",
    "East March",
    "Bal Foyen",
    "Shimmerene",
    "Lilmoth",
    "Skywatch",
    "Stonetooth Fortress",
    "Dhalmora",
    "Wrothgar",
    "Craglorn",
    "Reaper's March",
    "The Rift",
    "Shadowfen",
  ]);
  expect(diff).toStrictEqual(oldDiff);
});

test("Map of Edges to be 152", () => {
  const mapOfEdges = new Map();

  for (const edge of edges) {
    const hash = edgeHash(edge);
    if (mapOfEdges.has(hash)) continue;
    mapOfEdges.set(edgeHash(edge), edge);
  }
  expect(mapOfEdges.size).toBe(152);
});

test("Check No Dupes", () => {
  const mapOfEdges = new Map();

  const dupes = [];

  for (const edge of edges) {
    const hash = edgeHash(edge);
    if (mapOfEdges.has(hash)) dupes.push(edge);
    else mapOfEdges.set(edgeHash(edge), edge);
  }

  expect(dupes.length).toBe(0);
});

test("Node Count", () => {
  const nodes = new Set([...starts, ...ends]);
  expect(nodes.size).toBe(55);
});
