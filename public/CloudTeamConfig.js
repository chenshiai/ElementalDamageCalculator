// 元素
const ELEMENT_TYPE = {
  Pyro: "Pyro", // 火
  Hydro: "Hydro", // 水
  Cryo: "Cryo", // 冰
  Electro: "Electro", // 雷
  Anemo: "Anemo", // 风
  Geo: "Geo", // 岩
  Dendro: "Dendro", // 草
};

// 武器类型
const WEAPON_TYPE = {
  Sword: "Sword",
  GreatSword: "GreatSword",
  Bow: "Bow",
  Magic: "Magic",
  LonGarm: "LonGarm",
};

// 输出类型
const BATTLE_TYPE = {
  /** 驻场输出 */
  Resident: "Resident",
  /** 后台输出 */
  BackGround: "BackGround",
  /** 速切输出 */
  QuickSwitch: "QuickSwitch"
};

// 输出类型标签文本
const BATTLE_TYPE_TEXT = {
  [BATTLE_TYPE.Resident]: "持续驻场",
  [BATTLE_TYPE.BackGround]: "后台脱手",
  [BATTLE_TYPE.QuickSwitch]: "速切爆发",
};

// 对敌影响
const ENEMY_TYPE = {
  /** 控制 */
  Control: "Control",
  /** 减防&减抗 */
  Reduce: "Reduce",
  /** 破盾 */
  Break: "Break",
  /** 敌方削弱 */
  Weaken: "Weaken",
};

const ENEMY_TYPE_TEXT = {
  [ENEMY_TYPE.Control]: "控制效果",
  [ENEMY_TYPE.Reduce]: "减防&减抗",
  [ENEMY_TYPE.Break]: "破盾效率",
  [ENEMY_TYPE.Weaken]: "敌方虚弱",
};

// 友方影响
const TEAM_TYPE = {
  /** 治疗 */
  Treatment: "Treatment",
  /** 护盾 */
  Shield: "Shield",
  /** 减伤 */
  DMGreduction: "DMGreduction",
  /** 机动性 */
  Mobility: "Mobility",
  /** 增伤 */
  Berserk: "Berserk",
  /** 充能 */
  Charged: "Charged",
};

const TEAM_TYPE_TEXT = {
  [TEAM_TYPE.Treatment]: "治疗能力",
  [TEAM_TYPE.Shield]: "护盾效果",
  [TEAM_TYPE.DMGreduction]: "减伤能力",
  [TEAM_TYPE.Mobility]: "机动性",
  [TEAM_TYPE.Berserk]: "增伤效果",
  [TEAM_TYPE.Charged]: "充能效果",
};

const WEIGHT = {
  5: "S",
  4: "A",
  3: "B",
  2: "C",
  1: "D",
};

const WEIGHT2 = {
  1: "C-",
  2: "C",
  3: "C+",
  4: "B-",
  5: "B",
  6: "B+",
  7: "A-",
  8: "A",
  9: "A+",
  10: "S-",
  11: "S",
  12: "S+",
};

const CloudTeamConfig = [
  {
    name: "安柏",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/07/18/75795471/5b485364766df8c31b00909a6461fbde_1958980903694002182.png",
    element: ELEMENT_TYPE.Pyro,
    weapon: WEAPON_TYPE.Bow,
    battle: [
      {
        type: BATTLE_TYPE.QuickSwitch,
        level: 11,
      },
      {
        type: BATTLE_TYPE.Resident,
        level: 8,
      },
    ],
    enemy: [
      {
        type: ENEMY_TYPE.Control,
        level: 3,
      },
    ],
    team: [
      {
        type: TEAM_TYPE.Berserk,
        level: 2,
      },
      {
        type: TEAM_TYPE.Mobility,
        level: 2,
      },
    ],
  },
  {
    name: "凯亚",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/07/18/75795471/9090035286a247b8fffef754cd0491f9_6356685042229017766.png",
    element: ELEMENT_TYPE.Cryo,
    weapon: WEAPON_TYPE.Sword,
    battle: [
      {
        type: BATTLE_TYPE.Resident,
        level: 11,
      },
      {
        type: BATTLE_TYPE.BackGround,
        level: 8,
      },
    ],
    enemy: [],
    team: [
      {
        type: TEAM_TYPE.Shield,
        level: 2,
      },
      {
        type: TEAM_TYPE.Charged,
        level: 2,
      },
      {
        type: TEAM_TYPE.Mobility,
        level: 3,
      },
    ],
  },
  {
    name: "丽莎",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/07/18/75795471/963e92d0a4a8c039c08db5be687d728a_5475224233492952470.png",
    element: ELEMENT_TYPE.Electro,
    weapon: WEAPON_TYPE.Magic,
    battle: [
      {
        type: BATTLE_TYPE.Resident,
        level: 11,
      },
      {
        type: BATTLE_TYPE.BackGround,
        level: 5,
      },
    ],
    enemy: [
      {
        type: ENEMY_TYPE.Reduce,
        level: 5,
      }
    ],
    team: [],
  },
  {
    name: "琴",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/07/18/75795471/eb631369e43ffca5aa89fbfb227f7d39_2480956024089894918.png",
    element: ELEMENT_TYPE.Anemo,
    weapon: WEAPON_TYPE.Sword,
    battle: [
      {
        type: BATTLE_TYPE.Resident,
        level: 11,
      },
    ],
    enemy: [
      {
        type: ENEMY_TYPE.Control,
        level: 8,
      },
      {
        type: ENEMY_TYPE.Reduce,
        level: 5,
      }
    ],
    team: [
      {
        type: TEAM_TYPE.Treatment,
        level: 8,
      },
      {
        type: TEAM_TYPE.Mobility,
        level: 3,
      },
      {
        type: TEAM_TYPE.Berserk,
        level: 3,
      },
      {
        type: TEAM_TYPE.DMGreduction,
        level: 3,
      },
    ],
  },
  {
    name: "可莉",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/07/18/75795471/0eec919f6330d704248dc00eb73ec6ae_8303616203857367244.png",
    element: ELEMENT_TYPE.Pyro,
    weapon: WEAPON_TYPE.Magic,
    battle: [
      {
        type: BATTLE_TYPE.Resident,
        level: 11,
      },
      {
        type: BATTLE_TYPE.QuickSwitch,
        level: 3,
      },
    ],
    enemy: [
      {
        type: ENEMY_TYPE.Control,
        level: 5,
      },
      {
        type: ENEMY_TYPE.Reduce,
        level: 5,
      },
    ],
    team: [
      {
        type: TEAM_TYPE.Charged,
        level: 5,
      },
    ],
  },
  {
    name: "诺艾尔",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/07/18/75795471/3aac2c7f25ef15dcd540fe2c3fed99b3_8230571585292379952.png",
    element: ELEMENT_TYPE.Geo,
    weapon: WEAPON_TYPE.GreatSword,
    battle: [
      {
        type: BATTLE_TYPE.Resident,
        level: 11,
      },
      {
        type: BATTLE_TYPE.BackGround,
        level: 3,
      },
    ],
    enemy: [],
    team: [
      {
        type: TEAM_TYPE.Shield,
        level: 8,
      },
      {
        type: TEAM_TYPE.Treatment,
        level: 5,
      },
    ],
  },
  {
    name: "芭芭拉",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/07/18/75795471/8b0a61c6dc241fbfb45ee736159a9df8_3700809724460481019.png",
    element: ELEMENT_TYPE.Hydro,
    weapon: WEAPON_TYPE.Magic,
    battle: [
      {
        type: BATTLE_TYPE.Resident,
        level: 5,
      },
    ],
    enemy: [],
    team: [
      {
        type: TEAM_TYPE.Treatment,
        level: 8,
      },
      {
        type: TEAM_TYPE.Berserk,
        level: 3,
      },
      {
        type: TEAM_TYPE.Mobility,
        level: 3,
      },
    ],
  },
  {
    name: "温迪",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/07/18/75795471/3223bc2038ec73ad9ea8919492e4b326_4966616735668393445.png",
    element: ELEMENT_TYPE.Anemo,
    weapon: WEAPON_TYPE.Bow,
    battle: [
      {
        type: BATTLE_TYPE.BackGround,
        level: 11,
      },
    ],
    enemy: [
      {
        type: ENEMY_TYPE.Control,
        level: 11,
      },
      {
        type: ENEMY_TYPE.Reduce,
        level: 5,
      },
    ],
    team: [
      {
        type: TEAM_TYPE.Mobility,
        level: 3,
      },
    ],
  },
  {
    name: "雷泽",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/07/18/75795471/911d75007d943edf93cf5ad1cd683ea6_8252392376740297184.png",
    element: ELEMENT_TYPE.Electro,
    weapon: WEAPON_TYPE.GreatSword,
    battle: [
      {
        type: BATTLE_TYPE.Resident,
        level: 11,
      },
      {
        type: BATTLE_TYPE.QuickSwitch,
        level: 5,
      },
    ],
    enemy: [
      {
        type: ENEMY_TYPE.Reduce,
        level: 5,
      },
    ],
    team: [
      {
        type: TEAM_TYPE.Mobility,
        level: 3,
      },
    ],
  },
  {
    name: "迪卢克",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/07/18/75795471/6e6f57317ce859314331bded68c335e7_8439425746236421329.png",
    element: ELEMENT_TYPE.Pyro,
    weapon: WEAPON_TYPE.GreatSword,
    battle: [
      {
        type: BATTLE_TYPE.Resident,
        level: 11,
      },
      {
        type: BATTLE_TYPE.QuickSwitch,
        level: 5,
      },
    ],
    enemy: [],
    team: [],
  },
  {
    name: "班尼特",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/07/18/75795471/309aa18c59ce6fd29b9ec5baebfcd291_676601747940365500.png",
    element: ELEMENT_TYPE.Pyro,
    weapon: WEAPON_TYPE.Sword,
    battle: [
      {
        type: BATTLE_TYPE.Resident,
        level: 11,
      },
      {
        type: BATTLE_TYPE.QuickSwitch,
        level: 3,
      },
    ],
    enemy: [],
    team: [
      {
        type: TEAM_TYPE.Berserk,
        level: 11,
      },
      {
        type: TEAM_TYPE.Treatment,
        level: 8,
      },
    ],
  },
  {
    name: "菲谢尔",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/07/18/75795471/8067f15d8de5da98dbb6ce5112598b58_703948592621480452.png",
    element: ELEMENT_TYPE.Electro,
    weapon: WEAPON_TYPE.Bow,
    battle: [
      {
        type: BATTLE_TYPE.BackGround,
        level: 11,
      },
      {
        type: BATTLE_TYPE.Resident,
        level: 8,
      },
    ],
    enemy: [],
    team: [
      {
        type: TEAM_TYPE.Mobility,
        level: 3,
      },
    ],
  },
  {
    name: "北斗",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/07/18/75795471/2205006a2a2edd71d0913d2c5fec8493_3706170285492623521.png",
    element: ELEMENT_TYPE.Electro,
    weapon: WEAPON_TYPE.GreatSword,
    battle: [
      {
        type: BATTLE_TYPE.BackGround,
        level: 11,
      },
      {
        type: BATTLE_TYPE.QuickSwitch,
        level: 8,
      },
      {
        type: BATTLE_TYPE.Resident,
        level: 5,
      },
    ],
    enemy: [
      {
        type: ENEMY_TYPE.Reduce,
        level: 5,
      },
    ],
    team: [
      {
        type: TEAM_TYPE.DMGreduction,
        level: 8,
      },
      {
        type: TEAM_TYPE.Shield,
        level: 5,
      },
    ],
  },
  {
    name: "凝光",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/07/18/75795471/3e20148475a514c274ab317b1b295ad6_5894014233343278144.png",
    element: ELEMENT_TYPE.Geo,
    weapon: WEAPON_TYPE.Magic,
    battle: [
      {
        type: BATTLE_TYPE.Resident,
        level: 11,
      },
      {
        type: BATTLE_TYPE.QuickSwitch,
        level: 5,
      },
    ],
    enemy: [],
    team: [
      {
        type: TEAM_TYPE.DMGreduction,
        level: 5,
      },
      {
        type: TEAM_TYPE.Berserk,
        level: 3,
      },
    ],
  },
  {
    name: "香菱",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/07/18/75795471/1b510cb569d7ad2688a8c4e05c872283_3782971431226275158.png",
    element: ELEMENT_TYPE.Pyro,
    weapon: WEAPON_TYPE.LonGarm,
    battle: [
      {
        type: BATTLE_TYPE.BackGround,
        level: 11,
      },
      {
        type: BATTLE_TYPE.QuickSwitch,
        level: 5,
      },
    ],
    enemy: [
      {
        type: ENEMY_TYPE.Reduce,
        level: 8,
      },
    ],
    team: [
      {
        type: TEAM_TYPE.Berserk,
        level: 3,
      },
      {
        type: TEAM_TYPE.Mobility,
        level: 2,
      },
    ],
  },
  {
    name: "行秋",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/07/18/75795471/4ee7dbc175a319eca4bf0ae111335c58_7615364624993664774.png",
    element: ELEMENT_TYPE.Hydro,
    weapon: WEAPON_TYPE.Sword,
    battle: [
      {
        type: BATTLE_TYPE.BackGround,
        level: 11,
      },
      {
        type: BATTLE_TYPE.QuickSwitch,
        level: 5,
      },
    ],
    enemy: [
      {
        type: ENEMY_TYPE.Reduce,
        level: 5,
      },
    ],
    team: [
      {
        type: TEAM_TYPE.DMGreduction,
        level: 8,
      },
      {
        type: TEAM_TYPE.Treatment,
        level: 3,
      },
    ],
  },
  {
    name: "重云",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/07/18/75795471/58375bd187c155a398f77753e1f9aba3_4189287561892767231.png",
    element: ELEMENT_TYPE.Cryo,
    weapon: WEAPON_TYPE.GreatSword,
    battle: [
      {
        type: BATTLE_TYPE.QuickSwitch,
        level: 11,
      },
      {
        type: BATTLE_TYPE.Resident,
        level: 8,
      },
    ],
    enemy: [
      {
        type: ENEMY_TYPE.Reduce,
        level: 5,
      },
    ],
    team: [
      {
        type: TEAM_TYPE.Berserk,
        level: 3,
      },
    ],
  },
  {
    name: "砂糖",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/09/14/4328207/f527aa0b45df57842fb097b8c38bf169_6396652007566615235.png",
    element: ELEMENT_TYPE.Anemo,
    weapon: WEAPON_TYPE.Magic,
    battle: [
      {
        type: BATTLE_TYPE.BackGround,
        level: 8,
      },
      {
        type: BATTLE_TYPE.Resident,
        level: 5,
      },
    ],
    enemy: [
      {
        type: ENEMY_TYPE.Control,
        level: 8,
      },
    ],
    team: [
      {
        type: TEAM_TYPE.Berserk,
        level: 8,
      },
    ],
  },
  {
    name: "莫娜",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/09/14/75379477/5ddec58ede0a4193d1bd72f0f792b4fa_1223323503797186476.png?x-oss-process=image/quality,q_75/resize,s_108",
    element: ELEMENT_TYPE.Hydro,
    weapon: WEAPON_TYPE.Magic,
    battle: [
      {
        type: BATTLE_TYPE.QuickSwitch,
        level: 11,
      },
      {
        type: BATTLE_TYPE.Resident,
        level: 5,
      },
      {
        type: BATTLE_TYPE.BackGround,
        level: 2,
      },
    ],
    enemy: [
      {
        type: ENEMY_TYPE.Control,
        level: 5,
      },
    ],
    team: [
      {
        type: TEAM_TYPE.Berserk,
        level: 11,
      },
      {
        type: TEAM_TYPE.Mobility,
        level: 2,
      },
    ],
  },
  {
    name: "刻晴",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/09/14/4328207/ca22c4fbab990df0b1b59fe69b2a1a86_1351176061461950474.png",
    element: ELEMENT_TYPE.Electro,
    weapon: WEAPON_TYPE.Sword,
    battle: [
      {
        type: BATTLE_TYPE.QuickSwitch,
        level: 11,
      },
      {
        type: BATTLE_TYPE.Resident,
        level: 8,
      },
    ],
    enemy: [],
    team: [
      {
        type: TEAM_TYPE.Mobility,
        level: 8,
      },
      {
        type: TEAM_TYPE.Charged,
        level: 2,
      },
    ],
  },
  {
    name: "七七",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/09/14/4328207/a8d9152cbec315bd3af1b81ab38bcbb8_2744380235787568847.png",
    element: ELEMENT_TYPE.Cryo,
    weapon: WEAPON_TYPE.Sword,
    battle: [
      {
        type: BATTLE_TYPE.Resident,
        level: 8,
      },
      {
        type: BATTLE_TYPE.BackGround,
        level: 3,
      },
    ],
    enemy: [
      {
        type: ENEMY_TYPE.Weaken,
        level: 3,
      }
    ],
    team: [
      {
        type: TEAM_TYPE.Treatment,
        level: 11,
      },
    ],
  },
  {
    name: "达达利亚",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/11/13/79683714/ede4db74ff5f46784c48a26bae407810_84074802520519805.png",
    element: ELEMENT_TYPE.Hydro,
    weapon: WEAPON_TYPE.Bow,
    battle: [
      {
        type: BATTLE_TYPE.QuickSwitch,
        level: 11,
      },
      {
        type: BATTLE_TYPE.Resident,
        level: 8,
      },
      {
        type: BATTLE_TYPE.BackGround,
        level: 3,
      },
    ],
    enemy: [],
    team: [
      {
        type: TEAM_TYPE.Berserk,
        level: 3,
      },
    ],
  },
  {
    name: "迪奥娜",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/11/13/79683714/388edca3eca68b5f52ee7fc2e1c6891e_7254442964581563215.png",
    element: ELEMENT_TYPE.Cryo,
    weapon: WEAPON_TYPE.Bow,
    battle: [
      {
        type: BATTLE_TYPE.Resident,
        level: 5,
      },
      {
        type: BATTLE_TYPE.BackGround,
        level: 3,
      },
    ],
    enemy: [
      {
        type: ENEMY_TYPE.Weaken,
        level: 5,
      },
    ],
    team: [
      {
        type: TEAM_TYPE.Shield,
        level: 8,
      },
      {
        type: TEAM_TYPE.Treatment,
        level: 5,
      },
      {
        type: TEAM_TYPE.Berserk,
        level: 5,
      },
      {
        type: TEAM_TYPE.Mobility,
        level: 5,
      },
    ],
  },
  {
    name: "钟离",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/12/02/79683714/2f041f81243e39c1ec2eb11de80d286c_351019689489206326.png",
    element: ELEMENT_TYPE.Geo,
    weapon: WEAPON_TYPE.LonGarm,
    battle: [
      {
        type: BATTLE_TYPE.QuickSwitch,
        level: 11,
      },
      {
        type: BATTLE_TYPE.BackGround,
        level: 5,
      },
      {
        type: BATTLE_TYPE.Resident,
        level: 5,
      },
    ],
    enemy: [
      {
        type: ENEMY_TYPE.Reduce,
        level: 11,
      },
      {
        type: ENEMY_TYPE.Control,
        level: 8,
      },
    ],
    team: [
      {
        type: TEAM_TYPE.Shield,
        level: 11,
      },
      {
        type: TEAM_TYPE.Treatment,
        level: 2,
      },
      {
        type: TEAM_TYPE.Mobility,
        level: 2,
      },
    ],
  },
  {
    name: "辛焱",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/12/02/79683714/c7b3665bd2b3ad209efc97568b557bd4_1094164531862604477.png",
    element: ELEMENT_TYPE.Pyro,
    weapon: WEAPON_TYPE.GreatSword,
    battle: [
      {
        type: BATTLE_TYPE.QuickSwitch,
        level: 11,
      },
      {
        type: BATTLE_TYPE.Resident,
        level: 8,
      },
      {
        type: BATTLE_TYPE.BackGround,
        level: 3,
      },
    ],
    enemy: [
      {
        type: ENEMY_TYPE.Reduce,
        level: 5,
      },
    ],
    team: [
      {
        type: TEAM_TYPE.Shield,
        level: 5,
      },
      {
        type: TEAM_TYPE.Berserk,
        level: 3,
      },
    ],
  },
  {
    name: "阿贝多",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/12/24/79683714/94f83e571af56dd826b3328a697f5106_4392078467778948636.png",
    element: ELEMENT_TYPE.Geo,
    weapon: WEAPON_TYPE.Sword,
    battle: [
      {
        type: BATTLE_TYPE.BackGround,
        level: 11,
      },
      {
        type: BATTLE_TYPE.QuickSwitch,
        level: 8,
      },
    ],
    enemy: [],
    team: [
      {
        type: TEAM_TYPE.Berserk,
        level: 5,
      },
    ],
  },
  {
    name: "甘雨",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/01/12/79683714/98b621e69fc78ed0682e3640ca25b70f_480038643635949740.png",
    element: ELEMENT_TYPE.Cryo,
    weapon: WEAPON_TYPE.Bow,
    battle: [
      {
        type: BATTLE_TYPE.Resident,
        level: 11,
      },
      {
        type: BATTLE_TYPE.BackGround,
        level: 5,
      },
      {
        type: BATTLE_TYPE.QuickSwitch,
        level: 3,
      },
    ],
    enemy: [
      {
        type: ENEMY_TYPE.Control,
        level: 3,
      },
    ],
    team: [
      {
        type: TEAM_TYPE.Berserk,
        level: 8,
      },
      {
        type: TEAM_TYPE.Mobility,
        level: 2,
      },
    ],
  },
  {
    name: "魈",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/02/03/79683714/668511c42d3299a5c66be98f720408e5_3932851024865379558.png",
    element: ELEMENT_TYPE.Anemo,
    weapon: WEAPON_TYPE.LonGarm,
    battle: [
      {
        type: BATTLE_TYPE.Resident,
        level: 11,
      },
      {
        type: BATTLE_TYPE.QuickSwitch,
        level: 5,
      },
    ],
    enemy: [],
    team: [
      {
        type: TEAM_TYPE.Mobility,
        level: 8,
      },
    ],
  },
  {
    name: "胡桃",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/03/03/4328207/6a54af5aca341883859f5d24da3000fe_2050065262186292792.png",
    element: ELEMENT_TYPE.Pyro,
    weapon: WEAPON_TYPE.LonGarm,
    battle: [
      {
        type: BATTLE_TYPE.Resident,
        level: 11,
      },
      {
        type: BATTLE_TYPE.QuickSwitch,
        level: 8,
      },
      {
        type: BATTLE_TYPE.BackGround,
        level: 3,
      },
    ],
    enemy: [],
    team: [
      {
        type: TEAM_TYPE.Mobility,
        level: 3,
      },
    ],
  },
];

export {
  CloudTeamConfig,
  WEIGHT,
  WEIGHT2,
  BATTLE_TYPE_TEXT,
  ENEMY_TYPE_TEXT,
  TEAM_TYPE_TEXT,
};

/**
 * 标签化数据结构：
权重分级：S、A、B、C、D 对应颜色，橙、紫、蓝、绿、灰
此分级仅代表自身各项能力的突出点，而不是和其他人横向比较。

标签类型：输出：驻场、后台、速切（一个人可以拥有多种）
元素：覆盖率（受到输出类型影响）
对敌：控制、增伤、减抗、减防、破盾
队伍：治疗、护盾、减伤、机动性
 */