import { getCitiesZone, getCityType } from "./meta";

type cityInfo = {
  Zone: string;
  "Zone Type": string;
};

type cityInfoObj = {
  [location: string]: cityInfo;
};

export function createCityInfo(locations: string[]): cityInfoObj {
  const cityInfo: cityInfoObj = {};

  for (const location of locations) {
    const zone = getCitiesZone(location);
    const type = getCityType(location);

    cityInfo[location] = {
      Zone: zone ? zone : "Zone not Found",
      "Zone Type": type ? type : "Type Not Found",
    };
  }

  return cityInfo;
}

function listCitiesInZone(zone: string, cityInfoObj: cityInfoObj): string[] {
  const cityList: string[] = [];

  for (const [city, cityInfo] of Object.entries(cityInfoObj))
    if (zone === cityInfo["Zone"]) cityList.push(city);

  return cityList;
}

export type ZoneInfo = {
  [zone: string]: {
    Type: string;
    Cities: string[];
  };
};

export function getZoneInfo(cityInfoObj: cityInfoObj, sort = true): ZoneInfo {
  const newObj: ZoneInfo = {};

  for (const cityInfo of Object.values(cityInfoObj)) {
    const zone = cityInfo["Zone"];
    const zoneType = cityInfo["Zone Type"];

    newObj[zone] = {
      Type: zoneType,
      Cities: listCitiesInZone(zone, cityInfoObj),
    };
  }

  if (sort) {
    return sortZoneInfo(newObj);
  }

  return newObj;
}

function zoneTypeSort(zoneTypeA: string, zoneTypeB: string) {
  const order = ["AD", "DC", "EP", "Neutral", "Expansion", "DLC"];

  if (order.includes(zoneTypeA) && order.includes(zoneTypeB)) {
    const aIndex = order.indexOf(zoneTypeA);
    const bIndex = order.indexOf(zoneTypeB);

    return aIndex - bIndex;
  }

  return 0;
}

export function sortZoneInfo(zoneInfo: ZoneInfo): ZoneInfo {
  const sortedZoneInfo: ZoneInfo = {};

  function sortFunc(zoneA: string, zoneB: string) {
    const dataA = zoneInfo[zoneA];
    const dataB = zoneInfo[zoneB];

    if (zoneTypeSort(dataA.Type, dataB.Type) == 0)
      return zoneA.localeCompare(zoneB);

    return zoneTypeSort(dataA.Type, dataB.Type);
  }

  const sortedKeys = Object.keys(zoneInfo).toSorted((a, b) => sortFunc(a, b));

  for (const key of sortedKeys) {
    sortedZoneInfo[key] = zoneInfo[key];
  }

  return sortedZoneInfo;
}

type LocationExpansion = [Type: string, Location: string, Cities: string[]];

function getLocationsInExpansion(expansion: string, zoneInfo: ZoneInfo) {
  const expansionInfo: LocationExpansion[] = [];

  for (const [location, info] of Object.entries(zoneInfo)) {
    if (info["Type"] == expansion)
      expansionInfo.push([info["Type"], location, info["Cities"]]);
  }

  return expansionInfo;
}
