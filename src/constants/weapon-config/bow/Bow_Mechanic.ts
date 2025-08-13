import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 测距规 */
export const Bow_Mechanic = createWeapon(
  {
    name: "测距规",
    enkaId: 15427,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Mechanic_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 27.6,
  },
  (affix = 1) => {
    let atk = [3, 4, 5, 6, 7][affix - 1] + "%";
    let add = [7, 8.5, 10, 11.5, 13][affix - 1] + "%";
    return {
      title: "石匠号子",
      text: highlight`受到治疗或进行治疗时，将赋予一枚团结标记，持续30秒，至多拥有三枚团结标记。施放元素战技或元素爆发时，将消耗所有的团结标记，产生持续10秒的「抗争」效果：每枚消耗的团结标记提高${atk}攻击力与${add}所有元素伤害加成。每15秒至多触发一次抗争效果；角色处于队伍后台时也能获得团结标记。`,
    };
  },
  (affix = 1) => {
    let atk = [3, 4, 5, 6, 7][affix - 1];
    let add = [7, 8.5, 10, 11.5, 13][affix - 1];
    return [
      {
        label: "石匠号子",
        describe: `提高${atk}%攻击力与${add}%所有元素伤害加成，至多叠加3层`,
        effect: [
          { type: BuffType.ATKPrcent, getValue: (_, stack) => atk * stack },
          { type: BuffType.PyroPrcent, getValue: (_, stack) => add * stack },
          { type: BuffType.HydroPrcent, getValue: (_, stack) => add * stack },
          { type: BuffType.ElectroPrcent, getValue: (_, stack) => add * stack },
          { type: BuffType.AnemoPrcent, getValue: (_, stack) => add * stack },
          { type: BuffType.DendroPrcent, getValue: (_, stack) => add * stack },
          { type: BuffType.CryoPrcent, getValue: (_, stack) => add * stack },
          { type: BuffType.GeoPrcent, getValue: (_, stack) => add * stack },
        ],
        stackable: true,
        stackText: "团结标记",
        limit: 3,
        stack: 3,
        enable: false,
      },
    ];
  }
);
