import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 纯水流华 */
export const Catalyst_Vorpal = createWeapon(
  {
    name: "纯水流华",
    enkaId: 14425,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Vorpal_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 27.6,
  },
  (affix = 1) => {
    let add = 8 + (affix - 1) * 2 + "%";
    let hp = 2 + (affix - 1) * 0.5 + "%";
    let add2 = 12 + (affix - 1) * 3 + "%";
    return {
      title: "未完的杰作",
      text: highlight`施放元素战技时，所有元素伤害加成提升${add}，持续15秒，并赋予生命值上限24%的生命之契，该效果每10秒至多触发一次。生命之契清除时，每清除1000点将会提供${hp}所有元素伤害加成，至多通过这种方式获得${add2}所有元素伤害加成，持续15秒。`,
    };
  },
  (affix = 1) => {
    let add = 8 + (affix - 1) * 2;
    let hp = 2 + (affix - 1) * 0.5;
    let add2 = 12 + (affix - 1) * 3;
    const getValue = (data, stack) => {
      // 虽然游戏里不存这种场景，但感觉生命之契应该能吃二次转化
      let allhp = data.baseHP + data.extraHP + data.extraHP_NT;
      return Math.min((allhp * stack * hp) / 10000, add2);
    };
    return [
      {
        label: "元素伤害加成提升",
        describe: `所有元素伤害加成提升${add}%`,
        effect: [
          { type: BuffType.PyroPrcent, getValue: () => add },
          { type: BuffType.HydroPrcent, getValue: () => add },
          { type: BuffType.AnemoPrcent, getValue: () => add },
          { type: BuffType.ElectroPrcent, getValue: () => add },
          { type: BuffType.GeoPrcent, getValue: () => add },
          { type: BuffType.CryoPrcent, getValue: () => add },
          { type: BuffType.DendroPrcent, getValue: () => add },
        ],
        enable: false,
      },
      {
        label: "消除生命之契获得元素伤害加成提升",
        describe: `每清除1000点将会提供${hp}%所有元素伤害加成，至多获得${add2}%所有元素伤害加成`,
        effect: [
          { type: BuffType.PyroPrcent, getValue },
          { type: BuffType.HydroPrcent, getValue },
          { type: BuffType.AnemoPrcent, getValue },
          { type: BuffType.ElectroPrcent, getValue },
          { type: BuffType.GeoPrcent, getValue },
          { type: BuffType.CryoPrcent, getValue },
          { type: BuffType.DendroPrcent, getValue },
        ],
        stackable: true,
        stack: 24,
        limit: 200,
        stackText: "生命之契",
        enable: false,
      },
    ];
  }
);
