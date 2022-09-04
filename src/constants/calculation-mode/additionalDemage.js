
import { ProfilePhoto, WeponIcon } from '../profilePhoto';
import { Magnification } from '../magnification';

/** 附加伤害计算公式 */
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
            placeholder: "输入攻击力、防御力、生命值或元素精通",
            type: "number",
            required: true,
          },
          {
            name: "rate",
            label: "转换倍率%",
            placeholder: "基于攻击、防御、生命或精通的百分之多少",
            type: "number",
            required: true,
          },
          {
            name: "cha",
            label: "",
            placeholder: "适用角色：云堇、申鹤",
            type: "number",
            disabled: true,
          },
          {
            name: "cha1",
            label: "",
            placeholder: "适用武器：辰砂之纺锤、赤角石溃杵和猎人之径",
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
    title: "神里绫人·神里流·镜花",
    img: ProfilePhoto.KamisatoAyato,
    children: [
      {
        title: "泷廻鉴花·浪闪",
        fields: [
          {
            name: "hp",
            label: "生命值",
            placeholder: "输入角色的生命值",
            required: true,
            type: "number",
          },
          {
            name: "lv",
            label: "天赋等级",
            placeholder: "输入角色的天赋等级",
            required: true,
            type: "number",
          },
          {
            name: "tips",
            label: "",
            placeholder: "默认浪闪满四层计算",
            type: "number",
            disabled: true,
          },
        ],
        getResult: ({ hp, lv }) => {
          lv = Math.min(13, lv);
          lv = Math.max(1, lv);
          return hp * Magnification.KamisatoAyato[lv - 1];
        },
      },
    ]
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
  // {
  //   title: "不灭月华·白夜皓月",
  //   img: WeponIcon.EverlastingMoonglow,
  //   children: [
  //     {
  //       title: "普通攻击",
  //       fields: [
  //         {
  //           name: "hp",
  //           label: "生命值",
  //           placeholder: "输入角色的生命值",
  //           required: true,
  //           type: "number",
  //         },
  //         {
  //           name: "rate",
  //           label: "提升倍率%",
  //           placeholder: "输入武器特效的倍率",
  //           required: true,
  //           type: "number",
  //         }
  //       ],
  //       getResult: ({ hp, rate }) => hp * rate / 100,
  //     },
  //   ]
  // },
];
