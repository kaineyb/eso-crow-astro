<!-- https://blog.js.cytoscape.org/2016/05/24/getting-started/ -->

<template>
  <div
    ref="cyRef"
    id="cy"
  ></div>
</template>

<style scoped>
#cy {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>

<script setup>
//@ts-check
import cytoscape from "cytoscape";
import fcose from "cytoscape-fcose";
import { onMounted, ref, watch } from "vue";

import { nodes, serializedEdges } from "../nodes/all";

const nodeArray = Array.from(nodes);

const elementNodes = nodeArray.map((node) => {
  return {
    data: {
      id: node,
    },
  };
});

const elementEdges = serializedEdges.map((edge) => {
  return {
    data: {
      id: `${edge.start} > ${edge.end} via ${edge.via} (${edge.edgeType})`,
      source: edge.start,
      target: edge.end,
    },
  };
});

const elements = [...elementNodes, ...elementEdges];

// console.log(elementNodes);
// console.log(serializedEdges);

const cyRef = ref(null);

const cy = ref(null);
cytoscape.use(fcose);

const algo = ref();

onMounted(() => {
  cy.value = cytoscape({
    container: cyRef.value,
    elements: elements,
    layout: {
      name: "fcose",
    },
    style: [
      {
        selector: "node",
        style: {
          label: "data(id)",
        },
      },
    ],
  });
});

function displayElements(elements) {
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

function listEdges(elements) {
  const edges = filterEdges(elements);
  const padNo = 60;
  console.log("".padEnd(padNo, "="));
  for (const [index, edge] of edges.entries()) {
    const obj = edge.json();
    console.log(index + 1, obj.data.id);
  }
  console.log("".padEnd(padNo, "="));
}

function filterEdges(elements) {
  const edges = [];
  for (const element of elements) if (element.isEdge()) edges.push(element);
  return edges;
}

function nodeLookup(cy, name) {
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

function targetToSource(cy, source, target) {
  const elements = cy.elements();

  const sourceElement = elements.filter((ele) => ele.data("id") == source);
  const targetElement = elements.filter((ele) => ele.data("id") == target);

  displayElements(sourceElement);
  displayElements(targetElement);

  const options = { root: sourceElement, directed: true };

  const func = elements.dijkstra(options);
  const { distanceTo, pathTo } = func;

  const path = pathTo(targetElement);

  // Number
  const distance = distanceTo(targetElement);

  listEdges(path);
  console.log("Distance", distance);
}

watch(cy, () => {
  targetToSource(cy.value, "Molag Mar", "Alten Corimont");
});
</script>
