import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";

@EnKaId(10000115, "伊涅芙")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Electro)
@BaseData(Rarity.Five, 12613, 330, 828, 60)
@Icons("UI_AvatarIcon_Iansan")
class IneffaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["除尘旋刃", "涤净模式 · 稳态载频", "至高律令 · 全域扫灭"];
  normalAttack = [];
  elementSkill = [];
  burstSkill = [];
  otherSkill = [
    action("频率超限回路", AttackType.Moon, ElementType.MoonElectro, {
      atk: [0.65],
    }),
  ];
  buffs: IBuffBase[] = [];
}

/** ![伊涅芙](https://enka.network/ui/UI_AvatarIcon_Iansan.png) */
export const Ineffa = new IneffaData();
