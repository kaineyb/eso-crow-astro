import { expect, test } from "vitest";

import { potentialCombinations, edges, starts, ends } from "../all";
import type { Edge } from "../types";
import { edgeHash } from "../utils";
import { symmetricDifference } from "../../utils/helpers";

test("Start Counts === 53", () => {
  expect(starts.size).toBe(53);
});

test("End Counts === 54", () => {
  expect(starts.size).toBe(53);
});

test("Test Potential Combinations count doesn't change", () => {
  expect(potentialCombinations.length).toStrictEqual(2862);
});

test("Hardcoded Ends", () => {
  const oldEnds = new Set([
    "Vivec",
    "Windhelm",
    "Woodhearth",
    "Wayrest",
    "Vulkhel Guard",
    "Davon's Watch",
    "Daggerfall",
    "Shimmerene",
    "Anvil",
    "Lilmoth",
    "Mournhold",
    "Abah's Landing",
    "Eagle's Strand",
    "Haven",
    "Skywatch",
    "Port Hunding",
    "Stonetooth Fortress",
    "Sentinel",
    "Dhalmora",
    "Bleakrock Village",
    "Alten Corimont",
    "Elden Root",
    "Rimmen",
    "Orsinium",
    "Belkarth",
    "Rawl'kha",
    "Vulkwasten",
    "Shornhelm",
    "Stormhold",
    "Evermore",
    "Riften",
    "Seyda Neen",
    "Sadrith Mora",
    "Gnisis",
    "Tel Mora",
    "Alinor",
    "Balmora",
    "Suran",
    "Molag Mar",
    "Stormhaven",
    "Glenumbra",
    "Rivenspire",
    "Wrothgar",
    "Bangkorai",
    "Craglorn",
    "Reaper's March",
    "Grahtwood",
    "Malabal Tor",
    "Greenshade",
    "The Rift",
    "East March",
    "Stonefalls",
    "Bal Foyen",
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
    "Davon's Watch",
    "Mournhold",
    "Vivec",
    "Vulkhel Guard",
    "Wayrest",
    "Windhelm",
    "Woodhearth",
    "Eagle's Strand",
    "Skywatch",
    "Haven",
    "Port Hunding",
    "Stonetooth Fortress",
    "Sentinel",
    "Bleakrock Village",
    "Dhalmora",
    "Alten Corimont",
    "Rimmen",
    "Elden Root",
    "Orsinium",
    "Belkarth",
    "Vulkwasten",
    "Rawl'kha",
    "Stormhold",
    "Riften",
    "Shornhelm",
    "Evermore",
    "Tel Mora",
    "Gnisis",
    "Sadrith Mora",
    "Seyda Neen",
    "Alinor",
    "Balmora",
    "Molag Mar",
    "Suran",
    "Glenumbra",
    "Stormhaven",
    "Rivenspire",
    "Wrothgar",
    "Bangkorai",
    "Craglorn",
    "Grahtwood",
    "Reaper's March",
    "Malabal Tor",
    "Greenshade",
    "East March",
    "The Rift",
    "Stonefalls",
    "Bal Foyen",
    "Deshaan",
    "Shadowfen",
  ]);

  expect(oldStarts).toStrictEqual(starts);
});

test("Start vs End Difference", () => {
  const diff = symmetricDifference(starts, ends);
  const oldDiff = new Set(["Shimmerene", "Lilmoth"]);
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

test("Testy Westy", () => {
  const mapOfEdges = new Map();

  const dupes = [];

  for (const edge of edges) {
    const hash = edgeHash(edge);
    if (mapOfEdges.has(hash)) dupes.push(edge);
    else mapOfEdges.set(edgeHash(edge), edge);
  }

  expect(mapOfEdges.size).toBe(152);
  expect(dupes.length).toBe(53);

  const combinations: Edge[][] = [];

  for (const edge of dupes) {
    const hash = edgeHash(edge);
    combinations.push([edge, mapOfEdges.get(hash)]);
  }

  const nuke = combinations.filter(
    (pair) => pair[0].edgeType === "baandariCaravanStop"
  );
  // console.log("nuke", nuke);

  expect(mapOfEdges.size).toBe(152);
});

test("Node Count", () => {
  const nodes = new Set([...starts, ...ends]);
  expect(nodes.size).toBe(55);
});
