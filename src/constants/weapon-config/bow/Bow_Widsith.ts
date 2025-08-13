import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 终末嗟叹之诗 */
export const Bow_Widsith = createWeapon(
  {
    name: "终末嗟叹之诗",
    enkaId: 15503,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Widsith_Awaken"),
    baseAtk: 608,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 55.1,
  },
  (affix = 1) => {
    let a = [60, 75, 90, 105, 120][affix - 1];
    let x = [100, 125, 150, 175, 200][affix - 1];
    let c = [20, 25, 30, 35, 40][affix - 1] + "%";
    return {
      title: "别离的思念之歌",
      text: highlight`飘游风中的「千年的大乐章」的一部分。元素精通提高${a}点；
        元素战技或元素爆发命中敌人时，角色获得一枚追思之符，每0.2秒内至多触发一次，角色处于队伍后台也能触发。
        拥有4枚追思之符时，将消耗所有追思之符，使附近的队伍中所有角色获得持续12秒的「千年的大乐章·别离之歌」效果：元素精通提高${x}点，攻击力提升${c}。触发后20秒内，无法再次获得追思之符。
        「千年的大乐章」触发的多种数值效果中，同类数值效果不可叠加。`,
    };
  },
  (affix = 1) => {
    let a = [60, 75, 90, 105, 120][affix - 1];
    let x = [100, 125, 150, 175, 200][affix - 1];
    let c = [20, 25, 30, 35, 40][affix - 1];
    return [
      {
        label: "元素精通提升",
        describe: `元素精通提高${a}点`,
        effect: [{ type: BuffType.MysteryFixed, getValue: () => a }],
        enable: true,
      },
      {
        label: "别离之歌·精通",
        describe: `全队元素精通提高${x}点`,
        effect: [{ type: BuffType.MysteryFixed, getValue: () => x }],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "别离之歌·攻击力",
        describe: `全队攻击力提升${c}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => c }],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
    ];
  }
);
