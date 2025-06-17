<template>
  <Popup v-model:show="showPopup" teleport="#app">
    <div class="analysis-panel">
      <div class="plotting-scale">
        <div v-for="(item, index) in CalculateAnalysis(analysis)" class="plotting-item" :style="item.style">
          <div :class="['plotting-tip top', index % 2 === 0 ? 'left' : 'right']">
            <data>{{ item.title }}</data>
            <data class="plotting-detail">{{ item.number }}</data>
          </div>
        </div>
      </div>
    </div>
  </Popup>
</template>

<script setup lang="ts">
import CalculateAnalysis, { CalculateAnalysisType } from "@/utils/calculate/calculate-analysis";
import { Popup } from "vant";

const props = defineProps<{
  analysis: CalculateAnalysisType;
}>();
const showPopup = defineModel<boolean>({ default: false });
</script>

<style scoped>

.analysis-panel {
  height: 560px;
  width: 300px;
  background: #fdfbf6;
  border: 4px solid var(--stroke-2);
  box-sizing: border-box;
  overflow: hidden;
}

.plotting-scale {
  margin: 20px auto;
  height: 520px;
  width: 24px;
}
.plotting-tip {
  width: 80px;
  padding: 0 4px;
  border: 1px solid var(--stroke-2);
  position: relative;
}
.left {
  right: 100px;
}
.right {
  left: 34px;
}
.top::after {
  content: "";
  position: absolute;
  width: 39px;
  height: 1px;
  top: -1px;
  background-color: var(--stroke-2);
}
.right.top::after {
  right: 84px;
}
.plotting-detail {
  display: inline-block;
  text-align: center;
  width: 100%;
}
</style>
