const updateLog = [
  {
    data: "2025-01-10",
    msg: ["新增了旅行者的数据。"]
  },
  {
    data: "2025-01-03",
    msg: ["修复了玛薇卡天赋无法吃到班尼特元素爆发等攻击力加成的bug。"]
  },
  {
    data: "2025-01-02",
    msg: ["新增玛薇卡、茜特菈莉及五星武器数值。"]
  },
  {
    data: "2024-12-30",
    msg: ["新增部分角色技能的治疗和护盾数值计算。"]
  },
  {
    data: "2024-12-23",
    msg: ["文案、样式调整。"]
  },
  {
    data: "2024-12-11",
    msg: ["修复命座天赋等级提升不生效的bug。"]
  },
  {
    data: "2024-12-06",
    msg: ["修复部分角色错误数据。", "调整了圣遗物词条文案。"]
  },
  {
    data: "2024-11-23",
    msg: ["新增圣遗物历史数据保存功能，现在可以更方便调整不同的圣遗物了。"]
  },
  {
    data: "2024-11-21",
    msg: ["新增5.2版本角色和武器数据。", "修复了克洛琳德伤害类型错误的bug。"]
  },
  {
    data: "2024-11-13",
    msg: ["剧变反应伤害数据已更新至5.2版本。"]
  },
  {
    data: "2024-11-01",
    msg: ["新增纳塔的四星武器【硕果钩】【弥坚骨】【镇山之钉】数据。"]
  },
  {
    data: "2024-10-26",
    msg: ["新增【云上辉星】角色伤害计算（测试版）。"]
  },
  {
    data: "2024-10-23",
    msg: ["【伤害加成便签】新增勇者4件套的效果。"]
  },
  {
    data: "2024-09-08",
    msg: ["修复了玛拉妮元素战技的【伤害提高值】快捷计算的bug。"]
  },
  {
    data: "2024-09-01",
    msg: ["新增了玛拉妮元素战技的【伤害提高值】计算。"]
  },
  {
    data: "2024-06-20",
    msg: ["修复了护盾承伤显示异常的bug。"]
  },
  {
    data: "2024-04-30",
    msg: ["新增了阿蕾奇诺死红之宴的伤害提高值的快捷计算。", "调整了数据结构，过往保存的数据会失效。"]
  },
  {
    data: "2024-04-13",
    msg: ["补充了夏沃蕾的图标，修复了神里绫人伤害提高值的计算bug。"],
  },
  {
    data: "2024-01-03",
    msg: ["新增便签弹窗的布局调整，在选择时会自动填入默认的便签名称。", "调整了【伤害提高值】的说明文本。"],
  },
  {
    data: "2023-05-02",
    msg: ["新增了白术天赋的增伤计算。"],
  },
  {
    data: "2023-02-27",
    msg: ["将【伤害提高值】标签化了，数据结构发生变化，过往保存的数据中涉及【伤害提高值】的计算不可用。", "删除了部分滑块功能。"],
  },
  {
    data: "2023-02-24",
    msg: ["调整了部分样式、文本。", "新增了基础属性倍率的复合计算。"],
  },
  {
    data: "2022-12-06",
    msg: ["优化了部分样式、文本。", "新增了详细的护盾吸收量计算。"],
  },
  {
    data: "2022-12-05",
    msg: ["新增了乐园遗落之花的伤害计算。"],
  },
  {
    data: "2022-10-15",
    msg: ["在剧变反应伤害页面，新增妮露天赋的伤害提升计算。"],
  },
  {
    data: "2022-09-04",
    msg: ["新增了元素精通便签组。", "新增了超激化与蔓激化各自的的伤害提升值。", "调整了一些(?)的说明文本。"],
  },
  {
    data: "2022-09-02",
    msg: ["新增了伤害组成查看，可以看见各个伤害区间的占比。", "伤害加成标签组新增了提纳里的天赋计算。"],
  },
  {
    data: "2022-08-26",
    msg: ["新增草元素相关反应伤害。", "新增激化反应伤害计算，需要输入正确的角色等级和元素精通。", "算法更新。原【精通加成%】变更为【元素精通】3.0版本之前保存的数据无法重算。"],
  },
  {
    data: "2022-06-21",
    msg: ["新增基础属性选择，可以选择生命值、防御力作为技能倍率的基础数值了。", "新增固定攻击力加成便签组，可以计算班尼特，九条裟罗的攻击力buff。", "调整了部分样式与布局，【附加伤害值】更名为【伤害值提高】。", "减防和无视防御区分开了，更加直观。"],
  },
  {
    data: "2021-12-26",
    msg: ["调整了部分样式与布局。"],
  },
  {
    data: "2021-12-10",
    msg: ["调整了部分数值的上下排序，更契合在游戏内查看数值的顺序。", "伤害倍率%精确到小数点后两位，现在可以计算雷神开眼后的伤害提升了。"],
  },
  {
    data: "2021-11-29",
    msg: ["【单次伤害计算】布局调整，新增额外倍率乘区，新增附加伤害计算，现在可以更便捷的计算宵宫、钟离、心海的伤害了。"],
  },
  {
    data: "2021-09-25",
    msg: ["现已补充结晶盾数值，【伤害加成标签组】新增枫原万叶与绝缘之旗印的便捷计算。"],
  },
  {
    data: "2021-09-05",
    msg: ["【查看数据】现在支持重新计算数据，注意：在9月5号之前保存的数据不支持标签组重算。"],
  },
  {
    data: "2021-08-08",
    msg: ["【查看数据】现在支持删除已保存的数据。", "更新了2.0版本敌人抗性表。"],
  },
  {
    data: "2021-06-09",
    msg: ["1.6版本剧变反应伤害的基础数值更新，剧变反应公式更新，结晶盾数值暂未更新。"],
  },
  {
    data: "2021-05-06",
    msg: ["数据保存bug修复。该bug导致数据保存时绿字攻击力会计算两次攻击力buff加成。即在本次bug修复前，保存了有攻击力buff的数据都是不准确的。"],
  },
  {
    data: "2021-03-19",
    msg: ["新增【攻击力加成%】标签组，可以快速查看讨龙英杰传、双火等攻击力加成效果，也可以自主添加标签。"],
  },
  {
    data: "2021-03-11",
    msg: ["更新了页面的字体以及部分描述。"],
  },
  {
    data: "2021-03-08",
    msg: ["新增【常见问题】页，可以查看一些计算方式和数据来源。部分使用体验优化，标签组现在自动本地缓存了。"],
  },
  {
    data: "2021-03-05",
    msg: ["新增【攻击力总计】，攻击力调整更加直观；新增了【伤害倍率便签】，让伤害倍率调整更方便快捷。"],
  },
  {
    data: "2021-03-03",
    msg: [" 单次伤害计算已完成。"],
  },
  {
    data: "2021-02-26",
    msg: [" 角色等级初始值设置为80级，元素精通初始值设置为786，增幅反应加成刚好是100整。"],
  },
]

window.updateLog = updateLog