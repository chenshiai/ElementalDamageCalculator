<template>
  <!-- <div class="top-overhang">
    <div class="top-tabs">
      <div class="top-tabs__item">精通伤害</div>
      <div class="top-tabs__item">伤害期望</div>
      <div class="top-tabs__item">收益对比</div>
    </div>
  </div> -->
  <div class="tips">
    官方未公开计算公式，存在一定的误差。没计算敌人抗性，实际值请以游戏内为准，仅供参考。
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
  <div class="foot">
    <span>更新计划：</span>
    <div>未来会更新伤害期望计算，虽然现在网上有人做了计算器，但是我用不习惯，我更愿意按照自己的喜好来。风格会与米游社的养成计算器类似。</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DamageCalculator",
});
</script>

<style>
.my-name {
  line-height: 120px;
  font-size: 80px;
  color: #7c6f6e;
}

.top-overhang {
  background-color: #766461;
  height: 60px;
  width: 100%;
  border-radius: 0 0 30px 30px;
  position: relative;
  margin-bottom: 40px;
}

.tips {
  margin: 16px;
  font-size: 12px;
  padding: 0 30px 0 30px;
  color: #928986;
  text-align: center;
  position: relative;
}

.tips::before,
.tips::after {
  content: "~";
  position: absolute;
  top: 0;
  font-size: 30px;
  line-height: 20px;
}

.tips::after {
  left: 10px;
}

.tips::before {
  right: 10px;
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
  line-height: 40px;
  color: #fff;
  border-radius: 10px;
  font-weight: 600;
  flex: 1;
  margin-right: 16px;
}

.top-tabs__item:nth-last-child(1) {
  margin-right: 0;
}

.content {
  padding: 0 16px 0 16px;
}

.foot {
  padding: 16px;
  font-size: 14px;
}
</style>
