import { IRate, ISkillRate } from "@/types/interface";
import { AppendProp, AttackType, ElementType, Rarity, SecondElementType, WeaponType } from "@/types/enum";

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
    return `/ui/${name}.png`;
  }
  if (homdgcat) {
    // return `https://homdgcat.wiki/homdgcat-res/AvatarSkill/${name}.png`;
    return `https://api.hakush.in/gi/UI/${name}.webp`;
  }
  if (proxy) {
    return `https://8.155.52.59/ui/${name}.png`;
  } else {
    return `https://enka.network/ui/${name}.png`;
  }
}

export function getNameCardIcon(name: string): string {
    return `https://enka.network${name}`;
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

export function Element(ElementType: ElementType, secondElement?: SecondElementType): any {
  return function (target: any) {
    return class extends target {
      element = ElementType;
      secondElement = secondElement;
      constructor() {
        super();
      }
    };
  };
}

export function Icons(str: string, consts?: string, gacha?: string): any {
  return function (target: any) {
    return class extends target {
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
      constructor() {
        super();
      }
    };
  };
}

export function EnKaId(id: number, name: string): any {
  return function (target: any) {
    return class extends target {
      enkaId = id;
      name = name;
      constructor() {
        super();
      }
    };
  };
}

export function BaseData(rarity: Rarity, data90: number[], burstCharge: number, data100: number[]): any {
  return function (target: any) {
    return class extends target {
      rarity = rarity;
      baseHP = data90[0];
      baseATK = data90[1];
      baseDEF = data90[2];
      burstCharge = burstCharge;

      limitData = [
        {
          baseHP: data90[0],
          baseATK: data90[1],
          baseDEF: data90[2],
        },
        {
          baseHP: Math.round((data90[0] + data100[0]) / 2),
          baseATK: Math.round((data90[1] + data100[1]) / 2),
          baseDEF: Math.round((data90[2] + data100[2]) / 2),
        },
        {
          baseHP: data100[0],
          baseATK: data100[1],
          baseDEF: data100[2],
        },
      ];

      constructor() {
        super();
      }
    };
  };
}

export function WeaponData(
  type: WeaponType,
  rarity: Rarity,
  baseAtk: number,
  appendPropId: AppendProp,
  statValue: number
): any {
  return function (target: any) {
    return class extends target {
      weaponType = type;
      rarity = rarity;
      weaponStats = [
        {
          appendPropId: AppendProp.BASE_ATTACK,
          statValue: baseAtk,
        },
        {
          appendPropId,
          statValue,
        },
      ];
      constructor() {
        super();
      }
    };
  };
}
export function WeaponIcon(str: string): any {
  return function (target: any) {
    return class extends target {
      icon = getEnkaUI(str);
      constructor() {
        super();
      }
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

export function highlight(strings, ...values) {
  let result = "";
  strings.forEach((string, index) => {
    result += string;
    if (index < values.length) {
      result += `<span class="highlight">${values[index]}</span>`;
    }
  });
  return result;
}
