import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 黑剑 */
export const Bloodstained = createWeapon(
  {
    name: "黑剑",
    enkaId: 11409,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Bloodstained_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CRITICAL,
    statValue: 27.6,
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1] + "%";
    let b = [60, 70, 80, 90, 100][affix - 1] + "%";
    return {
      title: "正义",
      text: highlight`普通攻击与重击的造成的伤害提升${a}；此外，普通攻击与重击暴击时，回复等同于攻击力${b}的生命值。该效果每5秒至多发动一次。`,
    };
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1];
    return [
      {
        label: "普通攻击与重击的造成的伤害提升",
        describe: `普通攻击与重击的造成的伤害提升${a}%`,
        effect: [
          { type: BuffType.NormalPrcent, getValue: () => a },
          { type: BuffType.StrongPrcent, getValue: () => a },
        ],
        enable: true,
      },
    ];
  },
  (affix = 1) => {
    let a = [60, 70, 80, 90, 100][affix - 1] / 100;
    return [
      {
        label: "黑剑·回复量",
        rate: {
          atk: [a],
        },
        attackType: AttackType.Heal,
        elementType: ElementType.None,
      },
    ];
  }
);
