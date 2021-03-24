const ELEMENT_TYPE = {
  FIRE: "火",
  WATER: "水",
  ICE: "冰",
  RAY: "雷",
  WIND: "风",
  GEO: "岩",
};

const WEAPON_TYPE = {
  SWORD: "单手剑",
  GREATSWORD: "双手剑",
  BOW: "弓",
  MAGIC: "法器",
  LONGARM: "长柄",
};

const BATTLE_TYPE = {
  RESIDENT: "RESIDENT",
  BACKGROUND: "BACKGROUND",
  QUICKSWITCH: "QUICKSWITCH"
},

const cloudTeamConfig = [
  {
    name: "温迪",
    element: ELEMENT_TYPE.WIND,
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/03/10/4328207/3223bc2038ec73ad9ea8919492e4b326_1504309581860736432.png?x-oss-process=image/quality,q_75/resize,s_108",
  },
  {
    name: "莫娜",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/09/14/75379477/5ddec58ede0a4193d1bd72f0f792b4fa_1223323503797186476.png?x-oss-process=image/quality,q_75/resize,s_108",
  },
  {
    name: "甘雨",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2021/01/11/9918847/b8b9ad6acfc2fbdbe831d75c3e6bd7b2_6441210233785376592.png?x-oss-process=image/quality,q_75/resize,s_108",
  },
  {
    name: "迪奥娜",
    avatar: "https://uploadstatic.mihoyo.com/ys-obc/2020/11/11/4328207/457c28876c3a5cdd8760cad2e8b6c492_4524355562239690235.png?x-oss-process=image/quality,q_75/resize,s_108",
  },
];

export default cloudTeamConfig;

/**
 * 标签化数据结构：
权重分级：S、A、B、C、D 对应颜色，橙、紫、蓝、绿、灰
此分级仅代表自身各项能力的突出点，而不是和其他人横向比较。

标签类型：输出：驻场、后台、速切（一个人可以拥有多种）
元素：覆盖率（受到输出类型影响）
对敌：控制、增伤、减抗、减防、破盾
队伍：治疗、护盾、减伤、机动性
 */