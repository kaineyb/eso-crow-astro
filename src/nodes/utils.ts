import { Edge, type SerializedEdge, type BasicEdge } from "./types";

export function basicToSerializedEdge(
  basicEdges: BasicEdge[],
  label: string
): SerializedEdge[] {
  const results: SerializedEdge[] = [];

  for (const edge of basicEdges) {
    const newEdge: SerializedEdge = {
      start: edge[0],
      end: edge[1],
      via: edge[2],
      edgeType: label,
      oneWay: edge[3] ? true : false,
    };
    results.push(newEdge);
  }

  return results;
}

export function getStartsAndEnds(edges: Edge[]): [Set<string>, Set<string>] {
  const starts: Set<string> = new Set();
  const ends: Set<string> = new Set();

  for (const edge of edges) {
    starts.add(edge.start);
    ends.add(edge.end);
  }

  return [starts, ends];
}

export function generateEdges(fleshedEdges: SerializedEdge[]) {
  const edges: Edge[] = [];

  for (const edge of fleshedEdges)
    edges.push(
      new Edge(edge.start, edge.end, edge.via, edge.edgeType, edge.oneWay)
    );

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

export function getPotentialCombinations(
  starts: Set<string>,
  ends: Set<string>
) {
  const combinations: string[][] = [];

  for (const start of starts) {
    for (const end of ends) {
      if (start === end) continue;
      const combination = [start, end];

      combinations.push(combination);
    }
  }

  return combinations;
}

export function getAllSerializedEdges(edges: Edge[]): SerializedEdge[] {
  const serializedEdges: SerializedEdge[] = [];

  for (const edge of edges) {
    serializedEdges.push(...edge.edges());
  }

  return serializedEdges;
}
