import { IWeaponInfo } from "@/types/interface";
import Weapon from "../weapon-class";
import { EnKaId, WeaponData, WeaponIcon, highlight } from "@/utils/decorator";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";

@EnKaId(11432, "厄水之祸")
@WeaponIcon("UI_EquipIcon_Sword_SacrificialNgombe_Awaken")
@WeaponData(WeaponType.Sword, Rarity.Four, 565, AppendProp.ATTACK_PERCENT, 27.6)
class SacrificialNgombeData extends Weapon implements IWeaponInfo {
  constructor() {
    super();
  }
  getSkillDescribe(affix = 1) {
    let a = [20, 25, 30, 35, 40][affix - 1] + "%";
    let c = [8, 10, 12, 14, 16][affix - 1] + "%";
    return {
      title: "弥漫的边界",
      text: highlight`角色处于护盾庇护下时，普通攻击和重击造成的伤害提升${a}，普通攻击和重击的暴击率提升${c}。`,
    };
  }
  getBuffs(affix = 1) {
    let a = [20, 25, 30, 35, 40][affix - 1];
    let c = [8, 10, 12, 14, 16][affix - 1];
    return [
      {
        label: "护盾庇护下普通、重击的伤害&暴击率提升",
        describe: `角色处于护盾庇护下时，普通攻击和重击造成的伤害提升${a}%，普通攻击和重击的暴击率提升${c}%。`,
        effect: [
          { type: BuffType.NormalPrcent, getValue: () => a },
          { type: BuffType.StrongPrcent, getValue: () => a },
          { type: BuffType.NormalCritcal, getValue: () => c },
          { type: BuffType.StrongCritcal, getValue: () => c },
        ],
        enable: true,
      },
    ];
  }
}
/** 厄水之祸 */
export const SacrificialNgombe = new SacrificialNgombeData();
