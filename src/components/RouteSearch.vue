<template>
  <form
    class="container"
    :action="`/routes/${source}/${target}/`"
  >
    <div class="source-target">
      <FloatLabel>
        <AutoComplete
          :emptySearchMessage="noSearchMsg"
          spellcheck="false"
          :delay="0"
          variant="filled"
          v-model="source"
          forceSelection
          dropdown
          placeholder="Source"
          :suggestions="sourceNodes"
          @complete="(event) => search(event, 'source')"
          :invalid="!sourceValid"
        />
        <label for="source">Source</label>
      </FloatLabel>

      <FloatLabel>
        <AutoComplete
          :emptySearchMessage="noSearchMsg"
          spellcheck="false"
          :delay="0"
          variant="filled"
          v-model="target"
          forceSelection
          dropdown
          placeholder="Target"
          :suggestions="targetNodes"
          @complete="(event) => search(event, 'target')"
          :invalid="!targetValid"
        />
        <label for="target">Target</label>
      </FloatLabel>
    </div>
    <div class="button">
      <Button
        style="font-style: italic"
        type="submit"
        label="Fly, my pretties!"
        :disabled="!routeValid"
      />
    </div>
  </form>
</template>
<script setup>
import { ref, readonly, computed } from "vue";
import { nodes } from "../nodes/all";

const noSearchMsg = "Location does not exist";

const nodeArray = readonly(Array.from(nodes).sort());

const source = ref("");
const target = ref("");

const validSourceNodes = computed(() =>
  nodeArray.filter((node) => node !== target.value)
);
const validTargetNodes = computed(() =>
  nodeArray.filter((node) => node !== source.value)
);

const sourceNodes = ref(validSourceNodes.value);
const targetNodes = ref(validTargetNodes.value);

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
  if (
    source.value != target.value &&
    nodeArray.includes(source.value) &&
    nodeArray.includes(target.value)
  )
    return true;
  return false;
});

const search = (event, model) => {
  if (!event.query.trim().length) {
    if (model === "source") sourceNodes.value = [...validSourceNodes.value];
    if (model === "target") targetNodes.value = [...validTargetNodes.value];
  } else {
    if (model === "source") {
      sourceNodes.value = validSourceNodes.value.filter((node) => {
        return node.toLowerCase().startsWith(event.query.toLowerCase());
      });
    } else {
      targetNodes.value = validTargetNodes.value.filter((node) => {
        return node.toLowerCase().startsWith(event.query.toLowerCase());
      });
    }
  }
};
</script>
<style scoped>
.container {
  /* padding-top: 30px; */
  /* outline: 1px solid gold; */
  gap: 30px;
  padding-left: 35px;
  padding-right: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.source-target {
  /* outline: 1px solid gold; */
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.button {
  /* outline: 1px solid red; */
}
</style>
