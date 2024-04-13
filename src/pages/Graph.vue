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
import cytoscape from "cytoscape";
import { onMounted, ref } from "vue";

const cyRef = ref(null);

const elements = [
  // nodes
  { data: { id: "a" } },
  { data: { id: "b" } },
  { data: { id: "c" } },
  { data: { id: "d" } },
  { data: { id: "e" } },
  { data: { id: "f" } },
  // edges
  {
    data: {
      id: "ab",
      source: "a",
      target: "b",
    },
  },
  {
    data: {
      id: "cd",
      source: "c",
      target: "d",
    },
  },
  {
    data: {
      id: "ef",
      source: "e",
      target: "f",
    },
  },
  {
    data: {
      id: "ac",
      source: "a",
      target: "c",
    },
  },
  {
    data: {
      id: "be",
      source: "b",
      target: "e",
    },
  },
];

onMounted(() => {
  var cy = cytoscape({
    container: cyRef.value,
    elements: elements,
    layout: {
      name: "grid",
    },
    style: [
      {
        selector: "node",
        style: {
          shape: "hexagon",
          "background-color": "red",
          label: "data(id)",
        },
      },
    ],
  });

  for (var i = 0; i < 10; i++) {
    cy.add({
      data: { id: "node" + i },
    });
    var source = "node" + i;
    cy.add({
      data: {
        id: "edge" + i,
        source: source,
        target: i % 2 == 0 ? "a" : "b",
      },
    });
  }
});
</script>
