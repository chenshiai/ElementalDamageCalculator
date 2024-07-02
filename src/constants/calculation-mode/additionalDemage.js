
import { ProfilePhoto, WeponIcon } from '../profilePhoto';
import { Magnification } from '../magnification';

function LVLimit(lv) {
  lv = Math.min(13, lv);
  lv = Math.max(1, lv);
  return lv;
}

/** 附加伤害计算公式 */
export const AdditionalDamageMode = [
  {
    title: "伤害值提高",
    children: [
      {
        title: "自定义",
        fields: [
          {
            name: "def",
            label: "基础属性",
            placeholder: "输入攻击力、防御力、生命值或元素精通",
            type: "number",
          },
          {
            name: "rate",
            label: "转换倍率%",
            placeholder: "基于攻击、防御、生命或精通的百分之多少",
            type: "number",
          },
          {
            name: "text",
            label: "",
            placeholder: "适用武器：辰砂之纺锤、赤角石溃杵和猎人之径",
            type: "text",
            disabled: true,
          },
          {
            name: "text2",
            label: "",
            placeholder: "适用圣遗物：来歆余响、昔时之歌",
            type: "text",
            disabled: true,
          },
        ],
        getResult: ({ def, rate }) => def * rate / 100,
      },
    ]
  },
  {
    title: "阿蕾奇诺",
    img: ProfilePhoto.Arlecchino,
    children: [
      {
        title: "死红之宴",
        fields: [
          {
            name: "con",
            label: "生命之契",
            placeholder: "输入角色的生命之契%(30~200)",
            type: "number",
          },
          {
            name: "lv",
            label: "天赋等级",
            placeholder: "输入角色的天赋等级",
            type: "number",
          },
          {
            name: "atk",
            label: "攻击力",
            placeholder: "输入角色的攻击力",
            type: "number",
          }
        ],
        getResult: ({con, lv, atk}) => {
          lv = LVLimit(lv);
          return atk * con / 100 * Magnification.Arlecchino[lv - 1]; 
        },
      }
    ],
  },
  {
    title: "云堇",
    img: ProfilePhoto.YunJin,
    children: [
      {
        title: "飞云旗阵",
        fields: [
          {
            name: "def",
            label: "防御力",
            placeholder: "输入角色的防御力",
            type: "number",
          },
          {
            name: "lv",
            label: "天赋等级",
            placeholder: "输入角色的天赋等级",
            type: "number",
          },
          {
            name: "clas",
            label: "元素数量",
            placeholder: "输入队伍元素种类的数量",
            type: "number",
          },
        ],
        getResult: ({ def, lv, clas }) => {
          lv = LVLimit(lv);
          return def * ([0.025, 0.05, 0.075, 0.115][clas - 1] + Magnification.YunJin[lv - 1]);
        },
      },
    ]
  },
  {
    title: "钟离",
    img: ProfilePhoto.ZhongLi,
    children: [
      {
        title: "普攻·重击·下落",
        fields: [
          {
            name: "hp",
            label: "生命值",
            placeholder: "输入角色的生命值",
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
    title: "赛诺",
    img: ProfilePhoto.Cyno,
    children: [
      {
        title: "普通攻击",
        fields: [
          {
            name: "ele",
            label: "元素精通",
            placeholder: "输入角色的元素精通",
            type: "number",
          },
          {
            name: "tips",
            label: "",
            placeholder: "伤害提高值：元素精通的150%",
            type: "number",
            disabled: true,
          },
        ],
        getResult: ({ ele }) => ele * 1.5,
      },
      {
        title: "渡荒之雷",
        fields: [
          {
            name: "ele",
            label: "元素精通",
            placeholder: "输入角色的元素精通",
            type: "number",
          },
          {
            name: "tips",
            label: "",
            placeholder: "伤害提高值：元素精通的250%",
            type: "number",
            disabled: true,
          },
        ],
        getResult: ({ ele }) => ele * 2.5,
      },
    ]
  },
  {
    title: "申鹤",
    img: ProfilePhoto.ShenHe,
    children: [
      {
        title: "箓灵",
        fields: [
          {
            name: "atk",
            label: "攻击力",
            placeholder: "输入角色的攻击力",
            type: "number",
          },
          {
            name: "lv",
            label: "天赋等级",
            placeholder: "输入角色的天赋等级",
            type: "number",
          },
        ],
        getResult: ({ atk, lv }) => {
          lv = LVLimit(lv);
          return atk * Magnification.ShenHe[lv - 1];
        },
      },
    ]
  },
  {
    title: "荒泷一斗",
    img: ProfilePhoto.AratakiItto,
    children: [
      {
        title: "荒泷逆袈裟",
        fields: [
          {
            name: "def",
            label: "防御力",
            placeholder: "输入角色的防御力",
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
    title: "心海",
    img: ProfilePhoto.Kokomi,
    children: [
      {
        title: "普通攻击",
        fields: [
          {
            name: "hp",
            label: "生命值",
            type: "number",
            placeholder: "输入角色的生命值",
          },
          
          {
            name: "healRate",
            label: "治疗加成%",
            type: "number",
            placeholder: "输入角色的治疗加成",
          },
          {
            name: "lv",
            label: "天赋等级",
            placeholder: "输入角色的天赋等级",
            type: "number",
          },
          {
            name: "tips",
            label: "",
            placeholder: "生命值附加倍率额外提升，基于治疗加成的15%",
            type: "number",
            disabled: true,
          },
        ],
        getResult: ({ hp, lv, healRate }) => {
          lv = LVLimit(lv);
          return hp * (Magnification.Kokomi.NormalAttack[lv - 1] + healRate / 100 * 0.15);
        },
      },
      {
        title: "重击",
        fields: [
          {
            name: "hp",
            label: "生命值",
            type: "number",
            placeholder: "输入角色的生命值",
          },
          
          {
            name: "healRate",
            label: "治疗加成%",
            type: "number",
            placeholder: "输入角色的治疗加成",
          },
          {
            name: "lv",
            label: "天赋等级",
            placeholder: "输入角色的天赋等级",
            type: "number",
          },
          {
            name: "tips",
            label: "",
            placeholder: "生命值附加倍率额外提升，基于治疗加成的15%",
            type: "number",
            disabled: true,
          },
        ],
        getResult: ({ hp, lv, healRate }) => {
          lv = LVLimit(lv);
          return hp * (Magnification.Kokomi.ChargedAttack[lv - 1] + healRate / 100 * 0.15);
        },
      },
      {
        title: "化海月",
        fields: [
          {
            name: "hp",
            label: "生命值",
            type: "number",
            placeholder: "输入角色的生命值",
          },
          {
            name: "lv",
            label: "天赋等级",
            placeholder: "输入角色的天赋等级",
            type: "number",
          },
        ],
        getResult: ({ hp, lv }) => {
          lv = LVLimit(lv);
          return hp * Magnification.Kokomi.BakeKurage[lv - 1];
        },
      },
    ],
  },
  {
    title: "神里绫人",
    img: ProfilePhoto.KamisatoAyato,
    children: [
      {
        title: "泷廻鉴花·浪闪",
        fields: [
          {
            name: "hp",
            label: "生命值",
            placeholder: "输入角色的生命值",
            type: "number",
          },
          {
            name: "lv",
            label: "天赋等级",
            placeholder: "输入角色的天赋等级",
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
          lv = LVLimit(lv);
          return hp * Magnification.KamisatoAyato[lv - 1];
        },
      },
    ]
  },
  {
    title: "托马",
    img: ProfilePhoto.Thoma,
    children: [
      {
        title: "炽火崩破",
        fields: [
          {
            name: "hp",
            label: "生命值",
            placeholder: "输入角色的生命值",
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
    title: "阿贝多",
    img: ProfilePhoto.Albedo,
    children: [
      {
        title: "诞生式·大地之潮",
        fields: [
          {
            name: "def",
            label: "防御力",
            placeholder: "输入角色的防御力",
            type: "number",
          },
          {
            name: "num",
            label: "生灭计数",
            placeholder: "输入生灭计数的层数",
            type: "number",
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
    title: "五郎",
    img: ProfilePhoto.Gorou,
    children: [
      {
        title: "犬坂吠吠方圆阵",
        fields: [
          {
            name: "def",
            label: "防御力",
            placeholder: "输入角色的防御力",
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
    title: "胡桃",
    img: ProfilePhoto.HuTao,
    children: [
      {
        title: "血梅香",
        fields: [
          {
            name: "hp",
            label: "生命值",
            placeholder: "输入角色的生命值",
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
    title: "不灭月华",
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
