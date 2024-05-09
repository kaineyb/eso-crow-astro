<template>
  <div class="header">
    <h2 v-html="title"></h2>
    <div v-html="subTitle"></div>
  </div>

  <Card class="card-container">
    <template #title>
      {{ source }}

      <Divider />
    </template>
    <template #content>
      <div class="locations-container">
        <div v-for="result in results">
          <a :href="link(source, result.target)">{{ result.target }}</a>
          <Badge
            class="badge"
            :value="`${result.distance} Steps`"
          ></Badge>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import type { LocationDistances } from "../nodes/graph";
import { computed } from "vue";
const props = defineProps<{
  direction: string;
  source: string;
  results: LocationDistances[];
}>();

const fromTitle = `${props.source}`;
const toTitle = `Getting to ${props.source}`;

const fromSubtitle = `Traveling from <strong>${props.source}</strong> you can get to the places below`;
const toSubtitle = `You can get to <strong>${props.source}</strong>  from the places below:`;

const subTitle = computed(() =>
  props.direction == "from" ? fromSubtitle : toSubtitle
);
const title = computed(() => (props.direction == "from" ? fromTitle : toTitle));

const results = props.results.toSorted((a, b) => {
  if (a.distance === b.distance) return a.target.localeCompare(b.target);
  return a.distance - b.distance;
});

function link(source: string, target: string) {
  if (props.direction === "from") return `/routes/${source}/${target}`;
  return `/routes/${target}/${source}`;
}
</script>

<style scoped>
h2 {
  margin-top: 0;
}
.header {
  outline: 1px solid var(--gray-500);
  padding: 25px;
  margin-bottom: 50px;
}

.badge {
  margin-left: 10px;
}

.card-container {
  background-color: var(--gray-900);
  /* outline: 1px solid red; */
  margin-bottom: 50px;
}
.locations-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.locations-container > * {
  outline: 1px solid var(--gray-800);
  padding: 10px;
}
</style>
