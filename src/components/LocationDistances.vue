<template>
  <div class="header">
    <h2 v-html="title"></h2>
    <div v-html="subTitle"></div>
  </div>

  <Card class="card-container">
    ><template #title
      >{{ direction === "from" ? "From" : "To" }} {{ source }}
      {{ direction === "from" ? "to:" : "from:" }}<Divider /></template
    ><template #content>
      <DataTable
        paginator
        :rows="10"
        :rowsPerPageOptions="[5, 10, 20, 50]"
        paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
        stripedRows
        size="small"
        :value="results"
        tableStyle=""
      >
        <Column
          field="distance"
          header="Steps"
          sortable
          style="width: 5%"
        >
          <template #body="{ data }">
            <Badge
              class="badge"
              :value="`${data.distance} Steps`"
            ></Badge> </template
        ></Column>
        <Column
          style="width: 50%"
          header="Location"
          sortable
          field="target"
        >
          <template #body="{ data }">
            <a :href="`/routes/${source}/${data.target}`">{{ data.target }}</a>
          </template>
        </Column></DataTable
      ></template
    >
  </Card>
</template>

<script setup lang="ts">
import type { LocationDistances } from "../nodes/graph";
import { computed, ref } from "vue";
const props = defineProps<{
  direction: string;
  source: string;
  results: LocationDistances[];
}>();

const fromTitle = `${props.source}`;
const toTitle = `Getting to ${props.source}`;

const fromSubtitle = `Traveling from <strong>${props.source}</strong> you can get to the places below in the listed step amount.`;
const toSubtitle = `You can get to <strong>${props.source}</strong>  from the places below in the listed step amount.`;

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
