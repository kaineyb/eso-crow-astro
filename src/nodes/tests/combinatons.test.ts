import { expect, test } from "vitest";

import { potentialCombinations, edges } from "../all";

test("Test that Potential Combinations does not include self references", () => {
  const same = potentialCombinations.filter(
    (location) => location[0] === location[1]
  );

  expect(same).toStrictEqual([]);
});

test("Test Potential Combinations  count doesn't change", () => {
  expect(potentialCombinations.length).toStrictEqual(2862);
});

test("Edge Count", () => {
  expect(edges.length).toBe(205);
});

test("Edge Count", () => {
  expect(edges.length).toBe(205);
});
