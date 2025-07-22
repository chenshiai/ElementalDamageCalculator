<script setup lang="ts">
import TabTitle from "@/component/TabTitle.vue";
import { Cell, Switch, Collapse, CollapseItem } from "vant";
import { computed, ref } from "vue";
import { useYiFa, useIneffa } from "../elemental/roles";
import { BaseDMG } from "@/constants/elementalReaction";
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
  return {
    result: [common, critcal],
    common,
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
  <div class="tips">
    仅计算由普通剧变反应转化的月反应伤害，不计算角色直接造成的月反应伤害。
  </div>

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
    <Cell title="伊涅芙得攻击力" center>
      <template #right-icon>
        <input class="ex-input" type="number" v-model="ineffaAtk" />
      </template>
    </Cell>
    <Cell title="伊法天赋计入的夜魂总和" center>
      <template #right-icon>
        <input class="ex-input" type="number" v-model="yehun" />
      </template>
    </Cell>
    <Cell title="其它月感电伤害提升%" center>
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
