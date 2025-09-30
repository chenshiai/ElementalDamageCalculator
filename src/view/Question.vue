<template>
  <TabTitle>问题与反馈</TabTitle>
  <span class="question-title">【反馈渠道】</span>
  <div>
    如果对这个计算器有什么看法、建议或是勘误，可以在这篇帖子下留言反馈。
    <p>
      <a href="https://bbs.mihoyo.com/ys/article/4363651" referrerpolicy="origin-when-cross-origin" target="_blank">
        元素精通计算器——ChenShiAi@米游社
      </a>
    </p>
  </div>
  <br />
  <span class="question-title">【误差来自哪里】</span>
  <div>
    人物属性、武器属性、圣遗物属性、技能倍率等数值看起来是整数，但在游戏内实际上是精确到后两位小数的。
    举个例子：面板显示的「攻击力+20」，实际可能是「攻击力+20.25」。在角色只装备两件精通主属性圣遗物时，会发现元素精通是373而不是374，主属性「元素精通+187」，实际上是「元素精通+186.5」，。
  </div>
  <br />
  <span class="question-title">【基础伤害数值来源】</span>
  <div>
    <a href="https://bbs.mihoyo.com/ys/article/2215872" referrerpolicy="origin-when-cross-origin" target="_blank">
      超载、感电、扩散、超导、碎冰能打多少伤害【空荧酒馆】——鈴@米游社
    </a>
  </div>
  <br />
  <span class="question-title">【伤害计算的公式】</span>
  <div>
    <a href="https://www.miyoushe.com/ys/article/29805188" referrerpolicy="origin-when-cross-origin" target="_blank">
      《伤害乘区论》3.1 黄金的梦乡！——白猫大人@米游社
    </a>
  </div>
</template>

<script setup>
import TabTitle from "@/component/TabTitle.vue";
</script>
