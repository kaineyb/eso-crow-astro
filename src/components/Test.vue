<template>
  <PrimeButton
    class="form-button p-button-sm"
    label="Button 123"
  />
  <Calendar
    v-model="icondisplay"
    showIcon
    iconDisplay="input"
  />
</template>

<script setup>
import { ref } from "vue";

const icondisplay = ref("11/04/1986");
</script>
<style scoped></style>
