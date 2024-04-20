import { Rate } from "vant";

export const WITCH = "witch";
export const THUNDER = "thunder";
export const EMERALD = "emerald";
export const PERCENT = "percent";
export const EDEN = "eden";

export const ElementalReaction = {
  Vaporize: 'Vaporize', // 蒸发
  Melt: 'Melt', // 融化
  Aggravate: 'Aggravate', // 超激化
  Spread: 'Spread', // 蔓激化
  Rate: 'evaporation', // 2倍增幅
  Rate2: 'evaporation2', // 1.5倍增幅
};

export const AtkTypeText = {
  [ElementalReaction.Rate]: '2.0倍增幅',
  [ElementalReaction.Rate2]: '1.5倍增幅',
  [ElementalReaction.Aggravate]: '超激化',
  [ElementalReaction.Spread]: '蔓激化',
}

export const ReactionRate = {
  'none': 0,
  [ElementalReaction.Rate]: 1,
  [ElementalReaction.Rate2]: 0.5,
  [ElementalReaction.Aggravate]: 0,
  [ElementalReaction.Spread]: 0,
}

export const basicPanelSelectType = {
  /** 攻击力 */
  ATK: '攻击力',
  DEF: '防御力',
  HP: '生命值',
  EM: '元素精通',
}