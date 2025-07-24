<script setup lang="ts">
import TabTitle from "@/component/TabTitle.vue";
import { CellGroup, RadioGroup, Radio, Collapse, CollapseItem, Field, Icon, Stepper } from "vant";
import { computed, ref } from "vue";
import { useYiFa, useIneffa } from "../elemental/roles";
import { BaseDMG } from "@/constants/elementalReaction";
import Popover from "@/component/Popover.vue";
import { getMoonElectroRate, generateAllSortedResults, getResistanceRate } from "@/utils";

type teamItem = {
  level: number;
  elementMastery: number;
  criticalRate: number;
  criticalDamage: number;
  checked: string;
};

const teamList = ref<teamItem[]>([
  {
    level: 90,
    elementMastery: 0,
    criticalRate: 5,
    criticalDamage: 50,
    checked: "",
  },
]);
const otherData = ref(0);
const enemyResistance = ref(10);
const { yehun, yehunMoonGain } = useYiFa();
const { ineffaAtk, ineffaGain } = useIneffa();
const activeNames = ref<string[]>([]);

// 单人月感电反应伤害计算
const moonElectroDamage = (teamData: teamItem) => {
  if (!teamData || teamData.level <= 0)
    return {
      result: [0, 0],
      common: 0,
      desire: 0,
      critcal: 0,
    };
  const baseDamage = BaseDMG.moonElectroCharged[teamData.level];

  const common = Math.round(
    baseDamage *
      (1 +
        (getMoonElectroRate(teamData.elementMastery) +
          yehunMoonGain.value +
          +otherData.value +
          (teamData.checked === "thunder" ? 20 : 0)) /
          100) *
      (1 + ineffaGain.value / 100) *
      getResistanceRate(enemyResistance.value)
  );

  const critcal = teamData.criticalRate <= 0 ? common : common * (1 + teamData.criticalDamage / 100);
  let finalCommon = teamData.criticalRate >= 100 ? critcal : common;
  return {
    result: [finalCommon, critcal],
    common: finalCommon,
    desire: common * (1 + (Math.max(0, Math.min(100, teamData.criticalRate)) * teamData.criticalDamage) / 10000),
    critcal,
  };
};
const sum = (result: number[]) => {
  return Math.round(result[0] + 0.5 * (result[1] || 0) + (result[2] || 0 + result[3] || 0) / 12);
};

const addData = () => {
  teamList.value.push({
    level: 90,
    elementMastery: 0,
    criticalRate: 5,
    criticalDamage: 50,
    checked: "",
  });
};
const removeData = (index: number) => {
  teamList.value.splice(index, 1);
};
// 月感电伤害值
const moonElectroChargedDamage = computed(() => {
  const resultList = teamList.value.map(moonElectroDamage);
  const allResult = generateAllSortedResults(resultList.map((i) => i.result)).map(sum);
  const desire = sum(resultList.map((i) => i.desire).sort((a, b) => b - a));
  return {
    allResult,
    desire,
  };
});
const damageResult = computed(() => {
  return [
    {
      name: "月感电",
      class: "text-moon-electro",
      allResult: moonElectroChargedDamage.value.allResult,
      desire: moonElectroChargedDamage.value.desire,
    },
  ];
});
</script>

<template>
  <TabTitle>月反应计算</TabTitle>
  <div class="tips">仅计算由普通剧变反应转化的月反应伤害，不计算角色直接造成的月反应伤害。</div>

  <div class="data-panel__title">角色属性</div>
  <section class="moon-panel">
    <div v-for="(item, index) in teamList" :key="index">
      <div class="moon-panel__title">
        角色{{ index + 1 }}
        <span v-show="index !== 0" class="moon-panel__delete" @click="removeData(index)">移除</span>
      </div>
      <div class="moon-panel__basic">
        <div class="basic-panel-item">
          <span class="basic-panel-item-title">等级</span>
          <input class="basic-panel-input" type="number" max="90" min="1" v-model="item.level" />
        </div>
        <div class="basic-panel-item">
          <span class="basic-panel-item-title">元素精通</span>
          <input class="basic-panel-input" type="number" min="0" v-model="item.elementMastery" />
        </div>
        <div class="basic-panel-item">
          <span class="basic-panel-item-title">暴击率%</span>
          <input class="basic-panel-input" type="number" v-model="item.criticalRate" />
        </div>
        <div class="basic-panel-item">
          <span class="basic-panel-item-title">暴击伤害%</span>
          <input class="basic-panel-input" type="number" v-model="item.criticalDamage" />
        </div>
      </div>
      <div class="moon-panel__title">套装效果</div>
      <RadioGroup class="holy-relic-radio" v-model="item.checked">
        <Radio name="">无套装效果</Radio>
        <Radio name="thunder">如雷的盛怒</Radio>
      </RadioGroup>
    </div>
    <div v-show="teamList.length < 4" class="show-click" @click="addData">新增角色属性</div>
  </section>
  <br />
  <details class="gain-group-details" open>
    <summary>
      <span class="data-panel__title">全场效果</span>
      <span class="holy-relic-tips open">展开</span>
      <span class="holy-relic-tips close">收起</span>
    </summary>
    <section class="gain-group">
      <div class="gain">
        <div class="cha-gain-inner">
          <img
            class="base-damage__img"
            src="https://homdgcat.wiki/homdgcat-res/Avatar/UI_AvatarIcon_Ineffa.png"
            alt=""
          />
          <CellGroup inset>
            <Field v-model="ineffaAtk" type="number" label="伊涅芙攻击力" />
          </CellGroup>
          <Popover position="top-right">
            <div class="data-item-popover__content">
              伊涅芙：提升队伍中所有角色<q class="elector">月感电</q>的基础伤害，每100点攻击力提升0.7%，最大14%
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
              伊法：救援要义基于队伍中所有角色当前夜魂值的总和，每1点救援要义提升
              <q class="elector">月感电</q>反应0.2%的伤害，最多记录200点救援要义
            </div>
            <template #trigger>
              <Icon size="26" name="question" />
            </template>
          </Popover>
        </div>
      </div>
      <br />
      <span></span>
      <div class="base-data">
        <span class="base-damage__title">全队月感电伤害提升%</span>
        <Stepper v-model="otherData" input-width="66px" integer button-size="20" theme="round" min="0" />
      </div>

      <div class="base-data">
        <span class="base-damage__title">敌人抗性%</span>
        <Stepper v-model="enemyResistance" input-width="66px" integer button-size="20" theme="round" />
      </div>
    </section>
  </details>
  <br />
  <div class="data-panel__title">期望伤害</div>
  <section class="moon-panel">
    <Collapse v-model="activeNames">
      <CollapseItem v-for="item in damageResult" :key="item.name" :name="item.name">
        <template #title>
          <div :class="item.class">
            <span style="margin-right: 10px">{{ item.name }}</span>
            <span>{{ item.desire }}</span>
          </div>
        </template>
        <div>
          <span style="margin-right: 10px">实际伤害数值：</span>
          <span>{{ item.allResult.join("、") }}</span>
        </div>
      </CollapseItem>
    </Collapse>
  </section>
</template>

<style scoped>
.moon-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  margin-bottom: 16px;
}
@media screen and (max-width: 768px) {
  .moon-panel {
    grid-template-columns: 1fr;
  }
}
.moon-panel__delete {
  float: right;
  cursor: pointer;
  &:hover {
    color: var(--cancel);
  }
}
.moon-panel__basic {
  display: flex;
  margin-bottom: 4px;
  border-radius: 4px;
  overflow: hidden;
}
.show-click {
  text-align: center;
  border: 1px solid var(--border);
  border-radius: 4px;
  margin-bottom: 16px;
  line-height: 32px;
  height: 32px;
  width: 100%;
  background-color: transparent;
  cursor: pointer;
}
.holy-relic-radio {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
