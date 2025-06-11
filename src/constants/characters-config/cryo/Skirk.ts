import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_CRITALHUNT_38P } from "../buffs";

@EnKaId(10000113, "丝柯克")
@Weapon(WeaponType.Sword)
@Element(ElementType.Cryo)
@BaseData(Rarity.Five, 12417, 359, 806, 0)
@Icons("UI_AvatarIcon_Skirk")
class SkirkData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["极恶技·断", "极恶技·闪", "极恶技·灭"];
  normalAttack = [];
  elementSkill = [];
  burstSkill = [];
  otherSkill = [];
  buffs: IBuffBase[] = [...S_80_CRITALHUNT_38P, Constellation_Q_3, Constellation_E_5];
}

/** ![丝柯克](https://enka.network/ui/UI_AvatarIcon_Skirk.png) */
export const Skirk = new SkirkData();
