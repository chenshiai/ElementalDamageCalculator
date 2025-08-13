import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 飞雷之弦振 */
export const Bow_Narukami = createWeapon(
  {
    name: "飞雷之弦振",
    enkaId: 15509,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Narukami_Awaken"),
    baseAtk: 608,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 66.2,
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1] + "%";
    let b =
      [
        [12, 24, 40],
        [15, 30, 50],
        [18, 36, 60],
        [21, 42, 70],
        [24, 48, 80],
      ][affix - 1].join("/") + "%";
    return {
      title: "飞雷御执",
      text: highlight`攻击力提高${a}，并能获得「飞雷之巴印」的威势。
        飞雷之巴印：持有1/2/3层飞雷之巴印时，普通攻击造成的伤害提高${b}。
        在下列情况下，角色将各获得1层飞雷之巴印：
          普通攻击造成伤害时，持续5秒；
          施放元素战技时，持续10秒；
          此外，角色元素能量低于100%时，将获得1层飞雷之巴印，此飞雷之巴印会在角色的元素能量充满时消失。
        每层飞雷之巴印的持续时间独立计算。`,
    };
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1];
    let b = [
      [12, 24, 40],
      [15, 30, 50],
      [18, 36, 60],
      [21, 42, 70],
      [24, 48, 80],
    ][affix - 1];
    return [
      {
        label: "攻击力提升",
        describe: `攻击力提高${a}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: true,
      },
      {
        label: "普通攻击造成的伤害提升",
        describe: `持有1/2/3层飞雷之巴印时，普通攻击造成的伤害提高${b.join("/")}%`,
        effect: [
          {
            type: BuffType.NormalPrcent,
            getValue: (_, stack) => {
              return b[stack - 1] || 0;
            },
          },
        ],
        enable: false,
        stackable: true,
        stackText: "飞雷之巴印",
        stack: 3,
        limit: 3,
      },
    ];
  }
);
