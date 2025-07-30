import { IWeaponInfo } from "@/types/interface";
import Weapon from "../weapon-class";
import { EnKaId, WeaponData, WeaponIcon, highlight } from "@/utils/decorator";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";

@EnKaId(13514, "香韵奏者")
@WeaponIcon("UI_EquipIcon_Pole_Trident_Awaken")
@WeaponData(WeaponType.Polearms, Rarity.Five, 608, AppendProp.CRITICAL_HURT, 66.2)
class TridentData extends Weapon implements IWeaponInfo {
  constructor() {
    super();
  }
  getSkillDescribe(affix = 1) {
    let a = [12, 15, 18, 21, 24][affix - 1] + "%";
    let b = [32, 40, 48, 56, 64][affix - 1] + "%";
    return {
      title: "百味交响",
      text: highlight`攻击力提升${a}；当装备此武器的角色处于队伍后台时，攻击力额外提升${a}。进行治疗后，装备者与受到治疗的角色会获得「甘美回奏」的效果，攻击力提升${b}，持续3秒。装备者处于队伍后台时，依然能触发上述效果。`,
    };
  }
  getBuffs(affix = 1) {
    let a = [12, 15, 18, 21, 24][affix - 1];
    let b = [32, 40, 48, 56, 64][affix - 1];
    return [
      {
        label: "攻击力提升",
        describe: `攻击力提升${a}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: true,
      },
      {
        label: "处于后台攻击力提升",
        describe: `攻击力提升${a}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: true,
      },
      {
        label: "治疗后攻击力提升",
        describe: `装备者与受治疗者，攻击力提升${b}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => b }],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
    ];
  }
}
/** 香韵奏者 */
export const Trident = new TridentData();
