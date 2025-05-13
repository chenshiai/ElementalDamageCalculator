import { IRate, ISkillRate } from "@/types/interface";
import { AttackType, ElementType, Rarity, WeaponType } from "@/types/enum";

export function getEnkaUI(name: string): string {
  return `https://enka.network/ui/${name}.png`;
}
export function Weapon(weaponType: WeaponType): any {
  return function (target: any) {
    return class extends target {
      weapon = weaponType;
      constructor() {
        super();
      }
    };
  };
}
export function Element(ElementType: ElementType): any {
  return function (target: any) {
    return class extends target {
      element = ElementType;
      constructor() {
        super();
      }
    };
  };
}

export function Icons(str: string, consts?: string, gacha?: string): any {
  return function (target: any) {
    return class extends target {
      constructor() {
        super();
      }
      icons = {
        avatarIcon: getEnkaUI(str),
        constsIcon: [
          `UI_Talent_S_${consts || str.replace("UI_AvatarIcon_", "")}_01`,
          `UI_Talent_S_${consts || str.replace("UI_AvatarIcon_", "")}_02`,
          `UI_Talent_U_${consts || str.replace("UI_AvatarIcon_", "")}_01`,
          `UI_Talent_S_${consts || str.replace("UI_AvatarIcon_", "")}_03`,
          `UI_Talent_U_${consts || str.replace("UI_AvatarIcon_", "")}_02`,
          `UI_Talent_S_${consts || str.replace("UI_AvatarIcon_", "")}_04`,
        ].map(getEnkaUI),
        gachaImage: `https://enka.network/ui/${gacha || str.replace("UI_AvatarIcon_", "UI_Gacha_AvatarImg_")}.png`,
      };
    };
  };
}

export function EnKaId(id: number, name: string): any {
  return function (target: any) {
    return class extends target {
      constructor() {
        super();
      }
      enkaId = id;
      name = name;
    };
  };
}

export function BaseData(rarity: Rarity, hp: number, atk: number, def: number, burstCharge: number): any {
  return function (target: any) {
    return class extends target {
      constructor() {
        super();
      }
      rarity = rarity;
      baseHP = hp;
      baseATK = atk;
      baseDEF = def;
      burstCharge = burstCharge;
    };
  };
}

export function action(
  label: string,
  attackType: AttackType,
  elementType: ElementType,
  rate: IRate,
  special?: string
): ISkillRate {
  return {
    label,
    attackType,
    elementType,
    rate,
    special,
  };
}
