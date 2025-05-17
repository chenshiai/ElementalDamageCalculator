<script setup>
import Foot from "./component/Foot.vue";
import Navigate from "./component/Navigate.vue";
import { Popup, Icon } from "vant";
import { ref } from "vue";

const showLeft = ref(false);
</script>

<template>
  <div class="top-overhang" @click="showLeft = true">
    <Icon name="bars" />
  </div>
  <Popup v-model:show="showLeft" teleport="#app" position="left" :style="{ width: '40%', height: '100%' }">
    <Navigate @click="showLeft = false" />
  </Popup>
  <section class="side-navigator-wrap">
    <Navigate />
  </section>
  <div class="main-content">
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
  margin: 0 0 16px 0;
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

.main-content {
    padding: 60px 16px 0;
}
.side-navigator-wrap {
  display: none;
  margin-right: 20px;
  position: fixed;
  top: 60px;
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
@media screen and (min-width: 768px)  {
  .main-content {
    padding: 60px 60px 0;
  }
}
@media screen and (min-width: 1200px) {
  .top-overhang {
    display: none;
  }
  .main-content {
    padding: 60px 160px 0;
  }
  .side-navigator-wrap {
    display: block;
  }
}
</style>
