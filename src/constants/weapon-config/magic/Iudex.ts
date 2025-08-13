import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 万世流涌大典 */
export const Iudex = createWeapon(
  {
    name: "万世流涌大典",
    enkaId: 14514,
    rarity: Rarity.Five,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Iudex_Awaken"),
    weaponType: WeaponType.Magic,
    baseAtk: 542,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 88.2,
  },
  (affix: number) => {
    let hp = 16 + (affix - 1) * 4 + "%";
    let add = 14 + (affix - 1) * 4 + "%";
    let c = 8 + (affix - 1);
    return {
      title: "万世的浪涛",
      text: highlight`生命值提升${hp}。当前生命值提升或降低时，重击造成的伤害提升${add}。该效果持续4秒，至多叠加3次，每0.3秒至多触发一次；叠加至3层或3层的持续时间刷新时，恢复${c}点元素能量，每12秒至多通过这种方式恢复一次元素能量。`,
    };
  },
  (affix = 1) => {
    let hp = 16 + (affix - 1) * 4;
    let add = 14 + (affix - 1) * 4;
    return [
      {
        label: "生命值提升",
        describe: `生命值提升${hp}%`,
        effect: [{ type: BuffType.HPPrcent, getValue: () => hp }],
        enable: true,
      },
      {
        label: "重击造成的伤害提升",
        describe: `重击造成的伤害提升${add}%，至多叠加3层`,
        effect: [{ type: BuffType.StrongPrcent, getValue: (_, stack) => add * stack }],
        enable: false,
        stackable: true,
        stack: 3,
        limit: 3,
      },
    ];
  }
);
