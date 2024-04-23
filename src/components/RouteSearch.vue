<template>
  <AutoComplete
    v-model="source"
    placeholder="Source"
    :suggestions="sourceNodes"
    @complete="(event) => search(event, 'source')"
    :invalid="!sourceValid"
  />
  <AutoComplete
    v-model="target"
    placeholder="Target"
    :suggestions="targetNodes"
    @complete="(event) => search(event, 'target')"
    :invalid="!targetValid"
  />
  <Button label="Fly, my pretties!" />
</template>
<script setup>
import { ref, readonly, computed } from "vue";
import { nodes } from "../nodes/all";

const nodeArray = readonly(Array.from(nodes));

const sourceNodes = ref(nodeArray.value);
const targetNodes = ref(nodeArray.value);

const source = ref("");
const target = ref("");

const sourceValid = computed(() => {
  if (nodeArray.includes(source.value)) return true;
  if (source.value === "") return true;
  return false;
});

const targetValid = computed(() => {
  if (nodeArray.includes(target.value)) return true;
  if (target.value === "") return true;
  return false;
});

const routeValid = computed(() => {
  if (nodeArray.includes(source.value) && nodeArray.includes(target.value))
    return true;
  return false;
});

const search = (event, model) => {
  console.log(model);
  console.log("eh", event.query.trim().length);

  if (!event.query.trim().length) {
    if (model === "source") sourceNodes.value = [...nodeArray];
    if (model === "target") targetNodes.value = [...nodeArray];
  } else {
    const filtered = nodeArray.filter((node) => {
      return node.toLowerCase().startsWith(event.query.toLowerCase());
    });

    if (model === "source") sourceNodes.value = filtered;
    if (model === "target") targetNodes.value = filtered;
  }
};
</script>
<style scoped></style>
