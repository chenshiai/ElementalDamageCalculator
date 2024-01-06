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
  [BATTLE_TYPE.Resident]: "驻场输出",
  [BATTLE_TYPE.BackGround]: "后台输出",
  [BATTLE_TYPE.QuickSwitch]: "速切爆发",
};

// 对敌影响
const ENEMY_TYPE = {
  /** 控制 */
  Control: "Control",
  /** 减防&减抗 */
  Reduce: "Reduce",
  ReduceDEF: "ReduceDEF",
  /** 破盾 */
  Break: "Break",
  /** 敌方削弱 */
  Weaken: "Weaken",
};

const ENEMY_TYPE_TEXT = {
  [ENEMY_TYPE.Control]: "控制效果",
  [ENEMY_TYPE.Reduce]: "抗性削减",
  [ENEMY_TYPE.ReduceDEF]: "防御减少",
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
  /** 附着 */
  Adhere: "Adhere",
};

const TEAM_TYPE_TEXT = {
  [TEAM_TYPE.Treatment]: "治疗能力",
  [TEAM_TYPE.Shield]: "护盾产生",
  [TEAM_TYPE.DMGreduction]: "减伤强度",
  [TEAM_TYPE.Mobility]: "机动性",
  [TEAM_TYPE.Berserk]: "增伤效果",
  [TEAM_TYPE.Charged]: "充能效果",
  [TEAM_TYPE.Adhere]: "元素附着",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/140486f8ac63b834bb8b9a01c4bdf6fd_5060539351983062558.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Pyro,
    weapon: WEAPON_TYPE.Bow,
    battle: [
      {
        type: BATTLE_TYPE.QuickSwitch,
        level: 10,
      },
      {
        type: BATTLE_TYPE.Resident,
        level: 6,
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
        level: 5,
        astro: 6,
      },
      {
        type: TEAM_TYPE.Mobility,
        level: 5,
        astro: 6,
      },
    ],
  },
  {
    name: "凯亚",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/70e2863a699178ff5c08e88437889638_675962255150258828.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/260f74213dfb375810b9b452b45b1934_9012010843165140509.png?x-oss-process=image/quality,q_75/resize,s_120",
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
        type: ENEMY_TYPE.ReduceDEF,
        level: 5,
      }
    ],
    team: [],
  },
  {
    name: "琴",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/64666d9da07de3b4d7050592a2b1edfc_6826199175934463568.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/0e416ead4eb9fb98170fd91170f70caf_9067225062861570256.png?x-oss-process=image/quality,q_75/resize,s_120",
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
        type: ENEMY_TYPE.ReduceDEF,
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/07/01/75276545/f3906dccf271d103fdbe50986230b82c_5688735001611237151.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/e396fa21894b8b26a9a32146a0ee032e_5925359947856471422.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/10a9e992bf121129710d5d34703ebc7a_3094624363673748747.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/c56abcdd01f2599fbd68a317a5d6d6ed_2749907829167353353.png?x-oss-process=image/quality,q_75/resize,s_120",
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
        type: ENEMY_TYPE.ReduceDEF,
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/07/01/75276545/018794b99d3d1eed8fb20994c64832e9_4671215595784997889.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/40983321f9ddffbbf8755982f7ba9837_7665543532618873826.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/a592a06ef1f3a9720a85d252664b590a_4791369803989386444.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/cdac1c497cadc3cf0932cb29351e0fb7_7315086026986353347.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/9ac338630eb5a7c12a00fecbf7c5eb90_5333896644728325230.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/771f561ab0a87eaedcac8a8b43ec1f07_503752095979370097.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/fde519d073451f60d70ead08f3d78e08_2962322697270044964.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/8de98675d470f0345e8bbb6c2b67a258_2905053634606221085.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/84c364d0b4f8497ded8423a53b6b652f_2614103638613273137.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/b2777a5d57b545e389a743a40cdad19e_542790380771394015.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/bf05efba5e494f8a030c794059b38b76_603861620414750957.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/10c392548110876ef9485b54732c97bf_1743134530748235651.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/4d7f792d7099f8f22aa324e41acaf552_2707737071030016275.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/2c94d9a51bee6b55e32b2c2c9e5b2167_3089281923490794900.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/833c4773288776c0326b48db64e73e73_7584969408292565105.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/521eaf06e318a8ceaf23371bb8fbb30a_6549817404881880849.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/c0f87c6b4784a866160a0f37c2571630_32895325137684348.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    name: "烟绯",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/86736a70c9670129ccd9ee9e7edc45c5_7784983152471826322.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Pyro,
    weapon: WEAPON_TYPE.Magic,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "甘雨",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/bf8c7c02828781c393c92fb29e018103_519536758251054032.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/6409b26d94f66cae5253903efe509649_4039198815542244801.png?x-oss-process=image/quality,q_75/resize,s_120",
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
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/2ba444aec8dbddf1e2314f2c523e1e31_244848669304650705.png?x-oss-process=image/quality,q_75/resize,s_120",
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
  {
    name: "优菈",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/effec245bdf118538d13ddaef6cfb70a_7031930263255559108.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Cryo,
    weapon: WEAPON_TYPE.GreatSword,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "罗莎莉亚",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/06/10/75276545/51f38857188b696d23356e4bba6be23e_9158439165424768274.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Cryo,
    weapon: WEAPON_TYPE.LonGarm,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "枫原万叶",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/07/01/75276545/d6140a0a33f9f0800f6fba2839750a9f_355310454552191507.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Anemo,
    weapon: WEAPON_TYPE.Sword,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "神里绫华",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/11/02/75379475/5356eb1558c9eac8536fe0a29971cc27_4866312682553610178.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Cryo,
    weapon: WEAPON_TYPE.Sword,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "宵宫",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/11/02/75379475/e041144c94a4041be5c40e1fcedad6b9_1453927393949593300.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Pyro,
    weapon: WEAPON_TYPE.Bow,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "早柚",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/11/02/75379475/4ba93de61668ff7d1257aea246d0193d_7926166531207679022.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Anemo,
    weapon: WEAPON_TYPE.GreatSword,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "雷电将军",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/09/01/75379475/12b5240ecd6c88986c69339ecba7e6bd_4315368375887757892.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Electro,
    weapon: WEAPON_TYPE.LonGarm,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "九条裟罗",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/11/02/75379475/6aca9977c55c6ca83ade6d5593173b25_5748245248319174043.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Electro,
    weapon: WEAPON_TYPE.Bow,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "珊瑚宫心海",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/11/02/75379475/9f39bbe75aeda34accf958ecafccb5e8_749944433300006002.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Hydro,
    weapon: WEAPON_TYPE.Magic,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "埃洛伊",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/11/05/75379475/ed7ff4c06690871a93dd7d50ecd195ff_8016426398593472960.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Cryo,
    weapon: WEAPON_TYPE.Bow,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "托马",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/11/02/75379475/35536a7c0817ed2d30931bca5b4ad625_8868436370119472993.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Pyro,
    weapon: WEAPON_TYPE.LonGarm,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "荒泷一斗",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/12/14/75379475/744569537cbc493fa96d3930be3d6d87_6572446832973158295.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Geo,
    weapon: WEAPON_TYPE.GreatSword,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "五郎",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/12/14/75379475/627c335d187d2b6ca362f2d3518d7b85_6343066012109321963.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Geo,
    weapon: WEAPON_TYPE.Bow,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "申鹤",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2022/01/05/16314655/e2dfeee83654c0a6a7436b7c120c105a_6628180966971160404.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Cryo,
    weapon: WEAPON_TYPE.LonGarm,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "云堇",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2022/01/05/16314655/6f4bbe7d060f72a0c84e868887ac7a32_4711867403945994990.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Geo,
    weapon: WEAPON_TYPE.LonGarm,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "八重神子",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2022/02/15/6276411/2a54cd4008e8bc398f3f8bdc08225048_2883595654384922672.jpg?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Electro,
    weapon: WEAPON_TYPE.Magic,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "夜兰",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2022/05/10/4328207/79396e8f1225b66e201036e086dd2d8a_128490390219389789.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Hydro,
    weapon: WEAPON_TYPE.Bow,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "久岐忍",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2022/05/10/4328207/33c41932d1b5531ac73bca243c761816_9206912725698153960.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Electro,
    weapon: WEAPON_TYPE.Sword,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "鹿野苑平藏",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2022/07/09/4328207/cc145e6cd2f0dacb39ce36f7ebf257fc_7138351098291917226.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Anemo,
    weapon: WEAPON_TYPE.Magic,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "神里绫人",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/d16fbf95d62771daa65ab5d04f6abbd5_5682396699474055.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Hydro,
    weapon: WEAPON_TYPE.Sword,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "柯莱",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/23/75379475/a0150a8489abc5011a44b4f6419ccec7_2812696932246907984.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Dendro,
    weapon: WEAPON_TYPE.Bow,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "提纳里",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/23/75379475/6953568084aaa02bc7a774430f1f3b56_9172357402103659910.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Dendro,
    weapon: WEAPON_TYPE.Bow,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "多莉",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2022/09/07/195563531/844969ce9b8bc5ebf9d1be69d7b6d7b2_4659886404719657655.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Electro,
    weapon: WEAPON_TYPE.GreatSword,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "赛诺",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2022/09/20/4328207/b3847d2416145eb8bb6343302e2b4dca_6997837798254516316.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Electro,
    weapon: WEAPON_TYPE.LonGarm,
    battle: [],
    enemy: [],
    team: [],
  },
  {
    name: "坎蒂丝",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2022/09/20/4328207/0587df6ac5144c9dd023b0f73ceaf8be_7837788427682725710.png?x-oss-process=image/quality,q_75/resize,s_120",
    element: ELEMENT_TYPE.Hydro,
    weapon: WEAPON_TYPE.LonGarm,
    battle: [],
    enemy: [],
    team: [],
  },
];

export {
  CloudTeamConfig,
  WEIGHT2,
  BATTLE_TYPE_TEXT,
  ENEMY_TYPE_TEXT,
  TEAM_TYPE_TEXT,
};

/** 旧案
 * 标签化数据结构：
权重分级：S、A、B、C、D 对应颜色，橙、紫、蓝、绿、灰
此分级仅代表自身各项能力的突出点，而不是和其他人横向比较。

标签类型：输出：驻场、后台、速切（一个人可以拥有多种）
元素：覆盖率（受到输出类型影响）
对敌：控制、增伤、减抗、减防、破盾
队伍：治疗、护盾、减伤、机动性
 */