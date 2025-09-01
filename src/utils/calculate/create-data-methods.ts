import { WeaponStats } from "@/types";
import { AppendProp, Rarity } from "@/types/enum";
import {  IWeaponInfo } from "@/types/interface";

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

export type WeaponConfig = Pick<IWeaponInfo, "name" | "enkaId" | "weaponType" | "icon" | "rarity"> &
  WeaponStats & { baseAtk: number };

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
