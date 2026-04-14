import { ElementalReactionType, ReactionRate } from "@/constants";
import { AttackType, BuffType, ElementType, EnchantingType, NumberToElementType, WeaponType } from "@/types/enum";
import { ICalculatorValue, IRate } from "@/types/interface";
import { BaseDMG } from "@/constants/elementalReaction";
import { getCatalyzeRate, getAmplifiedRate, getResistanceRate, getDefRate, getMoonElectroRate } from "@/utils";

type MoreData = {
  /** 伤害提高 */
  ADDITIONAL_DMG: number;
  /** 传统增伤 */
  addHunt: number;
  /** 月曜增伤 */
  moonAddHunt: number;
  /** 暴击伤害 */
  criticalHunt: number;
  /** 暴击 */
  critical: number;
  /** 敌人对应抗性 */
  resistance: number;
  /** 最终倍率提升 */
  addRate: number;
  /** 无视敌人防御 */
  defensePenetration: number;
  /** 元素类型 */
  newElementType: ElementType;
  /** 治疗加成 */
  healAdd: number;
  /** 护盾量提升 */
  shieldAdd: number;
  /** 额外技能倍率 */
  extraRate: number;
  /** 月曜反应擢升% */
  moonPromote: number;
  /** 月曜反应基础伤害提升% */
  moonBasePercent: number;
  /** 攻击力倍率加成 */
  atkAdd: number;
  /** 防御力倍率加成 */
  defAdd: number;
  /** 生命值倍率加成 */
  hpAdd: number;
  /** 元素精通倍率加成 */
  emAdd: number;
};

/**
 * 计算某一段攻击的所有属性
 * @param calculatorValue 角色面板属性
 * @param attackType 所计算的技能类型
 * @param elementType 所计算的技能的元素类型
 * @param weapon 角色的武器类型
 * @returns
 */
function getMoreDataBySwitch(
  calculatorValue: Partial<ICalculatorValue>,
  attackType: AttackType,
  elementType: ElementType,
  weapon: WeaponType
): MoreData {
  let ADDITIONAL_DMG = calculatorValue[BuffType.GlobalFixed] || 0;
  let addHunt = calculatorValue[BuffType.GlobalPrcent] || 0;
  let extraRate = 0;
  let addRate = 0;
  let criticalHunt = (calculatorValue[BuffType.CritcalHurt] || 0) + (calculatorValue[BuffType.GlobalCritcalHunt] || 0);
  let critical = (calculatorValue[BuffType.Critcal] || 0) + (calculatorValue[BuffType.GlobalCritcal] || 0);
  let resistance = 0;
  let defensePenetration = calculatorValue[BuffType.DefensePenetration] || 0;
  let healAdd = 0;
  let shieldAdd = 0;
  let moonAddHunt = calculatorValue[BuffType.GlobalMoonPrcent] || 0;
  let moonPromote = 0;
  let moonBasePercent = 0;
  let atkAdd = calculatorValue[BuffType.AtkAdd] || 0;
  let defAdd = calculatorValue[BuffType.DefAdd] || 0;
  let hpAdd = calculatorValue[BuffType.HPAdd] || 0;
  let emAdd = calculatorValue[BuffType.EmAdd] || 0;

  // 处理攻击类型的加成
  switch (attackType) {
    case AttackType.Normal:
      ADDITIONAL_DMG += calculatorValue[BuffType.NormalFixed] || 0;
      addHunt += calculatorValue[BuffType.NormalPrcent] || 0;
      criticalHunt += calculatorValue[BuffType.NormalCritcalHurt] || 0;
      critical += calculatorValue[BuffType.NormalCritcal] || 0;
      addRate += calculatorValue[BuffType.NormalRate] || 0;
      extraRate += calculatorValue[BuffType.NormalAdd] || 0;
      break;
    case AttackType.Strong:
      ADDITIONAL_DMG += calculatorValue[BuffType.StrongFixed] || 0;
      addHunt += calculatorValue[BuffType.StrongPrcent] || 0;
      criticalHunt += calculatorValue[BuffType.StrongCritcalHurt] || 0;
      critical += calculatorValue[BuffType.StrongCritcal] || 0;
      addRate += calculatorValue[BuffType.StrongRate] || 0;
      extraRate += calculatorValue[BuffType.StrongAdd] || 0;
      break;
    case AttackType.FallPeriod:
      // 应该不会有提高下坠期间伤害的技能吧
      addHunt += calculatorValue[BuffType.FallingPrcent] || 0;
      criticalHunt += calculatorValue[BuffType.FallingCritcalHurt] || 0;
      critical += calculatorValue[BuffType.FallingCritcal] || 0;
      addRate += calculatorValue[BuffType.FallingRateAdd] || 0;
      break;
    case AttackType.Falling:
      ADDITIONAL_DMG += calculatorValue[BuffType.FallingFixed] || 0;
      addHunt += calculatorValue[BuffType.FallingPrcent] + calculatorValue[BuffType.FallingGroundPrcent] || 0;
      criticalHunt += calculatorValue[BuffType.FallingCritcalHurt] || 0;
      critical += calculatorValue[BuffType.FallingCritcal] || 0;
      addRate += calculatorValue[BuffType.FallingRateAdd] || 0;
      extraRate += calculatorValue[BuffType.FallingAdd] || 0;
      break;
    case AttackType.Skill:
      ADDITIONAL_DMG += calculatorValue[BuffType.SkillFixed] || 0;
      addHunt += calculatorValue[BuffType.SkillPrcent] || 0;
      criticalHunt += calculatorValue[BuffType.SkillCritcalHurt] || 0;
      critical += calculatorValue[BuffType.SkillCritcal] || 0;
      addRate += calculatorValue[BuffType.SkillRate] || 0;
      extraRate += calculatorValue[BuffType.SkillAdd] || 0;
      break;
    case AttackType.Burst:
      ADDITIONAL_DMG += calculatorValue[BuffType.BurstFixed] || 0;
      addHunt += calculatorValue[BuffType.BurstPrcent] || 0;
      criticalHunt += calculatorValue[BuffType.BurstCritcalHurt] || 0;
      critical += calculatorValue[BuffType.BurstCritcal] || 0;
      addRate += calculatorValue[BuffType.BurstRate] || 0;
      extraRate += calculatorValue[BuffType.BurstAdd] || 0;
      break;
    case AttackType.FallingOther:
      // 不吃闲云天赋加成的坠地攻击
      addHunt += calculatorValue[BuffType.FallingPrcent] || 0;
      criticalHunt += calculatorValue[BuffType.FallingCritcalHurt] || 0;
      critical += calculatorValue[BuffType.FallingCritcal] || 0;
      addRate += calculatorValue[BuffType.FallingRateAdd] || 0;
      extraRate += calculatorValue[BuffType.FallingAdd] || 0;
      break;
    case AttackType.Moon:
      ADDITIONAL_DMG += calculatorValue[BuffType.GlobalMoonFixed] || 0;
      break;
    case AttackType.Heal:
      healAdd += calculatorValue[BuffType.HealAdd] || 0;
      break;
    case AttackType.Shield:
      shieldAdd += calculatorValue[BuffType.ShieldAdd] || 0;
      break;
  }

  // 元素附魔
  let newElementType = elementType;
  // 只有近战的普通攻击、重击和下落攻击可以进行元素附魔
  if (
    calculatorValue.enchanting &&
    (attackType === AttackType.Normal ||
      attackType === AttackType.Strong ||
      attackType === AttackType.Falling ||
      attackType === AttackType.FallPeriod) &&
    (weapon === WeaponType.Sword || weapon === WeaponType.GreatSword || weapon === WeaponType.Polearms)
  ) {
    newElementType = NumberToElementType[calculatorValue.enchanting];
  }

  // 元素转化
  if (calculatorValue.transform && calculatorValue.transform !== EnchantingType.Physical) {
    newElementType = NumberToElementType[calculatorValue.transform];
  }

  // 处理元素类型的加成
  switch (newElementType) {
    case ElementType.Physical:
      ADDITIONAL_DMG += calculatorValue[BuffType.PhysicalFixed] || 0;
      addHunt += calculatorValue[BuffType.PhysicalPrcent] || 0;
      criticalHunt += calculatorValue[BuffType.PhysicalCritcalHurt] || 0;
      critical += calculatorValue[BuffType.PhysicalCritcal] || 0;
      resistance += calculatorValue[BuffType.EnemyPhysicalResistance] || 0;
      break;
    case ElementType.Pyro:
      ADDITIONAL_DMG += calculatorValue[BuffType.PyroFixed] || 0;
      addHunt += calculatorValue[BuffType.PyroPrcent] || 0;
      criticalHunt += calculatorValue[BuffType.PyroCritcalHurt] || 0;
      critical += calculatorValue[BuffType.PyroCritcal] || 0;
      resistance += calculatorValue[BuffType.EnemyPyroResistance] || 0;
      break;
    case ElementType.Hydro:
      ADDITIONAL_DMG += calculatorValue[BuffType.HydroFixed] || 0;
      addHunt += calculatorValue[BuffType.HydroPrcent] || 0;
      criticalHunt += calculatorValue[BuffType.HydroCritcalHurt] || 0;
      critical += calculatorValue[BuffType.HydroCritcal] || 0;
      resistance += calculatorValue[BuffType.EnemyHydroResistance] || 0;
      break;
    case ElementType.Anemo:
      ADDITIONAL_DMG += calculatorValue[BuffType.AnemoFixed] || 0;
      addHunt += calculatorValue[BuffType.AnemoPrcent] || 0;
      criticalHunt += calculatorValue[BuffType.AnemoCritcalHurt] || 0;
      critical += calculatorValue[BuffType.AnemoCritcal] || 0;
      resistance += calculatorValue[BuffType.EnemyAnemoResistance] || 0;
      break;
    case ElementType.Electro:
      ADDITIONAL_DMG += calculatorValue[BuffType.ElectroFixed] || 0;
      addHunt += calculatorValue[BuffType.ElectroPrcent] || 0;
      criticalHunt += calculatorValue[BuffType.ElectroCritcalHurt] || 0;
      critical += calculatorValue[BuffType.ElectroCritcal] || 0;
      resistance += calculatorValue[BuffType.EnemyElectroResistance] || 0;
      break;
    case ElementType.Geo:
      ADDITIONAL_DMG += calculatorValue[BuffType.GeoFixed] || 0;
      addHunt += calculatorValue[BuffType.GeoPrcent] || 0;
      criticalHunt += calculatorValue[BuffType.GeoCritcalHurt] || 0;
      critical += calculatorValue[BuffType.GeoCritcal] || 0;
      resistance += calculatorValue[BuffType.EnemyGeoResistance] || 0;
      break;
    case ElementType.Dendro:
      ADDITIONAL_DMG += calculatorValue[BuffType.DendroFixed] || 0;
      addHunt += calculatorValue[BuffType.DendroPrcent] || 0;
      criticalHunt += calculatorValue[BuffType.DendroCritcalHurt] || 0;
      critical += calculatorValue[BuffType.DendroCritcal] || 0;
      resistance += calculatorValue[BuffType.EnemyDendroResistance] || 0;
      break;
    case ElementType.Cryo:
      ADDITIONAL_DMG += calculatorValue[BuffType.CryoFixed] || 0;
      addHunt += calculatorValue[BuffType.CryoPrcent] || 0;
      criticalHunt += calculatorValue[BuffType.CryoCritcalHurt] || 0;
      critical += calculatorValue[BuffType.CryoCritcal] || 0;
      resistance += calculatorValue[BuffType.EnemyCryoResistance] || 0;
      break;
    case ElementType.MoonElectro:
      // 月感电伤害无视敌人防御
      defensePenetration = 100;
      ADDITIONAL_DMG += calculatorValue[BuffType.MoonElectroFixed] || 0;
      criticalHunt += calculatorValue[BuffType.MoonElectroCritcalHurt] || 0;
      criticalHunt += calculatorValue[BuffType.ElectroCritcalHurt] || 0;
      critical += calculatorValue[BuffType.MoonElectroCritcal] || 0;
      critical += calculatorValue[BuffType.ElectroCritcal] || 0;
      resistance += calculatorValue[BuffType.EnemyElectroResistance] || 0;
      addRate += calculatorValue[BuffType.MoonElectroRate] || 0;
      moonBasePercent += calculatorValue[BuffType.MoonElectroBasePercent] || 0;
      moonAddHunt += calculatorValue[BuffType.MoonElectroPrcent] || 0;
      moonPromote += calculatorValue[BuffType.MoonElectroPromote] || 0;
      break;
    case ElementType.MoonSwirl:
      // 月绽放伤害无视敌人防御
      defensePenetration = 100;
      ADDITIONAL_DMG += calculatorValue[BuffType.MoonSwirlFixed] || 0;
      criticalHunt += calculatorValue[BuffType.MoonSwirlCritcalHurt] || 0;
      criticalHunt += calculatorValue[BuffType.DendroCritcalHurt] || 0;
      critical += calculatorValue[BuffType.MoonSwirlCritcal] || 0;
      critical += calculatorValue[BuffType.DendroCritcal] || 0;
      resistance += calculatorValue[BuffType.EnemyDendroResistance] || 0;
      addRate += calculatorValue[BuffType.MoonSwirlRate] || 0;
      moonBasePercent += calculatorValue[BuffType.MoonSwirlBasePercent] || 0;
      moonAddHunt += calculatorValue[BuffType.MoonSwirlPrcent] || 0;
      moonPromote += calculatorValue[BuffType.MoonSwirlPromote] || 0;
      break;
    case ElementType.MoonCrystal:
      // 月结晶伤害无视敌人防御
      defensePenetration = 100;
      ADDITIONAL_DMG += calculatorValue[BuffType.MoonCrystalFixed] || 0;
      criticalHunt += calculatorValue[BuffType.MoonCrystalCritcalHurt] || 0;
      criticalHunt += calculatorValue[BuffType.GeoCritcalHurt] || 0;
      critical += calculatorValue[BuffType.MoonCrystalCritcal] || 0;
      critical += calculatorValue[BuffType.GeoCritcal] || 0;
      resistance += calculatorValue[BuffType.EnemyGeoResistance] || 0;
      addRate += calculatorValue[BuffType.MoonCrystalRate] || 0;
      moonBasePercent += calculatorValue[BuffType.MoonCrystalBasePercent] || 0;
      moonAddHunt += calculatorValue[BuffType.MoonCrystalPrcent] || 0;
      moonPromote += calculatorValue[BuffType.MoonCrystalPromote] || 0;
      break;
  }

  return {
    ADDITIONAL_DMG,
    addHunt,
    criticalHunt,
    critical,
    resistance,
    addRate,
    defensePenetration,
    newElementType,
    healAdd,
    shieldAdd,
    extraRate,
    moonAddHunt,
    moonPromote,
    moonBasePercent,
    atkAdd,
    defAdd,
    hpAdd,
    emAdd,
  };
}

interface IArgs {
  /** 面板数据 */
  calculatorValue: ICalculatorValue;
  /** 攻击方式 */
  attackType: AttackType;
  /** 伤害的元素属性 */
  elementType: ElementType;
  /** 技能全等级的伤害倍率 */
  rate: IRate;
  /** 技能等级 */
  level: number;
  /** 反应类型 */
  atkType: ElementalReactionType;
  /** 本次伤害的独特标识 */
  special?: string;
}

export function calculateDamage({ calculatorValue, attackType, elementType, rate, level, atkType, special }: IArgs) {
  let {
    ADDITIONAL_DMG,
    addHunt,
    criticalHunt,
    critical,
    resistance,
    addRate,
    newElementType,
    defensePenetration,
    healAdd,
    shieldAdd,
    extraRate,
    moonAddHunt,
    moonPromote,
    moonBasePercent,
    atkAdd,
    defAdd,
    hpAdd,
    emAdd,
  } = getMoreDataBySwitch(calculatorValue, attackType, elementType, calculatorValue.weapon);

  /** 计算独特buff的加成 */
  if (special && calculatorValue.specialValue && calculatorValue.specialValue[special]) {
    const specialData = getMoreDataBySwitch(
      calculatorValue.specialValue[special],
      attackType,
      newElementType,
      calculatorValue.weapon
    );
    ADDITIONAL_DMG += specialData.ADDITIONAL_DMG;
    addHunt += specialData.addHunt;
    criticalHunt += specialData.criticalHunt;
    critical += specialData.critical;
    resistance += specialData.resistance;
    addRate += specialData.addRate;
    newElementType = specialData.newElementType;
    defensePenetration += specialData.defensePenetration;
    healAdd += specialData.healAdd;
    shieldAdd += specialData.shieldAdd;
    extraRate += specialData.extraRate;
    moonAddHunt += specialData.moonAddHunt;
    moonPromote += specialData.moonPromote;
    moonBasePercent += specialData.moonBasePercent;
    atkAdd += specialData.atkAdd;
    defAdd += specialData.defAdd;
    hpAdd += specialData.hpAdd;
    emAdd += specialData.emAdd;
  }

  /** 基础伤害 */
  let BASE_DMG = 0;
  if (rate.atk) {
    const atk = calculatorValue.baseATK + calculatorValue.extraATK + calculatorValue.extraATK_NT;
    BASE_DMG += atk * (rate.atk[level - 1] + extraRate + atkAdd) * (1 + addRate / 100);
  }
  if (rate.def) {
    const def = calculatorValue.baseDEF + calculatorValue.extraDEF + calculatorValue.extraDEF_NT;
    BASE_DMG += def * (rate.def[level - 1] + extraRate + defAdd) * (1 + addRate / 100);
  }
  if (rate.hp) {
    const hp = calculatorValue.baseHP + calculatorValue.extraHP + calculatorValue.extraHP_NT;
    BASE_DMG += hp * (rate.hp[level - 1] + extraRate + hpAdd) * (1 + addRate / 100);
  }
  const em = calculatorValue.elementalMystery + calculatorValue.elementalMystery_NT;
  if (rate.em) {
    BASE_DMG += em * (rate.em[level - 1] + extraRate + emAdd) * (1 + addRate / 100);
  }
  if (rate.fixed) {
    BASE_DMG += rate.fixed[level - 1];
  }
  if (newElementType === ElementType.MoonElectro) {
    // 月感电的基础伤害固定乘以3
    BASE_DMG *= 3;
  }
  if (newElementType === ElementType.MoonCrystal) {
    // 月结晶的基础伤害固定乘以1.6
    BASE_DMG *= 1.6;
  }

  /** 治疗量 */
  let HEAL_VALUE = 0;
  if (attackType === AttackType.Heal) {
    HEAL_VALUE = BASE_DMG * (1 + healAdd / 100);
  }
  /** 护盾量 */
  let SHIELD_VALUE = 0;
  if (attackType === AttackType.Shield) {
    SHIELD_VALUE = BASE_DMG * (1 + shieldAdd / 100);
  }
  /** 附加值 */
  let ADDAD_VALUE = 0;
  if (attackType === AttackType.Added) {
    ADDAD_VALUE = BASE_DMG;
  }

  /** 激化伤害 */
  let BONUS_DMG = 0;
  if (atkType === ElementalReactionType.Aggravate && newElementType === ElementType.Electro) {
    BONUS_DMG =
      BaseDMG.aggravate[calculatorValue.level] * (1 + (getCatalyzeRate(em) + calculatorValue.catalyzeRate) / 100);
  }
  if (atkType === ElementalReactionType.Spread && newElementType === ElementType.Dendro) {
    BONUS_DMG =
      BaseDMG.spread[calculatorValue.level] * (1 + (getCatalyzeRate(em) + calculatorValue.catalyzeRate) / 100);
  }

  /** 加成伤害 */
  let MAGNIFICATION_DMG = 0;
  /** 精通提升伤害 */
  let EVA_DMG = 0;
  /** 月曜擢升伤害 */
  let PROMOTE_DMG = 0;
  if (attackType === AttackType.Moon) {
    BASE_DMG *= 1 + moonBasePercent / 100;
    // 月曜反应伤害的加成伤害，来自于元素精通的增伤加成，不受传统增伤影响
    // 同时额外的伤害提高不受益于月反应增伤、精通增伤效果，即固定伤害提升。
    MAGNIFICATION_DMG = (BASE_DMG * moonAddHunt) / 100;
    EVA_DMG = (BASE_DMG * getMoonElectroRate(em)) / 100;
    PROMOTE_DMG = ((BASE_DMG + ADDITIONAL_DMG + MAGNIFICATION_DMG + EVA_DMG) * moonPromote) / 100;
  } else {
    MAGNIFICATION_DMG = ((BASE_DMG + ADDITIONAL_DMG + BONUS_DMG) * addHunt) / 100;
  }

  /** 增幅反应伤害 */
  let REACTION_DMG = 0;
  let eva = 0;
  if (newElementType === ElementType.Pyro) {
    if (atkType === ElementalReactionType.Rate) {
      eva = (getAmplifiedRate(em) + calculatorValue.amplifiedRate2) / 100;
    }
    if (atkType === ElementalReactionType.Rate2) {
      eva = (getAmplifiedRate(em) + calculatorValue.amplifiedRate) / 100;
    }
    REACTION_DMG = (BASE_DMG + ADDITIONAL_DMG + MAGNIFICATION_DMG) * ReactionRate[atkType];
  }
  if (newElementType === ElementType.Hydro) {
    if (atkType === ElementalReactionType.Rate) {
      eva = (getAmplifiedRate(em) + calculatorValue.amplifiedRate) / 100;
      REACTION_DMG = (BASE_DMG + ADDITIONAL_DMG + MAGNIFICATION_DMG) * ReactionRate[atkType];
    }
  }
  if (newElementType === ElementType.Cryo) {
    if (atkType === ElementalReactionType.Rate2) {
      eva = (getAmplifiedRate(em) + calculatorValue.amplifiedRate2) / 100;
      REACTION_DMG = (BASE_DMG + ADDITIONAL_DMG + MAGNIFICATION_DMG) * ReactionRate[atkType];
    }
  }
  if (atkType === ElementalReactionType.Rate || atkType === ElementalReactionType.Rate2) {
    EVA_DMG = (BASE_DMG + ADDITIONAL_DMG + MAGNIFICATION_DMG + REACTION_DMG) * eva;
  }

  /** 最终伤害 */
  let RESULT_DMG = BASE_DMG + ADDITIONAL_DMG + BONUS_DMG + MAGNIFICATION_DMG + REACTION_DMG + EVA_DMG + PROMOTE_DMG;

  /** 暴击伤害 */
  let CRITICAL_DMG = (RESULT_DMG * criticalHunt) / 100;
  /** 伤害期望 */
  let DEISTE_DMG = Math.max(CRITICAL_DMG * Math.min(1, critical / 100), 0);

  // 抗性承伤
  const resistanceRate = getResistanceRate(resistance);
  // 防御承伤
  const defRate = getDefRate(
    calculatorValue.level,
    calculatorValue.enemyLevel,
    calculatorValue.reduceArmour,
    defensePenetration
  );
  /** 敌人最终承伤 */
  const ENEMY_RATE = defRate * resistanceRate;

  // 最终结果
  return {
    BASE_DMG: BASE_DMG * ENEMY_RATE,
    ADDITIONAL_DMG: ADDITIONAL_DMG * ENEMY_RATE,
    BONUS_DMG: BONUS_DMG * ENEMY_RATE,
    MAGNIFICATION_DMG: MAGNIFICATION_DMG * ENEMY_RATE,
    EVA_DMG: EVA_DMG * ENEMY_RATE,
    CRITICAL_DMG: CRITICAL_DMG * ENEMY_RATE,
    DEISTE_DMG: DEISTE_DMG * ENEMY_RATE,
    RESULT_DMG: RESULT_DMG * ENEMY_RATE,
    REACTION_DMG: REACTION_DMG * ENEMY_RATE,
    PROMOTE_DMG: PROMOTE_DMG * ENEMY_RATE,
    criticalHunt,
    addHunt,
    moonAddHunt,
    elementType: newElementType,
    HEAL_VALUE,
    SHIELD_VALUE,
    ADDAD_VALUE,
  };
}
