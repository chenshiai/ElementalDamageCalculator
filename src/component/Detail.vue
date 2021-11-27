<template>
  <div class="detail" @click="open = keep || !open">
    <div v-if="keep || open" class="detail-content">
      <slot />
      <span v-show="!keep" class="detail-close-tips">点击关闭</span>
    </div>
    <div v-else class="detail-opearate">
      {{ instructions }}
      <van-icon size="12" name="arrow-down" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Icon } from "vant";
export default defineComponent({
  name: "detail-block",

  components: {
    [Icon.name]: Icon,
  },

  props: {
    detail: String,
    instructions: String,
    keep: Boolean,
  },

  setup() {
    const open = ref(false);

    return {
      open,
    };
  },
});
</script>

<style>
.detail {
  font-size: 14px;
  padding: 4px 8px;
  margin-bottom: 16px;
  border-radius: 6px;
  color: #fff;
  margin-top: 12px;
  background-color: #645856;
}
.detail-opearate {
  line-height: 16px;
  text-align: center;
}
.detail-close-tips {
  float: right;
  color: #F7F1E6;
}
</style>