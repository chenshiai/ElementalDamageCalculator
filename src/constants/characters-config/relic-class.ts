import { EquipType, AppendProp } from "@/types/enum";
import { IRelicBase } from "@/types/interface";

export type MainstatType = {
  /** 圣遗物主属性类型 */
  mainPropId: AppendProp;
  statValue: number;
};

export type SubstatType = {
  appendPropId: AppendProp;
  statValue: number;
};

export type RelicStatType = {
  reliquaryMainstat: MainstatType;
  reliquarySubstats: SubstatType[];
  appendPropIdList?: number[];
};

export interface IRelicItem extends IRelicBase, RelicStatType {
  timetemp: string;
}

export class RelicItem {
  public name: string;
  public icon: string;
  public rankLevel: number;
  public setNameTextMapHash: number;
  public equipType: EquipType;
  public level: number;
  public reliquaryMainstat: MainstatType;
  public reliquarySubstats: SubstatType[];
  public timetemp: string;

  constructor(data: IRelicItem) {
    this.name = data.name;
    this.icon = data.icon;
    this.rankLevel = data.rankLevel;
    this.setNameTextMapHash = data.setNameTextMapHash;
    this.equipType = data.equipType;
    this.level = data.level;
    this.reliquaryMainstat = data.reliquaryMainstat;
    this.reliquarySubstats = data.reliquarySubstats;
    this.timetemp = data.timetemp;
  }

  public setMainstat(data: MainstatType) {
    this.reliquaryMainstat = data;
  }

  public setSubstat(data: SubstatType[]) {
    this.reliquarySubstats = data;
  }
}
/** 5星圣遗物主词条列表 */
export const ReliceMainStats: MainstatType[] = [
  {
    mainPropId: AppendProp.ATTACK,
    statValue: 311,
  },
  {
    mainPropId: AppendProp.HP,
    statValue: 4780,
  },
  {
    mainPropId: AppendProp.ATTACK_PERCENT,
    statValue: 46.6,
  },
  {
    mainPropId: AppendProp.HP_PERCENT,
    statValue: 46.6,
  },
  {
    mainPropId: AppendProp.DEFENSE_PERCENT,
    statValue: 58.3,
  },
  {
    mainPropId: AppendProp.ELEMENT_MASTERY,
    statValue: 187,
  },
  {
    mainPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 51.8,
  },
  {
    mainPropId: AppendProp.HEAL_ADD,
    statValue: 35.9,
  },
  {
    mainPropId: AppendProp.PHYSICAL_ADD_HURT,
    statValue: 58.3,
  },
  {
    mainPropId: AppendProp.FIRE_ADD_HURT,
    statValue: 46.6,
  },
  {
    mainPropId: AppendProp.WATER_ADD_HURT,
    statValue: 46.6,
  },
  {
    mainPropId: AppendProp.WIND_ADD_HURT,
    statValue: 46.6,
  },
  {
    mainPropId: AppendProp.ICE_ADD_HURT,
    statValue: 46.6,
  },
  {
    mainPropId: AppendProp.GRASS_ADD_HURT,
    statValue: 46.6,
  },
  {
    mainPropId: AppendProp.ELEC_ADD_HURT,
    statValue: 46.6,
  },
  {
    mainPropId: AppendProp.ROCK_ADD_HURT,
    statValue: 46.6,
  },
  {
    mainPropId: AppendProp.CRITICAL,
    statValue: 31.1,
  },
  {
    mainPropId: AppendProp.CRITICAL_HURT,
    statValue: 62.2,
  },
];

/** 4星圣遗物主词条列表 */
export const ReliceMainStats_Four: MainstatType[] = [
  {
    mainPropId: AppendProp.ATTACK,
    statValue: 232,
  },
  {
    mainPropId: AppendProp.HP,
    statValue: 3571,
  },
  {
    mainPropId: AppendProp.DEFENSE_PERCENT,
    statValue: 43.5,
  },
  {
    mainPropId: AppendProp.ATTACK_PERCENT,
    statValue: 34.8,
  },
  {
    mainPropId: AppendProp.HP_PERCENT,
    statValue: 34.8,
  },
  {
    mainPropId: AppendProp.ELEMENT_MASTERY,
    statValue: 139,
  },
  {
    mainPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 38.7,
  },
  {
    mainPropId: AppendProp.HEAL_ADD,
    statValue: 26.8,
  },
  {
    mainPropId: AppendProp.PHYSICAL_ADD_HURT,
    statValue: 43.5,
  },
  {
    mainPropId: AppendProp.FIRE_ADD_HURT,
    statValue: 34.8,
  },
  {
    mainPropId: AppendProp.WATER_ADD_HURT,
    statValue: 34.8,
  },
  {
    mainPropId: AppendProp.WIND_ADD_HURT,
    statValue: 34.8,
  },
  {
    mainPropId: AppendProp.ICE_ADD_HURT,
    statValue: 34.8,
  },
  {
    mainPropId: AppendProp.GRASS_ADD_HURT,
    statValue: 34.8,
  },
  {
    mainPropId: AppendProp.ELEC_ADD_HURT,
    statValue: 34.8,
  },
  {
    mainPropId: AppendProp.ROCK_ADD_HURT,
    statValue: 34.8,
  },
  {
    mainPropId: AppendProp.CRITICAL,
    statValue: 23.2,
  },
  {
    mainPropId: AppendProp.CRITICAL_HURT,
    statValue: 46.4,
  },
];

/** 3星圣遗物主词条列表 */
export const ReliceMainStats_Three: MainstatType[] = [
  {
    mainPropId: AppendProp.ATTACK,
    statValue: 123,
  },
  {
    mainPropId: AppendProp.HP,
    statValue: 1893,
  },
  {
    mainPropId: AppendProp.DEFENSE_PERCENT,
    statValue: 28.8,
  },
  {
    mainPropId: AppendProp.ATTACK_PERCENT,
    statValue: 23.1,
  },
  {
    mainPropId: AppendProp.HP_PERCENT,
    statValue: 23.1,
  },
  {
    mainPropId: AppendProp.ELEMENT_MASTERY,
    statValue: 92,
  },
  {
    mainPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 25.6,
  },
  {
    mainPropId: AppendProp.HEAL_ADD,
    statValue: 17.8,
  },
  {
    mainPropId: AppendProp.PHYSICAL_ADD_HURT,
    statValue: 28.8,
  },
  {
    mainPropId: AppendProp.FIRE_ADD_HURT,
    statValue: 23.1,
  },
  {
    mainPropId: AppendProp.WATER_ADD_HURT,
    statValue: 23.1,
  },
  {
    mainPropId: AppendProp.WIND_ADD_HURT,
    statValue: 23.1,
  },
  {
    mainPropId: AppendProp.ICE_ADD_HURT,
    statValue: 23.1,
  },
  {
    mainPropId: AppendProp.GRASS_ADD_HURT,
    statValue: 23.1,
  },
  {
    mainPropId: AppendProp.ELEC_ADD_HURT,
    statValue: 23.1,
  },
  {
    mainPropId: AppendProp.ROCK_ADD_HURT,
    statValue: 23.1,
  },
  {
    mainPropId: AppendProp.CRITICAL,
    statValue: 15.4,
  },
  {
    mainPropId: AppendProp.CRITICAL_HURT,
    statValue: 30.8,
  },
];
