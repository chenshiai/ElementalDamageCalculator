<script lang="ts" setup>
import { ref } from "vue";
import { Slider, Switch } from "vant";
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
    <div class="data-panel__title">
      <span>技能数值</span>
    </div>
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
        v-model="normalLevel"
        :name="characterInfo.talentNames[0]"
        :skill="characterInfo.normalAttack"
        :calculator-value="calculatorValue"
        :levelAdd="calculatorValue.normalLevelAdd"
      />
    </div>
    <div v-show="activeTab === 1">
      <SkillInfoItem
        v-model="skillLevel"
        :name="characterInfo.talentNames[1]"
        :skill="characterInfo.elementSkill"
        :calculator-value="calculatorValue"
        :levelAdd="calculatorValue.skillLevelAdd"
      />
    </div>
    <div v-show="activeTab === 2">
      <SkillInfoItem
        v-model="burstLevel"
        :name="characterInfo.talentNames[2]"
        :skill="characterInfo.burstSkill"
        :calculator-value="calculatorValue"
        :levelAdd="calculatorValue.burstLevelAdd"
      />
    </div>
    <div v-show="activeTab === 3">
      <SkillInfoItem :skill="getOtherSkill" :calculator-value="calculatorValue" name="其他攻击手段" :levelAdd="0" />
    </div>
  </div>
</template>

<style scoped>
.extra-float {
  display: flex;
  font-size: 12px;
  align-items: center;
}
.float-panel {
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  z-index: 100;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: var(--page-bg);
  box-shadow: 2px 2px 10px 0px var(--bg);
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
