import { expect, test } from "vitest";
import { biDirectional, edges } from "../all";
import { edgeHash, edgeHashStartEnd } from "../utils";
import type { Edge } from "../types";

test("List Edges to Nuke", () => {
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

  const pairs = combinations.filter((pair) => pair[0].edgeType === "Boats");

  const nuke = pairs.map((pair) => {
    if (pair[0].start > pair[1].start) {
      return pair[0];
    }
    return pair[1];
  });

  // console.log("nuke", nuke);
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

  console.log(biDirectionalPairs.length);

  for (const pair of biDirectionalPairs) {
    console.log(pair[0].start, ">", pair[0].end, "via", pair[0].via);
    console.log(pair[1].start, ">", pair[1].end, "via", pair[1].via);
    console.log("".padEnd(50, "="));
  }

  expect(biDirectionalPairs.length).toBe(0);
});
