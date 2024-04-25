import cytoscape from "cytoscape";

import fcose from "cytoscape-fcose";
import { nodes, serializedEdges } from "../nodes/all";
import { locationCoords } from "../nodes/nodeLocations";

import type {
  ElementDefinition,
  SingularData,
  Core,
  CollectionReturnValue,
  EdgeSingular,
} from "cytoscape";
const nodeArray = Array.from(nodes);

const elementNodes = nodeArray.map((node) => {
  const obj: ElementDefinition = {
    data: {
      id: node,
    },
  };

  const position = getPosition(node);
  if (!position) return obj;

  obj.position = { x: position[0], y: position[1] };
  obj.locked = true;

  return obj;
});

function getPosition(nodeId: string) {
  if (!Object.keys(locationCoords).includes(nodeId)) return undefined;
  const position = locationCoords[nodeId];
  if (position.length !== 2) return undefined;
  return position;
}

const elementEdges = serializedEdges.map((edge) => {
  return {
    data: {
      id: `${edge.start} > ${edge.end} via ${edge.via} (${edge.edgeType})`,
      source: edge.start,
      target: edge.end,
      via: edge.via,
      edgeType: edge.edgeType,
    },
  };
});

const elements = [...elementNodes, ...elementEdges];

cytoscape.use(fcose);

export const cy = cytoscape({
  container: null,
  elements: elements,
  headless: true,
  style: [
    {
      selector: "node",
      style: {
        label: "data(id)",
        color: "white",
        backgroundColor: "goldenrod",
      },
    },
  ],
});

function displayElements(elements: CollectionReturnValue) {
  const padNo = 60;
  console.log("".padEnd(padNo, "="));
  // console.log("displayElements len", elements.length);
  for (const element of elements) {
    const obj = element.json();
    if (element.isEdge()) {
      console.log("displayElements: Edge is", obj.data);
    } else {
      console.log("displayElements: Node is", obj.data);
    }
  }
  console.log("".padEnd(padNo, "="));
}

function filterEdges(elements: CollectionReturnValue): EdgeSingular[] {
  const edges = [];
  for (const element of elements) if (element.isEdge()) edges.push(element);
  return edges;
}

export function nodeLookup(cy: Core, name: string) {
  const elements = cy.elements();
  for (const element of elements) {
    const json = element.json();

    if (json.group === "nodes") {
      if (json.data.id.includes(name)) {
        console.log(json);
      }
    }
  }
}

export function targetToSource(
  cy: Core,
  source: string,
  target: string
): [CollectionReturnValue, number] {
  const elements = cy.elements();

  const sourceElement = elements.filter((ele) => ele.data("id") == source);
  const targetElement = elements.filter((ele) => ele.data("id") == target);

  const func = elements.dijkstra({ root: sourceElement, directed: true });
  const { pathTo, distanceTo } = func;

  const result = pathTo(targetElement);
  const distance = distanceTo(targetElement);

  return [result, distance];
}

function listEdges(elements: CollectionReturnValue) {
  const edges = filterEdges(elements);
  const padNo = 60;
  console.log("".padEnd(padNo, "="));
  for (const [index, edge] of edges.entries()) {
    console.log("eh2", edge);
    const obj = edge.json();
    console.log(index + 1, obj);
  }
  console.log("".padEnd(padNo, "="));
}

type EdgeReturn = {
  step: number;
  edge: string;
  source: string;
  target: string;
  via: string;
  edgeType: string;
};

export function targetToSourceToPrettyArray(
  cy: Core,
  source: string,
  target: string
): [EdgeReturn[], number] {
  const [results, distance] = targetToSource(cy, source, target);

  const edges: EdgeReturn[] = [];

  for (const [index, edge] of filterEdges(results).entries()) {
    const { data } = edge.json();

    edges.push({
      step: index + 1,
      source: data.source,
      target: data.target,
      edge: data.id,
      via: data.via,
      edgeType: data.edgeType,
    });
  }
  return [edges, distance];
}
