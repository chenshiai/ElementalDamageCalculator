import { IWeaponInfo } from "@/types/interface";
import Weapon from "../weapon-class";
import { EnKaId, WeaponData, WeaponIcon, highlight } from "@/utils/decorator";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";

@EnKaId(14517, "祭星者之望")
@WeaponIcon("UI_EquipIcon_Catalyst_Figurines_Awaken")
@WeaponData(WeaponType.Magic, Rarity.Five, 542, AppendProp.ELEMENT_MASTERY, 265)
class FigurinesData extends Weapon implements IWeaponInfo {
  constructor() {
    super();
  }
  getSkillDescribe = (affix = 1) => {
    let a = [100, 125, 150, 175, 200][affix - 1];
    let b = [28, 35, 42, 49, 56][affix - 1] + "%";
    return {
      title: "奉予风阳的禋祀",
      text: highlight`元素精通提升${a}点。装备者创造护盾后的15秒内，获得「照夜之镜」效果：队伍中自己的当前场上角色对附近的敌人造成的伤害提升${b}，每14秒至多获得一次「照夜之镜」效果。`,
    };
  };
  getBuffs = (affix = 1) => {
    let a = [100, 125, 150, 175, 200][affix - 1];
    let b = [28, 35, 42, 49, 56][affix - 1];
    return [
      {
        label: "「照夜之镜」",
        describe: `装备者创造护盾后，获得「照夜之镜」效果：队伍中自己的当前场上角色对附近的敌人造成的伤害提升${b}%`,
        effect: [{ type: BuffType.GlobalPrcent, getValue: () => b }],
        enable: true,
        shareable: true,
      },
      {
        label: "元素精通提升",
        describe: `元素精通提升${a}点`,
        effect: [{ type: BuffType.MysteryFixed, getValue: () => a }],
        enable: true,
      },
    ];
  };
}
/** 祭星者之望 */
export const Figurines = new FigurinesData();
