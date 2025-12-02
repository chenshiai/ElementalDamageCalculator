import appendPropData from "./data";

/** 攻击方式 */
export enum AttackType {
  /** 普通攻击类型 */
  Normal = "NormalAttack",
  /** 重击类型 */
  Strong = "StrongAttack",
  /** 坠地冲击类型 */
  Falling = "FallingAttack",
  /** 下落期间类型 */
  FallPeriod = "FallPeriod",
  /** 元素战技类型 */
  Skill = "SkillAttack",
  /** 元素爆发类型 */
  Burst = "BurstAttack",
  /** 其他类型 */
  Other = "OtherAttack",
  /** 下落攻击兼其他类型 */
  FallingOther = "FallingOther",
  /** 月曜反应类型 */
  Moon = "Moon",

  /** 治疗类型 */
  Heal = "Heal",
  /** 护盾类型 */
  Shield = "Shield",
  /** 附加数值类型 */
  Added = "Added",
}

/** 元素类型 */
export enum ElementType {
  /** 物理属性 */
  Physical = "Physical",
  /** 火属性 */
  Pyro = "Pyro",
  /** 雷属性 */
  Electro = "Electro",
  /** 水属性 */
  Hydro = "Hydro",
  /** 风属性 */
  Anemo = "Anemo",
  /** 冰属性 */
  Cryo = "Cryo",
  /** 岩属性 */
  Geo = "Geo",
  /** 草属性 */
  Dendro = "Dendro",
  /** 月感电属性 */
  MoonElectro = "MoonElectro",
  /** 月绽放属性 */
  MoonSwirl = "MoonSwirl",
  /** 无属性 */
  None = "None",
}

/** 第二类型 */
export enum SecondElementType {
  /** 月兆 */
  Moon = 'moon',
  /** 芒 */
  Awn = 'awn',
  /** 荒 */
  Desolate = 'desolate',
  /** 夜魂 */
  Nightsoul = 'nightsoul',
  /** 魔导 */
  Magus = 'Magus'
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
  [ElementType.MoonElectro]: 8,
  [ElementType.MoonSwirl]: 9,
};

// 数字映射到 ElementType 的对象
export const NumberToElementType: Record<number, ElementType> = {
  0: ElementType.Physical,
  1: ElementType.Pyro,
  2: ElementType.Electro,
  3: ElementType.Hydro,
  4: ElementType.Anemo,
  5: ElementType.Cryo,
  6: ElementType.Geo,
  7: ElementType.Dendro,
  8: ElementType.MoonElectro,
  9: ElementType.MoonSwirl,
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
  /** 等级提升 */
  LevelAdd = "levelAdd",
  /** 基础生命值 */
  HPBase = "baseHP",
  /** 基础攻击力 */
  ATKBase = "baseATK",
  /** 基础防御力 */
  DEFBase = "baseDEF",
  // ================= 在面板上的buff =============
  /** 生命值百分比提升 */
  HPPrcent = "hpPrcent",
  /** 攻击力百分比提升 */
  ATKPrcent = "atkPrcent",
  /** 防御力百分比提升 */
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
  /** 全局伤害提升 单位%*/
  GlobalPrcent = "globalAddHunt",
  /** 全局月反应伤害提升 单位% - 与精通乘区提升加算 */
  GlobalMoonPrcent = "globalMoonAddHunt",
  /** 普攻伤害百分比提升 */
  NormalPrcent = "normalAttackAddHunt",
  /** 重击伤害百分比提升 */
  StrongPrcent = "strongAttackAddHunt",
  /** 下落攻击伤害百分比提升 */
  FallingPrcent = "fallingAttackAddHunt",
  /** 下落坠地伤害百分比提升 */
  FallingGroundPrcent = "fallingGroundAttackAddHunt",
  /** 元素战技百分比提升 */
  SkillPrcent = "elementalSkillAddHunt",
  /** 元素爆发百分比提升 */
  BurstPrcent = "elementalBurstAddHunt",
  /** 月感电伤害百分比提升 - 与精通乘区加算*/
  MoonElectroPrcent = "moonElectroAddHunt",
  /** 月绽放伤害百分比提升 - 与精通乘区加算*/
  MoonSwirlPrcent = "moonSwirlAddHunt",

  /** 全局伤害提高 - 适用于传统直伤 */
  GlobalFixed = "globalIncreaseHunt",
  /** 全局月反应伤害提高 - 不吃精通增伤、月反应增伤效果 */
  GlobalMoonFixed = "globalMoonIncreaseHunt",
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
  /** 月感电伤害提高 - 不吃精通增伤、月反应增伤效果 */
  MoonElectroFixed = "moonElectroIncreaseHunt",
  /** 月绽放伤害提高 - 不吃精通增伤、月反应增伤效果 */
  MoonSwirlFixed = "moonSwirlIncreaseHunt",

  /** 全局暴击率提升 */
  GlobalCritcal = "globalCritcal",
  /** 全局暴击伤害提升 */
  GlobalCritcalHunt = "globalCritcalHunt",

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
  /** 月感电暴击率提升% */
  MoonElectroCritcal = "moonElectroCritcal",
  /** 月绽放暴击率提升% */
  MoonSwirlCritcal = "moonSwirlCritcal",

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
  /** 月感电暴击伤害提升%*/
  MoonElectroCritcalHurt = "moonElectroCritcalHurt",
  /** 月绽放暴击伤害提升%*/
  MoonSwirlCritcalHurt = "moonSwirlCritcalHurt",

  /** 月感电擢升% */
  MoonElectroPromote = "moonElectroPromote",
  /** 月绽放擢升% */
  MoonSwirlPromote = "moonSwirlPromote",
  /** 月感电基础伤害提升% */
  MoonElectroBasePercent = "moonElectroBasePercent",
  /** 月绽放基础伤害提升% */
  MoonSwirlBasePercent = "moonSwirlBasePercent",

  /** 普攻倍率最终提升 */
  NormalRate = "normalRateAdd",
  /** 重击倍率最终提升 */
  StrongRate = "strongRateAdd",
  /** 下落攻击倍率最终提升 */
  FallingRateAdd = "fallingRateAdd",
  /** 元素战技倍率最终提升 */
  SkillRate = "skillRateAdd",
  /** 元素爆发倍率最终提升 */
  BurstRate = "burstRateAdd",
  /** 月感电倍率最终提升 */
  MoonElectroRate = "moonElectroRateAdd",
  /** 月绽放倍率最终提升 */
  MoonSwirlRate = "moonSwirlRateAdd",

  /** 普攻倍率加成 */
  NormalAdd = "normalAdd",
  /** 重击倍率加成 */
  StrongAdd = "strongAdd",
  /** 下落攻击倍率加成 */
  FallingAdd = "fallingAdd",
  /** 元素战技倍率加成 */
  SkillAdd = "skillAdd",
  /** 元素爆发倍率加成 */
  BurstAdd = "burstAdd",
  /** 攻击力倍率加成 - 该buff需要指定为独特buff，否则全技能生效 */
  AtkAdd = "atkAdd",
  /** 防御力倍率加成 - 该buff需要指定为独特buff，否则全技能生效 */
  DefAdd = "defAdd",
  /** 生命值倍率加成 - 该buff需要指定为独特buff，否则全技能生效 */
  HPAdd = "hpAdd",
  /** 元素精通倍率加成 - 该buff需要指定为独特buff，否则全技能生效 */
  EmAdd = "emAdd",
  
  /** 生命之契 */
  LifeContract = "lifeContract",
  /** 冷却缩减 */
  CoolDown = "coolDown",
  /** 治疗加成 */
  HealAdd = "healAdd",
  /** 受治疗加成 */
  BeHealAdd = "beHealAdd",
  /** 护盾强效加成 */
  ShieldStrong = "shieldStrong",
  /** 护盾构建加成 */
  ShieldAdd = "shieldAdd",

  NormalLevel = "normalLevelAdd",
  SkillLevel = "skillLevelAdd",
  BurstLevel = "burstLevelAdd",
  /** 普攻附魔属性 */
  Enchanting = "enchanting",
  /** 元素转化 */
  Transform = "transform",
  /** 蒸发反应系数提升% */
  AmplifiedRate = "amplifiedRate",
  /** 融化反应系数提升% */
  AmplifiedRate2 = "amplifiedRate2",
  /** 激化反应系数提升% */
  CatalyzeRate = "catalyzeRate",
  /** 无视防御% */
  DefensePenetration = "defensePenetration",
  /** 减少敌人防御% */
  ReduceArmour = "reduceArmour",
  /** 敌人物理抗性加成% */
  EnemyPhysicalResistance = "enemyPhysicalResistance",
  /** 敌人火抗性加成% */
  EnemyPyroResistance = "enemyPyroResistance",
  /** 敌人雷抗性加成% */
  EnemyElectroResistance = "enemyElectroResistance",
  /** 敌人水抗性加成% */
  EnemyHydroResistance = "enemyHydroResistance",
  /** 敌人风抗性加成% */
  EnemyAnemoResistance = "enemyAnemoResistance",
  /** 敌人冰抗性加成% */
  EnemyCryoResistance = "enemyCryoResistance",
  /** 敌人岩抗性加成% */
  EnemyGeoResistance = "enemyGeoResistance",
  /** 敌人草抗性加成% */
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
const allAppendPropIds: Record<AppendProp, number[]> = {} as Record<AppendProp, number[]>;
Object.values(AppendProp).forEach((prop) => {
  allAppendPropIds[prop] = appendPropData.filter((item) => item.propType === prop).map((item) => item.id);
});
export const AppendPropIds = allAppendPropIds;

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

export const EquipIndexToType = {
  0: EquipType.EQUIP_BRACER,
  1: EquipType.EQUIP_NECKLACE,
  2: EquipType.EQUIP_SHOES,
  3: EquipType.EQUIP_RING,
  4: EquipType.EQUIP_DRESS,
};

export enum ItemType {
  ITEM_WEAPON = "ITEM_WEAPON",
  ITEM_RELIQUARY = "ITEM_RELIQUARY",
}

/** BUFF计算的生效时机 */
export enum ActionOn {
  /** 前置生效，在计算武器副属性之前计算 */
  Front = "Front",
  /** 直接生效，在计算完武器副属性、圣遗物属性之后计算 */
  Direct = "Direct",
  /** 间接生效，在计算完所有面板属性后再计算，多用于面板的二次加成 */
  Indirect = "indirect",
  /** 额外生效，在计算完所有的属性后再计算，多用于从面板到伤害的转化 */
  External = "external",
}

/** BUFF计算时生效目标 */
export enum BuffTarget {
  /** 仅对自己显示 */
  Self = "Self",
  /** 仅对队友显示 */
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
