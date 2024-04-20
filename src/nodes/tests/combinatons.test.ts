import { expect, test } from "vitest";

import { allCombinations } from "../all";

test("Test that Combinations does not include self references", () => {
  const same = allCombinations.filter(
    (location) => location[0] === location[1]
  );

  expect(same).toStrictEqual([]);
});
