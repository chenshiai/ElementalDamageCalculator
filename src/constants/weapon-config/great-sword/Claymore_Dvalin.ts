import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 天空之傲 */
export const Claymore_Dvalin = createWeapon(
  {
    name: "天空之傲",
    enkaId: 12501,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_Dvalin_Awaken"),
    baseAtk: 674,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 36.8,
  },
  (affix = 1) => {
    let a = [8, 10, 12, 14, 16][affix - 1] + "%";
    let b = [80, 100, 120, 140, 160][affix - 1] + "%";
    return {
      title: "斩裂晴空的龙脊",
      text: highlight`造成的伤害提高${a}；施放元素爆发后：普通攻击和重击命中时会发出真空刃，对路径上的敌人造成${b}攻击力的伤害，持续20秒或直至发出8次真空刃。`,
    };
  },
  (affix = 1) => {
    let a = [8, 10, 12, 14, 16][affix - 1];
    return [
      {
        label: "造成的伤害提高",
        describe: `造成的伤害提高${a}%`,
        effect: [{ type: BuffType.GlobalPrcent, getValue: () => a }],
        enable: true,
      },
    ];
  },
  (affix = 1) => {
    let b = [80, 100, 120, 140, 160][affix - 1] / 100;
    return [
      {
        label: "天空之傲·真空刃",
        rate: {
          atk: [b],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
    ];
  }
);
