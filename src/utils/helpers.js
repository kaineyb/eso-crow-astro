import { siltstriders } from "../nodes/siltstriders";
import { potentialCombinations } from "../nodes/all";

export function generateStuff() {
  const output = [];

  for (const [start, end, person] of siltstriders) {
    output.push({
      params: { start: start, end: end },
      props: { person: person },
    });
  }

  return output;
}

export function combinationsToAstro() {
  const output = [];

  for (const [start, end] of potentialCombinations) {
    output.push({
      params: { start: start, end: end },
      props: { person: "Kaine" },
    });
  }

  return output;
}

export function symmetricDifference(setA, setB) {
  const difference = new Set([...setA].filter((x) => !setB.has(x)));
  for (const elem of setB) {
    if (!setA.has(elem)) {
      difference.add(elem);
    }
  }
  return difference;
}

// console.log(siltstriders);
