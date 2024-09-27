import { WeaponType, Rarity, AppendProp, BuffType, AttackType, ElementType } from "@/types/enum";
import { IBuffBase, IWeaponInfo } from "@/types/interface";
import { getEnkaUI } from "./append-prop";
function highlight(strings, ...values) {
  let result = "";
  strings.forEach((string, index) => {
    result += string;
    if (index < values.length) {
      result += `<span class="highlight">${values[index]}</span>`;
    }
  });
  return result;
}

export const Weapons: IWeaponInfo[] = [
  {
    name: "苇海信标",
    enkaId: 12511,
    weaponType: WeaponType.GreatSword,
    level: 90,
    // 稀有度
    rarity: Rarity.Five,
    // 精炼等级 1~5 此处仅声明，不参与实际计算
    affix: 1,
    icon: getEnkaUI("UI_EquipIcon_Claymore_Deshret_Awaken"),
    weaponStats: [
      {
        appendPropId: AppendProp.BASE_ATTACK,
        statValue: 608,
      },
      {
        appendPropId: AppendProp.CRITICAL,
        statValue: 33.1,
      },
    ],
    getSkillDescribe: (affix: number) => {
      const atk = 20 + (affix - 1) * 5 + "%";
      const hp = 32 + (affix - 1) * 8 + "%";
      return {
        title: "沙海守望",
        text: highlight`元素战技命中敌人后，攻击力提升${atk}，持续8秒；受到伤害后，攻击力提升${atk}，持续8秒。上述2种效果角色处于后台时也能触发。此外，不处在护盾庇护下时，生命值上限提高${hp}。`,
      };
    },
    getBuffs: (affix = 1) => {
      return [
        {
          label: "攻击力提升·一",
          effect: [{ type: BuffType.ATKPrcent, getValue: () => 20 + (affix - 1) * 5 }],
          describe: `元素战技命中敌人后，攻击力提升${20 + (affix - 1) * 5}%`,
          enable: false,
        },
        {
          label: "攻击力提升·二",
          effect: [{ type: BuffType.ATKPrcent, getValue: () => 20 + (affix - 1) * 5 }],
          describe: `受到伤害后，攻击力提升${20 + (affix - 1) * 5}%`,
          enable: false,
        },
        {
          label: "生命值提升",
          effect: [{ type: BuffType.HPPrcent, getValue: () => 32 + (affix - 1) * 8 }],
          describe: `不处于护盾庇护下，生命值提升${32 + (affix - 1) * 8}%`,
          enable: false,
        },
      ];
    },
  },
  {
    name: "天空之脊",
    enkaId: 13502,
    weaponType: WeaponType.Polearms,
    level: 90,
    rarity: Rarity.Five,
    affix: 1,
    icon: getEnkaUI("UI_EquipIcon_Pole_Dvalin_Awaken"),
    weaponStats: [
      {
        appendPropId: AppendProp.BASE_ATTACK,
        statValue: 674,
      },
      {
        appendPropId: AppendProp.CHARGE_EFFICIENCY,
        statValue: 36.8,
      }
    ],
    getSkillDescribe(affix: number) {
      const cri = 8 + (affix - 1) * 2 + "%";
      const rate = 40 + (affix - 1) * 15 + "%";
      return {
        title: "斫断黑翼的利齿",
        text: highlight`暴击率提升${cri}，普通攻击速度提升12%。此外，普通攻击与重击命中敌人时，有50%概率触发真空刃，在小范围内造成额外${rate}攻击力的伤害。该效果每2秒至多触发一次。`
      }
    },
    getBuffs(affix = 1) {
      return [
        {
          label: "暴击率提升",
          describe: `暴击率提升${8 + 2 * (affix - 1)}%`,
          effect: [{ type: BuffType.Critcal, getValue: () => 8 + 2 * (affix - 1)}],
          enable: true
        }
      ]
    },
    getSkill(affix = 1) {
      const rate = 40 + (affix - 1) * 15;

      return [
        {
          label: "天空之脊·真空刃",
          rate: {
            atk: [rate]
          },
          attackType: AttackType.Other,
          elementType: ElementType.Physical,
        }
      ]
    }
  }
];
