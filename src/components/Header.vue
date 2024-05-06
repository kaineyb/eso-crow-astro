<template>
  <div class="menu-container">
    <Menu :model="items" />
  </div>
</template>

<script setup>
import { generateRoute } from "../utils/helpers";
import { ref } from "vue";

const items = ref([
  { label: "Home", icon: "pi pi-home", url: "/" },
  { label: "Routes", icon: "pi pi-directions", url: "/routes" },
  { label: "Zones", icon: "pi pi-map", url: "/zones" },
  { label: "Locations", icon: "pi pi-map-marker", url: "/locations" },
  {
    label: "Random Route",
    icon: "pi pi-sparkles",
    url: generateRoute(),
  },
]);
</script>

<style scoped>
.menu-container {
  margin: 8px;
}
</style>
