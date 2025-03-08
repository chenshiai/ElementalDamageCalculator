import { WeaponType, Rarity, AppendProp, BuffType, AttackType, ElementType, ActionOn, BuffTarget } from "@/types/enum";
import { ICalculatorValue, IWeaponInfo } from "@/types/interface";
import { getEnkaUI } from "./append-prop";
import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";

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
      name: "且住亭御咄",
      enkaId: 13432,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Aoandon_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 30.6,
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1] + "%";
      return {
        title: "好事者奔行灯",
        text: highlight`施放元素战技时，提高${a}攻击力和10%移动速度，持续10秒。`,
      };
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1];
      return [
        {
          label: "攻击力提升",
          describe: `施放元素战技时，提高${a}%攻击力`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "寝正月初晴",
      enkaId: 14518,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_SakuraFan_Awaken"),
      baseAtk: 542,
      rarity: Rarity.Five,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 265,
    },
    (affix = 1) => {
      let a = [120, 150, 180, 210, 240][affix - 1];
      let b = [96, 120, 144, 168, 192][affix - 1];
      let c = [32, 40, 48, 56, 64][affix - 1];
      return {
        title: "一汤二鹰三鸣神",
        text: highlight`触发扩散反应后的6秒内，元素精通提升${a}点；元素战技命中敌人后的9秒内，元素精通提升${b}点；元素爆发命中敌人后的30秒内，元素精通提升${c}点。`,
      };
    },
    (affix = 1) => {
      let a = [120, 150, 180, 210, 240][affix - 1];
      let b = [96, 120, 144, 168, 192][affix - 1];
      let c = [32, 40, 48, 56, 64][affix - 1];
      return [
        {
          label: "扩散反应后，元素精通提升",
          describe: `扩散反应后的6秒内，元素精通提升${a}点`,
          effect: [{ type: BuffType.MysteryFixed, getValue: () => a }],
          enable: false,
        },
        {
          label: "元素战技命中后，元素精通提升",
          describe: `元素战技命中敌人后的9秒内，元素精通提升${b}点`,
          effect: [{ type: BuffType.MysteryFixed, getValue: () => b }],
          enable: false,
        },
        {
          label: "元素爆发命中后，元素精通提升",
          describe: `元素爆发命中敌人后的30秒内，元素精通提升${c}点`,
          effect: [{ type: BuffType.MysteryFixed, getValue: () => c }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "祭星者之望",
      enkaId: 14517,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Figurines_Awaken"),
      baseAtk: 542,
      rarity: Rarity.Five,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 265,
    },
    (affix = 1) => {
      let a = [100, 125, 150, 175, 200][affix - 1];
      let b = [28, 35, 42, 49, 56][affix - 1] + "%";
      return {
        title: "奉予风阳的禋祀",
        text: highlight`元素精通提升${a}点。装备者创造护盾后的15秒内，获得「照夜之镜」效果：队伍中自己的当前场上角色对附近的敌人造成的伤害提升${b}，每14秒至多获得一次「照夜之镜」效果。`,
      };
    },
    (affix = 1) => {
      let a = [100, 125, 150, 175, 200][affix - 1];
      let b = [28, 35, 42, 49, 56][affix - 1];
      return [
        {
          label: "「照夜之镜」",
          describe: `装备者创造护盾后，获得「照夜之镜」效果：队伍中自己的当前场上角色对附近的敌人造成的伤害提升${b}%`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => b }],
          enable: true,
          shareable: true,
        },
        {
          label: "元素精通提升",
          describe: `元素精通提升${a}点`,
          effect: [{ type: BuffType.MysteryFixed, getValue: () => a }],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "焚曜千阳",
      enkaId: 12514,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_RadianceSword_Awaken"),
      baseAtk: 741,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL,
      statValue: 11,
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1] + "%";
      let b = [28, 35, 42, 49, 56][affix - 1] + "%";
      return {
        title: "落日重燃的黎明",
        text: highlight`施放元素战技或元素爆发时，获得「焚光」效果：暴击伤害提高${a}，攻击力提升${b}，该效果持续6秒，每10秒至多触发一次。
        <br />持续期间内，普通攻击或重击造成元素伤害后，将使此次「焚光」效果的持续时间延长2秒，该效果每1秒至多触发一次，至多通过这种方式使持续时间延长6秒。
        <br />此外，处于夜魂加持状态下时，「焚光」效果提高75%，且「焚光」效果在装备者处于后台时不进行计时。`,
      };
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1];
      let b = [28, 35, 42, 49, 56][affix - 1];
      return [
        {
          label: "焚光",
          describe: `施放元素战技或元素爆发时，获得「焚光」效果：暴击伤害提高${a}%，攻击力提升${b}%。处于夜魂加持状态下时，「焚光」效果提高75%。`,
          effect: [
            { type: BuffType.CritcalHurt, getValue: (_, s) => a + a * 0.75 * s },
            { type: BuffType.ATKPrcent, getValue: (_, s) => b + b * 0.75 * s },
          ],
          enable: true,
          stackable: true,
          stackText: "夜魂加持",
          limit: 1,
          stack: 0,
          stackType: "switch",
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "厄水之祸",
      enkaId: 11432,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_SacrificialNgombe_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 27.6,
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1] + "%";
      let c = [8, 10, 12, 14, 16][affix - 1] + "%";
      return {
        title: "弥漫的边界",
        text: highlight`角色处于护盾庇护下时，普通攻击和重击造成的伤害提升${a}，普通攻击和重击的暴击率提升${c}。`,
      };
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1];
      let c = [8, 10, 12, 14, 16][affix - 1];
      return [
        {
          label: "护盾庇护下普通、重击的伤害&暴击率提升",
          describe: `角色处于护盾庇护下时，普通攻击和重击造成的伤害提升${a}%，普通攻击和重击的暴击率提升${c}%。`,
          effect: [
            { type: BuffType.NormalPrcent, getValue: () => a },
            { type: BuffType.StrongPrcent, getValue: () => a },
            { type: BuffType.NormalCritcal, getValue: () => c },
            { type: BuffType.StrongCritcal, getValue: () => c },
          ],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "缀花之翎",
      enkaId: 15430,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Umpakati_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 41.3,
    },
    (affix = 1) => {
      let a = [6, 7.5, 9, 10.5, 12][affix - 1] + "%";
      return {
        title: "未至的花序",
        text: highlight`滑翔消耗的体力降低15%。进行瞄准射击时，每0.5秒提升重击造成的伤害${a}，该效果最多叠加6层，并将在不处于瞄准状态下10秒后移除。`,
      };
    },
    (affix = 1) => {
      let a = [6, 7.5, 9, 10.5, 12][affix - 1];
      return [
        {
          label: "重击造成的伤害提升",
          describe: `进行瞄准射击时，每0.5秒提升重击造成的伤害${a}%，该效果最多叠加6层`,
          effect: [{ type: BuffType.StrongPrcent, getValue: (_, s) => a * s }],
          stackable: true,
          limit: 6,
          stack: 6,
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "乘浪的回旋",
      enkaId: 14430,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Umpakati_Awaken"),
      baseAtk: 454,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 61.3,
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1] + "%";
      let b = [12, 15, 18, 21, 24][affix - 1] + "%";
      let c = [24, 30, 36, 42, 48][affix - 1] + "%";
      return {
        title: "长牙飞去来",
        text: highlight`游泳消耗的体力降低15%。此外，施放元素战技后的10秒内，生命值上限提升${a}，队伍中每存在一位水元素类型的角色，生命值上限将进一步提升${b}，至多通过这种方式提升${c}，该效果每15秒至多触发一次。`,
      };
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1];
      let b = [12, 15, 18, 21, 24][affix - 1];
      return [
        {
          label: `生命值上限提升${a}%`,
          describe: `施放元素战技后的10秒内，生命值上限提升${a}%`,
          effect: [{ type: BuffType.HPPrcent, getValue: (_, s) => a + b * s }],
          enable: false,
          stackable: true,
          limit: 2,
          stack: 2,
          stackText: "队伍中水元素类型的角色数量",
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "星鹫赤羽",
      enkaId: 15514,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Qoyllorsnova_Awaken"),
      baseAtk: 608,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 66.2,
    },
    (affix = 1) => {
      const a = [24, 30, 36, 42, 48][affix - 1] + "%";
      const b = [20, 25, 30, 35, 40][affix - 1] + "%";
      const c = [48, 60, 72, 84, 96][affix - 1] + "%";
      const d = [10, 12.5, 15, 17.5, 20][affix - 1] + "%";
      const e = [24, 30, 36, 42, 48][affix - 1] + "%";
      return {
        title: "眸中的月珥",
        text: highlight`触发扩散反应后的12秒内，攻击力提高${a}。此外，队伍中存在至少1/2名与装备者元素类型不同的角色时，装备者重击造成的伤害提高(${b}/${c})，元素爆发造成的伤害提高(${d}/${e})。`,
      };
    },
    (affix = 1) => {
      const a = [24, 30, 36, 42, 48][affix - 1];
      const b = [20, 25, 30, 35, 40][affix - 1];
      const c = [48, 60, 72, 84, 96][affix - 1];
      const d = [10, 12.5, 15, 17.5, 20][affix - 1];
      const e = [24, 30, 36, 42, 48][affix - 1];
      return [
        {
          label: `攻击力提升${a}%`,
          describe: `触发扩散反应后的12秒内，攻击力提高${a}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
          enable: false,
        },
        {
          label: "重击伤害&元素爆发伤害提升",
          describe: `队伍中存在至少1/2名与装备者元素类型不同的角色时，装备者重击造成的伤害提高(${b}%/${c}%)，元素爆发造成的伤害提高(${d}%/${e}%)`,
          effect: [
            { type: BuffType.StrongPrcent, getValue: (_, s) => (s === 2 ? c : s === 1 ? b : 0) },
            { type: BuffType.BurstPrcent, getValue: (_, s) => (s === 2 ? e : s === 1 ? d : 0) },
          ],
          enable: true,
          stackable: true,
          stack: 2,
          limit: 2,
          stackText: "不同元素的角色数量",
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "硕果钩",
      enkaId: 12430,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Umpakati_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 27.6,
    },
    (affix = 1) => {
      let c = [0, 16, 20, 24, 28, 32][affix] + "%";
      return {
        title: "坠枝之重",
        text: highlight`下落攻击的暴击率提升${c}，下落攻击命中敌人后，普通攻击、重击、下落攻击造成的伤害提升${c}，持续10秒。`,
      };
    },
    (affix = 1) => {
      let c = [0, 16, 20, 24, 28, 32][affix];
      return [
        {
          label: "下落攻击的暴击率提升",
          describe: `下落攻击的暴击率提升${c}%`,
          effect: [{ type: BuffType.FallingCritcal, getValue: () => c }],
          enable: true,
        },
        {
          label: "普攻、重击、下落攻击伤害提升",
          describe: `普通攻击、重击、下落攻击造成的伤害提升${c}%`,
          effect: [
            { type: BuffType.NormalPrcent, getValue: () => c },
            { type: BuffType.StrongPrcent, getValue: () => c },
            { type: BuffType.FallingPrcent, getValue: () => c },
          ],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "弥坚骨",
      enkaId: 11430,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Umpakati_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 27.6,
    },
    (affix = 1) => {
      let c = [0, 16, 20, 24, 28, 32][affix] + "%";
      return {
        title: "陷阵者的自矜",
        text: highlight`冲刺或代替冲刺的能力消耗的体力降低15%；此外，使用冲刺或代替冲刺的能力后，普通攻击造成的伤害提高，提高值数值相当于攻击力的${c}，该效果在生效18次或7s后消失。`,
      };
    },
    (affix = 1) => {
      let c = [0, 16, 20, 24, 28, 32][affix];
      return [
        {
          label: "普通攻击造成的伤害提高",
          describe: `普通攻击造成的伤害提高，提高值数值相当于攻击力的${c}%`,
          effect: [
            {
              type: BuffType.NormalFixed,
              getValue: (data) => (data.baseATK + data.extraATK + data.extraATK_NT) * c,
              actionOn: ActionOn.External,
            },
          ],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "镇山之钉",
      enkaId: 13430,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Umpakati_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 30.6,
    },
    (affix = 1) => {
      let c = [0, 12, 15, 18, 21, 24][affix] + "%";
      return {
        title: "越峰之望",
        text: highlight`攀爬消耗的体力降低15%，元素战技造成的伤害提升${c}；此外，队伍中附件的其他角色施放元素战技后，装备者的元素战技造成的伤害还会提升${c}，持续8秒。`,
      };
    },
    (affix = 1) => {
      let c = [0, 12, 15, 18, 21, 24][affix];
      return [
        {
          label: "元素战技造成的伤害提升",
          describe: `元素战技造成的伤害提升${c}%`,
          effect: [{ type: BuffType.SkillPrcent, getValue: () => c }],
          enable: true,
        },
        {
          label: "元素战技造成的伤害进一步提升",
          describe: `队伍中附件的其他角色施放元素战技后，装备者的元素战技造成的伤害还会提升${c}%`,
          effect: [{ type: BuffType.SkillPrcent, getValue: () => c }],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "岩峰巡歌",
      enkaId: 11516,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_XochitlsTube_Awaken"),
      baseAtk: 542,
      rarity: Rarity.Five,
      appendPropId: AppendProp.DEFENSE_PERCENT,
      statValue: 82.7,
    },
    (affix = 1) => {
      let def = [0, 8, 10, 12, 14, 16][affix] + "%";
      let add = [0, 10, 12.5, 15, 17.5, 20][affix] + "%";
      let add2 = [0, 8, 10, 12, 14, 16][affix] + "%";
      let lim = [0, 25.6, 32, 38.4, 44.8, 51.2][affix] + "%";
      return {
        title: "不凋的盛年",
        text: highlight`普通攻击或下落攻击命中敌人后，将获得「荣花之歌」：防御力提高${def}，并获得${add}所有元素伤害加成，该效果持续6秒，至多叠加2层，每0.1秒至多触发一次。该效果叠加至2层或2层的持续时间刷新时，基于装备者的防御力，每1000点使队伍中附近所有角色的所有元素伤害加成提高${add2}，至多提高${lim}`,
      };
    },
    (affix = 1) => {
      let def = [0, 8, 10, 12, 14, 16][affix];
      let add = [0, 10, 12.5, 15, 17.5, 20][affix];
      let add2 = [0, 8, 10, 12, 14, 16][affix];
      let lim = [0, 25.6, 32, 38.4, 44.8, 51.2][affix];
      return [
        {
          label: "「荣花之歌」",
          describe: `普通攻击或下落攻击命中敌人后，将获得「荣花之歌」：防御力提高${def}%，并获得${add}%所有元素伤害加成，至多叠加2层`,
          effect: [
            { type: BuffType.DEFPrcent, getValue: (_, s) => def * s },
            { type: BuffType.HydroPrcent, getValue: (_, s) => add * s },
            { type: BuffType.PyroPrcent, getValue: (_, s) => add * s },
            { type: BuffType.ElectroPrcent, getValue: (_, s) => add * s },
            { type: BuffType.AnemoPrcent, getValue: (_, s) => add * s },
            { type: BuffType.CryoPrcent, getValue: (_, s) => add * s },
            { type: BuffType.DendroPrcent, getValue: (_, s) => add * s },
            { type: BuffType.GeoPrcent, getValue: (_, s) => add * s },
          ],
          stackable: true,
          limit: 2,
          stack: 2,
          enable: true,
        },
        {
          label: "全队元素伤害提升",
          describe: `基于装备者的防御力，每1000点使队伍中附近所有角色的所有元素伤害加成提高${add2}%，至多提高${lim}%`,
          effect: [
            {
              type: BuffType.HydroPrcent,
              getValue: (data) => Math.min(lim, ((data.baseDEF + data.extraDEF) / 1000) * add2),
              actionOn: ActionOn.External,
              transform: true,
            },
            {
              type: BuffType.PyroPrcent,
              getValue: (data) => Math.min(lim, ((data.baseDEF + data.extraDEF) / 1000) * add2),
              actionOn: ActionOn.External,
              transform: true,
            },
            {
              type: BuffType.ElectroPrcent,
              getValue: (data) => Math.min(lim, ((data.baseDEF + data.extraDEF) / 1000) * add2),
              actionOn: ActionOn.External,
              transform: true,
            },
            {
              type: BuffType.AnemoPrcent,
              getValue: (data) => Math.min(lim, ((data.baseDEF + data.extraDEF) / 1000) * add2),
              actionOn: ActionOn.External,
              transform: true,
            },
            {
              type: BuffType.CryoPrcent,
              getValue: (data) => Math.min(lim, ((data.baseDEF + data.extraDEF) / 1000) * add2),
              actionOn: ActionOn.External,
              transform: true,
            },
            {
              type: BuffType.DendroPrcent,
              getValue: (data) => Math.min(lim, ((data.baseDEF + data.extraDEF) / 1000) * add2),
              actionOn: ActionOn.External,
              transform: true,
            },
            {
              type: BuffType.GeoPrcent,
              getValue: (data) => Math.min(lim, ((data.baseDEF + data.extraDEF) / 1000) * add2),
              actionOn: ActionOn.External,
              transform: true,
            },
          ],
          enable: true,
          shareable: true,
          target: BuffTarget.All,
        },
      ];
    }
  ),
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
      const add = [10, 12.5, 15, 17.5, 20][affix - 1] + "%";
      return {
        title: "绿松石之狩",
        text: highlight`元素战技命中敌人后，会获得1层「悬木祝赐」，该效果每0.5秒至多触发1次；队伍中附近的角色触发了燃烧或烈绽放反应后，装备者会获得3层悬木祝赐，该效果每2秒至多触发1次，队伍中的角色处于队伍后台时也能触发。悬木祝赐：元素战技伤害和元素爆发伤害提升${add}，持续6秒，至多叠加六层，每层持续时间独立计算。`,
      };
    },
    (affix = 1) => {
      const add = [10, 12.5, 15, 17.5, 20][affix - 1];
      return [
        {
          label: "绿松石之狩",
          describe: `元素战技伤害和元素爆发伤害提升${add}%，至多叠加六层`,
          effect: [
            { type: BuffType.SkillPrcent, getValue: (_, stack) => add * stack },
            { type: BuffType.BurstPrcent, getValue: (_, stack) => add * stack },
          ],
          stackable: true,
          stackText: "悬木祝赐",
          limit: 6,
          stack: 6,
          enable: true,
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
      const limit = [80, 90, 100, 110, 120][affix - 1] + "%";
      const atk = [28, 35, 42, 49, 56][affix - 1] + "%";
      const car = [30, 35, 40, 45, 50][affix - 1] + "%";
      return {
        title: "非时之梦·常世灶食",
        text: highlight`攻击力获得提升，提升程度相当于元素充能效率超出100%部分的${atk}，至多通过这种方式提升${limit}。施放元素爆发后的12秒内，元素充能效率提升${car}。`,
      };
    },
    (affix = 1) => {
      const limit = [80, 90, 100, 110, 120][affix - 1];
      const atk = [28, 35, 42, 49, 56][affix - 1];
      const car = [30, 35, 40, 45, 50][affix - 1];
      return [
        {
          label: "攻击力提升",
          effect: [
            {
              type: BuffType.ATKPrcent,
              getValue: ({ chargeEfficiency }) => {
                const ec = (Math.max(0, chargeEfficiency - 100) * atk) / 100;
                const res = Math.min(limit, ec);
                return res;
              },
              transform: true,
              actionOn: ActionOn.Indirect,
            },
          ],
          describe: `攻击力获得提升，提升程度相当于元素充能效率超出100%部分的${atk}%，至多通过这种方式提升${limit}%。`,
          enable: true,
        },
        {
          label: "元素充能效率提升",
          describe: `施放元素爆发后，元素充能效率提升${car}%`,
          effect: [{ type: BuffType.ChargeFixed, getValue: () => car }],
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
      const hp = [20, 25, 30, 35, 40][affix - 1] + "%";
      const add = [12, 15, 18, 21, 24][affix - 1] + "%";
      return {
        title: "水色回忆",
        text: highlight`生命值上限提高${hp}。每15秒一次，施放元素战技后的14秒内，产生如下效果：获得4层「炽夏」，每层使普通攻击造成的伤害提升${add}。持续期间内，每1.5秒一次：普通攻击命中敌人后，移除1层；每1.5秒一次：对敌人触发蒸发反应后，增加1层。「炽夏」效果至多叠加4层。`,
      };
    },
    (affix = 1) => {
      const hp = [20, 25, 30, 35, 40][affix - 1];
      const add = [12, 15, 18, 21, 24][affix - 1];
      return [
        {
          label: "生命值上限提高",
          describe: `生命值上限提高${hp}%`,
          effect: [{ type: BuffType.HPPrcent, getValue: () => hp }],
          enable: true,
        },
        {
          label: "普通攻击伤害提升",
          describe: `每层「炽夏」使普通攻击伤害提升${add}%， 至多叠加四层`,
          effect: [{ type: BuffType.NormalPrcent, getValue: (_, s) => add * s }],
          stackable: true,
          stackText: "炽夏",
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
      const add = [10, 12.5, 15, 17.5, 20][affix - 1] + "%";
      const num = [16, 20, 24, 28, 32][affix - 1] + "%";
      const atk = [20, 25, 30, 35, 40][affix - 1] + "%";
      return {
        title: "抗争的践行之歌",
        text: highlight`飘游风中的「千年的大乐章」的一部分。造成的伤害提高${add}。触发元素反应时，角色获得一枚奋起之符，每0.5秒内至多触发一次，角色处于队伍后台也能触发。拥有2枚奋起之符时，将消耗所有奋起之符，使附近的队伍中所有角色获得持续12秒的「千年的大乐章·抗争之歌」效果：普通攻击、重击、下落攻击造成的伤害提高${num}，攻击力提升${atk}。触发后20秒内，无法再次获得奋起之符。「千年的大乐章」触发的多种数值效果中，同类数值效果不可叠加。`,
      };
    },
    (affix = 1) => {
      const add = [10, 12.5, 15, 17.5, 20][affix - 1];
      const num = [16, 20, 24, 28, 32][affix - 1];
      const atk = [20, 25, 30, 35, 40][affix - 1];
      return [
        {
          label: "伤害提升",
          describe: `造成的伤害提高${add}%`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => add }],
          enable: true,
        },
        {
          label: "抗争之歌·攻击力提升",
          describe: `攻击力提升${atk}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
          enable: true,
          shareable: true,
          target: BuffTarget.All,
        },
        {
          label: "抗争之歌·普攻、重击、下落",
          describe: `普通攻击、重击、下落攻击伤害提升${num}%`,
          effect: [
            { type: BuffType.NormalPrcent, getValue: () => num },
            { type: BuffType.StrongPrcent, getValue: () => num },
            { type: BuffType.FallingPrcent, getValue: () => num },
          ],
          enable: false,
          shareable: true,
          target: BuffTarget.All,
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
      const hp = [40, 50, 60, 70, 80][affix - 1] + "%";
      return {
        title: "图帕克之握",
        text: highlight`攻击命中敌人时，在目标位置基于生命值上限的${hp}，造成范围伤害。该效果每15秒至多触发一次。`,
      };
    },
    () => [],
    (affix = 1) => {
      const hp = [40, 50, 60, 70, 80][affix - 1] / 100;
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
      const atk = [20, 25, 30, 35, 40][affix - 1] + "%";
      const hp = [32, 40, 48, 56, 64][affix - 1] + "%";
      return {
        title: "沙海守望",
        text: highlight`元素战技命中敌人后，攻击力提升${atk}，持续8秒；受到伤害后，攻击力提升${atk}，持续8秒。上述2种效果角色处于后台时也能触发。此外，不处在护盾庇护下时，生命值上限提高${hp}。`,
      };
    },
    (affix = 1) => {
      const atk = [20, 25, 30, 35, 40][affix - 1];
      const hp = [32, 40, 48, 56, 64][affix - 1];
      return [
        {
          label: "元素战技命中敌人，攻击力提升",
          effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
          describe: `元素战技命中敌人后，攻击力提升${atk}%`,
          enable: true,
        },
        {
          label: "受到伤害，攻击力提升",
          effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
          describe: `受到伤害后，攻击力提升${atk}%`,
          enable: true,
        },
        {
          label: "不处于护盾庇护下，生命值提升",
          effect: [{ type: BuffType.HPPrcent, getValue: () => hp }],
          describe: `不处于护盾庇护下，生命值提升${hp}%`,
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
      const hp = [14, 17.5, 21, 24.5, 28][affix - 1] + "%";
      const skill = [8, 10, 12, 14, 16][affix - 1] + "%";
      return {
        title: "湖光的朝与暮",
        text: highlight`装备者的当前生命值提升或降低时，元素战技造成的伤害提升${skill}，该效果持续6秒，至多叠加3次，每0.2秒至多触发一次；队伍中其他角色的当前生命值提升或降低时，装备者的生命值上限提升${hp}，该效果持续6秒，至多叠加2次，每0.2秒至多触发一次。装备者处于队伍后台时，依然能触发上述效果。`,
      };
    },
    (affix = 1) => {
      const hp = [14, 17.5, 21, 24.5, 28][affix - 1];
      const skill = [8, 10, 12, 14, 16][affix - 1];
      return [
        {
          label: "生命值提升或降低时，生命值提升",
          describe: `生命值提升${hp}%，至多叠加2次`,
          effect: [{ type: BuffType.HPPrcent, getValue: (_, s) => hp * s }],
          stackable: true,
          stack: 2,
          limit: 2,
          enable: true,
        },
        {
          label: "元素战技伤害提升",
          describe: `元素战技造成的伤害提升${skill}%，至多叠加3次`,
          effect: [{ type: BuffType.SkillPrcent, getValue: (_, s) => skill * s }],
          enable: true,
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
      const add = [16, 20, 24, 28, 32][affix - 1] + "%";
      return {
        title: "苍翠之路的誓言",
        text: highlight`队伍中的角色触发火元素相关反应后，装备者元素战技造成的伤害提升${add}，持续8秒。该效果队伍中的角色处于队伍后台时也能触发。`,
      };
    },
    (affix = 1) => {
      const add = [16, 20, 24, 28, 32][affix - 1];
      return [
        {
          label: "苍翠之路的誓言",
          describe: `队伍中的角色触发火元素相关反应后，装备者元素战技伤害提升${add}%`,
          effect: [{ type: BuffType.SkillPrcent, getValue: () => add }],
          enable: true,
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
      const def = [16, 20, 24, 28, 32][affix - 1] + "%";
      return {
        title: "流水与泉的约定",
        text: highlight`施放元素战技时，防御力提升${def}%，持续15秒。`,
      };
    },
    (affix = 1) => {
      const def = [16, 20, 24, 28, 32][affix - 1];
      return [
        {
          label: "流水与泉的约定",
          describe: `施放元素战技时，防御力提升${def}%`,
          effect: [{ type: BuffType.DEFPrcent, getValue: () => def }],
          enable: true,
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
      const add = [0.6, 0.7, 0.8, 0.9, 1][affix - 1] + "%";
      const limit = [16, 20, 24, 28, 32][affix - 1] + "%";
      return {
        title: "丰沃之陆的回声",
        text: highlight`施放元素战技时，获得「玉锻之冕」效果：每1000点生命值上限都会使普通攻击造成的伤害提升${add}，持续10秒。通过这种方式至多使普通攻击造成的伤害提升${limit}。`,
      };
    },
    (affix = 1) => {
      const add = [0.6, 0.7, 0.8, 0.9, 1][affix - 1];
      const limit = [16, 20, 24, 28, 32][affix - 1];
      return [
        {
          label: "丰沃之陆的回声",
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
      const atk = [4.8, 6, 7.2, 8.4, 9.6][affix - 1] + "%";
      const el = [24, 30, 36, 42, 48][affix - 1];
      return {
        title: "花与落羽的长歌",
        text: highlight`队伍中每有一名纳塔角色或与装备者元素类型不同的角色，装备者获得${atk}攻击力提升；上述角色不少于3名时，装备者的元素精通提升${el}点。`,
      };
    },
    (affix = 1) => {
      const atk = [4.8, 6, 7.2, 8.4, 9.6][affix - 1];
      const el = [24, 30, 36, 42, 48][affix - 1];
      return [
        {
          label: "花与落羽的长歌",
          describe: `队伍中每有一名纳塔角色或与装备者元素类型不同的角色，装备者获得${atk}%攻击力提升；上述角色不少于3名时，装备者的元素精通提升${el}点`,
          effect: [
            { type: BuffType.ATKPrcent, getValue: (_, s) => atk * s },
            { type: BuffType.MysteryFixed, getValue: (_, s) => (s >= 3 ? el : 0) },
          ],
          stackable: true,
          limit: 4,
          stack: 3,
          enable: true,
          stackText: "符合条件的角色数量",
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
      const def = [16, 20, 24, 28, 32][affix - 1] + "%";
      return {
        title: "镜与烟色的隐谜",
        text: highlight`施放元素战技时，防御力提升${def}，持续15秒。`,
      };
    },
    (affix = 1) => {
      const def = [16, 20, 24, 28, 32][affix - 1];
      return [
        {
          label: "镜与烟色的隐谜",
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
      const atk = [15, 19, 23, 27, 31][affix - 1] + "%";
      const add = [18, 23, 28, 33, 38][affix - 1] + "%";
      const ch = [12, 13, 14, 15, 16];
      return {
        title: "白晓的序曲",
        text: highlight`攻击力提升${atk}；装备者对敌人触发燃烧反应或对处于燃烧状态下的敌人造成草元素伤害后，造成的伤害提高${add}。该效果持续8秒，至多叠加2层；叠加至2层或2层的持续时间刷新时，恢复${ch}点元素能量，每12秒至多通过这种方式恢复一次元素能量。上述2种效果角色处于队伍后台时也能触发。`,
      };
    },
    (affix = 1) => {
      const atk = [15, 19, 23, 27, 31][affix - 1];
      const add = [18, 23, 28, 33, 38][affix - 1];
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
          enable: true,
          effect: [{ type: BuffType.GlobalPrcent, getValue: (_, s) => add * s }],
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
      const hp = [16, 20, 24, 28, 32][affix - 1] + "%";
      const add = [20, 25, 30, 35, 40][affix - 1] + "%";
      return {
        title: "洗濯诸类之形",
        text: highlight`生命值提升${hp}。周围存在敌人时，装备该武器的角色造成的伤害都会提升${add}，不论该角色处于场上或是处于队伍后台。`,
      };
    },
    (affix = 1) => {
      const hp = [16, 20, 24, 28, 32][affix - 1];
      const add = [20, 25, 30, 35, 40][affix - 1];
      return [
        {
          label: "生命值提升",
          describe: `生命值提升${hp}%`,
          effect: [{ type: BuffType.HPPrcent, getValue: () => hp }],
          enable: true,
        },
        {
          label: "造成的伤害提升",
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
      const atk = [20, 25, 30, 35, 40][affix - 1] + "%";
      const add = [18, 22.5, 27, 31.5, 36][affix - 1] + "%";
      return {
        title: "诸多朝与暮的誓约",
        text: highlight`攻击力提升${atk}；队伍中的角色获取结晶反应产生的晶片时，会为装备者赋予1枚「约印」，使元素战技造成的伤害提升${add}，约印持续15秒，至多同时持有2枚。所有约印将在装备者的元素战技造成伤害后的0.2秒后移除。`,
      };
    },
    (affix = 1) => {
      const atk = [20, 25, 30, 35, 40][affix - 1];
      const add = [18, 22.5, 27, 31.5, 36][affix - 1];
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
          stackText: "约印",
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
      const hp1 = [12, 15, 18, 21, 24][affix - 1];
      const hp2 = [24, 30, 36, 42, 48][affix - 1];
      const hp3 = [40, 50, 60, 70, 80][affix - 1];
      const res = `${hp1}/${hp2}/${hp3}%`;
      const cri = [28, 35, 42, 49, 56][affix - 1] + "%";
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
      const hp1 = [12, 15, 18, 21, 24][affix - 1];
      const hp2 = [24, 30, 36, 42, 48][affix - 1];
      const hp3 = [40, 50, 60, 70, 80][affix - 1];
      const res = `${hp1}/${hp2}/${hp3}%`;
      const cri = [28, 35, 42, 49, 56][affix - 1];
      return [
        {
          label: "生命值上限提升",
          describe: `持有1/2/3层疗护时，生命值上限提升${res}`,
          effect: [{ type: BuffType.HPPrcent, getValue: (_, s) => [hp1, hp2, hp3][s - 1] || 0 }],
          stackable: true,
          stackText: "疗护",
          limit: 3,
          stack: 3,
          enable: true,
        },
        {
          label: "元素爆发暴击率提升",
          describe: `处于3层疗护状态下时，元素爆发的暴击率提升${cri}%`,
          effect: [{ type: BuffType.BurstCritcal, getValue: () => cri }],
          enable: true,
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
      const rat = [60, 70, 80, 90, 100][affix - 1] + "%";
      const sec = [12, 10.5, 9, 7.5, 6][affix - 1];
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
      const rat = [60, 70, 80, 90, 100][affix - 1] + "%";
      const sec = [12, 10.5, 9, 7.5, 6][affix - 1];
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
      let rat = [40, 50, 60, 70, 80][affix - 1] + "%";
      let sec = [30, 26, 22, 19, 16][affix - 1];
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
      const add = [20, 24, 28, 32, 36][affix - 1] + "%";
      return {
        title: "踏火息雷",
        text: highlight`对处于火元素或雷元素影响下的敌人，造成的伤害提高${add}。`,
      };
    },
    (affix = 1) => {
      const add = [20, 24, 28, 32, 36][affix - 1];
      return [
        {
          label: "踏火息雷",
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
      const hp = [20, 25, 30, 35, 40][affix - 1] + "%";
      const rate = [0.12, 0.15, 0.18, 0.21, 0.24][affix - 1] + "%";
      const rate2 = [0.2, 0.25, 0.3, 0.35, 0.4][affix - 1] + "%";
      return {
        title: "沉入沙海的史诗",
        text: highlight`生命值提升${hp}。元素战技命中敌人时将产生持续20秒的「宏大诗篇」效果：基于装备者生命值上限的${rate}，获得元素精通提升，该效果每0.3秒至多触发一次，至多叠加3层。该效果叠加至3层或3层的持续时间刷新时，将基于装备者生命值上限的${rate2}，为队伍中附近所有角色提供元素精通提升，持续20秒。`,
      };
    },
    (affix = 1) => {
      const hp = [20, 25, 30, 35, 40][affix - 1];
      const rate = [0.12, 0.15, 0.18, 0.21, 0.24][affix - 1];
      const rate2 = [0.2, 0.25, 0.3, 0.35, 0.4][affix - 1];
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
          stackText: "宏大诗篇",
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
          shareable: true,
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
      const atk = [7, 8, 9, 10, 11][affix - 1] + "%";
      const cri = [3, 4, 5, 6, 7][affix - 1] + "%";
      return {
        title: "千岩诀·同心",
        text: highlight`队伍中每有一位璃月角色，装备该武器的角色便获得${atk}攻击力提升与${cri}暴击率提升。至多获得4层提升效果。`,
      };
    },
    (affix = 1) => {
      const atk = [7, 8, 9, 10, 11][affix - 1];
      const cri = [3, 4, 5, 6, 7][affix - 1];
      return [
        {
          label: "千岩诀·同心",
          describe: `角色获得${atk}%攻击力提升与${cri}%暴击率提升。至多获得4层提升效果`,
          effect: [
            { type: BuffType.ATKPrcent, getValue: (_, s) => atk * s },
            { type: BuffType.Critcal, getValue: (_, s) => cri * s },
          ],
          stackable: true,
          stackText: "璃月角色数量",
          limit: 4,
          stack: 0,
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
      const em = [40, 50, 60, 70, 80][affix - 1];
      return {
        title: "镌岩为坊",
        text: highlight`元素能量减少后，装备者的元素精通提升${em}点。该效果持续18秒，至多叠加2层。`,
      };
    },
    (affix = 1) => {
      const em = [40, 50, 60, 70, 80][affix - 1];
      return [
        {
          label: "镌岩为坊",
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
      const crt = [20, 25, 30, 35, 40][affix - 1] + "%";
      const add = [16, 20, 24, 28, 32][affix - 1] + "%";
      return {
        title: "死之契",
        text: highlight`暴击伤害提升${crt}；生命之契的数值增加时，装备者造成的伤害提升${add}。该效果持续6秒，至多叠加3次。`,
      };
    },
    (affix = 1) => {
      const crt = [20, 25, 30, 35, 40][affix - 1];
      const add = [16, 20, 24, 28, 32][affix - 1];
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
          effect: [{ type: BuffType.GlobalPrcent, getValue: (_, s) => add * s }],
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
      const crt = [4, 5, 6, 7, 8][affix - 1] + "%";
      const add = [120, 150, 180, 210, 240][affix - 1] + "%";
      return {
        title: "白月枝芒",
        text: highlight`暴击率提升${crt}；普通攻击造成元素伤害后，获得「裁叶」效果：普通攻击和元素战技造成的伤害提高，提高值相当于元素精通的${add}。该效果在生效28次或12秒后消失，每12秒至多获得一次「裁叶」效果。`,
      };
    },
    (affix = 1) => {
      const crt = [4, 5, 6, 7, 8][affix - 1];
      const add = [120, 150, 180, 210, 240][affix - 1];
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
          enable: true,
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
      const add = [12, 16, 20, 24, 28][affix - 1] + "%";
      const add2 = [24, 32, 40, 48, 56][affix - 1] + "%";

      return {
        title: "烬日之影",
        text: highlight`重击命中敌人时，赋予生命值上限25%的生命之契，该效果每14秒至多触发一次。此外，装备者具有生命之契时，造成的伤害提升${add}；若生命之契的数值大于等于生命值上限的30%，造成的伤害将进一步提升${add2}。`,
      };
    },
    (affix = 1) => {
      const add = [12, 16, 20, 24, 28][affix - 1];
      const add2 = [24, 32, 40, 48, 56][affix - 1];
      return [
        {
          label: "伤害提升",
          describe: `装备者具有生命之契时，造成的伤害提升${add}%`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => add }],
          enable: true,
        },
        {
          label: "伤害进一步提升",
          describe: `若生命之契的数值大于等于生命值上限的30%，造成的伤害将进一步提升${add2}%`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => add2 }],
          enable: true,
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
      const a = [8, 10, 12, 14, 16][affix - 1];
      return {
        title: "均衡的原理",
        text: highlight`进行治疗时，恢复${a}点能量，该效果每10秒至多触发一次，角色处于队伍后台时也能触发。`,
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
      let add = [16, 20, 24, 28, 32][affix - 1] + "%";
      let add2 = [24, 30, 36, 42, 48][affix - 1] + "%";
      let def = [20, 25, 30, 35, 40][affix - 1] + "%";
      return {
        title: "锦之花与龛中剑",
        text: highlight`普通攻击造成的伤害提升${add}，元素战技造成的伤害提升${add2}；队伍中附近的角色在场上造成岩元素伤害后，上述效果进一步提升100%，持续15秒。此外，装备者的防御力提升${def}。`,
      };
    },
    (affix = 1) => {
      let add = [16, 20, 24, 28, 32][affix - 1];
      let add2 = [24, 30, 36, 42, 48][affix - 1];
      let def = [20, 25, 30, 35, 40][affix - 1];
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
          enable: true,
        },
        {
          label: "防御力提升",
          describe: `装备者的防御力提升${def}%`,
          effect: [{ type: BuffType.DEFPrcent, getValue: () => def }],
          enable: true,
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
      let add = [28, 41, 54, 67, 80][affix - 1] + "%";
      let c = [2.5, 2.75, 3, 3.25, 3.5][affix - 1];
      return {
        title: "云笈降真要诀",
        text: highlight`装备者下落攻击命中敌人后，队伍中附近的所有角色下落攻击造成的伤害提高${add}，持续20秒；队伍中附近的角色的下落攻击命中敌人时，为装备者恢复${c}点元素能量，每0.7秒至多通过这种方式恢复一次元素能量，装备者处于队伍后台时依然能通过这种方式恢复元素能量。`,
      };
    },
    (affix = 1) => {
      let add = [28, 41, 54, 67, 80][affix - 1];
      return [
        {
          label: "云笈降真要诀",
          describe: `装备者下落攻击命中敌人后，队伍中附近的所有角色下落攻击造成的伤害提高${add}%`,
          effect: [{ type: BuffType.FallingPrcent, getValue: () => add }],
          enable: false,
          shareable: true,
          target: BuffTarget.All,
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
      let atk = [12, 15, 18, 21, 24][affix - 1] + "%";
      return {
        title: "加油！",
        text: highlight`攻击力提升${atk}。不仅如此！海沫村中曾蒙你帮助的美露莘们的声援心意充满了力量，依照她们的数目，攻击力至多进一步提升${atk}。`,
      };
    },
    (affix = 1) => {
      let atk = [12, 15, 18, 21, 24][affix - 1];
      return [
        {
          label: "加油！",
          describe: `攻击力提升${atk}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
          enable: true,
        },
        {
          label: "加油！！！",
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
      let rat = [160, 200, 240, 280, 320][affix - 1] + "%";
      return {
        title: "勇者之剑",
        text: highlight`装备者不具备「始基力」时：普通攻击、重击、下落攻击命中时，会释放芒性或荒性的能量冲击，造成${rat}攻击力的伤害。该效果每12秒至多触发一次，能量冲击的类型由水仙十字之剑当前的属性决定。`,
      };
    },
    () => [],
    (affix = 1) => {
      let rat = [160, 200, 240, 280, 320][affix - 1] / 100;
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
      let atk = [16, 20, 24, 28, 32][affix - 1] + "%";
      let add = [16, 20, 24, 28, 32][affix - 1] + "%";
      let add2 = [14, 17.5, 21, 24.5, 28][affix - 1] + "%";
      let sp = [8, 10, 12, 14, 16][affix - 1] + "%";
      return {
        title: "黄金的血潮",
        text: highlight`攻击力提升${atk}。当前生命值提升或降低时，普通攻击造成的伤害提升${add}，重击造成的伤害提升${add2}。该效果持续4秒，至多叠加3层，每0.3秒至多触发一次；处于叠加3层的状态下时，攻击速度提升${sp}。`,
      };
    },
    (affix = 1) => {
      let atk = [16, 20, 24, 28, 32][affix - 1];
      let add = [16, 20, 24, 28, 32][affix - 1];
      let add2 = [14, 17.5, 21, 24.5, 28][affix - 1];
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
          enable: true,
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
      let atk = [8, 10, 12, 14, 16][affix - 1] + "%";
      let add = [6, 7.5, 9, 10.5, 12][affix - 1] + "%";
      return {
        title: "蔚蓝深空",
        text: highlight`普通攻击或重击命中敌人后的6秒内，普通攻击造成的伤害提升${atk}，重击造成的伤害提升${add}。该效果至多叠加3次，每0.3秒至多触发一次。`,
      };
    },
    (affix = 1) => {
      let atk = [8, 10, 12, 14, 16][affix - 1];
      let add = [6, 7.5, 9, 10.5, 12][affix - 1];
      return [
        {
          label: "蔚蓝深空",
          describe: `普通攻击造成的伤害提升${atk}%、重击造成的伤害提升${add}%，至多叠加3层`,
          effect: [
            { type: BuffType.NormalPrcent, getValue: (_, s) => atk * s },
            { type: BuffType.StrongPrcent, getValue: (_, s) => add * s },
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
          label: "船工号子",
          describe: `每枚消耗的坚忍标记提高${em}点元素精通，至多叠加3层`,
          effect: [{ type: BuffType.MysteryFixed, getValue: (_, stack) => em * stack }],
          stackable: true,
          stackText: "坚忍标记",
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
      const getValue = (data: ICalculatorValue, stack) => {
        // 虽然游戏里不存这种场景，但感觉生命之契应该能吃二次转化
        let allhp = data.baseHP + data.extraHP + data.extraHP_NT;
        return Math.min((allhp * stack * hp) / 10000, add2);
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
          describe: `每清除1000点将会提供${hp}%所有元素伤害加成，至多获得${add2}%所有元素伤害加成`,
          effect: [
            { type: BuffType.PyroPrcent, getValue },
            { type: BuffType.HydroPrcent, getValue },
            { type: BuffType.AnemoPrcent, getValue },
            { type: BuffType.ElectroPrcent, getValue },
            { type: BuffType.GeoPrcent, getValue },
            { type: BuffType.CryoPrcent, getValue },
            { type: BuffType.DendroPrcent, getValue },
          ],
          stackable: true,
          stack: 24,
          limit: 200,
          stackText: "生命之契",
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
          label: "巡航的白浪",
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
      let atk = [12, 15, 18, 21, 24][affix - 1] + "%";
      let hp = [2.4, 3, 3.6, 4.2, 4.8][affix - 1] + "%";
      let atk2 = [150, 187.5, 225, 262.5, 300][affix - 1] + "%";
      return {
        title: "最终的崇高",
        text: highlight`施放元素战技时，攻击力提升${atk}，持续15秒，并赋予生命值上限25%的生命之契，该效果每10秒至多触发一次。生命之契清除时，基于清除值的${hp}提升至多${atk2}点攻击力，持续15秒。`,
      };
    },
    (affix = 1) => {
      let atk = [12, 15, 18, 21, 24][affix - 1];
      let hp = [2.4, 3, 3.6, 4.2, 4.8][affix - 1];
      let atk2 = [150, 187.5, 225, 262.5, 300][affix - 1];
      return [
        {
          label: "攻击力提升",
          describe: `施放元素战技时，攻击力提升${atk}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
          enable: false,
        },
        {
          label: "消除生命之契获得攻击力提升",
          describe: `生命之契清除时，基于清除值的${hp}%提升至多${atk2}点攻击力`,
          effect: [
            {
              type: BuffType.ATKFixed,
              getValue: (data, stack) => {
                // 虽然游戏里不存这种场景，但感觉生命之契应该能吃二次转化
                let allhp = data.baseHP + data.extraHP + data.extraHP_NT;
                return Math.min((allhp * stack * hp) / 10000, atk2);
              },
            },
          ],
          stackable: true,
          stack: 25,
          limit: 200,
          stackText: "生命之契",
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
          label: "深海弦振",
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
          label: "碧玉流转",
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
          label: "阳炎古道",
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
          stackText: "手法",
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
          label: "秘智之眸的青睐",
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
          label: "定土玉圭",
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
        text: highlight`元素战技命中敌人或触发元素反应后的8秒内，攻击力提升${atk}，元素精通提升${em}点。`,
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
          label: "纸伞作祟",
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
          label: "堙没的蓝宝石泪滴",
          describe: `普通攻击造成的伤害至多提升至${lim}%`,
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
      let getWeaponEffect = (element: ElementType, type: BuffType) => {
        return {
          label: `千夜的曙歌`,
          describe: `元素精通提升${em}或元素伤害加成提升${add}%`,
          condition: (data) => data.element === element,
          effect: [
            { type: BuffType.MysteryFixed, getValue: (_, stack) => em * stack },
            { type, getValue },
          ],
          stackText: "同元素数量",
          stackable: true,
          limit: 3,
          stack: 3,
          enable: false,
        };
      };
      return [
        {
          label: "全队元素精通提升",
          describe: `全队元素精通提升${enm}`,
          effect: [{ type: BuffType.MysteryFixed, getValue: () => enm }],
          enable: true,
          shareable: true,
          target: BuffTarget.All,
        },
        getWeaponEffect(ElementType.Anemo, BuffType.AnemoPrcent),
        getWeaponEffect(ElementType.Hydro, BuffType.HydroPrcent),
        getWeaponEffect(ElementType.Electro, BuffType.ElectroPrcent),
        getWeaponEffect(ElementType.Pyro, BuffType.PyroPrcent),
        getWeaponEffect(ElementType.Cryo, BuffType.CryoPrcent),
        getWeaponEffect(ElementType.Dendro, BuffType.DendroPrcent),
        getWeaponEffect(ElementType.Geo, BuffType.GeoPrcent),
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
          describe: `装备者的每点元素精通，都会为该角色提升${a}元素充能效率，并基于该提升的30%为队伍中附近的其他角色提升元素充能效率`,
          effect: [
            {
              type: BuffType.ChargeFixed,
              getValue: (data) => data.elementalMystery * a * 0.3,
              actionOn: ActionOn.Indirect,
              transform: true,
            },
          ],
          enable: true,
          shareable: true,
          target: BuffTarget.All,
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
          describe: `基于装备者的元素精通的${a}，提升该角色的攻击力，并基于该提升的30%为队伍中附近的其他角色提升攻击力`,
          effect: [
            {
              type: BuffType.ATKFixed,
              getValue: (data) => (data.elementalMystery * a * 0.3) / 100,
              actionOn: ActionOn.Indirect,
              transform: true,
            },
          ],
          enable: true,
          shareable: true,
          target: BuffTarget.All,
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
          stackText: "赤沙之梦",
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
          describe: `基于装备者的元素精通的${a}，提升攻击力，并基于该提升的30%为队伍中附近的其他角色提升攻击力`,
          effect: [
            {
              type: BuffType.ATKFixed,
              getValue: (data) => (data.elementalMystery * a * 0.3) / 100,
              actionOn: ActionOn.Indirect,
              transform: true,
            },
          ],
          enable: true,
          shareable: true,
          target: BuffTarget.All,
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
          label: "森林教诲",
          describe: `施放元素战技或元素爆发时，元素精通提升${e}点`,
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
        text: highlight`触发燃烧、原激化、超激化、蔓激化、绽放、超绽放或烈绽放后，将在角色周围产生至多存在10秒的「种识之叶」。拾取种识之叶的角色元素精通提升${e}点，持续12秒。每20秒至多通过这种方式产生一枚种识之叶。角色处于队伍后台时也能触发。种识之叶的效果无法叠加。`,
      };
    },
    (affix = 1) => {
      let e = 60 + (affix - 1) * 15;
      return [
        {
          label: "种识之叶",
          describe: `拾取种识之叶的角色元素精通提升${e}点`,
          effect: [{ type: BuffType.MysteryFixed, getValue: () => e }],
          enable: false,
          shareable: true,
          target: BuffTarget.All,
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
          stackText: "盈缺",
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
          label: "苏生之叶",
          describe: `拾取苏生之叶的角色攻击力提升${e}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => e }],
          enable: false,
          shareable: true,
          target: BuffTarget.All,
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
          label: "种识之叶",
          describe: `拾取种识之叶的角色元素精通提升${e}点`,
          effect: [{ type: BuffType.MysteryFixed, getValue: () => e }],
          enable: false,
          shareable: true,
          target: BuffTarget.All,
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
          label: "无休止的狩猎",
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
          describe: `夕暮(0)、流霞(1)、朝晖(2)三种状态，分别能使造成的伤害提升${a}（分别用0~2层表示）`,
          effect: [
            {
              type: BuffType.GlobalPrcent,
              getValue: (_, stack) => {
                return b[stack];
              },
            },
          ],
          stackable: true,
          stackText: "状态",
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
          stackText: "波穗",
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
          stackText: "神乐舞",
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
          label: "前台·攻击力提升",
          describe: `施放元素战技后，攻击力每1秒提升${as}%，该攻击力提升效果至多叠加6次`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => as * stack }],
          stackable: true,
          stackText: "圆顿",
          limit: 6,
          stack: 6,
          enable: false,
        },
        {
          label: "后台·攻击力提升",
          describe: `施放元素战技后，攻击力每1秒提升${as}%，至多叠加6次，处于后台时攻击力提升效果翻倍`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => as * stack * 2 }],
          stackText: "圆顿",
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
          label: "揭旗之歌",
          describe: `全队攻击力提升${x}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => x }],
          enable: false,
          shareable: true,
          target: BuffTarget.All,
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
          describe: `所有角色的元素能量上限的总和，每1点能使装备此武器的角色的元素爆发造成的伤害提高${a}%，至多提高${b}%`,
          effect: [
            {
              type: BuffType.BurstPrcent,
              getValue: (_, stack) => {
                return Math.min(stack * a, b);
              },
            },
          ],
          stackable: true,
          stackText: "能量上限总和",
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
          describe: `所有角色的元素能量上限的总和，每1点能使装备此武器的角色的元素爆发造成的伤害提高${a}%，至多提高${b}%`,
          effect: [
            {
              type: BuffType.BurstPrcent,
              getValue: (_, stack) => {
                return Math.min(stack * a, b);
              },
            },
          ],
          stackable: true,
          stackText: "能量上限总和",
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
          stackText: "白夜极星",
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
          describe: `所有角色的元素能量上限的总和，每1点能使装备此武器的角色的元素爆发造成的伤害提高${a}%，至多提高${b}%`,
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
          stackText: "能量上限总和",
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
          stackText: "飞雷之巴印",
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
          stackText: "雾切之巴印",
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
          label: "激化，草雷增伤",
          describe: `触发雷元素相关反应后，获得${a}%相关反应元素的伤害加成`,
          effect: [
            { type: BuffType.DendroPrcent, getValue: () => a },
            { type: BuffType.ElectroPrcent, getValue: () => a },
          ],
          enable: false,
          shareable: true,
          target: BuffTarget.All,
        },
        {
          label: "扩散，风雷增伤",
          describe: `触发雷元素相关反应后，获得${a}%相关反应元素的伤害加成`,
          effect: [
            { type: BuffType.AnemoPrcent, getValue: () => a },
            { type: BuffType.ElectroPrcent, getValue: () => a },
          ],
          enable: false,
          shareable: true,
          target: BuffTarget.All,
        },
        {
          label: "超载，火雷增伤",
          describe: `触发雷元素相关反应后，获得${a}%相关反应元素的伤害加成`,
          effect: [
            { type: BuffType.PyroPrcent, getValue: () => a },
            { type: BuffType.ElectroPrcent, getValue: () => a },
          ],
          enable: false,
          shareable: true,
          target: BuffTarget.All,
        },
        {
          label: "感电，水雷增伤",
          describe: `触发雷元素相关反应后，获得${a}%相关反应元素的伤害加成`,
          effect: [
            { type: BuffType.HydroPrcent, getValue: () => a },
            { type: BuffType.ElectroPrcent, getValue: () => a },
          ],
          enable: false,
          shareable: true,
          target: BuffTarget.All,
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
          describe: `旅行者基础攻击力提升66点`,
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
          shareable: true,
          target: BuffTarget.All,
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
  createWeapon(
    {
      name: "试作古华",
      enkaId: 12406,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Proto_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 27.6,
    },
    (affix = 1) => {
      let a = [240, 300, 360, 420, 480][affix - 1] + "%";
      return {
        title: "粉碎",
        text: highlight`普通攻击和重击命中时，有50%的概率对小范围内的敌人造成${a}攻击力的额外伤害。该效果每15秒只能触发一次。`,
      };
    },
    () => [],
    (affix = 1) => {
      let a = [240, 300, 360, 420, 480][affix - 1] / 100;
      return [
        {
          label: "试作古华·粉碎",
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
      name: "匣里灭辰",
      enkaId: 13401,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Stardust_Awaken"),
      baseAtk: 454,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 221,
    },
    (affix = 1) => {
      let a = [20, 24, 28, 32, 36][affix - 1] + "%";
      return {
        title: "踏火止水",
        text: highlight`对处于水元素或火元素影响下的敌人，造成的伤害提高${a}。`,
      };
    },
    (affix = 1) => {
      let a = [20, 24, 28, 32, 36][affix - 1];
      return [
        {
          label: "造成的伤害提高",
          describe: `对处于水元素或火元素影响下的敌人，造成的伤害提高${a}%`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => a }],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "黑岩刺枪",
      enkaId: 13404,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Blackrock_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 55.1,
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1] + "%";
      return {
        title: "乘胜追击",
        text: highlight`击败敌人后，攻击力提升${a}，持续30秒。该效果至多叠加三层，每层持续时间独立。`,
      };
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1];
      return [
        {
          label: "攻击力提升",
          describe: `击败敌人后，攻击力提升${a}%，持续30秒。该效果至多叠加三层`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => s * a }],
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
      name: "西风大剑",
      enkaId: 12401,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Zephyrus_Awaken"),
      baseAtk: 454,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 61.3,
    },
    (affix = 1) => {
      let a = [60, 70, 80, 90, 100][affix - 1] + "%";
      let b = [12, 10.5, 9, 7.5, 6][affix - 1];
      return {
        title: "顺风而行",
        text: highlight`攻击造成暴击时，有${a}的几率产生少量元素微粒，能为角色恢复6点元素能量。该效果每${b}秒只能触发一次。`,
      };
    }
  ),
  createWeapon(
    {
      name: "铁蜂刺",
      enkaId: 11407,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Exotic_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 165,
    },
    (affix = 1) => {
      let a = [6, 7.5, 9, 10.5, 12][affix - 1] + "%";
      return {
        title: "注能之刺",
        text: highlight`造成元素伤害后的6秒内，角色造成的伤害提高${a}，该效果最多叠加2层。该效果每1秒可以触发一次。`,
      };
    },
    (affix = 1) => {
      let a = [6, 7.5, 9, 10.5, 12][affix - 1];
      return [
        {
          label: "伤害提升",
          describe: `造成元素伤害后，角色造成的伤害提高${a}%，该效果最多叠加2层`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: (_, s) => s * a }],
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
      name: "绝弦",
      enkaId: 15402,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Troupe_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 165,
    },
    (affix = 1) => {
      let a = [24, 30, 36, 42, 48][affix - 1] + "%";
      return {
        title: "无矢之歌",
        text: highlight`元素战技与元素爆发的伤害提高${a}。`,
      };
    },
    (affix = 1) => {
      let a = [24, 30, 36, 42, 48][affix - 1];
      return [
        {
          label: "元素战技与元素爆发的伤害提高",
          describe: `元素战技与元素爆发的伤害提高${a}%`,
          effect: [
            { type: BuffType.SkillPrcent, getValue: () => a },
            { type: BuffType.BurstPrcent, getValue: () => a },
          ],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "宗室长弓",
      enkaId: 15404,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Theocrat_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 41.3,
    },
    (affix = 1) => {
      let a = [8, 10, 12, 14, 16][affix - 1] + "%";
      return {
        title: "专注",
        text: highlight`攻击造成伤害时，暴击率提升${a}，最多堆叠5次。攻击造成暴击后，移除已有的专注效果。`,
      };
    },
    (affix = 1) => {
      let a = [8, 10, 12, 14, 16][affix - 1];
      return [
        {
          label: "暴击率提升",
          describe: `攻击造成伤害时，暴击率提升${a}%，最多堆叠5次。攻击造成暴击后，移除已有的专注效果`,
          effect: [{ type: BuffType.Critcal, getValue: (_, s) => a * s }],
          enable: true,
          stackable: true,
          stack: 0,
          limit: 5,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "雨裁",
      enkaId: 12405,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Perdue_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 165,
    },
    (affix = 1) => {
      let a = [20, 24, 28, 32, 36][affix - 1] + "%";
      return {
        title: "止水息雷",
        text: highlight`对处于水元素或雷元素影响下的敌人，造成的伤害提高${a}。`,
      };
    },
    (affix = 1) => {
      let a = [20, 24, 28, 32, 36][affix - 1];
      return [
        {
          label: "造成的伤害提高",
          describe: `对处于水元素或雷元素影响下的敌人，造成的伤害提高${a}%`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => a }],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "弓藏",
      enkaId: 15405,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Recluse_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 41.3,
    },
    (affix = 1) => {
      let a = [40, 50, 60, 70, 80][affix - 1] + "%";
      return {
        title: "速射弓斗",
        text: highlight`普通攻击造成的伤害提升${a}，重击造成的伤害下降10%。`,
      };
    },
    (affix = 1) => {
      let a = [40, 50, 60, 70, 80][affix - 1];
      return [
        {
          label: "普通攻击伤害提升，重击伤害下降",
          describe: `普通攻击造成的伤害提升${a}%，重击造成的伤害下降10%`,
          effect: [
            { type: BuffType.NormalPrcent, getValue: () => a },
            { type: BuffType.StrongPrcent, getValue: () => -10 },
          ],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "流浪乐章",
      enkaId: 14402,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Troupe_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 55.1,
    },
    (affix = 1) => {
      let a = [60, 75, 90, 105, 120][affix - 1] + "%";
      let b = [48, 60, 72, 84, 96][affix - 1] + "%";
      let c = [240, 300, 360, 420, 480][affix - 1];
      return {
        title: "登场乐",
        text: highlight`角色登场时，随机获得一个主题曲，持续10秒。每30秒只能触发一次。
        宣叙调：攻击力提升${a}；
        咏叹调：全元素伤害提升${b}。
        间奏曲：元素精通提升${c}；
        `,
      };
    },
    (affix = 1) => {
      let a = [60, 75, 90, 105, 120][affix - 1];
      let b = [48, 60, 72, 84, 96][affix - 1];
      let c = [240, 300, 360, 420, 480][affix - 1];
      return [
        {
          label: "宣叙调：攻击力提升",
          describe: `宣叙调：攻击力提升${a}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
          enable: false,
        },
        {
          label: "咏叹调：全元素伤害提升",
          describe: `咏叹调：全元素伤害提升${b}%`,
          effect: [
            { type: BuffType.HydroPrcent, getValue: () => b },
            { type: BuffType.PyroPrcent, getValue: () => b },
            { type: BuffType.ElectroPrcent, getValue: () => b },
            { type: BuffType.AnemoPrcent, getValue: () => b },
            { type: BuffType.CryoPrcent, getValue: () => b },
            { type: BuffType.DendroPrcent, getValue: () => b },
            { type: BuffType.GeoPrcent, getValue: () => b },
          ],
          enable: false,
        },
        {
          label: "间奏曲：元素精通提升",
          describe: `间奏曲：元素精通提升${c}点`,
          effect: [{ type: BuffType.MysteryFixed, getValue: () => c }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "黑岩绯玉",
      enkaId: 14408,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Blackrock_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 55.1,
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1] + "%";
      return {
        title: "乘胜追击",
        text: highlight`击败敌人后，攻击力提升${a}，持续30秒。该效果至多叠加三层，每层持续时间独立。`,
      };
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1];
      return [
        {
          label: "攻击力提升",
          describe: `击败敌人后，攻击力提升${a}%，持续30秒。该效果至多叠加三层`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => s * a }],
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
      name: "宗室秘法录",
      enkaId: 14404,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Theocrat_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 27.6,
    },
    (affix = 1) => {
      let a = [8, 10, 12, 14, 16][affix - 1] + "%";
      return {
        title: "专注",
        text: highlight`攻击造成伤害时，暴击率提升${a}，最多堆叠5次。攻击造成暴击后，移除已有的专注效果。`,
      };
    },
    (affix = 1) => {
      let a = [8, 10, 12, 14, 16][affix - 1];
      return [
        {
          label: "暴击率提升",
          describe: `攻击造成伤害时，暴击率提升${a}%，最多堆叠5次。攻击造成暴击后，移除已有的专注效果`,
          effect: [{ type: BuffType.Critcal, getValue: (_, s) => a * s }],
          enable: true,
          stackable: true,
          stack: 0,
          limit: 5,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "西风猎弓",
      enkaId: 15401,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Zephyrus_Awaken"),
      baseAtk: 454,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 61.3,
    },
    (affix = 1) => {
      let a = [60, 70, 80, 90, 100][affix - 1] + "%";
      let b = [12, 10.5, 9, 7.5, 6][affix - 1];
      return {
        title: "顺风而行",
        text: highlight`攻击造成暴击时，有${a}的几率产生少量元素微粒，能为角色恢复6点元素能量。该效果每${b}秒只能触发一次。`,
      };
    }
  ),
  createWeapon(
    {
      name: "祭礼残章",
      enkaId: 14403,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Fossil_Awaken"),
      baseAtk: 454,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 221,
    },
    (affix = 1) => {
      let a = [40, 50, 60, 70, 80][affix - 1] + "%";
      let b = [30, 26, 22, 19, 16][affix - 1];
      return {
        title: "气定神闲",
        text: highlight`元素战技造成伤害时，有${a}的概率重置该技能的冷却时间，该效果每${b}秒只能触发一次。`,
      };
    }
  ),
  createWeapon(
    {
      name: "万国诸海图谱",
      enkaId: 14407,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Exotic_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 110,
    },
    (affix = 1) => {
      let a = [8, 10, 12, 14, 16][affix - 1] + "%";
      return {
        title: "注能之卷",
        text: highlight`触发元素反应后的10秒内，获得${a}元素伤害加成，该效果最多可以叠加2层。`,
      };
    },
    (affix = 1) => {
      let a = [8, 10, 12, 14, 16][affix - 1];
      return [
        {
          label: "元素伤害加成",
          describe: `触发元素反应后，获得${a}%所有元素伤害加成，最多可以叠加2层`,
          effect: [
            { type: BuffType.HydroPrcent, getValue: (_, s) => a * s },
            { type: BuffType.PyroPrcent, getValue: (_, s) => a * s },
            { type: BuffType.ElectroPrcent, getValue: (_, s) => a * s },
            { type: BuffType.AnemoPrcent, getValue: (_, s) => a * s },
            { type: BuffType.CryoPrcent, getValue: (_, s) => a * s },
            { type: BuffType.DendroPrcent, getValue: (_, s) => a * s },
            { type: BuffType.GeoPrcent, getValue: (_, s) => a * s },
          ],
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
      name: "宗室长剑",
      enkaId: 11404,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Theocrat_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 41.3,
    },
    (affix = 1) => {
      let a = [8, 10, 12, 14, 16][affix - 1] + "%";
      return {
        title: "专注",
        text: highlight`攻击造成伤害时，暴击率提升${a}，最多堆叠5次。攻击造成暴击后，移除已有的专注效果。`,
      };
    },
    (affix = 1) => {
      let a = [8, 10, 12, 14, 16][affix - 1];
      return [
        {
          label: "暴击率提升",
          describe: `攻击造成伤害时，暴击率提升${a}%，最多堆叠5次。攻击造成暴击后，移除已有的专注效果`,
          effect: [{ type: BuffType.Critcal, getValue: (_, s) => a * s }],
          enable: true,
          stackable: true,
          stack: 0,
          limit: 5,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "宗室大剑",
      enkaId: 12404,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Theocrat_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 27.6,
    },
    (affix = 1) => {
      let a = [8, 10, 12, 14, 16][affix - 1] + "%";
      return {
        title: "专注",
        text: highlight`攻击造成伤害时，暴击率提升${a}，最多堆叠5次。攻击造成暴击后，移除已有的专注效果。`,
      };
    },
    (affix = 1) => {
      let a = [8, 10, 12, 14, 16][affix - 1];
      return [
        {
          label: "暴击率提升",
          describe: `攻击造成伤害时，暴击率提升${a}%，最多堆叠5次。攻击造成暴击后，移除已有的专注效果`,
          effect: [{ type: BuffType.Critcal, getValue: (_, s) => a * s }],
          enable: true,
          stackable: true,
          stack: 0,
          limit: 5,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "笛剑",
      enkaId: 11402,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Troupe_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 41.3,
    },
    (affix = 1) => {
      let a = [100, 125, 150, 175, 200][affix - 1] + "%";
      return {
        title: "和弦",
        text: highlight`普通攻击或重击命中时，会获得一个和音。积攒了5个和音后，释放音律的力量，对周围的敌人造成${a}攻击力的伤害。和音最多存在30秒，每0.5秒至多获得1个和音。`,
      };
    },
    (affix) => [],
    (affix = 1) => {
      let a = [100, 125, 150, 175, 200][affix - 1] / 100;
      return [
        {
          label: "笛剑·和弦",
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
      name: "西风剑",
      enkaId: 11401,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Zephyrus_Awaken"),
      baseAtk: 454,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 61.3,
    },
    (affix = 1) => {
      let a = [60, 70, 80, 90, 100][affix - 1] + "%";
      let b = [12, 10.5, 9, 7.5, 6][affix - 1];
      return {
        title: "顺风而行",
        text: highlight`攻击造成暴击时，有${a}的几率产生少量元素微粒，能为角色恢复6点元素能量。该效果每${b}秒只能触发一次。`,
      };
    }
  ),
  createWeapon(
    {
      name: "钟剑",
      enkaId: 12402,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Troupe_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.HP_PERCENT,
      statValue: 41.3,
    },
    (affix = 1) => {
      let a = [20, 23, 26, 29, 32][affix - 1] + "%";
      let b = [12, 15, 18, 21, 24][affix - 1] + "%";
      return {
        title: "叛逆的守护者",
        text: highlight`受到伤害时，生成一个伤害吸收量等同于生命值上限${a}的护盾，持续10秒或直到护盾失效,每45秒只能触发一次。角色处于护盾庇护下时，造成的伤害提升${b}`,
      };
    },
    (affix = 1) => {
      let b = [12, 15, 18, 21, 24][affix - 1];
      return [
        {
          label: "造成的伤害提升",
          describe: `角色处于护盾庇护下时，造成的伤害提升${b}%`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => b }],
          enable: false,
        },
      ];
    },
    (affix = 1) => {
      let a = [20, 23, 26, 29, 32][affix - 1] / 100;
      return [
        {
          label: "叛逆的守护者·护盾吸收量",
          rate: {
            hp: [a],
          },
          attackType: AttackType.Heal,
          elementType: ElementType.None,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "匣里日月",
      enkaId: 14405,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Resurrection_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CRITICAL,
      statValue: 27.6,
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1] + "%";
      return {
        title: "日月辉",
        text: highlight`普通攻击命中后的6秒内，元素战技与元素爆发的伤害提高${a}；元素战技与元素爆发命中后的6秒内，普通攻击的伤害提高${a}。`,
      };
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1];
      return [
        {
          label: "元素战技与元素爆发的伤害提高",
          describe: `普通攻击命中后，元素战技与元素爆发的伤害提高${a}%`,
          effect: [
            { type: BuffType.SkillPrcent, getValue: () => a },
            { type: BuffType.BurstPrcent, getValue: () => a },
          ],
          enable: false,
        },
        {
          label: "普通攻击的伤害提高",
          describe: `元素战技与元素爆发命中后，普通攻击的伤害提高${a}%`,
          effect: [{ type: BuffType.NormalPrcent, getValue: () => a }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "试作斩岩",
      enkaId: 11406,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Proto_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.PHYSICAL_ADD_HURT,
      statValue: 34.5,
    },
    (affix = 1) => {
      let a = [4, 5, 6, 7, 8][affix - 1] + "%";
      return {
        title: "碎石",
        text: highlight`普通攻击或重击命中时，攻击力和防御力提高${a}，持续6秒，最多叠加4层。该效果每0.3秒只能触发一次。`,
      };
    },
    (affix = 1) => {
      let a = [4, 5, 6, 7, 8][affix - 1];
      return [
        {
          label: "攻击力和防御力提高",
          describe: `普通攻击或重击命中时，攻击力和防御力提高${a}%，最多叠加4层`,
          effect: [
            { type: BuffType.ATKPrcent, getValue: (_, s) => a * s },
            { type: BuffType.DEFPrcent, getValue: (_, s) => a * s },
          ],
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
      name: "祭礼剑",
      enkaId: 11403,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Fossil_Awaken"),
      baseAtk: 454,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 61.3,
    },
    (affix = 1) => {
      let rat = [40, 50, 60, 70, 80][affix - 1] + "%";
      let sec = [30, 26, 22, 19, 16][affix - 1];
      return {
        title: "气定神闲",
        text: highlight`元素战技造成伤害时，有${rat}的概率重置该技能的冷却时间，该效果每${sec}秒只能触发一次。`,
      };
    }
  ),
  createWeapon(
    {
      name: "试作澹月",
      enkaId: 15406,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Proto_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 41.3,
    },
    (affix = 1) => {
      let a = [36, 45, 54, 63, 72][affix - 1] + "%";
      return {
        title: "离簇不归",
        text: highlight`重击若命中要害，则提升10%移动速度与${a}攻击力，持续10秒。`,
      };
    },
    (affix = 1) => {
      let a = [36, 45, 54, 63, 72][affix - 1];
      return [
        {
          label: "攻击力提高",
          describe: `重击若命中要害，则提升10%移动速度与${a}%攻击力`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "黑岩长剑",
      enkaId: 11408,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Blackrock_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 36.8,
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1] + "%";
      return {
        title: "乘胜追击",
        text: highlight`击败敌人后，攻击力提升${a}，持续30秒。该效果至多叠加三层，每层持续时间独立。`,
      };
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1];
      return [
        {
          label: "攻击力提升",
          describe: `击败敌人后，攻击力提升${a}%，持续30秒。该效果至多叠加三层`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => s * a }],
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
      name: "白影剑",
      enkaId: 12407,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Exotic_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.DEFENSE_PERCENT,
      statValue: 51.7,
    },
    (affix = 1) => {
      let a = [6, 7.5, 9, 10.5, 12][affix - 1] + "%";
      return {
        title: "注能之锋",
        text: highlight`普通攻击或重击命中时，攻击力和防御力提高${a}，持续6秒，最多叠加4层。该效果每0.3秒只能触发一次。`,
      };
    },
    (affix = 1) => {
      let a = [6, 7.5, 9, 10.5, 12][affix - 1];
      return [
        {
          label: "攻击力和防御力提高",
          describe: `普通攻击或重击命中时，攻击力和防御力提高${a}%，最多叠加4层`,
          effect: [
            { type: BuffType.ATKPrcent, getValue: (_, s) => a * s },
            { type: BuffType.DEFPrcent, getValue: (_, s) => a * s },
          ],
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
      name: "试作金珀",
      enkaId: 14406,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Proto_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.HP_PERCENT,
      statValue: 41.3,
    },
    (affix = 1) => {
      let a = [4, 4.5, 5, 5.5, 6][affix - 1];
      return {
        title: "炊金",
        text: highlight`施放元素爆发后6秒内，每2秒恢复${a}点元素能量；此外，队伍中的所有角色每2秒恢复${a}%生命值。`,
      };
    },
    () => [],
    (affix = 1) => {
      let a = [4, 4.5, 5, 5.5, 6][affix - 1] / 100;
      return [
        {
          label: "试作金珀·回复量",
          rate: {
            hp: [a],
          },
          attackType: AttackType.Heal,
          elementType: ElementType.None,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "昭心",
      enkaId: 14409,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Truelens_Awaken"),
      baseAtk: 454,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 55.1,
    },
    (affix = 1) => {
      let a = [240, 270, 300, 330, 360][affix - 1] + "%";
      let b = [12, 11, 10, 9, 8][affix - 1];
      return {
        title: "回响",
        text: highlight`普通攻击与重击命中时，有50%几率发射一枚昭心法球，造成${a}攻击力伤害，至多在敌人之间弹射4次。该效果每${b}秒至多触发一次。`,
      };
    },
    () => [],
    (affix = 1) => {
      let a = [240, 270, 300, 330, 360][affix - 1] / 100;
      return [
        {
          label: "昭心·回响",
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
      name: "黑岩战弓",
      enkaId: 15408,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Blackrock_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 36.8,
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1] + "%";
      return {
        title: "乘胜追击",
        text: highlight`击败敌人后，攻击力提升${a}，持续30秒。该效果至多叠加三层，每层持续时间独立。`,
      };
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1];
      return [
        {
          label: "攻击力提升",
          describe: `击败敌人后，攻击力提升${a}%，持续30秒。该效果至多叠加三层`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => s * a }],
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
      name: "黑岩斩刀",
      enkaId: 12408,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Blackrock_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 55.1,
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1] + "%";
      return {
        title: "乘胜追击",
        text: highlight`击败敌人后，攻击力提升${a}，持续30秒。该效果至多叠加三层，每层持续时间独立。`,
      };
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1];
      return [
        {
          label: "攻击力提升",
          describe: `击败敌人后，攻击力提升${a}%，持续30秒。该效果至多叠加三层`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => s * a }],
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
      name: "黑剑",
      enkaId: 11409,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Bloodstained_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CRITICAL,
      statValue: 27.6,
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1] + "%";
      let b = [60, 70, 80, 90, 100][affix - 1] + "%";
      return {
        title: "正义",
        text: highlight`普通攻击与重击的造成的伤害提升${a}；此外，普通攻击与重击暴击时，回复等同于攻击力${b}的生命值。该效果每5秒至多发动一次。`,
      };
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1];
      return [
        {
          label: "普通攻击与重击的造成的伤害提升",
          describe: `普通攻击与重击的造成的伤害提升${a}%`,
          effect: [
            { type: BuffType.NormalPrcent, getValue: () => a },
            { type: BuffType.StrongPrcent, getValue: () => a },
          ],
          enable: true,
        },
      ];
    },
    (affix = 1) => {
      let a = [60, 70, 80, 90, 100][affix - 1] / 100;
      return [
        {
          label: "黑剑·回复量",
          rate: {
            atk: [a],
          },
          attackType: AttackType.Heal,
          elementType: ElementType.None,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "流月针",
      enkaId: 13403,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Exotic_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.PHYSICAL_ADD_HURT,
      statValue: 34.5,
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1] + "%";
      return {
        title: "注能之针",
        text: highlight`获得元素微粒或者元素晶球后的5秒内，普通攻击和重击额外造成${a}攻击力伤害 。`,
      };
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1];
      return [
        {
          label: "普通攻击与重击的造成的伤害提升",
          describe: `普通攻击与重击的造成的伤害提升${a}%`,
          effect: [
            { type: BuffType.NormalPrcent, getValue: () => a },
            { type: BuffType.StrongPrcent, getValue: () => a },
          ],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "钢轮弓",
      enkaId: 15407,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Exotic_Awaken"),
      baseAtk: 454,
      rarity: Rarity.Four,
      appendPropId: AppendProp.PHYSICAL_ADD_HURT,
      statValue: 69,
    },
    (affix = 1) => {
      let a = [4, 5, 6, 7, 8][affix - 1] + "%";
      let b = [1.2, 1.5, 1.8, 2.1, 2.4][affix - 1] + "%";
      return {
        title: "注能之矢",
        text: highlight`普通攻击与重击命中时，提升${a}攻击力与${b}普通攻击速度。该效果持续6秒，最多可以叠加4层，每0.3秒只能触发一次。`,
      };
    },
    (affix = 1) => {
      let a = [4, 5, 6, 7, 8][affix - 1];
      return [
        {
          label: "攻击力提升",
          describe: `普通攻击与重击命中时，提升${a}%攻击力，最多可以叠加4层`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => s * a }],
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
      name: "试作星镰",
      enkaId: 13402,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Proto_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 45.9,
    },
    (affix = 1) => {
      let a = [8, 10, 12, 14, 16][affix - 1] + "%";
      return {
        title: "嗜魔",
        text: highlight`施放元素战技后，普通攻击和重击造成的伤害提高${a}。持续12秒，最多叠加2层。`,
      };
    },
    (affix = 1) => {
      let a = [8, 10, 12, 14, 16][affix - 1];
      return [
        {
          label: "普通攻击和重击造成的伤害提高",
          describe: `普通攻击和重击造成的伤害提高${a}%，最多可以叠加2层`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => s * a }],
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
      name: "祭礼大剑",
      enkaId: 12403,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Fossil_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 30.6,
    },
    (affix = 1) => {
      let rat = [40, 50, 60, 70, 80][affix - 1] + "%";
      let sec = [30, 26, 22, 19, 16][affix - 1];
      return {
        title: "气定神闲",
        text: highlight`元素战技造成伤害时，有${rat}的概率重置该技能的冷却时间，该效果每${sec}秒只能触发一次。`,
      };
    }
  ),
  createWeapon(
    {
      name: "决斗之枪",
      enkaId: 13405,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Gladiator_Awaken"),
      baseAtk: 454,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CRITICAL,
      statValue: 36.8,
    },
    (affix = 1) => {
      let a = [16, 20, 24, 28, 32][affix - 1] + "%";
      let b = [24, 30, 36, 42, 48][affix - 1] + "%";
      return {
        title: "角斗士",
        text: highlight`身边至少有2个敌人时，获得${a}攻击力提升与${a}防御力提升；身边的敌人少于2个时，获得${b}攻击力提升。`,
      };
    },
    (affix = 1) => {
      let a = [16, 20, 24, 28, 32][affix - 1];
      let b = [24, 30, 36, 42, 48][affix - 1];
      return [
        {
          label: "攻击力提升与防御力提升",
          describe: `至少有2个敌人时，获得${a}%攻击力提升与${a}%防御力提升`,
          effect: [
            { type: BuffType.ATKPrcent, getValue: () => a },
            { type: BuffType.DEFPrcent, getValue: () => a },
          ],
          enable: false,
        },
        {
          label: "攻击力提升",
          describe: `少于2个敌人时，获得${b}%攻击力提升`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => b }],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "苍翠猎弓",
      enkaId: 15409,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Viridescent_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CRITICAL,
      statValue: 27.6,
    },
    (affix = 1) => {
      let a = [40, 50, 60, 70, 80][affix - 1] + "%";
      let b = [14, 13, 12, 11, 10][affix - 1];
      return {
        title: "苍翠之风",
        text: highlight`普通攻击与重击命中时，有50%几率生成一个风之眼，持续吸引周围敌人，并对其中的敌人每0.5秒造成${a}攻击的伤害。该效果持续4秒，每${b}秒至多触发一次。`,
      };
    },
    (affix = 1) => [],
    (affix = 1) => {
      let a = [40, 50, 60, 70, 80][affix - 1] / 100;
      return [
        {
          label: "苍翠猎弓·风之眼",
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
      name: "螭骨剑",
      enkaId: 12409,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Kione_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CRITICAL,
      statValue: 27.6,
    },
    (affix = 1) => {
      let a = [6, 7, 8, 9, 10][affix - 1] + "%";
      let b = [3, 2.7, 2.4, 2.2, 2][affix - 1] + "%";
      return {
        title: "破浪",
        text: highlight`角色在场上时，每4秒提升${a}造成的伤害，${b}受到的伤害。该效果最多叠加5层，不随角色退场重置，受到伤害后会减少1层效果。`,
      };
    },
    (affix = 1) => {
      let a = [6, 7, 8, 9, 10][affix - 1];
      return [
        {
          label: "伤害提高",
          describe: `每4秒提升${a}%造成的伤害，最多可以叠加5层`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: (_, s) => s * a }],
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
      name: "宗室猎枪",
      enkaId: 13408,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Theocrat_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 27.6,
    },
    (affix = 1) => {
      let a = [8, 10, 12, 14, 16][affix - 1] + "%";
      return {
        title: "专注",
        text: highlight`攻击造成伤害时，暴击率提升${a}，最多堆叠5次。攻击造成暴击后，移除已有的专注效果。`,
      };
    },
    (affix = 1) => {
      let a = [8, 10, 12, 14, 16][affix - 1];
      return [
        {
          label: "暴击率提升",
          describe: `攻击造成伤害时，暴击率提升${a}%，最多堆叠5次。攻击造成暴击后，移除已有的专注效果`,
          effect: [{ type: BuffType.Critcal, getValue: (_, s) => a * s }],
          enable: true,
          stackable: true,
          stack: 0,
          limit: 5,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "腐殖之剑",
      enkaId: 11413,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Magnum_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 45.9,
    },
    (affix = 1) => {
      let a = [16, 20, 24, 28, 32][affix - 1] + "%";
      let b = [6, 7.5, 9, 10.5, 12][affix - 1] + "%";
      return {
        title: "无尽的渴慕",
        text: highlight`元素战技造成的伤害增加${a}，元素战技的暴击率提升${b}。`,
      };
    },
    (affix = 1) => {
      let a = [16, 20, 24, 28, 32][affix - 1];
      let b = [6, 7.5, 9, 10.5, 12][affix - 1];
      return [
        {
          label: "元素战技伤害增加、暴击率提升",
          describe: `元素战技造成的伤害增加${a}%，元素战技的暴击率提升${b}%`,
          effect: [
            { type: BuffType.SkillPrcent, getValue: () => a },
            { type: BuffType.SkillCritcal, getValue: () => b },
          ],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "雪葬的星银",
      enkaId: 12411,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Dragonfell_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.PHYSICAL_ADD_HURT,
      statValue: 34.5,
    },
    (affix = 1) => {
      let a = [60, 70, 80, 90, 100][affix - 1] + "%";
      let b = [80, 95, 110, 125, 140][affix - 1] + "%";
      let c = [200, 240, 280, 320, 360][affix - 1] + "%";
      return {
        title: "霜葬",
        text: highlight`普通攻击与重击命中敌人时，有${a}概率在敌人上方生成恒冰晶核并坠落，造成${b}攻击力的范围伤害。若敌人处于冰元素影响下，则造成${c}攻击力的伤害。该效果每10秒至多触发一次。`,
      };
    },
    (affix = 1) => [],
    (affix = 1) => {
      let b = [80, 95, 110, 125, 140][affix - 1] / 100;
      let c = [200, 240, 280, 320, 360][affix - 1] / 100;
      return [
        {
          label: "雪葬的星银·恒冰晶核",
          rate: {
            atk: [b],
          },
          attackType: AttackType.Other,
          elementType: ElementType.Physical,
        },
        {
          label: "冰元素影响·恒冰晶核",
          rate: {
            atk: [c],
          },
          attackType: AttackType.Other,
          elementType: ElementType.Physical,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "龙脊长枪",
      enkaId: 13409,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Everfrost_Awaken"),
      baseAtk: 454,
      rarity: Rarity.Four,
      appendPropId: AppendProp.PHYSICAL_ADD_HURT,
      statValue: 69,
    },
    (affix = 1) => {
      let a = [60, 70, 80, 90, 100][affix - 1] + "%";
      let b = [80, 95, 110, 125, 140][affix - 1] + "%";
      let c = [200, 240, 280, 320, 360][affix - 1] + "%";
      return {
        title: "霜葬",
        text: highlight`普通攻击与重击命中敌人时，有${a}概率在敌人上方生成恒冰晶核并坠落，造成${b}攻击力的范围伤害。若敌人处于冰元素影响下，则造成${c}攻击力的伤害。该效果每10秒至多触发一次。`,
      };
    },
    (affix = 1) => [],
    (affix = 1) => {
      let b = [80, 95, 110, 125, 140][affix - 1] / 100;
      let c = [200, 240, 280, 320, 360][affix - 1] / 100;
      return [
        {
          label: "龙脊长枪·恒冰晶核",
          rate: {
            atk: [b],
          },
          attackType: AttackType.Other,
          elementType: ElementType.Physical,
        },
        {
          label: "冰元素影响·恒冰晶核",
          rate: {
            atk: [c],
          },
          attackType: AttackType.Other,
          elementType: ElementType.Physical,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "忍冬之果",
      enkaId: 14412,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Everfrost_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 41.3,
    },
    (affix = 1) => {
      let a = [60, 70, 80, 90, 100][affix - 1] + "%";
      let b = [80, 95, 110, 125, 140][affix - 1] + "%";
      let c = [200, 240, 280, 320, 360][affix - 1] + "%";
      return {
        title: "霜葬",
        text: highlight`普通攻击与重击命中敌人时，有${a}概率在敌人上方生成恒冰晶核并坠落，造成${b}攻击力的范围伤害。若敌人处于冰元素影响下，则造成${c}攻击力的伤害。该效果每10秒至多触发一次。`,
      };
    },
    (affix = 1) => [],
    (affix = 1) => {
      let b = [80, 95, 110, 125, 140][affix - 1] / 100;
      let c = [200, 240, 280, 320, 360][affix - 1] / 100;
      return [
        {
          label: "忍冬之果·恒冰晶核",
          rate: {
            atk: [b],
          },
          attackType: AttackType.Other,
          elementType: ElementType.Physical,
        },
        {
          label: "冰元素影响·恒冰晶核",
          rate: {
            atk: [c],
          },
          attackType: AttackType.Other,
          elementType: ElementType.Physical,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "千岩长枪",
      enkaId: 13406,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Lapis_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 27.6,
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
      name: "暗巷闪光",
      enkaId: 11410,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Outlaw_Awaken"),
      baseAtk: 620,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 55,
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1] + "%";
      return {
        title: "街巷游侠",
        text: highlight`角色造成的伤害提升${a}。受到伤害后，该伤害提升效果会失效5秒。`,
      };
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1];

      return [
        {
          label: "伤害提升",
          describe: `角色造成的伤害提升${a}%`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => a }],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "暗巷猎手",
      enkaId: 15410,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Outlaw_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 27.6,
    },
    (affix = 1) => {
      let a = [2, 2.5, 3, 3.5, 4][affix - 1] + "%";
      let b = [20, 25, 30, 35, 40][affix - 1] + "%";
      let c = [4, 5, 6, 7, 8][affix - 1] + "%";
      return {
        title: "街巷伏击",
        text: highlight`装备该武器的角色处于队伍后台时，每1秒角色造成的伤害提升${a}，最多通过这种方式获得${b}的伤害提升；在场上超过4秒后，上述伤害提升效果每1秒会流失${c}，直到降低至0%。`,
      };
    },
    (affix = 1) => {
      let a = [2, 2.5, 3, 3.5, 4][affix - 1];
      let b = [20, 25, 30, 35, 40][affix - 1];
      return [
        {
          label: "造成的伤害提升",
          describe: `处于队伍后台时，每1秒角色造成的伤害提升${a}%，最多通过这种方式获得${b}%的伤害提升`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: (_, s) => a * 2 * s }],
          enable: true,
          stackable: true,
          stack: 5,
          limit: 5,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "暗巷的酒与诗",
      enkaId: 14410,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Outlaw_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 30.6,
    },
    (affix = 1) => {
      let a = [14, 16, 18, 20, 22][affix - 1] + "%";
      let b = [20, 25, 30, 35, 40][affix - 1] + "%";
      return {
        title: "变化万端",
        text: highlight`普通攻击命中敌人后，冲刺或替代冲刺的能力消耗的体力降低${a}，持续5秒。此外，使用冲刺或替代冲刺的能力后，攻击力提升${b}，持续5秒。`,
      };
    },
    (affix = 1) => {
      let b = [20, 25, 30, 35, 40][affix - 1];
      return [
        {
          label: "攻击力提升",
          describe: `使用冲刺或替代冲刺的能力后，攻击力提升${b}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => b }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "风花之颂",
      enkaId: 15413,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Fleurfair_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 165,
    },
    (affix = 1) => {
      let a = [16, 20, 24, 28, 32][affix - 1] + "%";
      return {
        title: "风花之愿",
        text: highlight`施放元素战技时，获得风之花的悠古愿望加持，攻击力提升${a}，持续6秒。`,
      };
    },
    (affix = 1) => {
      let a = [16, 20, 24, 28, 32][affix - 1];
      return [
        {
          label: "攻击力提升",
          describe: `施放元素战技时，攻击力提升${a}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "幽夜华尔兹",
      enkaId: 15412,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Nachtblind_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.PHYSICAL_ADD_HURT,
      statValue: 51.7,
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1] + "%";
      return {
        title: "极夜二重奏",
        text: highlight`普通攻击命中敌人后的5秒内，元素战技造成的伤害提升${a}；元素战技命中敌人后的5秒内，普通攻击造成的伤害提升${a}。`,
      };
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1];
      return [
        {
          label: "元素战技造成的伤害提升",
          describe: `普通攻击命中敌人后，元素战技造成的伤害提升${a}%`,
          effect: [{ type: BuffType.SkillPrcent, getValue: () => a }],
          enable: false,
        },
        {
          label: "普通攻击造成的伤害提升",
          describe: `元素战技命中敌人后，普通攻击造成的伤害提升${a}%`,
          effect: [{ type: BuffType.NormalPrcent, getValue: () => a }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "嘟嘟可故事集",
      enkaId: 14413,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Ludiharpastum_Awaken"),
      baseAtk: 454,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 55.1,
    },
    (affix = 1) => {
      let a = [16, 20, 24, 28, 32][affix - 1] + "%";
      let b = [8, 10, 12, 14, 16][affix - 1] + "%";
      return {
        title: "嘟嘟！大冒险",
        text: highlight`普通攻击命中敌人后的6秒内，重击造成的伤害提升${a}；重击命中敌人后的6秒内，攻击力提升${b}。`,
      };
    },
    (affix = 1) => {
      let a = [16, 20, 24, 28, 32][affix - 1];
      let b = [8, 10, 12, 14, 16][affix - 1];
      return [
        {
          label: "重击造成的伤害提升",
          describe: `普通攻击命中敌人后的6秒内，重击造成的伤害提升${a}%`,
          effect: [{ type: BuffType.StrongPrcent, getValue: () => a }],
          enable: false,
        },
        {
          label: "攻击力提升",
          describe: `重击命中敌人后，攻击力提升${b}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => b }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "飞天御剑",
      enkaId: 11306,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Mitsurugi_Awaken"),
      baseAtk: 354,
      rarity: Rarity.Three,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 52.1,
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1] + "%";
      return {
        title: "决心",
        text: highlight`施放元素爆发后，提高${a}攻击力和移动速度，持续15秒。`,
      };
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1];
      return [
        {
          label: "攻击力提升",
          describe: `施放元素爆发后，提高${a}%攻击力`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "铁影阔剑",
      enkaId: 12301,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Glaive_Awaken"),
      baseAtk: 401,
      rarity: Rarity.Three,
      appendPropId: AppendProp.HP_PERCENT,
      statValue: 35.2,
    },
    (affix = 1) => {
      let a = [70, 75, 80, 85, 90][affix - 1] + "%";
      let n = [30, 35, 40, 45, 50][affix - 1] + "%";
      return {
        title: "不屈",
        text: highlight`生命值低于${a}时，重击不会轻易被打断，并提高${n}重击伤害。`,
      };
    },
    (affix = 1) => {
      let a = [70, 75, 80, 85, 90][affix - 1];
      let n = [30, 35, 40, 45, 50][affix - 1];
      return [
        {
          label: "重击伤害提升",
          describe: `生命值低于${a}%时，提高${n}%重击伤害`,
          effect: [{ type: BuffType.StrongPrcent, getValue: () => n }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "沐浴龙血的剑",
      enkaId: 12302,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Siegfry_Awaken"),
      baseAtk: 354,
      rarity: Rarity.Three,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 187,
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1] + "%";
      return {
        title: "踏火息雷",
        text: highlight`对处于火元素或雷元素影响下的敌人，造成的伤害提高${a}。`,
      };
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1];
      return [
        {
          label: "造成的伤害提高",
          describe: `对处于火元素或雷元素影响下的敌人，造成的伤害提高${a}%`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => a }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "以理服人",
      enkaId: 12305,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Reasoning_Awaken"),
      baseAtk: 401,
      rarity: Rarity.Three,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 35.2,
    },
    (affix = 1) => {
      let a = [60, 75, 90, 105, 120][affix - 1] + "%";
      return {
        title: "有话直说",
        text: highlight`施放元素战技后，普通攻击和重击命中时会在小范围内额外造成${a}攻击力的伤害。该效果持续15秒，伤害每3秒只能触发一次。`,
      };
    },
    (affix = 1) => [],
    (affix = 1) => {
      let a = [60, 75, 90, 105, 120][affix - 1] / 100;
      return [
        {
          label: "以理服人·有话直说",
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
      name: "黑缨枪",
      enkaId: 13303,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Noire_Awaken"),
      baseAtk: 354,
      rarity: Rarity.Three,
      appendPropId: AppendProp.HP_PERCENT,
      statValue: 46.9,
    },
    (affix = 1) => {
      let a = [40, 50, 60, 70, 80][affix - 1] + "%";
      return {
        title: "克柔",
        text: highlight`对史莱姆类敌人造成的伤害增加${a}。`,
      };
    },
    (affix = 1) => {
      let a = [40, 50, 60, 70, 80][affix - 1];
      return [
        {
          label: "对史莱姆类敌人造成的伤害增加",
          describe: `对史莱姆类敌人造成的伤害增加${a}%`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => a }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "讨龙英杰谭",
      enkaId: 14302,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Pulpfic_Awaken"),
      baseAtk: 401,
      rarity: Rarity.Three,
      appendPropId: AppendProp.HP_PERCENT,
      statValue: 35.2,
    },
    (affix = 1) => {
      let a = [24, 30, 36, 42, 48][affix - 1] + "%";
      return {
        title: "传承",
        text: highlight`主动切换角色时，新登场的角色攻击力提升${a}，持续10秒。该效果每20秒只能触发一次。`,
      };
    },
    (affix = 1) => {
      let a = [24, 30, 36, 42, 48][affix - 1];
      return [
        {
          label: "传承",
          describe: `新登场的角色攻击力提升${a}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
          enable: false,
          shareable: true,
          target: BuffTarget.Other,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "弹弓",
      enkaId: 15304,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Sling_Awaken"),
      baseAtk: 354,
      rarity: Rarity.Three,
      appendPropId: AppendProp.CRITICAL,
      statValue: 31.2,
    },
    (affix = 1) => {
      let a = [36, 42, 48, 54, 60][affix - 1] + "%";
      return {
        title: "弹弓",
        text: highlight`普通攻击与重击的箭矢若在发射后的0.3秒内击中敌人，则造成的伤害增加${a}；否则，造成的伤害下降10%。`,
      };
    },
    (affix = 1) => {
      let a = [36, 42, 48, 54, 60][affix - 1];
      return [
        {
          label: "普通攻击与重击的箭矢的伤害增加",
          describe: `箭矢若在发射后的0.3秒内击中敌人，则造成的伤害增加${a}%`,
          effect: [
            { type: BuffType.NormalPrcent, getValue: () => a },
            { type: BuffType.StrongPrcent, getValue: () => a },
          ],
          enable: true,
        },
        {
          label: "普通攻击与重击的箭矢的伤害降低",
          describe: `箭矢若在发射后的0.3秒内没有击中敌人，则造成的伤害减少10%`,
          effect: [
            { type: BuffType.NormalPrcent, getValue: () => -10 },
            { type: BuffType.StrongPrcent, getValue: () => -10 },
          ],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "鸦羽弓",
      enkaId: 15301,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Crowfeather_Awaken"),
      baseAtk: 448,
      rarity: Rarity.Three,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 94,
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1] + "%";
      return {
        title: "踏火止水",
        text: highlight`对处于水元素或火元素影响下的敌人，造成的伤害提高${a}。`,
      };
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1];
      return [
        {
          label: "造成的伤害提高",
          describe: `对处于水元素或火元素影响下的敌人，造成的伤害提高${a}%`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => a }],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "冷刃",
      enkaId: 11301,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Steel_Awaken"),
      baseAtk: 401,
      rarity: Rarity.Three,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 35.2,
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1] + "%";
      return {
        title: "止水融冰",
        text: highlight`对处于水元素或冰元素影响下的敌人，造成的伤害提高${a}。`,
      };
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1];
      return [
        {
          label: "造成的伤害提高",
          describe: `对处于水元素或冰元素影响下的敌人，造成的伤害提高${a}%`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => a }],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "魔导绪论",
      enkaId: 14301,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Intro_Awaken"),
      baseAtk: 354,
      rarity: Rarity.Three,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 187,
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1] + "%";
      return {
        title: "止水息雷",
        text: highlight`对处于水元素或雷元素影响下的敌人，造成的伤害提高${a}。`,
      };
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1];
      return [
        {
          label: "造成的伤害提高",
          describe: `对处于水元素或雷元素影响下的敌人，造成的伤害提高${a}%`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => a }],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "黎明神剑",
      enkaId: 11302,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Dawn_Awaken"),
      baseAtk: 401,
      rarity: Rarity.Three,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 46.9,
    },
    (affix = 1) => {
      let a = [14, 17.5, 21, 24.5, 28][affix - 1] + "%";
      return {
        title: "激励",
        text: highlight`生命值高于90%时，暴击率提升${a}。`,
      };
    },
    (affix = 1) => {
      let a = [14, 17.5, 21, 24.5, 28][affix - 1];
      return [
        {
          label: "造成的伤害提高",
          describe: `生命值高于90%时，暴击率提升${a}%`,
          effect: [{ type: BuffType.Critcal, getValue: () => a }],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "暗铁剑",
      enkaId: 11304,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Darker_Awaken"),
      baseAtk: 401,
      rarity: Rarity.Three,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 141,
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1] + "%";
      return {
        title: "过载",
        text: highlight`触发超载、超导、感电、原激化、超激化、超绽放或雷元素扩散反应后的12秒内，攻击力提高${a}。`,
      };
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1];
      return [
        {
          label: "攻击力提高",
          describe: `触发超载、超导、感电、原激化、超激化、超绽放或雷元素扩散反应后，攻击力提高${a}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "神射手之誓",
      enkaId: 15302,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Arjuna_Awaken"),
      baseAtk: 401,
      rarity: Rarity.Three,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 46.9,
    },
    (affix = 1) => {
      let a = [24, 30, 36, 42, 48][affix - 1] + "%";
      return {
        title: "精准",
        text: highlight`针对要害造成的伤害提升${a}。`,
      };
    },
    (affix = 1) => {
      let a = [24, 30, 36, 42, 48][affix - 1];
      return [
        {
          label: "针对要害造成的伤害提升",
          describe: `针对要害造成的伤害提升${a}%（本计算器中，该增益启用时视为全增伤）`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => a }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "飞天大御剑",
      enkaId: 12306,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Mitsurugi_Awaken"),
      baseAtk: 401,
      rarity: Rarity.Three,
      appendPropId: AppendProp.PHYSICAL_ADD_HURT,
      statValue: 43.9,
    },
    (affix = 1) => {
      let a = [6, 7, 8, 9, 10][affix - 1] + "%";
      return {
        title: "勇气",
        text: highlight`普通攻击和重击命中时，攻击力提高${a}，持续6秒，最多叠加4层。该效果每0.5秒只能触发一次。`,
      };
    },
    (affix = 1) => {
      let a = [6, 7, 8, 9, 10][affix - 1];
      return [
        {
          label: "攻击力提高",
          describe: `普通攻击和重击命中时，攻击力提高${a}%，最多叠加4层`,
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => s * a }],
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
      name: "白缨枪",
      enkaId: 13301,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Ruby_Awaken"),
      baseAtk: 401,
      rarity: Rarity.Three,
      appendPropId: AppendProp.CRITICAL,
      statValue: 23.4,
    },
    (affix = 1) => {
      let a = [24, 30, 36, 42, 48][affix - 1] + "%";
      return {
        title: "锐利",
        text: highlight`普通攻击造成的伤害提升${a}。`,
      };
    },
    (affix = 1) => {
      let a = [24, 30, 36, 42, 48][affix - 1];
      return [
        {
          label: "普通攻击造成的伤害提升",
          describe: `普通攻击造成的伤害提升${a}%`,
          effect: [{ type: BuffType.NormalPrcent, getValue: () => a }],
          enable: true,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "甲级宝珏",
      enkaId: 14305,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Phoney_Awaken"),
      baseAtk: 448,
      rarity: Rarity.Three,
      appendPropId: AppendProp.CRITICAL,
      statValue: 15.6,
    },
    (affix = 1) => {
      let a = [12, 14, 16, 18, 20][affix - 1] + "%";
      return {
        title: "奔袭战术",
        text: highlight`击败敌人后的15秒内，移动速度和攻击力提升${a}。`,
      };
    },
    (affix = 1) => {
      let a = [12, 14, 16, 18, 20][affix - 1];
      return [
        {
          label: "攻击力提升",
          describe: `击败敌人后攻击力提升${a}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
          enable: false,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "异世界行记",
      enkaId: 14303,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Lightnov_Awaken"),
      baseAtk: 401,
      rarity: Rarity.Three,
      appendPropId: AppendProp.CHARGE_EFFICIENCY,
      statValue: 39,
    },
    (affix = 1) => {
      let a = [1, 1.25, 1.5, 1.75, 2][affix - 1] + "%";
      return {
        title: "能量沐浴",
        text: highlight`获得元素微粒或者元素晶球时，恢复${a}生命值。`,
      };
    },
    () => [],
    (affix = 1) => {
      let a = [1, 1.25, 1.5, 1.75, 2][affix - 1] / 100;
      return [
        {
          label: "异世界行记·回复量",
          rate: {
            hp: [a],
          },
          attackType: AttackType.Heal,
          elementType: ElementType.None,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "信使",
      enkaId: 15305,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Msg_Awaken"),
      baseAtk: 448,
      rarity: Rarity.Three,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 31.2,
    },
    (affix = 1) => {
      let a = [100, 125, 150, 175, 200][affix - 1] + "%";
      return {
        title: "飞矢传书",
        text: highlight`重击若命中要害，则额外造成${a}攻击力的伤害，该伤害必定暴击。此效果每10秒只能触发一次。`,
      };
    },
    () => [],
    (affix) => {
      let a = [100, 125, 150, 175, 200][affix - 1] / 100;
      return [
        {
          label: "信使·飞矢传书",
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
      name: "反曲弓",
      enkaId: 15303,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Curve_Awaken"),
      baseAtk: 354,
      rarity: Rarity.Three,
      appendPropId: AppendProp.HP_PERCENT,
      statValue: 46.9,
    },
    (affix = 1) => {
      let a = [8, 10, 12, 14, 16][affix - 1] + "%";
      return {
        title: "收割",
        text: highlight`击败敌人时，恢复${a}生命值。`,
      };
    },
    () => [],
    (affix = 1) => {
      let a = [8, 10, 12, 14, 16][affix - 1] / 100;
      return [
        {
          label: "反曲弓·回复量",
          rate: {
            hp: [a],
          },
          attackType: AttackType.Heal,
          elementType: ElementType.None,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "吃虎鱼刀",
      enkaId: 11305,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Sashimi_Awaken"),
      baseAtk: 401,
      rarity: Rarity.Three,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 35.2,
    },
    (affix = 1) => {
      let a = [240, 280, 320, 360, 400][affix - 1] + "%";
      let b = [15, 14, 13, 12, 11][affix - 1];
      return {
        title: "决",
        text: highlight`攻击命中时，有50%的概率对单个敌人造成${a}攻击力的伤害。该效果每${b}秒只能触发一次。`,
      };
    },
    () => [],
    (affix) => {
      let a = [240, 280, 320, 360, 400][affix - 1] / 100;
      return [
        {
          label: "吃虎鱼刀·决",
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
      name: "旅行剑",
      enkaId: 11303,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Traveler_Awaken"),
      baseAtk: 448,
      rarity: Rarity.Three,
      appendPropId: AppendProp.DEFENSE_PERCENT,
      statValue: 29.3,
    },
    (affix = 1) => {
      let a = [1, 1.25, 1.5, 1.75, 2][affix - 1] + "%";
      return {
        title: "旅程",
        text: highlight`获得元素晶球或元素微粒时，恢复${a}生命值。`,
      };
    },
    () => [],
    (affix = 1) => {
      let a = [1, 1.25, 1.5, 1.75, 2][affix - 1] / 100;
      return [
        {
          label: "旅行剑·回复量",
          rate: {
            hp: [a],
          },
          attackType: AttackType.Heal,
          elementType: ElementType.None,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "翡玉法球",
      enkaId: 14304,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Jade_Awaken"),
      baseAtk: 448,
      rarity: Rarity.Three,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 94,
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1] + "%";
      return {
        title: "激流",
        text: highlight`触发蒸发、感电、冰冻、绽放或水元素扩散反应后的12秒内，攻击力提高${a}。`,
      };
    },
    (affix = 1) => {
      let a = [20, 25, 30, 35, 40][affix - 1];
      return [
        {
          label: "攻击力提高",
          describe: `触发蒸发、感电、冰冻、绽放或水元素扩散反应后的12秒内，攻击力提高${a}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
          enable: false,
        },
      ];
    }
  ),

  createWeapon(
    {
      name: "钺矛",
      enkaId: 13302,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Halberd_Awaken"),
      baseAtk: 448,
      rarity: Rarity.Three,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 23.5,
    },
    (affix = 1) => {
      let a = [160, 200, 240, 280, 320][affix - 1] + "%";
      return {
        title: "沉重",
        text: highlight`对普通攻击命中的敌人造成${a}攻击力的额外伤害。该效果每10秒只能触发一次。`,
      };
    },
    () => [],
    (affix) => {
      let a = [160, 200, 240, 280, 320][affix - 1] / 100;
      return [
        {
          label: "钺矛·沉重",
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
      name: "白铁大剑",
      enkaId: 12303,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Tin_Awaken"),
      baseAtk: 401,
      rarity: Rarity.Three,
      appendPropId: AppendProp.DEFENSE_PERCENT,
      statValue: 43.9,
    },
    (affix = 1) => {
      let a = [8, 10, 12, 14, 16][affix - 1] + "%";
      return {
        title: "收割",
        text: highlight`击败敌人时，恢复${a}生命值。`,
      };
    },
    () => [],
    (affix = 1) => {
      let a = [8, 10, 12, 14, 16][affix - 1] / 100;
      return [
        {
          label: "白铁大剑·收割回复量",
          rate: {
            hp: [a],
          },
          attackType: AttackType.Heal,
          elementType: ElementType.None,
        },
      ];
    }
  ),
  createWeapon(
    {
      name: "银剑",
      enkaId: 11201,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Silver_Awaken"),
      baseAtk: 243,
      rarity: Rarity.Two,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 0,
    },
    () => {
      return {
        title: "",
        text: highlight`能退魔的银剑。大家都知道，其实用料是银合金而不是纯银,`,
      };
    }
  ),
  createWeapon(
    {
      name: "佣兵重剑",
      enkaId: 12201,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Oyaji_Awaken"),
      baseAtk: 243,
      rarity: Rarity.Two,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 0,
    },
    () => {
      return {
        title: "",
        text: highlight`沉重坚实的古旧大剑，饱经战火与岁月的洗练。`,
      };
    }
  ),
  createWeapon(
    {
      name: "口袋魔导书",
      enkaId: 14201,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Pocket_Awaken"),
      baseAtk: 243,
      rarity: Rarity.Two,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 0,
    },
    () => {
      return {
        title: "",
        text: highlight`精心编纂，只留下考试重点的魔导参考小册。`,
      };
    }
  ),
  createWeapon(
    {
      name: "历练的猎弓",
      enkaId: 15201,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Old_Awaken"),
      baseAtk: 243,
      rarity: Rarity.Two,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 0,
    },
    () => {
      return {
        title: "",
        text: highlight`饱经磨炼又精心护养的弓，经历了漫长的岁月。仿佛会主动配合射手的动作一般好使。`,
      };
    }
  ),
  createWeapon(
    {
      name: "铁尖枪",
      enkaId: 13201,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Rod_Awaken"),
      baseAtk: 243,
      rarity: Rarity.Two,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 0,
    },
    () => {
      return {
        title: "",
        text: highlight`一头有尖，可攻可守的护身武器。在旅者当中十分流行。`,
      };
    }
  ),
  createWeapon(
    {
      name: "新手长枪",
      enkaId: 13101,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Gewalt_Awaken"),
      baseAtk: 185,
      rarity: Rarity.One,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 0,
    },
    () => {
      return {
        title: "",
        text: highlight`笔直得像旗杆一般的长枪，挥舞起来颇具气势。足以应付大多数情况。`,
      };
    }
  ),
  createWeapon(
    {
      name: "训练大剑",
      enkaId: 12101,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Aniki_Awaken"),
      baseAtk: 185,
      rarity: Rarity.One,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 0,
    },
    () => {
      return {
        title: "",
        text: highlight`仅仅是削出了剑形的厚重铁片。在意志强韧的人手里，也有劈开磐石的力量。`,
      };
    }
  ),
  createWeapon(
    {
      name: "学徒笔记",
      enkaId: 14101,
      weaponType: WeaponType.Magic,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_Apprentice_Awaken"),
      baseAtk: 185,
      rarity: Rarity.One,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 0,
    },
    () => {
      return {
        title: "",
        text: highlight`某个优等生留下的学习笔记，娟秀的字迹非常好看。记录了不少实用的咒语。`,
      };
    }
  ),
  createWeapon(
    {
      name: "猎弓",
      enkaId: 15101,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Hunters_Awaken"),
      baseAtk: 185,
      rarity: Rarity.One,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 0,
    },
    () => {
      return {
        title: "",
        text: highlight`猎手演奏的音乐由两种音色组成。弓弦颤动的声音，和羽破空的低啸。`,
      };
    }
  ),
  createWeapon(
    {
      name: "无锋剑",
      enkaId: 11101,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Blunt_Awaken"),
      baseAtk: 185,
      rarity: Rarity.One,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 0,
    },
    () => {
      return {
        title: "",
        text: highlight`少年人的梦想，踏上旅途的兴奋————如果这两种珍贵的品质还不够锋利，那就用勇气补足吧。`,
      };
    }
  ),
];
