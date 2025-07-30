import { IWeaponInfo } from "@/types/interface";
import Weapon from "../weapon-class";
import { EnKaId, WeaponData, WeaponIcon, highlight } from "@/utils/decorator";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";

@EnKaId(14518, "寝正月初晴")
@WeaponIcon("UI_EquipIcon_Catalyst_SakuraFan_Awaken")
@WeaponData(WeaponType.Magic, Rarity.Five, 542, AppendProp.ELEMENT_MASTERY, 265)
class SakuraFanData extends Weapon implements IWeaponInfo {
  constructor() {
    super();
  }
  getSkillDescribe(affix = 1) {
    let a = [120, 150, 180, 210, 240][affix - 1];
    let b = [96, 120, 144, 168, 192][affix - 1];
    let c = [32, 40, 48, 56, 64][affix - 1];
    return {
      title: "一汤二鹰三鸣神",
      text: highlight`触发扩散反应后的6秒内，元素精通提升${a}点；元素战技命中敌人后的9秒内，元素精通提升${b}点；元素爆发命中敌人后的30秒内，元素精通提升${c}点。`,
    };
  }
  getBuffs(affix = 1) {
    let a = [120, 150, 180, 210, 240][affix - 1];
    let b = [96, 120, 144, 168, 192][affix - 1];
    let c = [32, 40, 48, 56, 64][affix - 1];
    return [
      {
        label: "扩散反应后，元素精通提升",
        describe: `扩散反应后的6秒内，元素精通提升${a}点`,
        effect: [{ type: BuffType.MysteryFixed, getValue: () => a }],
        enable: false,
      },
      {
        label: "元素战技命中后，元素精通提升",
        describe: `元素战技命中敌人后的9秒内，元素精通提升${b}点`,
        effect: [{ type: BuffType.MysteryFixed, getValue: () => b }],
        enable: false,
      },
      {
        label: "元素爆发命中后，元素精通提升",
        describe: `元素爆发命中敌人后的30秒内，元素精通提升${c}点`,
        effect: [{ type: BuffType.MysteryFixed, getValue: () => c }],
        enable: false,
      },
    ];
  }
}
/** 寝正月初晴 */
export const SakuraFan = new SakuraFanData();
