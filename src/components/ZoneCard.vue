<template>
  <Card class="zone">
    <template #title>
      <div :class="`slanted-edge ${zoneType}`">
        <a :href="`/zones/${zoneName}/`">{{ zoneName }}</a>
        <!-- <span :class="zoneType">{{ zoneType }}</span> -->
        <!-- <img
          :src="zoneToImg(zoneType)"
          class="zone-type-icon"
          :title="typeHash[getCityType(zoneName)]"
        /> -->
      </div>

      <!-- <Divider /> -->
    </template>
    <template #content>
      <div class="zone-container">
        <div v-for="city in cities.sort()">
          <a :href="`/locations/${city}/`">{{ city }}</a>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { getCitiesZone, getCityType } from "../nodes/meta";
const props = defineProps(["zoneName", "zoneType", "cities"]);

const typeHash = {
  AD: "Aldmeri Dominion Zone",
  DC: "Daggerfall Covenant Zone",
  EP: "Ebonhart Pact Zone",
  Neutral: "Neutral Zone",
  Expansion: "Expansion Zone",
  DLC: "DLC Zone",
};

const imageURL = "/images";
const imageHash = {
  AD: "aldmeri.png",
  DC: "daggerfall.png",
  EP: "ebonheart.png",
  Neutral: "neutral.png",
  Expansion: "expansion.png",
  DLC: "dlc.png",
};
function zoneToImg(zoneType) {
  console.log(zoneType);
  return `${imageURL}/${imageHash[zoneType]}`;
}
</script>
<style scoped>
.zone {
  /* background-color: var(--gray-900); */
  /* outline: 1px solid red; */
  /* margin-bottom: 50px; */
}
.zone-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.zone-container > * {
  outline: 1px solid var(--gray-800);
  padding: 10px;
}

.title {
  position: relative;
  top: -34px;
  left: -34px;
  /* width: max-content; */
  /* display: inline-block; */
  /* outline: 1px solid gold; */
  padding: 10px 0px 10px 10px;
  border-radius: 5px 0px;
  margin-bottom: -34px;
}

.slanted-edge {
  position: relative;
  top: -34px;
  left: -34px;
  width: max-content;
  /* display: inline-block; */
  /* outline: 1px solid gold; */
  padding: 10px 30px 10px 10px;
  border-radius: 5px 0px;
  margin-bottom: -34px;

  --p: 7%; /* control the shape (can be percentage) */
  /* height: 50px; */
  /* aspect-ratio: 1; */
  clip-path: polygon(0 0, 100% 0, calc(100% - var(--p)) 100%, 0 100%);
  background: rebeccapurple;
}

.AD {
  color: var(--ad);
  background-color: var(--ad);
}

.DC {
  color: var(--dc);
  background-color: var(--dc);
}
.EP {
  color: var(--ep);
  background-color: var(--ep);
}
.Neutral {
  color: var(--gray-800);
  background-color: var(--neutral);
}
.DLC {
  color: var(--dlc);
  background-color: var(--dlc);
}
.Expansion {
  color: var(--gray-800);
  background-color: var(--expansion);
}
</style>
