import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 松籁响起之时 */
export const Claymore_Widsith = createWeapon(
  {
    name: "松籁响起之时",
    enkaId: 12503,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_Widsith_Awaken"),
    baseAtk: 741,
    rarity: Rarity.Five,
    appendPropId: AppendProp.PHYSICAL_ADD_HURT,
    statValue: 20.7,
  },
  (affix = 1) => {
    let a = [16, 20, 24, 28, 32][affix - 1] + "%";
    let sp = [12, 15, 18, 21, 24][affix - 1] + "%";
    let x = [20, 25, 30, 35, 40][affix - 1] + "%";
    return {
      title: "揭旗的叛逆之歌",
      text: highlight` 飘游风中的「千年的大乐章」的一部分。攻击力提高${a}；普通攻击或重击命中敌人时，角色获得一枚低语之符，每0.3秒内至多触发一次。拥有4枚低语之符时，将消耗所有低语之符，使附近的队伍中所有角色获得持续12秒的「千年的大乐章·揭旗之歌」效果：普通攻击速度提高${sp}，攻击力提升${x}。触发后20秒内，无法再次获得低语之符。「千年的大乐章」触发的多种数值效果中，同类数值效果不可叠加。`,
    };
  },
  (affix = 1) => {
    let a = [16, 20, 24, 28, 32][affix - 1];
    let x = [20, 25, 30, 35, 40][affix - 1];
    return [
      {
        label: "攻击力提高",
        describe: `攻击力提高${a}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: true,
      },
      {
        label: "揭旗之歌",
        describe: `全队攻击力提升${x}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => x }],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
    ];
  }
);
