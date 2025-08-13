import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 船坞长剑 */
export const Sword_Mechanic = createWeapon(
  {
    name: "船坞长剑",
    enkaId: 11427,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Mechanic_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.HP_PERCENT,
    statValue: 41.3,
  },
  (affix = 1) => {
    let em = [40, 50, 60, 70, 80][affix - 1];
    let c = [2, 2.5, 3, 3.5, 4][affix - 1];
    return {
      title: "船工号子",
      text: highlight`受到治疗或进行治疗时，将赋予一枚坚忍标记，持续30秒，至多拥有三枚坚忍标记。施放元素战技或元素爆发时，将消耗所有的坚忍标记，产生持续10秒的「奋起」效果：每枚消耗的坚忍标记提高${em}点元素精通，并在效果产生2秒后，每枚消耗的坚忍标记为装备者恢复${c}点元素能量。每15秒至多触发一次奋起效果；角色处于队伍后台时也能获得坚忍标记。`,
    };
  },
  (affix = 1) => {
    let em = [40, 50, 60, 70, 80][affix - 1];
    return [
      {
        label: "元素精通提升",
        describe: `每枚消耗的坚忍标记提高${em}点元素精通，至多叠加3层`,
        effect: [{ type: BuffType.MysteryFixed, getValue: (_, s) => em * s }],
        stackText: "坚忍标记",
        stackable: true,
        limit: 3,
        stack: 3,
        enable: false,
      },
    ];
  }
);
