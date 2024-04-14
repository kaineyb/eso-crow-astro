// sum.test.js
import { expect, test } from "vitest";

import { Edge } from "../types";
import { getStartsAndEnds } from "../utils";

test("", () => {
  const testEdges: Edge[] = [
    new Edge("Start1", "End1", "Via1", "ET1"),
    new Edge("Start2", "End2", "Via2", "ET2"),
    new Edge("Start3", "End3", "Via3", "ET3"),
    new Edge("Start4", "End4", "Via4", "ET4"),
    new Edge("Start5", "End5", "Via5", "ET5"),
  ];

  const [start, end] = getStartsAndEnds(testEdges);

  console.log("start", start);
  console.log("end", end);
});
