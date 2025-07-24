<template>
  <div class="detail">
    蒸发、融化反应的伤害提升{{ Rate }}%;
    <slot name="base"></slot>
    <br/>
    超载、超导、感电、燃烧、碎冰、扩散、绽放、超绽放、烈绽放的伤害提升{{ servitude }}%;
    <slot name="servitude"></slot>
    <br/>
    超激化、蔓激化带来的[伤害提升]提高{{ catalyze }}%;
    <slot name="catalyze"></slot>
    <br/>
    月感电反应造成的伤害提升{{ moonServitude }}%;
    <slot name="moonServitude"></slot>
    <br/>
    结晶反应护盾提供的[伤害吸收量]提升{{ crystallization }}%;
  </div>
</template>

<script setup>
import {computed} from "vue";
import {getAmplifiedRate, getServitudeRate, getCrystallizeRate, getCatalyzeRate, getMoonElectroRate} from "@/utils";

const props = defineProps({
  elementalMystery: Number,
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

const moonServitude = computed(() => {
  return getMoonElectroRate(props.elementalMystery).toFixed(1);
})
</script>

<style>
.detail {
  font-size: 14px;
  padding: 4px 8px;
  margin-bottom: 16px;
  border-radius: 4px;
  color: #fff;
  margin-top: 12px;
  background-color: var(--main-text);
}

.more-rate {
  color: var(--extra-text);
}

</style>