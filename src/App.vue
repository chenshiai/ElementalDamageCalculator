<template>
  <div class="top-overhang">
    <div class="top-tabs">
      <!-- <router-link to="/character" class="top-tabs__item">
        云上辉星
      </router-link> -->
      <router-link to="/cloud-team" class="top-tabs__item">
        云上辉星
      </router-link>
      <router-link to="/" class="top-tabs__item">
        剧变伤害
      </router-link>
      <router-link to="/increasing-range" class="top-tabs__item">
        伤害计算
      </router-link>
      <router-link to="/shield" class="top-tabs__item">
        护盾承伤
      </router-link>
      <!-- <router-link to="/question-answer" class="top-tabs__item">
        常见问题
      </router-link> -->
    </div>
  </div>
  <div class="content">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
  <Foot />
</template>

<script setup>
import Foot from "./component/Foot.vue";
</script>

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
  background-color: var(--main-text);
  height: 40px;
  width: 100%;
  border-radius: 0 0 30px 30px;
  position: relative;
  margin-bottom: 40px;
}

.top-tabs {
  position: absolute;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  justify-content: space-between;
  bottom: -38px;
  padding: 16px;
}

.top-tabs__item {
  box-sizing: border-box;
  background-color: var(--button-bg);
  border: 2px solid var(--tip-text);
  text-align: center;
  line-height: 36px;
  height: 40px;
  color: #fff;
  border-radius: 10px;
  flex: 1;
  margin-right: 8px;
}

.router-link-active {
  background-color: #fff;
  border-color: var(--button-bg);
  color: var(--main-text);
}

.top-tabs__item:nth-last-child(1) {
  margin-right: 0;
}

.content {
  padding: 0 16px 0 16px;
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
