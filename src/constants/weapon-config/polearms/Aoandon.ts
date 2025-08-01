import { IWeaponInfo } from "@/types/interface";
import Weapon from "../weapon-class";
import { EnKaId, WeaponData, WeaponIcon, highlight } from "@/utils/decorator";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";

@EnKaId(13432, "且住亭御咄")
@WeaponIcon("UI_EquipIcon_Pole_Aoandon_Awaken")
@WeaponData(WeaponType.Polearms, Rarity.Four, 565, AppendProp.CHARGE_EFFICIENCY, 30.6)
class AoandonData extends Weapon implements IWeaponInfo {
  constructor() {
    super();
  }
  getSkillDescribe = (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1] + "%";
    return {
      title: "好事者奔行灯",
      text: highlight`施放元素战技时，提高${a}攻击力和10%移动速度，持续10秒。`,
    };
  };
  getBuffs = (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1];
    return [
      {
        label: "攻击力提升",
        describe: `施放元素战技时，提高${a}%攻击力`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: true,
      },
    ];
  };
}
/** 且住亭御咄 */
export const Aoandon = new AoandonData();
