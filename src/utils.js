// 聚变反应计算公式
export const calculate = (elementalMystery) => {
  if (+elementalMystery <= 0) return 0;
  return (6.665 - 9340 / (1401 + +elementalMystery)) * 100;
};

