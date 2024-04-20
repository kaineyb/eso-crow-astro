import { expect, test } from "vitest";
import { edges } from "../all";
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
      if (edge.via != already.via) {
        dupes.push(edge);
      }
    } else mapOfEdges.set(hash, edge);
  }

  const fakeBiDirectional = dupes.filter((dupe) => dupe.oneWay == false);

  for (const dupe of fakeBiDirectional) {
    const counterpart = mapOfEdges.get(edgeHashStartEnd(dupe));
    console.log(`${dupe.start} > ${dupe.end} via ${dupe.via}`, dupe.edgeType);
    console.log(
      `${counterpart.start} > ${counterpart.end} via ${counterpart.via}`,
      counterpart.edgeType
    );
    console.log("".padEnd(50, "="));
  }

  // console.log("fakeBi", fakeBi);
  console.log(fakeBiDirectional.length);

  expect(fakeBiDirectional.length).toBe(0);
});
