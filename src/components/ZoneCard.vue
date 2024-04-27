<template>
  <div class="outer-container">
    <div>{{ zoneName }} - {{ zoneType }}</div>

    <ul>
      <li v-for="city in cities.sort()">
        {{ city }}
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
