import { IWeaponInfo } from "@/types/interface";
import Weapon from "../weapon-class";
import { EnKaId, WeaponData, WeaponIcon, highlight } from "@/utils/decorator";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";

@EnKaId(12432, "拾慧铸熔")
@WeaponIcon("UI_EquipIcon_Claymore_Polilith_Awaken")
@WeaponData(WeaponType.GreatSword, Rarity.Four, 510, AppendProp.ELEMENT_MASTERY, 165)
class PolilithData extends Weapon implements IWeaponInfo {
  constructor() {
    super();
  }
  getSkillDescribe = (affix = 1) => {
    let a = [12, 15, 18, 21, 24][affix - 1];
    let b = [60, 75, 90, 105, 120][affix - 1];
    return {
      title: "盛放的思绪",
      text: highlight`触发感电、月感电或绽放反应时，恢复${a}点元素能量，并在接下来的15秒内使元素精通提升${b}点。该效果每15秒至多触发一次。装备者处于队伍后台时，依然能触发上述效果。`,
    };
  }
  getBuffs = (affix = 1) => {
    let b = [60, 75, 90, 105, 120][affix - 1];
    return [
      {
        label: "触发相关反应后元素精通提升",
        describe: `触发感电、月感电或绽放反应时，在接下来的15秒内使元素精通提升${b}点`,
        effect: [{ type: BuffType.MysteryFixed, getValue: () => b }],
        enable: true,
        target: BuffTarget.Self,
      },
    ];
  }
}
/** 拾慧铸熔 */
export const Polilith = new PolilithData();
