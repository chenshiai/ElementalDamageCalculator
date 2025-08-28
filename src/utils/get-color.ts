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
};

export function getlinearBackGroundClassByRarity(rarity: Rarity) {
  return `linear-bg-${rarity}-rarity`;
}

export function getColorByElement(elementType: ElementType | string) {
  switch (elementType) {
    case ElementType.Physical:
      return "text-physical";
    case ElementType.Electro:
      return "text-electro";
    case ElementType.MoonElectro:
      return "text-moon-electro";
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
    case ElementType.MoonSwirl:
      return "text-moon-swirl";
    case ElementType.Pyro:
      return "text-pyro";
    case ElementType.None:
      return "text-heal";
    default:
      return "";
  }
}

export function getBackGroundByElement(elementType: ElementType) {
  switch (elementType) {
    case ElementType.Anemo:
      return "bg-anemo";
    case ElementType.Cryo:
      return "bg-cryo";
    case ElementType.Dendro:
      return "bg-dendro";
    case ElementType.Electro:
      return "bg-electro";
    case ElementType.Geo:
      return "bg-geo";
    case ElementType.Hydro:
      return "bg-hydro";
    case ElementType.Pyro:
      return "bg-pyro";
    default:
      return "";
  }
}
