import { expect, test } from "vitest";

import { potentialCombinations, edges, starts, ends } from "../all";
import { edgeHash } from "../utils";

test("Test Potential Combinations count doesn't change", () => {
  expect(potentialCombinations.length).toStrictEqual(1482);
});

test("Map of Edges to be 136", () => {
  const mapOfEdges = new Map();

  for (const edge of edges) {
    const hash = edgeHash(edge);
    if (mapOfEdges.has(hash)) continue;
    mapOfEdges.set(edgeHash(edge), edge);
  }
  expect(mapOfEdges.size).toBe(136);
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
  expect(nodes.size).toBe(39);
});
