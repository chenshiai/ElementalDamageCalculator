import { IWeaponInfo } from "@/types/interface";
import Weapon from "../weapon-class";
import { EnKaId, WeaponData, WeaponIcon, highlight } from "@/utils/decorator";
import { AppendProp, BuffType, Rarity, WeaponType } from "@/types/enum";

@EnKaId(11517, "苍耀")
@WeaponIcon("UI_EquipIcon_Sword_OuterSword_Awaken")
@WeaponData(WeaponType.Sword, Rarity.Five, 674, AppendProp.CRITICAL, 22.1)
class OuterData extends Weapon implements IWeaponInfo {
  constructor() {
    super();
  }
  getSkillDescribe = (affix = 1) => {
    let a = [24, 30, 36, 42, 48][affix - 1] + "%";
    let b = [40, 50, 60, 70, 80][affix - 1] + "%";
    return {
      title: "白山的馈赐",
      text: highlight`施放元素战技后的12秒内，攻击力提升${a}。持续期间，装备者的元素能量为0时，攻击力还会提升${a}，且暴击伤害提升${b}。`,
    };
  };
  getBuffs = (affix = 1) => {
    let a = [24, 30, 36, 42, 48][affix - 1];
    let b = [40, 50, 60, 70, 80][affix - 1];
    return [
      {
        label: "施放元素战技后，攻击力提升",
        describe: `施放元素战技后，攻击力提升${a}%。`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: true,
      },
      {
        label: "装备者的元素能量为0时，攻击力还会提升，且暴击伤害提升",
        describe: `装备者的元素能量为0时，攻击力还会提升${a}%，且暴击伤害提升${b}%。`,
        effect: [
          { type: BuffType.ATKPrcent, getValue: () => a },
          { type: BuffType.CritcalHurt, getValue: () => b },
        ],
        enable: false,
      },
    ];
  };
}
/** 苍耀 */
export const Outer = new OuterData();
