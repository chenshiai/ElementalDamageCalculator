<script lang="ts" setup>
import { ref } from "vue";
import { Slider } from "vant";
import { ICharacterInfo, IWeaponInfo, ICalculatorValue } from "@/types/interface";
import SkillInfoItem from "./skill-info-item.vue";
import { computed } from "vue";

interface IProps {
  characterInfo: ICharacterInfo;
  weapon: IWeaponInfo;
  affix: number;
  calculatorValue: ICalculatorValue;
}
const { characterInfo, weapon, calculatorValue, affix } = defineProps<IProps>();

const normalLevel = defineModel<number>("normalLevel");
const skillLevel = defineModel<number>("skillLevel");
const burstLevel = defineModel<number>("burstLevel");

const getOtherSkill = computed(() => {
  const otherSkill = characterInfo.otherSkill || [];
  const weaponSkill = weapon.getSkill?.(affix) || [];
  return [...otherSkill, ...weaponSkill];
});

const tabList = ["普通攻击", "元素战技", "元素爆发", "其他"].map((str, index) => {
  return {
    id: index,
    label: str,
  };
});
const activeTab = ref(0);
const onTab = (val) => {
  activeTab.value = val;
};
</script>

<template>
  <div class="skill-info">
    <div class="data-panel__title">伤害数值</div>
    <div class="tab-list">
      <div
        v-for="tab in tabList"
        :key="tab.id"
        class="tab-item"
        :class="activeTab === tab.id ? 'tab-selected' : 'not-selected'"
        @click="onTab(tab.id)"
      >
        {{ tab.label }}
      </div>
    </div>
    <div v-show="activeTab === 0">
      <SkillInfoItem
        :name="`（Lv.${normalLevel + calculatorValue.normalLevelAdd}） ${characterInfo.talentNames[0]}`"
        :skill="characterInfo.normalAttack"
        :calculator-value="calculatorValue"
        :level="normalLevel + calculatorValue.normalLevelAdd"
      />
      <span class="slider-wrap">
        <span>技能等级：</span>
        <Slider v-model="normalLevel" max="10" min="1" />
      </span>
    </div>
    <div v-show="activeTab === 1">
      <SkillInfoItem
        :name="`（Lv.${skillLevel + calculatorValue.skillLevelAdd}） ${characterInfo.talentNames[1]}`"
        :skill="characterInfo.elementSkill"
        :calculator-value="calculatorValue"
        :level="skillLevel + calculatorValue.skillLevelAdd"
      />
      <span class="slider-wrap">
        <span>技能等级：</span>
        <Slider v-model="skillLevel" max="10" min="1" />
      </span>
    </div>
    <div v-show="activeTab === 2">
      <SkillInfoItem
        :name="`（Lv.${burstLevel + calculatorValue.burstLevelAdd}）${characterInfo.talentNames[2]}`"
        :skill="characterInfo.burstSkill"
        :calculator-value="calculatorValue"
        :level="burstLevel + calculatorValue.burstLevelAdd"
      />
      <span class="slider-wrap">
        <span>技能等级：</span>
        <Slider v-model="burstLevel" max="10" min="1" />
      </span>
    </div>
    <div v-show="activeTab === 3">
      <SkillInfoItem :skill="getOtherSkill" :calculator-value="calculatorValue" name="其他攻击手段" />
    </div>
  </div>
</template>

<style>
.slider-wrap {
  display: flex;
  padding-right: 16px;
  margin-top: 12px;
  margin-bottom: -12px;
}
.slider-wrap span {
  margin-right: 12px;
  flex-shrink: 0;
}
.skill-info .van-collapse-item__content {
  color: var(--main-text);
}
.skill-info .van-cell {
  background-color: var(--light-text);
}

.tab-list {
  display: flex;
  position: relative;
  border-radius: 6px 6px 0 0;
  background-color: var(--light-text);
  overflow: hidden;
  --tab-height: 36px;
  z-index: 12;
  margin-bottom: -1px;
}

.tab-item {
  flex: 1;
  height: var(--tab-height);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 300;
  position: relative;
}
.tab-icon {
  width: 17px;
  height: 17px;
  margin-right: 4px;
  margin-top: 1px;
}
.tab-selected {
  background: var(--main-text);
  color: #fff;
  border-radius: 4px 4px 0 0;
  text-shadow: var(--stroke-4) 0 0 2px;
  box-shadow: 16px 30px 0 0 var(--main-text), -16px 30px 0 0 var(--main-text);
 }
.tab-selected::before {
  content: "";
  position: absolute;
  left: -6px;
  bottom: 0;
  width: 10px;
  height: var(--tab-height);
  border-top-left-radius: 4px;
  background-color: var(--main-text);
  transform: skewX(-10deg);
}
.tab-selected::after {
  content: "";
  position: absolute;
  right: -6px;
  bottom: 0;
  width: 10px;
  height: var(--tab-height);
  border-top-right-radius: 4px;
  background-color: var(--main-text);
  transform: skewX(10deg);
}

.not-selected::before {
  content: "";
  position: absolute;
  left: 6px;
  bottom: 0;
  width: 10px;
  height: var(--tab-height);
  background: var(--light-text);
  border-bottom-left-radius: 4px;
  transform: skewX(10deg);
}
.not-selected::after {
  content: "";
  position: absolute;
  right: 6px;
  bottom: 0;
  width: 10px;
  height: var(--tab-height);
  background: var(--light-text);
  border-bottom-right-radius: 4px;
  transform: skewX(-10deg);
  z-index: 11;
}
</style>
