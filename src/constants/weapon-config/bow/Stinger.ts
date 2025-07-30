import { ISkillRate, IWeaponInfo } from "@/types/interface";
import Weapon from "../weapon-class";
import { EnKaId, WeaponData, WeaponIcon, highlight } from "@/utils/decorator";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";

@EnKaId(15432, "冷寂迸音")
@WeaponIcon("UI_EquipIcon_Bow_Stinger_Awaken")
@WeaponData(WeaponType.Bow, Rarity.Four, 510, AppendProp.HP_PERCENT, 41.3)
class StingerData extends Weapon implements IWeaponInfo {
  constructor() {
    super();
  }
  getSkillDescribe(affix = 1) {
    let a = [40, 50, 60, 70, 80][affix - 1] + "%";
    return {
      title: "静发",
      text: highlight`攻击命中敌人时，在目标位置基于生命值上限的${a}，造成范围伤害。该效果每15秒至多触发一次。`,
    };
  }
  getBuffs() {
    return [];
  }
  getSkill(affix = 1) {
    let a = [40, 50, 60, 70, 80][affix - 1] / 100;
    return [
      {
        label: "冷寂迸音·静发",
        rate: {
          hp: [a],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
    ];
  }
}
/** 冷寂迸音 */
export const Stinger = new StingerData();
