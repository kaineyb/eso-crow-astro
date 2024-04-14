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

onMounted(() => {
  var cy = cytoscape({
    container: cyRef.value,
    // elements: elements,
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
});
</script>
