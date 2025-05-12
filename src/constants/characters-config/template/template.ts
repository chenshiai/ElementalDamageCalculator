import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";


@EnKaId(10000069, "nnn")
@Weapon(WeaponType.Bow)
@Element(ElementType.Hydro)
@BaseData(Rarity.Five, 0, 0, 0, 0)
@Icons("cccccccccccc")
class XXXXXData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = [];
  normalAttack = [];
  elementSkill = [];
  burstSkill = [];
  otherSkill = [];
  buffs: IBuffBase[] = [];
}

/** ![nnn](https://enka.network/ui/UI_AvatarIcon_XXXXX.png) */
export const XXXXX = new XXXXXData();
