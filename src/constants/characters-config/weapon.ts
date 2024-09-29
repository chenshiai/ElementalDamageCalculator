import { WeaponType, Rarity, AppendProp, BuffType, AttackType, ElementType, ActionOn } from "@/types/enum";
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
];
