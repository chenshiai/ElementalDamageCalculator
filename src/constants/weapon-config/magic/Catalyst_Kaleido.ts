import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { ActionOn, AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 不灭月华 */
export const Catalyst_Kaleido = createWeapon(
  {
    name: "不灭月华",
    enkaId: 14506,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Kaleido_Awaken"),
    baseAtk: 608,
    rarity: Rarity.Five,
    appendPropId: AppendProp.HP_PERCENT,
    statValue: 49.6,
  },
  (affix = 1) => {
    let a = [10, 12.5, 15, 17.5, 20][affix - 1] + "%";
    let b = [1, 1.5, 2, 2.5, 3][affix - 1] + "%";
    return {
      title: "白夜皓月",
      text: highlight`治疗加成提升${a}；普通攻击造成的伤害增加，增加值为装备该武器的角色生命值上限的${b}。在施放元素爆发后的12秒内，普通攻击命中敌人时恢复0.6点元素能量，每0.1秒至多通过这种方式恢复一次元素能量。`,
    };
  },
  (affix = 1) => {
    let a = [10, 12.5, 15, 17.5, 20][affix - 1];
    let b = [1, 1.5, 2, 2.5, 3][affix - 1];
    return [
      {
        label: "治疗加成提升",
        describe: `治疗加成提升${a}`,
        effect: [{ type: BuffType.HealAdd, getValue: () => a }],
        enable: true,
      },
      {
        label: "普通攻击造成的伤害增加",
        describe: `增加值为装备该武器的角色生命值上限的${b}%`,
        effect: [
          {
            type: BuffType.NormalFixed,
            getValue: (data) => {
              return ((data.baseHP + data.extraHP + data.extraHP_NT) * b) / 100;
            },
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: true,
      },
    ];
  }
);
