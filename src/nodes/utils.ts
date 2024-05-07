import { Edge, type SerializedEdge, type BasicEdge } from "./types";

export function generateEdgesFromBasic(
  basicEdges: BasicEdge[],
  label: string
): Edge[] {
  const results: Edge[] = [];

  for (const edge of basicEdges) {
    const newEdge = new Edge(
      edge[0],
      edge[1],
      edge[2],
      label,
      edge[3] ? true : false
    );

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

    if (edge.oneWay === false) {
      starts.add(edge.end);
      ends.add(edge.start);
    }
  }

  return [starts, ends];
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

export function getPotentialCombinations(nodes: Set<string>) {
  const combinations: string[][] = [];

  for (const node of nodes) {
    for (const nextNode of nodes) {
      if (node === nextNode) continue;
      const combination = [node, nextNode];
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

export function edgeHash(edge: Edge) {
  const nodes = [edge.start, edge.end, edge.via, edge.edgeType, edge.oneWay];
  return String(nodes.toSorted());
}

export function edgeHashStartEnd(edge: Edge) {
  const nodes = [edge.start, edge.end];
  return String(nodes.toSorted());
}

const cartsAndBoats =
  "https://en.uesp.net/wiki/Online:Transport#Carts_and_Boats";

const boatSwains = "https://en.uesp.net/wiki/Online:Boatswains";
const caravaners = "https://en.uesp.net/wiki/Online:Caravaners";
const baandari = "https://en.uesp.net/wiki/Online:Baandari_Caravan_Stop";

const uespURLMap: { [edgeType: string]: string } = {
  Carts: cartsAndBoats,
  "Self-driven Cart": cartsAndBoats,
  Boats: cartsAndBoats,
  "Unnamed Sailboat": cartsAndBoats,
  "Coastal Skiff": cartsAndBoats,
  "Harbor Skiff": cartsAndBoats,

  Boatswain: boatSwains,
  Caravaners: caravaners,
  "Baandari Caravan Stop": baandari,
};

export function uespURL(edgeType: string): string {
  const result = uespURLMap[edgeType];

  if (result) return result;

  return `https://en.uesp.net/wiki/Online:${edgeType}`;
}
