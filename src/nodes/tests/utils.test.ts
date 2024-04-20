// sum.test.js
import { expect, test } from "vitest";

import { Edge, type FleshedEdge } from "../types";
import { getBiDirectional, getStartsAndEnds } from "../utils";

test("Test that getBiDirectional is doesn't return directional Edges", () => {
  // Arrange
  const directionalEdge = new Edge("Three", "One", "", "");

  const testEdges: Edge[] = [
    new Edge("One", "Two", "", ""),
    new Edge("Two", "One", "", ""),
    new Edge("One", "Four", "", ""),
    new Edge("Four", "One", "", ""),
    directionalEdge,
  ];

  const [start, end] = getStartsAndEnds(testEdges);

  // Act
  const bidirectional = getBiDirectional(testEdges, start, end);

  // assert
  expect(bidirectional.includes(directionalEdge)).toBe(false);
});

test("Test that bidirectional Edges are equivalent", () => {
  const baseScenario: Edge[] = [
    new Edge("One", "Two", "", "", true),
    new Edge("Two", "One", "", "", true),
    new Edge("Three", "Four", "", ""),
  ];

  const testScenario: Edge[] = [
    new Edge("One", "Two", "", ""),
    new Edge("Three", "Four", "", ""),
  ];

  function createEdges(source: Edge[]) {
    const newEdges: FleshedEdge[] = [];
    for (const edge of source) newEdges.push(...edge.edges());
    return newEdges;
  }

  const baseEdges: FleshedEdge[] = createEdges(baseScenario);
  const testEdges: FleshedEdge[] = createEdges(testScenario);

  expect(baseEdges).toStrictEqual(testEdges);
});
