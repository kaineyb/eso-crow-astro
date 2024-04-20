import { expect, test } from "vitest";
import { edges } from "../all";
import { edgeHash } from "../utils";
import type { Edge } from "../types";

test("hello", () => {
  const mapOfEdges = new Map();

  const dupes = [];

  for (const edge of edges) {
    const hash = edgeHash(edge);
    if (mapOfEdges.has(hash)) dupes.push(edge);
    else mapOfEdges.set(edgeHash(edge), edge);
  }

  //   expect(mapOfEdges.size).toBe(152);
  //   expect(dupes.length).toBe(53);

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

  console.log("nuke", nuke);

  //   expect(mapOfEdges.size).toBe(152);
});
