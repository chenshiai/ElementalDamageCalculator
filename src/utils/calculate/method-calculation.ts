import { ElementalReaction, ReactionRate } from "@/constants";
import { AttackType, ElementType, EnchantingType, NumberToElementType } from "@/types/enum";
import { ICalculatorValue, IRate } from "@/types/interface";
import { BaseDMG } from "@/constants/elementalReaction";
import { getCatalyzeRate, getAmplifiedRate, getResistanceRate, getDefRate } from "@/utils";

interface args {
  calculatorValue: ICalculatorValue;
  attackType: AttackType;
  elementType: ElementType;
  rate: IRate;
  level: number;
  atkType: string;
}
export function calculateDamage({ calculatorValue, attackType, elementType, rate, level, atkType }: args) {
  // 伤害提高值
  let ADDITIONAL_DMG = calculatorValue.globalIncreaseHunt;
  let addHunt = calculatorValue.globalAddHunt;
  let criticalHunt = calculatorValue.critcalHurt;
  let critical = calculatorValue.critcal;

  // 附魔
  if (
    (attackType === AttackType.Normal || attackType === AttackType.Strong || attackType === AttackType.Falling) &&
    calculatorValue.enchanting !== EnchantingType.Physical
  ) {
    elementType = NumberToElementType[calculatorValue.enchanting];
  }

  // 处理攻击类型的加成
  switch (attackType) {
    case AttackType.Normal:
      ADDITIONAL_DMG += calculatorValue.normalIncreaseHurt;
      addHunt += calculatorValue.normalAttackAddHunt;
      criticalHunt += calculatorValue.normalAttackCritcalHurt;
      critical += calculatorValue.normalAttackCritcal;
      break;
    case AttackType.Strong:
      ADDITIONAL_DMG += calculatorValue.strongIncreaseHurt;
      addHunt += calculatorValue.strongAttackAddHunt;
      criticalHunt += calculatorValue.strongAttackCritcalHurt;
      critical += calculatorValue.strongAttackCritcal;
      break;
    case AttackType.Falling:
      ADDITIONAL_DMG += calculatorValue.fallingIncreaseHurt;
      addHunt += calculatorValue.fallingAttackAddHunt;
      criticalHunt += calculatorValue.fallingAttackCritcalHurt;
      critical += calculatorValue.fallingAttackCritcal;
      break;
    case AttackType.Skill:
      ADDITIONAL_DMG += calculatorValue.elementalSkillIncreaseHurt;
      addHunt += calculatorValue.elementalSkillAddHunt;
      criticalHunt += calculatorValue.elementalSkillCritcalHurt;
      critical += calculatorValue.elementalSkillCritcal;
      break;
    case AttackType.Burst:
      ADDITIONAL_DMG += calculatorValue.elementalBurstIncreaseHurt;
      addHunt += calculatorValue.elementalBurstAddHunt;
      criticalHunt += calculatorValue.elementalBurstCritcalHurt;
      critical += calculatorValue.elementalBurstCritcal;
      break;
  }

  // 处理元素类型的加成
  switch (elementType) {
    case ElementType.Physical:
      ADDITIONAL_DMG += calculatorValue.phycalIncreaseHunt;
      addHunt += calculatorValue.physicalAddHunt;
      criticalHunt += calculatorValue.physicalCritcalHurt;
      critical += calculatorValue.physicalCritcal;
      break;
    case ElementType.Pyro:
      ADDITIONAL_DMG += calculatorValue.pyroIncreaseHunt;
      addHunt += calculatorValue.pyroAddHunt;
      criticalHunt += calculatorValue.pyroCritcalHurt;
      critical += calculatorValue.pyroCritcal;
      break;
    case ElementType.Hydro:
      ADDITIONAL_DMG += calculatorValue.hydroIncreaseHunt;
      addHunt += calculatorValue.hydroAddHunt;
      criticalHunt += calculatorValue.hydroCritcalHurt;
      critical += calculatorValue.hydroCritcal;
      break;
    case ElementType.Anemo:
      ADDITIONAL_DMG += calculatorValue.anemoIncreaseHunt;
      addHunt += calculatorValue.anemoAddHunt;
      criticalHunt += calculatorValue.anemoCritcalHurt;
      critical += calculatorValue.anemoCritcal;
      break;
    case ElementType.Electro:
      ADDITIONAL_DMG += calculatorValue.electroIncreaseHunt;
      addHunt += calculatorValue.electroAddHunt;
      criticalHunt += calculatorValue.electroCritcalHurt;
      critical += calculatorValue.electroCritcal;
      break;
    case ElementType.Geo:
      ADDITIONAL_DMG += calculatorValue.geoIncreaseHunt;
      addHunt += calculatorValue.geoAddHunt;
      criticalHunt += calculatorValue.geoCritcalHurt;
      critical += calculatorValue.geoCritcal;
      break;
    case ElementType.Dendro:
      ADDITIONAL_DMG += calculatorValue.dendroIncreaseHunt;
      addHunt += calculatorValue.dendroAddHunt;
      criticalHunt += calculatorValue.dendroCritcalHurt;
      critical += calculatorValue.dendroCritcal;
      break;
    case ElementType.Cryo:
      ADDITIONAL_DMG += calculatorValue.cryoIncreaseHunt;
      addHunt += calculatorValue.cryoAddHunt;
      criticalHunt += calculatorValue.cryoCritcalHurt;
      critical += calculatorValue.cryoCritcal;
      break;
  }

  // 基础伤害
  let BASE_DMG = 0;
  if (rate.atk) {
    const atk = calculatorValue.baseATK + calculatorValue.extraATK + calculatorValue.extraATK_NT;
    BASE_DMG += atk * rate.atk[level - 1];
  }
  if (rate.def) {
    const def = calculatorValue.baseDEF + calculatorValue.extraDEF + calculatorValue.extraDEF_NT;
    BASE_DMG += def * rate.def[level - 1];
  }
  if (rate.hp) {
    const hp = calculatorValue.baseHP + calculatorValue.extraHP + calculatorValue.extraHP_NT;
    BASE_DMG += hp * rate.hp[level - 1];
  }
  const em = calculatorValue.elementalMystery + calculatorValue.elementalMystery_NT;
  if (rate.em) {
    BASE_DMG += em * rate.em[level - 1];
  }

  // 激化伤害
  let BONUS_DMG = 0;
  if (atkType === ElementalReaction.Aggravate) {
    BONUS_DMG =
      BaseDMG.aggravate[calculatorValue.level] * (1 + getCatalyzeRate(em) + calculatorValue.catalyzeRate / 100);
  }
  if (atkType === ElementalReaction.Spread) {
    BONUS_DMG = BaseDMG.spread[calculatorValue.level] * (1 + getCatalyzeRate(em) + calculatorValue.catalyzeRate / 100);
  }
  // 加成伤害
  let MAGNIFICATION_DMG = ((BASE_DMG + ADDITIONAL_DMG + BONUS_DMG) * addHunt) / 100;

  // 增幅反应伤害
  let REACTION_DMG = 0;
  // 精通提升伤害
  let EVA_DMG = 0;
  if (atkType === ElementalReaction.Rate || atkType === ElementalReaction.Rate2) {
    let eva =
      getAmplifiedRate(calculatorValue.elementalMystery + calculatorValue.elementalMystery_NT) +
      calculatorValue.amplifiedRate / 100;
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
  const resistanceRate = getResistanceRate(calculatorValue.enemyResistance, calculatorValue.enemyWeaken);
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
  };
}
