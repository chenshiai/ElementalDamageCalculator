import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_3, Constellation_Q_5, S_80_HYDRO_28P } from "../buffs";

@EnKaId(10000033, "达达利亚")
@Weapon(WeaponType.Bow)
@Element(ElementType.Hydro)
@BaseData(Rarity.Five, 13103, 301, 815, 60)
@Icons("UI_AvatarIcon_Tartaglia")
export class TartagliaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["断雨", "魔王武装·狂澜", "极恶技·尽灭闪"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.413, 0.446, 0.48, 0.528, 0.562, 0.6, 0.653, 0.706, 0.758, 0.816, 0.874],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.463, 0.5, 0.538, 0.592, 0.629, 0.673, 0.732, 0.791, 0.85, 0.915, 0.979],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.554, 0.599, 0.644, 0.708, 0.753, 0.805, 0.876, 0.947, 1.018, 1.095, 1.172],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.57, 0.617, 0.663, 0.729, 0.776, 0.829, 0.902, 0.975, 1.048, 1.127, 1.207],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.609, 0.658, 0.708, 0.779, 0.828, 0.885, 0.963, 1.041, 1.119, 1.204, 1.289],
    }),
    action("六段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.728, 0.787, 0.846, 0.931, 0.99, 1.058, 1.151, 1.244, 1.337, 1.438, 1.54],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Hydro, {
      atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
    }),
    action("断流·闪 伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.124, 0.133, 0.143, 0.155, 0.164, 0.174, 0.186, 0.198, 0.211, 0.223, 0.236],
    }),
    action("断流·破 伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.62, 0.667, 0.713, 0.775, 0.822, 0.868, 0.93, 0.992, 1.054, 1.116, 1.178],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
    }),
  ];
  elementSkill = [
    action("状态激发伤害", AttackType.Skill, ElementType.Hydro, {
      atk: [0.72, 0.77, 0.83, 0.9, 0.95, 1.01, 1.08, 1.15, 1.22, 1.3, 1.37, 1.44, 1.53],
    }),
    action("一段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.389, 0.42, 0.452, 0.497, 0.529, 0.565, 0.615, 0.664, 0.714, 0.768, 0.823, 0.877, 0.931],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.416, 0.45, 0.484, 0.532, 0.566, 0.605, 0.658, 0.711, 0.765, 0.823, 0.881, 0.939, 0.997],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.563, 0.609, 0.655, 0.721, 0.766, 0.819, 0.891, 0.963, 1.035, 1.114, 1.192, 1.271, 1.349],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.599, 0.648, 0.697, 0.767, 0.815, 0.871, 0.948, 1.025, 1.101, 1.185, 1.269, 1.352, 1.436],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.553, 0.598, 0.643, 0.707, 0.752, 0.804, 0.874, 0.945, 1.016, 1.093, 1.17, 1.247, 1.325],
    }),
    action("六段伤害·1", AttackType.Normal, ElementType.Hydro, {
      atk: [0.354, 0.383, 0.412, 0.453, 0.482, 0.515, 0.56, 0.606, 0.651, 0.7, 0.75, 0.799, 0.849],
    }),
    action("六段伤害·2", AttackType.Normal, ElementType.Hydro, {
      atk: [0.377, 0.407, 0.438, 0.482, 0.512, 0.548, 0.596, 0.644, 0.692, 0.745, 0.797, 0.85, 0.902],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Hydro, {
      atk: [0.602, 0.651, 0.7, 0.77, 0.819, 0.875, 0.952, 1.029, 1.106, 1.19, 1.274, 1.358, 1.442],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Hydro, {
      atk: [0.72, 0.778, 0.837, 0.921, 0.979, 1.046, 1.138, 1.23, 1.322, 1.423, 1.523, 1.624, 1.724],
    }),
    action("断流·斩 伤害", AttackType.Skill, ElementType.Hydro, {
      atk: [0.6, 0.65, 0.7, 0.77, 0.82, 0.88, 0.95, 1.03, 1.11, 1.19, 1.27, 1.36, 1.44],
    }),
  ];
  burstSkill = [
    action("技能伤害·近战", AttackType.Burst, ElementType.Hydro, {
      atk: [4.64, 4.99, 5.34, 5.8, 6.15, 6.5, 6.96, 7.42, 7.89, 8.35, 8.82, 9.28, 9.86, 10.44],
    }),
    action("技能伤害·远程", AttackType.Burst, ElementType.Hydro, {
      atk: [3.78, 4.07, 4.35, 4.73, 5.01, 5.3, 5.68, 6.05, 6.43, 6.81, 7.19, 7.57, 8.04, 8.51],
    }),
    action("断流·爆伤害", AttackType.Burst, ElementType.Hydro, {
      atk: [1.2, 1.29, 1.38, 1.5, 1.59, 1.68, 1.8, 1.92, 2.04, 2.16, 2.28, 2.4, 2.55, 2.7],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_HYDRO_28P,
    {
      label: "诸武精通",
      describe: "队伍中自己的角色普通攻击等级提高1级",
      effect: [{ type: BuffType.NormalLevel, getValue: () => 1, actionOn: ActionOn.Front }],
      enable: true,
      shareable: true,
    },
    Constellation_E_3,
    Constellation_Q_5,
  ];
}

/** ![达达利亚](https://enka.network/ui/UI_AvatarIcon_Tartaglia.png) */
export const Tartaglia = new TartagliaData();
