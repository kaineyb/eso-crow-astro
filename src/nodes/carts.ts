import type { BasicEdge } from "./types";
import { generateEdgesFromBasic } from "./utils";
//  TODO Carts was rushed, needs checking

const CART_LABEL = "Self-driven Cart";

const cartsOG: BasicEdge[] = [
  //  Wrothgar
  ["Orsinium", "Vulkhel Guard", CART_LABEL],
  ["Orsinium", "Daggerfall", CART_LABEL],
  ["Orsinium", "Davon's Watch", CART_LABEL],

  ["Vulkhel Guard", "Orsinium", CART_LABEL],
  ["Wayrest", "Orsinium", CART_LABEL],
  ["Daggerfall", "Orsinium", CART_LABEL],

  //  Craglorn

  ["Belkarth", "Mournhold", CART_LABEL],
  ["Belkarth", "Wayrest", CART_LABEL],
  ["Belkarth", "Elden Root", CART_LABEL],

  ["Mournhold", "Belkarth", CART_LABEL],
  ["Wayrest", "Belkarth", CART_LABEL],
  ["Elden Root", "Belkarth", CART_LABEL],
];

export const carts = generateEdgesFromBasic(cartsOG, "Carts");
