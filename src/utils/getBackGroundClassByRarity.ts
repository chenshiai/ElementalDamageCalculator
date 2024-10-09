import { ElementType, Rarity } from "@/types/enum";

export default (rarity: Rarity) => {
  switch (rarity) {
    case Rarity.Five:
      return "bg-five-rarity";
    case Rarity.Four:
      return "bg-four-rarity";
    case Rarity.Three:
      return "bg-three-rarity";
    case Rarity.Two:
      return "bg-two-rarity";
    case Rarity.One:
      return "bg-one-rarity";
  }
}

export function getlinearBackGroundClassByRarity(rarity: Rarity) {
  return `linear-bg-${rarity}-rarity`;
}

export function getColorByElement(elementType) {
  switch (elementType) {
    case ElementType.Physical:
      return "text-physical";
    case ElementType.Electro:
      return "text-electro";
    case ElementType.Hydro:
      return "text-hydro";
    case ElementType.Anemo:
      return "text-anemo";
    case ElementType.Cryo:
      return "text-cryo";
    case ElementType.Geo:
      return "text-geo";
    case ElementType.Dendro:
      return "text-dendro";
    case ElementType.Pyro:
      return "text-pyro";
}
}