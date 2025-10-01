import { IWeaponInfo } from "@/types/interface";
import Weapon from "../weapon-class";
import { EnKaId, WeaponData, WeaponIcon, highlight } from "@/utils/decorator";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";

@EnKaId(15430, "缀花之翎")
@WeaponIcon("UI_EquipIcon_Bow_Umpakati_Awaken")
@WeaponData(WeaponType.Bow, Rarity.Four, 510, AppendProp.ATTACK_PERCENT, 41.3)
class Bow_UmpakatiData extends Weapon implements IWeaponInfo {
  constructor() {
    super();
  }
  getSkillDescribe = (affix = 1) => {
    let a = [6, 7.5, 9, 10.5, 12][affix - 1] + "%";
    return {
      title: "未至的花序",
      text: highlight`滑翔消耗的体力降低15%。进行瞄准射击时，每0.5秒提升重击造成的伤害${a}，该效果最多叠加6层，并将在不处于瞄准状态下10秒后移除。`,
    };
  }
  getBuffs = (affix = 1) => {
    let a = [6, 7.5, 9, 10.5, 12][affix - 1];
    return [
      {
        label: "重击造成的伤害提升",
        describe: `进行瞄准射击时，每0.5秒提升重击造成的伤害${a}%，该效果最多叠加6层`,
        effect: [{ type: BuffType.StrongPrcent, getValue: (_, s) => a * s }],
        stackable: true,
        limit: 6,
        stack: 6,
        enable: true,
      },
    ];
  }
}
/** 缀花之翎 */
export const Bow_Umpakati = new Bow_UmpakatiData();
