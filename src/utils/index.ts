
import { showNotify } from "vant";
import { ElementalReactionType, ReactionRate } from '@/constants';
import { BaseDMG } from '@/constants/elementalReaction';

/** 获取增幅反应比例 */
export const getAmplifiedRate = (em) => {
  return ((2.78 * em) / (em + 1400)) * 100;
}

/** 获取剧变反应比例 */
export const getServitudeRate = (em) => {
  return 16 * em / (em + 2000) * 100;
}

/** 结晶反应 */
export const getCrystallizeRate = (em) => {
  return 4.44 * em / (em + 1400) * 100;
}

/** 激化反应 */
export const getCatalyzeRate = (em) => {
  return 5 * em / (em + 1200) * 100;
}

/** 月感电精通转化增伤比例 */
export const getMoonElectroRate = (em) => {
  return 6 * em / (em + 2000) * 100;
}


// 抗性承伤
export const getResistanceRate = (enemyResistance, weaken = 0) => {
  const resistance = enemyResistance - weaken; // 敌人自身抗性 减去 减抗数值
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
    showNotify({
      type: "danger",
      message: description,
    })
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
    baizhuHP = 0,
  } = data;

  // 攻击力、防御力、生命值
  const atk = extraATK + extraFixedATK + baseATK * (1 + extraPercentATK / 100);
  const def = extraDEF + extraFixedDEF + baseDEF * (1 + extraPercentDEF / 100);
  const hp = extraHP + extraFixedHP + baseHP * (1 + extraPercentHP / 100);

  // 抗性承伤
  const resistanceRate = getResistanceRate(enemyResistance, weaken);
  // 防御承伤
  const defRate = getDefRate(characterLevel, enemyLevel, armour, armourPiercing);
  // 敌人最终承伤
  const ENEMY_RATE = defRate * resistanceRate;

  // 增幅精通加成
  let eva = 0;
  if (atkType === ElementalReactionType.Rate || atkType === ElementalReactionType.Rate2) {
    eva = (getAmplifiedRate(elementalMystery) + (witch ? 15 : 0)) / 100
  }

  /** 基础伤害值 */
  let basic = atk * (atkRate / 100) + def * (armRate / 100) + hp * (hpRate / 100) + elementalMystery * (emRate / 100);
  const BASE_DMG = basic * (1 + (extraRate / 100)) * ENEMY_RATE;
  // 激化伤害值
  let BONUS_DMG = 0;
  if (atkType === ElementalReactionType.Aggravate) {
    BONUS_DMG = BaseDMG.aggravate[characterLevel] * (1 + (getCatalyzeRate(elementalMystery) + (thunder ? 20 : 0)) / 100 + baizhuHP / 1000 * 0.8 /100) * ENEMY_RATE;
  }
  if (atkType === ElementalReactionType.Spread) {
    BONUS_DMG = BaseDMG.spread[characterLevel] * (1 + getCatalyzeRate(elementalMystery) / 100 + baizhuHP / 1000 * 0.8 /100) * ENEMY_RATE;
  }
  // 附加伤害值
  const ADDITIONAL_DMG = additionalDemage * ENEMY_RATE;
  // 增伤伤害值
  const MAGNIFICATION_DMG = (BASE_DMG + ADDITIONAL_DMG + BONUS_DMG) * Math.max(0, elementDemage / 100);
  // 反应伤害值
  const REACTION_DMG = (BASE_DMG + ADDITIONAL_DMG + MAGNIFICATION_DMG) * ReactionRate[atkType];
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

export function generateAllSortedResults(arr) {
  const n = arr.length;
  const totalCombinations = Math.pow(2, n);
  const uniqueResults = new Set<string>();

  // 遍历所有可能的组合（用二进制表示选择）
  for (let i = 0; i < totalCombinations; i++) {
    const combination = [];
    // 将数字转换为n位二进制字符串，控制每个子数组的选择
    const binary = i.toString(2).padStart(n, '0');

    // 根据二进制位选择元素
    for (let j = 0; j < n; j++) {
      const index = parseInt(binary[j], 10); // 0或1，表示选择子数组中的第几个元素
      combination.push(arr[j][index]);
    }

    // 从大到小排序并转为字符串存入Set（自动去重）
    const sorted = combination.sort((a, b) => b - a);
    uniqueResults.add(sorted.join(','));
  }

  // 将Set转换为数组格式返回
  return Array.from(uniqueResults).map(item => item.split(',').map(Number));
}

class Event {
  eventList = {};

  $on(key, fn) {
    if (!this.eventList[key]) {
      this.eventList[key] = [];
    }
    this.eventList[key].push(fn);
  }

  $emit(key, val) {
    if (this.eventList.hasOwnProperty(key)) {
      this.eventList[key].forEach((fn) => { fn(val) });
    }
  }
}

export const EventBus = new Event();
