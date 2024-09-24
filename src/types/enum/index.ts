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

  // ================= 不在面板上的buff =============
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
  NormalFixed = "normalAttackFixed",
  /** 重击伤害提高 */
  StrongFixed = "strongAttackFixed",
  /** 下落攻击伤害提高 */
  FallingFixed = "fallingAttackFixed",
  /** 元素战技伤害提高 */
  SkillFixed = "skillAttackFixed",
  /** 元素爆发伤害提高 */
  BurstFixed = "burstAttackFixed",

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

  /** 普攻暴击率提升 */
  NormalCritcal = "normalCritical",
  /** 重击暴击率提升 */
  StrongCritcal = "strongCritical",
  /** 下落攻击暴击率提升 */
  FallingCritcal = "fallingCritical",
  /** 元素战技暴击率提升 */
  SkillCritcal = "skillCritical",
  /** 元素爆发暴击率提升 */
  BurstCritcal = "burstCritical",

  /** 物理伤害暴击率提升% */
  PhysicalCritcal = "physicalCritical",
  /** 火元素暴击率提升% */
  PyroCritcal = "pyroCritical",
  /** 雷元素暴击率提升% */
  ElectroCritcal = "electroCritical",
  /** 水元素暴击率提升% */
  HydroCritcal = "hydroCritical",
  /** 冰元素暴击率提升% */
  CryoCritcal = "cryoCritical",
  /** 岩元素暴击率提升% */
  GeoCritcal = "geoCritical",
  /** 草元素暴击率提升% */
  DendroCritcal = "dendroCritical",
  /** 风元素暴击率提升% */
  AnemoCritcal = "anemoCritical",

  /** 普攻暴击伤害提升%*/
  NormalCritcalHurt = "normalCriticalHurt",
  /** 重击暴击伤害提升%*/
  StrongCritcalHurt = "strongCriticalHurt",
  /** 下落攻击暴击伤害提升%*/
  FallingCritcalHurt = "fallingCriticalHurt",
  /** 元素战技暴击伤害提升%*/
  SkillCritcalHurt = "skillCriticalHurt",
  /** 元素爆发暴击伤害提升%*/
  BurstCritcalHurt = "burstCriticalHurt",

  /** 物理伤害暴击伤害提升%*/
  PhysicalCritcalHurt = "physicalCriticalHurt",
  /** 火伤暴击伤害提升%*/
  PyroCritcalHurt = "pyroCriticalHurt",
  /** 雷伤暴击伤害提升%*/
  ElectroCritcalHurt = "electroCriticalHurt",
  /** 水伤暴击伤害提升%*/
  HydroCritcalHurt = "hydroCriticalHurt",
  /** 冰伤暴击伤害提升%*/
  CryoCritcalHurt = "cryoCriticalHurt",
  /** 岩伤暴击伤害提升%*/
  GeoCritcalHurt = "geoCriticalHurt",
  /** 草伤暴击伤害提升%*/
  DendroCritcalHurt = "dendroCriticalHurt",
  /** 风伤暴击伤害提升%*/
  AnemoCritcalHurt = "anemoCriticalHurt",

  /** 生命之契 */
  LifeContract = "lifeContract",
  NormalRate = "normalRate",
  StrongRate = "strongRate",
  FallingRateAdd = "fallingRate",
  SkillRate = "skillRate",
  BurstRate = "burstRate",
  CoolDown = "coolDown",
  HealAdd = "healAdd",
  BeHealAdd = "beHealAdd",
  ShieldStrong = "shieldStrong",
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