<script setup>
import Foot from "./component/Foot.vue";
import { Popup, Icon } from "vant";
import { ref } from "vue";

const showLeft = ref(false);
</script>

<template>
  <div class="top-overhang" @click="showLeft = true">
    <Icon name="bars" />
  </div>
  <Popup v-model:show="showLeft" teleport="#app" position="left" :style="{ width: '40%', height: '100%' }">
    <router-link to="/" class="top-tabs__item">剧变反应计算</router-link>
    <router-link to="/increasing-range" class="top-tabs__item">单次伤害计算</router-link>
    <router-link to="/cloud-team" class="top-tabs__item">云上辉星（测试版）</router-link>
    <router-link to="/character/create" class="top-tabs__item">创建角色数据</router-link>
    <router-link to="/shield" class="top-tabs__item">护盾承伤计算</router-link>
    <router-link to="/question-answer" class="top-tabs__item">常见问题</router-link>
  </Popup>
  <div class="content">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
  <van-back-top />
  <Foot />
</template>

<style>
.tips {
  margin: 16px 0;
  font-size: 12px;
  padding: 0 30px 0 30px;
  color: var(--tip-text);
  text-align: center;
  position: relative;
}

.tips::after {
  left: 10px;
}

.tips::before {
  right: 10px;
}

.tips::before,
.tips::after {
  content: "~";
  position: absolute;
  top: 0;
  font-size: 22px;
  line-height: 20px;
}

.top-overhang {
  height: 40px;
  width: 100%;
  position: fixed;
  z-index: 100;
  padding: 0 16px;
  font-size: 26px;
}

.top-tabs__item {
  display: block;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  background-color: #fff;
  text-align: center;
  line-height: 40px;
  color: var(--main-text);
  border-bottom: solid 1px var(--main-text);
}

.router-link-active {
  background-color: var(--button-bg);
  border-color: var(--stroke-2);
  color: #fff;
}

.top-tabs__item:nth-last-child(1) {
  margin-right: 0;
}

.content {
  padding: 40px 16px 0 16px;
}

.question-title,
.data-panel__title,
.holy-relic__title,
.base-damage__title,
.cloud-team__title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 26px;
}
</style>
