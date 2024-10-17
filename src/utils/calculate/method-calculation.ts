import { ElementalReaction, ReactionRate } from "@/constants";
import { AttackType, BuffType, ElementType, EnchantingType, NumberToElementType, WeaponType } from "@/types/enum";
import { ICalculatorValue, IRate } from "@/types/interface";
import { BaseDMG } from "@/constants/elementalReaction";
import { getCatalyzeRate, getAmplifiedRate, getResistanceRate, getDefRate } from "@/utils";

function getMoreDataBySwitch(calculatorValue: Partial<ICalculatorValue>, attackType, elementType) {
  let ADDITIONAL_DMG = calculatorValue[BuffType.GlobalFixed] || 0;
  let addHunt = calculatorValue[BuffType.GlobalPrcent] || 0;
  let addRate = 0;
  let criticalHunt = calculatorValue[BuffType.CritcalHurt] || 0;
  let critical = calculatorValue[BuffType.Critcal] || 0;
  let resistance = 0;

  // 处理攻击类型的加成
  switch (attackType) {
    case AttackType.Normal:
      ADDITIONAL_DMG += calculatorValue[BuffType.NormalFixed] || 0;
      addHunt += calculatorValue[BuffType.NormalPrcent] || 0;
      criticalHunt += calculatorValue[BuffType.NormalCritcalHurt] || 0;
      critical += calculatorValue[BuffType.NormalCritcal] || 0;
      addRate += calculatorValue[BuffType.NormalRate] || 0;
      break;
    case AttackType.Strong:
      ADDITIONAL_DMG += calculatorValue[BuffType.StrongFixed] || 0;
      addHunt += calculatorValue[BuffType.StrongPrcent] || 0;
      criticalHunt += calculatorValue[BuffType.StrongCritcalHurt] || 0;
      critical += calculatorValue[BuffType.StrongCritcal] || 0;
      addRate += calculatorValue[BuffType.StrongRate] || 0;
      break;
    case AttackType.Falling:
      ADDITIONAL_DMG += calculatorValue[BuffType.FallingFixed] || 0;
      addHunt += calculatorValue[BuffType.FallingPrcent] || 0;
      criticalHunt += calculatorValue[BuffType.FallingCritcalHurt] || 0;
      critical += calculatorValue[BuffType.FallingCritcal] || 0;
      addRate += calculatorValue[BuffType.FallingRateAdd] || 0;
      break;
    case AttackType.Skill:
      ADDITIONAL_DMG += calculatorValue[BuffType.SkillFixed] || 0;
      addHunt += calculatorValue[BuffType.SkillPrcent] || 0;
      criticalHunt += calculatorValue[BuffType.SkillCritcalHurt] || 0;
      critical += calculatorValue[BuffType.SkillCritcal] || 0;
      addRate += calculatorValue[BuffType.SkillRate] || 0;
      break;
    case AttackType.Burst:
      ADDITIONAL_DMG += calculatorValue[BuffType.BurstFixed] || 0;
      addHunt += calculatorValue[BuffType.BurstPrcent] || 0;
      criticalHunt += calculatorValue[BuffType.BurstCritcalHurt] || 0;
      critical += calculatorValue[BuffType.BurstCritcal] || 0;
      addRate += calculatorValue[BuffType.BurstRate] || 0;
      break;
  }

  // 处理元素类型的加成
  switch (elementType) {
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
  }

  return {
    ADDITIONAL_DMG,
    addHunt,
    criticalHunt,
    critical,
    resistance,
    addRate,
  };
}

interface IArgs {
  calculatorValue: ICalculatorValue;
  attackType: AttackType;
  elementType: ElementType;
  rate: IRate;
  level: number;
  atkType: string;
  /** 本次伤害的独特标识 */
  special?: string;
}

export function calculateDamage({ calculatorValue, attackType, elementType, rate, level, atkType, special }: IArgs) {
  // 元素附魔
  if (
    calculatorValue.enchanting !== EnchantingType.Physical &&
    (attackType === AttackType.Normal ||
      attackType === AttackType.Strong ||
      attackType === AttackType.Falling ||
      attackType === AttackType.FallPeriod) &&
    (calculatorValue.weapon === WeaponType.Sword ||
      calculatorValue.weapon === WeaponType.GreatSword ||
      calculatorValue.weapon === WeaponType.Polearms)
  ) {
    elementType = NumberToElementType[calculatorValue.enchanting];
  }

  // 元素转化
  if (calculatorValue.transform !== EnchantingType.Physical) {
    elementType = NumberToElementType[calculatorValue.transform];
  }

  let { ADDITIONAL_DMG, addHunt, criticalHunt, critical, resistance, addRate } = getMoreDataBySwitch(
    calculatorValue,
    attackType,
    elementType
  );

  /** 计算独特buff的加成 */
  if (special && calculatorValue.specialValue && calculatorValue.specialValue[special]) {
    const specialData = getMoreDataBySwitch(calculatorValue.specialValue[special], attackType, elementType);
    ADDITIONAL_DMG += specialData.ADDITIONAL_DMG;
    addHunt += specialData.addHunt;
    criticalHunt += specialData.criticalHunt;
    critical += specialData.critical;
  }

  // 基础伤害
  let BASE_DMG = 0;
  if (rate.atk) {
    const atk = calculatorValue.baseATK + calculatorValue.extraATK + calculatorValue.extraATK_NT;
    BASE_DMG += atk * rate.atk[level - 1] * (1 + addRate / 100);
  }
  if (rate.def) {
    const def = calculatorValue.baseDEF + calculatorValue.extraDEF + calculatorValue.extraDEF_NT;
    BASE_DMG += def * rate.def[level - 1] * (1 + addRate / 100);
  }
  if (rate.hp) {
    const hp = calculatorValue.baseHP + calculatorValue.extraHP + calculatorValue.extraHP_NT;
    BASE_DMG += hp * rate.hp[level - 1] * (1 + addRate / 100);
  }
  const em = calculatorValue.elementalMystery + calculatorValue.elementalMystery_NT;
  if (rate.em) {
    BASE_DMG += em * rate.em[level - 1] * (1 + addRate / 100);
  }

  // 激化伤害
  let BONUS_DMG = 0;
  if (atkType === ElementalReaction.Aggravate) {
    BONUS_DMG =
      BaseDMG.aggravate[calculatorValue.level] * (1 + (getCatalyzeRate(em) + calculatorValue.catalyzeRate) / 100);
  }
  if (atkType === ElementalReaction.Spread) {
    BONUS_DMG =
      BaseDMG.spread[calculatorValue.level] * (1 + (getCatalyzeRate(em) + calculatorValue.catalyzeRate) / 100);
  }
  // 加成伤害
  let MAGNIFICATION_DMG = ((BASE_DMG + ADDITIONAL_DMG + BONUS_DMG) * addHunt) / 100;

  // 增幅反应伤害
  let REACTION_DMG = 0;
  // 精通提升伤害
  let EVA_DMG = 0;
  if (atkType === ElementalReaction.Rate || atkType === ElementalReaction.Rate2) {
    let eva =
      (getAmplifiedRate(calculatorValue.elementalMystery + calculatorValue.elementalMystery_NT) +
        calculatorValue.amplifiedRate) /
      100;
    REACTION_DMG = (BASE_DMG + ADDITIONAL_DMG + MAGNIFICATION_DMG) * ReactionRate[atkType];
    EVA_DMG = (BASE_DMG + ADDITIONAL_DMG + MAGNIFICATION_DMG + REACTION_DMG) * eva;
  }
  // 最终伤害
  let RESULT_DMG = BASE_DMG + ADDITIONAL_DMG + BONUS_DMG + MAGNIFICATION_DMG + REACTION_DMG + EVA_DMG;
  // 暴击伤害
  let CRITICAL_DMG = RESULT_DMG * (criticalHunt / 100);
  // 期望伤害
  let DEISTE_DMG = CRITICAL_DMG * Math.min(1, critical / 100);

  // 抗性承伤
  const resistanceRate = getResistanceRate(resistance);
  // 防御承伤
  const defRate = getDefRate(
    calculatorValue.level,
    calculatorValue.enemyLevel,
    calculatorValue.reduceArmour,
    calculatorValue.defensePenetration
  );
  // 敌人最终承伤
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
    criticalHunt,
    addHunt,
    elementType,
  };
}
