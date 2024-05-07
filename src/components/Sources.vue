<template>
  <Card class="sources">
    <template #title>
      Sources
      <Divider />
    </template>
    <template #content>
      <div class="sources-container">
        <div v-for="source of sources">
          <a :href="`#${source}`">{{ source }}</a>
        </div>
      </div>
    </template>
  </Card>
</template>
<script setup>
const props = defineProps(["sources"]);
</script>
<style scoped>
.sources {
  background-color: var(--gray-600);
  /* outline: 1px solid red; */
  margin-bottom: 50px;
}
.sources-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.sources-container > * {
  outline: 1px solid var(--gray-800);
  padding: 10px;
}
</style>
