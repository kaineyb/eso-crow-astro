<template>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/routes">Routes</a></li>
    <li><a href="/zones">Zones</a></li>
    <li><a href="/locations">Locations</a></li>
    <li>
      <RandomRoute mode="text" />
    </li>
  </ul>
</template>
<script setup>
import RandomRoute from "../components/RandomRoute.vue";
</script>
<style scoped></style>
