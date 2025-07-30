import { IWeaponInfo } from "@/types/interface";
import Weapon from "../weapon-class";
import { EnKaId, WeaponData, WeaponIcon, highlight } from "@/utils/decorator";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";

@EnKaId(14519, "溢彩心念")
@WeaponIcon("UI_EquipIcon_Catalyst_VaresaTransformer_Awaken")
@WeaponData(WeaponType.Magic, Rarity.Five, 674, AppendProp.CRITICAL_HURT, 44.1)
class VaresaTransformerData extends Weapon implements IWeaponInfo {
  constructor() {
    super();
  }
  getSkillDescribe(affix = 1) {
    let a = [28, 35, 42, 49, 56][affix - 1] + "%";
    let b = [40, 50, 60, 70, 80][affix - 1] + "%";
    return {
      title: "落虹之愿",
      text: highlight`攻击力提升${a}；进行下落攻击时，获得「初霞之彩」效果：下落攻击造成的暴击伤害提升${a}；施放元素战技或元素爆发时，获得「苍暮之辉」效果：下落攻击造成的暴击伤害提升${b}；上述两种效果各自持续15秒，并将在坠地冲击命中后的0.1秒后解除。`,
    };
  }
  getBuffs(affix = 1) {
    let a = [28, 35, 42, 49, 56][affix - 1];
    let b = [40, 50, 60, 70, 80][affix - 1];
    return [
      {
        label: "攻击力提升",
        describe: `攻击力提升${a}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: true,
      },
      {
        label: "下落攻击暴击伤害提升",
        describe: `进行下落攻击时，下落攻击造成的暴击伤害提升${a}%`,
        effect: [{ type: BuffType.FallingCritcalHurt, getValue: () => a }],
        enable: true,
      },
      {
        label: "下落攻击暴击伤害提升",
        describe: `施放元素战技或元素爆发后，下落攻击造成的暴击伤害提升${b}%`,
        effect: [{ type: BuffType.FallingCritcalHurt, getValue: () => b }],
        enable: true,
      },
    ];
  }
}
/** 溢彩心念 */
export const VaresaTransformer = new VaresaTransformerData();
