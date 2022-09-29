/** 部分角色的基础属性转化倍率 */
export const Magnification = {
  /** 班尼特·元素爆发【基础攻击力转攻击力增益】 */
  Bennett: [0.56, 0.6, 0.64, 0.7, 0.74, 0.78, 0.84, 0.9, 0.95, 1.01, 1.06, 1.12, 1.19, 1.26],
  /** 九条裟罗元素战技【基础攻击力转攻击力增益】*/
  KujoSara: [0.43, 0.46, 0.49, 0.54, 0.57, 0.6, 0.64, 0.69, 0.73, 0.77, 0.82, 0.86, 0.91],
  /** 诺艾尔元素爆发【防御力转攻击力】 */
  Noelle: [0.4, 0.43, 0.46, 0.5, 0.53, 0.56, 0.6, 0.64, 0.68, 0.72, 0.76, 0.8, 0.85, 0.9],
  /** 荒泷一斗元素爆发【防御力转攻击力】 */
  AratakiItto: [0.576, 0.619, 0.662, 0.72, 0.763, 0.806, 0.864, 0.922, 0.979, 1.037, 1.094, 1.152, 1.224, 1.296],
  /** 胡桃元素战技【生命值转攻击力】 */
  HuTao: [0.0384, 0.0407, 0.043, 0.046, 0.0483, 0.0506, 0.0536, 0.0566, 0.0596, 0.0626, 0.0656, 0.0685, 0.0715, 0.0745],
  /** 神里绫人元素战技·浪闪【生命值转伤害提高值】 */
  KamisatoAyato: [0.0056, 0.0061, 0.0065, 0.0072, 0.0076, 0.0082, 0.0089, 0.0096, 0.103, 0.111, 0.119, 0.127, 0.134].map(a => a * 4),
  /** 五郎元素战技【固定防御力提高】 */
  Gorou: [206, 222, 237, 258, 273, 289, 309, 330, 350, 371, 392, 412, 438],
  /** 云堇元素爆发【防御力转伤害提高值】 */
  YunJin: [0.32, 0.35, 0.37, 0.40, 0.43, 0.45, 0.48, 0.51, 0.55, 0.58, 0.61, 0.64, 0.68],
  /** 申鹤元素战技【攻击力转伤害提高值】 */
  ShenHe: [0.457, 0.491, 0.525, 0.571, 0.605, 0.639, 0.685, 0.73, 0.776, 0.822, 0.868, 0.913, 0.97],
  /** 雷电将军元素战技【元素爆发能力转增伤】 */
  Beelzebul: [0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3],
  /** 心海元素爆发【生命值转伤害提高值】 */
  Kokomi: {
    NormalAttack: [0.048, 0.052, 0.056, 0.061, 0.064, 0.068, 0.073, 0.077, 0.082, 0.087, 0.092, 0.097, 0.103],
    ChargedAttack: [0.068, 0.073, 0.078, 0.085, 0.09, 0.095, 0.102, 0.108, 0.115, 0.122, 0.129, 0.136, 0.144],
    BakeKurage: [0.071, 0.076, 0.082, 0.089, 0.094, 0.099, 0.106, 0.114, 0.121, 0.128, 0.135, 0.142, 0.151],
  },
};
