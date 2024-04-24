<template>
  <div class="step-card">
    {{ step }}<br />
    <strong>{{ edge }}</strong
    ><br />
    {{ source }} [{{ getCitiesZone(source) }}] [{{ getCityType(source) }}]<br />
    {{ target }} [{{ getCitiesZone(source) }}] [{{ getCityType(source) }}]<br />
    <a :href="uespURL(via)">{{ via }}</a> <br />
    <a :href="uespURL(edgeType)">{{ edgeType }}</a
    ><br />
  </div>
</template>
<script setup>
import { getCitiesZone, getCityType } from "../nodes/meta";

function uespURL(name) {
  return `https://en.uesp.net/wiki/Online:${name}`;
}

const props = defineProps({
  step: Number,
  edge: String,
  source: String,
  target: String,
  via: String,
  edgeType: String,
});
</script>
<style scoped>
.step-card {
  outline: 1px solid gold;
  margin-bottom: 30px;
}
</style>
