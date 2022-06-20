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
    additionalDemageList = [],
    critDemage,
    elementDemage,
    evaporationDemage,
    atkRate,
    atkType,
    extraRate = 0,
    characterLevel,
    enemyLevel,
    enemyResistance,
    weaken,
    armour = 0,
    armourPiercing
  } = data;

  // 攻击力、防御力、生命值
  const atk = baseATK + extraATK + extraFixedATK + baseATK * (extraPercentATK / 100);
  const def = baseDEF + extraDEF + extraFixedDEF + baseDEF * (extraPercentDEF / 100);
  const hp = baseHP + extraHP + extraFixedHP + baseHP * (extraPercentHP / 100);
  
  // 技能倍率
  const rate = (atkRate / 100) * (1 + (extraRate / 100));
  // 伤害倍率
  const element = Math.max(0, 1 + elementDemage / 100);
  // 抗性
  const resistanceRate = getResistanceRate(enemyResistance, weaken);
  // 防御减伤
  const defRate = getDefRate(characterLevel, enemyLevel, armour, armourPiercing);
  // 暴伤
  const cri = 1 + critDemage / 100;
  // 增幅反应
  const reaction = getReactionRate(atkType);
  // 精通加成
  let eva = 1 + evaporationDemage / 100;
  if (atkType === "none") {
    eva = 1;
  }
  // 附加伤害值
  const additionalDmg = sub(additionalDemageList);

  let basic = 0; 
  switch(basicPanelSelect) {
    case '生命值': basic = hp; break;
    case '防御力': basic = def; break;
    case '攻击力': basic = atk; break;
  }

  const result =
    (basic * rate + additionalDmg) *
    element *
    reaction *
    eva *
    defRate *
    resistanceRate;

  return {
    common: Math.round(result),
    crit: Math.round(result * cri),
  }
};
