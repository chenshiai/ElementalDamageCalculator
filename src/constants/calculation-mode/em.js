import { ProfilePhoto } from '../profilePhoto';

/** 元素精通buff计算公式 */
export const EmFixedCalculationMode = [
  {
    title: "直接加精通",
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
    title: "砂糖·小小的彗风",
    img: ProfilePhoto.Sucrose,
    fields: [
      {
        name: "em",
        label: "元素精通",
        type: "digit",
        placeholder: "输入砂糖的元素精通",
      },
    ],
    getResult: ({ em }) => {
      return Math.round(em * 0.2);
    },
  },
  {
    title: "纳西达·净善摄受明论",
    img: ProfilePhoto.Nahida,
    fields: [
      {
        name: "em",
        label: "元素精通",
        type: "digit",
        placeholder: "输入队伍中最高的元素精通",
      },
    ],
    getResult: ({ em }) => {
      return Math.min(Math.round(em * 0.25), 250);
    },
  },
];