<template>
  Footer
  <div class="container">
    <RandomRouteVue mode="text" />
    <a :href="conf.github"><i class="pi pi-github"></i></a>
  </div>
</template>
<script setup>
import conf from "../globalConfig";
import RandomRouteVue from "./RandomRoute.vue";
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
