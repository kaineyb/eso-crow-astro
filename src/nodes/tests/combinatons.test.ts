// sum.test.js
import { expect, test } from "vitest";

import { starts, ends } from "../all";

test("Test Potential Combination Count", () => {
  const combinations: string[][] = [];

  for (const start of starts) {
    for (const end of ends) {
      if (start === end) continue;
      const combination = [start, end];

      combinations.push(combination);
    }
  }

  const same = combinations.filter((location) => location[0] === location[1]);

  expect(same).toStrictEqual([]);

  console.log(combinations);
  console.log(combinations.length);

  //
});
