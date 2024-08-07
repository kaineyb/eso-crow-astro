<template>
  <Card class="step-card">
    <template #title
      ><Badge
        :value="`Step ${step}`"
        class="badge"
      ></Badge>
      <div class="title">
        <a :href="`/locations/${source}/`">{{ source }}</a> to
        <a :href="`/locations/${target}/`">{{ target }}</a>
      </div>
    </template>
    <template #content>
      <div>
        <Divider />
        <div class="from">
          From: <a :href="`/locations/${source}/`">{{ source }}</a> in
          <a
            :href="`/zones/${getCitiesZone(source)}/`"
            :class="cssClassHash[getCityType(source)]"
            >{{ getCitiesZone(source) }}</a
          >
          <img
            :src="zoneToImg(source)"
            class="zone-type-icon"
            :title="typeHash[getCityType(source)]"
          />
        </div>
        <Divider />
        <div class="to">
          To:
          <a :href="`/locations/${target}/`">{{ target }}</a> in
          <a
            :href="`/zones/${getCitiesZone(target)}/`"
            :class="cssClassHash[getCityType(target)]"
            >{{ getCitiesZone(target) }}</a
          >
          <img
            :src="zoneToImg(target)"
            class="zone-type-icon"
            :title="typeHash[getCityType(target)]"
          />
        </div>
        <Divider />
        <div class="via">
          Via:
          <a :href="uespURL(edgeType)">{{ edgeType }}</a
          >: <a :href="uespURL(via)">{{ via }}</a> <br />
        </div>
      </div>
    </template>
  </Card>
</template>
<script setup>
import { getCitiesZone, getCityType } from "../nodes/meta";
import { uespURL } from "../nodes/utils";

const imageURL = "/images";

const imageHash = {
  AD: "aldmeri.png",
  DC: "daggerfall.png",
  EP: "ebonheart.png",
  Neutral: "neutral.png",
  Expansion: "expansion.png",
  DLC: "dlc.png",
};

const typeHash = {
  AD: "Aldmeri Dominion Zone",
  DC: "Daggerfall Covenant Zone",
  EP: "Ebonhart Pact Zone",
  Neutral: "Neutral Zone",
  Expansion: "Expansion Zone",
  DLC: "DLC Zone",
};

const cssClassHash = {
  AD: "ad",
  DC: "dc",
  EP: "ep",
  Neutral: "neutral",
  Expansion: "expansion",
  DLC: "dlc",
};

function zoneToImg(zone) {
  const zoneType = getCityType(zone);
  return `${imageURL}/${imageHash[zoneType]}`;
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
.zone-type-icon {
  margin-left: 7px;
  position: relative;
  top: 4px;
  outline: 1px solid white;
  border-radius: 18px;
  width: 18px;
  height: 18px;
}
.step-card {
  /* outline: 1px solid gold; */
  margin-bottom: 30px;
}

.badge {
  border-radius: 7px 0px;
  position: relative;
  top: -27px;
  left: -24px;
  margin-right: -48px;
  margin-bottom: -27px;
}

.ad {
  color: var(--ad);
}

.dc {
  color: var(--dc);
}
.ep {
  color: var(--ep);
}
.neutral {
  color: var(--neutral);
}
.dlc {
  color: var(--dlc);
}
.expansion {
  color: var(--expansion);
}

a {
  font-weight: bold;
}
</style>
