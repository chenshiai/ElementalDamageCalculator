<template>
  <div class="composition-analysis" @click="showPopup = true">查看伤害组成</div>
  <Popup v-model:show="showPopup" teleport="#app">
    <div class="analysis-panel">
      <div class="plotting-scale">
        <div v-for="(item, index) in analysisList" class="plotting-item" :style="item.style">
          <div :class="['plotting-tip top', index % 2 === 0 ? 'left' : 'right']">
            <span>{{ item.title }}</span>
            <span class="plotting-detail">{{ item.number }}</span>
          </div>
        </div>
      </div>
    </div>
  </Popup>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { computationalFormula } from "@/utils";
import { Popup } from "vant";

const store = useStore();
const showPopup = ref(false);
const compositionAnalysis = computed(() => computationalFormula(store.state.damageModule).compositionAnalysis);

function calculateHeight(target) {
  return target / compositionAnalysis.value.CRIT_DMG * 520 + 'px';
};
const analysisList = computed(() => {
  return [
    {
      title: "暴伤提升值",
      number: Math.round(compositionAnalysis.value.CRITICAL_DMG),
      style: {
        height: calculateHeight(compositionAnalysis.value.CRITICAL_DMG),
        backgroundColor: "#ffb61e",
      },
    },
    {
      title: "精通提升值",
      number: Math.round(compositionAnalysis.value.EVA_DMG),
      style: {
        height: calculateHeight(compositionAnalysis.value.EVA_DMG),
        backgroundColor: "#44cef6",
      },
    },
    {
      title: "增幅提升值",
      number: Math.round(compositionAnalysis.value.REACTION_DMG),
      style: {
        height: calculateHeight(compositionAnalysis.value.REACTION_DMG),
        backgroundColor: "#dc3023",
      },
    },
    {
      title: "增伤提升值",
      number: Math.round(compositionAnalysis.value.MAGNIFICATION_DMG),
      style: {
        height: calculateHeight(compositionAnalysis.value.MAGNIFICATION_DMG),
        backgroundColor: "#9966cc",
      },
    },
    {
      title: "激化提高值",
      number: Math.round(compositionAnalysis.value.BONUS_DMG),
      style: {
        height: calculateHeight(compositionAnalysis.value.BONUS_DMG),
        backgroundColor: "#00e09e",
      },
    },
    {
      title: "伤害提高值",
      number: Math.round(compositionAnalysis.value.ADDITIONAL_DMG),
      style: {
        height: calculateHeight(compositionAnalysis.value.ADDITIONAL_DMG),
        backgroundColor: "#eedeb0",
      },

    },
    {
      title: "基础伤害值",
      number: Math.round(compositionAnalysis.value.BASE_DMG),
      style: {
        height: calculateHeight(compositionAnalysis.value.BASE_DMG),
        backgroundColor: "#bacac6",
      },
    },
  ].filter(item => item.number > 0);
});
</script>

<style scoped>
.composition-analysis {
  width: 100%;
  text-align: center;
}

.analysis-panel {
  height: 560px;
  width: 300px;
  background: #FDFBF6;
  border: 4px solid var(--button-bg);
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
  border: 1px solid var(--button-bg);
  position: relative;
}
.left {
  right: 100px;
}
.right {
  left: 34px;
}
.top::after{
  content: "";
  position: absolute;
  width: 39px;
  height: 1px;
  top: -1px;
  background-color: var(--button-bg);
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