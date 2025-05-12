import { IBuffBase, ICharacterInfo, IRate, ISkillRate } from "@/types/interface";
import { AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";

export function getEnkaUI(name: string): string {
  return `https://enka.network/ui/${name}.png`;
}
export function Weapon(weaponType: WeaponType) {
  return function (target: any) {
    target.prototype.weapon = weaponType;
  };
}
export function Element(ElementType: ElementType) {
  return function (target: any) {
    target.prototype.element = ElementType;
  };
}

export function Icons(str: string) {
  return function (target: any) {
    target.prototype.icons = {
      avatarIcon: getEnkaUI(str),
      constsIcon: [
        `UI_Talent_S_${str.replace("UI_AvatarIcon_", "")}_01`,
        `UI_Talent_S_${str.replace("UI_AvatarIcon_", "")}_02`,
        `UI_Talent_U_${str.replace("UI_AvatarIcon_", "")}_01`,
        `UI_Talent_S_${str.replace("UI_AvatarIcon_", "")}_03`,
        `UI_Talent_U_${str.replace("UI_AvatarIcon_", "")}_02`,
        `UI_Talent_S_${str.replace("UI_AvatarIcon_", "")}_04`,
      ].map(getEnkaUI),
      gachaImage: `https://enka.network/ui/${str.replace("UI_AvatarIcon_", "UI_Gacha_AvatarImg_")}.png`,
    };
  };
}

export function EnKaId(id: number, name: string) {
  return function (target: any) {
    target.prototype.enkaId = id;
    target.prototype.name = name;
  };
}

export function BaseData(rarity: Rarity, hp: number, atk: number, def: number, burstCharge: number) {
  return function (target: any) {
    target.prototype.rarity = rarity;
    target.prototype.baseHP = hp;
    target.prototype.baseATK = atk;
    target.prototype.baseDEF = def;
    target.prototype.burstCharge = burstCharge;
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
