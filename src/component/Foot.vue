<template>
  <div class="foot">
    <div class="foot-title" @click="show = true">更新日志</div>
    <van-popup
      teleport="#app"
      position="bottom"
      v-model:show="show"
      class="foot-popup"
    >
      <p>
        2021-09-25：【精通伤害】现已补充结晶盾数值，【伤害加成标签组】新增枫原万叶与绝缘之旗印的便捷计算。
      </p>
      <p>
        2021-09-05：【查看数据】现在支持重新计算数据，注意：在9月5号之前保存的数据不支持标签组重算。
      </p>
      <p>
        2021-08-08：【查看数据】现在支持删除已保存的数据；更新了2.0版本敌人抗性表；
      </p>
      <p>
        2021-06-09：1.6版本剧变反应伤害的基础数值更新，剧变反应公式更新，结晶盾数值暂未更新。
      </p>
      <p>
        2021-05-06：数据保存bug修复。该bug导致数据保存时绿字攻击力会计算两次攻击力buff加成。即在本次bug修复前，保存了有攻击力buff的数据都是不准确的。
      </p>
      <p>
        2021-03-19：新增【攻击力加成%】标签组，可以快速查看讨龙英杰传、双火等攻击力加成效果，也可以自主添加标签。
      </p>
      <p>2021-03-11：更新了页面的字体以及部分描述。</p>
      <p>
        2021-03-08：新增【常见问题】页，可以查看一些计算方式和数据来源。部分使用体验优化，标签组现在自动本地缓存了。
      </p>
      <p>
        2021-03-05:
        新增【攻击力总计】，攻击力调整更加直观；新增了【伤害加成便签】，让伤害加成调整更方便快捷。
      </p>
      <p>
        2021-03-03: 单次伤害计算已完成。下一步计划，部分角色特殊加成伤害计算。
      </p>
      <p>
        2021-02-26:
        角色等级初始值设置为80级，元素精通初始值设置为786，增幅反应加成刚好是100整。
      </p>
    </van-popup>
  </div>
</template>

<script>
import { Popup } from "vant";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "foot",

  components: {
    [Popup.name]: Popup,
  },

  setup() {
    const show = ref(false);
    return { show };
  },
});
</script>

<style>
.foot {
  font-size: 14px;
}
.foot-title {
  text-align: center;
  line-height: 60px;
  margin-bottom: 30px;
}
.foot-popup {
  padding: 16px;
  box-sizing: border-box;
  height: 55%;
}
</style>