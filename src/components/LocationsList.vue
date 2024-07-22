<template>
  <Card class="locations">
    <template #title>
      Locations
      <Divider />
    </template>
    <template #content>
      <div class="locations-container">
        <div v-for="location of locations">
          <a :href="`/locations/${location}/`">{{ location }}</a>
        </div>
      </div>
    </template>
  </Card>
</template>
<script setup>
const props = defineProps(["locations"]);
</script>
<style scoped>
.locations {
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
