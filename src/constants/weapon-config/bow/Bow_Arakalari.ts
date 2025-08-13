import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 王下近侍 */
export const Bow_Arakalari = createWeapon(
  {
    name: "王下近侍",
    enkaId: 15417,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Arakalari_Awaken"),
    baseAtk: 454,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 55.1,
  },
  (affix = 1) => {
    let a = 100 + (affix - 1) * 20 + "%";
    let e = 60 + (affix - 1) * 20;
    return {
      title: "迷宫之王的教导",
      text: highlight`施放元素战技或元素爆发时，将获得「森林教诲」的效果，元素精通提升${e}点，持续12秒。该效果将在切换角色时移除。森林教诲的持续时间结束或被移除时，将对附近一名敌人造成${a}攻击力的伤害。森林教诲每20秒至多触发一次。`,
    };
  },
  (affix = 1) => {
    let e = 60 + (affix - 1) * 20;
    return [
      {
        label: "森林教诲",
        describe: `施放元素战技或元素爆发时，元素精通提升${e}点`,
        effect: [{ type: BuffType.MysteryFixed, getValue: () => e }],
        enable: false,
      },
    ];
  },
  (affix = 1) => {
    let a = (100 + (affix - 1) * 20) / 100;
    return [
      {
        label: "王下近侍·森林教诲",
        rate: {
          atk: [a],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
    ];
  }
);
