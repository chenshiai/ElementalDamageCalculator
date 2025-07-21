<template>
  <TabTitle>剧变反应计算</TabTitle>
  <div class="tips">存在细小误差，伤害均为对0抗性敌人的伤害，仅供参考。</div>
  <div class="base-data">
    <div class="base-data-item">
      <span class="base-damage__title">角色等级</span>
      <Stepper v-model="level" input-width="66px" integer button-size="20" theme="round" min="1" max="90" />
    </div>
    <div class="base-data-item">
      <span class="base-damage__title">元素精通</span>
      <Stepper v-model="elementalMystery" integer input-width="66px" button-size="20" theme="round" min="0" />
    </div>
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
  </div>
  <details class="gain-group-details" open>
    <summary>
      <span class="holy-relic__title">角色提升</span>
      <span class="holy-relic-tips open">展开</span>
      <span class="holy-relic-tips close">收起</span>
    </summary>
    <div class="gain-group">
      <div class="cha-gain-inner">
        <img class="base-damage__img" src="https://enka.network/ui/UI_AvatarIcon_Nilou.png" alt="" />
        <CellGroup inset>
          <Field v-model="niLuo" type="number" label="生命上限" />
        </CellGroup>
        <Popover position="top-right">
          <div class="data-item-popover__content">
            妮露：翩舞永世之梦，基于妮露生命值上限超过30000的部分，每1000点生命值上限将提升<q class="bloom">丰穰之核</q
            >9%的伤害，至多提升400%
          </div>
          <template #trigger>
            <Icon size="26" name="question" />
          </template>
        </Popover>
      </div>
      <div class="gain">
        <div class="cha-gain-inner">
          <img class="base-damage__img" src="https://enka.network/ui/UI_AvatarIcon_Baizhuer.png" alt="" />
          <CellGroup inset>
            <Field v-model="baiZhu" type="number" label="生命上限" />
          </CellGroup>

          <Popover position="top-right">
            <div class="data-item-popover__content">
              白术：在地为化，基于白术生命值不超过50000的部分，每1000点提高
              <q class="bloom">绽放</q>、 <q class="aggravate">超绽放</q>、<q class="burning">烈绽放</q>、
              <q class="burning">燃烧</q>反应2%的伤害。 提升<q class="aggravate">超激化</q>和<q class="bloom">蔓激化</q>反应0.8%的伤害
            </div>
            <template #trigger>
              <Icon size="26" name="question" />
            </template>
          </Popover>
        </div>
      </div>

      <div class="gain">
        <div class="cha-gain-inner">
          <img class="base-damage__img" src="https://enka.network/ui/UI_AvatarIcon_Mizuki.png" alt="" />
          <CellGroup inset>
            <Field v-model="mizukiEm" type="number" label="元素精通" />
            <Field v-model="mizukiSkillLevel" type="number" label="战技等级" />
          </CellGroup>

          <Popover position="top-right">
            <div class="data-item-popover__content">
              梦见月瑞希：梦浮，基于梦见月瑞希的元素精，提高<q class="swirl">扩散</q>反应伤害
            </div>
            <template #trigger>
              <Icon size="26" name="question" />
            </template>
          </Popover>
        </div>
      </div>

      <div class="gain">
        <div class="cha-gain-inner">
          <img class="base-damage__img" src="https://enka.network/ui/UI_AvatarIcon_Ifa.png" alt="" />
          <CellGroup inset>
            <Field v-model="yehun" type="number" label="夜魂总和" />
          </CellGroup>
          <Popover position="top-right">
            <div class="data-item-popover__content">
              伊法：救援要义，基于队伍中所有角色当前夜魂值的总和，每1点夜魂值提升<q class="swirl">扩散</q>、<q
                class="elector"
                >感电</q
              >反应1.5%的伤害，最多记录200点夜魂值
            </div>
            <template #trigger>
              <Icon size="26" name="question" />
            </template>
          </Popover>
        </div>
        <span class="holy-relic-tips"> </span>
      </div>
    </div>
  </details>
  <DetailBlock :elementalMystery="elementalMystery">
    <template v-slot:base>
      <data v-show="moreRate" class="more-rate"><br />{{ moreRate }}</data>
    </template>
    <template v-slot:servitude>
      <data v-show="servitudeMoreRate" class="more-rate"><br />{{ servitudeMoreRate }}</data>
      <span v-show="niLuoGain" class="more-rate"><br />妮露：丰穰之核+{{ niLuoGain.toFixed(1) }}%; </span>
      <span v-show="baiZhuBloomGain" class="more-rate">
        <br />白术：燃烧、绽放、超绽放、烈绽放+{{ baiZhuBloomGain.toFixed(1) }}%
      </span>
      <span v-show="mizukiGain" class="more-rate"> <br />梦见月瑞希：扩散+{{ mizukiGain.toFixed(1) }}% </span>
      <span v-show="yehunGain" class="more-rate"> <br />伊法：扩散、感电+{{ yehunGain.toFixed(1) }}% </span>
    </template>
    <template v-slot:catalyze>
      <data v-show="catalyzeMoreRate" class="more-rate"><br />{{ catalyzeMoreRate }}</data>
      <span v-show="baiZhuCatalyzeGain" class="more-rate">
        <br />白术：超激化、蔓激化+{{ baiZhuCatalyzeGain.toFixed(1) }}%
      </span>
    </template>
  </DetailBlock>
  <div class="result">
    <div :class="['damage-tag', item.name2 ? 'two' : '']" v-for="item in damageResult" :key="item.name">
      <data :class="['damage-tag__title', item.class]">{{ item.name }}</data>
      <data v-show="item.name2" :class="['damage-tag__title', item.class2]">{{ item.name2 }}</data>
      <data class="damage-tag__detail">{{ item.detail }}</data>
    </div>
  </div>
</template>

<script setup lant="ts">
import { computed, ref } from "vue";
import { WITCH, THUNDER, EMERALD, EDEN } from "@/constants";
import { BaseDMG } from "@/constants/elementalReaction";
import { getServitudeRate, getCrystallizeRate, getCatalyzeRate } from "@/utils";
import TabTitle from "@/component/TabTitle.vue";
import Popover from "@/component/Popover.vue";
import DetailBlock from "./Detail.vue";
import { Stepper, Field, CellGroup, Icon } from "vant";
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

// 魔女4
const moreRate = computed(() => {
  if (currentRelic.value === WITCH) {
    return " 魔女套：蒸发、融化+15%";
  }
  return "";
});

// 如雷4
const servitudeMoreRate = computed(() => {
  switch (currentRelic.value) {
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
  return currentRelic.value === THUNDER ? "如雷套：超激化+20%" : "";
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
