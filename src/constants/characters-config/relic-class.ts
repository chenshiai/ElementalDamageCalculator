import { EquipType, IRelicBase, AppendProp } from "./interface.d";

export type MainstatType = {
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
}

export interface IRelicItem extends IRelicBase, RelicStatType {
  rankLevel: number;
  level: number;
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

  constructor(data: IRelicItem) {
    this.name = data.name;
    this.icon = data.icon;
    this.rankLevel = data.rankLevel;
    this.setNameTextMapHash = data.setNameTextMapHash;
    this.equipType = data.equipType;
    this.level = data.level;
    this.reliquaryMainstat = data.reliquaryMainstat;
    this.reliquarySubstats = data.reliquarySubstats;
  }

  public setMainstat(data: MainstatType) {
    this.reliquaryMainstat = data;
  }

  public setSubstat(data: SubstatType[]) {
    this.reliquarySubstats = data;
  }
}
/** 圣遗物主词条 */
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
    mainPropId: AppendProp.DEFENSE_PERCENT,
    statValue: 58.3,
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
    mainPropId: AppendProp.ELEMENT_MASTERY,
    statValue: 187,
  },
  {
    mainPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 51.8,
  },
  {
    mainPropId: AppendProp.HEAL_ADD,
    statValue: 35.6,
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
]