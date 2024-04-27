<template>
  <div class="step-card">
    {{ step }}<br />
    <strong>{{ edge }}</strong
    ><br />

    <a :href="`/locations/${source}`">{{ source }}</a> [<a
      :href="`/zones/${getCitiesZone(source)}`"
      >{{ getCitiesZone(source) }}</a
    >] [{{ getCityType(source) }}]<br />

    <a :href="`/locations/${target}`">{{ target }}</a> [<a
      :href="`/zones/${getCitiesZone(target)}`"
      >{{ getCitiesZone(target) }}</a
    >] [{{ getCityType(target) }}]<br />

    <a :href="uespURL(via)">{{ via }}</a> <br />
    <a :href="uespURL(edgeType)">{{ edgeType }}</a
    ><br />
  </div>
</template>
<script setup>
import { getCitiesZone, getCityType } from "../nodes/meta";
import { uespURL } from "../nodes/utils";

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
