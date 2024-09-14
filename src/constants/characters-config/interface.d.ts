export enum AttackType {
  Normal = "NormalAttack",
  Strong = "StrongAttack",
  Falling = "FallingAttack",
  Skill = "SkillAttack",
  Burst = "BurstAttack",
  Other = "OtherAttack",
}

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

export enum WeaponType {
  Sword = "Sword",
  GreatSword = "GreatSword",
  Bow = "Bow",
  Magic = "Magic",
  LonGarm = "LonGarm",
}

export enum Rarity {
  One,
  Two,
  Three,
  Four,
  Five,
}

export enum BuffType {
  HPPrcent = "hpPrcent",
  ATKPrcent = "atkPrcent",
  DEFPrcent = "defPrcent",

  HPFixed = "hpFixed",
  ATKFixed = "atkFixed",
  DEFFixed = "defFixed",

  MysteryFixed = "mysteryFixed",
  ChargeFixed = "chargeFixed",
  Critcal = "critcal",
  CritcalHurt = "critcalHurt",

  NormalPrcent = "normalAttackPrcent",
  StrongPrcent = "strongAttackPrcent",
  FallingPrcent = "fallingAttackPrcent",
  SkillPrcent = "skillAttackPrcent",
  BurstPrcent = "burstAttackPrcent",

  NoramlFixed = "normalAttackFixed",
  StrongFixed = "strongAttackFixed",
  FallingFixed = "fallingAttackFixed",
  SkillFixed = "skillAttackFixed",
  BurstFixed = "burstAttackFixed",

  PhysicalPrcent = "physicalPrcent",
  PyroPrcent = "pyroPrcent",
  ElectroPrcent = "electroPrcent",
  HydroPrcent = "hydroPrcent",
  AnemoPrcent = "anemoPrcent",
  CryoPrcent = "cryoPrcent",
  GeoPrcent = "geoPrcent",
  DendroPrcent = "dendroPrcent",

  PhysicalFixed = "physicalFixed",
  PyroFixed = "pyroFixed",
  ElectroFixed = "electroFixed",
  HydroFixed = "hydroFixed",
  AnemoFixed = "anemoFixed",
  CryoFixed = "cryoFixed",
  GeoFixed = "geoFixed",
  DendroFixed = "dendroFixed",

  GlobalPrcent = "globalPrcent",
  GlobalFixed = "globalFixed",
}

/** 最终计算用的数据 */
export interface CalculatorData {
  conts: number;
}

/** Buff显示条件 */
export type BuffCondition = (data: CalculatorData) => boolean;

export interface IBuffBase {
  /** Buff展示名称 */
  label: string;
  /** Buff细节描述 */
  describe?: string;
  /** Buff作用类型 */
  type: BuffType;
  /** Buff数值 */
  value: number;
  /** Buff显示条件 */
  condition?: BuffCondition;
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
  }
}

export enum AppendProp {
  BASE_ATTACK = 'FIGHT_PROP_BASE_ATTACK',
  HP = 'FIGHT_PROP_HP',
  ATTACK = 'FIGHT_PROP_ATTACK',
  DEFENSE = 'FIGHT_PROP_DEFENSE',
  HP_PERCENT = 'FIGHT_PROP_HP_PERCENT',
  ATTACK_PERCENT = 'FIGHT_PROP_ATTACK_PERCENT',
  DEFENSE_PERCENT = 'FIGHT_PROP_DEFENSE_PERCENT',
  CRITICAL = 'FIGHT_PROP_CRITICAL',
  CRITICAL_HURT = 'FIGHT_PROP_CRITICAL_HURT',
  CHARGE_EFFICIENCY = 'FIGHT_PROP_CHARGE_EFFICIENCY',
  HEAL_ADD = 'FIGHT_PROP_HEAL_ADD',
  ELEMENT_MASTERY = 'FIGHT_PROP_ELEMENT_MASTERY',
  PHYSICAL_ADD_HURT = 'FIGHT_PROP_PHYSICAL_ADD_HURT',
  FIRE_ADD_HURT = 'FIGHT_PROP_FIRE_ADD_HURT',
  ELEC_ADD_HURT = 'FIGHT_PROP_ELEC_ADD_HURT',
  WATER_ADD_HURT = 'FIGHT_PROP_WATER_ADD_HURT',
  WIND_ADD_HURT = 'FIGHT_PROP_WIND_ADD_HURT',
  ICE_ADD_HURT = 'FIGHT_PROP_ICE_ADD_HURT',
  ROCK_ADD_HURT = 'FIGHT_PROP_ROCK_ADD_HURT',
  GRASS_ADD_HURT = 'FIGHT_PROP_GRASS_ADD_HURT'
}