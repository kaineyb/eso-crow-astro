import { expect, test } from "vitest";
import { getRandomInt } from "./helpers";

function compareSets<T>(setA: Set<T>, setB: Set<T>) {
  if (setA.size !== setB.size) return false;
  for (let item of setA) if (!setB.has(item)) return false;
  return true;
}

function generateSet(min: number, max: number): Set<number> {
  return new Set(Array.from({ length: max - min + 1 }, (_, i) => i + min));
}

function returnMinMaxFromSet(set: Set<number>): [number, number] {
  const array = Array.from(set).sort((a, b) => a - b);
  return [array[0], array[array.length - 1]];
}

test("", () => {
  const testSets = [
    generateSet(1, 10),
    generateSet(0, 10),
    generateSet(0, 100),
    generateSet(0, 1000),
  ];

  for (const set of testSets) {
    const [min, max] = returnMinMaxFromSet(set);
    const randomSet: Set<Number> = new Set();

    let attempts = 0;
    while (attempts < 100_000) {
      const result = getRandomInt(min, max);
      randomSet.add(result);
      if (compareSets(randomSet, set) === true) break;
      attempts++;
    }

    expect(compareSets(randomSet, set)).toBe(true);
  }
});
