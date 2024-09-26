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
  // ================= 在面板上的buff =============
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

  /** 物理伤害提升 单位% */
  PhysicalPrcent = "physicalAddHunt",
  /** 火元素伤害提升 单位% */
  PyroPrcent = "pyroAddHunt",
  /** 雷元素伤害提升 单位% */
  ElectroPrcent = "electroAddHunt",
  /** 水元素伤害提升 单位% */
  HydroPrcent = "hydroAddHunt",
  /** 风元素伤害提升 单位% */
  AnemoPrcent = "anemoAddHunt",
  /** 冰元素伤害提升 单位% */
  CryoPrcent = "cryoAddHunt",
  /** 岩元素伤害提升 单位% */
  GeoPrcent = "geoAddHunt",
  /** 草元素伤害提升 单位% */
  DendroPrcent = "dendroAddHunt",

  // ================= 不在面板上的buff =============
  /** 普攻伤害百分比提升 */
  NormalPrcent = "normalAttackAddHunt",
  /** 重击伤害百分比提升 */
  StrongPrcent = "strongAttackAddHunt",
  /** 下落攻击伤害百分比提升 */
  FallingPrcent = "fallingAttackAddHunt",
  /** 元素战技百分比提升 */
  SkillPrcent = "elementalSkillAddHunt",
  /** 元素爆发百分比提升 */
  BurstPrcent = "elementalBurstAddHunt",

  /** 普攻伤害提高 */
  NormalFixed = "normalIncreaseHurt",
  /** 重击伤害提高 */
  StrongFixed = "strongIncreaseHurt",
  /** 下落攻击伤害提高 */
  FallingFixed = "fallingIncreaseHurt",
  /** 元素战技伤害提高 */
  SkillFixed = "elementalSkillIncreaseHurt",
  /** 元素爆发伤害提高 */
  BurstFixed = "elementalBurstIncreaseHurt",

  /** 物理伤害提高 */
  PhysicalFixed = "phycalIncreaseHunt",
  /** 火元素伤害提高 */
  PyroFixed = "pyroIncreaseHunt",
  /** 雷元素伤害提高 */
  ElectroFixed = "electroIncreaseHunt",
  /** 水元素伤害提高 */
  HydroFixed = "hydroIncreaseHunt",
  /** 风元素伤害提高 */
  AnemoFixed = "anemoIncreaseHunt",
  /** 冰元素伤害提高 */
  CryoFixed = "cryoIncreaseHunt",
  /** 岩元素伤害提高 */
  GeoFixed = "geoIncreaseHunt",
  /** 草元素伤害提高 */
  DendroFixed = "dendroIncreaseHunt",

  /** 全局伤害提升 单位%*/
  GlobalPrcent = "globalAddHunt",
  /** 全局伤害提高 */
  GlobalFixed = "globalIncreaseHunt",

  /** 普攻暴击率提升 */
  NormalCritcal = "normalAttackCritcal",
  /** 重击暴击率提升 */
  StrongCritcal = "strongAttackCritcal",
  /** 下落攻击暴击率提升 */
  FallingCritcal = "fallingAttackCritcal",
  /** 元素战技暴击率提升 */
  SkillCritcal = "elementalSkillCritcal",
  /** 元素爆发暴击率提升 */
  BurstCritcal = "elementalBurstCritcal",

  /** 物理伤害暴击率提升% */
  PhysicalCritcal = "physicalCritcal",
  /** 火元素暴击率提升% */
  PyroCritcal = "pyroCritcal",
  /** 雷元素暴击率提升% */
  ElectroCritcal = "electroCritcal",
  /** 水元素暴击率提升% */
  HydroCritcal = "hydroCritcal",
  /** 冰元素暴击率提升% */
  CryoCritcal = "cryoCritcal",
  /** 岩元素暴击率提升% */
  GeoCritcal = "geoCritcal",
  /** 草元素暴击率提升% */
  DendroCritcal = "dendroCritcal",
  /** 风元素暴击率提升% */
  AnemoCritcal = "anemoCritcal",

  /** 普攻暴击伤害提升%*/
  NormalCritcalHurt = "normalAttackCritcalHurt",
  /** 重击暴击伤害提升%*/
  StrongCritcalHurt = "strongAttackCritcalHurt",
  /** 下落攻击暴击伤害提升%*/
  FallingCritcalHurt = "fallingAttackCritcalHurt",
  /** 元素战技暴击伤害提升%*/
  SkillCritcalHurt = "elementalSkillCritcalHurt",
  /** 元素爆发暴击伤害提升%*/
  BurstCritcalHurt = "elementalBurstCritcalHurt",

  /** 物理伤害暴击伤害提升%*/
  PhysicalCritcalHurt = "physicalCritcalHurt",
  /** 火伤暴击伤害提升%*/
  PyroCritcalHurt = "pyroCritcalHurt",
  /** 雷伤暴击伤害提升%*/
  ElectroCritcalHurt = "electroCritcalHurt",
  /** 水伤暴击伤害提升%*/
  HydroCritcalHurt = "hydroCritcalHurt",
  /** 冰伤暴击伤害提升%*/
  CryoCritcalHurt = "cryoCritcalHurt",
  /** 岩伤暴击伤害提升%*/
  GeoCritcalHurt = "geoCritcalHurt",
  /** 草伤暴击伤害提升%*/
  DendroCritcalHurt = "dendroCritcalHurt",
  /** 风伤暴击伤害提升%*/
  AnemoCritcalHurt = "anemoCritcalHurt",

  /** 生命之契 */
  LifeContract = "lifeContract",
  NormalRate = "normalRateAdd",
  StrongRate = "strongRateAdd",
  FallingRateAdd = "fallingRateAdd",
  SkillRate = "skillRateAdd",
  BurstRate = "burstRateAdd",
  CoolDown = "coolDown",
  HealAdd = "healAdd",
  BeHealAdd = "beHealAdd",
  ShieldStrong = "shieldStrong",

  NormalLevel = "normalLevel",
  SkillLevel = "skillLevel",
  BurstLevel = "burstLevel",
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

export enum ItemType {
  ITEM_WEAPON = "ITEM_WEAPON",
  ITEM_RELIQUARY = "ITEM_RELIQUARY",
}

export enum ActionOn {
  Direct = "Direct",
  Indirect = "indirect",
  External = "external",
}

export const elementTypeToLabel = {
  [ElementType.Physical]: "物理伤害加成",
  [ElementType.Pyro]: "火元素伤害加成",
  [ElementType.Electro]: "雷元素伤害加成",
  [ElementType.Hydro]: "水元素伤害加成",
  [ElementType.Anemo]: "风元素伤害加成",
  [ElementType.Cryo]: "冰元素伤害加成",
  [ElementType.Geo]: "岩元素伤害加成",
  [ElementType.Dendro]: "草元素伤害加成",
};