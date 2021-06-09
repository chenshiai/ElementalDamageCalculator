import { Toast } from "vant";

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

export const getReactionRate = (atkType) => {
  if (atkType === "evaporation") {
    return 2;
  } else if (atkType === "evaporation2") {
    return 1.5;
  } else {
    return 1;
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

export const getDefRate = (characterLevel, enemyLevel, armour) => {
  const enemyDef = (enemyLevel + 100) * (1 - armour / 100);
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

export const computationalFormula = (data) => {
  const {
    baseATK,
    extraATK,
    extraPercentATK,
    critDemage,
    elementDemage,
    evaporationDemage,
    atkRate,
    atkType,
    characterLevel,
    enemyLevel,
    enemyResistance,
    weaken,
    armour,
  } = data;
  // 计算增幅加成
  const elerate = getReactionRate(atkType);
  const resistanceRate = getResistanceRate(enemyResistance, weaken);
  const defRate = getDefRate(characterLevel, enemyLevel, armour);

  let eva = evaporationDemage;
  if (atkType === "none") {
    eva = 0;
  }

  const common = Math.round(
    (baseATK + extraATK + baseATK * (extraPercentATK / 100)) *
      (atkRate / 100) *
      (1 + elementDemage / 100) *
      elerate *
      (1 + eva / 100) *
      defRate *
      resistanceRate
  );
  const crit = Math.round(
    (baseATK + extraATK + baseATK * (extraPercentATK / 100)) *
      (atkRate / 100) *
      (1 + elementDemage / 100) *
      (1 + critDemage / 100) *
      elerate *
      (1 + eva / 100) *
      defRate *
      resistanceRate
  );
  return {
    common,
    crit,
  }
};
