import { Toast } from "vant";
import { ElementalReaction } from './constant';
import { BaseDMG } from './constants/elementalReaction';

/** 增幅反应 */
export const calculate = (elementalMystery) => {
  if (+elementalMystery <= 0) return 0;
  return ((2.78 * elementalMystery) / (elementalMystery + 1400)) * 100;
};

/** 剧变反应 */
export const calculate2 = (elementalMystery) => {
  if (+elementalMystery <= 0) return 0;
  return 16 * elementalMystery / (elementalMystery + 2000) * 100;
}

/** 结晶反应 */
export const calculate3 = (elementalMystery) => {
  if (+elementalMystery <= 0) return 0;
  return 4.44 * elementalMystery / (elementalMystery + 1400) * 100;
}

/** 激化反应 */
export const calculate4 = (elementalMystery) => {
  if (+elementalMystery <= 0) return 0;
  return 5 * elementalMystery / (elementalMystery + 1200) * 100;
}

export const getReactionRate = (atkType) => {
  switch (atkType) {
    case 'evaporation': return 1;
    case 'evaporation2': return 0.5;
    default: return 0;
  }
};

export const getAtkTypeText = (atkType) => {
  switch (atkType) {
    case 'evaporation': return '2.0倍增幅';
    case 'evaporation2': return '1.5倍增幅';
    case ElementalReaction.Aggravate: return '超激化';
    case ElementalReaction.Spread: return '蔓激化';
    default: return '无';
  }
};

export const getResistanceRate = (enemyResistance, weaken) => {
  const resistance = enemyResistance - weaken;
  let resistanceRate = 1 - resistance / 100;
  if (resistance < 0) {
    resistanceRate = 1 - resistance / 2 / 100;
  }
  if (resistance > 75) {
    resistanceRate = 1 / (1 + (4 * resistance) / 100);
  }
  return resistanceRate;
};

export const getDefRate = (characterLevel, enemyLevel, armour, armourPiercing) => {
  let enemyDef = (enemyLevel + 100) * (1 - armour / 100) * (1 - armourPiercing / 100);

  if (enemyDef < 0) {
    enemyDef = 0;
  }
  return (100 + characterLevel) / (100 + characterLevel + enemyDef);
};

export const floatNum = (value, digits = 1) => {
  return Number((+value).toFixed(digits));
};

export const getLocalStorage = (
  name,
  defaultValue,
  description = "本地数据读取失败"
) => {
  const value = window.localStorage.getItem(name);
  try {
    return JSON.parse(value) || defaultValue;
  } catch {
    Toast.fail(description);
    return defaultValue;
  }
};

export const deepCopyObject = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export const sub = (list) => {
  if (list.length > 0) {
    return list.reduce((a, b) => a + b);
  }
  return 0;
};

export const computationalFormula = (data) => {
  const {
    baseATK,
    extraATK,
    extraFixedATK = 0,
    extraPercentATK,
    baseDEF = 0,
    extraDEF = 0,
    extraFixedDEF = 0,
    extraPercentDEF = 0,
    baseHP = 0,
    extraHP = 0,
    extraFixedHP = 0,
    extraPercentHP = 0,
    basicPanelSelect = '攻击力',
    additionalDemage = 0,
    critDemage,
    elementDemage,
    elementalMystery = 0,
    atkRate,
    armRate,
    hpRate,
    emRate,
    atkType,
    extraRate = 0,
    characterLevel,
    enemyLevel,
    enemyResistance,
    weaken,
    armour = 0,
    armourPiercing = 0,
    witch = false,
    thunder = false,
  } = data;

  // 攻击力、防御力、生命值
  const atk = extraATK + extraFixedATK + baseATK * (1 + extraPercentATK / 100);
  const def = extraDEF + extraFixedDEF + baseDEF * (1 + extraPercentDEF / 100);
  const hp = extraHP + extraFixedHP + baseHP * (1 + extraPercentHP / 100);

  // 抗性
  const resistanceRate = getResistanceRate(enemyResistance, weaken);
  // 防御减伤
  const defRate = getDefRate(characterLevel, enemyLevel, armour, armourPiercing);
  const ENEMY_RATE = defRate * resistanceRate;

  // 增幅精通加成
  let eva = 0;
  if (atkType === "evaporation" || atkType === "evaporation2") {
    eva = (calculate(elementalMystery) + (witch ? 15 : 0)) / 100
  }

  /** 基础伤害值 */
  let basic = atk * (atkRate / 100) + def * (armRate / 100) + hp * (hpRate / 100) + elementalMystery * (emRate / 100);
  const BASE_DMG = basic * (1 + (extraRate / 100)) * ENEMY_RATE;
  // 激化伤害值
  let BONUS_DMG = 0;
  if (atkType === ElementalReaction.Aggravate) {
    BONUS_DMG = BaseDMG.aggravate[characterLevel] * (1 + (calculate4(elementalMystery) + (thunder ? 20 : 0)) / 100) * ENEMY_RATE;
  }
  if (atkType === ElementalReaction.Spread) {
    BONUS_DMG = BaseDMG.spread[characterLevel] * (1 + calculate4(elementalMystery) / 100) * ENEMY_RATE;
  }
  // 附加伤害值
  const ADDITIONAL_DMG = additionalDemage * ENEMY_RATE;
  // 增伤伤害值
  const MAGNIFICATION_DMG = (BASE_DMG + ADDITIONAL_DMG + BONUS_DMG) * Math.max(0, elementDemage / 100);
  // 反应伤害值
  const REACTION_DMG = (BASE_DMG + ADDITIONAL_DMG + MAGNIFICATION_DMG) * getReactionRate(atkType);
  // 精通提升伤害值
  const EVA_DMG = (BASE_DMG + ADDITIONAL_DMG + MAGNIFICATION_DMG + REACTION_DMG) * eva;

  const RESULT_DMG = BASE_DMG + ADDITIONAL_DMG + BONUS_DMG + MAGNIFICATION_DMG + REACTION_DMG + EVA_DMG
  // 暴击提升伤害值
  const CRITICAL_DMG = RESULT_DMG * (critDemage / 100);


  const compositionAnalysis = {
    BASE_DMG,
    ADDITIONAL_DMG,
    BONUS_DMG,
    MAGNIFICATION_DMG,
    REACTION_DMG,
    EVA_DMG,
    CRITICAL_DMG,
    RESULT_DMG,
    CRIT_DMG: RESULT_DMG + CRITICAL_DMG,
  };

  return {
    common: Math.round(RESULT_DMG),
    crit: Math.round(RESULT_DMG + CRITICAL_DMG),
    compositionAnalysis,
  }
};
