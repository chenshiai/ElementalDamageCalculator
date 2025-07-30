import { IWeaponInfo } from "@/types/interface";
import Weapon from "../weapon-class";
import { EnKaId, WeaponData, WeaponIcon, highlight } from "@/utils/decorator";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";

@EnKaId(11518, "支离轮光")
@WeaponIcon("UI_EquipIcon_Pole_Perdix_Awaken")
@WeaponData(WeaponType.Polearms, Rarity.Five, 608, AppendProp.CRITICAL_HURT, 66.2)
class PerdixData extends Weapon implements IWeaponInfo {
  constructor() {
    super();
  }
  getSkillDescribe(affix = 1) {
    let a = [24, 30, 36, 42, 48][affix - 1] + "%";
    let b = [40, 50, 60, 70, 80][affix - 1] + "%";
    return {
      title: "洁霜的玉冕",
      text: highlight`施放元素战技或元素爆发后的20秒内，攻击力提升${a}。持续期间内，若装备者创造了护盾，则接下来的20秒内，还会获得「流电圣敕」效果：队伍中附近所有角色触发的月感电反应造成的伤害提升${b}。`,
    };
  }
  getBuffs(affix = 1) {
    let a = [24, 30, 36, 42, 48][affix - 1];
    let b = [40, 50, 60, 70, 80][affix - 1];
    return [
      {
        label: "施放元素战技或元素爆发后攻击力提升",
        describe: `施放元素战技或元素爆发后的20秒内，攻击力提升${a}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: true,
        target: BuffTarget.Self,
      },
      {
        label: "「流电圣敕」",
        describe: `角色触发的月感电反应造成的伤害提升${b}%`,
        effect: [{ type: BuffType.MoonElectroPrcent, getValue: () => b }],
        enable: true,
        shareable: true,
        target: BuffTarget.All,
      },
    ];
  }
}
/** 支离轮光 */
export const Perdix = new PerdixData();
