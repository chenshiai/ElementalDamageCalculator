<template>
  <nav class="app-menu" @click="onclick">
    <img src="/img/image.png" />
    <router-link to="/" class="top-tabs__item">首页</router-link>
    <router-link to="/elemental" class="top-tabs__item">剧变反应计算</router-link>
    <router-link to="/increasing-range" class="top-tabs__item">单次伤害计算</router-link>
    <router-link to="/cloud-team" class="top-tabs__item">角色组队计算</router-link>
    <router-link to="/shield" class="top-tabs__item">护盾承伤计算</router-link>
    <router-link to="/character/create" class="top-tabs__item">创建角色数据</router-link>
    <router-link to="/import" class="top-tabs__item">游戏数据导入</router-link>
    <router-link to="/question-answer" class="top-tabs__item">常见问题</router-link>
  </nav>
</template>

<script setup lang="ts">
const emit = defineEmits(["click"]);
const onclick = () => {
  emit("click");
};
</script>
<style>
.app-menu {
  text-align: center;
}

.top-tabs__item {
  display: block;
  width: 100%;
  box-sizing: border-box;
  line-height: 40px;
  color: var(--tip-text);
}

.router-link-active {
  color: var(--light-text);
  background-color: var(--main-text);
}

.top-tabs__item:nth-last-child(1) {
  margin-right: 0;
}
</style>