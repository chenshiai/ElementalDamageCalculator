/** 攻击方式 */
export enum AttackType {
  Normal = "NormalAttack",
  Strong = "StrongAttack",
  Falling = "FallingAttack",
  FallPeriod = "FallPeriod",
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

export const EnchantingType = {
  [ElementType.Physical]: 0,
  [ElementType.Pyro]: 1,
  [ElementType.Electro]: 2,
  [ElementType.Hydro]: 3,
  [ElementType.Anemo]: 4,
  [ElementType.Cryo]: 5,
  [ElementType.Geo]: 6,
  [ElementType.Dendro]: 7,
};

// 数字映射到 ElementType 的对象
export const NumberToElementType = {
  0: ElementType.Physical,
  1: ElementType.Pyro,
  2: ElementType.Electro,
  3: ElementType.Hydro,
  4: ElementType.Anemo,
  5: ElementType.Cryo,
  6: ElementType.Geo,
  7: ElementType.Dendro,
};
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
  ATKBase = "baseATK",
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
  /** 普攻倍率提升 */
  NormalRate = "normalRateAdd",
  /** 重击倍率提升 */
  StrongRate = "strongRateAdd",
  /** 下落攻击倍率提升 */
  FallingRateAdd = "fallingRateAdd",
  /** 元素战技倍率提升 */
  SkillRate = "skillRateAdd",
  /** 元素爆发倍率提升 */
  BurstRate = "burstRateAdd",
  /** 冷却缩减 */
  CoolDown = "coolDown",
  /** 治疗加成 */
  HealAdd = "healAdd",
  /** 受治疗加成 */
  BeHealAdd = "beHealAdd",
  /** 护盾强效加成 */
  ShieldStrong = "shieldStrong",

  NormalLevel = "normalLevelAdd",
  SkillLevel = "skillLevelAdd",
  BurstLevel = "burstLevelAdd",
  /** 普攻附魔属性 */
  Enchanting = "enchanting",
  /** 元素转化 */
  Transform = "transform",
  /** 增幅反应系数提升 */
  AmplifiedRate = "amplifiedRate",
  /** 激化反应系数提升 */
  CatalyzeRate = "catalyzeRate",
  /** 无视防御 */
  DefensePenetration = "defensePenetration",
  /** 减少敌人防御 */
  ReduceArmour = "reduceArmour",
  /** 敌人物理抗性 */
  EnemyPhysicalResistance = "enemyPhysicalResistance",
  /** 敌人火抗性 */
  EnemyPyroResistance = "enemyPyroResistance",
  /** 敌人雷抗性 */
  EnemyElectroResistance = "enemyElectroResistance",
  /** 敌人水抗性 */
  EnemyHydroResistance = "enemyHydroResistance",
  /** 敌人风抗性 */
  EnemyAnemoResistance = "enemyAnemoResistance",
  /** 敌人冰抗性 */
  EnemyCryoResistance = "enemyCryoResistance",
  /** 敌人岩抗性 */
  EnemyGeoResistance = "enemyGeoResistance",
  /** 敌人草抗性 */
  EnemyDendroResistance = "enemyDendroResistance",
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

/** 圣遗物的部位类型 */
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

/** BUFF计算的生效时机 */
export enum ActionOn {
  /** 前置生效，在计算武器副词条之前计算 */
  Front = "Front",
  /** 直接生效，在计算完武器副词条、圣遗物词条之后计算 */
  Direct = "Direct",
  /** 间接生效，在计算完所有面板属性后再计算 */
  Indirect = "indirect",
  /** 额外生效，在计算完所有的属性后再计算 */
  External = "external",
}

/** BUFF计算时生效目标 */
export enum BuffTarget {
  /** 仅对自己生效 */
  Self = "Self",
  /** 仅对队友生效 */
  Other = "Other",
  /** 仅对敌人生效 */
  Enemy = "Enemy",
  /** 无限制 */
  All = "All",
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

export const normalAttackUseData = {
  [AttackType.Normal]: []
}