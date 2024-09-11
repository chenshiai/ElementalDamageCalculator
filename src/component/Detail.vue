<template>
  <div class="detail">
    蒸发、融化反应的伤害提升{{ Rate }}%<span class="more-rate">{{ moreRate }}</span>;
    <br/>
    超载、超导、感电、燃烧、碎冰、扩散、绽放、超绽放、烈绽放的伤害提升{{ servitude }}%;
    <span v-show="servitudeMoreRate" class="more-rate"><br/>{{ servitudeMoreRate }}</span>
    <slot name="servitude"></slot>
    <br/>
    超激化、蔓激化带来的[伤害提升]提高{{ catalyze }}%;
    <span v-show="catalyzeMoreRate" class="more-rate"><br/>{{ catalyzeMoreRate }}</span>
    <slot name="catalyze"></slot>
    <br/>
    结晶反应护盾提供的[伤害吸收量]提升{{ crystallization }}%;
  </div>
</template>

<script setup>
import {computed} from "vue";
import {WITCH, THUNDER, EMERALD, EDEN} from "@/constants";
import {getAmplifiedRate, getServitudeRate, getCrystallizeRate, getCatalyzeRate} from "@/utils";

const props = defineProps({
  elementalMystery: Number,
  currentRelic: String,
})
// 增幅倍率
const Rate = computed(() => {
  return getAmplifiedRate(props.elementalMystery).toFixed(1);
});

// 剧变倍率
const servitude = computed(() => {
  return getServitudeRate(props.elementalMystery).toFixed(1);
});

// 结晶倍率
const crystallization = computed(() => {
  return getCrystallizeRate(props.elementalMystery).toFixed(1);
});

// 激化倍率
const catalyze = computed(() => {
  return getCatalyzeRate(props.elementalMystery).toFixed(1);
});

// 魔女4
const moreRate = computed(() => {
  if (props.currentRelic === WITCH) {
    return " 魔女套+15%";
  }
  return "";
});

// 如雷4
const servitudeMoreRate = computed(() => {
  switch (props.currentRelic) {
    case THUNDER: {
      return "如雷套：超载、超导、感电、超绽放+40%";
    }
    case WITCH: {
      return "魔女套：超载、燃烧、烈绽放+40%";
    }
    case EMERALD: {
      return "风套：扩散+60%";
    }
    case EDEN: {
      return "乐园套：绽放、超绽放、烈绽放+80%";
    }
  }
  return "";
});

const catalyzeMoreRate = computed(() => {
  return props.currentRelic === THUNDER ? "超激化+20%" : "";
});

</script>

<style>
.detail {
  font-size: 14px;
  padding: 4px 8px;
  margin-bottom: 16px;
  border-radius: 6px;
  color: #fff;
  margin-top: 12px;
  background-color: var(--main-text);
}

.more-rate {
  color: #2ee27f;
}

</style>