<template>
  <TabTitle>剧变反应计算</TabTitle>
  <div class="tips">存在细小误差，伤害均为对0抗性敌人的伤害，仅供参考。</div>
  <div class="base-data">
    <div class="base-data-item">
      <span class="base-damage__title">角色等级</span>
      <Stepper v-model="level" input-width="66px" integer button-size="20" theme="round" min="1" max="90" />
      <!-- <span class="holy-relic-tips">点击数字可以手动输入</span> -->
    </div>
    <div class="base-data-item">
      <span class="base-damage__title">元素精通</span>
      <Stepper v-model="elementalMystery" integer input-width="66px" button-size="20" theme="round" min="0" />
      <!-- <span class="holy-relic-tips">滑块最大值为2000</span> -->
    </div>
    <Slider v-model="elementalMystery" :max="2000" />

    <div class="holy-relic">
      <div>
        <span class="holy-relic__title">圣遗物套装</span>
        <span class="holy-relic-tips">点击选择，再次点击可以取消选择</span>
      </div>
      <div class="holy-relic__check">
        <div
          :class="['holy-relic-content', 'witch', currentRelic === WITCH && 'active']"
          @click="setCurrentRelic(WITCH)"
        >
          <img class="holy-relic__img" src="/img/witch2.png" />
          <div>炽烈的炎之魔女</div>
        </div>
        <div
          :class="['holy-relic-content', 'thunder', currentRelic === THUNDER && 'active']"
          @click="setCurrentRelic(THUNDER)"
        >
          <img class="holy-relic__img" src="/img/thunder2.png" />
          <div>如雷的盛怒</div>
        </div>
        <div
          :class="['holy-relic-content', 'emerald', currentRelic === EMERALD && 'active']"
          @click="setCurrentRelic(EMERALD)"
        >
          <img class="holy-relic__img" src="/img/emerald2.png" />
          <div>翠绿之影</div>
        </div>
        <div :class="['holy-relic-content', 'eden', currentRelic === EDEN && 'active']" @click="setCurrentRelic(EDEN)">
          <img class="holy-relic__img" src="/img/eden.png" />
          <div>乐园遗落之花</div>
        </div>
      </div>
    </div>
    <div>
      <span class="holy-relic__title">角色提升</span>
      <span class="holy-relic-tips">数值大于0开始计算增益</span>
    </div>
    <div class="gain">
      <img class="base-damage__img" src="https://enka.network/ui/UI_AvatarIcon_Nilou.png" alt="" />
      <div class="cha-gain-inner">
        <span class="base-damage__title">生命上限</span>
        <Stepper v-model="niLuo" input-width="66px" integer button-size="20" theme="round" min="0" max="80000" />
        <span class="holy-relic-tips">「折旋落英之庭」</span>
      </div>
    </div>
    <div class="gain">
      <img class="base-damage__img" src="https://enka.network/ui/UI_AvatarIcon_Baizhuer.png" alt="" />
      <div class="cha-gain-inner">
        <span class="base-damage__title">生命上限</span>
        <Stepper v-model="baiZhu" input-width="66px" integer button-size="20" theme="round" min="0" max="80000" />
        <span class="holy-relic-tips">「在地为化」</span>
      </div>
    </div>
    <div class="gain">
      <img class="base-damage__img" src="https://enka.network/ui/UI_AvatarIcon_Mizuki.png" alt="" />
      <div class="cha-gain-inner">
        <span class="base-damage__title">元素精通</span>
        <Stepper v-model="mizukiEm" input-width="66px" integer button-size="20" theme="round" min="0" max="4000" />
        <div></div>
        <span class="base-damage__title">战技等级</span>
        <Stepper
          v-model="mizukiSkillLevel"
          input-width="66px"
          integer
          button-size="20"
          theme="round"
          min="1"
          max="13"
        />
      </div>
    </div>
    <div class="gain">
      <img class="base-damage__img" src="https://enka.network/ui/UI_AvatarIcon_Mizuki.png" alt="" />
      <div class="cha-gain-inner">
        <span class="base-damage__title">夜魂总和</span>
        <Stepper v-model="yehun" input-width="66px" integer button-size="20" theme="round" min="0" max="200" />
        <span class="holy-relic-tips">「救援要义」</span>
      </div>
    </div>
  </div>
  <DetailBlock :elementalMystery="elementalMystery" :currentRelic="currentRelic">
    <template v-slot:servitude>
      <span v-show="niLuoGain" class="more-rate"><br />妮露：丰穰之核+{{ niLuoGain.toFixed(1) }}%; </span>
      <span v-show="baiZhuBloomGain" class="more-rate">
        <br />白术：燃烧、绽放、超绽放、烈绽放+{{ baiZhuBloomGain.toFixed(1) }}%
      </span>
      <span v-show="mizukiGain" class="more-rate">
        <br />梦见月瑞希：扩散+{{ mizukiGain.toFixed(1) }}%
      </span>
      <span v-show="yehunGain" class="more-rate">
        <br />伊法：扩散、感电+{{ yehunGain.toFixed(1) }}%
      </span>
    </template>
    <template v-slot:catalyze>
      <span v-show="baiZhuCatalyzeGain" class="more-rate">
        <br />白术：超激化、蔓激化+{{ baiZhuCatalyzeGain.toFixed(1) }}%
      </span>
    </template>
  </DetailBlock>
  <div class="result">
    <div class="damage-tag" v-for="item in damageResult" :key="item.name">
      <data :class="['damage-tag__title', item.class]">{{ item.name }}</data>
      <data v-show="item.name2" :class="['damage-tag__title', item.class2]">{{ item.name2 }}</data>
      <data class="damage-tag__detail">{{ item.detail }}</data>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { WITCH, THUNDER, EMERALD, EDEN } from "@/constants";
import { BaseDMG } from "@/constants/elementalReaction";
import { getServitudeRate, getCrystallizeRate, getCatalyzeRate } from "@/utils";
import TabTitle from "@/component/TabTitle.vue";
import DetailBlock from "./Detail.vue";
import { Slider, Stepper } from "vant";
import useHolyRelic from "./holy-relic";
import { useNiLuo, useBaiZhu, useMizuki, useYiFa } from "./roles";

const elementalMystery = ref(786);
const level = ref(90);
const [currentRelic, setCurrentRelic] = useHolyRelic();
const { niLuo, niLuoGain } = useNiLuo();
const { baiZhu, baiZhuBloomGain, baiZhuCatalyzeGain } = useBaiZhu();
const { mizukiEm, mizukiSkillLevel, mizukiGain } = useMizuki();
const { yehun, yehunGain } = useYiFa();

// 剧变反应伤害提升数值
const servitudeDamage = (baseDamage) => {
  return Math.round(baseDamage * (1 + getServitudeRate(elementalMystery.value) / 100));
};

// 激化反应伤害提升数值
const catalyzeDamage = (baseDamage) => {
  return Math.round(baseDamage * (1 + getCatalyzeRate(elementalMystery.value) / 100));
};

// 感电伤害值
const electroChargedDamage = computed(() => {
  const basenumber = BaseDMG.electroCharged[level.value];
  const r = servitudeDamage(basenumber) + Math.round((basenumber * yehunGain.value) / 100);
  return currentRelic.value === THUNDER ? Math.round(basenumber * 0.4) + r : r;
});

// 超载伤害值
const overloadDamage = computed(() => {
  const basenumber = BaseDMG.overload[level.value];
  const r = servitudeDamage(basenumber);
  if (currentRelic.value === THUNDER || currentRelic.value === WITCH) return Math.round(basenumber * 0.4) + r;
  return r;
});

// 绽放伤害值
const bloomDamage = computed(() => {
  const basenumber = BaseDMG.bloom[level.value];
  const r = servitudeDamage(basenumber) + Math.round((basenumber * (niLuoGain.value + baiZhuBloomGain.value)) / 100);
  return currentRelic.value === EDEN ? Math.round(basenumber * 0.8) + r : r;
});

// 超烈绽放伤害值
const hyperbloomDamage = computed(() => {
  const basenumber = BaseDMG.hyperbloom[level.value];
  const r = servitudeDamage(basenumber) + Math.round((basenumber * baiZhuBloomGain.value) / 100);
  if (currentRelic.value === THUNDER || currentRelic.value === WITCH) return Math.round(basenumber * 0.4) + r;
  else if (currentRelic.value === EDEN) return Math.round(basenumber * 0.8) + r;
  return r;
});

// 碎冰伤害值
const shatterDamage = computed(() => {
  return servitudeDamage(BaseDMG.shatter[level.value]);
});

// 燃烧伤害值
const burningDamage = computed(() => {
  const basenumber = BaseDMG.burning[level.value];
  const r = servitudeDamage(basenumber) + Math.round((basenumber * baiZhuBloomGain.value) / 100);
  return currentRelic.value === WITCH ? Math.round(basenumber * 0.4) + r : r;
});

// 扩散伤害值
const swirlDamage = computed(() => {
  const basenumber = BaseDMG.swirl[level.value];
  const r =
    servitudeDamage(basenumber) +
    Math.round((basenumber * mizukiGain.value) / 100) +
    Math.round((basenumber * yehunGain.value) / 100);
  if (currentRelic.value === EMERALD) return Math.round(basenumber * 0.6) + r;
  return r;
});

// 超导伤害值
const superconductDamage = computed(() => {
  const basenumber = BaseDMG.superconduct[level.value];
  const r = servitudeDamage(basenumber);
  return currentRelic.value === THUNDER ? Math.round(basenumber * 0.4) + r : r;
});

// 超激化数值
const aggravateDamage = computed(() => {
  const basenumber = BaseDMG.aggravate[level.value];
  const r = catalyzeDamage(basenumber) + Math.round((basenumber * baiZhuCatalyzeGain.value) / 100);
  return currentRelic.value === THUNDER ? Math.round(basenumber * 0.2) + r : r;
});

// 蔓激化数值
const spreadDamage = computed(() => {
  const basenumber = BaseDMG.spread[level.value];
  return catalyzeDamage(basenumber) + Math.round((basenumber * baiZhuCatalyzeGain.value) / 100);
});

// 结晶盾数值
const crystallizeValue = computed(() => {
  const basenumber = BaseDMG.crystallize[level.value];
  return Math.round(basenumber * (1 + getCrystallizeRate(elementalMystery.value) / 100));
});

const damageResult = computed(() => {
  return [
    {
      name: "超载",
      class: "overload",
      detail: overloadDamage.value,
    },
    {
      name: "超导",
      class: "superconduct",
      detail: superconductDamage.value,
    },
    {
      name: "感电",
      class: "elector",
      detail: electroChargedDamage.value,
    },
    {
      name: "燃烧",
      class: "burning",
      detail: burningDamage.value,
    },
    {
      name: "碎冰",
      class: "shatter",
      detail: shatterDamage.value,
    },
    {
      name: "扩散",
      class: "swirl",
      detail: swirlDamage.value,
    },
    {
      name: "超绽放",
      name2: "烈绽放",
      class: "aggravate",
      class2: "burning",
      detail: hyperbloomDamage.value,
    },
    {
      name: "绽放",
      class: "bloom",
      detail: bloomDamage.value,
    },
    {
      name: "蔓激化",
      class: "bloom",
      detail: spreadDamage.value,
    },
    {
      name: "超激化",
      class: "aggravate",
      detail: aggravateDamage.value,
    },
    {
      name: "结晶",
      class: "crystallize",
      detail: crystallizeValue.value,
    },
  ];
});
</script>

<style src="./style.css" />
