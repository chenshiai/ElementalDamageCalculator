<template>
  <tab-title>一些常见问题</tab-title>
  <span class="question-title">反馈渠道</span>
  <div>
    如果对这个计算器有什么看法或建议，可以在这篇帖子下留言反馈。
    <p>
      帖子链接:
      <a href="https://bbs.mihoyo.com/ys/article/4763486">
        https://bbs.mihoyo.com/ys/article/4763486
      </a>
    </p>
  </div>
  <span class="question-title">敌人抗性是多少</span>
  <div>
    <img src="../assets/IMG_1457.png" class="question-img" />
    <p>
      帖子链接:
      <a href="https://nga.178.com/read.php?tid=24079044&forder_by=postdatedesc&rand=277&rand=230">
        https://nga.178.com/read.php?tid=24079044&forder_by=postdatedesc&rand=277&rand=230
      </a>
    </p>
  </div>

  <span class="question-title">基础伤害数值来源</span>
  <div>
    超载、感电、超导、扩散、碎冰能打多少伤害——鈴@米游社【空荧酒馆】
    <p>
      帖子链接:
      <a href="https://bbs.mihoyo.com/ys/article/2215872">
        https://bbs.mihoyo.com/ys/article/2215872
      </a>
    </p>
  </div>
  <span class="question-title">伤害计算的公式</span>
  <div>
    《伤害构成论》原神伤害是怎么算的——白猫大人@米游社
    <p>
      帖子链接:
      <a href="https://bbs.mihoyo.com/ys/article/4458583">
        https://bbs.mihoyo.com/ys/article/4458583
      </a>
    </p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TabTitle from "../component/TabTitle.vue";
import { Image as VanImage } from "vant";

export default defineComponent({
  name: "question",

  components: {
    [TabTitle.name]: TabTitle,
    [VanImage.name]: VanImage,
  },
});
</script>

<style>
.question-img {
  width: 100%;
}
</style>
