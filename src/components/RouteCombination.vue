<template>
  <Card class="route-combination">
    <template #title>
      <div class="title">
        <span
          ><a :href="`/locations/${source}/`">{{ source }}</a></span
        >
        <a
          href="#"
          class="top"
          >top</a
        >
      </div>
    </template>
    <template #content>
      <Divider />
      From <a :href="`/locations/${source}/`">{{ source }}</a> to:
      <Divider />
      <div class="locations">
        <div v-for="location in locations">
          <a :href="`/routes/${source}/${location}/`">{{ location }}</a>
        </div>
      </div>
    </template>
  </Card>
</template>
<script setup>
const props = defineProps(["source", "locations"]);
</script>
<style scoped>
.route-combination {
  /* outline: 1px solid gold; */
  margin-bottom: 50px;
}

.title {
  display: flex;
  align-content: space-between;
  justify-content: space-between;
}

.top {
  font-size: 1rem;
}

.locations {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.locations > * {
  outline: 1px solid var(--gray-800);
  padding: 10px;
}
</style>
