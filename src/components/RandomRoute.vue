<template>
  <a
    v-if="props.mode === 'text'"
    @click="() => (randomUrl = generateRoute())"
    :href="url"
    >Random Route</a
  >
</template>
<script setup>
import { nodes } from "../nodes/all";
import { ref, computed, onMounted } from "vue";

import { generateRoute } from "../utils/helpers";

const props = defineProps(["mode"]);

const randomUrl = ref(null);

const url = computed(() => {
  if (randomUrl.value === null) return "/routes/?/?";
  return generateRoute();
});

onMounted(() => (randomUrl.value = null));
</script>
<style scoped></style>
