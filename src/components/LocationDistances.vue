<template>
  <div>
    <li v-for="result in results">
      {{ result.distance }} -
      <a :href="link(source, result.target)">{{ result.target }}</a>
    </li>
  </div>
</template>

<script setup lang="ts">
import type { LocationDistances } from "../nodes/graph";

const props = defineProps<{
  direction: string;
  source: string;
  results: LocationDistances[];
}>();

const results = props.results.toSorted((a, b) => {
  if (a.distance === b.distance) return a.target.localeCompare(b.target);
  return a.distance - b.distance;
});

function link(source: string, target: string) {
  if (props.direction === "from") return `/routes/${source}/${target}`;
  return `/routes/${target}/${source}`;
}
</script>

<style scoped></style>
