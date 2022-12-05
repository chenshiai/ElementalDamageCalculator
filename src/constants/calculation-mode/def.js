import { ProfilePhoto } from '../profilePhoto';
import { Magnification } from '../magnification';

/** 防御力%buff计算公式 */
export const DefPercentCalculationMode = [
  {
    title: "直接加防%",
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

export const DefFixedCalculationMode = [
  {
    title: "直接加防",
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
    title: "五郎",
    img: ProfilePhoto.Gorou,
    fields: [
      {
        name: "tips",
        label: "",
        placeholder: "犬坂吠吠方圆阵：提升场上角色防御力",
        type: "number",
        disabled: true,
      },
      {
        name: "lv",
        label: "天赋等级",
        type: "digit",
        placeholder: "输入五郎元素战技等级",
      },
    ],
    getResult: ({ lv}) => {
      lv = Math.min(13, lv);
      lv = Math.max(1, lv);
      return Magnification.Gorou[lv - 1];
    },
  },
];