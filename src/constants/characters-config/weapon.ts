import { WeaponType, Rarity, AppendProp, BuffType, AttackType, ElementType, ActionOn } from "@/types/enum";
import { IBuffBase, ICalculatorValue, IWeaponInfo } from "@/types/interface";
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

interface WeaponStats {
  baseAtk: number;
  appendPropId: AppendProp;
  statValue: number;
}
type WeaponConfig = Pick<IWeaponInfo, "name" | "enkaId" | "weaponType" | "icon" | "rarity"> & WeaponStats;

function createWeapon(
  { name, enkaId, weaponType, rarity, icon, baseAtk, appendPropId, statValue }: WeaponConfig,
  getSkillDescribe: IWeaponInfo["getSkillDescribe"],
  getBuffs?: IWeaponInfo["getBuffs"],
  getSkill?: IWeaponInfo["getSkill"]
): IWeaponInfo {
  return {
    name,
    enkaId,
    weaponType,
    level: 90,
    rarity,
    affix: 1,
    icon,
    weaponStats: [
      {
        appendPropId: AppendProp.BASE_ATTACK,
        statValue: baseAtk,
      },
      {
        appendPropId,
        statValue,
      },
    ],
    getSkillDescribe,
    getBuffs,
    getSkill,
  };
}

createWeapon(
  {
    name: "",
    enkaId: 12513,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI(""),
    baseAtk: 741,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL,
    statValue: 11,
  },
  (affix = 1) => {
    return {
      title: "",
      text: highlight``,
    };
  },
  (affix = 1) => {
    return [
      {
        label: "",
        describe: ``,
        effect: [{ type: BuffType.SkillPrcent, getValue: () => 0 }],
        stackable: true,
        limit: 6,
        stack: 6,
        enable: false,
      },
    ];
  },
  (affix = 1) => {
    return [
      {
        label: "",
        rate: {
          atk: [],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
    ];
  }
);

export const Weapons: IWeaponInfo[] = [
  createWeapon(
    {
      name: "山王长牙",
      enkaId: 12513,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_EmeraldSword_Awaken"),
      baseAtk: 741,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL,
      statValue: 11,
    },
    (affix = 1) => {
      const add = 10 + (affix - 1) * 2.5 + "%";
      return {
        title: "绿松石之狩",
        text: highlight`元素战技命中敌人后，会获得1层「悬木祝赐」，该效果每0.5秒至多触发1次；队伍中附近的角色触发了燃烧或烈绽放反应后，装备者会获得3层悬木祝赐，该效果每2秒至多触发1次，队伍中的角色处于队伍后台时也能触发。悬木祝赐：元素战技伤害和元素爆发伤害提升${add}，持续6秒，至多叠加六层，每层持续时间独立计算。`,
      };
    },
    (affix = 1) => {
      const add = 10 + (affix - 1) * 2.5;
      return [
        {
          label: "绿松石之狩",
          describe: `元素战技伤害和元素爆发伤害提升${add}%，至多叠加六层`,
          effect: [
            { type: BuffType.SkillPrcent, getValue: (_, stack) => add * stack },
            { type: BuffType.BurstPrcent, getValue: (_, stack) => add * stack },
          ],
          stackable: true,
          limit: 6,
          stack: 6,
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "薙草之稻光",
      weaponType: WeaponType.Polearms,
      rarity: Rarity.Five,
      enkaId: 13509,
      icon: getEnkaUI("UI_EquipIcon_Pole_Narukami_Awaken"),
      baseAtk: 608,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 55.1,
    },
    (affix = 1) => {
      const limit = 80 + (affix - 1) * 10 + "%";
      const atk = 28 + (affix - 1) * 7 + "%";
      const car = 30 + (affix - 1) * 5 + "%";
      return {
        title: "非时之梦·常世灶食",
        text: highlight`攻击力获得提升，提升程度相当于元素充能效率超出100%部分的${atk}，至多通过这种方式提升${limit}。施放元素爆发后的12秒内，元素充能效率提升${car}。`,
      };
    },
    (affix = 1) => {
      const limit = 80 + (affix - 1) * 10 + "%";
      const atk = 28 + (affix - 1) * 7 + "%";
      return [
        {
          label: "攻击力提升",
          effect: [
            {
              type: BuffType.ATKPrcent,
              getValue: ({ chargeEfficiency }) => {
                const ec = (Math.max(0, chargeEfficiency - 100) * (28 + (affix - 1) * 7)) / 100;
                const limit = 80 + (affix - 1) * 10;
                const res = Math.min(limit, ec);
                return res;
              },
              actionOn: ActionOn.Indirect,
            },
          ],
          describe: `攻击力获得提升，提升程度相当于元素充能效率超出100%部分的${atk}，至多通过这种方式提升${limit}。`,
          enable: false,
        },
        {
          label: "元素充能效率提升",
          effect: [{ type: BuffType.ChargeFixed, getValue: () => 30 + (affix - 1) * 5 }],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "冲浪时光",
      enkaId: 14516,
      weaponType: WeaponType.Magic,
      rarity: Rarity.Five,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_MechaPufferfish_Awaken"),
      baseAtk: 542,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 88.2,
    },
    (affix = 1) => {
      const hp = 20 + (affix - 1) * 5 + "%";
      const add = 12 + (affix - 1) * 3 + "%";
      return {
        title: "水色回忆",
        text: highlight`生命值上限提高${hp}。每15秒一次，施放元素战技后的14秒内，产生如下效果：获得4层「炽夏」，每层使普通攻击造成的伤害提升${add}。持续期间内，每1.5秒一次：普通攻击命中敌人后，移除1层；每1.5秒一次：对敌人触发蒸发反应后，增加1层。「炽夏」效果至多叠加4层。`,
      };
    },
    (affix = 1) => {
      const hp = 20 + (affix - 1) * 5;
      const add = 12 + (affix - 1) * 3;
      return [
        {
          label: "生命值上限提高",
          describe: `生命值上限提高${hp}%`,
          effect: [{ type: BuffType.HPPrcent, getValue: () => hp }],
          enable: true,
        },
        {
          label: "普通攻击伤害提升",
          describe: `每层普通攻击伤害提升${add}%， 至多叠加四层`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => add * stack }],
          stackable: true,
          limit: 4,
          stack: 4,
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "苍古自由之誓",
      enkaId: 11503,
      weaponType: WeaponType.Sword,
      rarity: Rarity.Five,
      icon: getEnkaUI("UI_EquipIcon_Sword_Widsith_Awaken"),
      baseAtk: 608,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 198,
    },
    (affix = 1) => {
      const add = 10 + (affix - 1) * 2.5 + "%";
      const num = 16 + (affix - 1) * 4 + "%";
      const atk = 20 + (affix - 1) * 5 + "%";
      return {
        title: "抗争的践行之歌",
        text: highlight`飘游风中的「千年的大乐章」的一部分。造成的伤害提高${add}。触发元素反应时，角色获得一枚奋起之符，每0.5秒内至多触发一次，角色处于队伍后台也能触发。拥有2枚奋起之符时，将消耗所有奋起之符，使附近的队伍中所有角色获得持续12秒的「千年的大乐章·抗争之歌」效果：普通攻击、重击、下落攻击造成的伤害提高${num}，攻击力提升${atk}。触发后20秒内，无法再次获得奋起之符。「千年的大乐章」触发的多种数值效果中，同类数值效果不可叠加。`,
      };
    },
    (affix = 1) => {
      const add = 10 + (affix - 1) * 2.5;
      const num = 16 + (affix - 1) * 4;
      const atk = 20 + (affix - 1) * 5;
      return [
        {
          label: "伤害提升",
          describe: `造成的伤害提高${add}%`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => add }],
          enable: true,
        },
        {
          label: "攻击力提升",
          describe: `攻击力提升${atk}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
          enable: false,
        },
        {
          label: "普通攻击、重击、下落攻击伤害提升",
          describe: `普通攻击、重击、下落攻击伤害提升${num}%`,
          effect: [
            { type: BuffType.NormalPrcent, getValue: () => num },
            { type: BuffType.StrongPrcent, getValue: () => num },
            { type: BuffType.FallingPrcent, getValue: () => num },
          ],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "苍纹角杯",
      enkaId: 14427,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_ConchSprayer_Awaken"),
      rarity: Rarity.Four,
      baseAtk: 510,
      appendPropId: AppendProp.HP_PERCENT,
      statValue: 41.3,
      weaponType: WeaponType.Magic,
    },
    (affix = 1) => {
      const atk = 40 + (affix - 1) * 10 + "%";
      return {
        title: "图帕克之握",
        text: highlight`攻击命中敌人时，在目标位置基于生命值上限的${atk}，造成范围伤害。该效果每15秒至多触发一次。`,
      };
    },
    () => [],
    (affix = 1) => {
      const hp = (40 + (affix - 1) * 10) / 100;
      return [
        {
          label: "图帕克之握",
          rate: {
            hp: [hp],
          },
          attackType: AttackType.Other,
          elementType: ElementType.Physical,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "苇海信标",
      enkaId: 12511,
      weaponType: WeaponType.GreatSword,
      rarity: Rarity.Five,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Deshret_Awaken"),
      baseAtk: 608,
      appendPropId: AppendProp.CRITICAL,
      statValue: 33.1,
    },
    (affix: number) => {
      const atk = 20 + (affix - 1) * 5 + "%";
      const hp = 32 + (affix - 1) * 8 + "%";
      return {
        title: "沙海守望",
        text: highlight`元素战技命中敌人后，攻击力提升${atk}，持续8秒；受到伤害后，攻击力提升${atk}，持续8秒。上述2种效果角色处于后台时也能触发。此外，不处在护盾庇护下时，生命值上限提高${hp}。`,
      };
    },
    (affix = 1) => {
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
    }
  ),
  createWeapon(
    {
      name: "静水流涌之辉",
      enkaId: 11513,
      icon: getEnkaUI("UI_EquipIcon_Sword_Regalis_Awaken"),
      baseAtk: 542,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 88.2,
      weaponType: WeaponType.Sword,
      rarity: Rarity.Five,
    },
    (affix = 1) => {
      const hp = 14 + (affix - 1) * 3.5 + "%";
      const skill = 8 + (affix - 1) * 2 + "%";
      return {
        title: "湖光的朝与暮",
        text: highlight` · 装备者的当前生命值提升或降低时，元素战技造成的伤害提升${skill}，该效果持续6秒，至多叠加3次，每0.2秒至多触发一次；队伍中其他角色的当前生命值提升或降低时，装备者的生命值上限提升${hp}，该效果持续6秒，至多叠加2次，每0.2秒至多触发一次。装备者处于队伍后台时，依然能触发上述效果。`,
      };
    },
    (affix = 1) => {
      const hp = 14 + (affix - 1) * 3.5;
      const skill = 8 + (affix - 1) * 2;
      return [
        {
          label: "生命值提升",
          describe: `生命值提升${hp}%，至多叠加2次`,
          effect: [{ type: BuffType.HPPrcent, getValue: (_, stack) => hp * stack }],
          stackable: true,
          stack: 2,
          limit: 2,
          enable: false,
        },
        {
          label: "元素战技伤害提升",
          describe: `元素战技造成的伤害提升${skill}%，至多叠加3次`,
          effect: [{ type: BuffType.SkillPrcent, getValue: (_, stack) => skill * stack }],
          enable: false,
          stackable: true,
          stack: 3,
          limit: 3,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "撼地者",
      enkaId: 12431,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Isikhulu_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 27.6,
    },
    (affix = 1) => {
      const add = 16 + (affix - 1) * 4 + "%";
      return {
        title: "苍翠之路的誓言",
        text: highlight` · 队伍中的角色触发火元素相关反应后，装备者元素战技造成的伤害提升${add}，持续8秒。该效果队伍中的角色处于队伍后台时也能触发。`,
      };
    },
    (affix = 1) => {
      return [
        {
          label: "元素战技伤害提升",
          describe: `元素战技伤害提升${16 + (affix - 1) * 4}%`,
          effect: [{ type: BuffType.SkillPrcent, getValue: () => 16 + (affix - 1) * 4 }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "虹的行迹",
      enkaId: 13431,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Isikhulu_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.DEFENSE_PERCENT,
      statValue: 51.7,
    },
    (affix = 1) => {
      const def = 16 + (affix - 1) * 4 + "%";
      return {
        title: "流水与泉的约定",
        text: highlight`施放元素战技时，防御力提升${def}%，持续15秒。`,
      };
    },
    (affix = 1) => {
      return [
        {
          label: "防御力提升",
          describe: `施放元素战技时，防御力提升${16 + (affix - 1) * 4}`,
          effect: [{ type: BuffType.DEFPrcent, getValue: () => 16 + (affix - 1) * 4 }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "木棉之环",
      enkaId: 14431,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Isikhulu_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.HP_PERCENT,
      statValue: 41.3,
    },
    (affix = 1) => {
      const add = 0.6 + (affix - 1) * 0.1 + "%";
      const limit = 16 + (affix - 1) * 4 + "%";
      return {
        title: "丰沃之陆的回声",
        text: highlight`施放元素战技时，获得「玉锻之冕」效果：每1000点生命值上限都会使普通攻击造成的伤害提升${add}，持续10秒。通过这种方式至多使普通攻击造成的伤害提升${limit}。`,
      };
    },
    (affix = 1) => {
      const add = 0.6 + (affix - 1) * 0.1;
      const limit = 16 + (affix - 1) * 4;
      return [
        {
          label: "普通攻击伤害提升",
          describe: `每1000点生命值上限都会使普通攻击造成的伤害提升${add}%，至多${limit}%`,
          effect: [
            {
              type: BuffType.NormalPrcent,
              getValue: (data) => {
                return Math.min(limit, ((data.baseHP + data.extraHP + data.extraHP_NT) / 1000) * add);
              },
              actionOn: ActionOn.Indirect,
            },
          ],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "碎链",
      enkaId: 15431,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Isikhulu_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 27.6,
    },
    (affix = 1) => {
      const atk = 4.8 + (affix - 1) * 1.2 + "%";
      const el = 24 + (affix - 1) * 6;
      return {
        title: "花与落羽的长歌",
        text: highlight`队伍中每有一名纳塔角色或与装备者元素类型不同的角色，装备者获得${atk}攻击力提升；上述角色不少于3名时，装备者的元素精通提升${el}点。`,
      };
    },
    (affix = 1) => {
      const atk = 4.8 + (affix - 1) * 1.2;
      const el = 24 + (affix - 1) * 6;
      return [
        {
          label: "攻击力提升",
          describe: `队伍中每有一名纳塔角色或与装备者元素类型不同的角色，装备者获得${atk}攻击力提升`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => atk * stack }],
          stackable: true,
          limit: 4,
          stack: 0,
          enable: true,
        },
        {
          label: "元素精通提升",
          describe: `装备者的元素精通提升${el}点`,
          effect: [{ type: BuffType.MysteryFixed, getValue: () => el }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "息燧之笛",
      enkaId: 11431,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Isikhulu_Awaken"),
      baseAtk: 454,
      rarity: Rarity.Four,
      appendPropId: AppendProp.DEFENSE_PERCENT,
      statValue: 69,
    },
    (affix = 1) => {
      const def = 16 + (affix - 1) * 4 + "%";
      return {
        title: "镜与烟色的隐谜",
        text: highlight`施放元素战技时，防御力提升${def}，持续15秒。`,
      };
    },
    (affix = 1) => {
      const def = 16 + (affix - 1) * 4;
      return [
        {
          label: "防御力提升",
          describe: `施放元素战技时，防御力提升${def}%`,
          effect: [{ type: BuffType.DEFPrcent, getValue: () => def }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "柔灯挽歌",
      enkaId: 13513,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Muguet_Awaken"),
      baseAtk: 608,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL,
      statValue: 33.1,
    },
    (affix = 1) => {
      const atk = 15 + (affix - 1) * 4 + "%";
      const add = 18 + (affix - 1) * 5 + "%";
      const ch = 12 + (affix - 1);
      return {
        title: "白晓的序曲",
        text: highlight`攻击力提升${atk}；装备者对敌人触发燃烧反应或对处于燃烧状态下的敌人造成草元素伤害后，造成的伤害提高${add}。该效果持续8秒，至多叠加2层；叠加至2层或2层的持续时间刷新时，恢复${ch}点元素能量，每12秒至多通过这种方式恢复一次元素能量。上述2种效果角色处于队伍后台时也能触发。`,
      };
    },
    (affix = 1) => {
      const atk = 15 + (affix - 1) * 4;
      const add = 18 + (affix - 1) * 5;
      const ch = 12 + (affix - 1);
      return [
        {
          label: "攻击力提升",
          describe: `攻击力提升`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
          enable: true,
        },
        {
          label: "燃烧后，伤害提升",
          describe: `对敌人触发燃烧反应或对处于燃烧状态下的敌人造成草元素伤害后，造成的伤害提高${add}%，至多叠加2层`,
          stackable: true,
          limit: 2,
          stack: 2,
          enable: false,
          effect: [{ type: BuffType.GlobalPrcent, getValue: (_, stack) => add * stack }],
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "若水",
      enkaId: 15508,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Kirin_Awaken"),
      baseAtk: 542,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 88.2,
    },
    (affix = 1) => {
      const hp = 16 + (affix - 1) * 4 + "%";
      const add = 20 + (affix - 1) * 5 + "%";
      return {
        title: "洗濯诸类之形",
        text: highlight`生命值提升${hp}。周围存在敌人时，装备该武器的角色造成的伤害都会提升${add}，不论该角色处于场上或是处于队伍后台。`,
      };
    },
    (affix = 1) => {
      const hp = 16 + (affix - 1) * 4;
      const add = 20 + (affix - 1) * 5;
      return [
        {
          label: "生命值提升",
          describe: `生命值提升${hp}%`,
          effect: [{ type: BuffType.HPPrcent, getValue: () => hp }],
          enable: true,
        },
        {
          label: "伤害提升",
          describe: `角色造成的伤害提升${add}%`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => add }],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "裁断",
      enkaId: 12512,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_GoldenVerdict_Awaken"),
      baseAtk: 674,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL,
      statValue: 22.1,
    },
    (affix = 1) => {
      const atk = 20 + (affix - 1) * 5 + "%";
      const add = 18 + (affix - 1) * 4.5 + "%";
      return {
        title: "诸多朝与暮的誓约",
        text: highlight`攻击力提升${atk}；队伍中的角色获取结晶反应产生的晶片时，会为装备者赋予1枚「约印」，使元素战技造成的伤害提升${add}，约印持续15秒，至多同时持有2枚。所有约印将在装备者的元素战技造成伤害后的0.2秒后移除。`,
      };
    },
    (affix = 1) => {
      const atk = 20 + (affix - 1) * 5;
      const add = 18 + (affix - 1) * 4.5;
      return [
        {
          label: "攻击力提升",
          describe: `攻击力提升${atk}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
          enable: true,
        },
        {
          label: "元素战技伤害提升",
          describe: `元素战技造成的伤害提升${add}%，约印持续15秒，至多同时持有2枚`,
          effect: [{ type: BuffType.SkillPrcent, getValue: (_, stack) => add * stack }],
          stackable: true,
          limit: 2,
          enable: false,
          stack: 2,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "白雨心弦",
      enkaId: 15513,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Arcdange_Awaken"),
      baseAtk: 542,
      rarity: Rarity.Five,
      appendPropId: AppendProp.HP_PERCENT,
      statValue: 66.2,
    },
    (affix = 1) => {
      const hp1 = 12 + (affix - 1) * 3;
      const hp2 = 24 + (affix - 1) * 6;
      const hp3 = 40 + (affix - 1) * 10;
      const res = `${hp1}/${hp2}/${hp3}%`;
      const cri = 28 + (affix - 1) * 7 + "%";
      return {
        title: "德吕阿的夜曲",
        text: highlight`装备者能获得「疗护」效果，持有1/2/3层疗护时，生命值上限提升${res}。
          <br />在下列情况下，装备者将各获得1层疗护：
          <br /> · 施放元素战技时，持续25秒；
          <br /> · 进行治疗时，持续20秒，装备者处于队伍后台时依然能触发。
          <br />每层疗护的持续时间独立计算。
          <br />此外，处于3层疗护状态下时，元素爆发的暴击率提升${cri}，该效果将在疗护不足3层4秒后移除。
          `,
      };
    },
    (affix = 1) => {
      const hp1 = 12 + (affix - 1) * 3;
      const hp2 = 24 + (affix - 1) * 6;
      const hp3 = 40 + (affix - 1) * 10;
      const res = `${hp1}/${hp2}/${hp3}%`;
      return [
        {
          label: "生命值上限提升",
          describe: `持有1/2/3层疗护时，生命值上限提升${res}`,
          effect: [{ type: BuffType.HPPrcent, getValue: (_, stack) => [hp1, hp2, hp3][stack - 1] || 0 }],
          stackable: true,
          limit: 3,
          stack: 0,
          enable: false,
        },
        {
          label: "元素爆发暴击率提升",
          describe: `处于3层疗护状态下时，元素爆发的暴击率提升${28 + 7 * (affix - 1)}%`,
          effect: [{ type: BuffType.BurstCritcal, getValue: () => 28 + 7 * (affix - 1) }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "西风长枪",
      enkaId: 13407,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Zephyrus_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 30.6,
    },
    (affix = 1) => {
      const rat = 60 + (affix - 1) * 10 + "%";
      const sec = 12 - (affix - 1) * 1.5;
      return {
        title: "顺风而行",
        text: highlight`攻击造成暴击时，有${rat}的几率产生少量元素微粒，能为角色恢复6点元素能量。该效果每${sec}秒只能触发一次。`,
      };
    }
  ),
  createWeapon(
    {
      name: "西风秘典",
      enkaId: 14401,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Zephyrus_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 45.9,
    },
    (affix = 1) => {
      const rat = 60 + (affix - 1) * 10 + "%";
      const sec = 12 - (affix - 1) * 1.5;
      return {
        title: "顺风而行",
        text: highlight`攻击造成暴击时，有${rat}的几率产生少量元素微粒，能为角色恢复6点元素能量。该效果每${sec}秒只能触发一次。`,
      };
    }
  ),
  createWeapon(
    {
      name: "祭礼弓",
      enkaId: 15403,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Fossil_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 30.6,
    },
    (affix = 1) => {
      const rat = 40 + (affix - 1) * 10 + "%";
      const sec = Math.round(30 - (affix - 1) * 3.6);
      return {
        title: "气定神闲",
        text: highlight`元素战技造成伤害时，有${rat}的概率重置该技能的冷却时间，该效果每${sec}秒只能触发一次。`,
      };
    }
  ),
  createWeapon(
    {
      name: "匣里龙吟",
      enkaId: 11405,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Rockkiller_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 41.3,
    },
    (affix = 1) => {
      const add = 20 + (affix - 1) * 4 + "%";
      return {
        title: "踏火息雷",
        text: highlight`对处于火元素或雷元素影响下的敌人，造成的伤害提高${add}。`,
      };
    },
    (affix = 1) => {
      const add = 20 + (affix - 1) * 4;
      return [
        {
          label: "敌人火雷附着后，伤害提升",
          describe: `对处于火元素或雷元素影响下的敌人，造成的伤害提高${add}`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => add }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "圣显之钥",
      enkaId: 11511,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Deshret_Awaken"),
      baseAtk: 542,
      rarity: Rarity.Five,
      appendPropId: AppendProp.HP_PERCENT,
      statValue: 66.2,
    },
    (affix = 1) => {
      const hp = 20 + (affix - 1) * 5 + "%";
      const rate = 0.12 + (affix - 1) * 0.03 + "%";
      const rate2 = 0.2 + (affix - 1) * 0.05 + "%";
      return {
        title: "沉入沙海的史诗",
        text: highlight`生命值提升${hp}。元素战技命中敌人时将产生持续20秒的「宏大诗篇」效果：基于装备者生命值上限的${rate}，获得元素精通提升，该效果每0.3秒至多触发一次，至多叠加3层。该效果叠加至3层或3层的持续时间刷新时，将基于装备者生命值上限的${rate2}，为队伍中附近所有角色提供元素精通提升，持续20秒。`,
      };
    },
    (affix = 1) => {
      const hp = 20 + (affix - 1) * 5;
      const rate = 0.12 + (affix - 1) * 0.03;
      const rate2 = 0.2 + (affix - 1) * 0.05;
      return [
        {
          label: "生命值上限提升",
          describe: `生命值上限提升${hp}`,
          effect: [{ type: BuffType.HPPrcent, getValue: () => hp }],
          enable: true,
        },
        {
          label: "自身元素精通提升",
          describe: `基于装备者生命值上限的${rate}%，获得元素精通提升，至多叠加3层`,
          effect: [
            {
              type: BuffType.MysteryFixed,
              getValue: (data, stack) => {
                return (((data.baseHP + data.extraHP) * rate) / 100) * stack;
              },
              transform: true,
              actionOn: ActionOn.Indirect,
            },
          ],
          enable: false,
          stackable: true,
          stack: 3,
          limit: 3,
        },
        {
          label: "全队元素精通提升",
          describe: `基于装备者生命值上限的${rate2}%，为队伍中附近所有角色提供元素精通提升`,
          effect: [
            {
              type: BuffType.MysteryFixed,
              getValue: (data) => {
                return ((data.baseHP + data.extraHP) * rate2) / 100;
              },
              transform: true,
              actionOn: ActionOn.Indirect,
            },
          ],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "千岩古剑",
      enkaId: 12410,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Lapis_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 41.3,
    },
    (affix = 1) => {
      const atk = 7 + (affix - 1) + "%";
      const cri = 3 + (affix - 1) + "%";
      return {
        title: "千岩诀·同心",
        text: highlight`队伍中每有一位璃月角色，装备该武器的角色便获得${atk}攻击力提升与${cri}暴击率提升。至多获得4层提升效果。`,
      };
    },
    (affix = 1) => {
      const atk = 7 + (affix - 1);
      const cri = 3 + (affix - 1);
      return [
        {
          label: "攻击力与暴击率提升",
          describe: `角色获得${atk}%攻击力提升与${cri}%暴击率提升。至多获得4层提升效果`,
          effect: [
            { type: BuffType.ATKPrcent, getValue: (_, stack) => atk * stack },
            { type: BuffType.Critcal, getValue: (_, stack) => cri * stack },
          ],
          stackable: true,
          limit: 4,
          stack: 4,
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "筑云",
      enkaId: 15426,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Ultimatum_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 165,
    },
    (affix = 1) => {
      const em = 40 + (affix - 1) * 10;
      return {
        title: "镌岩为坊",
        text: highlight`元素能量减少后，装备者的元素精通提升${em}点。该效果持续18秒，至多叠加2层。`,
      };
    },
    (affix = 1) => {
      const em = 40 + (affix - 1) * 10;
      return [
        {
          label: "元素精通提升",
          describe: `元素能量减少后，装备者的元素精通提升${em}点，至多叠加2层`,
          effect: [{ type: BuffType.MysteryFixed, getValue: (_, stack) => em * stack }],
          stackable: true,
          limit: 2,
          stack: 2,
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "赦罪",
      enkaId: 11515,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Estoc_Awaken"),
      baseAtk: 674,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 44.1,
    },
    (affix = 1) => {
      const crt = 20 + 5 * (affix - 1) + "%";
      const add = 16 + 4 * (affix - 1) + "%";
      return {
        title: "死之契",
        text: highlight`暴击伤害提升${crt}；生命之契的数值增加时，装备者造成的伤害提升${add}。该效果持续6秒，至多叠加3次。`,
      };
    },
    (affix = 1) => {
      const add = 16 + 4 * (affix - 1);
      const crt = 20 + 5 * (affix - 1);
      return [
        {
          label: "暴击伤害提升",
          describe: `暴击伤害提升${crt}%`,
          effect: [{ type: BuffType.CritcalHurt, getValue: () => crt }],
          enable: true,
        },
        {
          label: "伤害提高",
          describe: `生命之契的数值增加时，装备者造成的伤害提升${add}%`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: (_, stack) => add * stack }],
          enable: false,
          stackable: true,
          stack: 3,
          limit: 3,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "裁叶萃光",
      enkaId: 11512,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Ayus_Awaken"),
      baseAtk: 542,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 88.2,
    },
    (affix = 1) => {
      const crt = 4 + (affix - 1) + "%";
      const add = 120 + 30 * (affix - 1) + "%";
      return {
        title: "白月枝芒",
        text: highlight`暴击率提升${crt}；普通攻击造成元素伤害后，获得「裁叶」效果：普通攻击和元素战技造成的伤害提高，提高值相当于元素精通的${add}。该效果在生效28次或12秒后消失，每12秒至多获得一次「裁叶」效果。`,
      };
    },
    (affix = 1) => {
      const crt = 4 + (affix - 1);
      const add = 120 + 30 * (affix - 1);
      return [
        {
          label: "暴击率提升",
          describe: `暴击率提升${crt}%`,
          effect: [{ type: BuffType.Critcal, getValue: () => crt }],
          enable: true,
        },
        {
          label: "普通攻击和元素战技造成的伤害提高",
          describe: `普通攻击和元素战技造成的伤害提高，提高值相当于元素精通的${add}%`,
          effect: [
            {
              type: BuffType.NormalFixed,
              getValue: (data) => {
                return ((data.elementalMystery + data.elementalMystery_NT) * add) / 100;
              },
              actionOn: ActionOn.Indirect,
            },
            {
              type: BuffType.SkillFixed,
              getValue: (data) => {
                return ((data.elementalMystery + data.elementalMystery_NT) * add) / 100;
              },
              actionOn: ActionOn.Indirect,
            },
          ],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "赤月之形",
      enkaId: 13512,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_BloodMoon_Awaken"),
      baseAtk: 674,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL,
      statValue: 22.1,
    },
    (affix = 1) => {
      const add = 12 + (affix - 1) * 4 + "%";
      const add2 = 24 + (affix - 1) * 8 + "%";

      return {
        title: "烬日之影",
        text: highlight`重击命中敌人时，赋予生命值上限25%的生命之契，该效果每14秒至多触发一次。此外，装备者具有生命之契时，造成的伤害提升${add}；若生命之契的数值大于等于生命值上限的30%，造成的伤害将进一步提升${add2}。`,
      };
    },
    (affix = 1) => {
      const add = 12 + (affix - 1) * 4;
      const add2 = 24 + (affix - 1) * 8;
      return [
        {
          label: "伤害提升",
          describe: `装备者具有生命之契时，造成的伤害提升${add}%`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => add }],
          enable: false,
        },
        {
          label: "伤害进一步提升",
          describe: `若生命之契的数值大于等于生命值上限的30%，造成的伤害将进一步提升${add2}%`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => add2 }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "沙中伟贤的对答",
      enkaId: 13426,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Caduceus_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.HP_PERCENT,
      statValue: 41.3,
    },
    (affix = 1) => {
      return {
        title: "均衡的原理",
        text: highlight` · 进行治疗时，恢复${
          8 + (affix - 1) * 2
        }点能量，该效果每10秒至多触发一次，角色处于队伍后台时也能触发。`,
      };
    }
  ),
  createWeapon(
    {
      name: "有乐御簾切",
      enkaId: 11514,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Needle_Awaken"),
      baseAtk: 542,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 88.2,
    },
    (affix = 1) => {
      let add = 16 + 4 * (affix - 1) + "%";
      let add2 = 24 + 6 * (affix - 1) + "%";
      let def = 20 + 5 * (affix - 1) + "%";
      return {
        title: "锦之花与龛中剑",
        text: highlight`普通攻击造成的伤害提升${add}，元素战技造成的伤害提升${add2}；队伍中附近的角色在场上造成岩元素伤害后，上述效果进一步提升100%，持续15秒。此外，装备者的防御力提升${def}。`,
      };
    },
    (affix = 1) => {
      let add = 16 + 4 * (affix - 1);
      let add2 = 24 + 6 * (affix - 1);
      let def = 20 + 5 * (affix - 1);
      return [
        {
          label: "普攻伤害、元素战技伤害提升",
          describe: `普通攻击造成的伤害提升${add}%，元素战技造成的伤害提升${add2}%`,
          effect: [
            { type: BuffType.NormalPrcent, getValue: () => add },
            { type: BuffType.SkillPrcent, getValue: () => add2 },
          ],
          enable: true,
        },
        {
          label: "上述效果提升100%",
          describe: `普通攻击造成的伤害提升${add}%，元素战技造成的伤害提升${add2}%`,
          effect: [
            { type: BuffType.NormalPrcent, getValue: () => add },
            { type: BuffType.SkillPrcent, getValue: () => add2 },
          ],
          enable: false,
        },
        {
          label: "防御力提升",
          describe: `装备者的防御力提升${def}%`,
          effect: [{ type: BuffType.DEFPrcent, getValue: () => def }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "鹤鸣余音",
      enkaId: 14515,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_MountainGale_Awaken"),
      baseAtk: 741,
      rarity: Rarity.Five,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 16.5,
    },
    (affix = 1) => {
      let add = 28 + (affix - 1) * 13 + "%";
      let c = 2.5 + (affix - 1) * 0.25;
      return {
        title: "云笈降真要诀",
        text: highlight`装备者下落攻击命中敌人后，队伍中附近的所有角色下落攻击造成的伤害提高${add}，持续20秒；队伍中附近的角色的下落攻击命中敌人时，为装备者恢复${c}点元素能量，每0.7秒至多通过这种方式恢复一次元素能量，装备者处于队伍后台时依然能通过这种方式恢复元素能量。`,
      };
    },
    (affix = 1) => {
      let add = 28 + (affix - 1) * 13;
      return [
        {
          label: "全队下落攻击伤害提升",
          describe: `装备者下落攻击命中敌人后，队伍中附近的所有角色下落攻击造成的伤害提高${add}%`,
          effect: [{ type: BuffType.FallingPrcent, getValue: () => add }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "「究极霸王超级魔剑」",
      enkaId: 12426,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Champion_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 30.6,
    },
    (affix = 1) => {
      let atk = 12 + (affix - 1) * 3 + "%";
      return {
        title: "加油！",
        text: highlight`攻击力提升${atk}。不仅如此！海沫村中曾蒙你帮助的美露莘们的声援心意充满了力量，依照她们的数目，攻击力至多进一步提升${atk}。`,
      };
    },
    (affix = 1) => {
      let atk = 12 + (affix - 1) * 3;
      return [
        {
          label: "攻击力提升",
          describe: `攻击力提升${atk}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
          enable: true,
        },
        {
          label: "攻击力进一步提升",
          describe: `攻击力提升${atk}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "水仙十字之剑",
      enkaId: 11428,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Purewill"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 41.3,
    },
    (affix = 1) => {
      let rat = 160 + (affix - 1) * 40 + "%";
      return {
        title: "勇者之剑",
        text: highlight`装备者不具备「始基力」时：普通攻击、重击、下落攻击命中时，会释放芒性或荒性的能量冲击，造成${rat}攻击力的伤害。该效果每12秒至多触发一次，能量冲击的类型由水仙十字之剑当前的属性决定。`,
      };
    },
    () => [],
    (affix = 1) => {
      let rat = (160 + (affix - 1) * 40) / 100;
      return [
        {
          label: "勇者之剑·能量冲击",
          rate: {
            atk: [rat],
          },
          attackType: AttackType.Other,
          elementType: ElementType.Physical,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "金流监督",
      enkaId: 14513,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Wheatley_Awaken"),
      baseAtk: 674,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL,
      statValue: 22.1,
    },
    (affix = 1) => {
      let atk = 16 + (affix - 1) * 4 + "%";
      let add = 16 + (affix - 1) * 4 + "%";
      let add2 = 14 + (affix - 1) * 3.5 + "%";
      let sp = 8 + (affix - 1) * 2 + "%";
      return {
        title: "黄金的血潮",
        text: highlight`攻击力提升${atk}。当前生命值提升或降低时，普通攻击造成的伤害提升${add}，重击造成的伤害提升${add2}。该效果持续4秒，至多叠加3层，每0.3秒至多触发一次；处于叠加3层的状态下时，攻击速度提升${sp}。`,
      };
    },
    (affix = 1) => {
      let atk = 16 + (affix - 1) * 4;
      let add = 16 + (affix - 1) * 4;
      let add2 = 14 + (affix - 1) * 3.5;
      return [
        {
          label: "攻击力提升",
          describe: `攻击力提升${atk}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
          enable: true,
        },
        {
          label: "普通攻击伤害，重击伤害提升",
          describe: `普通攻击造成的伤害提升${add}%，重击造成的伤害提升${add2}%。至多叠加3层`,
          effect: [
            { type: BuffType.NormalPrcent, getValue: (_, stack) => add * stack },
            { type: BuffType.StrongPrcent, getValue: (_, stack) => add2 * stack },
          ],
          enable: false,
          stackable: true,
          stack: 3,
          limit: 3,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "勘探钻机",
      enkaId: 13427,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Mechanic_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 27.6,
    },
    (affix = 1) => {
      let atk = 3 + (affix - 1) + "%";
      let add = 7 + (affix - 1) * 1.5 + "%";
      return {
        title: "石匠号子",
        text: highlight`受到治疗或进行治疗时，将赋予一枚团结标记，持续30秒，至多拥有三枚团结标记。施放元素战技或元素爆发时，将消耗所有的团结标记，产生持续10秒的「抗争」效果：每枚消耗的团结标记提高${atk}攻击力与${add}所有元素伤害加成。每15秒至多触发一次抗争效果；角色处于队伍后台时也能获得团结标记。`,
      };
    },
    (affix = 1) => {
      let atk = 3 + (affix - 1);
      let add = 7 + (affix - 1) * 1.5;
      return [
        {
          label: "攻击力提升、元素伤害提升",
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
          limit: 3,
          stack: 3,
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
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
      let atk = 3 + (affix - 1) + "%";
      let add = 7 + (affix - 1) * 1.5 + "%";
      return {
        title: "石匠号子",
        text: highlight`受到治疗或进行治疗时，将赋予一枚团结标记，持续30秒，至多拥有三枚团结标记。施放元素战技或元素爆发时，将消耗所有的团结标记，产生持续10秒的「抗争」效果：每枚消耗的团结标记提高${atk}攻击力与${add}所有元素伤害加成。每15秒至多触发一次抗争效果；角色处于队伍后台时也能获得团结标记。`,
      };
    },
    (affix = 1) => {
      let atk = 3 + (affix - 1);
      let add = 7 + (affix - 1) * 1.5;
      return [
        {
          label: "攻击力提升、元素伤害提升",
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
          limit: 3,
          stack: 3,
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "无垠蔚蓝之歌",
      enkaId: 14426,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_DandelionPoem_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 30.6,
    },
    (affix = 1) => {
      let atk = 8 + (affix - 1) * 2 + "%";
      let add = 6 + (affix - 1) * 1.5 + "%";
      return {
        title: "蔚蓝深空",
        text: highlight` · 普通攻击或重击命中敌人后的6秒内，普通攻击造成的伤害提升${atk}，重击造成的伤害提升${add}。该效果至多叠加3次，每0.3秒至多触发一次。`,
      };
    },
    (affix = 1) => {
      let atk = 8 + (affix - 1) * 2;
      let add = 6 + (affix - 1) * 1.5;
      return [
        {
          label: "普通攻击、重击伤害提升",
          describe: `普通攻击造成的伤害提升${atk}%、重击造成的伤害提升${add}%，至多叠加3层`,
          effect: [
            { type: BuffType.NormalPrcent, getValue: (_, stack) => atk * stack },
            { type: BuffType.StrongPrcent, getValue: (_, stack) => add * stack },
          ],
          stackable: true,
          limit: 3,
          stack: 3,
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
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
      let em = 40 + (affix - 1) * 10;
      let c = 2 + (affix - 1) * 0.5;
      return {
        title: "船工号子",
        text: highlight`受到治疗或进行治疗时，将赋予一枚坚忍标记，持续30秒，至多拥有三枚坚忍标记。施放元素战技或元素爆发时，将消耗所有的坚忍标记，产生持续10秒的「奋起」效果：每枚消耗的坚忍标记提高${em}点元素精通，并在效果产生2秒后，每枚消耗的坚忍标记为装备者恢复${c}点元素能量。每15秒至多触发一次奋起效果；角色处于队伍后台时也能获得坚忍标记。`,
      };
    },
    (affix = 1) => {
      let em = 40 + (affix - 1) * 10;
      return [
        {
          label: "元素精通提升",
          describe: `每枚消耗的坚忍标记提高${em}点元素精通，至多叠加3层`,
          effect: [{ type: BuffType.MysteryFixed, getValue: (_, stack) => em * stack }],
          stackable: true,
          limit: 3,
          stack: 3,
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "便携动力锯",
      enkaId: 12427,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Mechanic_Awaken"),
      baseAtk: 454,
      rarity: Rarity.Four,
      appendPropId: AppendProp.HP_PERCENT,
      statValue: 55.1,
    },
    (affix = 1) => {
      let em = 40 + (affix - 1) * 10;
      let c = 2 + (affix - 1) * 0.5;
      return {
        title: "船工号子",
        text: highlight`受到治疗或进行治疗时，将赋予一枚坚忍标记，持续30秒，至多拥有三枚坚忍标记。施放元素战技或元素爆发时，将消耗所有的坚忍标记，产生持续10秒的「奋起」效果：每枚消耗的坚忍标记提高${em}点元素精通，并在效果产生2秒后，每枚消耗的坚忍标记为装备者恢复${c}点元素能量。每15秒至多触发一次奋起效果；角色处于队伍后台时也能获得坚忍标记。`,
      };
    },
    (affix = 1) => {
      let em = 40 + (affix - 1) * 10;
      return [
        {
          label: "元素精通提升",
          describe: `每枚消耗的坚忍标记提高${em}点元素精通，至多叠加3层`,
          effect: [{ type: BuffType.MysteryFixed, getValue: (_, stack) => em * stack }],
          stackable: true,
          limit: 3,
          stack: 3,
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "万世流涌大典",
      enkaId: 14514,
      rarity: Rarity.Five,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Iudex_Awaken"),
      weaponType: WeaponType.Magic,
      baseAtk: 542,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 88.2,
    },
    (affix: number) => {
      let hp = 16 + (affix - 1) * 4 + "%";
      let add = 14 + (affix - 1) * 4 + "%";
      let c = 8 + (affix - 1);
      return {
        title: "万世的浪涛",
        text: highlight`生命值提升${hp}。当前生命值提升或降低时，重击造成的伤害提升${add}。该效果持续4秒，至多叠加3次，每0.3秒至多触发一次；叠加至3层或3层的持续时间刷新时，恢复${c}点元素能量，每12秒至多通过这种方式恢复一次元素能量。`,
      };
    },
    (affix = 1) => {
      let hp = 16 + (affix - 1) * 4;
      let add = 14 + (affix - 1) * 4;
      return [
        {
          label: "生命值提升",
          describe: `生命值提升${hp}%`,
          effect: [{ type: BuffType.HPPrcent, getValue: () => hp }],
          enable: true,
        },
        {
          label: "重击造成的伤害提升",
          describe: `重击造成的伤害提升${add}%，至多叠加3层`,
          effect: [{ type: BuffType.StrongPrcent, getValue: (_, stack) => add * stack }],
          enable: false,
          stackable: true,
          stack: 3,
          limit: 3,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "灰河渡手",
      enkaId: 11426,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Machination_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 45.9,
    },
    (affix = 1) => {
      let cr = 8 + (affix - 1) * 2 + "%";
      let c = 16 + (affix - 1) * 4 + "%";
      return {
        title: "铁骨",
        text: highlight`元素战技暴击率提升${cr}；此外，施放元素战技后的5秒内，元素充能效率提升${c}。`,
      };
    },
    (affix = 1) => {
      let cr = 8 + (affix - 1) * 2;
      let c = 16 + (affix - 1) * 4;
      return [
        {
          label: "元素战技暴击率提升",
          describe: `元素战技暴击率提升${cr}%`,
          effect: [{ type: BuffType.SkillCritcal, getValue: () => cr }],
          enable: true,
        },
        {
          label: "元素充能效率提升",
          describe: `施放元素战技后的5秒内，元素充能效率提升${c}%`,
          effect: [{ type: BuffType.ChargeFixed, getValue: () => c }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
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
      const getValue = (data: ICalculatorValue) => {
        // 虽然游戏里不存这种场景，但感觉生命之契应该能吃二次转化
        let allhp = data.baseHP + data.extraHP + data.extraHP_NT;
        return Math.min(((allhp * 0.24) / 1000) * hp, add2);
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
          describe: `每清除1000点将会提供${hp}%所有元素伤害加成，至多获得${add2}%所有元素伤害加成。（由于获取生命之契的手段过少，该增益效果只以最大生命值的24%生命之契来计算）`,
          effect: [
            { type: BuffType.PyroPrcent, getValue },
            { type: BuffType.HydroPrcent, getValue },
            { type: BuffType.AnemoPrcent, getValue },
            { type: BuffType.ElectroPrcent, getValue },
            { type: BuffType.GeoPrcent, getValue },
            { type: BuffType.CryoPrcent, getValue },
            { type: BuffType.DendroPrcent, getValue },
          ],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "公义的酬报",
      enkaId: 13425,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Vorpal_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.HP_PERCENT,
      statValue: 27.6,
    },
    (affix = 1) => {
      return {
        title: "枪尖一点",
        text: highlight`受到治疗时，恢复${
          8 + (affix - 1) * 2
        }点能量，该效果每10秒至多触发一次，角色处于队伍后台时也能触发。`,
      };
    }
  ),
  createWeapon(
    {
      name: "浪影阔剑",
      enkaId: 12425,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Vorpal_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 41.3,
    },
    (affix = 1) => {
      let a = 24 + (affix - 1) * 6 + "%";
      return {
        title: "巡航的白浪",
        text: highlight`受到治疗后，攻击力提升${a}，持续8秒。角色处于队伍后台也能触发。`,
      };
    },
    (affix = 1) => {
      let a = 24 + (affix - 1) * 6;
      return [
        {
          label: "攻击力提升",
          describe: `受到治疗后，攻击力提升${a}%，持续8秒`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "海渊终曲",
      enkaId: 11425,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Vorpal_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 27.6,
    },
    (affix = 1) => {
      let atk = 12 + (affix - 1) * 3 + "%";
      let hp = 2.4 + (affix - 1) * 0.6 + "%";
      let atk2 = 150 + (affix - 1) * 37.5;
      return {
        title: "最终的崇高",
        text: highlight`施放元素战技时，攻击力提升${atk}，持续15秒，并赋予生命值上限25%的生命之契，该效果每10秒至多触发一次。生命之契清除时，基于清除值的${hp}提升至多${atk2}点攻击力，持续15秒。`,
      };
    },
    (affix = 1) => {
      let atk = 12 + (affix - 1) * 3;
      let hp = 2.4 + (affix - 1) * 0.6;
      let atk2 = 150 + (affix - 1) * 37.5;
      const getValue = (data: ICalculatorValue) => {
        // 虽然游戏里不存这种场景，但感觉生命之契应该能吃二次转化
        let allhp = data.baseHP + data.extraHP + data.extraHP_NT;
        return Math.min((allhp * 0.25 * hp) / 100, atk2);
      };
      return [
        {
          label: "攻击力提升",
          describe: `施放元素战技时，攻击力提升${atk}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
          enable: false,
        },
        {
          label: "消除生命之契获得攻击力提升",
          describe: `生命之契清除时，基于清除值的${hp}%提升至多${atk2}点攻击力。（由于获取生命之契的手段过少，该增益效果只以最大生命值的25%生命之契来计算）`,
          effect: [{ type: BuffType.ATKFixed, getValue }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "静谧之曲",
      enkaId: 15425,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Vorpal_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 41.3,
    },
    (affix = 1) => {
      let a = 16 + (affix - 1) * 4 + "%";
      return {
        title: "深海弦振",
        text: highlight`受到治疗后，造成的伤害提升${a}，持续8秒。角色处于队伍后台也能触发。`,
      };
    },
    (affix = 1) => {
      let a = 16 + (affix - 1) * 4;
      return [
        {
          label: "造成的伤害提升",
          describe: `受到治疗后，造成的伤害提升${a}%，持续8秒`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => a }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "狼牙",
      enkaId: 11424,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Boreas_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CRITICAL,
      statValue: 27.6,
    },
    (affix = 1) => {
      let ad = 16 + (affix - 1) * 4 + "%";
      let cr = 2 + (affix - 1) * 0.5 + "%";
      return {
        title: "苍狼北风",
        text: highlight`元素战技与元素爆发造成的伤害提升${ad}。元素战技命中敌人时，元素战技的暴击率提升${cr}；元素爆发命中敌人时，元素爆发的暴击率提升${cr}。上述两种效果各自持续10秒，至多叠加4次，每0.1秒至多触发一次。`,
      };
    },
    (affix = 1) => {
      let ad = 16 + (affix - 1) * 4;
      let cr = 2 + (affix - 1) * 0.5;
      return [
        {
          label: "元素战技与元素爆发造成的伤害提升",
          describe: `元素战技与元素爆发造成的伤害提升${ad}%`,
          effect: [
            { type: BuffType.SkillPrcent, getValue: () => ad },
            { type: BuffType.BurstPrcent, getValue: () => ad },
          ],
          enable: true,
        },
        {
          label: "元素战技暴击率提升",
          describe: `元素战技命中敌人时，元素战技的暴击率提升${cr}%，至多叠加4层`,
          effect: [{ type: BuffType.SkillCritcal, getValue: (_, stack) => cr * stack }],
          enable: false,
          stackable: true,
          stack: 4,
          limit: 4,
        },
        {
          label: "元素爆发暴击率提升",
          describe: `元素爆发命中敌人时，元素爆发的暴击率提升${cr}%，至多叠加4层`,
          effect: [{ type: BuffType.BurstCritcal, getValue: (_, stack) => cr * stack }],
          enable: false,
          stackable: true,
          stack: 4,
          limit: 4,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "遗祀玉珑",
      enkaId: 14424,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Yue_Awaken"),
      baseAtk: 454,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CRITICAL,
      statValue: 36.8,
    },
    (affix = 1) => {
      let hp = 32 + (affix - 1) * 8 + "%";
      let em = 40 + (affix - 1) * 10;
      return {
        title: "碧玉流转",
        text: highlight`处于队伍后台超过5秒后，生命值上限提升${hp}，元素精通提升${em}点。装备者登场并留在场上10秒后，该效果将失效。`,
      };
    },
    (affix = 1) => {
      let hp = 32 + (affix - 1) * 8;
      let em = 40 + (affix - 1) * 10;
      return [
        {
          label: "生命值上限、元素精通提升",
          describe: `处于队伍后台超过5秒后，生命值上限提升${hp}%，元素精通提升${em}点`,
          effect: [
            { type: BuffType.HPPrcent, getValue: () => hp },
            { type: BuffType.MysteryFixed, getValue: () => em },
          ],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "烈阳之嗣",
      enkaId: 15424,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Gurabad_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CRITICAL,
      statValue: 18.4,
    },
    (affix = 1) => {
      let atk = 60 + (affix - 1) * 15 + "%";
      let add = 28 + (affix - 1) * 7 + "%";
      return {
        title: "阳炎古道",
        text: highlight`重击命中敌人后，会向命中的敌人降下阳炎矢，造成攻击力${atk}的伤害，并为受到阳炎矢伤害的敌人施加持续10秒的灼心效果。装备者的重击对处于灼心状态下的敌人造成的伤害提升${add}。阳炎矢每10秒至多触发一次。`,
      };
    },
    (affix = 1) => {
      let add = 28 + (affix - 1) * 7;
      return [
        {
          label: "重击伤害提升",
          describe: `重击对处于灼心状态下的敌人造成的伤害提升${add}%`,
          effect: [{ type: BuffType.StrongPrcent, getValue: () => add }],
          enable: false,
        },
      ];
    },
    (affix = 1) => {
      let atk = (60 + (affix - 1) * 15) / 100;
      return [
        {
          label: "阳炎古道·阳炎矢",
          rate: {
            atk: [atk],
          },
          attackType: AttackType.Other,
          elementType: ElementType.Physical,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "聊聊棒",
      enkaId: 12424,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_BeastTamer_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CRITICAL,
      statValue: 18.4,
    },
    (affix = 1) => {
      let atk = 16 + (affix - 1) * 4 + "%";
      let add = 12 + (affix - 1) * 3 + "%";
      return {
        title: "「伶牙俐齿」",
        text: highlight`承受火元素附着后的15秒内，攻击力提升${atk}，每12秒至多触发一次；承受水元素、冰元素、雷元素或草元素附着后的15秒内，所有元素伤害加成提升${add}，每12秒至多触发一次。`,
      };
    },
    (affix = 1) => {
      let atk = 16 + (affix - 1) * 4;
      let add = 12 + (affix - 1) * 3;
      return [
        {
          label: "攻击力提升",
          describe: `承受火元素附着后的15秒内，攻击力提升${atk}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
          enable: false,
        },
        {
          label: "元素伤害提升",
          describe: `承受水元素、冰元素、雷元素或草元素附着后，所有元素伤害加成提升${add}%`,
          effect: [
            { type: BuffType.PyroPrcent, getValue: () => add },
            { type: BuffType.HydroPrcent, getValue: () => add },
            { type: BuffType.AnemoPrcent, getValue: () => add },
            { type: BuffType.ElectroPrcent, getValue: () => add },
            { type: BuffType.CryoPrcent, getValue: () => add },
            { type: BuffType.GeoPrcent, getValue: () => add },
            { type: BuffType.DendroPrcent, getValue: () => add },
          ],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "峡湾长歌",
      enkaId: 13424,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Shanty_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CRITICAL,
      statValue: 27.6,
    },
    (affix = 1) => {
      return {
        title: "冰原的诸多故事",
        text: highlight`队伍中存在至少三种不同元素类型的角色时，元素精通提升${120 + (affix - 1) * 30}点。`,
      };
    },
    (affix = 1) => {
      return [
        {
          label: "元素精通提升",
          describe: `队伍中存在至少三种不同元素类型的角色时，元素精通提升${120 + (affix - 1) * 30}点`,
          effect: [{ type: BuffType.MysteryFixed, getValue: () => 120 + (affix - 1) * 30 }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "最初的大魔术",
      enkaId: 15512,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Pledge_Awaken"),
      baseAtk: 608,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 66.2,
    },
    (affix = 1) => {
      let st = 16 + (affix - 1) * 4 + "%";
      let atk1 = 16 + (affix - 1) * 4;
      let atk2 = 32 + (affix - 1) * 8;
      let atk3 = 48 + (affix - 1) * 12;
      let atk = `${atk1}/${atk2}/${atk3}%`;
      let sp1 = 4 + (affix - 1) * 2;
      let sp2 = 7 + (affix - 1) * 2;
      let sp3 = 10 + (affix - 1) * 2;
      let sp = `${sp1}/${sp2}/${sp3}%`;

      return {
        title: "伟大者帕西法尔",
        text: highlight`重击造成的伤害提升${st}；队伍中每存在一位与装备者元素类型相同的角色（包括装备者自身），将获得1层「手法」效果；每存在一位元素类型不同的角色，将获得1层「演技」效果。处于1/2/3层及以上「手法」效果下时，攻击力提升${atk}；处于1/2/3层及以上「演技」效果下时移动速度提升${sp}。 `,
      };
    },
    (affix = 1) => {
      let st = 16 + (affix - 1) * 4;
      let atk1 = 16 + (affix - 1) * 4;
      let atk2 = 32 + (affix - 1) * 8;
      let atk3 = 48 + (affix - 1) * 12;
      let atk = [atk1, atk2, atk3];
      return [
        {
          label: "重击伤害提升",
          describe: `重击造成的伤害提升${st}%`,
          effect: [{ type: BuffType.StrongPrcent, getValue: () => st }],
          enable: true,
        },
        {
          label: "攻击力提升",
          describe: `处于1/2/3层及以上「手法」效果下时，攻击力提升${atk.join("/")}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => atk[stack - 1] || 0 }],
          enable: false,
          stackable: true,
          stack: 3,
          limit: 3,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "鹮穿之喙",
      enkaId: 15419,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Ibis_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 27.6,
    },
    (affix = 1) => {
      let em = 40 + (affix - 1) * 10;
      return {
        title: "秘智之眸的青睐",
        text: highlight`重击命中敌人后的6秒内，角色元素精通提升${em}点。该效果至多叠加2层，每0.5秒至多触发一次。`,
      };
    },
    (affix = 1) => {
      let em = 40 + (affix - 1) * 10;
      return [
        {
          label: "元素精通提升",
          describe: `重击命中敌人后，角色元素精通提升${em}点。该效果至多叠加2层`,
          effect: [{ type: BuffType.MysteryFixed, getValue: (_, stack) => em * stack }],
          stackable: true,
          limit: 2,
          stack: 2,
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "碧落之珑",
      enkaId: 14505,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Morax_Awaken"),
      baseAtk: 608,
      rarity: Rarity.Five,
      appendPropId: AppendProp.HP_PERCENT,
      statValue: 49.6,
    },
    (affix = 1) => {
      let c = 4.5 + (affix - 1) * 0.5;
      let add = 0.3 + (affix - 1) * 0.2 + "%";
      let limit = 12 + (affix - 1) * 8 + "%";
      return {
        title: "定土玉圭",
        text: highlight`施放元素爆发或创造护盾后的3秒内，将产生「定土玉圭」效果：每2.5秒恢复${c}点元素能量，并基于装备者的生命值上限，每1000点使其对应元素类型的元素伤害加成提高${add}，至多提高${limit}。装备该武器的角色处于队伍后台时，依然能产生「定土玉圭」效果。`,
      };
    },
    (affix = 1) => {
      let add = 0.3 + (affix - 1) * 0.2;
      let limit = 12 + (affix - 1) * 8;
      let getB = (type: BuffType, element: ElementType) => {
        return {
          enable: false,
          stackable: true,
          effect: [
            {
              type,
              getValue: (data) => {
                let hp = data.baseHP + data.extraHP;
                return Math.min(limit, (hp / 1000) * add);
              },
            },
          ],
          condition: (data) => data.element === element,
          stack: 3,
          limit: 3,
          label: "元素伤害加成提高",
          describe: `每1000点生命值使元素伤害加成提高${add}%，至多提高${limit}%`,
        };
      };
      return [
        getB(BuffType.HydroPrcent, ElementType.Hydro),
        getB(BuffType.PyroPrcent, ElementType.Pyro),
        getB(BuffType.AnemoPrcent, ElementType.Anemo),
        getB(BuffType.CryoPrcent, ElementType.Cryo),
        getB(BuffType.ElectroPrcent, ElementType.Electro),
        getB(BuffType.GeoPrcent, ElementType.Geo),
        getB(BuffType.DendroPrcent, ElementType.Dendro),
      ];
    }
  ),
  createWeapon(
    {
      name: "饰铁之花",
      enkaId: 12418,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Fleurfair_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 110,
    },
    (affix = 1) => {
      let atk = 12 + (affix - 1) * 3 + "%";
      let em = 48 + (affix - 1) * 12;
      return {
        title: "风与花的密语",
        text: highlight` · 元素战技命中敌人或触发元素反应后的8秒内，攻击力提升${atk}，元素精通提升${em}点。`,
      };
    },
    (affix = 1) => {
      let atk = 12 + (affix - 1) * 3;
      let em = 48 + (affix - 1) * 12;
      return [
        {
          label: "攻击力、元素精通提升",
          describe: `元素战技命中敌人或触发元素反应后，攻击力提升${atk}%，元素精通提升${em}点`,
          effect: [
            { type: BuffType.ATKPrcent, getValue: () => atk },
            { type: BuffType.MysteryFixed, getValue: () => em },
          ],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "东花坊时雨",
      enkaId: 11422,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Kasabouzu_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 165,
    },
    (affix = 1) => {
      let add = 16 + (affix - 1) * 4 + "%";
      return {
        title: "怪谭·时雨心地一本足",
        text: highlight`攻击命中敌人后，会为命中的一名敌人施加「纸伞作祟」状态，持续10秒。该效果每15秒至多触发一次；持续期间该敌人被击败时，将清除该效果的冷却时间。装备者对处于「纸伞作祟」状态下的敌人造成的伤害提升${add}。`,
      };
    },
    (affix = 1) => {
      let add = 16 + (affix - 1) * 4;
      return [
        {
          label: "伤害提升",
          describe: `装备者对处于「纸伞作祟」状态下的敌人造成的伤害提升${add}%`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => add }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "图莱杜拉的回忆",
      enkaId: 14512,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Alaya_Awaken"),
      baseAtk: 674,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 44.1,
    },
    (affix = 1) => {
      let sp = 10 + (affix - 1) * 2.5 + "%";
      let add = 4.8 + (affix - 1) * 1.2 + "%";
      let add2 = 9.6 + (affix - 1) * 2.4 + "%";
      let lim = 48 + (affix - 1) * 12 + "%";
      return {
        title: "堙没的蓝宝石泪滴",
        text: highlight`普通攻击速度提升${sp}；施放元素战技后的14秒内：普通攻击造成的伤害每1秒提升${add}；普通攻击命中敌人后，普通攻击造成的伤害提升${add2}，该效果每0.3秒至多触发1次。持续期间内，普通攻击造成的伤害至多通过上述效果提升至${lim}。角色退场时将移除效果，再次施放元素战技时会先移除原有的效果。`,
      };
    },
    (affix = 1) => {
      let lim = 48 + (affix - 1) * 12;
      return [
        {
          label: "普通攻击伤害提升",
          describe: `普通攻击伤害提升${lim}%`,
          effect: [{ type: BuffType.NormalPrcent, getValue: () => lim }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "千夜浮梦",
      enkaId: 14511,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Ayus_Awaken"),
      baseAtk: 542,
      rarity: Rarity.Five,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 265,
    },
    (affix = 1) => {
      let em = 32 + (affix - 1) * 8;
      let add = 10 + (affix - 1) * 4 + "%";
      let enm = 40 + (affix - 1) * 2;
      return {
        title: "千夜的曙歌",
        text: highlight`队伍中每个其他角色，都会依据元素类型与装备者相同与否，为装备者提供提升效果。相同：元素精通提升${em}点；不同：装备者元素类型的元素伤害加成提升${add}。上述提升效果每种至多叠加3层。此外，队伍中装备者以外的附近角色的元素精通提升${enm}点，多件同名武器产生的此效果可以叠加。`,
      };
    },
    (affix = 1) => {
      let em = 32 + (affix - 1) * 8;
      let add = 10 + (affix - 1) * 4;
      let enm = 40 + (affix - 1) * 2;
      let getValue = (_, stack) => {
        return add * (3 - stack);
      };
      return [
        {
          label: "全队元素精通提升",
          describe: `全队元素精通提升${enm}`,
          effect: [{ type: BuffType.MysteryFixed, getValue: () => enm }],
          enable: true,
        },
        {
          label: `元素精通提升或元素伤害加成提升`,
          describe: `该增益用【层数】代表【相同元素类型】的数量。3层代表3个相同元素类型角色的数量，0层代表3个不同元素类型角色的数量。元素精通提升${em}或元素伤害加成提升${add}%`,
          effect: [
            { type: BuffType.MysteryFixed, getValue: (_, stack) => em * stack },
            { type: BuffType.PyroPrcent, getValue },
            { type: BuffType.HydroPrcent, getValue },
            { type: BuffType.ElectroPrcent, getValue },
            { type: BuffType.AnemoPrcent, getValue },
            { type: BuffType.CryoPrcent, getValue },
            { type: BuffType.GeoPrcent, getValue },
            { type: BuffType.DendroPrcent, getValue },
          ],
          stackable: true,
          limit: 3,
          stack: 3,
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "天空之脊",
      enkaId: 13502,
      rarity: Rarity.Five,
      icon: getEnkaUI("UI_EquipIcon_Pole_Dvalin_Awaken"),
      weaponType: WeaponType.Polearms,
      baseAtk: 674,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 36.8,
    },
    (affix: number) => {
      const cri = 8 + (affix - 1) * 2 + "%";
      const rate = 40 + (affix - 1) * 15 + "%";
      return {
        title: "斫断黑翼的利齿",
        text: highlight`暴击率提升${cri}，普通攻击速度提升12%。此外，普通攻击与重击命中敌人时，有50%概率触发真空刃，在小范围内造成额外${rate}攻击力的伤害。该效果每2秒至多触发一次。`,
      };
    },
    (affix = 1) => {
      return [
        {
          label: "暴击率提升",
          describe: `暴击率提升${8 + 2 * (affix - 1)}%`,
          effect: [{ type: BuffType.Critcal, getValue: () => 8 + 2 * (affix - 1) }],
          enable: true,
        },
      ];
    },
    (affix = 1) => {
      const rate = 0.4 + (affix - 1) * 0.15;
      return [
        {
          label: "天空之脊·真空刃",
          rate: {
            atk: [rate],
          },
          attackType: AttackType.Other,
          elementType: ElementType.Physical,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "西福斯的月光",
      enkaId: 11418,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Pleroma_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 165,
    },
    (affix = 1) => {
      let a = 0.036 + (affix - 1) * 0.009 + "%";
      return {
        title: "镇灵的低语",
        text: highlight`每10秒，产生如下效果：装备者的每点元素精通，都会为该角色提升${a}元素充能效率，并基于该提升的30%为队伍中附近的其他角色提升元素充能效率，持续12秒，多件同名武器产生的此效果可以叠加。角色处于队伍后台时也能触发效果。`,
      };
    },
    (affix = 1) => {
      let a = 0.036 + (affix - 1) * 0.009;
      return [
        {
          label: "充能效率提升",
          describe: `每点元素精通，都会为角色提升${a}%元素充能效率`,
          effect: [
            {
              type: BuffType.ChargeFixed,
              getValue: (data) => data.elementalMystery * a,
              actionOn: ActionOn.Indirect,
              transform: true,
            },
          ],
          enable: true,
        },
        {
          label: "全队充能效率提升",
          describe: `基于上述效果的30%为队伍中附近的其他角色提升元素充能效率`,
          effect: [
            {
              type: BuffType.ChargeFixed,
              getValue: (data) => data.elementalMystery * a * 0.3,
              actionOn: ActionOn.Indirect,
              transform: true,
            },
          ],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "流浪的晚星",
      enkaId: 14416,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Pleroma_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 165,
    },
    (affix = 1) => {
      let a = 24 + (affix - 1) * 6 + "%";
      return {
        title: "林野晚星",
        text: highlight`每10秒，产生如下效果：基于装备者的元素精通的${a}，提升该角色的攻击力，并基于该提升的30%为队伍中附近的其他角色提升攻击力，持续12秒，多件同名武器产生的此效果可以叠加。角色处于队伍后台时也能触发效果。`,
      };
    },
    (affix = 1) => {
      let a = 24 + (affix - 1) * 6;
      return [
        {
          label: "攻击力提升",
          describe: `基于装备者的元素精通的${a}%，提升角色的攻击力`,
          effect: [
            {
              type: BuffType.ATKFixed,
              getValue: (data) => (data.elementalMystery * a) / 100,
              actionOn: ActionOn.Indirect,
              transform: true,
            },
          ],
          enable: true,
        },
        {
          label: "全队攻击力提升",
          describe: `基于上述效果的30%为队伍中附近的其他角色提升攻击力`,
          effect: [
            {
              type: BuffType.ATKFixed,
              getValue: (data) => (data.elementalMystery * a * 0.3) / 100,
              actionOn: ActionOn.Indirect,
              transform: true,
            },
          ],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "风信之锋",
      enkaId: 13419,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Windvane_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 41.3,
    },
    (affix = 1) => {
      let a = 12 + (affix - 1) * 3 + "%";
      let e = 48 + (affix - 1) * 12;
      return {
        title: "不至之风",
        text: highlight`触发元素反应后的10秒内，攻击力提升${a}，元素精通提升${e}点。`,
      };
    },
    (affix = 1) => {
      let a = 12 + (affix - 1) * 3;
      let e = 48 + (affix - 1) * 12;
      return [
        {
          label: "攻击力、元素精通提升",
          describe: `触发元素反应后的10秒内，攻击力提升${a}%，元素精通提升${e}点`,
          effect: [
            { type: BuffType.ATKPrcent, getValue: () => a },
            { type: BuffType.MysteryFixed, getValue: () => e },
          ],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "赤沙之杖",
      enkaId: 13511,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Deshret_Awaken"),
      baseAtk: 542,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL,
      statValue: 44.1,
    },
    (affix = 1) => {
      let a = 28 + (affix - 1) * 7 + "%";
      let e = 52 + (affix - 1) * 13 + "%";
      return {
        title: "蜃气尽头的热梦",
        text: highlight`基于装备者元素精通的${e}，获得攻击力加成。元素战技命中敌人时，将产生持续10秒的「赤沙之梦」效果：基于装备者元素精通的${a}，获得攻击力加成，该效果至多叠加3层。`,
      };
    },
    (affix = 1) => {
      let a = 28 + (affix - 1) * 7;
      let e = 52 + (affix - 1) * 13;
      return [
        {
          label: "攻击力加成",
          describe: `基于装备者元素精通的${e}%，获得攻击力加成`,
          effect: [
            {
              type: BuffType.ATKFixed,
              getValue: (data) => (data.elementalMystery * e) / 100,
              transform: true,
              actionOn: ActionOn.Indirect,
            },
          ],
          enable: true,
        },
        {
          label: "攻击力进一步加成",
          describe: `元素战技命中敌人时，基于装备者元素精通的${a}%，获得攻击力加成，该效果至多叠加3层`,
          effect: [
            {
              type: BuffType.ATKFixed,
              getValue: (data, stack) => (data.elementalMystery * a * stack) / 100,
              transform: true,
              actionOn: ActionOn.Indirect,
            },
          ],
          enable: false,
          stack: 3,
          stackable: true,
          limit: 3,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "玛海菈的水色",
      enkaId: 12415,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Pleroma_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 165,
    },
    (affix = 1) => {
      let a = 24 + (affix - 1) * 6 + "%";
      return {
        title: "沙上楼阁",
        text: highlight`每10秒，产生如下效果：基于装备者的元素精通的${a}，提升该角色的攻击力，并基于该提升的30%为队伍中附近的其他角色提升攻击力，持续12秒，多件同名武器产生的此效果可以叠加。角色处于队伍后台时也能触发效果。`,
      };
    },
    (affix = 1) => {
      let a = 24 + (affix - 1) * 6;
      return [
        {
          label: "攻击力提升",
          describe: `基于装备者的元素精通的${a}%，提升角色的攻击力`,
          effect: [
            {
              type: BuffType.ATKFixed,
              getValue: (data) => (data.elementalMystery * a) / 100,
              actionOn: ActionOn.Indirect,
              transform: true,
            },
          ],
          enable: true,
        },
        {
          label: "全队攻击力提升",
          describe: `基于上述效果的30%为队伍中附近的其他角色提升攻击力`,
          effect: [
            {
              type: BuffType.ATKFixed,
              getValue: (data) => (data.elementalMystery * a * 0.3) / 100,
              actionOn: ActionOn.Indirect,
              transform: true,
            },
          ],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "王下近侍",
      enkaId: 15417,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Arakalari_Awaken"),
      baseAtk: 454,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 55.1,
    },
    (affix = 1) => {
      let a = 100 + (affix - 1) * 20 + "%";
      let e = 60 + (affix - 1) * 20;
      return {
        title: "迷宫之王的教导",
        text: highlight`施放元素战技或元素爆发时，将获得「森林教诲」的效果，元素精通提升${e}点，持续12秒。该效果将在切换角色时移除。森林教诲的持续时间结束或被移除时，将对附近一名敌人造成${a}攻击力的伤害。森林教诲每20秒至多触发一次。`,
      };
    },
    (affix = 1) => {
      let e = 60 + (affix - 1) * 20;
      return [
        {
          label: "元素精通提升",
          describe: `施放元素战技或元素爆发时，将获得「森林教诲」的效果，元素精通提升${e}点`,
          effect: [{ type: BuffType.MysteryFixed, getValue: () => e }],
          enable: false,
        },
      ];
    },
    (affix = 1) => {
      let a = (100 + (affix - 1) * 20) / 100;
      return [
        {
          label: "王下近侍·森林教诲",
          rate: {
            atk: [a],
          },
          attackType: AttackType.Other,
          elementType: ElementType.Physical,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "森林王器",
      enkaId: 12417,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Arakalari_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 30.6,
    },
    (affix = 1) => {
      let e = 60 + (affix - 1) * 15;
      return {
        title: "森林的瑞佑",
        text: highlight` · 触发燃烧、原激化、超激化、蔓激化、绽放、超绽放或烈绽放后，将在角色周围产生至多存在10秒的「种识之叶」。拾取种识之叶的角色元素精通提升${e}点，持续12秒。每20秒至多通过这种方式产生一枚种识之叶。角色处于队伍后台时也能触发。种识之叶的效果无法叠加。`,
      };
    },
    (affix = 1) => {
      let e = 60 + (affix - 1) * 15;
      return [
        {
          label: "种识之叶，元素精通提升",
          describe: `拾取种识之叶的角色元素精通提升${e}点`,
          effect: [{ type: BuffType.MysteryFixed, getValue: () => e }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "盈满之实",
      enkaId: 14417,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Arakalari_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 45.9,
    },
    (affix = 1) => {
      let e = 24 + (affix - 1) * 3;
      return {
        title: "圆满之相",
        text: highlight`触发元素反应后，获得「盈缺」效果：元素精通提升${e}点，攻击力降低5%。每0.3秒至多获得一层盈缺效果，至多叠加5层。未触发元素反应时将每6秒失去一层。角色处于队伍后台时也能触发效果。`,
      };
    },
    (affix = 1) => {
      let e = 24 + (affix - 1) * 3;
      return [
        {
          label: "元素精通提升、攻击力降低",
          describe: `触发元素反应后角色元素精通提升${e}点，攻击力降低5%，至多叠加5层`,
          effect: [
            { type: BuffType.MysteryFixed, getValue: (_, stack) => e * stack },
            { type: BuffType.ATKPrcent, getValue: (_, stack) => -5 * stack },
          ],
          enable: false,
          stackable: true,
          stack: 5,
          limit: 5,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "贯月矢",
      enkaId: 13417,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Arakalari_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 110,
    },
    (affix = 1) => {
      let e = 16 + (affix - 1) * 4 + "%";
      return {
        title: "幽林月影",
        text: highlight`触发燃烧、原激化、超激化、蔓激化、绽放、超绽放或烈绽放后，将在角色周围产生至多存在10秒的「苏生之叶」。拾取苏生之叶的角色攻击力提升${e}，持续12秒。每20秒至多通过这种方式产生一枚苏生之叶。角色处于队伍后台时也能触发。`,
      };
    },
    (affix = 1) => {
      let e = 16 + (affix - 1) * 4;
      return [
        {
          label: "攻击力提升",
          describe: `拾取苏生之叶的角色攻击力提升${e}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => e }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "原木刀",
      enkaId: 11417,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Arakalari_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 30.6,
    },
    (affix = 1) => {
      let e = 60 + (affix - 1) * 15;
      return {
        title: "森林的瑞佑",
        text: highlight`触发燃烧、原激化、超激化、蔓激化、绽放、超绽放或烈绽放后，将在角色周围产生至多存在10秒的「种识之叶」。拾取种识之叶的角色元素精通提升${e}点，持续12秒。每20秒至多通过这种方式产生一枚种识之叶。角色处于队伍后台时也能触发。种识之叶的效果无法叠加。`,
      };
    },
    (affix = 1) => {
      let e = 60 + (affix - 1) * 15;
      return [
        {
          label: "元素精通提升",
          describe: `拾取种识之叶的角色元素精通提升${e}点`,
          effect: [{ type: BuffType.MysteryFixed, getValue: () => e }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "竭泽",
      enkaId: 15418,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Fin_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 45.9,
    },
    (affix = 1) => {
      let a = [80, 100, 120, 140, 160][affix - 1] + "%";
      return {
        title: "网破",
        text: highlight`施放元素战技后，将触发「沿洄」效果，在攻击命中敌人时造成${
          a[affix - 1]
        }攻击力的范围伤害，该效果将在15秒或触发3次范围伤害后移除。每2秒至多通过这种方式造成一次范围伤害，每12秒至多触发一次沿洄。`,
      };
    },
    () => [],
    (affix = 1) => {
      let a = [80, 100, 120, 140, 160][affix - 1] / 100;
      return [
        {
          label: "网破·沿洄",
          rate: {
            atk: [a],
          },
          attackType: AttackType.Other,
          elementType: ElementType.Physical,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "猎人之径",
      enkaId: 15511,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Ayus_Awaken"),
      baseAtk: 542,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL,
      statValue: 44.2,
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1] + "%";
      let e = [160, 200, 240, 280, 320][affix - 1] + "%";
      return {
        title: "兽径的终点",
        text: highlight`获得${a}所有元素伤害加成。重击命中敌人后，将获得「无休止的狩猎」：重击造成的伤害值提高，提高值相当于元素精通数值的${e}。该效果将在生效12次或10秒后消失，每12秒至多获得一次无休止的狩猎。`,
      };
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1];
      let e = [160, 200, 240, 280, 320][affix - 1];
      return [
        {
          label: "元素伤害加成",
          describe: `获得${a}%所有元素伤害加成`,
          effect: [
            { type: BuffType.HydroPrcent, getValue: () => a },
            { type: BuffType.PyroPrcent, getValue: () => a },
            { type: BuffType.ElectroPrcent, getValue: () => a },
            { type: BuffType.AnemoPrcent, getValue: () => a },
            { type: BuffType.CryoPrcent, getValue: () => a },
            { type: BuffType.DendroPrcent, getValue: () => a },
            { type: BuffType.GeoPrcent, getValue: () => a },
          ],
          enable: true,
        },
        {
          label: "重击伤害提高",
          describe: `重击造成的伤害值提高，提高值相当于元素精通数值的${e}%`,
          effect: [
            {
              type: BuffType.StrongFixed,
              getValue: (data) => ((data.elementalMystery + data.elementalMystery_NT) * e) / 100,
            },
          ],
          enable: true,
        },
      ];
    },
    (affix = 1) => {
      return [
        {
          label: "",
          rate: {
            atk: [],
          },
          attackType: AttackType.Other,
          elementType: ElementType.Physical,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "笼钓瓶一心",
      enkaId: 11416,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Youtou_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 41.3,
    },
    () => {
      return {
        title: "澄澄一心传",
        text: highlight`普通攻击、重击或下落攻击命中敌人时，将卷起切落风，造成180%攻击力的范围伤害，并且使攻击力提升15%，持续8秒。该效果每8秒至多触发一次。`,
      };
    },
    () => {
      return [
        {
          label: "攻击力提升",
          describe: `普通攻击、重击或下落攻击命中敌人时，攻击力提升15%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => 15 }],
          enable: false,
        },
      ];
    },
    () => {
      return [
        {
          label: "澄澄一心传·切落风",
          rate: {
            atk: [1.8],
          },
          attackType: AttackType.Other,
          elementType: ElementType.Physical,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "落霞",
      enkaId: 15411,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Fallensun_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 30.6,
    },
    (affix = 1) => {
      let a = ["6%/10%/14%", "7.5%/12.5%/17.5%", "9%/15%/21%", "10.5%/17.5%/24.5%", "12%/20%/28%"][affix - 1];
      return {
        title: "渊中霞彩",
        text: highlight`具有夕暮、流霞、朝晖三种状态，分别能使造成的伤害提升${a}。攻击命中敌人后，将转换为下一种状态，每7秒至多转换一次状态。装备该武器的角色处于队伍后台时该效果依旧能触发转换。`,
      };
    },
    (affix = 1) => {
      let a = ["6%/10%/14%", "7.5%/12.5%/17.5%", "9%/15%/21%", "10.5%/17.5%/24.5%", "12%/20%/28%"][affix - 1];
      let b = [
        [6, 10, 14],
        [7.5, 12.5, 17.5],
        [9, 15, 21],
        [10.5, 17.5, 24.5],
        [12, 20, 28],
      ][affix - 1];
      return [
        {
          label: "造成伤害提升",
          describe: `夕暮、流霞、朝晖三种状态，分别能使造成的伤害提升${a}（分别用0~2层表示）`,
          effect: [
            {
              type: BuffType.GlobalPrcent,
              getValue: (_, stack) => {
                return b[stack];
              },
            },
          ],
          stackable: true,
          stack: 0,
          limit: 2,
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "波乱月白经津",
      enkaId: 11510,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Amenoma_Awaken"),
      baseAtk: 608,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL,
      statValue: 33.1,
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1] + "%";
      let v = [20, 25, 30, 35, 40][affix - 1] + "%";
      return {
        title: "白刃流转",
        text: highlight`获得${a}所有元素伤害加成；队伍中附近的其他角色在施放元素战技时，会为装备该武器的角色产生1层「波穗」效果，至多叠加2层，每0.3秒最多触发1次。装备该武器的角色施放元素战技时，如果有积累的「波穗」效果，则将消耗已有的「波穗」，获得「波乱」：根据消耗的层数，每层提升${v}普通攻击伤害，持续8秒。`,
      };
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1];
      let v = [20, 25, 30, 35, 40][affix - 1];
      return [
        {
          label: "元素伤害加成",
          describe: `获得${a}%所有元素伤害加成`,
          effect: [
            { type: BuffType.HydroPrcent, getValue: () => a },
            { type: BuffType.PyroPrcent, getValue: () => a },
            { type: BuffType.ElectroPrcent, getValue: () => a },
            { type: BuffType.AnemoPrcent, getValue: () => a },
            { type: BuffType.CryoPrcent, getValue: () => a },
            { type: BuffType.DendroPrcent, getValue: () => a },
            { type: BuffType.GeoPrcent, getValue: () => a },
          ],
          enable: true,
        },
        {
          label: "普通攻击伤害提高",
          describe: `消耗已有的「波穗」，获得「波乱」：根据消耗的层数，每层提升${v}%普通攻击伤害`,
          effect: [{ type: BuffType.NormalPrcent, getValue: (_, stack) => v * stack }],
          enable: false,
          stackable: true,
          stack: 2,
          limit: 2,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "证誓之明瞳",
      enkaId: 14415,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Jyanome_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 27.6,
    },
    (affix = 1) => {
      let a = [24, 30, 36, 42, 48][affix - 1] + "%";
      return {
        title: "微光的海渊民",
        text: highlight`施放元素战技后，元素充能效率提升${a}，持续10秒。`,
      };
    },
    (affix = 1) => {
      let a = [24, 30, 36, 42, 48][affix - 1];
      return [
        {
          label: "元素充能效率提升",
          describe: `施放元素战技后，元素充能效率提升${a}%`,
          effect: [{ type: BuffType.ChargeFixed, getValue: () => a }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "神乐之真意",
      enkaId: 14509,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Narukami_Awaken"),
      baseAtk: 608,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 66.2,
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1] + "%";
      return {
        title: "神樱神游神乐舞",
        text: highlight`施放元素战技时，将获得「神乐舞」的效果，使装备该武器的角色的元素战技造成的伤害提高${a}，该效果持续16秒，至多叠加3层。持有3层时，该角色获得${a}所有元素伤害加成。`,
      };
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1];
      return [
        {
          label: "元素战技伤害提高",
          describe: `使装备该武器的角色的元素战技造成的伤害提高${a}%，至多叠加3层`,
          effect: [{ type: BuffType.SkillPrcent, getValue: (_, stack) => a * stack }],
          stackable: true,
          limit: 3,
          stack: 3,
          enable: false,
        },
        {
          label: "元素伤害加成",
          describe: `「神乐舞」叠加到3层后，获得${a}%所有元素伤害加成`,
          effect: [
            { type: BuffType.HydroPrcent, getValue: () => a },
            { type: BuffType.PyroPrcent, getValue: () => a },
            { type: BuffType.ElectroPrcent, getValue: () => a },
            { type: BuffType.AnemoPrcent, getValue: () => a },
            { type: BuffType.CryoPrcent, getValue: () => a },
            { type: BuffType.DendroPrcent, getValue: () => a },
            { type: BuffType.GeoPrcent, getValue: () => a },
          ],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "息灾",
      enkaId: 13507,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Santika_Awaken"),
      baseAtk: 741,
      rarity: Rarity.Five,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 16.5,
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1] + "%";
      let as = [3.2, 4, 4.8, 5.6, 6.4][affix - 1] + "%";
      return {
        title: "灭却之戒法",
        text: highlight`获得${a}所有元素伤害加成；施放元素战技后，获得持续20秒的「圆顿」，攻击力每1秒提升${as}，该攻击力提升效果至多叠加6次。当装备此武器的角色处于队伍后台时，「圆顿」的攻击力提升效果翻倍。`,
      };
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1];
      let as = [3.2, 4, 4.8, 5.6, 6.4][affix - 1];
      return [
        {
          label: "元素伤害加成",
          describe: `获得${a}所有元素伤害加成`,
          effect: [
            { type: BuffType.HydroPrcent, getValue: () => a },
            { type: BuffType.PyroPrcent, getValue: () => a },
            { type: BuffType.ElectroPrcent, getValue: () => a },
            { type: BuffType.AnemoPrcent, getValue: () => a },
            { type: BuffType.CryoPrcent, getValue: () => a },
            { type: BuffType.DendroPrcent, getValue: () => a },
            { type: BuffType.GeoPrcent, getValue: () => a },
          ],
          enable: true,
        },
        {
          label: "攻击力提升",
          describe: `施放元素战技后，攻击力每1秒提升${as}%，该攻击力提升效果至多叠加6次`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => as * stack }],
          stackable: true,
          limit: 6,
          stack: 6,
          enable: false,
        },
        {
          label: "攻击力提升效果翻倍",
          describe: `上述效果在角色处于后台时翻倍（注意使层数保持一致）`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => as * stack }],
          stackable: true,
          limit: 6,
          stack: 6,
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "赤角石溃杵",
      enkaId: 12510,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Itadorimaru_Awaken"),
      baseAtk: 542,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 88.2,
    },
    (affix = 1) => {
      let a = [28, 35, 42, 49, 56][affix - 1] + "%";
      let d = [40, 50, 60, 70, 80][affix - 1] + "%";
      return {
        title: "御伽大王御伽话",
        text: highlight`防御力提高${a}；普通攻击与重击造成的伤害值提高，提高数值相当于防御力的${d}。`,
      };
    },
    (affix = 1) => {
      let a = [28, 35, 42, 49, 56][affix - 1];
      let d = [40, 50, 60, 70, 80][affix - 1];
      return [
        {
          label: "防御力提高",
          describe: `防御力提高${a}%`,
          effect: [{ type: BuffType.DEFPrcent, getValue: () => d }],
          enable: true,
        },
        {
          label: "普通攻击与重击造成的伤害值提高",
          describe: `普通攻击与重击造成的伤害值提高，提高数值相当于防御力的${d}%`,
          effect: [
            {
              type: BuffType.NormalFixed,
              getValue: (data) => {
                return ((data.baseDEF + data.extraDEF + data.extraDEF_NT) * d) / 100;
              },
              actionOn: ActionOn.Indirect,
            },
            {
              type: BuffType.StrongFixed,
              getValue: (data) => {
                return ((data.baseDEF + data.extraDEF + data.extraDEF_NT) * d) / 100;
              },
              actionOn: ActionOn.Indirect,
            },
          ],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "辰砂之纺锤",
      enkaId: 11415,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Opus_Awaken"),
      baseAtk: 454,
      rarity: Rarity.Four,
      appendPropId: AppendProp.DEFENSE_PERCENT,
      statValue: 69,
    },
    (affix = 1) => {
      let a = [40, 50, 60, 70, 80][affix - 1] + "%";
      return {
        title: "无垢之心",
        text: highlight`元素战技造成的伤害值提高，提高数值相当于防御力的${a}。该效果每1.5秒最多触发一次，并将在元素战技造成伤害后的0.1秒后清除效果。`,
      };
    },
    (affix = 1) => {
      let a = [40, 50, 60, 70, 80][affix - 1];
      return [
        {
          label: "元素战技造成的伤害值提高",
          describe: `提高数值相当于防御力的${a}%`,
          effect: [
            {
              type: BuffType.SkillFixed,
              getValue: (data) => {
                return ((data.baseDEF + data.extraDEF + data.extraDEF_NT) * a) / 100;
              },
              actionOn: ActionOn.Indirect,
            },
          ],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
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
          label: "全队攻击力提升",
          describe: `全队攻击力提升${x}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => x }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
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
          label: "全队元素精通提升",
          describe: `元素精通提高${x}点`,
          effect: [{ type: BuffType.MysteryFixed, getValue: () => x }],
          enable: false,
        },
        {
          label: "全队攻击力提升",
          describe: `全队攻击力提升${c}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => c }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "护摩之杖",
      enkaId: 13501,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Homa_Awaken"),
      baseAtk: 608,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 66.2,
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1] + "%";
      let b = [0.8, 1, 1.2, 1.4, 1.6][affix - 1] + "%";
      let c = [1, 1.2, 1.4, 1.6, 1.8][affix - 1] + "%";
      return {
        title: "无羁的朱赤之蝶",
        text: highlight`生命值提升${a}。此外，基于装备该武器的角色生命值上限的${b}，获得攻击力加成。当装备该武器的角色生命值低于50%时，进一步获得${c}基于生命值上限的攻击力提升。`,
      };
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1];
      let b = [0.8, 1, 1.2, 1.4, 1.6][affix - 1];
      let c = [1, 1.2, 1.4, 1.6, 1.8][affix - 1];
      return [
        {
          label: "生命值提升",
          describe: `生命值提升${a}%`,
          effect: [{ type: BuffType.HPPrcent, getValue: () => a }],
          enable: true,
        },
        {
          label: "攻击力提升",
          describe: `基于装备该武器的角色生命值上限的${b}%，获得攻击力加成`,
          effect: [
            {
              type: BuffType.ATKFixed,
              getValue: (data) => {
                return ((data.baseHP + data.extraHP) * b) / 100;
              },
              actionOn: ActionOn.Indirect,
              transform: true,
            },
          ],
          enable: true,
        },
        {
          label: "攻击力进一步提升",
          describe: `装备该武器的角色生命值低于50%时，进一步获得${c}%基于生命值上限的攻击力提升`,
          effect: [
            {
              type: BuffType.ATKFixed,
              getValue: (data) => {
                return ((data.baseHP + data.extraHP) * c) / 100;
              },
              actionOn: ActionOn.Indirect,
              transform: true,
            },
          ],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "断浪长鳍",
      enkaId: 13416,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Maria_Awaken"),
      baseAtk: 620,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 13.8,
    },
    (affix = 1) => {
      let a = [0.12, 0.15, 0.18, 0.21, 0.24][affix - 1] + "%";
      let b = [40, 50, 60, 70, 80][affix - 1] + "%";
      return {
        title: "驭浪的海祇民",
        text: highlight`队伍中所有角色的元素能量上限的总和，每1点能使装备此武器的角色的元素爆发造成的伤害提高${a}，通过这种方式，元素爆发造成的伤害至多提高${b}。`,
      };
    },
    (affix = 1) => {
      let a = [0.12, 0.15, 0.18, 0.21, 0.24][affix - 1];
      let b = [40, 50, 60, 70, 80][affix - 1];
      return [
        {
          label: "元素爆发造成的伤害提高",
          describe: `所有角色的元素能量上限的总和，每1点能使装备此武器的角色的元素爆发造成的伤害提高${a}%，至多提高${b}%（层数代表能量总和）`,
          effect: [
            {
              type: BuffType.BurstPrcent,
              getValue: (_, stack) => {
                return Math.min(stack * a, b);
              },
            },
          ],
          stackable: true,
          limit: 340,
          stack: 0,
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "曚云之月",
      enkaId: 15416,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Maria_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 27.6,
    },
    (affix = 1) => {
      let a = [0.12, 0.15, 0.18, 0.21, 0.24][affix - 1] + "%";
      let b = [40, 50, 60, 70, 80][affix - 1] + "%";
      return {
        title: "驭浪的海祇民",
        text: highlight`队伍中所有角色的元素能量上限的总和，每1点能使装备此武器的角色的元素爆发造成的伤害提高${a}，通过这种方式，元素爆发造成的伤害至多提高${b}。`,
      };
    },
    (affix = 1) => {
      let a = [0.12, 0.15, 0.18, 0.21, 0.24][affix - 1];
      let b = [40, 50, 60, 70, 80][affix - 1];
      return [
        {
          label: "元素爆发造成的伤害提高",
          describe: `所有角色的元素能量上限的总和，每1点能使装备此武器的角色的元素爆发造成的伤害提高${a}%，至多提高${b}%（层数代表能量总和）`,
          effect: [
            {
              type: BuffType.BurstPrcent,
              getValue: (_, stack) => {
                return Math.min(stack * a, b);
              },
            },
          ],
          stackable: true,
          limit: 340,
          stack: 0,
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "冬极白星",
      enkaId: 15507,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Worldbane_Awaken"),
      baseAtk: 608,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL,
      statValue: 33.1,
    },
    (affix = 1) => {
      let sk = [12, 15, 18, 21, 24][affix - 1] + "%";
      let at = ["10/20/30/48", "12.5/25/37.5/60", "15/30/45/72", "17.5/35/52.5/84", "20/40/60/96"][affix - 1] + "%";
      return {
        title: "极昼的先兆者",
        text: highlight`元素战技和元素爆发造成的伤害提高${sk}；普通攻击、重击、元素战技或元素爆发命中敌人后，将产生1层持续12秒的「白夜极星」效果。处于1/2/3/4层「白夜极星」效果下时，攻击力将提高${at}。由普通攻击、重击、元素战技或元素爆发产生的「白夜极星」将分别独立存在。`,
      };
    },
    (affix = 1) => {
      let sk = [12, 15, 18, 21, 24][affix - 1];
      let at = [
        [10, 20, 30, 48],
        [12.5, 25, 37.5, 60],
        [15, 30, 45, 72],
        [17.5, 35, 52.5, 84],
        [20, 40, 60, 96],
      ][affix - 1];
      return [
        {
          label: "元素战技和元素爆发造成的伤害提高",
          describe: `元素战技和元素爆发造成的伤害提高${sk}%`,
          effect: [
            { type: BuffType.SkillPrcent, getValue: () => sk },
            { type: BuffType.BurstPrcent, getValue: () => sk },
          ],
          enable: true,
        },
        {
          label: "攻击力提高",
          describe: `处于1/2/3/4层「白夜极星」效果下时，攻击力将提高${at.join("/")}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => at[stack - 1] || 0 }],
          enable: false,
          stackable: true,
          limit: 4,
          stack: 4,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "恶王丸",
      enkaId: 12416,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Maria_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 41.3,
    },
    (affix = 1) => {
      let a = [0.12, 0.15, 0.18, 0.21, 0.24][affix - 1] + "%";
      let b = [40, 50, 60, 70, 80][affix - 1] + "%";
      return {
        title: "驭浪的海祇民",
        text: highlight`队伍中所有角色的元素能量上限的总和，每1点能使装备此武器的角色的元素爆发造成的伤害提高${a}，通过这种方式，元素爆发造成的伤害至多提高${b}。`,
      };
    },
    (affix = 1) => {
      let a = [0.12, 0.15, 0.18, 0.21, 0.24][affix - 1];
      let b = [40, 50, 60, 70, 80][affix - 1];
      return [
        {
          label: "元素爆发造成的伤害提高",
          describe: `所有角色的元素能量上限的总和，每1点能使装备此武器的角色的元素爆发造成的伤害提高${a}%，至多提高${b}%（层数代表能量总和）`,
          effect: [
            {
              type: BuffType.BurstPrcent,
              getValue: (_, stack) => {
                return Math.min(stack * a, b);
              },
            },
          ],
          stackable: true,
          limit: 340,
          stack: 0,
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
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
  ),
  createWeapon(
    {
      name: "「渔获」",
      enkaId: 13415,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Mori_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 45.9,
    },
    (affix = 1) => {
      let a = [16, 20, 24, 28, 32][affix - 1] + "%";
      let b = [6, 7.5, 9, 10.5, 12][affix - 1] + "%";
      return {
        title: "船歌",
        text: highlight`元素爆发造成的伤害提升${a}，元素爆发的暴击率提升${b}。`,
      };
    },
    (affix = 1) => {
      let a = [16, 20, 24, 28, 32][affix - 1];
      let b = [6, 7.5, 9, 10.5, 12][affix - 1];
      return [
        {
          label: "元素爆发的伤害、暴击率提升",
          describe: `元素爆发造成的伤害提升${a}%，元素爆发的暴击率提升${b}%`,
          effect: [
            { type: BuffType.BurstPrcent, getValue: () => a },
            { type: BuffType.BurstCritcal, getValue: () => b },
          ],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "衔珠海皇",
      enkaId: 12412,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_MillenniaTuna_Awaken"),
      baseAtk: 454,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 55.1,
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1] + "%";
      let b = [100, 125, 150, 175, 200][affix - 1] + "%";
      return {
        title: "海洋的胜利",
        text: highlight`元素爆发造成的伤害提升${a}。元素爆发命中敌人时，有100%概率召唤大鲔冲击，造成${b}攻击力的范围伤害。该效果每15秒至多触发一次。`,
      };
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1];
      let b = [100, 125, 150, 175, 200][affix - 1];
      return [
        {
          label: "元素爆发的伤害提升",
          describe: `元素爆发造成的伤害提升${a}%`,
          effect: [{ type: BuffType.BurstPrcent, getValue: () => a }],
          enable: true,
        },
      ];
    },

    (affix = 1) => {
      let b = [100, 125, 150, 175, 200][affix - 1] / 100;
      return [
        {
          label: "海洋的胜利·大鲔冲击",
          rate: {
            atk: [b],
          },
          attackType: AttackType.Other,
          elementType: ElementType.Physical,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "飞雷之弦振",
      enkaId: 15509,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Narukami_Awaken"),
      baseAtk: 608,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 66.2,
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1] + "%";
      let b =
        [
          [12, 24, 40],
          [15, 30, 50],
          [18, 36, 60],
          [21, 42, 70],
          [24, 48, 80],
        ][affix - 1].join("/") + "%";
      return {
        title: "飞雷御执",
        text: highlight`攻击力提高${a}，并能获得「飞雷之巴印」的威势。
        飞雷之巴印：持有1/2/3层飞雷之巴印时，普通攻击造成的伤害提高${b}。
        在下列情况下，角色将各获得1层飞雷之巴印：
          普通攻击造成伤害时，持续5秒；
          施放元素战技时，持续10秒；
          此外，角色元素能量低于100%时，将获得1层飞雷之巴印，此飞雷之巴印会在角色的元素能量充满时消失。
        每层飞雷之巴印的持续时间独立计算。`,
      };
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1];
      let b = [
        [12, 24, 40],
        [15, 30, 50],
        [18, 36, 60],
        [21, 42, 70],
        [24, 48, 80],
      ][affix - 1];
      return [
        {
          label: "攻击力提升",
          describe: `攻击力提高${a}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
          enable: true,
        },
        {
          label: "普通攻击造成的伤害提升",
          describe: `持有1/2/3层飞雷之巴印时，普通攻击造成的伤害提高${b.join("/")}%`,
          effect: [
            {
              type: BuffType.NormalPrcent,
              getValue: (_, stack) => {
                return b[stack - 1] || 0;
              },
            },
          ],
          enable: false,
          stackable: true,
          stack: 3,
          limit: 3,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "雾切之回光",
      enkaId: 11509,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Narukami_Awaken"),
      baseAtk: 674,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 44.1,
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1] + "%";
      let b =
        [
          [8, 16, 28],
          [10, 20, 35],
          [12, 24, 42],
          [14, 28, 49],
          [16, 32, 56],
        ][affix - 1].join("/") + "%";
      return {
        title: "雾切御腰物",
        text: highlight`获得${a}所有元素伤害加成，并能获得「雾切之巴印」的威势。
        雾切之巴印：持有1/2/3层雾切之巴印时,获得${b}自己的元素类型的元素伤害加成。
        
        在下列情况下，角色将各获得1层雾切之巴印：
          普通攻击造成元素伤害时，持续5秒；
          施放元素爆发时，持续10秒；
          此外，角色元素能量低于100%时，将获得1层雾切之巴印，此雾切之巴印会在角色的元素能量充满时消失。
        每层雾切之巴印的持续时间独立计算。`,
      };
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1];
      let b = [
        [8, 16, 28],
        [10, 20, 35],
        [12, 24, 42],
        [14, 28, 49],
        [16, 32, 56],
      ][affix - 1];

      let getB = (type: BuffType, element: ElementType) => {
        return {
          enable: false,
          stackable: true,
          effect: [
            {
              type,
              getValue: (_, stack) => {
                return b[stack - 1] || 0;
              },
            },
          ],
          condition: (data) => data.element === element,
          stack: 3,
          limit: 3,
          label: "元素伤害进一步加成",
          describe: `持有1/2/3层雾切之巴印时,获得${b}%自己的元素类型的元素伤害加成`,
        };
      };
      return [
        {
          label: "元素伤害加成",
          describe: `获得${a}%所有元素伤害加成`,
          effect: [
            { type: BuffType.HydroPrcent, getValue: () => a },
            { type: BuffType.PyroPrcent, getValue: () => a },
            { type: BuffType.ElectroPrcent, getValue: () => a },
            { type: BuffType.AnemoPrcent, getValue: () => a },
            { type: BuffType.CryoPrcent, getValue: () => a },
            { type: BuffType.DendroPrcent, getValue: () => a },
            { type: BuffType.GeoPrcent, getValue: () => a },
          ],
          enable: true,
        },
        getB(BuffType.HydroPrcent, ElementType.Hydro),
        getB(BuffType.PyroPrcent, ElementType.Pyro),
        getB(BuffType.AnemoPrcent, ElementType.Anemo),
        getB(BuffType.CryoPrcent, ElementType.Cryo),
        getB(BuffType.ElectroPrcent, ElementType.Electro),
        getB(BuffType.GeoPrcent, ElementType.Geo),
        getB(BuffType.DendroPrcent, ElementType.Dendro),
      ];
    }
  ),
  createWeapon(
    {
      name: "桂木斩长正",
      enkaId: 12414,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Bakufu_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 45.9,
    },
    (affix = 1) => {
      let a = [6, 7.5, 9, 10.5, 12][affix - 1] + "%";
      let b = [3, 3.5, 4, 4.5, 5][affix - 1];
      return {
        title: "名士振舞",
        text: highlight`元素战技造成的伤害提升${a}。元素战技命中后，角色流失3点元素能量，并在此后的6秒内，每2秒恢复${b}点元素能量。该效果每10秒至多触发一次，角色处于队伍后台也能触发。`,
      };
    },
    (affix = 1) => {
      let a = [6, 7.5, 9, 10.5, 12][affix - 1];
      return [
        {
          label: "元素战技造成的伤害提升",
          describe: `元素战技造成的伤害提升${a}%`,
          effect: [{ type: BuffType.SkillPrcent, getValue: () => a }],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "白辰之环",
      enkaId: 14414,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Bakufu_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 30.6,
    },
    (affix = 1) => {
      let a = [10, 12.5, 15, 17.5, 20][affix - 1] + "%";
      return {
        title: "樱之斋宫",
        text: highlight`装备该武器的角色触发雷元素相关反应后，队伍中附近的与该元素反应相关的元素类型的角色，获得${a}对应元素的元素伤害加成，持续6秒。通过这种方式，角色获得的元素伤害加成无法叠加。`,
      };
    },
    (affix = 1) => {
      let a = [10, 12.5, 15, 17.5, 20][affix - 1];
      return [
        {
          label: "元素伤害加成",
          describe: `触发雷元素相关反应后，获得${a}%相关反应元素的伤害加成（在本计算器中，该增益视为全元素增伤，注意区分）`,
          effect: [
            { type: BuffType.HydroPrcent, getValue: () => a },
            { type: BuffType.PyroPrcent, getValue: () => a },
            { type: BuffType.ElectroPrcent, getValue: () => a },
            { type: BuffType.AnemoPrcent, getValue: () => a },
            { type: BuffType.CryoPrcent, getValue: () => a },
            { type: BuffType.DendroPrcent, getValue: () => a },
            { type: BuffType.GeoPrcent, getValue: () => a },
          ],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "喜多院十文字",
      enkaId: 13414,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Bakufu_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 110,
    },
    (affix = 1) => {
      let a = [6, 7.5, 9, 10.5, 12][affix - 1] + "%";
      let b = [3, 3.5, 4, 4.5, 5][affix - 1];
      return {
        title: "名士振舞",
        text: highlight`元素战技造成的伤害提升${a}。元素战技命中后，角色流失3点元素能量，并在此后的6秒内，每2秒恢复${b}点元素能量。该效果每10秒至多触发一次，角色处于队伍后台也能触发。`,
      };
    },
    (affix = 1) => {
      let a = [6, 7.5, 9, 10.5, 12][affix - 1];
      return [
        {
          label: "元素战技造成的伤害提升",
          describe: `元素战技造成的伤害提升${a}%`,
          effect: [{ type: BuffType.SkillPrcent, getValue: () => a }],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "天目影打刀",
      enkaId: 11414,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Bakufu_Awaken"),
      baseAtk: 454,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 55.1,
    },
    (affix = 1) => {
      let b = [6, 7.5, 9, 10.5, 12][affix - 1];
      return {
        title: "岩藏之胤",
        text: highlight` 施放元素战技后，获得1个胤种，该效果每5秒至多触发一次。胤种持续30秒，至多同时存在3个。施放元素爆发后，会清除持有的所有胤种，并在2秒之后，基于消耗的胤种数量，每个为该角色恢复${b}点元素能量。`,
      };
    }
  ),
  createWeapon(
    {
      name: "破魔之弓",
      enkaId: 15414,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Bakufu_Awaken"),
      baseAtk: 454,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 55.1,
    },
    (affix = 1) => {
      let a = [16, 20, 24, 28, 32][affix - 1] + "%";
      let b = [12, 15, 18, 21, 24][affix - 1] + "%";
      return {
        title: "浅濑之弭",
        text: highlight`普通攻击造成的伤害提升${a}，重击造成的伤害提升${b}。当装备该武器的角色元素能量等于100%时，这个效果提升100%。`,
      };
    },
    (affix = 1) => {
      let a = [16, 20, 24, 28, 32][affix - 1];
      let b = [12, 15, 18, 21, 24][affix - 1];
      return [
        {
          label: "普通攻击、重击造成的伤害提升",
          describe: `普通攻击造成的伤害提升${a}%，重击造成的伤害提升${b}%`,
          effect: [
            { type: BuffType.NormalPrcent, getValue: () => a },
            { type: BuffType.StrongPrcent, getValue: () => b },
          ],
          enable: true,
        },
        {
          label: "能量等于100%时，上述效果提升100%",
          describe: `普通攻击造成的伤害提升${a}%，重击造成的伤害提升${b}%`,
          effect: [
            { type: BuffType.NormalPrcent, getValue: () => a },
            { type: BuffType.StrongPrcent, getValue: () => b },
          ],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "降临之剑",
      enkaId: 12513,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Psalmus_Awaken"),
      baseAtk: 440,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 35.2,
    },
    (affix = 1) => {
      return {
        title: "降世",
        text: highlight`仅在"PlayStation Network"游玩时生效。
        <br />普通攻击与重击命中敌人后有50%概率在小范围内造成200%攻击力的伤害。该效果每10秒只能触发一次；此外，旅行者装备降临之剑时，攻击力提升66点。`,
      };
    },
    (affix = 1) => {
      return [
        {
          label: "旅行者基础攻击力提升66点",
          effect: [{ type: BuffType.ATKBase, getValue: () => 66, actionOn: ActionOn.Front }],
          enable: false,
        },
      ];
    },
    (affix = 1) => {
      return [
        {
          label: "降临之剑·降世",
          rate: {
            atk: [2],
          },
          attackType: AttackType.Other,
          elementType: ElementType.Physical,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "天空之刃",
      enkaId: 11502,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Dvalin_Awaken"),
      baseAtk: 608,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 55.1,
    },
    (affix = 1) => {
      let a = [4, 5, 6, 7, 8][affix - 1] + "%";
      let b = [20, 25, 30, 35, 40][affix - 1] + "%";
      return {
        title: "穿刺高天的利齿",
        text: highlight`暴击率提升${a};施放元素爆发时，获得破空之势：移动速度提升10%，攻击速度提升10%，普通攻击与重击命中时，额外造成${b}攻击力的伤害，持续12秒。`,
      };
    },
    (affix = 1) => {
      let a = [4, 5, 6, 7, 8][affix - 1];
      return [
        {
          label: "暴击率提升",
          describe: `暴击率提升${a}%`,
          effect: [{ type: BuffType.Critcal, getValue: () => a }],
          enable: true,
        },
      ];
    },
    (affix = 1) => {
      let b = [20, 25, 30, 35, 40][affix - 1] / 100;
      return [
        {
          label: "天空之刃·破空之势",
          rate: {
            atk: [b],
          },
          attackType: AttackType.Other,
          elementType: ElementType.Physical,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "狼的末路",
      enkaId: 12502,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Wolfmound_Awaken"),
      baseAtk: 608,
      rarity: Rarity.Five,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 49.6,
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1] + "%";
      let b = [40, 50, 60, 70, 80][affix - 1] + "%";
      return {
        title: "如狼般狩猎者",
        text: highlight`攻击力提高${a}；攻击命中生命值低于30%的敌人时队伍中所有成员的攻击力提高${b}，持续12秒。该效果30秒只能触发一次。`,
      };
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1];
      let b = [40, 50, 60, 70, 80][affix - 1];
      return [
        {
          label: "攻击力提高",
          describe: `攻击力提高${a}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
          enable: true,
        },
        {
          label: "全队攻击力提高",
          describe: `攻击命中生命值低于30%的敌人时队伍中所有成员的攻击力提高${b}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => b }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "阿莫斯之弓",
      enkaId: 15502,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Amos_Awaken"),
      baseAtk: 608,
      rarity: Rarity.Five,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 49.6,
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1] + "%";
      let b = [8, 10, 12, 14, 16][affix - 1] + "%";
      return {
        title: "矢志不忘",
        text: highlight`普通攻击与重击造成的伤害提升${a}；普通攻击与重击的箭矢发射后每经过0.1秒，伤害还会提升${b}，至多提升5次。`,
      };
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1];
      let b = [8, 10, 12, 14, 16][affix - 1];
      return [
        {
          label: "普通攻击与重击造成的伤害提升",
          describe: `普通攻击与重击造成的伤害提升${a}%`,
          effect: [
            { type: BuffType.NormalPrcent, getValue: () => a },
            { type: BuffType.StrongPrcent, getValue: () => a },
          ],
          enable: true,
        },
        {
          label: "普通攻击与重击的箭矢造成的伤害提升",
          describe: `发射后每经过0.1秒，伤害还会提升${b}%，至多提升5次`,
          effect: [
            { type: BuffType.NormalPrcent, getValue: (_, stack) => stack * b },
            { type: BuffType.StrongPrcent, getValue: (_, stack) => stack * b },
          ],
          enable: false,
          stackable: true,
          stack: 5,
          limit: 5,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "天空之卷",
      enkaId: 14501,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Dvalin_Awaken"),
      baseAtk: 674,
      rarity: Rarity.Five,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 33.1,
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1] + "%";
      let b = [160, 200, 240, 280, 320][affix - 1] + "%";
      return {
        title: "浮游四方的灵云",
        text: highlight`元素伤害加成提升${a}；普通攻击命中时，有50%的概率获得高天流云的青睐，在15秒内主动攻击附近的敌人，造成等同于${b}攻击力的伤害。该效果每30秒只能触发一次。`,
      };
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1];
      return [
        {
          label: "元素伤害加成",
          describe: `获得${a}%所有元素伤害加成`,
          effect: [
            { type: BuffType.HydroPrcent, getValue: () => a },
            { type: BuffType.PyroPrcent, getValue: () => a },
            { type: BuffType.ElectroPrcent, getValue: () => a },
            { type: BuffType.AnemoPrcent, getValue: () => a },
            { type: BuffType.CryoPrcent, getValue: () => a },
            { type: BuffType.DendroPrcent, getValue: () => a },
            { type: BuffType.GeoPrcent, getValue: () => a },
          ],
          enable: true,
        },
      ];
    },
    (affix = 1) => {
      let b = [160, 200, 240, 280, 320][affix - 1] / 100;
      return [
        {
          label: "天空之卷",
          rate: {
            atk: [b],
          },
          attackType: AttackType.Other,
          elementType: ElementType.Physical,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "天空之傲",
      enkaId: 12501,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Dvalin_Awaken"),
      baseAtk: 674,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 36.8,
    },
    (affix = 1) => {
      let a = [8, 10, 12, 14, 16][affix - 1] + "%";
      let b = [80, 100, 120, 140, 160][affix - 1] + "%";
      return {
        title: "斩裂晴空的龙脊",
        text: highlight`造成的伤害提高${a}；施放元素爆发后：普通攻击和重击命中时会发出真空刃，对路径上的敌人造成${b}攻击力的伤害，持续20秒或直至发出8次真空刃。`,
      };
    },
    (affix = 1) => {
      let a = [8, 10, 12, 14, 16][affix - 1];
      return [
        {
          label: "造成的伤害提高",
          describe: `造成的伤害提高${a}%`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => a }],
          enable: true,
        },
      ];
    },
    (affix = 1) => {
      let b = [80, 100, 120, 140, 160][affix - 1] / 100;
      return [
        {
          label: "天空之傲·真空刃",
          rate: {
            atk: [b],
          },
          attackType: AttackType.Other,
          elementType: ElementType.Physical,
        },
      ];
    }
  ),
  createWeapon(
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
      let b = [200, 230, 260, 290, 320][affix - 1] / 100;
      return [
        {
          label: "西风鹰之魂",
          rate: {
            atk: [b],
          },
          attackType: AttackType.Other,
          elementType: ElementType.Physical,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "和璞鸢",
      enkaId: 13505,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Morax_Awaken"),
      baseAtk: 674,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL,
      statValue: 22.1,
    },
    (affix = 1) => {
      let a = [3.2, 3.9, 4.6, 5.3, 6][affix - 1] + "%";
      let b = [12, 15, 18, 21, 24][affix - 1] + "%";
      return {
        title: "昭理的鸢之枪",
        text: highlight`命中敌人时自身攻击力提高${a}，持续6秒，最高可以叠加7层。该效果每0.3秒最多触发一次。满层状态时伤害提升${b}。`,
      };
    },
    (affix = 1) => {
      let a = [3.2, 3.9, 4.6, 5.3, 6][affix - 1];
      let b = [12, 15, 18, 21, 24][affix - 1];
      return [
        {
          label: "命中敌人时自身攻击力提高",
          describe: `命中敌人时自身攻击力提高${a}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => stack * a }],
          stackable: true,
          limit: 7,
          stack: 7,
          enable: false,
        },
        {
          label: "满层状态时伤害提升",
          describe: `满层状态时伤害提升${b}%`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => b }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "四风原典",
      enkaId: 14502,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Fourwinds_Awaken"),
      baseAtk: 608,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL,
      statValue: 33.1,
    },
    (affix = 1) => {
      let a = [8, 10, 12, 14, 16][affix - 1] + "%";
      return {
        title: "无边际的眷顾",
        text: highlight`移动速度提高10%；在场上每4秒获得${a}元素伤害加成。该效果最多叠加4层，持续直到角色倒下或离场。`,
      };
    },
    (affix = 1) => {
      let a = [8, 10, 12, 14, 16][affix - 1];
      return [
        {
          label: "元素伤害加成提高",
          describe: `在场上每4秒获得${a}%元素伤害加成`,
          effect: [
            { type: BuffType.HydroPrcent, getValue: (_, stack) => stack * a },
            { type: BuffType.PyroPrcent, getValue: (_, stack) => stack * a },
            { type: BuffType.ElectroPrcent, getValue: (_, stack) => stack * a },
            { type: BuffType.AnemoPrcent, getValue: (_, stack) => stack * a },
            { type: BuffType.CryoPrcent, getValue: (_, stack) => stack * a },
            { type: BuffType.DendroPrcent, getValue: (_, stack) => stack * a },
            { type: BuffType.GeoPrcent, getValue: (_, stack) => stack * a },
          ],
          stackable: true,
          limit: 4,
          stack: 4,
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "天空之翼",
      enkaId: 15501,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Dvalin_Awaken"),
      baseAtk: 674,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL,
      statValue: 22.1,
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1] + "%";
      let b = [60, 70, 80, 90, 100][affix - 1] + "%";
      let c = [4, 3.5, 3, 2.5, 2][affix - 1];
      return {
        title: "回响长天的诗歌",
        text: highlight`暴击伤害提高${a}；攻击命中时有${b}概率造成125%攻击力的小范围物理伤害，该效果每${c}秒只能触发一次。`,
      };
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1];
      return [
        {
          label: "暴击伤害提高",
          describe: `暴击伤害提高${a}%`,
          effect: [{ type: BuffType.CritcalHurt, getValue: () => a }],
          enable: true,
        },
      ];
    },
    (affix = 1) => {
      return [
        {
          label: "天空之翼",
          rate: {
            atk: [1.25],
          },
          attackType: AttackType.Other,
          elementType: ElementType.Physical,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "尘世之锁",
      enkaId: 14504,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Kunwu_Awaken"),
      baseAtk: 608,
      rarity: Rarity.Five,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 49.6,
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1] + "%";
      let b = [4, 5, 6, 7, 8][affix - 1] + "%";
      return {
        title: "金璋皇极",
        text: highlight`护盾强效提升${a}。攻击命中后的8秒内，攻击力提升${b}。该效果至多可叠加5层，每0.3秒只能触发一次。此外，处于护盾庇护下时，该效果的攻击力提升效果提高100%。`,
      };
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1];
      let b = [4, 5, 6, 7, 8][affix - 1];
      return [
        {
          label: "护盾强效提升",
          describe: `护盾强效提升${a}%`,
          effect: [{ type: BuffType.ShieldStrong, getValue: () => a }],
          enable: true,
        },
        {
          label: "攻击力提升",
          describe: `攻击命中后的8秒内，攻击力提升${b}%。该效果至多可叠加5层`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => stack * b }],
          enable: false,
          stackable: true,
          stack: 5,
          limit: 5,
        },
        {
          label: "攻击力提升效果提升100%",
          describe: `处于护盾庇护下时，上述效果的攻击力提升效果提高100%（注意层数保持一致）`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => stack * b }],
          enable: false,
          stackable: true,
          stack: 5,
          limit: 5,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "无工之剑",
      enkaId: 12504,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Kunwu_Awaken"),
      baseAtk: 608,
      rarity: Rarity.Five,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 49.6,
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1] + "%";
      let b = [4, 5, 6, 7, 8][affix - 1] + "%";
      return {
        title: "金璋皇极",
        text: highlight`护盾强效提升${a}。攻击命中后的8秒内，攻击力提升${b}。该效果至多可叠加5层，每0.3秒只能触发一次。此外，处于护盾庇护下时，该效果的攻击力提升效果提高100%。`,
      };
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1];
      let b = [4, 5, 6, 7, 8][affix - 1];
      return [
        {
          label: "护盾强效提升",
          describe: `护盾强效提升${a}%`,
          effect: [{ type: BuffType.ShieldStrong, getValue: () => a }],
          enable: true,
        },
        {
          label: "攻击力提升",
          describe: `攻击命中后的8秒内，攻击力提升${b}%。该效果至多可叠加5层`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => stack * b }],
          enable: false,
          stackable: true,
          stack: 5,
          limit: 5,
        },
        {
          label: "攻击力提升效果提升100%",
          describe: `处于护盾庇护下时，上述效果的攻击力提升效果提高100%（注意层数保持一致）`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => stack * b }],
          enable: false,
          stackable: true,
          stack: 5,
          limit: 5,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "贯虹之槊",
      enkaId: 13504,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Kunwu_Awaken"),
      baseAtk: 608,
      rarity: Rarity.Five,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 49.6,
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1] + "%";
      let b = [4, 5, 6, 7, 8][affix - 1] + "%";
      return {
        title: "金璋皇极",
        text: highlight`护盾强效提升${a}。攻击命中后的8秒内，攻击力提升${b}。该效果至多可叠加5层，每0.3秒只能触发一次。此外，处于护盾庇护下时，该效果的攻击力提升效果提高100%。`,
      };
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1];
      let b = [4, 5, 6, 7, 8][affix - 1];
      return [
        {
          label: "护盾强效提升",
          describe: `护盾强效提升${a}%`,
          effect: [{ type: BuffType.ShieldStrong, getValue: () => a }],
          enable: true,
        },
        {
          label: "攻击力提升",
          describe: `攻击命中后的8秒内，攻击力提升${b}%。该效果至多可叠加5层`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => stack * b }],
          enable: false,
          stackable: true,
          stack: 5,
          limit: 5,
        },
        {
          label: "攻击力提升效果提升100%",
          describe: `处于护盾庇护下时，上述效果的攻击力提升效果提高100%（注意层数保持一致）`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => stack * b }],
          enable: false,
          stackable: true,
          stack: 5,
          limit: 5,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "斫峰之刃",
      enkaId: 11504,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Kunwu_Awaken"),
      baseAtk: 608,
      rarity: Rarity.Five,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 49.6,
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1] + "%";
      let b = [4, 5, 6, 7, 8][affix - 1] + "%";
      return {
        title: "金璋皇极",
        text: highlight`护盾强效提升${a}。攻击命中后的8秒内，攻击力提升${b}。该效果至多可叠加5层，每0.3秒只能触发一次。此外，处于护盾庇护下时，该效果的攻击力提升效果提高100%。`,
      };
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1];
      let b = [4, 5, 6, 7, 8][affix - 1];
      return [
        {
          label: "护盾强效提升",
          describe: `护盾强效提升${a}%`,
          effect: [{ type: BuffType.ShieldStrong, getValue: () => a }],
          enable: true,
        },
        {
          label: "攻击力提升",
          describe: `攻击命中后的8秒内，攻击力提升${b}%。该效果至多可叠加5层`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => stack * b }],
          enable: false,
          stackable: true,
          stack: 5,
          limit: 5,
        },
        {
          label: "攻击力提升效果提升100%",
          describe: `处于护盾庇护下时，上述效果的攻击力提升效果提高100%（注意层数保持一致）`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => stack * b }],
          enable: false,
          stackable: true,
          stack: 5,
          limit: 5,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "磐岩结绿",
      enkaId: 11505,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Morax_Awaken"),
      baseAtk: 542,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL,
      statValue: 44.1,
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1] + "%";
      let b = [1.2, 1.5, 1.8, 2.1, 2.4][affix - 1] + "%";
      return {
        title: "护国的无垢之心",
        text: highlight`生命值提升${a}。此外，基于装备该武器的角色生命值上限的${b}，获得攻击力加成。`,
      };
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1];
      let b = [1.2, 1.5, 1.8, 2.1, 2.4][affix - 1];
      return [
        {
          label: "生命值提升",
          describe: `生命值提升${a}%`,
          effect: [{ type: BuffType.HPPrcent, getValue: () => a }],
          enable: true,
        },
        {
          label: "攻击力提升",
          describe: `基于装备该武器的角色生命值上限的${b}%，获得攻击力加成`,
          effect: [
            {
              type: BuffType.ATKFixed,
              getValue: (data) => {
                return ((data.baseHP + data.extraHP) * b) / 100;
              },
              actionOn: ActionOn.Indirect,
            },
          ],
          enable: true,
        },
      ];
    }
  ),
];
