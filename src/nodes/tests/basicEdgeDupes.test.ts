import { expect, test } from "vitest";
import { edges } from "../all";
import { edgeHash, edgeHashStartEnd } from "../utils";
import type { Edge } from "../types";

test("Test no duplication Edges Exist, that are Two Edges, but could be One", () => {
  const mapOfEdges = new Map();

  const dupes = [];

  for (const edge of edges) {
    const hash = edgeHash(edge);
    if (mapOfEdges.has(hash)) dupes.push(edge);
    else mapOfEdges.set(edgeHash(edge), edge);
  }

  const combinations: Edge[][] = [];

  for (const edge of dupes) {
    const hash = edgeHash(edge);
    combinations.push([edge, mapOfEdges.get(hash)]);
  }

  expect(combinations.length).toBe(0);
});

test("Test that 0 Fake BiDirectional Pairs Exist", () => {
  const mapOfEdges = new Map();

  const dupes = [];

  for (const edge of edges) {
    const hash = edgeHashStartEnd(edge);
    if (mapOfEdges.has(hash)) {
      const already = mapOfEdges.get(hash);
      if (edge.oneWay == true && already.oneWay === true) continue;
      if (edge.via != already.via && edge.edgeType === already.edgeType) {
        dupes.push(edge);
      }
    } else mapOfEdges.set(hash, edge);
  }

  const biDirectionalPairs: Edge[][] = [];

  for (const dupe of dupes)
    biDirectionalPairs.push([dupe, mapOfEdges.get(edgeHashStartEnd(dupe))]);

  const edgePrint = (edge: Edge) =>
    `[${edge.edgeType}] ${edge.start} > ${edge.end} via ${edge.via}`;

  for (const pair of biDirectionalPairs) {
    console.log(edgePrint(pair[0]));
    console.log(edgePrint(pair[1]));
    console.log("".padEnd(50, "="));
  }

  expect(biDirectionalPairs.length).toBe(0);
});
