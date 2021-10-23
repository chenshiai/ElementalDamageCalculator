<template>
  <div class="top-overhang">
    <div class="top-tabs">
      <router-link to="/" class="top-tabs__item">
        剧变&护盾
      </router-link>
      <router-link to="/increasing-range" class="top-tabs__item">
        伤害计算
      </router-link>
      <!-- <router-link to="/cloud-team" class="top-tabs__item">
        云上辉星
      </router-link> -->
      <router-link to="/question-answer" class="top-tabs__item">
        常见问题
      </router-link>
    </div>
  </div>
  <div class="content">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
  <foot />
</template>

<script>
import { defineComponent } from "vue";
import Foot from "./component/Foot.vue";

export default defineComponent({
  name: "DamageCalculator",

  components: {
    [Foot.name]: Foot,
  },
});
</script>

<style>
.my-name {
  line-height: 120px;
  font-size: 80px;
  color: #7c6f6e;
}

.tips {
  margin: 16px 0;
  font-size: 12px;
  padding: 0 30px 0 30px;
  color: #928986;
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
  background-color: #766461;
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
  background-color: #997874;
  border: 2px solid #b7a19e;
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
  border-color: #997874;
  color: #645856;
}

.top-tabs__item:nth-last-child(1) {
  margin-right: 0;
}

.content {
  padding: 0 16px 0 16px;
}


.van-cell.van-cell--clickable,
.van-cell.van-cell--center,
.van-cell.van-collapse-item__title.van-collapse-item__title--expanded {
  background-color: #F7F1E6;
}
</style>
