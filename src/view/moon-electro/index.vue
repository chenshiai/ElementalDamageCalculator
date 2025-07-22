<script setup lang="ts">
import TabTitle from "@/component/TabTitle.vue";
import { Cell, CellGroup, Switch, Collapse, CollapseItem, Field, Icon } from "vant";
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
  thunder: boolean;
};

const teamList = ref<teamItem[]>([
  {
    level: 90,
    elementMastery: 0,
    criticalRate: 5,
    criticalDamage: 50,
    thunder: false,
  },
]);
const otherData = ref(0);
const enemyResistance = ref(10);
const { yehun, yehunGain } = useYiFa();
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
          yehunGain.value +
          otherData.value +
          (teamData.thunder ? 20 : 0)) /
          100) *
      (1 + ineffaGain.value / 100) *
      getResistanceRate(enemyResistance.value)
  );

  const critcal = common * (1 + teamData.criticalDamage / 100);
  let finalCommon = teamData.criticalRate >= 100 ? critcal : common;
  return {
    result: [finalCommon, critcal],
    common: finalCommon,
    desire: common * (1 + (Math.min(100, teamData.criticalRate) * teamData.criticalDamage) / 10000),
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
    thunder: false,
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

  <div class="data-panel__title">攻击目标属性</div>
  <section class="moon-panel">
    <Cell title="敌人抗性%" center>
      <template #right-icon>
        <input class="ex-input" type="number" v-model="enemyResistance" />
      </template>
    </Cell>
  </section>

  <div class="data-panel__title">角色属性</div>
  <section class="moon-panel">
    <div v-for="(item, index) in teamList" :key="index">
      <div class="moon-panel__title">
        {{ index + 1 }}号角色属性
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
      <Cell center title="是否装备如雷4件套">
        <template #right-icon>
          <Switch v-model="item.thunder" active-color="#766461" inactive-color="#b7a19e" size="16" />
        </template>
      </Cell>
    </div>
    <div v-show="teamList.length < 4" class="show-click" @click="addData">新增角色属性</div>
  </section>
  <br />
  <div class="data-panel__title">其它加成</div>
  <section class="moon-panel">
    <Cell title="伊涅芙攻击力" center>
      <template #right-icon>
        <input class="ex-input" type="number" v-model="ineffaAtk" />
      </template>
    </Cell>
    <div class="gain">
      <div class="cha-gain-inner">
        <img class="base-damage__img" src="https://enka.network/ui/UI_AvatarIcon_Ineffa.png" alt="" />
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
            伊法：救援要义，基于队伍中所有角色当前夜魂值的总和，每1点夜魂值提升<q class="swirl">扩散</q>、
            <q class="elector">感电</q>反应1.5%的伤害，最多记录200点夜魂值
          </div>
          <template #trigger>
            <Icon size="26" name="question" />
          </template>
        </Popover>
      </div>
    </div>
    <Cell title="全队月感电伤害提升%" center>
      <template #right-icon>
        <input class="ex-input" type="number" v-model="otherData" />
      </template>
    </Cell>
  </section>
  <div class="data-panel__title">期望伤害</div>
  <div>
    <Collapse v-model="activeNames">
      <CollapseItem v-for="item in damageResult" :key="item.name" :name="item.name">
        <template #title>
          <div :class="item.class">
            <span style="margin-right: 10px">{{ item.name }}</span>
            <span>{{ item.desire }}</span>
          </div>
        </template>
        <div :class="item.class">
          <span style="margin-right: 10px">实际伤害数值：</span>
          <span>{{ item.allResult.join("、") }}</span>
        </div>
      </CollapseItem>
    </Collapse>
  </div>
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
</style>
