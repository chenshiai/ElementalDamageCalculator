import { WeaponStats } from "@/types";
import { Rarity, WeaponType } from "@/types/enum";
import { IWeaponInfo } from "@/types/interface";

abstract class Weapon {
  name: string;
  icon: string;
  weaponType: WeaponType;
  rarity: Rarity;
  enkaId: number;

  affix = 1;
  weaponStats: WeaponStats[];
  level: number;

  constructor() {
    this.level = this.rarity === Rarity.Two || this.rarity === Rarity.One ? 70 : 90;
  }
}

export default Weapon;
