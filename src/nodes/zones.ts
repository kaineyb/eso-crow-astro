const factionNames = [
  "Aldmeri Dominion",
  "Ebonheart Pact",
  "Daggerfall Covenant",
];

export const ad = [
  "Auridon",
  "Grahtwood",
  "Greenshade",
  "Khenarthi's Roost",
  "Malabal Tor",
  "Reaper's March",
];

export const ep = [
  "Bal Foyen",
  "Bleakrock Isle",
  "Deshaan",
  "Eastmarch",
  "The Rift",
  "Shadowfen",
  "Stonefalls",
];

export const dc = [
  "Alik'r Desert",
  "Bangkorai",
  "Betnikh",
  "Glenumbra",
  "Rivenspire",
  "Stormhaven",
  "Stros M'Kai",
];

// ColdHarbour/ Cyrodiil has issues...
// export const neutral = ["Coldharbour", "Craglorn", "Cyrodiil"];
export const neutral = ["Craglorn"];

export const chapter = [
  // "Artaeum",
  "Northern Elsweyr",
  "Summerset",
  "Vvardenfell",
  // "Western Skyrim",
];

export const dlc = [
  "Clockwork City",
  "Gold Coast",
  "Hew's Bane",
  "Murkmire",
  "Southern Elsweyr",
  "Wrothgar",
];

export const cityToZone: { [city: string]: string } = {
  "Abah's Landing": "Hew's Bane",
  Alinor: "Summerset",
  "Alten Corimont": "Shadowfen",
  Anvil: "Gold Coast",
  Balmora: "Vvardenfell",
  Belkarth: "Craglorn",
  "Stonetooth Fortress": "Betnikh",
  "Bleakrock Village": "Bleakrock Isle",
  Daggerfall: "Glenumbra",
  "Davon's Watch": "Stonefalls",
  Dhalmora: "Bal Foyen",
  "Elden Root": "Grahtwood",
  Evermore: "Bangkorai",
  Gnisis: "Vvardenfell",
  Haven: "Grahtwood",
  "Eagle's Strand": "Khenarthi's Roost",
  Lilmoth: "Murkmire",
  "Molag Mar": "Vvardenfell",
  Mournhold: "Deshaan",
  Orsinium: "Wrothgar",
  "Rawl'kha": "Reaper's March",
  Riften: "The Rift",
  Rimmen: "Northern Elsweyr",
  "Sadrith Mora": "Vvardenfell",
  Sentinel: "Alik'r Desert",
  "Seyda Neen": "Vvardenfell",
  Shimmerene: "Summerset",
  Shornhelm: "Rivenspire",
  Skywatch: "Auridon",
  Stormhold: "Shadowfen",
  "Port Hunding": "Stros M'Kai",
  Suran: "Vvardenfell",
  "Tel Mora": "Vvardenfell",
  Vivec: "Vvardenfell",
  "Vulkhel Guard": "Auridon",
  Vulkwasten: "Malabal Tor",
  Wayrest: "Stormhaven",
  Windhelm: "Eastmarch",
  Woodhearth: "Greenshade",
};

export const factionZones = [...ad, ...dc, ...ep];
export const allZones = [...factionZones, ...neutral, ...chapter, ...dlc];
