<script setup lang="ts">
import TabTitle from "@/component/TabTitle.vue";
import { CellGroup, RadioGroup, Radio, Field, Icon, Stepper } from "vant";
import { computed, ref } from "vue";
import { useYiFa, useIneffa, useFlins } from "../elemental/roles";
import { BaseDMG } from "@/constants/elementalReaction";
import Popover from "@/component/Popover.vue";
import {
  getMoonElectroRate,
  generateAllSortedResults,
  getResistanceRate,
  getPyroElectroCryoMoonRate,
  getHydroMoonRate,
  getAnemoDendroMoonRate,
  getGeoMoonRate,
} from "@/utils";
import { getEnkaUI } from "@/utils/decorator";

type teamItem = {
  level: number;
  elementMastery: number;
  criticalRate: number;
  criticalDamage: number;
  checked: RelicType;
  electroPromote: number;
  electroAdd: number;
};

enum RelicType {
  none = "none",
  thunder = "thunder",
  night = "night",
  moon = "moon",
}

const RelicText = {
  [RelicType.none]: "无",
  [RelicType.thunder]: "如雷的盛怒 月感电+20%",
  [RelicType.night]: "穹境示现之夜 月曜反应+10%",
  [RelicType.moon]: "纺月的夜歌 月曜反应+10%",
};

const teamList = ref<teamItem[]>([
  {
    level: 90,
    elementMastery: 0,
    criticalRate: 5,
    criticalDamage: 50,
    checked: RelicType.none,
    electroPromote: 0,
    electroAdd: 0,
  },
]);

const moonElectroOtherData = ref(0);
const moonElectroPromoteData = ref(0);
const enemyResistance = ref(10);
const atk = ref(0);
const hp = ref(0);
const def = ref(0);
const em = ref(0);

const { yehun, yehunMoonGain } = useYiFa();
const { ineffaAtk, ineffaGain } = useIneffa();
const { flinsAtk, flinsGain } = useFlins();

const relicEff = computed(() => {
  const relicSet = new Set();
  teamList.value.forEach((item) => {
    if (item.checked === RelicType.moon || item.checked === RelicType.night) {
      relicSet.add(item.checked);
    }
  });
  return relicSet.size * 10;
});

const characterEff = computed(() => {
  return Math.max(
    getPyroElectroCryoMoonRate(atk.value),
    getHydroMoonRate(hp.value),
    getGeoMoonRate(def.value),
    getAnemoDendroMoonRate(em.value)
  );
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
      (1 + (ineffaGain.value + flinsGain.value + teamData.electroAdd + characterEff.value) / 100) *
      (1 + (teamData.electroPromote + moonElectroPromoteData.value) / 100) *
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
    electroPromote: 0,
    electroAdd: 0,
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
        （{{ index + 1 }}）角色面板
        <span class="holy-relic-tips">吃满增益后的最终数据</span>
        <span v-show="index !== 0" class="moon-panel__delete" @click="removeData(index)">移除</span>
      </div>
      <div class="moon-panel__basic">
        <div class="basic-panel-item">
          <span class="basic-panel-item-title">等级</span>
          <input class="basic-panel-input" pattern="[0-9]*" type="number" max="100" min="1" v-model="item.level" />
        </div>
        <div class="basic-panel-item">
          <span class="basic-panel-item-title">元素精通</span>
          <input class="basic-panel-input" pattern="[0-9]*" type="number" min="0" v-model="item.elementMastery" />
        </div>
        <div class="basic-panel-item">
          <span class="basic-panel-item-title">暴击率%</span>
          <input class="basic-panel-input" pattern="[0-9]*" type="number" v-model="item.criticalRate" />
        </div>
        <div class="basic-panel-item">
          <span class="basic-panel-item-title">暴击伤害%</span>
          <input class="basic-panel-input" pattern="[0-9]*" type="number" v-model="item.criticalDamage" />
        </div>
      </div>
      <div class="moon-panel__title">
        个人提升
        <span class="holy-relic-tips">全队提升的增益不要填在这里</span>
      </div>
      <div class="moon-panel__basic">
        <div class="basic-panel-item">
          <span class="basic-panel-item-title">月感电提升%</span>
          <input class="basic-panel-input" pattern="[0-9]*" type="number" v-model="item.electroAdd" />
        </div>
        <div class="basic-panel-item">
          <span class="basic-panel-item-title">月感电擢升%</span>
          <input class="basic-panel-input" pattern="[0-9]*" type="number" v-model="item.electroPromote" />
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
            伊涅芙：提升队伍中所有角色<q class="text-moon-electro"><data data-text="月感电">月感电</data></q
            >的基础伤害，每100点攻击力提升0.7%，最大14%
          </div>
          <template #trigger>
            <Icon size="26" name="question" />
          </template>
        </Popover>
      </div>
      <div class="cha-gain-inner">
        <img class="base-damage__img" src="/ui/UI_AvatarIcon_Flins.png" alt="" />
        <CellGroup inset>
          <Field v-model="flinsAtk" type="number" label="菲林斯攻击力" />
        </CellGroup>
        <Popover position="top-right">
          <div class="data-item-popover__content">
            菲林斯：提升队伍中所有角色<q class="text-moon-electro"><data data-text="月感电">月感电</data></q
            >的基础伤害，每100点攻击力提升0.7%，最大14%
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
            <q class="text-moon-electro"><data data-text="月感电">月感电</data></q
            >反应0.2%的伤害，最多记录200点救援要义
          </div>
          <template #trigger>
            <Icon size="26" name="question" />
          </template>
        </Popover>
      </div>
      <div class="cha-gain-inner">
        <div class="element-img">
          <img src="/img/pyro.png" alt="" />
          <img src="/img/electro.png" alt="" />
          <img src="/img/cryo.png" alt="" />
        </div>
        <CellGroup inset>
          <Field v-model="atk" type="number" label="火雷冰攻击力" />
        </CellGroup>
        <Popover position="top-right">
          <div class="data-item-popover__content">
            火元素、雷元素、冰元素：每100点攻击力提升0.9%月曜反应伤害加成，最大36%。
          </div>
          <template #trigger>
            <Icon size="26" name="question" />
          </template>
        </Popover>
      </div>
      <div class="cha-gain-inner">
        <div class="element-img">
          <img src="/img/hydro.png" alt="" />
        </div>
        <CellGroup inset>
          <Field v-model="hp" type="number" label="水元素生命值" />
        </CellGroup>
        <Popover position="top-right">
          <div class="data-item-popover__content">水元素：每1000点生命值提升0.6%月曜反应伤害加成，最大36%。</div>
          <template #trigger>
            <Icon size="26" name="question" />
          </template>
        </Popover>
      </div>
      <div class="cha-gain-inner">
        <div class="element-img">
          <img src="/img/geo.png" alt="" />
        </div>
        <CellGroup inset>
          <Field v-model="def" type="number" label="岩元素防御力" />
        </CellGroup>
        <Popover position="top-right">
          <div class="data-item-popover__content">岩元素：每100点防御力提升1%月曜反应伤害加成，最大36%。</div>
          <template #trigger>
            <Icon size="26" name="question" />
          </template>
        </Popover>
      </div>
      <div class="cha-gain-inner">
        <div class="element-img">
          <img src="/img/anemo.png" alt="" />
          <img src="/img/dendro.png" alt="" />
        </div>
        <CellGroup inset>
          <Field v-model="em" type="number" label="风草元素精通" />
        </CellGroup>
        <Popover position="top-right">
          <div class="data-item-popover__content">风元素、草元素：每100点精通提升2.25%月曜反应伤害加成，最大36%。</div>
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
      <div class="base-data">
        <span class="base-damage__title">月感电伤害擢升%</span>
        <Stepper v-model="moonElectroPromoteData" input-width="66px" integer button-size="20" theme="round" min="0" />
      </div>
    </section>
    <br />
  </details>
  <div class="detail">
    擢升：特殊的伤害提升效果，与其他的伤害提升效果分别独立计算。
    <p>
      月兆·满辉：月兆角色以外的角色施放元素战技或元素爆发后，会基于角色自己的元素类型使所有角色造成的月曜反应伤害提升至多36%，该效果无法叠加。（新效果会覆盖旧效果，想要最大化收益，尽量让属性高的角色后手施放技能）
    </p>
  </div>
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
  margin-bottom: 60px;
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
  width: 100%;
  text-align: center;
  overflow: hidden;
  margin-bottom: 4px;
  border-radius: 4px;
  height: 54px;
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
.element-img {
  display: flex;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: solid 2px var(--border);
  overflow: hidden;
  justify-content: center;
  align-items: center;

  & img {
    width: 24px;
    height: 24px;
    margin: -4px;
  }
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
