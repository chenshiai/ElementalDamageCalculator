import { ProfilePhoto, WeponIcon } from './constants/profilePhoto';
import { Magnification } from './constants/magnification';

// 元素伤害反应基数
// 0.25（燃烧）:0.5（超导）:0.6（扩散）:1.15（超激化）:1.2（感电）:1.25（蔓激化）:1.5（碎冰）:2（超载）:2（绽放）:3（x绽放）
const ElementalReactionBaseDMG = [0,
  17.166, 18.535, 19.905, 21.275, 22.645, 24.650, 26.641, 28.869, 31.368, 34.143,
  37.201, 40.660, 44.447, 48.564, 53.749, 59.082, 64.420, 69.725, 75.123, 80.585,
  86.112, 91.704, 97.245, 102.813, 108.410, 113.202, 118.103, 122.979, 129.727, 136.293,
  142.671, 149.029, 155.417, 161.826, 169.106, 176.518, 184.073, 191.710, 199.557, 207.382,
  215.399, 224.166, 233.502, 243.351, 256.063, 268.544, 281.526, 295.014, 309.067, 323.602,
  336.758, 350.530, 364.483, 378.619, 398.600, 416.398, 434.387, 452.951, 472.606, 492.885,
  513.569, 539.103, 565.511, 592.539, 624.443, 651.470, 679.497, 707.794, 736.671, 765.640,
  794.773, 824.677, 852.158, 877.742, 914.229, 946.747, 979.411, 1011.233, 1044.792, 1077.444,
  1109.998, 1142.977, 1176.370, 1210.184, 1253.836, 1288.953, 1325.484, 1363.457, 1405.097, 1446.854
];

export const base = {
  // 感电
  electroCharged: ElementalReactionBaseDMG.map(i => i * 1.2),
  // 超载
  overload: ElementalReactionBaseDMG.map(i => i * 2),
  // 超导
  superconduct: ElementalReactionBaseDMG.map(i => i * 0.5),
  // 扩散
  swirl: ElementalReactionBaseDMG.map(i => i * 0.6),
  // 碎冰
  shatter: ElementalReactionBaseDMG.map(i => i * 1.5),
  // 结晶盾
  crystallize: [0,
    91.18, 98.71, 106.24, 113.76, 121.29, 128.82, 136.35, 143.88, 151.41, 158.94,
    169.99, 181.08, 192.19, 204.05, 215.94, 227.86, 247.69, 267.54, 287.43, 303.83,
    320.23, 336.63, 352.32, 368.01, 383.70, 394.43, 405.18, 415.95, 426.74, 437.54,
    450.60, 463.70, 476.85, 491.13, 502.55, 514.01, 531.41, 549.98, 568.58, 585.00,
    605.67, 626.39, 646.05, 665.76, 685.50, 700.84, 723.33, 745.87, 768.44, 786.79,
    809.54, 832.33, 855.16, 878.04, 899.48, 919.36, 946.04, 974.76, 1003.58, 1030.08,
    1056.64, 1085.25, 1113.92, 1149.26, 1178.06, 1200.22, 1227.66, 1257.24, 1284.92, 1314.75,
    1342.67, 1372.75, 1396.32, 1427.31, 1458.37, 1482.34, 1511.91, 1541.55, 1569.15, 1596.81,
    1622.42, 1648.07, 1666.38, 1684.68, 1702.98, 1726.10, 1754.67, 1785.87, 1817.14, 1851.06,
  ],
  // 超激化基础数值
  aggravate: ElementalReactionBaseDMG.map(i => i * 1.15),
  // 蔓激化基础数值
  spread: ElementalReactionBaseDMG.map(i => i * 1.25),
  // 燃烧基础数值
  burning: ElementalReactionBaseDMG.map(i => i * 0.25),
  // 绽放基础数值
  bloom: ElementalReactionBaseDMG.map(i => i * 2),
  // 超/烈绽放基础数值
  hyperbloom: ElementalReactionBaseDMG.map(i => i * 3),
}

export const WITCH = "witch";
export const THUNDER = "thunder"
export const EMERALD = "emerald";
export const PERCENT = "percent";

export const ElementalReaction = {
  Vaporize: 'Vaporize', // 蒸发
  Melt: 'Melt', // 融化
  Aggravate: 'Aggravate', // 超激化
  Spread: 'Spread', // 蔓激化
};

// 增伤区标签
export const EnhancedDamageNotes = [
  {
    detail: 15,
    title: "2件套·元素伤害",
  },
  {
    detail: 46.6,
    title: "空之杯·元素伤害",
  },
  {
    detail: 58.3,
    title: "空之杯·物理伤害",
  },
  {
    detail: 20,
    title: "宗室2·元素爆发",
  },
  {
    detail: 7.5,
    title: "魔女4·一层",
  },
  {
    detail: 7.5,
    title: "魔女4·二层",
  },
  {
    detail: 7.5,
    title: "魔女4·三层",
  },
  {
    detail: 35,
    title: "角斗4·普攻伤害",
  },
  {
    detail: 35,
    title: "平雷渡火·全伤害",
  },
  {
    detail: 35,
    title: "乐团4·重击伤害",
  },
  {
    detail: 50,
    title: "追忆4·普/重/下落伤害",
  },
  {
    detail: 25,
    title: "染血2·物理伤害",
  },
  {
    detail: 50,
    title: "染血4·重击伤害",
  },
  {
    detail: 40,
    title: "逆飞4·普攻/重击伤害",
  },
  {
    detail: 25,
    title: "苍白2·物理伤害",
  },
  {
    detail: 50,
    title: "苍白4·物理伤害",
  },
  {
    detail: 24,
    title: "华馆4·岩伤",
  }
];

export const AtkPercentNotes = [
  {
    detail: 48,
    title: "精炼5阶·讨龙英杰谭",
  },
  {
    detail: 20,
    title: "昔日宗室之仪",
  },
  {
    detail: 20,
    title: "千岩牢固",
  },
  {
    detail: 9,
    title: "苍白之火·一层",
  },
  {
    detail: 9,
    title: "苍白之火·二层",
  },
  {
    detail: 25,
    title: "元素共鸣·热诚之火",
  },
];

export const AtkFixedNotes = [
  {
    detail: 66,
    title: "二星食物",
  },
  {
    detail: 81,
    title: "二星食物·美味",
  },
  {
    detail: 160,
    title: "三星食物",
  },
  {
    detail: 194,
    title: "三星食物·美味",
  },
  {
    detail: 224,
    title: "四星食物",
  },
  {
    detail: 272,
    title: "四星食物·美味",
  },
  {
    detail: 260,
    title: "五星食物",
  },
  {
    detail: 316,
    title: "五星食物·美味",
  },
];

// 增伤区间计算公式
export const EnhancedDemageCalculationMode = [
  {
    title: "直接增伤",
    fields: [
      {
        name: "number",
        type: "number",
        label: "具体数值",
        placeholder: "输入数值",
      },
    ],
    getResult: ({ number }) => number,
  },
  {
    title: "风物之诗咏",
    fields: [
      {
        name: "atromancy",
        type: "number",
        label: "元素精通",
        placeholder: "输入枫原万叶的元素精通",
      },
    ],
    getResult: ({ atromancy }) => atromancy * 0.04,
  },
  {
    title: "雷罚恶曜之眼",
    fields: [
      {
        name: "energy",
        type: "number",
        label: "元素能量",
        placeholder: "输入角色元素爆发的元素能量",
      },
      {
        name: "units",
        label: "每点加成%",
        type: "number",
        placeholder: "雷电将军元素战技的每点元素能量的数值",
      },
    ],
    getResult: ({ energy, units }) => energy * units,
  },
  {
    title: "绝缘之旗印",
    fields: [
      {
        name: "charge",
        label: "元素充能",
        type: "number",
        placeholder: "输入角色的元素充能",
      },
    ],
    getResult: ({ charge }) => Math.min(charge * 0.25, 75),
  },
  {
    title: "启蛰之祝词",
    fields: [
      {
        name: "energy",
        type: "number",
        label: "元素精通",
        placeholder: "输入八重神子的元素精通",
      },
    ],
    getResult: ({ energy }) => energy * 0.15,
  },
  {
    title: "草主角·草缘剑",
    fields: [
      {
        name: "energy",
        type: "number",
        label: "元素精通",
        placeholder: "输入草属性旅行者的元素精通",
      },
    ],
    getResult: ({ energy }) => energy * 0.15,
  },
  {
    title: "草主角·偃草若化",
    fields: [
      {
        name: "energy",
        type: "number",
        label: "元素精通",
        placeholder: "输入草属性旅行者的元素精通",
      },
    ],
    getResult: ({ energy }) => energy * 0.1,
  },
  {
    title: "驭浪的海祇民",
    fields: [
      {
        name: "energy",
        type: "number",
        label: "元素能量",
        placeholder: "队伍所有角色的元素能量上限的总和",
      },
      {
        name: "units",
        label: "每点加成%",
        type: "number",
        placeholder: "每点元素能量提升的数值，注意上限",
      },
    ],
    getResult: ({ energy, units }) => energy * units,
  },
  {
    title: "血赤叶红",
    fields: [
      {
        name: "energy",
        label: "元素精通",
        type: "number",
        placeholder: "输入六命枫原万叶的元素精通",
      },
    ],
    getResult: ({ energy }) => energy * 0.2,
  },
];

// 攻击力buff计算公式
export const AtkPercentCalculationMode = [
  {
    title: "直接加攻%",
    fields: [
      {
        name: "number",
        label: "具体数值",
        type: "number",
        placeholder: "输入数值（支持一位小数）",
      },
    ],
    getResult: ({ number }) => number,
  }
];
export const AtkFixedCalculationMode = [
  {
    title: "直接加攻",
    fields: [
      {
        name: "number",
        label: "具体数值",
        type: "digit",
        placeholder: "输入数值",
      },
    ],
    getResult: ({ number }) => number,
  },
  {
    title: "班尼特·美妙旅程",
    img: ProfilePhoto.Bennett,
    fields: [
      {
        name: "lv",
        label: "天赋等级",
        type: "digit",
        placeholder: "输入班尼特元素爆发等级",
      },
      {
        name: "atk",
        label: "基础攻击",
        type: "digit",
        placeholder: "输入班尼特的基础攻击力",
      },
      {
        name: "fate",
        label: "命之座",
        type: "digit",
        placeholder: "输入已解锁的命之座数量",
      },
    ],
    getResult: ({ lv, atk, fate }) => {
      lv = Math.min(14, lv);
      lv = Math.max(1, lv);
      return Math.round((Magnification.Bennett[lv - 1] + (fate > 0 ? 0.2 : 0)) * atk);
    },
  },
  {
    title: "胡桃·蝶引来生",
    img: ProfilePhoto.HuTao,
    fields: [
      {
        name: "lv",
        label: "天赋等级",
        type: "digit",
        placeholder: "输入胡桃元素战技等级",
      },
      {
        name: "hp",
        label: "生命值",
        type: "digit",
        placeholder: "输入胡桃的生命值",
      },
    ],
    getResult: ({ lv, hp }) => {
      lv = Math.min(14, lv);
      lv = Math.max(1, lv);
      return Math.round(Magnification.HuTao[lv - 1] * hp);
    },
  },
  {
    title: "九条裟罗·天狗咒雷",
    img: ProfilePhoto.KujoSara,
    fields: [
      {
        name: "lv",
        label: "天赋等级",
        type: "digit",
        placeholder: "输入九条裟罗元素战技等级",
      },
      {
        name: "atk",
        label: "基础攻击",
        type: "digit",
        placeholder: "输入九条裟罗的基础攻击力",
      },
    ],
    getResult: ({ lv, atk }) => {
      lv = Math.min(13, lv);
      lv = Math.max(1, lv);
      return Math.round(Magnification.KujoSara[lv - 1] * atk);
    },
  },
  {
    title: "诺艾尔·大扫除",
    img: ProfilePhoto.Noelle,
    fields: [
      {
        name: "lv",
        label: "天赋等级",
        type: "digit",
        placeholder: "输入诺艾尔元素爆发等级",
      },
      {
        name: "def",
        label: "防御力",
        type: "digit",
        placeholder: "输入诺艾尔的防御力",
      },
      {
        name: "fate",
        label: "命之座",
        type: "digit",
        placeholder: "输入已解锁的命之座数量",
      },
    ],
    getResult: ({ lv, def, fate }) => {
      lv = Math.min(14, lv);
      lv = Math.max(1, lv);
      return Math.round((Magnification.Noelle[lv - 1] + (fate >= 6 ? 0.5 : 0)) * def);
    },
  },
  {
    title: "荒泷一斗·最恶鬼王·一斗轰临！！",
    img: ProfilePhoto.AratakiItto,
    fields: [
      {
        name: "lv",
        label: "天赋等级",
        type: "digit",
        placeholder: "输入荒泷一斗元素爆发等级",
      },
      {
        name: "def",
        label: "防御力",
        type: "digit",
        placeholder: "输入荒泷一斗的防御力",
      },
    ],
    getResult: ({ lv, def }) => {
      lv = Math.min(14, lv);
      lv = Math.max(1, lv);
      return Math.round(Magnification.AratakiItto[lv - 1] * def);
    },
  },
];

// 附加伤害计算公式
export const AdditionalDemageMode = [
  {
    title: "通用伤害值提高",
    // img: 'https://uploadstatic.mihoyo.com/ys-obc/2021/12/14/75379475/260442fca96f0e65701ff5067b13bb60_6053712857932776206.png?x-oss-process=image/quality,q_75/resize,s_40',
    children: [
      {
        title: "根据基础属性的百分比来计算",
        fields: [
          {
            name: "def",
            label: "基础属性",
            placeholder: "输入角色的攻击力、防御力或生命值",
            type: "number",
            required: true,
          },
          {
            name: "rate",
            label: "转换倍率%",
            placeholder: "攻击力、防御力、生命值的百分之多少",
            type: "number",
            required: true,
          },
          {
            name: "cha",
            label: "",
            placeholder: "适用角色：云堇、申鹤、神里绫人和夜兰等",
            type: "number",
            disabled: true,
          },
          {
            name: "cha1",
            label: "",
            placeholder: "适用武器：辰砂之纺锤、赤角石溃杵",
            type: "number",
            disabled: true,
          },
          {
            name: "cha1",
            label: "",
            placeholder: "适用圣遗物：来歆余响",
            type: "number",
            disabled: true,
          },
        ],
        getResult: ({ def, rate }) => def * rate / 100,
      },
    ]
  },
  {
    title: "钟离·炊金馔玉",
    img: ProfilePhoto.ZhongLi,
    children: [
      {
        title: "普攻·重击·下落",
        fields: [
          {
            name: "hp",
            label: "生命值",
            placeholder: "输入角色的生命值",
            required: true,
            type: "number",
          },
          {
            name: "tips",
            label: "",
            placeholder: "伤害提高值：生命值上限的1.39%",
            type: "number",
            disabled: true,
          },
        ],
        getResult: ({ hp }) => hp * 0.0139,
      },
      {
        title: "地星",
        fields: [
          {
            name: "hp",
            label: "生命值",
            type: "number",
            required: true,
            placeholder: "输入角色的生命值",
          },
          {
            name: "tips",
            label: "",
            placeholder: "伤害提高值：生命值上限的1.9%",
            type: "number",
            disabled: true,
          },
        ],
        getResult: ({ hp }) => hp * 0.019,
      },
      {
        title: "天星",
        fields: [
          {
            name: "hp",
            label: "生命值",
            type: "number",
            required: true,
            placeholder: "输入角色的生命值",
          },
          {
            name: "tips",
            label: "",
            placeholder: "伤害提高值：生命值上限的33%",
            type: "number",
            disabled: true,
          },
        ],
        getResult: ({ hp }) => hp * 0.33,
      },
    ]
  },
  {
    title: "荒泷一斗·赤鬼之血",
    img: ProfilePhoto.AratakiItto,
    children: [
      {
        title: "荒泷逆袈裟",
        fields: [
          {
            name: "def",
            label: "防御力",
            placeholder: "输入角色的防御力",
            required: true,
            type: "number",
          },
          {
            name: "tips",
            label: "",
            placeholder: "伤害提高值：防御力的35%",
            type: "number",
            disabled: true,
          },
        ],
        getResult: ({ def }) => def * 0.35,
      },
    ]
  },
  {
    title: "心海·仪来雨衣",
    img: ProfilePhoto.Kokomi,
    children: [
      {
        title: "普攻·重击",
        fields: [
          {
            name: "hp",
            label: "生命值",
            type: "number",
            required: true,
            placeholder: "输入角色的生命值",
          },
          {
            name: "hpRate",
            label: "提升倍率%",
            type: "number",
            required: true,
            placeholder: "元素爆发描述中，普攻/重击的倍率",
          },
          {
            name: "healRate",
            label: "治疗加成%",
            type: "number",
            required: true,
            placeholder: "输入角色的治疗加成",
          },
          {
            name: "tips",
            label: "",
            placeholder: "生命值附加倍率额外提升，基于治疗加成的15%",
            type: "number",
            disabled: true,
          },
        ],
        getResult: ({ hp, hpRate, healRate }) => {
          return hp * (+hpRate + healRate * 0.15) / 100
        },
      },
      {
        title: "技能伤害/化海月",
        fields: [
          {
            name: "hp",
            label: "生命值",
            type: "number",
            required: true,
            placeholder: "输入角色的生命值",
          },
          {
            name: "hpRate",
            label: "提升倍率%",
            type: "number",
            required: true,
            placeholder: "元素爆发描述中，技能伤害/化海月的倍率",
          },
        ],
        getResult: ({ hp, hpRate }) => hp * hpRate / 100,
      },
    ],
  },
  {
    title: "托马·烈火攻燔",
    img: ProfilePhoto.Thoma,
    children: [
      {
        title: "炽火崩破",
        fields: [
          {
            name: "hp",
            label: "生命值",
            placeholder: "输入角色的生命值",
            required: true,
            type: "number",
          },
          {
            name: "tips",
            label: "",
            placeholder: "伤害提高值：生命值上限的2.2%",
            type: "number",
            disabled: true,
          },
        ],
        getResult: ({ hp }) => hp * 0.022,
      },
    ]
  },
  {
    title: "阿贝多·显生之宙",
    img: ProfilePhoto.Albedo,
    children: [
      {
        title: "诞生式·大地之潮",
        fields: [
          {
            name: "def",
            label: "防御力",
            placeholder: "输入角色的防御力",
            required: true,
            type: "number",
          },
          {
            name: "num",
            label: "生灭计数",
            placeholder: "输入生灭计数的层数",
            type: "number",
            required: true,
          },
          {
            name: "tips",
            label: "",
            placeholder: "伤害提高值：防御力上限的30%，最多叠加4次",
            type: "number",
            disabled: true,
          },
        ],
        getResult: ({ def, num }) => def * num * 0.3,
      },
    ]
  },
  {
    title: "五郎·报恩之守",
    img: ProfilePhoto.Gorou,
    children: [
      {
        title: "犬坂吠吠方圆阵",
        fields: [
          {
            name: "def",
            label: "防御力",
            placeholder: "输入角色的防御力",
            required: true,
            type: "number",
          },
          {
            name: "tips",
            label: "",
            placeholder: "伤害提高值：防御力上限的156%",
            type: "number",
            disabled: true,
          },
        ],
        getResult: ({ def }) => def * 1.56,
      },
      {
        title: "兽牙逐突形胜战法",
        fields: [
          {
            name: "def",
            label: "防御力",
            placeholder: "输入角色的防御力",
            required: true,
            type: "number",
          },
          {
            name: "tips",
            label: "",
            placeholder: "伤害提高值：防御力上限的15.6%",
            type: "number",
            disabled: true,
          },
        ],
        getResult: ({ def }) => def * 0.156,
      },
    ]
  },
  {
    title: "胡桃·最不安神晴又复雨",
    img: ProfilePhoto.HuTao,
    children: [
      {
        title: "血梅香",
        fields: [
          {
            name: "hp",
            label: "生命值",
            placeholder: "输入角色的生命值",
            required: true,
            type: "number",
          },
          {
            name: "tips",
            label: "",
            placeholder: "伤害提高值：生命值上限的10%",
            type: "number",
            disabled: true,
          },
        ],
        getResult: ({ hp }) => hp * 0.1,
      },
    ]
  },
  {
    title: "不灭月华·白夜皓月",
    img: WeponIcon.EverlastingMoonglow,
    children: [
      {
        title: "普通攻击",
        fields: [
          {
            name: "hp",
            label: "生命值",
            placeholder: "输入角色的生命值",
            required: true,
            type: "number",
          },
          {
            name: "rate",
            label: "提升倍率%",
            placeholder: "输入武器特效的倍率",
            required: true,
            type: "number",
          }
        ],
        getResult: ({ hp, rate }) => hp * rate / 100,
      },
    ]
  },
];

export const DefCutAdditionMode = [
  {
    title: "通用防御减少",
    children: [
      {
        title: "减少防御%或无视防御%",
        fields: [
          {
            name: "num",
            label: "具体数值",
            placeholder: "输入具体数值",
            type: "number",
          },
          {
            name: "cha",
            label: "",
            placeholder: "注意：减防%与穿防%不是加算，需要分开添加",
            type: "number",
            disabled: true,
          },
          {
            name: "cha1",
            label: "",
            placeholder: "先减少敌人的防御，后无视敌人剩下的防御",
            type: "number",
            disabled: true,
          },
        ],
        getResult: ({ num }) => num,
      },
    ]
  },
]
