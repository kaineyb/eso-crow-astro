import { allZones, dlc, chapter, neutral, dc, ep, ad } from "../nodes/zones";

import { cityToZone } from "../nodes/zones";

function addCityInfo(nodes: string[]) {}

function addZonalInfo() {}

export function findZoneType(zone: string): string | undefined {
  if (!allZones.includes(zone)) return undefined;

  if (dlc.includes(zone)) return "DLC";
  if (chapter.includes(zone)) return "Expansion";
  if (neutral.includes(zone)) return "Neutral";
  if (dc.includes(zone)) return "DC";
  if (ep.includes(zone)) return "EP";
  if (ad.includes(zone)) return "AD";

  return undefined;
}

function convertSpaces(requestName: string) {
  return requestName.replace("%20", " ");
}

export function getCitiesZone(city: string): string | undefined {
  if (!Object.keys(cityToZone).includes(city)) return undefined;
  return cityToZone[city];
}

export function getCityType(city: string): string | undefined {
  const zone = getCitiesZone(city);
  if (!zone) return undefined;

  const type = findZoneType(zone);
  if (!type) return undefined;

  return type;
}
