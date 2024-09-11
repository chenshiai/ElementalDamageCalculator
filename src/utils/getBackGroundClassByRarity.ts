import { Rarity } from "@/constants/characters-config/interface.d";

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