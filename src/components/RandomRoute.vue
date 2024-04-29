<template>
  <a
    v-if="props.mode === 'text'"
    @click="generateRoute"
    :href="url"
    >Random Route</a
  >
</template>
<script setup>
import { nodes } from "../nodes/all";
import { ref, computed } from "vue";

import { getRandomInt } from "../utils/helpers";

const props = defineProps(["mode"]);

const nodesArray = Array.from(nodes);

const defaultValue = "?";

const source = ref(defaultValue);
const target = ref(defaultValue);

const url = computed(() => {
  if (!source.value || !source.value) return "#";
  return `/routes/${source.value}/${target.value}`;
});

function generateRoute() {
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

  source.value = sourceNode;
  target.value = targetNode;
}
</script>
<style scoped></style>
