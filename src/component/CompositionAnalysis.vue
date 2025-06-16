<template>
  <div class="composition-analysis" @click="showPopup = true">查看伤害组成</div>
  <Popup v-model:show="showPopup" teleport="#app">
    <div class="analysis-panel">
      <div class="plotting-scale">
        <div v-for="(item, index) in CalculateAnalysis(compositionAnalysis)" class="plotting-item" :style="item.style">
          <div :class="['plotting-tip top', index % 2 === 0 ? 'left' : 'right']">
            <data>{{ item.title }}</data>
            <data class="plotting-detail">{{ item.number }}</data>
          </div>
        </div>
      </div>
    </div>
  </Popup>
</template>

<script setup>
import { computed, ref } from "vue";
import { computationalFormula } from "@/utils";
import CalculateAnalysis from "@/utils/calculate/calculate-analysis";
import { Popup } from "vant";

const props = defineProps({
  damageModule: Object,
});
const showPopup = ref(false);
const compositionAnalysis = computed(() => computationalFormula(props.damageModule).compositionAnalysis);
</script>

<style scoped>
.composition-analysis {
  width: 100%;
  text-align: center;
  cursor: pointer;
}

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
