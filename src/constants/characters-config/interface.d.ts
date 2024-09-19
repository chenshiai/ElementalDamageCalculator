/** 攻击方式 */
export enum AttackType {
  Normal = "NormalAttack",
  Strong = "StrongAttack",
  Falling = "FallingAttack",
  Skill = "SkillAttack",
  Burst = "BurstAttack",
  Other = "OtherAttack",
}

/** 元素类型 */
export enum ElementType {
  Physical = "Physical",
  Pyro = "Pyro",
  Electro = "Electro",
  Hydro = "Hydro",
  Anemo = "Anemo",
  Cryo = "Cryo",
  Geo = "Geo",
  Dendro = "Dendro",
}

/** 武器类型 */
export enum WeaponType {
  Sword = "Sword",
  GreatSword = "GreatSword",
  Bow = "Bow",
  Magic = "Magic",
  Polearms = "Polearms",
}

/** 稀有度 */
export enum Rarity {
  One,
  Two,
  Three,
  Four,
  Five,
}

/** Buff的类型 */
export enum BuffType {
  /** 基础生命值百分比提升 */
  HPPrcent = "hpPrcent",
  /** 基础攻击力百分比提升 */
  ATKPrcent = "atkPrcent",
  /** 基础防御力百分比提升 */
  DEFPrcent = "defPrcent",

  /** 固定生命值提升 */
  HPFixed = "hpFixed",
  /** 固定攻击力提升 */
  ATKFixed = "atkFixed",
  /** 固定防御力提升 */
  DEFFixed = "defFixed",

  /** 固定元素精通提升 */
  MysteryFixed = "mysteryFixed",
  /** 元素充能提升 单位% */
  ChargeFixed = "chargeFixed",
  /** 暴击率提升 单位% */
  Critcal = "critcal",
  /** 暴击伤害提升 单位%*/
  CritcalHurt = "critcalHurt",

  /** 普攻伤害百分比提升 */
  NormalPrcent = "normalAttackPrcent",
  /** 重击伤害百分比提升 */
  StrongPrcent = "strongAttackPrcent",
  /** 下落攻击伤害百分比提升 */
  FallingPrcent = "fallingAttackPrcent",
  /** 元素战技百分比提升 */
  SkillPrcent = "skillAttackPrcent",
  /** 元素爆发百分比提升 */
  BurstPrcent = "burstAttackPrcent",

  /** 普攻伤害提高 */
  NoramlFixed = "normalAttackFixed",
  /** 重击伤害提高 */
  StrongFixed = "strongAttackFixed",
  /** 下落攻击伤害提高 */
  FallingFixed = "fallingAttackFixed",
  /** 元素战技伤害提高 */
  SkillFixed = "skillAttackFixed",
  /** 元素爆发伤害提高 */
  BurstFixed = "burstAttackFixed",

  /** 物理伤害提升 单位% */
  PhysicalPrcent = "physicalPrcent",
  /** 火元素伤害提升 单位% */
  PyroPrcent = "pyroPrcent",
  /** 雷元素伤害提升 单位% */
  ElectroPrcent = "electroPrcent",
  /** 水元素伤害提升 单位% */
  HydroPrcent = "hydroPrcent",
  /** 风元素伤害提升 单位% */
  AnemoPrcent = "anemoPrcent",
  /** 冰元素伤害提升 单位% */
  CryoPrcent = "cryoPrcent",
  /** 岩元素伤害提升 单位% */
  GeoPrcent = "geoPrcent",
  /** 草元素伤害提升 单位% */
  DendroPrcent = "dendroPrcent",

  /** 物理伤害提高 */
  PhysicalFixed = "physicalFixed",
  /** 火元素伤害提高 */
  PyroFixed = "pyroFixed",
  /** 雷元素伤害提高 */
  ElectroFixed = "electroFixed",
  /** 水元素伤害提高 */
  HydroFixed = "hydroFixed",
  /** 风元素伤害提高 */
  AnemoFixed = "anemoFixed",
  /** 冰元素伤害提高 */
  CryoFixed = "cryoFixed",
  /** 岩元素伤害提高 */
  GeoFixed = "geoFixed",
  /** 草元素伤害提高 */
  DendroFixed = "dendroFixed",

  /** 全局伤害提升 单位%*/
  GlobalPrcent = "globalPrcent",
  /** 全局伤害提高 */
  GlobalFixed = "globalFixed",
}

/** 最终计算用的数据 */
export interface CalculatorData {
  conts: number;
}

/** Buff显示条件 */
export type BuffCondition = (data: CalculatorData) => boolean;
export type BuffEffect = {
  type: BuffType;
  value: number;
};

export interface IBuffBase {
  /** Buff展示名称 */
  label: string;
  /** Buff细节描述 */
  describe?: string;
  /** Buff的具体效果 */
  effect: BuffEffect[],
  /** Buff显示条件 */
  condition?: BuffCondition;
  /** Buff数值是否可叠加 */
  stackable?: boolean;
  /** 最大叠加层数 */
  limit?: number;
}

export interface ICharacterInfo {
  name: string;
  rarity: Rarity;
  element: ElementType;
  weapon: WeaponType;
  level: number;
  icons: {
    avatarIcon: string;
    constsIcon: string[];
    skillsIcon: string[];
  };
  buffs?: IBuffBase[];
}

export enum AppendProp {
  BASE_ATTACK = "FIGHT_PROP_BASE_ATTACK",
  HP = "FIGHT_PROP_HP",
  ATTACK = "FIGHT_PROP_ATTACK",
  DEFENSE = "FIGHT_PROP_DEFENSE",
  HP_PERCENT = "FIGHT_PROP_HP_PERCENT",
  ATTACK_PERCENT = "FIGHT_PROP_ATTACK_PERCENT",
  DEFENSE_PERCENT = "FIGHT_PROP_DEFENSE_PERCENT",
  CRITICAL = "FIGHT_PROP_CRITICAL",
  CRITICAL_HURT = "FIGHT_PROP_CRITICAL_HURT",
  CHARGE_EFFICIENCY = "FIGHT_PROP_CHARGE_EFFICIENCY",
  HEAL_ADD = "FIGHT_PROP_HEAL_ADD",
  ELEMENT_MASTERY = "FIGHT_PROP_ELEMENT_MASTERY",
  PHYSICAL_ADD_HURT = "FIGHT_PROP_PHYSICAL_ADD_HURT",
  FIRE_ADD_HURT = "FIGHT_PROP_FIRE_ADD_HURT",
  ELEC_ADD_HURT = "FIGHT_PROP_ELEC_ADD_HURT",
  WATER_ADD_HURT = "FIGHT_PROP_WATER_ADD_HURT",
  WIND_ADD_HURT = "FIGHT_PROP_WIND_ADD_HURT",
  ICE_ADD_HURT = "FIGHT_PROP_ICE_ADD_HURT",
  ROCK_ADD_HURT = "FIGHT_PROP_ROCK_ADD_HURT",
  GRASS_ADD_HURT = "FIGHT_PROP_GRASS_ADD_HURT",
}

export type WeaponStats = {
  appendPropId: AppendProp;
  statValue: number;
};
export enum ItemType {
  ITEM_WEAPON = "ITEM_WEAPON",
  ITEM_RELIQUARY = "ITEM_RELIQUARY",
}
export enum EquipType {
  /** 生之花 */
  EQUIP_BRACER = "EQUIP_BRACER",
  /** 死之羽 */
  EQUIP_NECKLACE = "EQUIP_NECKLACE",
  /** 时之沙 */
  EQUIP_SHOES = "EQUIP_SHOES",
  /** 空之杯 */
  EQUIP_RING = "EQUIP_RING",
  /** 理之冠 */
  EQUIP_DRESS = "EQUIP_DRESS",
}

export interface IWeaponInfo {
  level: number;
  name: string;
  enkaId: number;
  weaponType: WeaponType;
  rarity: Rarity;
  affix: number;
  weaponStats: WeaponStats[];
  icon: string;
  getSkillDescribe: (affix: number) => {
    title: string;
    text: string;
  };
  getBuffs: (affix: number) => IBuffBase[];
}

export interface IRelicBase {
  setNameTextMapHash: number;
  equipType: EquipType;
  name: string;
  icon: string;
}