type AppendProp = 'FIGHT_PROP_BASE_ATTACK '| 'FIGHT_PROP_HP' | 'FIGHT_PROP_ATTACK' | 'FIGHT_PROP_DEFENSE'
| 'FIGHT_PROP_HP_PERCENT' | 'FIGHT_PROP_ATTACK_PERCENT' | 'FIGHT_PROP_DEFENSE_PERCENT' | 'FIGHT_PROP_CRITICAL'
| 'FIGHT_PROP_CRITICAL_HURT' | 'FIGHT_PROP_CHARGE_EFFICIENCY' | 'FIGHT_PROP_HEAL_ADD' | 'FIGHT_PROP_ELEMENT_MASTERY'
| 'FIGHT_PROP_PHYSICAL_ADD_HURT' | 'FIGHT_PROP_FIRE_ADD_HURT' | 'FIGHT_PROP_ELEC_ADD_HURT' | 'FIGHT_PROP_WATER_ADD_HURT'
| 'FIGHT_PROP_WIND_ADD_HURT' | 'FIGHT_PROP_ICE_ADD_HURT' | 'FIGHT_PROP_ROCK_ADD_HURT' | 'FIGHT_PROP_GRASS_ADD_HURT';

interface ReliquaryStat {
  mainPropId?: string;
  appendPropId?: AppendProp;
  statValue: number;
}

type FlatItemType = 'ITEM_RELIQUARY' | 'ITEM_WEAPON';
type EquipType = 'EQUIP_BRACER' | 'EQUIP_NECKLACE' | 'EQUIP_SHOES' | 'EQUIP_RING' | 'EQUIP_DRESS';

interface Flat {
  nameTextMapHash: string;
  rankLevel: number;
  itemType: FlatItemType;
  icon: string;
  equipType: EquipType;
  setNameTextMapHash: string;
  reliquarySubstats?: ReliquaryStat[];
  reliquaryMainstat?: ReliquaryStat;
  weaponStats?: ReliquaryStat[];
}

interface Weapon {
  level: number;
  promoteLevel: number;
  affixMap: Record<string, number>;
}

interface Reliquary {
  level: number;
  mainPropId: number;
  appendPropIdList: number[];
}

interface Equip {
  itemId: number;
  reliquary?: Reliquary;
  weapon?: Weapon;
  flat: Flat;
}

interface AvatarInfo {
  avatarId: number;
  propMap: Record<string, { type: number, ival: string, val?: string }>;
  fightPropMap: Record<string, number>;
  skillDepotId: number;
  inherentProudSkillList: number[];
  skillLevelMap: Record<string, number>;
  equipList: Equip[];
  fetterInfo: {
    expLevel: number;
  }
}