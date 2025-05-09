import { getEnkaUI } from "@/constants/characters-config/append-prop";
import { AppendProp, AttackType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { IRate, ISkillRate, IWeaponInfo } from "@/types/interface";

abstract class Character {
  level = 90;
  overshoot = 6;

  constructor() {}

  getEnkaImg(name: string): string {
    return `https://enka.network/ui/${name.replace("UI_AvatarIcon_", "UI_Gacha_AvatarImg_")}.png`;
  }
  getEnkaUIs(name: string[]): string[] {
    return name.map(this.getEnkaUI);
  }
  getEnkaUI(name: string): string {
    return `https://enka.network/ui/${name}.png`;
  }

  action(
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
}

export default Character;
