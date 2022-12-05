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
    title: "砂糖",
    img: ProfilePhoto.Sucrose,
    fields: [
      {
        name: "tips",
        label: "",
        placeholder: "小小的彗风：提升队友元素精通",
        type: "number",
        disabled: true,
      },
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
    title: "纳西达",
    img: ProfilePhoto.Nahida,
    fields: [
      {
        name: "tips",
        label: "",
        placeholder: "净善摄受明论：提升场上角色元素精通",
        type: "number",
        disabled: true,
      },
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