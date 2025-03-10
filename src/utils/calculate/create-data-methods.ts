import { getEnkaUI } from "@/constants/characters-config/append-prop";
import { AppendProp, AttackType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { IRate, ISkillRate, IWeaponInfo } from "@/types/interface";

function getEnkaUIs(name: string[]): string[] {
  return name.map(getEnkaUI);
}

function getEnkaImg(name: string): string {
  return `https://enka.network/ui/${name.replace("UI_AvatarIcon_", "UI_Gacha_AvatarImg_")}.png`;
}

export function cha(enkaId: number, name: string, element: ElementType, weapon: WeaponType) {
  return (rarity: Rarity, baseHP: number, baseATK: number, baseDEF: number, burstCharge: number) => {
    return (avatarIcon: string, constsIcon: string[], talentNames: string[]) => {
      return {
        name,
        enkaId,
        weapon,
        element,
        rarity,
        level: 90,
        overshoot: 6,
        baseATK,
        baseDEF,
        baseHP,
        burstCharge,
        icons: {
          avatarIcon: getEnkaUI(avatarIcon),
          constsIcon: getEnkaUIs(constsIcon),
          gachaImage: getEnkaImg(avatarIcon),
        },
        talentNames,
      };
    };
  };
}

export function createAttack(
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

export interface WeaponStats {
  baseAtk: number;
  appendPropId: AppendProp;
  statValue: number;
}
export type WeaponConfig = Pick<IWeaponInfo, "name" | "enkaId" | "weaponType" | "icon" | "rarity"> & WeaponStats;

export function createWeapon(
  { name, enkaId, weaponType, rarity, icon, baseAtk, appendPropId, statValue }: WeaponConfig,
  getSkillDescribe: IWeaponInfo["getSkillDescribe"],
  getBuffs?: IWeaponInfo["getBuffs"],
  getSkill?: IWeaponInfo["getSkill"]
): IWeaponInfo {
  return {
    name,
    enkaId,
    weaponType,
    level: rarity === Rarity.Two || rarity === Rarity.One ? 70 : 90,
    rarity,
    affix: 1,
    icon,
    weaponStats: [
      {
        appendPropId: AppendProp.BASE_ATTACK,
        statValue: baseAtk,
      },
      {
        appendPropId,
        statValue,
      },
    ],
    getSkillDescribe,
    getBuffs,
    getSkill,
  };
}
