import { nodes } from "../nodes/all";

export function getRandomInt(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max + 1);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export function generateRoute(): string {
  const nodesArray = Array.from(nodes);
  let sourceNode = undefined;
  let targetNode = undefined;

  while (!sourceNode) {
    const index = getRandomInt(0, nodesArray.length);
    sourceNode = nodesArray[index];
  }

  while (!targetNode) {
    const index = getRandomInt(0, nodesArray.length);
    const node = nodesArray[index];
    if (node != sourceNode) targetNode = node;
  }

  return `/routes/${sourceNode}/${targetNode}/`;
}
