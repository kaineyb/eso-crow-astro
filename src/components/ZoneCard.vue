<template>
  <div class="outer-container">
    <div>
      <a :href="`/zones/${zoneName}`">{{ zoneName }}</a> - {{ zoneType }}
    </div>

    <ul>
      <li v-for="city in cities.sort()">
        <a :href="`/locations/${city}`">{{ city }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps(["zoneName", "zoneType", "cities"]);
</script>
<style scoped>
.outer-container {
  width: 200px;
  padding: 10px;
  border: 1px solid red;
}
</style>
