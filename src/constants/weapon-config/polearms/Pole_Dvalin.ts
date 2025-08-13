import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 天空之脊 */
export const Pole_Dvalin = createWeapon(
  {
    name: "天空之脊",
    enkaId: 13502,
    rarity: Rarity.Five,
    icon: getEnkaUI("UI_EquipIcon_Pole_Dvalin_Awaken"),
    weaponType: WeaponType.Polearms,
    baseAtk: 674,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 36.8,
  },
  (affix: number) => {
    const cri = 8 + (affix - 1) * 2 + "%";
    const rate = 40 + (affix - 1) * 15 + "%";
    return {
      title: "斫断黑翼的利齿",
      text: highlight`暴击率提升${cri}，普通攻击速度提升12%。此外，普通攻击与重击命中敌人时，有50%概率触发真空刃，在小范围内造成额外${rate}攻击力的伤害。该效果每2秒至多触发一次。`,
    };
  },
  (affix = 1) => {
    return [
      {
        label: "暴击率提升",
        describe: `暴击率提升${8 + 2 * (affix - 1)}%`,
        effect: [{ type: BuffType.Critcal, getValue: () => 8 + 2 * (affix - 1) }],
        enable: true,
      },
    ];
  },
  (affix = 1) => {
    const rate = 0.4 + (affix - 1) * 0.15;
    return [
      {
        label: "天空之脊·真空刃",
        rate: {
          atk: [rate],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
    ];
  }
);
