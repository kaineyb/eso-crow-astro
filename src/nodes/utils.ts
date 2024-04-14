import { Edge } from "./types";

export function getStartsAndEnds(edges: Edge[]): [Set<string>, Set<string>] {
  const starts: Set<string> = new Set();
  const ends: Set<string> = new Set();

  for (const edge of edges) {
    starts.add(edge.start);
    ends.add(edge.end);
  }

  return [starts, ends];
}

export function generateEdges(basicEdges: string[][]) {
  const edges: Edge[] = [];

  for (const edge of basicEdges) {
    const newEdge = new Edge(edge[0], edge[1], edge[2], edge[3]);
    edges.push(newEdge);
  }

  return edges;
}

export function getBiDirectional(
  edges: Edge[],
  starts: Set<string>,
  ends: Set<string>
): Edge[] {
  const biDirectional: Edge[] = [];
  for (const edge of edges) {
    if (starts.has(edge.end) && ends.has(edge.start)) {
      biDirectional.push(edge);
    }
  }

  return biDirectional;
}

export function getDirectional(
  allEdges: Edge[],
  biDirectional: Edge[]
): Edge[] {
  const directional: Edge[] = [];
  for (const edge of allEdges) {
    if (biDirectional.includes(edge) == false) {
      directional.push(edge);
    }
  }

  return biDirectional;
}
