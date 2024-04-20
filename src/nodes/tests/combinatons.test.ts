import { expect, test } from "vitest";

import { potentialCombinations } from "../all";

test("Test that Potential Combinations does not include self references", () => {
  const same = potentialCombinations.filter(
    (location) => location[0] === location[1]
  );

  expect(same).toStrictEqual([]);
});
