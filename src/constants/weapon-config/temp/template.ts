import { IWeaponInfo } from "@/types/interface";
import Weapon from "../weapon-class";
import { EnKaId, WeaponData, WeaponIcon, highlight } from "@/utils/decorator";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";

@EnKaId(100, "nnn")
@WeaponIcon("xxx")
@WeaponData(WeaponType.Polearms, Rarity.Five, 608, AppendProp.CRITICAL_HURT, 66.2)
class XXXXData extends Weapon implements IWeaponInfo {
  constructor() {
    super();
  }
  getSkillDescribe(affix = 1) {
    let a = [][affix - 1] + "%";
    return {
      title: "",
      text: highlight``,
    };
  }
  getBuffs(affix = 1) {
    let a = [][affix - 1];
    return [
      {
        label: "",
        describe: ``,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: true,
        target: BuffTarget.Self,
      },
    ];
  }
}
export const XXXX = new XXXXData();
