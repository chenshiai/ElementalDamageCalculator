import { IWeaponInfo } from "@/types/interface";
import Weapon from "../weapon-class";
import { EnKaId, WeaponData, WeaponIcon, highlight } from "@/utils/decorator";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";

@EnKaId(12514, "焚曜千阳")
@WeaponIcon("UI_EquipIcon_Claymore_RadianceSword_Awaken")
@WeaponData(WeaponType.GreatSword, Rarity.Five, 741, AppendProp.CRITICAL, 11)
class RadianceSwordData extends Weapon implements IWeaponInfo {
  constructor() {
    super();
  }
  getSkillDescribe = (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1] + "%";
    let b = [28, 35, 42, 49, 56][affix - 1] + "%";
    return {
      title: "落日重燃的黎明",
      text: highlight`施放元素战技或元素爆发时，获得「焚光」效果：暴击伤害提高${a}，攻击力提升${b}，该效果持续6秒，每10秒至多触发一次。
        <br />持续期间内，普通攻击或重击造成元素伤害后，将使此次「焚光」效果的持续时间延长2秒，该效果每1秒至多触发一次，至多通过这种方式使持续时间延长6秒。
        <br />此外，处于夜魂加持状态下时，「焚光」效果提高75%，且「焚光」效果在装备者处于后台时不进行计时。`,
    };
  };
  getBuffs = (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1];
    let b = [28, 35, 42, 49, 56][affix - 1];
    return [
      {
        label: "焚光",
        describe: `施放元素战技或元素爆发时，获得「焚光」效果：暴击伤害提高${a}%，攻击力提升${b}%。处于夜魂加持状态下时，「焚光」效果提高75%。`,
        effect: [
          { type: BuffType.CritcalHurt, getValue: (_, s) => a + a * 0.75 * s },
          { type: BuffType.ATKPrcent, getValue: (_, s) => b + b * 0.75 * s },
        ],
        enable: true,
        stackable: true,
        stackText: "夜魂加持",
        limit: 1,
        stack: 0,
        stackType: "switch" as const,
      },
    ];
  };
}
/** 焚曜千阳 */
export const RadianceSword = new RadianceSwordData();
