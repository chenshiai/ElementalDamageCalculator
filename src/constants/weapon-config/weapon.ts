import { WeaponType, Rarity, AppendProp, BuffType, AttackType, ElementType, BuffTarget } from "@/types/enum";
import {  IWeaponInfo } from "@/types/interface";
import { getEnkaUI } from "@/utils/decorator";
import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import * as polearms from "./polearms/0";
import * as sword from "./sword/0";
import * as bow from "./bow/0";
import * as magic from "./magic/0";
import * as greatsword from "./great-sword/0";

export const Weapons: IWeaponInfo[] = [
  polearms.Pole_Krivule,
  magic.Catalyst_Ziedas,
  magic.Catalyst_Sistrum,
  sword.Sword_Miekka,
  bow.Bow_Ilmarinen,
  polearms.Pole_Ilmarinen,
  magic.Catalyst_Ilmarinen,
  magic.Catalyst_SeeliesLute,
  greatsword.Claymore_Ilmarinen,
  sword.Sword_Ilmarinen,
  polearms.Pole_TummaLyhty,
  magic.Catalyst_MenulisRing,
  greatsword.Polilith,
  polearms.Perdix,
  sword.Outer,
  polearms.Trident,
  bow.Stinger,
  magic.VaresaTransformer,
  polearms.Aoandon,
  magic.SakuraFan,
  magic.Figurines,
  greatsword.RadianceSword,
  sword.SacrificialNgombe,
  bow.Bow_Umpakati,
  magic.Catalyst_Umpakati,
  bow.Bow_Qoyllorsnova,
  greatsword.Claymore_Umpakati,
  sword.Sword_Umpakati,
  polearms.Pole_Umpakati,
  sword.XochitlsTube,
  greatsword.EmeraldSword,
  polearms.Pole_Narukami,
  magic.MechaPufferfish,
  sword.Sword_Widsith,
  magic.ConchSprayer,
  greatsword.Claymore_Deshret,
  sword.Regalis,
  greatsword.Claymore_Isikhulu,
  polearms.Pole_Isikhulu,
  magic.Catalyst_Isikhulu,
  bow.Bow_Isikhulu,
  sword.Sword_Isikhulu,
  polearms.Muguet,
  bow.Kirin,
  greatsword.GoldenVerdict,
  bow.Arcdange,
  polearms.Pole_Zephyrus,
  magic.Catalyst_Zephyrus,
  bow.Bow_Fossil,
  sword.Sword_Rockkiller,
  sword.Sword_Deshret,
  greatsword.Claymore_Lapis,
  bow.Ultimatum,
  sword.Estoc,
  sword.Ayus,
  polearms.BloodMoon,
  polearms.Caduceus,
  sword.Needle,
  magic.MountainGale,
  greatsword.Champion,
  sword.Purewill,
  magic.Wheatley,
  polearms.Pole_Mechanic,
  bow.Bow_Mechanic,
  magic.DandelionPoem,
  sword.Sword_Mechanic,
  greatsword.Claymore_Mechanic,
  magic.Iudex,
  sword.Machination,
  magic.Catalyst_Vorpal,
  polearms.Pole_Vorpal,
  greatsword.Claymore_Vorpal,
  sword.Sword_Vorpal,
  bow.Bow_Vorpal,
  sword.Boreas,
  magic.Yue,
  bow.Gurabad,
  greatsword.BeastTamer,
  polearms.Shanty,
  bow.Pledge,
  bow.Ibis,
  magic.Catalyst_Morax,
  greatsword.Fleurfair,
  sword.Kasabouzu,
  magic.Alaya,
  magic.Ayus,
  polearms.Pole_Dvalin,
  sword.Sword_Pleroma,
  magic.Catalyst_Pleroma,
  polearms.Windvane,
  polearms.Pole_Deshret,
  greatsword.Claymore_Pleroma,
  bow.Bow_Arakalari,
  greatsword.Claymore_Arakalari,
  magic.Catalyst_Arakalari,
  polearms.Pole_Arakalari,
  sword.Sword_Arakalari,
  bow.Bow_Fin,
  bow.Bow_Ayus,
  sword.Youtou,
  bow.Fallensun,
  sword.Amenoma,
  magic.Jyanome,
  magic.Narukami,
  polearms.Santika,
  greatsword.Itadorimaru,
  sword.Opus,
  greatsword.Claymore_Widsith,
  bow.Bow_Widsith,
  polearms.Homa,
  polearms.Pole_Maria,
  bow.Bow_Maria,
  bow.Worldbane,
  greatsword.Claymore_Maria,
  magic.Catalyst_Kaleido,
  polearms.Pole_Mori,
  greatsword.MillenniaTuna,
  bow.Bow_Narukami,
  sword.Sword_Narukami,
  greatsword.Claymore_Bakufu,
  magic.Catalyst_Bakufu,
  polearms.Pole_Bakufu,
  sword.Sword_Bakufu,
  bow.Bow_Bakufu,
  sword.Psalmus,
  sword.Sword_Dvalin,
  greatsword.Wolfmound,
  bow.Amos,
  magic.Catalyst_Dvalin,
  greatsword.Claymore_Dvalin,
  sword.Falcon,
  polearms.Pole_Morax,
  magic.Fourwinds,
  bow.Bow_Dvalin,
  magic.Catalyst_Kunwu,
  greatsword.Claymore_Kunwu,
  polearms.Pole_Kunwu,
  sword.Sword_Kunwu,
  sword.Sword_Morax,
  greatsword.Claymore_Proto,
  polearms.Pole_Stardust,
  polearms.Pole_Blackrock,
  greatsword.Claymore_Zephyrus,
  sword.Sword_Exotic,
  bow.Bow_Troupe,
  bow.Bow_Theocrat,
  greatsword.Claymore_Perdue,
  bow.Recluse,
  magic.Catalyst_Troupe,
  magic.Catalyst_Blackrock,
  magic.Catalyst_Theocrat,
  bow.Bow_Zephyrus,
  magic.Catalyst_Fossil,
  magic.Catalyst_Exotic,
  sword.Sword_Theocrat,
  greatsword.Claymore_Theocrat,
  sword.Sword_Troupe,
  sword.Sword_Zephyrus,
  greatsword.Claymore_Troupe,
  magic.Resurrection,
  sword.Sword_Proto,
  sword.Sword_Fossil,
  bow.Bow_Proto,
  sword.Sword_Blackrock,
  greatsword.Claymore_Exotic,
  magic.Catalyst_Proto,
  magic.Truelens,
  bow.Bow_Blackrock,
  greatsword.Claymore_Blackrock,
  sword.Bloodstained,
  polearms.Pole_Exotic,
  bow.Bow_Exotic,
  polearms.Pole_Proto,
  greatsword.Claymore_Fossil,
  polearms.Gladiator,
  bow.Viridescent,
  greatsword.Kione,
  polearms.Pole_Theocrat,
  sword.Magnum,
  greatsword.Dragonfell,
  polearms.Everfrost,
  magic.Everfrost,
  polearms.Pole_Lapis,
  sword.Sword_Outlaw,
  bow.Bow_Outlaw,
  magic.Catalyst_Outlaw,
  bow.Bow_Fleurfair,
  bow.Nachtblind,
  magic.Ludiharpastum,
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
