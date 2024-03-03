import { siltstriders } from "../nodes/siltstriders";

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

// console.log(siltstriders);
