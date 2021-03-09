export const calculate = (elementalMystery) => {
  if (+elementalMystery <= 0) return 0;
  return 2.78 * elementalMystery / (elementalMystery + 1400) * 100;
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
    resistanceRate = 1 / (1 + 4 * resistance / 100);
  }
  return resistanceRate;
};

export const getDefRate = (characterLevel, enemyLevel, armour) => {
  const enemyDef = (enemyLevel + 100) * (1 - armour / 100);
  return (100 + characterLevel) / (100 + characterLevel + enemyDef);
};

