import { EquipType, BuffType, ItemType } from "@/types/enum";
import { IRelicBase, IBuffBase } from "@/types/interface";
import { getEnkaUI } from "./append-prop";

function setReliquartStat(setNameTextMapHash: number, name: string, iconUrl: string, equipType: EquipType): IRelicBase {
  return {
    name,
    icon: getEnkaUI(iconUrl),
    // enka数据中用来映射套装名字的id，这里用来映射套装效果
    setNameTextMapHash,
    equipType,
  };
}

export interface IRelicLibraryItem {
  name: string;
  itemType: ItemType;
  setNameTextMapHash: number;
  equip: IRelicBase[];
  suit2: string;
  suit4: string;
  buffs: {
    suit2: IBuffBase;
    suit4: IBuffBase;
  };
}

const relicLibrary: IRelicLibraryItem[] = [
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
      suit2: {
        label: "二件套·防御力提升",
        effect: [{ type: BuffType.DEFPrcent, getValue: () => 30 }],
        describe: "华馆梦醒形骸记2件套，防御力提升30%。",
        enable: true,
      },
      suit4: {
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
      suit2: {
        label: "二件套·普攻&重击伤害提升",
        describe: "逐影猎人2件套，普攻&重击伤害提升15%。",
        effect: [
          { type: BuffType.NormalPrcent, getValue: () => 15 },
          { type: BuffType.StrongPrcent, getValue: () => 15 },
        ],
        enable: true,
      },
      suit4: {
        label: "四件套·暴击率提升",
        describe: "逐影猎人4件套，暴击率提升12%，最多叠加3层。",
        effect: [{ type: BuffType.Critcal, getValue: (_, stack = 0) => 12 * stack }],
        enable: true,
        stackable: true,
        limit: 3,
        stack: 3,
      },
    },
  },
];
export default relicLibrary;
