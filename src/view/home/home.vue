<script setup>
import TabTitle from "@/component/TabTitle.vue";

</script>

<template>
  <TabTitle>首页</TabTitle>
    <card>
      <div>剧变反应计算</div>
      <span>快速查看元素精通的提升效果</span>
    </card>
    <card>
      <div>单次伤害计算</div>
      <span>能够自由填入数值计算</span>
    </card>
</template>

<style scoped>
card {
  display: block;
  background-color: var(--light-text);
  margin: 16px;
  padding: 12px;
  border-radius: 4px;
}
card > span {
  font-size: 12px;
}
</style>