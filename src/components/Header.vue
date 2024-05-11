<template>
  <div class="menu-container">
    <Menubar :model="items">
      <template #end>
        <div class="title-container">
          <div>
            <div class="title-subtitle-container">
              <span class="title"><a href="/">ESO Crow</a></span>
              <span class="subtitle">"As the Crow flies."</span>
            </div>
          </div>
          <img
            class="crow"
            src="/fav/android-chrome-192x192.png"
          /></div></template
    ></Menubar>
  </div>
</template>

<script setup>
import { generateRoute } from "../utils/helpers";
import { ref } from "vue";

const items = ref([
  { label: "Home", icon: "pi pi-home", url: "/" },
  { label: "Locations", icon: "pi pi-map-marker", url: "/locations" },
  { label: "Zones", icon: "pi pi-map", url: "/zones" },
  { label: "Routes", icon: "pi pi-directions", url: "/routes" },
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

.crow {
  width: 50px;
  height: 50px;
}
.title {
  font-weight: 900;
  font-size: 1.6rem;
}

.title > a {
  color: white;
  text-decoration: none;
}

.title > a:hover {
  text-decoration: underline;
}

.subtitle {
  font-style: italic;
  font-size: 0.8rem;
  color: var(--gray-500);
}

.title-container {
  display: flex;
  gap: 0rem;
}

.title-subtitle-container {
  padding: 2px;
  display: flex;
  flex-direction: column;
}
</style>
