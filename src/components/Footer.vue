<template>
  <div class="container">
    <ul>
      <li>
        <a :href="conf.github"><i class="pi pi-github"></i></a>
      </li>
      <li>&copy; 2021</li>
    </ul>
  </div>
</template>
<script setup>
import conf from "../globalConfig";
</script>
<style scoped>
.container {
  background-color: var(--gray-900);
  width: 100%;
  margin: auto auto;
  padding: 10px;
  height: 100%;
}

.container ul {
  padding-inline-start: 0;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  flex-direction: row;
}
</style>
