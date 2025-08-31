import { ElementType, Rarity, SecondElementType, WeaponType } from "@/types/enum";
import { LimitDataType } from "@/types/interface";

class Character {
  level = 90;
  overshoot = 6;
  limitData: LimitDataType[];
  name: string;
  weapon: WeaponType;
  element: ElementType;
  secondElement: SecondElementType;
  rarity: Rarity;
  enkaId: number;
  baseHP: number;
  baseATK: number;
  baseDEF: number;
  burstCharge: number;
  icons: {
    avatarIcon: string;
    constsIcon: string[];
    gachaImage: string;
  };
  constructor() {}
}

export default Character;
