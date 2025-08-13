import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 风鹰剑 */
export const Falcon = createWeapon(
  {
    name: "风鹰剑",
    enkaId: 11501,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Falcon_Awaken"),
    baseAtk: 674,
    rarity: Rarity.Five,
    appendPropId: AppendProp.PHYSICAL_ADD_HURT,
    statValue: 41.3,
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1] + "%";
    let b = [100, 115, 130, 145, 160][affix - 1] + "%";
    let c = [200, 230, 260, 290, 320][affix - 1] + "%";
    return {
      title: "西风之鹰的抗争",
      text: highlight`攻击力提高${a}；受到伤害时触发：高扬抗争旗号的西风鹰之魂苏醒，恢复等同于攻击力的${b}生命值，并对周围的敌人造成${c}攻击力的伤害。该效果每15秒只能触发一次。`,
    };
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1];
    return [
      {
        label: "攻击力提高",
        describe: `攻击力提高${a}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: true,
      },
    ];
  },
  (affix = 1) => {
    let b = [100, 115, 130, 145, 160][affix - 1] / 100;
    let c = [200, 230, 260, 290, 320][affix - 1] / 100;
    return [
      {
        label: "西风鹰之魂",
        rate: {
          atk: [c],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
      {
        label: "西风鹰之魂·回复量",
        rate: {
          atk: [b],
        },
        attackType: AttackType.Heal,
        elementType: ElementType.None,
      },
    ];
  }
);
