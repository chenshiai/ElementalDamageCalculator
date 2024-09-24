import { WeaponType, Rarity, AppendProp, BuffType } from "@/types/enum";
import { IBuffBase, IWeaponInfo } from "@/types/interface";
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
    icon: `https://enka.network/ui/UI_EquipIcon_Claymore_Deshret_Awaken.png`,
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
    getBuffs: (affix: number) => {
      return [
        {
          label: "攻击力提升·一",
          effect: [{ type: BuffType.ATKPrcent, value: 20 + (affix - 1) * 5 }],
          describe: `元素战技命中敌人后，攻击力提升${20 + (affix - 1) * 5}%`,
          enable: false,
        },
        {
          label: "攻击力提升·二",
          effect: [{ type: BuffType.ATKPrcent, value: 20 + (affix - 1) * 5 }],
          describe: `受到伤害后，攻击力提升${20 + (affix - 1) * 5}%`,
          enable: false,
        },
        {
          label: "生命值提升",
          effect: [{ type: BuffType.HPPrcent, value: 32 + (affix - 1) * 8 }],
          describe: `不处于护盾庇护下，生命值提升${32 + (affix - 1) * 8}%`,
          enable: false,
        },
      ];
    },
  },
];
