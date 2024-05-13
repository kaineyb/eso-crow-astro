<template>
  <div class="container">
    <ul>
      <li>
        <a
          :href="conf.github"
          aria-label="github"
          ><i class="pi pi-github"
        /></a>
      </li>
      <li>&copy; 2021 - {{ new Date().getFullYear() }}</li>
      <li>
        <a
          href="#"
          aria-label="to the top"
          ><i class="pi pi-arrow-up"
        /></a>
      </li>
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

.container a {
  text-decoration: none;
}

.container a:hover {
  /* color: aqua; */
  text-decoration: underline;
}
</style>
