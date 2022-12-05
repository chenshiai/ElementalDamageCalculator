import { ProfilePhoto } from '../profilePhoto';
import { Magnification } from '../magnification';

/** 攻击力%buff计算公式 */
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

/** 固定攻击力buff计算公式 */
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
    title: "班尼特",
    img: ProfilePhoto.Bennett,
    fields: [
      {
        name: "tips",
        label: "",
        placeholder: "美妙旅程：提升场上角色攻击力",
        type: "number",
        disabled: true,
      },
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
    title: "胡桃",
    img: ProfilePhoto.HuTao,
    fields: [
      {
        name: "tips",
        label: "",
        placeholder: "蝶引来生：提升自身攻击力",
        type: "number",
        disabled: true,
      },
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
    title: "九条裟罗",
    img: ProfilePhoto.KujoSara,
    fields: [
      {
        name: "tips",
        label: "",
        placeholder: "天狗咒雷：提升场上角色攻击力",
        type: "number",
        disabled: true,
      },
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
    title: "诺艾尔",
    img: ProfilePhoto.Noelle,
    fields: [
      {
        name: "tips",
        label: "",
        placeholder: "大扫除：提升自身攻击力",
        type: "number",
        disabled: true,
      },
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
    title: "荒泷一斗",
    img: ProfilePhoto.AratakiItto,
    fields: [
      {
        name: "tips",
        label: "",
        placeholder: "最恶鬼王·一斗轰临！！：提升自身攻击力",
        type: "number",
        disabled: true,
      },
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
