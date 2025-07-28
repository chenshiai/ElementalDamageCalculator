import { IRate, ISkillRate } from "@/types/interface";
import { AttackType, ElementType, Rarity, WeaponType } from "@/types/enum";

/**
 * 图片资源的获取地址拼接
 * @param name
 * @param local true 从网站本地资源获取；false 从enka.network获取
 * @param proxy true 走代理服务；false 直接访问enka.network
 * @param homdgcat true 玉衡杯数据库
 * @returns
 */
export function getEnkaUI(
  name: string,
  local: boolean = true,
  proxy: boolean = false,
  homdgcat: boolean = false
): string {
  if (local) {
    return `/ui/${name}.png`
  }
  if (homdgcat) {
    return `https://homdgcat.wiki/homdgcat-res/AvatarSkill/${name}.png`
  }
  if (proxy) {
    return `https://8.155.52.59/ui/${name}.png`
  } else {
    return `https://enka.network/ui/${name}.png`
  }
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
        ].map((str) => getEnkaUI(str, false, false, true)),
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
