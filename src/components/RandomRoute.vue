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

const props = defineProps(["mode"]);

const nodesArray = Array.from(nodes);

const source = ref("?");
const target = ref("?");

const url = computed(() => `/routes/${source.value}/${target.value}`);

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max + 1);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function generateRoute() {
  const sourceIndex = getRandomInt(0, nodesArray.length);
  let targetIndex = getRandomInt(0, nodesArray.length);
  while (sourceIndex === targetIndex)
    targetIndex = getRandomInt(0, nodesArray.length);

  source.value = nodesArray[sourceIndex];
  target.value = nodesArray[targetIndex];
}
</script>
<style scoped></style>
