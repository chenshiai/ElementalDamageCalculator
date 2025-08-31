<script setup lang="ts">
import TabTitle from "@/component/TabTitle.vue";
import { CellGroup, RadioGroup, Radio, Field, Icon, Stepper, Popup } from "vant";
import { computed, ref } from "vue";
import { useYiFa, useIneffa } from "../elemental/roles";
import { BaseDMG } from "@/constants/elementalReaction";
import Popover from "@/component/Popover.vue";
import { getMoonElectroRate, generateAllSortedResults, getResistanceRate } from "@/utils";
import { getEnkaUI } from "@/utils/decorator";

type teamItem = {
  level: number;
  elementMastery: number;
  criticalRate: number;
  criticalDamage: number;
  checked: RelicType;
};

enum RelicType {
  none = "none",
  thunder = "thunder",
  night = "night",
  moon = "moon",
}

const RelicText = {
  [RelicType.none]: "无",
  [RelicType.thunder]: "如雷的盛怒",
  [RelicType.night]: "穹境示现之夜",
  [RelicType.moon]: "纺月的夜歌",
};

const teamList = ref<teamItem[]>([
  {
    level: 90,
    elementMastery: 0,
    criticalRate: 5,
    criticalDamage: 50,
    checked: RelicType.none,
  },
]);

const moonElectroOtherData = ref(0);
const enemyResistance = ref(10);
const { yehun, yehunMoonGain } = useYiFa();
const { ineffaAtk, ineffaGain } = useIneffa();

const relicEff = computed(() => {
  const relicSet = new Set();
  teamList.value.forEach((item) => {
    if (item.checked === RelicType.moon || item.checked === RelicType.night) {
      relicSet.add(item.checked);
    }
  });
  return relicSet.size * 10;
});

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
          +moonElectroOtherData.value +
          (teamData.checked === RelicType.thunder ? 20 : 0) +
          relicEff.value) /
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
    checked: RelicType.none,
  });
};
const removeData = (index: number) => {
  teamList.value.splice(index, 1);
};
// 月感电伤害值
const moonElectroChargedDamage = computed(() => {
  const resultList = teamList.value.map(moonElectroDamage);
  const allResult = [
    ...new Set(
      generateAllSortedResults(resultList.map((i) => i.result))
        .map(sum)
        .sort((a, b) => b - a)
    ),
  ];
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
  <TabTitle>月曜反应计算</TabTitle>
  <div class="tips">仅计算由普通剧变反应转化的月反应伤害，不计算角色直接造成的月反应伤害。</div>
  <div class="base-data">
    <span class="base-damage__title">敌人抗性%</span>
    <Stepper v-model="enemyResistance" input-width="66px" integer button-size="20" theme="round" min="-999" />
  </div>
  <br />
  <div>
    <span class="data-panel__title">队伍属性</span>
    <span class="holy-relic-tips">输入能参与反应的角色面板</span>
  </div>
  <ul class="moon-panel">
    <li v-for="(item, index) in teamList" :key="index">
      <div class="moon-panel__title">
        角色{{ index + 1 }}面板
        <span v-show="index !== 0" class="moon-panel__delete" @click="removeData(index)">移除</span>
      </div>
      <div class="moon-panel__basic">
        <div class="basic-panel-item">
          <span class="basic-panel-item-title">等级</span>
          <input class="basic-panel-input" type="number" max="100" min="1" v-model="item.level" />
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
      <div class="moon-panel__title">
        圣遗物套装
        <span class="holy-relic-tips">{{ RelicText[item.checked] }}</span>
      </div>
      <RadioGroup class="holy-relic-radio" v-model="item.checked">
        <Radio class="holy-relic-radio__item" label-position="left" :name="RelicType.none">
          <span>无</span>
        </Radio>
        <Radio class="holy-relic-radio__item" label-position="left" :name="RelicType.thunder">
          <img :src="getEnkaUI('UI_RelicIcon_15005_4')" alt="" />
        </Radio>
        <Radio class="holy-relic-radio__item" label-position="left" :name="RelicType.night">
          <img :src="getEnkaUI('UI_RelicIcon_15041_4')" alt="" />
        </Radio>
        <Radio class="holy-relic-radio__item" label-position="left" :name="RelicType.moon">
          <img :src="getEnkaUI('UI_RelicIcon_15042_4')" alt="" />
        </Radio>
      </RadioGroup>
    </li>
    <div v-show="teamList.length < 4" class="show-click" @click="addData">新增角色属性</div>
  </ul>
  <br />
  <details class="gain-group-details" open>
    <summary>
      <span class="data-panel__title">角色提升</span>
      <span class="holy-relic-tips open">展开</span>
      <span class="holy-relic-tips close">收起</span>
    </summary>
    <section class="gain-group">
      <div class="cha-gain-inner">
        <img class="base-damage__img" src="/ui/UI_AvatarIcon_Ineffa.png" alt="" />
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

      <div class="cha-gain-inner">
        <img class="base-damage__img" src="/ui/UI_AvatarIcon_Ifa.png" alt="" />
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
    </section>
    <br />
  </details>
  <details class="gain-group-details" open>
    <summary>
      <span class="data-panel__title">全队增益</span>
      <span class="holy-relic-tips open">展开</span>
      <span class="holy-relic-tips close">收起</span>
    </summary>
    <section class="gain-group">
      <div class="base-data">
        <span class="base-damage__title">月感电伤害提升%</span>
        <Stepper v-model="moonElectroOtherData" input-width="66px" integer button-size="20" theme="round" min="0" />
      </div>
    </section>
    <br />
  </details>
  <div class="data-panel__title">期望伤害</div>
  <details v-for="item in damageResult" :key="item.name" :name="item.name" :class="[item.class, 'damage-details']">
    <summary class="damage-tag">
      <data class="damage-tag__title" :data-text="item.name">{{ item.name }}</data>
      <data class="damage-tag__detail" :data-text="item.desire">{{ item.desire }}</data>
      <div>查看实际数值</div>
    </summary>
    <div class="all-result">
      {{ item.allResult }}
    </div>
  </details>
</template>

<style scoped>
.moon-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 16px;
  padding-top: 10px;

  li {
    border: 1px solid var(--border);
    padding: 4px 12px 12px;
    border-radius: 4px;
  }
}
.damage-details {
  width: 50%;
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
  padding: 12px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  background-color: transparent;
  cursor: pointer;
}
.holy-relic-radio {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  .holy-relic-radio__item {
    display: flex;
    justify-content: center;
  }
  &:deep(.van-radio__icon--round) {
    display: none;
  }
  &:deep(.van-radio__label) {
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 4px;
  }
  .van-radio__label img,
  .van-radio__label span {
    text-align: center;
    line-height: 32px;
    height: 32px;
    width: 32px;
    padding: 2px;
    display: inline-block;
    vertical-align: bottom;
  }
  .van-radio[aria-checked="true"] :deep(.van-radio__label) {
    background: var(--bg);
    box-shadow: inset 0 0 0 2px var(--light-text);
    border: 1px solid var(--border);
    color: var(--light-text);
  }
}

.all-result {
  width: 100%;
}
@media screen and (max-width: 768px) {
  .moon-panel {
    grid-template-columns: 1fr;
  }
  .damage-details {
    width: 100%;
  }
}
</style>
