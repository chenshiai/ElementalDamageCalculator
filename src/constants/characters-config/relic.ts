import { EquipType, ItemType, BuffType, IRelicBase, IBuffBase } from "./interface.d";
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
    suit2: "二件套：防御力提高30%。",
    suit4:
      "四件套：装备此圣遗物套装的角色在以下情况下，将获得[问答]效果：在场上用岩元素攻击命中敌人后获得一层，每0.3秒至多触发一次；在队伍后台众，每3秒获得一层。问答至多叠加4层，每层能提供6%防御力与6%岩元素伤害加成。每6秒，若未获得问答效果，将损失一层。",
    buffs: {
      suit2: {
        label: "二件套·防御力提高30%",
        effect: [{ type: BuffType.DEFPrcent, value: 30 }],
        describe: "华馆梦醒形骸记2件套，防御力提升30%。",
        enable: true,
      },
      suit4: {
        label: "四件套·防御力&岩元素伤害加成24%",
        effect: [
          { type: BuffType.DEFPrcent, value: 6 },
          { type: BuffType.GeoPrcent, value: 6 },
        ],
        describe: "华馆梦醒形骸记4件套，防御力&岩元素伤害提升提升6%，最多叠加4层。",
        enable: true,
        stackable: true,
        limit: 4,
        stack: 1,
      },
    },
  },
];
export default relicLibrary;