import { EquipType, BuffType, ItemType, ActionOn, ElementType, BuffTarget } from "@/types/enum";
import { IRelicBase, IBuffBase } from "@/types/interface";
import { getEnkaUI } from "./decorator";

function setReliquartStat<T>(
  setNameTextMapHash: number,
  name: string,
  iconUrl: string,
  equipType: T,
  rankLevel?: number,
  level?: number
): Omit<IRelicBase, "equipType"> & { equipType: T } {
  return {
    name,
    icon: getEnkaUI(iconUrl),
    // enka数据中用来映射套装名字的id，这里用来映射套装效果
    setNameTextMapHash,
    equipType,
    // 默认圣遗物稀有度为5
    rankLevel: rankLevel || 5,
    // 默认满级为20级
    level: level || 20,
  };
}

export type IRelicLibraryItemEquip = [
  IRelicBase & { equipType: EquipType.EQUIP_BRACER },
  IRelicBase & { equipType: EquipType.EQUIP_NECKLACE },
  IRelicBase & { equipType: EquipType.EQUIP_SHOES },
  IRelicBase & { equipType: EquipType.EQUIP_RING },
  IRelicBase & { equipType: EquipType.EQUIP_DRESS }
];

export interface IRelicLibraryItem {
  name: string;
  itemType: ItemType;
  setNameTextMapHash: number;
  equip: IRelicLibraryItemEquip;
  suit2: string;
  suit4: string;
  buffs: {
    suit2: IBuffBase[];
    suit4: IBuffBase[];
  };
}
/** 烬城勇者绘卷 */
const getBuffByElement = (type: BuffType, text: string) => {
  return {
    enable: false,
    label: `四件套·${text}元素伤害加成提升12%`,
    effect: [{ type, getValue: () => 12 }],
    describe: "触发其对应元素类型的相关反应后，队伍中附近的所有角色的该元素反应相关的元素伤害加成提升12%",
    shareable: true,
    target: BuffTarget.All,
  };
};

/** 烬城勇者绘卷2 */
const getBuffByElement2 = (type: BuffType, text: string) => {
  return {
    enable: false,
    label: `四件套·${text}元素伤害加成提升28%`,
    effect: [{ type, getValue: () => 28 }],
    describe: "装备者处于夜魂加持状态下，还将使队伍中附近的所有角色的与该元素反应相关的元素伤害加成提升28%",
    shareable: true,
    target: BuffTarget.All,
  };
};
/** 悠古的磐岩 */
const getBuffByElement3 = (element: ElementType, type: BuffType) => {
  return {
    enable: false,
    label: "四件套·全队元素伤害加成提升",
    effect: [{ type, getValue: () => 35 }],
    describe: "获得结晶反应形成的晶片时，队伍中所有角色获得35%对应元素伤害加成",
    shareable: true,
    target: BuffTarget.All,
  };
};

/** 翠绿之影 */
const getBuffByElement4 = (label: string, type: BuffType) => {
  return {
    enable: false,
    label,
    effect: [{ type, getValue: () => -40 }],
    describe: "根据扩散的元素类型，降低受到影响的敌人40%的对应元素抗性",
    shareable: true,
    target: BuffTarget.Enemy,
  };
};

const relicLibrary: IRelicLibraryItem[] = [
  {
    name: "长夜之誓",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 3761477451,
    equip: [
      setReliquartStat(3761477451, "执灯人的誓词", "UI_RelicIcon_15039_4", EquipType.EQUIP_BRACER),
      setReliquartStat(3761477451, "夜鸣莺的尾羽", "UI_RelicIcon_15039_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(3761477451, "不死者的哀铃", "UI_RelicIcon_15039_5", EquipType.EQUIP_SHOES),
      setReliquartStat(3761477451, "未吹响的号角", "UI_RelicIcon_15039_1", EquipType.EQUIP_RING),
      setReliquartStat(3761477451, "被浸染的缨盔", "UI_RelicIcon_15039_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：下落攻击造成的伤害提升25%。",
    suit4:
      "四件套：装备者的下落攻击/重击/元素战技命中敌人后，获得1/2/2层「永照的流辉」，由下落攻击、重击或元素战技产生的该效果分别每1秒至多触发一次。永照的流辉：下落攻击造成的伤害提升15%，持续6秒，至多叠加5层，每层持续时间独立计算。",
    buffs: {
      suit2: [
        {
          label: "二件套·下落攻击伤害提升",
          effect: [{ type: BuffType.FallingPrcent, getValue: () => 25 }],
          describe: "下落攻击造成的伤害提升25%。",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·下落攻击伤害提升",
          effect: [{ type: BuffType.FallingPrcent, getValue: (_, s) => 15 * s }],
          describe:
            "装备者的下落攻击/重击/元素战技命中敌人后，获得1/2/2层「永照的流辉」，由下落攻击、重击或元素战技产生的该效果分别每1秒至多触发一次。永照的流辉：下落攻击造成的伤害提升15%，持续6秒，至多叠加5层，每层持续时间独立计算。",
          enable: true,
          stackable: true,
          stackText: "「永照的流辉」层数",
          stack: 5,
          limit: 5,
        },
      ],
    },
  },
  {
    name: "深廊终曲",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 2177723555,
    equip: [
      setReliquartStat(2177723555, "深廊的回奏之歌", "UI_RelicIcon_15040_4", EquipType.EQUIP_BRACER),
      setReliquartStat(2177723555, "深廊的漫远之约", "UI_RelicIcon_15040_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(2177723555, "深廊的湮落之刻", "UI_RelicIcon_15040_4", EquipType.EQUIP_SHOES),
      setReliquartStat(2177723555, "深廊的饫赐之宴", "UI_RelicIcon_15040_1", EquipType.EQUIP_RING),
      setReliquartStat(2177723555, "深廊的遂失之冕", "UI_RelicIcon_15040_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：获得15%冰元素伤害加成。",
    suit4:
      "四件套：装备者的元素能量为0时，普通攻击造成的伤害提升60%，元素爆发造成的伤害提升60%。装备者的普通攻击造成伤害后，上述元素爆发伤害提升效果将失效6秒；装备者的元素爆发造成伤害后，上述普通攻击伤害提升效果将失效6秒。角色处于队伍后台也能触发。",
    buffs: {
      suit2: [
        {
          label: "二件套·冰元素伤害加成提升",
          effect: [{ type: BuffType.CryoPrcent, getValue: () => 15 }],
          describe: "获得15%冰元素伤害加成。",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·普通攻击伤害提升",
          effect: [{ type: BuffType.NormalPrcent, getValue: () => 60 }],
          describe: "装备者的元素能量为0时，普通攻击造成的伤害提升60%，元素爆发造成伤害后失效。",
          enable: true,
        },
        {
          label: "四件套·元素爆发伤害提升",
          effect: [{ type: BuffType.BurstPrcent, getValue: () => 60 }],
          describe: "装备者的元素能量为0时，元素爆发造成的伤害提升60%，普通攻击造成伤害后失效。",
          enable: true,
        },
      ],
    },
  },
  {
    name: "黑曜秘典",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 1774579403,
    equip: [
      setReliquartStat(1774579403, "异种的期许", "UI_RelicIcon_15038_4", EquipType.EQUIP_BRACER),
      setReliquartStat(1774579403, "灵髓的根脉", "UI_RelicIcon_15038_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(1774579403, "夜域的迷思", "UI_RelicIcon_15038_5", EquipType.EQUIP_SHOES),
      setReliquartStat(1774579403, "纷争的前宴", "UI_RelicIcon_15038_1", EquipType.EQUIP_RING),
      setReliquartStat(1774579403, "诸圣的礼冠", "UI_RelicIcon_15038_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：装备者处于夜魂加持状态，并且在场上时，造成的伤害提高15%。",
    suit4: "四件套：装备者在场上消耗1点夜魂值后暴击率提高40%，持续6秒。该效果每1秒至多触发一次。",
    buffs: {
      suit2: [
        {
          label: "二件套·夜魂加持状态伤害提高",
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => 15 }],
          describe: "装备者处于夜魂加持状态，并且在场上时，造成的伤害提高15%",
          enable: false,
        },
      ],
      suit4: [
        {
          label: "四件套·暴击率提高",
          effect: [{ type: BuffType.Critcal, getValue: () => 40 }],
          describe: "装备者在场上消耗1点夜魂值后暴击率提高40%",
          enable: false,
        },
      ],
    },
  },
  {
    name: "烬城勇者绘卷",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 2949388203,
    equip: [
      setReliquartStat(2949388203, "驯兽师的护符", "UI_RelicIcon_15037_4", EquipType.EQUIP_BRACER),
      setReliquartStat(2949388203, "巡山客的信标", "UI_RelicIcon_15037_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(2949388203, "秘术家的金盘", "UI_RelicIcon_15037_5", EquipType.EQUIP_SHOES),
      setReliquartStat(2949388203, "游学者的爪杯", "UI_RelicIcon_15037_1", EquipType.EQUIP_RING),
      setReliquartStat(2949388203, "魔战士的羽面", "UI_RelicIcon_15037_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：队伍中附近的角色触发「夜魂迸发」时，装备者恢复6点元素能量。",
    suit4:
      "四件套：装备者触发其对应元素类型的相关反应后，队伍中附近的所有角色的该元素反应相关的元素伤害加成提升12%，持续15秒。若触发该效果时，装备者处于夜魂加持状态下，还将使队伍中附近的所有角色的与该元素反应相关的元素伤害加成提升28%，持续20秒。装备者处于后台时也能触发上述效果，同名圣遗物套装产生的伤害加成效果无法叠加。",
    buffs: {
      suit2: [],

      suit4: [
        getBuffByElement(BuffType.AnemoPrcent, "风"),
        getBuffByElement2(BuffType.AnemoPrcent, "风"),
        getBuffByElement(BuffType.HydroPrcent, "水"),
        getBuffByElement2(BuffType.HydroPrcent, "水"),
        getBuffByElement(BuffType.PyroPrcent, "火"),
        getBuffByElement2(BuffType.PyroPrcent, "火"),
        getBuffByElement(BuffType.CryoPrcent, "冰"),
        getBuffByElement2(BuffType.CryoPrcent, "冰"),
        getBuffByElement(BuffType.ElectroPrcent, "雷"),
        getBuffByElement2(BuffType.ElectroPrcent, "雷"),
        getBuffByElement(BuffType.GeoPrcent, "岩"),
        getBuffByElement2(BuffType.GeoPrcent, "岩"),
        getBuffByElement(BuffType.DendroPrcent, "草"),
        getBuffByElement2(BuffType.DendroPrcent, "草"),
      ],
    },
  },
  {
    name: "未竟的遐思",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 352459163,
    equip: [
      setReliquartStat(352459163, "暗结的明花", "UI_RelicIcon_15036_4", EquipType.EQUIP_BRACER),
      setReliquartStat(352459163, "褪光的翠尾", "UI_RelicIcon_15036_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(352459163, "举业的识刻", "UI_RelicIcon_15036_5", EquipType.EQUIP_SHOES),
      setReliquartStat(352459163, "筹谋的共樽", "UI_RelicIcon_15036_1", EquipType.EQUIP_RING),
      setReliquartStat(352459163, "失冕的宝冠", "UI_RelicIcon_15036_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：攻击力提高18%。",
    suit4:
      "四件套：脱离战斗状态3秒后，造成的伤害提升50%。在战斗状态下，附近不存在处于燃烧状态下的敌人超过6秒后，上述伤害提升效果每秒降低10%直到降低至0%;存在处于燃烧状态下的敌人时，每秒提升10%，直到达到50%。装备此圣遗物套装的角色处于队伍后台时，依然会触发该效果。",
    buffs: {
      suit2: [
        {
          label: "二件套·攻击力提高",
          effect: [{ type: BuffType.ATKPrcent, getValue: () => 18 }],
          describe: "未竟的遐思2件套，攻击力提高18%",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·造成的伤害提升",
          effect: [{ type: BuffType.GlobalPrcent, getValue: (_, s) => 10 * s }],
          describe: "存在处于燃烧状态下的敌人时，每秒提升10%伤害加成，直到达到50%。",
          enable: true,
          stackable: true,
          limit: 5,
          stack: 5,
        },
      ],
    },
  },
  {
    name: "谐律异想断章",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 1492570003,
    equip: [
      setReliquartStat(1492570003, "谐律交响的前奏", "UI_RelicIcon_15035_4", EquipType.EQUIP_BRACER),
      setReliquartStat(1492570003, "古海玄幽的夜想", "UI_RelicIcon_15035_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(1492570003, "命途轮转的谐谑", "UI_RelicIcon_15035_5", EquipType.EQUIP_SHOES),
      setReliquartStat(1492570003, "灵露倾洒的狂诗", "UI_RelicIcon_15035_1", EquipType.EQUIP_RING),
      setReliquartStat(1492570003, "异想零落的圆舞", "UI_RelicIcon_15035_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：攻击力提高18%。",
    suit4: "四件套：生命之契的数值提升或降低时角色造成的伤害提升18%，该效果持续6秒，至多叠加3次。",
    buffs: {
      suit2: [
        {
          label: "二件套·攻击力提高",
          effect: [{ type: BuffType.ATKPrcent, getValue: () => 18 }],
          describe: "谐律异想断章2件套，攻击力提高18%",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·造成的伤害提升",
          effect: [{ type: BuffType.GlobalPrcent, getValue: (_, s) => 18 * s }],
          describe: "生命之契的数值提升或降低时角色造成的伤害提升18%，至多叠加3次",
          enable: true,
          stackable: true,
          limit: 3,
          stack: 3,
        },
      ],
    },
  },
  {
    name: "回声之林夜话",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 279470883,
    equip: [
      setReliquartStat(279470883, "无私的妆饰花", "UI_RelicIcon_15034_4", EquipType.EQUIP_BRACER),
      setReliquartStat(279470883, "诚恳的蘸水笔", "UI_RelicIcon_15034_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(279470883, "忠实的砂时计", "UI_RelicIcon_15034_5", EquipType.EQUIP_SHOES),
      setReliquartStat(279470883, "慷慨的墨水瓶", "UI_RelicIcon_15034_1", EquipType.EQUIP_RING),
      setReliquartStat(279470883, "慈爱的淑女帽", "UI_RelicIcon_15034_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：攻击力提高18%。",
    suit4:
      "四件套：施放元素战技后的10秒内，岩元素伤害加成提升20%；若处于结晶反应产生的护盾庇护下，上述效果提高150%，进一步提高的效果将在失去结晶护盾庇护的1秒后移除。",
    buffs: {
      suit2: [
        {
          label: "二件套·攻击力提高",
          effect: [{ type: BuffType.ATKPrcent, getValue: () => 18 }],
          describe: "回声之林夜话2件套，攻击力提高18%",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·岩元素伤害加成提升",
          effect: [{ type: BuffType.GeoPrcent, getValue: () => 20 }],
          describe: "施放元素战技后，岩元素伤害加成提升20%",
          enable: false,
        },
        {
          label: "四件套·结晶盾庇护下进一步提升",
          effect: [{ type: BuffType.GeoPrcent, getValue: () => 30 }],
          describe: "若处于结晶反应产生的护盾庇护下，岩元素伤害加成提升30%",
          enable: false,
        },
      ],
    },
  },
  {
    name: "昔时之歌",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 2803305851,
    equip: [
      setReliquartStat(2803305851, "昔时遗落之誓", "UI_RelicIcon_15033_4", EquipType.EQUIP_BRACER),
      setReliquartStat(2803305851, "昔时浮想之思", "UI_RelicIcon_15033_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(2803305851, "昔时回映之音", "UI_RelicIcon_15033_5", EquipType.EQUIP_SHOES),
      setReliquartStat(2803305851, "昔时应许之梦", "UI_RelicIcon_15033_1", EquipType.EQUIP_RING),
      setReliquartStat(2803305851, "昔时传奏之诗", "UI_RelicIcon_15033_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：治疗加成提高15%。",
    suit4:
      "四件套：装备者对队伍中的角色进行治疗时将产生持续6秒的渴盼效果，记录治疗的生命值回复量（包括溢出值）。持续时间结束时，渴盼效果将转变为「彼时的浪潮」效果: 队伍中自己的当前场上角色的普通攻击、重击、下落攻击、元素战技与元素爆发命中敌人时，将基于渴盼效果所记录的回复量的8%提高造成的伤害，「彼时的浪潮」将在生效5次或10秒后移除。一次渴盼效果至多记录15000点回复量，同时至多存在一个能够记录多个装备者的产生的回复量；装备者处于队伍后台时，依然能触发该效果。",
    buffs: {
      suit2: [
        {
          label: "二件套·治疗加成提高",
          effect: [{ type: BuffType.HealAdd, getValue: () => 15 }],
          describe: "昔时之歌2件套，治疗加成提高15%。",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·提高造成的伤害",
          effect: [
            { type: BuffType.NormalFixed, getValue: () => 1200 },
            { type: BuffType.StrongFixed, getValue: () => 1200 },
            { type: BuffType.FallingFixed, getValue: () => 1200 },
            { type: BuffType.SkillFixed, getValue: () => 1200 },
            { type: BuffType.BurstFixed, getValue: () => 1200 },
          ],
          describe: "基于渴盼效果所记录的回复量的8%提高造成的伤害(1200)",
          enable: false,
          shareable: true,
          target: BuffTarget.All,
        },
      ],
    },
  },
  {
    name: "黄金剧团",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 3410220315,
    equip: [
      setReliquartStat(3410220315, "黄金乐曲的变奏", "UI_RelicIcon_15032_4", EquipType.EQUIP_BRACER),
      setReliquartStat(3410220315, "黄金飞鸟的落羽", "UI_RelicIcon_15032_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(3410220315, "黄金时代的先声", "UI_RelicIcon_15032_5", EquipType.EQUIP_SHOES),
      setReliquartStat(3410220315, "黄金之夜的喧嚣", "UI_RelicIcon_15032_1", EquipType.EQUIP_RING),
      setReliquartStat(3410220315, "黄金剧团的奖赏", "UI_RelicIcon_15032_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：元素战技造成的伤害提升20%。",
    suit4:
      "四件套：元素战技造成的伤害提升25%；此外，处于队伍后台时，元素战技造成的伤害还将进一步提升25%，该效果将在登场后2秒移除。",
    buffs: {
      suit2: [
        {
          label: "二件套·元素战技造成的伤害提升",
          describe: "黄金剧团2件套，元素战技造成的伤害提升20%",
          effect: [{ type: BuffType.SkillPrcent, getValue: () => 20 }],
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·元素战技造成的伤害提升",
          describe: "黄金剧团4件套，元素战技造成的伤害提升25%",
          effect: [{ type: BuffType.SkillPrcent, getValue: () => 25 }],
          enable: true,
        },
        {
          label: "四件套·元素战技造成的伤害进一步提升",
          describe: "处于队伍后台时，元素战技造成的伤害提升25%",
          effect: [{ type: BuffType.SkillPrcent, getValue: () => 25 }],
          enable: true,
        },
      ],
    },
  },
  {
    name: "逐影猎人",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 1249831867,
    equip: [
      setReliquartStat(1249831867, "猎人的胸花", "UI_RelicIcon_15031_4", EquipType.EQUIP_BRACER),
      setReliquartStat(1249831867, "杰作的序曲", "UI_RelicIcon_15031_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(1249831867, "裁判的时刻", "UI_RelicIcon_15031_5", EquipType.EQUIP_SHOES),
      setReliquartStat(1249831867, "遗忘的容器", "UI_RelicIcon_15031_1", EquipType.EQUIP_RING),
      setReliquartStat(1249831867, "老兵的容颜", "UI_RelicIcon_15031_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：普通攻击与重击的伤害提升15%。",
    suit4: "四件套：当生命值提升或降低时，暴击率提升12%，该效果持续5秒，至多叠加3次。",
    buffs: {
      suit2: [
        {
          label: "二件套·普攻&重击伤害提升",
          describe: "逐影猎人2件套，普攻&重击伤害提升15%。",
          effect: [
            { type: BuffType.NormalPrcent, getValue: () => 15 },
            { type: BuffType.StrongPrcent, getValue: () => 15 },
          ],
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·暴击率提升",
          describe: "逐影猎人4件套，暴击率提升12%，最多叠加3层。",
          effect: [{ type: BuffType.Critcal, getValue: (_, stack = 0) => 12 * stack }],
          enable: true,
          stackable: true,
          limit: 3,
          stack: 3,
        },
      ],
    },
  },
  {
    name: "花海甘露之光",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 235897163,
    equip: [
      setReliquartStat(235897163, "灵光源起之蕊", "UI_RelicIcon_15030_4", EquipType.EQUIP_BRACER),
      setReliquartStat(235897163, "琦色灵彩之羽", "UI_RelicIcon_15030_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(235897163, "久远花落之时", "UI_RelicIcon_15030_5", EquipType.EQUIP_SHOES),
      setReliquartStat(235897163, "无边酣乐之筵", "UI_RelicIcon_15030_1", EquipType.EQUIP_RING),
      setReliquartStat(235897163, "灵光明烁之心", "UI_RelicIcon_15030_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：生命值提升20%。",
    suit4:
      "四件套：元素战技与元素爆发造成的伤害提升10%；装备者受到伤害后的5秒内，上述伤害提升效果提高80%。该提高效果至多叠加5层。每层持续时间独立计算，处于队伍后台时依然能触发该效果。",
    buffs: {
      suit2: [
        {
          label: "二件套·生命值提升",
          describe: "花海甘露之光2件套，生命值提升20%",
          effect: [{ type: BuffType.HPPrcent, getValue: () => 20 }],
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·元素战技与元素爆发伤害提升",
          describe: "伤害提升10%；装备者受到伤害后，上述伤害提升效果提高80%。该提高效果至多叠加5层",
          effect: [
            { type: BuffType.SkillPrcent, getValue: (_, stack = 0) => 10 + 8 * stack },
            { type: BuffType.BurstPrcent, getValue: (_, stack = 0) => 10 + 8 * stack },
          ],
          enable: true,
          stackable: true,
          limit: 5,
          stack: 5,
        },
      ],
    },
  },
  {
    name: "水仙之梦",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 1925210475,
    equip: [
      setReliquartStat(1925210475, "旅途中的鲜花", "UI_RelicIcon_15029_4", EquipType.EQUIP_BRACER),
      setReliquartStat(1925210475, "坏巫师的羽杖", "UI_RelicIcon_15029_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(1925210475, "水仙的时时刻刻", "UI_RelicIcon_15029_5", EquipType.EQUIP_SHOES),
      setReliquartStat(1925210475, "勇者们的茶会", "UI_RelicIcon_15029_1", EquipType.EQUIP_RING),
      setReliquartStat(1925210475, "恶龙的单片镜", "UI_RelicIcon_15029_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：获得15%水元素伤害加成。",
    suit4:
      "四件套：普通攻击、重击、下落攻击、元素战技或元素爆发命中敌人后，将产生1层持续8秒的「镜中水仙」效果。处于1/2/3层及以上「镜中水仙」效果下时，攻击力将提高7%/16%/25%，水元素伤害加成提升4%/9%/15%。由普通攻击、重击、下落攻击、元素战技或元素爆发产生的「镜中水仙」将分别独立存在。",
    buffs: {
      suit2: [
        {
          label: "二件套·水元素伤害加成提升",
          effect: [{ type: BuffType.HydroPrcent, getValue: () => 15 }],
          describe: "水仙之梦2件套，水元素伤害加成提升15%",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·攻击力、水元素伤害加成提升",
          effect: [
            {
              type: BuffType.ATKPrcent,
              getValue: (_, stack = 0) => {
                return [7, 16, 25][stack - 1] || 0;
              },
            },
            {
              type: BuffType.HydroPrcent,
              getValue: (_, stack = 0) => {
                return [4, 9, 15][stack - 1] || 0;
              },
            },
          ],
          describe: "处于1/2/3层及以上「镜中水仙」效果下时，攻击力将提高7%/16%/25%，水元素伤害加成提升4%/9%/15%",
          enable: false,
          stackable: true,
          stackText: "镜中水仙",
          limit: 3,
          stack: 3,
        },
      ],
    },
  },
  {
    name: "乐园遗落之花",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 3094139291,
    equip: [
      setReliquartStat(3094139291, "月女的华彩", "UI_RelicIcon_15028_4", EquipType.EQUIP_BRACER),
      setReliquartStat(3094139291, "谢落的筵席", "UI_RelicIcon_15028_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(3094139291, "凝结的时刻", "UI_RelicIcon_15028_5", EquipType.EQUIP_SHOES),
      setReliquartStat(3094139291, "守秘的魔瓶", "UI_RelicIcon_15028_1", EquipType.EQUIP_RING),
      setReliquartStat(3094139291, "紫晶的花冠", "UI_RelicIcon_15028_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：元素精通提高80点。",
    suit4:
      "四件套：装备者绽放、超绽放、烈绽放反应造成的伤害提升40%。此外，装备者触发绽放、超绽放、烈绽放后，上述效果带来的加成提升25%，该效果持续10秒，至多叠加4次，每1秒至多触发一次。装备者处于队伍后台时依然能触发该效果。",
    buffs: {
      suit2: [
        {
          label: "二件套·元素精通提高",
          effect: [{ type: BuffType.MysteryFixed, getValue: () => 80 }],
          describe: "乐园遗落之花2件套，元素精通提高80",
          enable: true,
        },
      ],
      suit4: [],
    },
  },
  {
    name: "沙上楼阁史话",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 2538235187,
    equip: [
      setReliquartStat(2538235187, "众王之都的开端", "UI_RelicIcon_15027_4", EquipType.EQUIP_BRACER),
      setReliquartStat(2538235187, "黄金邦国的结末", "UI_RelicIcon_15027_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(2538235187, "失落迷途的机芯", "UI_RelicIcon_15027_5", EquipType.EQUIP_SHOES),
      setReliquartStat(2538235187, "迷醉长梦的守护", "UI_RelicIcon_15027_1", EquipType.EQUIP_RING),
      setReliquartStat(2538235187, "流沙贵嗣的遗宝", "UI_RelicIcon_15027_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：获得15%风元素伤害加成。",
    suit4: "四件套：重击命中敌人后，该角色的普通攻击速度提升10%，普通攻击、重击与下落攻击造成的伤害提升40%，持续15秒。",
    buffs: {
      suit2: [
        {
          label: "二件套·风元素伤害加成提高",
          effect: [{ type: BuffType.AnemoPrcent, getValue: () => 15 }],
          describe: "沙上楼阁史话2件套，风元素伤害加成提高15%",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·普攻、重击与下落攻击伤害提升",
          effect: [
            { type: BuffType.NormalPrcent, getValue: () => 40 },
            { type: BuffType.StrongPrcent, getValue: () => 40 },
            { type: BuffType.FallingPrcent, getValue: () => 40 },
          ],
          describe: "沙上楼阁史话4件套，重击命中敌人后普通攻击、重击与下落攻击造成的伤害提升40%",
          enable: true,
        },
      ],
    },
  },
  {
    name: "饰金之梦",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 4145306051,
    equip: [
      setReliquartStat(4145306051, "梦中的铁花", "UI_RelicIcon_15026_4", EquipType.EQUIP_BRACER),
      setReliquartStat(4145306051, "裁断的翎羽", "UI_RelicIcon_15026_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(4145306051, "沉金的岁月", "UI_RelicIcon_15026_5", EquipType.EQUIP_SHOES),
      setReliquartStat(4145306051, "如蜜的终宴", "UI_RelicIcon_15026_1", EquipType.EQUIP_RING),
      setReliquartStat(4145306051, "沙王的投影", "UI_RelicIcon_15026_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：元素精通提高80点。",
    suit4:
      "四件套：触发元素反应后的8秒内，会根据队伍内其他角色的元素类型，使装备者获得强化：队伍中每存在1个和装备者同类元素的角色，攻击力提升14%；每存在1个和装备者不同元素类型的角色，元素精通提升50点。上述每类效果至多计算3个角色。该效果每8秒至多触发一次。装备者处于队伍后台时，依然能触发该效果。",
    buffs: {
      suit2: [
        {
          label: "二件套·元素精通提高",
          effect: [{ type: BuffType.MysteryFixed, getValue: () => 80 }],
          describe: "饰金之梦2件套，元素精通提高80",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·攻击力、元素精通提高",
          effect: [
            { type: BuffType.MysteryFixed, getValue: (_, s) => 50 * (3 - s) },
            { type: BuffType.ATKPrcent, getValue: (_, s) => 14 * s },
          ],
          describe:
            "存在1个和装备者同类元素的角色，攻击力提升14%；每存在1个和装备者不同元素类型的角色，元素精通提升50点。",
          enable: false,
          stack: 0,
          stackable: true,
          stackText: "同元素角色数量",
          limit: 3,
        },
      ],
    },
  },
  {
    name: "深林的记忆",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 1675079283,
    equip: [
      setReliquartStat(1675079283, "迷宫的游人", "UI_RelicIcon_15025_4", EquipType.EQUIP_BRACER),
      setReliquartStat(1675079283, "翠蔓的智者", "UI_RelicIcon_15025_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(1675079283, "贤智的定期", "UI_RelicIcon_15025_5", EquipType.EQUIP_SHOES),
      setReliquartStat(1675079283, "迷误者之灯", "UI_RelicIcon_15025_1", EquipType.EQUIP_RING),
      setReliquartStat(1675079283, "月桂的宝冠", "UI_RelicIcon_15025_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：获得15%草元素伤害加成。",
    suit4:
      "四件套：元素战技或元素爆发命中敌人后，使命中目标的草元素抗性降低30%，持续8秒。装备者处于队伍后台时，依然能触发该效果。",
    buffs: {
      suit2: [
        {
          label: "二件套·草元素伤害加成提高",
          effect: [{ type: BuffType.DendroPrcent, getValue: () => 15 }],
          describe: "深林的记忆2件套，草元素伤害加成提高15%",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·敌人草元素抗性降低",
          describe: "元素战技或元素爆发命中敌人后，使命中目标的草元素抗性降低30%",
          effect: [{ type: BuffType.EnemyDendroResistance, getValue: () => -30 }],
          enable: false,
          shareable: true,
          target: BuffTarget.Enemy,
        },
      ],
    },
  },
  {
    name: "来歆余响",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 3626268211,
    equip: [
      setReliquartStat(3626268211, "魂香之花", "UI_RelicIcon_15024_4", EquipType.EQUIP_BRACER),
      setReliquartStat(3626268211, "垂玉之叶", "UI_RelicIcon_15024_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(3626268211, "祝祀之凭", "UI_RelicIcon_15024_5", EquipType.EQUIP_SHOES),
      setReliquartStat(3626268211, "涌泉之盏", "UI_RelicIcon_15024_1", EquipType.EQUIP_RING),
      setReliquartStat(3626268211, "浮溯之珏", "UI_RelicIcon_15024_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：攻击力提高18%。",
    suit4:
      "四件套：普通攻击命中敌人时，有36%概率触发「幽谷祝祀」：普通攻击造成的伤害提高，伤害提高值为攻击力的70%，该效果将在普通攻击造成伤害后的0.05秒后清除。普通攻击未触发「幽谷祝祀」时，会使下次触发概率提升20%；0.2秒内至多判定1次触发与否。",
    buffs: {
      suit2: [
        {
          label: "二件套·攻击力提高",
          effect: [{ type: BuffType.ATKPrcent, getValue: () => 18 }],
          describe: "来歆余响2件套，攻击力提高18%",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·普通攻击造成的伤害提高",
          effect: [
            {
              type: BuffType.NormalFixed,
              getValue: (data) => {
                return (data.baseATK + data.extraATK + data.extraATK_NT) * 0.7;
              },
              actionOn: ActionOn.External,
            },
          ],
          describe: "普通攻击命中敌人时，有36%概率使普通攻击造成的伤害提高攻击力的70%",
          enable: false,
        },
      ],
    },
  },
  {
    name: "辰砂往生录",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 1558036915,
    equip: [
      setReliquartStat(1558036915, "生灵之华", "UI_RelicIcon_15023_4", EquipType.EQUIP_BRACER),
      setReliquartStat(1558036915, "潜光片羽", "UI_RelicIcon_15023_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(1558036915, "阳辔之遗", "UI_RelicIcon_15023_5", EquipType.EQUIP_SHOES),
      setReliquartStat(1558036915, "结契之刻", "UI_RelicIcon_15023_1", EquipType.EQUIP_RING),
      setReliquartStat(1558036915, "虺雷之姿", "UI_RelicIcon_15023_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：攻击力提高18%。",
    suit4:
      "四件套：施放元素爆发后，将产生持续16秒的「潜光」效果：攻击力提升8%；并在角色的生命值降低时，攻击力进一步提升10%，至多通过这种方式提升4次，每0.8秒至多触发一次。「潜光」效果将在角色退场时消失；持续期间再次施放元素爆发，将移除原有的「潜光」。",
    buffs: {
      suit2: [
        {
          label: "二件套·攻击力提高",
          effect: [{ type: BuffType.ATKPrcent, getValue: () => 18 }],
          describe: "辰砂往生录2件套，攻击力提高18%",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·攻击力提高",
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => 8 + 10 * s }],
          describe:
            "施放元素爆发后，将产生持续16秒的「潜光」效果：攻击力提升8%；并在角色的生命值降低时，攻击力进一步提升10%，至多提升4次",
          enable: false,
          stack: 4,
          stackable: true,
          limit: 4,
        },
      ],
    },
  },
  {
    name: "海染砗磲",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 1756609915,
    equip: [
      setReliquartStat(1756609915, "海染之花", "UI_RelicIcon_15022_4", EquipType.EQUIP_BRACER),
      setReliquartStat(1756609915, "渊宫之羽", "UI_RelicIcon_15022_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(1756609915, "离别之贝", "UI_RelicIcon_15022_5", EquipType.EQUIP_SHOES),
      setReliquartStat(1756609915, "真珠之笼", "UI_RelicIcon_15022_1", EquipType.EQUIP_RING),
      setReliquartStat(1756609915, "海祇之冠", "UI_RelicIcon_15022_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：治疗加成提高15%。",
    suit4:
      "四件套：装备此圣遗物套装的角色对队伍中的角色进行治疗时，将产生持续3秒的海染泡沫，记录治疗的生命值回复量（包括溢出值）。持续时间结束时，海染泡沫将会爆炸，对周围的敌人造成90%累计回复量的伤害（该伤害结算方式同感电、超导等元素反应，但不受元素精通、等级或反应伤害加成效果影响）。每3.5秒至多产生一个海染泡沫；海染泡沫至多记录30000点回复量，含溢出部分的治疗量；自己的队伍中同时至多存在一个海染泡沫。装备此圣遗物套装的角色处于队伍后台时；依然能触发该效果。",
    buffs: {
      suit2: [
        {
          label: "二件套·治疗加成提高",
          effect: [{ type: BuffType.HealAdd, getValue: () => 15 }],
          describe: "海染砗磲2件套，治疗加成提高15%",
          enable: true,
        },
      ],
      suit4: [],
    },
  },
  {
    name: "华馆梦醒形骸记",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 2546254811,
    equip: [
      setReliquartStat(2546254811, "荣花之期", "UI_RelicIcon_15021_4", EquipType.EQUIP_BRACER),
      setReliquartStat(2546254811, "华馆之羽", "UI_RelicIcon_15021_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(2546254811, "众生之谣", "UI_RelicIcon_15021_5", EquipType.EQUIP_SHOES),
      setReliquartStat(2546254811, "梦醒之瓢", "UI_RelicIcon_15021_1", EquipType.EQUIP_RING),
      setReliquartStat(2546254811, "形骸之笠", "UI_RelicIcon_15021_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：防御力提升30%。",
    suit4:
      "四件套：装备此圣遗物套装的角色在以下情况下，将获得[问答]效果：在场上用岩元素攻击命中敌人后获得一层，每0.3秒至多触发一次；在队伍后台众，每3秒获得一层。问答至多叠加4层，每层能提供6%防御力与6%岩元素伤害加成。每6秒，若未获得问答效果，将损失一层。",
    buffs: {
      suit2: [
        {
          label: "二件套·防御力提升",
          effect: [{ type: BuffType.DEFPrcent, getValue: () => 30 }],
          describe: "华馆梦醒形骸记2件套，防御力提升30%。",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·防御力&岩元素伤害提升",
          effect: [
            { type: BuffType.DEFPrcent, getValue: (_, stack = 0) => 6 * stack },
            { type: BuffType.GeoPrcent, getValue: (_, stack = 0) => 6 * stack },
          ],
          describe: "华馆梦醒形骸记4件套，防御力&岩元素伤害提升6%，最多叠加4层。",
          enable: true,
          stackable: true,
          limit: 4,
          stack: 4,
        },
      ],
    },
  },
  {
    name: "绝缘之旗印",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 2276480763,
    equip: [
      setReliquartStat(2276480763, "明威之镡", "UI_RelicIcon_15020_4", EquipType.EQUIP_BRACER),
      setReliquartStat(2276480763, "切落之羽", "UI_RelicIcon_15020_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(2276480763, "雷云之笼", "UI_RelicIcon_15020_5", EquipType.EQUIP_SHOES),
      setReliquartStat(2276480763, "绯花之壶", "UI_RelicIcon_15020_1", EquipType.EQUIP_RING),
      setReliquartStat(2276480763, "华饰之兜", "UI_RelicIcon_15020_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：元素充能效率提高20%。",
    suit4: "四件套：基于元素充能效率的25%，提高元素爆发造成的伤害。至多通过这种方式获得75%提升。",
    buffs: {
      suit2: [
        {
          label: "二件套·元素充能效率提高",
          effect: [{ type: BuffType.ChargeFixed, getValue: () => 20 }],
          describe: "元素充能效率提高20%",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·元素爆发造成的伤害提高",
          effect: [
            {
              type: BuffType.BurstPrcent,
              getValue: (data) => {
                return Math.min(75, (data.chargeEfficiency + data.chargeEfficiency_NT) * 0.25);
              },
              actionOn: ActionOn.External,
            },
          ],
          describe: "基于元素充能效率的25%，提高元素爆发造成的伤害。至多通过这种方式获得75%提升",
          enable: true,
        },
      ],
    },
  },
  {
    name: "追忆之注连",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 4144069251,
    equip: [
      setReliquartStat(4144069251, "羁缠之花", "UI_RelicIcon_15019_4", EquipType.EQUIP_BRACER),
      setReliquartStat(4144069251, "思忆之矢", "UI_RelicIcon_15019_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(4144069251, "朝露之时", "UI_RelicIcon_15019_5", EquipType.EQUIP_SHOES),
      setReliquartStat(4144069251, "祈望之心", "UI_RelicIcon_15019_1", EquipType.EQUIP_RING),
      setReliquartStat(4144069251, "无常之面", "UI_RelicIcon_15019_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：攻击力提高18%。",
    suit4:
      "四件套：释放元素战技时，如果角色的元素能量高于或等于15点，则会流失15点元素能量，使接下来的10秒内，普通攻击、重击、下落攻击造成的伤害提高50%，持续期间内效果不会再次触发。",
    buffs: {
      suit2: [
        {
          label: "二件套·攻击力提高",
          effect: [{ type: BuffType.ATKPrcent, getValue: () => 18 }],
          describe: "攻击力提高18%",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·普通攻击、重击、下落攻击伤害提高",
          effect: [
            { type: BuffType.NormalPrcent, getValue: () => 50 },
            { type: BuffType.StrongPrcent, getValue: () => 50 },
            { type: BuffType.FallingPrcent, getValue: () => 50 },
          ],
          describe: "释放元素战技时流失15点元素能量，使得普通攻击、重击、下落攻击造成的伤害提高50%",
          enable: false,
        },
      ],
    },
  },
  {
    name: "苍白之火",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 862591315,
    equip: [
      setReliquartStat(862591315, "无垢之花", "UI_RelicIcon_15018_4", EquipType.EQUIP_BRACER),
      setReliquartStat(862591315, "贤医之羽", "UI_RelicIcon_15018_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(862591315, "停摆之刻", "UI_RelicIcon_15018_5", EquipType.EQUIP_SHOES),
      setReliquartStat(862591315, "超越之盏", "UI_RelicIcon_15018_1", EquipType.EQUIP_RING),
      setReliquartStat(862591315, "嗤笑之面", "UI_RelicIcon_15018_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：造成的物理伤害提高25%。",
    suit4:
      "四件套：元素战技命中敌人后，攻击力提升9%。该效果持续7秒，至多叠加2层，每0.3秒至多触发一次。叠满2层时，2件套的效果提升100%。",
    buffs: {
      suit2: [
        {
          label: "二件套·物理伤害提高",
          effect: [{ type: BuffType.PhysicalPrcent, getValue: () => 25 }],
          describe: "物理伤害提高25%",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·攻击力提升",
          effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => 9 * s }],
          describe: "元素战技命中敌人后，攻击力提升9%，至多叠加2层",
          enable: false,
          stackable: true,
          stack: 2,
          limit: 2,
        },
        {
          label: "四件套·物理伤害提高",
          effect: [{ type: BuffType.PhysicalPrcent, getValue: () => 25 }],
          describe: "叠满2层时，物理伤害提高25%",
          enable: false,
        },
      ],
    },
  },
  {
    name: "千岩牢固",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 1337666507,
    equip: [
      setReliquartStat(1337666507, "勋绩之花", "UI_RelicIcon_15017_4", EquipType.EQUIP_BRACER),
      setReliquartStat(1337666507, "昭武翎羽", "UI_RelicIcon_15017_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(1337666507, "金铜时晷", "UI_RelicIcon_15017_5", EquipType.EQUIP_SHOES),
      setReliquartStat(1337666507, "盟誓金爵", "UI_RelicIcon_15017_1", EquipType.EQUIP_RING),
      setReliquartStat(1337666507, "将帅兜鍪", "UI_RelicIcon_15017_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：生命值提升20%。",
    suit4:
      "四件套：元素战技命中敌人后，使队伍中附近的所有角色攻击力提升20%，护盾强效提升30%，持续3秒。该效果每0.5秒至多触发一次。装备此圣遗物套装的角色处于队伍后台时，依然能触发该效果。",
    buffs: {
      suit2: [
        {
          label: "二件套·生命值提升",
          effect: [{ type: BuffType.HPPrcent, getValue: () => 20 }],
          describe: "生命值提升20%",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·全队攻击力，护盾强效提升",
          effect: [
            { type: BuffType.ATKPrcent, getValue: () => 20 },
            { type: BuffType.ShieldStrong, getValue: () => 30 },
          ],
          describe: "元素战技命中敌人后，使队伍中附近的所有角色攻击力提升20%，护盾强效提升30%",
          enable: false,
          shareable: true,
          target: BuffTarget.All,
        },
      ],
    },
  },
  {
    name: "冰风迷途的勇士",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 933076627,
    equip: [
      setReliquartStat(933076627, "历经风雪的思念", "UI_RelicIcon_14001_4", EquipType.EQUIP_BRACER),
      setReliquartStat(933076627, "摧冰而行的执望", "UI_RelicIcon_14001_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(933076627, "冰雪故园的终期", "UI_RelicIcon_14001_5", EquipType.EQUIP_SHOES),
      setReliquartStat(933076627, "遍结寒霜的傲骨", "UI_RelicIcon_14001_1", EquipType.EQUIP_RING),
      setReliquartStat(933076627, "破冰踏雪的回音", "UI_RelicIcon_14001_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：获得15%冰元素伤害加成。",
    suit4: "四件套：攻击处于冰元素影响下的敌人时，暴击率提高20%；若敌人处于冻结状态下，则暴击率额外提高20%。",
    buffs: {
      suit2: [
        {
          label: "二件套·冰元素伤害加成",
          effect: [{ type: BuffType.CryoPrcent, getValue: () => 15 }],
          describe: "获得15%冰元素伤害加成",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·暴击率提高",
          effect: [{ type: BuffType.Critcal, getValue: () => 20 }],
          describe: "攻击处于冰元素影响下的敌人时，暴击率提高20%",
          enable: false,
        },
        {
          label: "四件套·暴击率进一步提高",
          effect: [{ type: BuffType.Critcal, getValue: () => 20 }],
          describe: "若敌人处于冻结状态下，暴击率额外提高20%",
          enable: false,
        },
      ],
    },
  },
  {
    name: "沉沦之心",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 156294403,
    equip: [
      setReliquartStat(156294403, "饰金胸花", "UI_RelicIcon_15016_4", EquipType.EQUIP_BRACER),
      setReliquartStat(156294403, "追忆之风", "UI_RelicIcon_15016_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(156294403, "坚铜罗盘", "UI_RelicIcon_15016_5", EquipType.EQUIP_SHOES),
      setReliquartStat(156294403, "沉波之盏", "UI_RelicIcon_15016_1", EquipType.EQUIP_RING),
      setReliquartStat(156294403, "酒渍船帽", "UI_RelicIcon_15016_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：获得15%水元素伤害加成。",
    suit4: "四件套：施放元素战技后的15秒内，普通攻击与重击造成的伤害提高30%。",
    buffs: {
      suit2: [
        {
          label: "二件套·水元素伤害加成",
          effect: [{ type: BuffType.HydroPrcent, getValue: () => 15 }],
          describe: "获得15%水元素伤害加成",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·普通攻击与重击伤害提高",
          effect: [
            { type: BuffType.NormalPrcent, getValue: () => 30 },
            { type: BuffType.StrongPrcent, getValue: () => 30 },
          ],
          describe: "施放元素战技后的15秒内，普通攻击与重击造成的伤害提高30%",
          enable: false,
        },
      ],
    },
  },
  {
    name: "角斗士的终幕礼",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 1212345779,
    equip: [
      setReliquartStat(1212345779, "角斗士的留恋", "UI_RelicIcon_15001_4", EquipType.EQUIP_BRACER),
      setReliquartStat(1212345779, "角斗士的归宿", "UI_RelicIcon_15001_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(1212345779, "角斗士的希冀", "UI_RelicIcon_15001_5", EquipType.EQUIP_SHOES),
      setReliquartStat(1212345779, "角斗士的酣醉", "UI_RelicIcon_15001_1", EquipType.EQUIP_RING),
      setReliquartStat(1212345779, "角斗士的凯旋", "UI_RelicIcon_15001_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：攻击力提高18%。",
    suit4: "四件套：装备该圣遗物套装的角色为单手剑、双手剑、长柄武器角色时，角色普通攻击造成的伤害提高35%。",
    buffs: {
      suit2: [
        {
          label: "二件套·攻击力提高",
          effect: [{ type: BuffType.ATKPrcent, getValue: () => 18 }],
          describe: "攻击力提高18%",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·普通攻击造成的伤害提高",
          effect: [{ type: BuffType.NormalPrcent, getValue: () => 35 }],
          describe: "角色为单手剑、双手剑、长柄武器角色时，角色普通攻击造成的伤害提高35%",
          enable: false,
        },
      ],
    },
  },
  {
    name: "流浪大地的乐团",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 147298547,
    equip: [
      setReliquartStat(147298547, "乐团的晨光", "UI_RelicIcon_15003_4", EquipType.EQUIP_BRACER),
      setReliquartStat(147298547, "琴师的箭羽", "UI_RelicIcon_15003_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(147298547, "终幕的时计", "UI_RelicIcon_15003_5", EquipType.EQUIP_SHOES),
      setReliquartStat(147298547, "吟游者之壶", "UI_RelicIcon_15003_1", EquipType.EQUIP_RING),
      setReliquartStat(147298547, "指挥的礼帽", "UI_RelicIcon_15003_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：元素精通提高80点。",
    suit4: "四件套：装备该圣遗物套装的角色为法器、弓箭角色时，角色重击造成的伤害提高35%。",
    buffs: {
      suit2: [
        {
          label: "二件套·元素精通提高",
          effect: [{ type: BuffType.MysteryFixed, getValue: () => 80 }],
          describe: "元素精通提高80点",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·法器、弓箭角色重击造成的伤害提高",
          effect: [{ type: BuffType.StrongPrcent, getValue: () => 35 }],
          describe: "角色为法器、弓箭角色时，角色重击造成的伤害提高35%",
          enable: true,
        },
      ],
    },
  },
  {
    name: "炽烈的炎之魔女",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 1524173875,
    equip: [
      setReliquartStat(1524173875, "魔女的炎之花", "UI_RelicIcon_15006_4", EquipType.EQUIP_BRACER),
      setReliquartStat(1524173875, "魔女常燃之羽", "UI_RelicIcon_15006_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(1524173875, "魔女破灭之时", "UI_RelicIcon_15006_5", EquipType.EQUIP_SHOES),
      setReliquartStat(1524173875, "魔女的心之火", "UI_RelicIcon_15006_1", EquipType.EQUIP_RING),
      setReliquartStat(1524173875, "焦灼的魔女帽", "UI_RelicIcon_15006_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：获得15%火元素伤害加成。",
    suit4:
      "四件套：超载、燃烧、烈绽放反应造成的伤害提升40%，蒸发、融化反应的加成系数提高15%。施放元素战技后的10秒内，2件套的效果提高50%，该效果最多叠加3次",
    buffs: {
      suit2: [
        {
          label: "二件套·火元素伤害加成",
          effect: [{ type: BuffType.PyroPrcent, getValue: () => 15 }],
          describe: "获得15%火元素伤害加成",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·火元素伤害提升，增幅反应的系数提高",
          effect: [
            { type: BuffType.PyroPrcent, getValue: (_, s) => 7.5 * s },
            { type: BuffType.AmplifiedRate, getValue: () => 15 },
          ],
          describe: "蒸发、融化反应的加成系数提高15%。施放元素战技后，2件套的效果提高50%，该效果最多叠加3次",
          enable: true,
          stackable: true,
          stack: 0,
          limit: 3,
        },
      ],
    },
  },
  {
    name: "渡过烈火的贤人",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 1632377563,
    equip: [
      setReliquartStat(1632377563, "渡火者的决绝", "UI_RelicIcon_14003_4", EquipType.EQUIP_BRACER),
      setReliquartStat(1632377563, "渡火者的解脱", "UI_RelicIcon_14003_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(1632377563, "渡火者的煎熬", "UI_RelicIcon_14003_5", EquipType.EQUIP_SHOES),
      setReliquartStat(1632377563, "渡火者的醒悟", "UI_RelicIcon_14003_1", EquipType.EQUIP_RING),
      setReliquartStat(1632377563, "渡火者的智慧", "UI_RelicIcon_14003_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：火元素抗性提高40%。",
    suit4: "四件套：对处于火元素影响下的敌人造成的伤害提升35%。",
    buffs: {
      suit2: [],
      suit4: [
        {
          label: "四件套·造成的伤害提升",
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => 35 }],
          describe: "对处于火元素影响下的敌人造成的伤害提升35%",
          enable: false,
        },
      ],
    },
  },
  {
    name: "悠古的磐岩",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 2040573235,
    equip: [
      setReliquartStat(2040573235, "渡火者的决绝", "UI_RelicIcon_15014_4", EquipType.EQUIP_BRACER),
      setReliquartStat(2040573235, "渡火者的解脱", "UI_RelicIcon_15014_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(2040573235, "渡火者的煎熬", "UI_RelicIcon_15014_5", EquipType.EQUIP_SHOES),
      setReliquartStat(2040573235, "渡火者的醒悟", "UI_RelicIcon_15014_1", EquipType.EQUIP_RING),
      setReliquartStat(2040573235, "渡火者的智慧", "UI_RelicIcon_15014_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：获得15%岩元素伤害加成。",
    suit4:
      "四件套：获得结晶反应形成的晶片时，队伍中所有角色获得35%对应元素伤害加成，持续10秒。同时只能通过该效果获得一种元素伤害加成。",
    buffs: {
      suit2: [
        {
          label: "四件套·岩元素伤害加成",
          effect: [{ type: BuffType.GeoPrcent, getValue: () => 15 }],
          describe: "岩元素伤害加成15%",
          enable: true,
        },
      ],
      suit4: [
        getBuffByElement3(ElementType.Hydro, BuffType.HydroPrcent),
        getBuffByElement3(ElementType.Pyro, BuffType.PyroPrcent),
        getBuffByElement3(ElementType.Cryo, BuffType.CryoPrcent),
        getBuffByElement3(ElementType.Electro, BuffType.ElectroPrcent),
      ],
    },
  },
  {
    name: "逆飞的流星",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 1438974835,
    equip: [
      setReliquartStat(1438974835, "夏祭之花", "UI_RelicIcon_15015_4", EquipType.EQUIP_BRACER),
      setReliquartStat(1438974835, "夏祭终末", "UI_RelicIcon_15015_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(1438974835, "夏祭之刻", "UI_RelicIcon_15015_5", EquipType.EQUIP_SHOES),
      setReliquartStat(1438974835, "夏祭水玉", "UI_RelicIcon_15015_1", EquipType.EQUIP_RING),
      setReliquartStat(1438974835, "夏祭之面", "UI_RelicIcon_15015_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：护盾强效提高35%。",
    suit4: "四件套：处于护盾庇护下时，额外获得40%普通攻击和重击伤害加成。",
    buffs: {
      suit2: [
        {
          label: "二件套·护盾强效提高",
          effect: [{ type: BuffType.ShieldStrong, getValue: () => 35 }],
          describe: "护盾强效提高35%",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·普通攻击与重击伤害提高",
          effect: [
            { type: BuffType.NormalPrcent, getValue: () => 40 },
            { type: BuffType.StrongPrcent, getValue: () => 40 },
          ],
          describe: "处于护盾庇护下时，额外获得40%普通攻击和重击伤害加成",
          enable: false,
        },
      ],
    },
  },
  {
    name: "平息鸣雷的尊者",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 1873342283,
    equip: [
      setReliquartStat(1873342283, "平雷之心", "UI_RelicIcon_14002_4", EquipType.EQUIP_BRACER),
      setReliquartStat(1873342283, "平雷之羽", "UI_RelicIcon_14002_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(1873342283, "平雷之刻", "UI_RelicIcon_14002_5", EquipType.EQUIP_SHOES),
      setReliquartStat(1873342283, "平雷之器", "UI_RelicIcon_14002_1", EquipType.EQUIP_RING),
      setReliquartStat(1873342283, "平雷之冠", "UI_RelicIcon_14002_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：雷元素抗性提高40%",
    suit4: "四件套：对处于雷元素影响下的敌人造成的伤害提升35%。",
    buffs: {
      suit2: [],
      suit4: [
        {
          label: "四件套·造成的伤害提升",
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => 35 }],
          describe: "对处于雷元素影响下的敌人造成的伤害提升35%",
          enable: false,
        },
      ],
    },
  },
  {
    name: "如雷的盛怒",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 2512309395,
    equip: [
      setReliquartStat(2512309395, "雷鸟的怜悯", "UI_RelicIcon_15005_4", EquipType.EQUIP_BRACER),
      setReliquartStat(2512309395, "雷灾的孑遗", "UI_RelicIcon_15005_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(2512309395, "雷霆的时计", "UI_RelicIcon_15005_5", EquipType.EQUIP_SHOES),
      setReliquartStat(2512309395, "降雷的凶兆", "UI_RelicIcon_15005_1", EquipType.EQUIP_RING),
      setReliquartStat(2512309395, "唤雷的头冠", "UI_RelicIcon_15005_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：获得15%雷元素伤害加成。",
    suit4:
      "四件套：超载、感电、超导、超绽放反应造成的伤害提升40%，超激化反应带来的伤害提升提高20%。触发上述元素反应或原激化反应时，元素战技冷却时间减少1秒。该效果每0.8秒最多触发一次。",
    buffs: {
      suit2: [
        {
          label: "二件套·雷元素伤害加成",
          effect: [{ type: BuffType.ElectroPrcent, getValue: () => 15 }],
          describe: "获得15%雷元素伤害加成",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·超激化反应伤害提升",
          effect: [{ type: BuffType.CatalyzeRate, getValue: () => 20 }],
          describe: "超激化反应带来的伤害提升提高20%",
          enable: true,
        },
      ],
    },
  },
  {
    name: "染血的骑士道",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 1541919827,
    equip: [
      setReliquartStat(1541919827, "染血的铁之心", "UI_RelicIcon_15008_4", EquipType.EQUIP_BRACER),
      setReliquartStat(1541919827, "染血的黑之羽", "UI_RelicIcon_15008_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(1541919827, "骑士染血之时", "UI_RelicIcon_15008_5", EquipType.EQUIP_SHOES),
      setReliquartStat(1541919827, "染血骑士之杯", "UI_RelicIcon_15008_1", EquipType.EQUIP_RING),
      setReliquartStat(1541919827, "染血的铁假面", "UI_RelicIcon_15008_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：造成的物理伤害提高25%。",
    suit4: "四件套：击败敌人后的10秒内，施放重击时不消耗体力，且重击造成的伤害提升50%。",
    buffs: {
      suit2: [
        {
          label: "二件套·物理伤害提高",
          effect: [{ type: BuffType.PhysicalPrcent, getValue: () => 25 }],
          describe: "造成的物理伤害提高25%",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·重击造成的伤害提升",
          effect: [{ type: BuffType.StrongPrcent, getValue: () => 50 }],
          describe: "击败敌人后，施放重击时不消耗体力，且重击造成的伤害提升50%",
          enable: false,
        },
      ],
    },
  },
  {
    name: "昔日宗室之仪",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 1751039235,
    equip: [
      setReliquartStat(1751039235, "宗室之花", "UI_RelicIcon_15007_4", EquipType.EQUIP_BRACER),
      setReliquartStat(1751039235, "宗室之翎", "UI_RelicIcon_15007_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(1751039235, "宗室时计", "UI_RelicIcon_15007_5", EquipType.EQUIP_SHOES),
      setReliquartStat(1751039235, "宗室银瓮", "UI_RelicIcon_15007_1", EquipType.EQUIP_RING),
      setReliquartStat(1751039235, "宗室面具", "UI_RelicIcon_15007_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：元素爆发造成的伤害提升20％。",
    suit4: "四件套：释放元素爆发后，队伍中所有角色攻击力提升20％，持续12秒，该效果不可叠加。",
    buffs: {
      suit2: [
        {
          label: "二件套·元素爆发造成的伤害提升",
          effect: [{ type: BuffType.BurstPrcent, getValue: () => 20 }],
          describe: "元素爆发造成的伤害提升20％",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·所有角色攻击力提升",
          effect: [{ type: BuffType.ATKPrcent, getValue: () => 20 }],
          describe: "释放元素爆发后，队伍中所有角色攻击力提升20％",
          enable: false,
          shareable: true,
          target: BuffTarget.All,
        },
      ],
    },
  },
  {
    name: "被怜爱的少女",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 83115355,
    equip: [
      setReliquartStat(83115355, "远方的少女之心", "UI_RelicIcon_14004_4", EquipType.EQUIP_BRACER),
      setReliquartStat(83115355, "少女飘摇的思念", "UI_RelicIcon_14004_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(83115355, "少女苦短的良辰", "UI_RelicIcon_14004_5", EquipType.EQUIP_SHOES),
      setReliquartStat(83115355, "少女片刻的闲暇", "UI_RelicIcon_14004_1", EquipType.EQUIP_RING),
      setReliquartStat(83115355, "少女易逝的芳颜", "UI_RelicIcon_14004_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：角色造成的治疗效果提升15%。",
    suit4: "四件套：施放元素战技或元素爆发后的10秒内，队伍中所有角色受治疗效果加成提高20%。",
    buffs: {
      suit2: [
        {
          label: "二件套·治疗效果提升",
          effect: [{ type: BuffType.HealAdd, getValue: () => 15 }],
          describe: "角色造成的治疗效果提升15%",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·所有角色受治疗效果加成提高",
          effect: [{ type: BuffType.BeHealAdd, getValue: () => 20 }],
          describe: "施放元素战技或元素爆发后的10秒内，队伍中所有角色受治疗效果加成提高20%",
          enable: false,
          shareable: true,
          target: BuffTarget.All,
        },
      ],
    },
  },
  {
    name: "翠绿之影",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 1562601179,
    equip: [
      setReliquartStat(1562601179, "野花记忆的绿野", "UI_RelicIcon_15002_4", EquipType.EQUIP_BRACER),
      setReliquartStat(1562601179, "猎人青翠的箭羽", "UI_RelicIcon_15002_2", EquipType.EQUIP_NECKLACE),
      setReliquartStat(1562601179, "翠绿猎人的笃定", "UI_RelicIcon_15002_5", EquipType.EQUIP_SHOES),
      setReliquartStat(1562601179, "翠绿猎人的容器", "UI_RelicIcon_15002_1", EquipType.EQUIP_RING),
      setReliquartStat(1562601179, "翠绿的猎人之冠", "UI_RelicIcon_15002_3", EquipType.EQUIP_DRESS),
    ],
    suit2: "二件套：获得15%风元素伤害加成。",
    suit4: "四件套：扩散反应造成的伤害提升60%。根据扩散的元素类型，降低受到影响的敌人40%的对应元素抗性，持续10秒。",
    buffs: {
      suit2: [
        {
          label: "二件套·风元素伤害加成",
          effect: [{ type: BuffType.AnemoPrcent, getValue: () => 15 }],
          describe: "获得15%风元素伤害加成",
          enable: true,
        },
      ],
      suit4: [
        getBuffByElement4("四件套·降低敌人的[火元素抗性]", BuffType.EnemyPyroResistance),
        getBuffByElement4("四件套·降低敌人的[雷元素抗性]", BuffType.EnemyElectroResistance),
        getBuffByElement4("四件套·降低敌人的[冰元素抗性]", BuffType.EnemyCryoResistance),
        getBuffByElement4("四件套·降低敌人的[水元素抗性]", BuffType.EnemyHydroResistance),
      ],
    },
  },
  {
    name: "勇士之心",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 3535784755,
    equip: [
      setReliquartStat(3535784755, "勇士的勋章", "UI_RelicIcon_10002_4", EquipType.EQUIP_BRACER, 4, 16),
      setReliquartStat(3535784755, "勇士的期许", "UI_RelicIcon_10002_2", EquipType.EQUIP_NECKLACE, 4, 16),
      setReliquartStat(3535784755, "勇士的坚毅", "UI_RelicIcon_10002_5", EquipType.EQUIP_SHOES, 4, 16),
      setReliquartStat(3535784755, "勇士的壮行", "UI_RelicIcon_10002_1", EquipType.EQUIP_RING, 4, 16),
      setReliquartStat(3535784755, "勇士的冠冕", "UI_RelicIcon_10002_3", EquipType.EQUIP_DRESS, 4, 16),
    ],
    suit2: "二件套：攻击力提高18%。",
    suit4: "四件套：对生命值高于50%的敌人，造成的伤害增加30%。",
    buffs: {
      suit2: [
        {
          label: "二件套·攻击力提高",
          effect: [{ type: BuffType.ATKPrcent, getValue: () => 18 }],
          describe: "攻击力提高18%",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·造成的伤害增加",
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => 30 }],
          describe: "对生命值高于50%的敌人，造成的伤害增加30%",
          enable: false,
        },
      ],
    },
  },
  {
    name: "教官",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 3890292467,
    equip: [
      setReliquartStat(3890292467, "教官的胸花", "UI_RelicIcon_10007_4", EquipType.EQUIP_BRACER, 4, 16),
      setReliquartStat(3890292467, "教官的羽饰", "UI_RelicIcon_10007_2", EquipType.EQUIP_NECKLACE, 4, 16),
      setReliquartStat(3890292467, "教官的怀表", "UI_RelicIcon_10007_5", EquipType.EQUIP_SHOES, 4, 16),
      setReliquartStat(3890292467, "教官的茶杯", "UI_RelicIcon_10007_1", EquipType.EQUIP_RING, 4, 16),
      setReliquartStat(3890292467, "教官的帽子", "UI_RelicIcon_10007_3", EquipType.EQUIP_DRESS, 4, 16),
    ],
    suit2: "二件套：元素精通提高80点。",
    suit4: "四件套：触发元素反应后，队伍中所有角色的元素精通提高120点，持续8秒。",
    buffs: {
      suit2: [
        {
          label: "二件套·元素精通提高",
          effect: [{ type: BuffType.MysteryFixed, getValue: () => 80 }],
          describe: "元素精通提高80点",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·全队元素精通提高",
          effect: [{ type: BuffType.MysteryFixed, getValue: () => 120 }],
          describe: "触发元素反应后，队伍中所有角色的元素精通提高120点",
          enable: false,
          shareable: true,
          target: BuffTarget.All,
        },
      ],
    },
  },
  {
    name: "流放者",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 2764598579,
    equip: [
      setReliquartStat(2764598579, "流放者之花", "UI_RelicIcon_10009_4", EquipType.EQUIP_BRACER, 4, 16),
      setReliquartStat(2764598579, "流放者之羽", "UI_RelicIcon_10009_2", EquipType.EQUIP_NECKLACE, 4, 16),
      setReliquartStat(2764598579, "流放者怀表", "UI_RelicIcon_10009_5", EquipType.EQUIP_SHOES, 4, 16),
      setReliquartStat(2764598579, "流放者之杯", "UI_RelicIcon_10009_1", EquipType.EQUIP_RING, 4, 16),
      setReliquartStat(2764598579, "流放者头冠", "UI_RelicIcon_10009_3", EquipType.EQUIP_DRESS, 4, 16),
    ],
    suit2: "二件套：元素充能效率提高20%。",
    suit4: "四件套：施放元素爆发后，每2秒为队伍中所有角色（不包括自己）恢复2点元素能量。该效果持续6秒，无法叠加。",
    buffs: {
      suit2: [
        {
          label: "二件套·元素充能效率提高",
          effect: [{ type: BuffType.ChargeFixed, getValue: () => 20 }],
          describe: "元素充能效率提高20%",
          enable: true,
        },
      ],
      suit4: [],
    },
  },
  {
    name: "战狂",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 855894507,
    equip: [
      setReliquartStat(855894507, "战狂的蔷薇", "UI_RelicIcon_10005_4", EquipType.EQUIP_BRACER, 4, 16),
      setReliquartStat(855894507, "战狂的翎羽", "UI_RelicIcon_10005_2", EquipType.EQUIP_NECKLACE, 4, 16),
      setReliquartStat(855894507, "战狂的时计", "UI_RelicIcon_10005_5", EquipType.EQUIP_SHOES, 4, 16),
      setReliquartStat(855894507, "战狂的骨杯", "UI_RelicIcon_10005_1", EquipType.EQUIP_RING, 4, 16),
      setReliquartStat(855894507, "战狂的鬼面", "UI_RelicIcon_10005_3", EquipType.EQUIP_DRESS, 4, 16),
    ],
    suit2: "二件套：暴击率提高12%。",
    suit4: "四件套：生命值低于70%时，暴击率额外提升24%。",
    buffs: {
      suit2: [
        {
          label: "二件套·暴击率提高",
          effect: [{ type: BuffType.Critcal, getValue: () => 12 }],
          describe: "暴击率提高12%",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·暴击率额外提升",
          effect: [{ type: BuffType.Critcal, getValue: () => 24 }],
          describe: "生命值低于70%时，暴击率额外提升24%",
          enable: false,
        },
      ],
    },
  },
  {
    name: "武人",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 2890909531,
    equip: [
      setReliquartStat(2890909531, "武人的红花", "UI_RelicIcon_10006_4", EquipType.EQUIP_BRACER, 4, 16),
      setReliquartStat(2890909531, "武人的羽饰", "UI_RelicIcon_10006_2", EquipType.EQUIP_NECKLACE, 4, 16),
      setReliquartStat(2890909531, "武人的水漏", "UI_RelicIcon_10006_5", EquipType.EQUIP_SHOES, 4, 16),
      setReliquartStat(2890909531, "武人的酒杯", "UI_RelicIcon_10006_1", EquipType.EQUIP_RING, 4, 16),
      setReliquartStat(2890909531, "武人的头巾", "UI_RelicIcon_10006_3", EquipType.EQUIP_DRESS, 4, 16),
    ],
    suit2: "二件套：普通攻击与重击造成的伤害提高15%。",
    suit4: "四件套：释放元素战技后的8秒内，普通攻击和重击造成的伤害提升25%。",
    buffs: {
      suit2: [
        {
          label: "二件套·普通攻击与重击伤害提高",
          effect: [
            { type: BuffType.NormalPrcent, getValue: () => 15 },
            { type: BuffType.StrongPrcent, getValue: () => 15 },
          ],
          describe: "普通攻击与重击造成的伤害提高15%",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·普通攻击与重击伤害提高",
          effect: [
            { type: BuffType.NormalPrcent, getValue: () => 25 },
            { type: BuffType.StrongPrcent, getValue: () => 25 },
          ],
          describe: "释放元素战技后，普通攻击和重击造成的伤害提升25%",
          enable: false,
        },
      ],
    },
  },
  {
    name: "学士",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 3618167299,
    equip: [
      setReliquartStat(3618167299, "学士的书签", "UI_RelicIcon_10012_4", EquipType.EQUIP_BRACER, 4, 16),
      setReliquartStat(3618167299, "学士的羽笔", "UI_RelicIcon_10012_2", EquipType.EQUIP_NECKLACE, 4, 16),
      setReliquartStat(3618167299, "学士的时钟", "UI_RelicIcon_10012_5", EquipType.EQUIP_SHOES, 4, 16),
      setReliquartStat(3618167299, "学士的墨杯", "UI_RelicIcon_10012_1", EquipType.EQUIP_RING, 4, 16),
      setReliquartStat(3618167299, "学士的镜片", "UI_RelicIcon_10012_3", EquipType.EQUIP_DRESS, 4, 16),
    ],
    suit2: "二件套：元素充能效率提高20%。",
    suit4: "四件套：获得元素微粒或元素晶球时，队伍中所有弓箭和法器角色额外恢复3点元素能量。该效果每3秒只能触发一次。",
    buffs: {
      suit2: [
        {
          label: "二件套·元素充能效率提高",
          effect: [{ type: BuffType.ChargeFixed, getValue: () => 20 }],
          describe: "元素充能效率提高20%",
          enable: true,
        },
      ],
      suit4: [],
    },
  },
  {
    name: "赌徒",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 1186209435,
    equip: [
      setReliquartStat(1186209435, "赌徒的胸花", "UI_RelicIcon_10008_4", EquipType.EQUIP_BRACER, 4, 16),
      setReliquartStat(1186209435, "赌徒的羽饰", "UI_RelicIcon_10008_2", EquipType.EQUIP_NECKLACE, 4, 16),
      setReliquartStat(1186209435, "赌徒的怀表", "UI_RelicIcon_10008_5", EquipType.EQUIP_SHOES, 4, 16),
      setReliquartStat(1186209435, "赌徒的骰盅", "UI_RelicIcon_10008_1", EquipType.EQUIP_RING, 4, 16),
      setReliquartStat(1186209435, "赌徒的耳环", "UI_RelicIcon_10008_3", EquipType.EQUIP_DRESS, 4, 16),
    ],
    suit2: "二件套：元素战技造成的伤害提升20%。",
    suit4: "四件套：打倒敌人时，有100%概率清除元素战技的冷却时间。该效果每15秒至多触发一次。",
    buffs: {
      suit2: [
        {
          label: "二件套·元素战技造成的伤害提升",
          effect: [{ type: BuffType.SkillPrcent, getValue: () => 20 }],
          describe: "元素战技造成的伤害提升20%",
          enable: true,
        },
      ],
      suit4: [],
    },
  },
  {
    name: "奇迹",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 1383639611,
    equip: [
      setReliquartStat(1383639611, "奇迹之花", "UI_RelicIcon_10004_4", EquipType.EQUIP_BRACER, 4, 16),
      setReliquartStat(1383639611, "奇迹之羽", "UI_RelicIcon_10004_2", EquipType.EQUIP_NECKLACE, 4, 16),
      setReliquartStat(1383639611, "奇迹之沙", "UI_RelicIcon_10004_5", EquipType.EQUIP_SHOES, 4, 16),
      setReliquartStat(1383639611, "奇迹之杯", "UI_RelicIcon_10004_1", EquipType.EQUIP_RING, 4, 16),
      setReliquartStat(1383639611, "奇迹耳坠", "UI_RelicIcon_10004_3", EquipType.EQUIP_DRESS, 4, 16),
    ],
    suit2: "二件套：所有元素抗性提高20%。",
    suit4: "四件套：受到某个元素类型的伤害后，相应的抗性提升30%，持续10秒。该效果每10秒只能触发一次。",
    buffs: {
      suit2: [],
      suit4: [],
    },
  },
  {
    name: "行者之心",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 2364208851,
    equip: [
      setReliquartStat(2364208851, "故人之心", "UI_RelicIcon_10001_4", EquipType.EQUIP_BRACER, 4, 16),
      setReliquartStat(2364208851, "归乡之羽", "UI_RelicIcon_10001_2", EquipType.EQUIP_NECKLACE, 4, 16),
      setReliquartStat(2364208851, "逐光之石", "UI_RelicIcon_10001_5", EquipType.EQUIP_SHOES, 4, 16),
      setReliquartStat(2364208851, "异国之盏", "UI_RelicIcon_10001_1", EquipType.EQUIP_RING, 4, 16),
      setReliquartStat(2364208851, "感别之冠", "UI_RelicIcon_10001_3", EquipType.EQUIP_DRESS, 4, 16),
    ],
    suit2: "二件套：攻击力提高18%。",
    suit4: "四件套：重击的暴击率提升30%。",
    buffs: {
      suit2: [
        {
          label: "二件套·攻击力提高18%",
          effect: [{ type: BuffType.ATKPrcent, getValue: () => 18 }],
          describe: "攻击力提高18%",
          enable: true,
        },
      ],
      suit4: [
        {
          label: "四件套·重击的暴击率提升",
          effect: [{ type: BuffType.StrongCritcal, getValue: () => 30 }],
          describe: "重击的暴击率提升30%",
          enable: true,
        },
      ],
    },
  },
  {
    name: "守护之心",
    itemType: ItemType.ITEM_RELIQUARY,
    setNameTextMapHash: 4082302819,
    equip: [
      setReliquartStat(4082302819, "守护之花", "UI_RelicIcon_10003_4", EquipType.EQUIP_BRACER, 4, 16),
      setReliquartStat(4082302819, "守护徽印", "UI_RelicIcon_10003_2", EquipType.EQUIP_NECKLACE, 4, 16),
      setReliquartStat(4082302819, "守护座钟", "UI_RelicIcon_10003_5", EquipType.EQUIP_SHOES, 4, 16),
      setReliquartStat(4082302819, "守护之皿", "UI_RelicIcon_10003_1", EquipType.EQUIP_RING, 4, 16),
      setReliquartStat(4082302819, "守护束带", "UI_RelicIcon_10003_3", EquipType.EQUIP_DRESS, 4, 16),
    ],
    suit2: "二件套：防御力提高30%。",
    suit4: "四件套：队伍里每有不同一种元素类型的自己的角色，自身获得30%相应的元素抗性。",
    buffs: {
      suit2: [
        {
          label: "二件套·防御力提高",
          effect: [{ type: BuffType.DEFPrcent, getValue: () => 30 }],
          describe: "防御力提高30%",
          enable: true,
        },
      ],
      suit4: [],
    },
  },
];
export default relicLibrary;
