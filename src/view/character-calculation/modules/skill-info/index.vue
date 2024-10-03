<script lang="ts" setup>
import { ref } from "vue";
import { Collapse, CollapseItem, Slider } from "vant";
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

const normalLevel = ref(1);
const skillLevel = ref(1);
const burstLevel = ref(1);
const activeNames = ref([]);

const getOtherSkill = computed(() => {
  const otherSkill = characterInfo.otherSkill || [];
  const weaponSkill = weapon.getSkill?.(affix) || [];
  return [...otherSkill, ...weaponSkill];
});
</script>

<template>
  <div class="skill-info">
    <div class="data-panel__title">伤害计算</div>
    <Collapse v-model="activeNames">
      <CollapseItem :title="`${characterInfo.talentNames[0]}（Lv.${normalLevel + calculatorValue.normalLevel}）`">
        <span class="slider-wrap">
          <span>技能等级：</span>
          <Slider v-model="normalLevel" max="10" min="1" />
        </span>
        <SkillInfoItem
          :skill="characterInfo.normalAttack"
          :calculator-value="calculatorValue"
          :level="normalLevel + calculatorValue.normalLevel"
        />
      </CollapseItem>
      <CollapseItem :title="`${characterInfo.talentNames[1]}（Lv.${skillLevel + calculatorValue.skillLevel}）`">
        <span class="slider-wrap">
          <span>技能等级：</span>
          <Slider v-model="skillLevel" max="10" min="1" />
        </span>
        <SkillInfoItem
          :skill="characterInfo.elementSkill"
          :calculator-value="calculatorValue"
          :level="skillLevel + calculatorValue.skillLevel"
        />
      </CollapseItem>
      <CollapseItem :title="`${characterInfo.talentNames[2]}（Lv.${burstLevel + calculatorValue.burstLevel}）`">
        <span class="slider-wrap">
          <span>技能等级：</span>
          <Slider v-model="burstLevel" max="10" min="1" />
        </span>
        <SkillInfoItem
          :skill="characterInfo.burstSkill"
          :calculator-value="calculatorValue"
          :level="burstLevel + calculatorValue.burstLevel"
        />
      </CollapseItem>
      <CollapseItem v-if="getOtherSkill.length > 0" name="other" title="其他">
        <SkillInfoItem :skill="getOtherSkill" :calculator-value="calculatorValue" />
      </CollapseItem>
    </Collapse>
  </div>
</template>

<style>
.slider-wrap {
  display: flex;
  padding: 0 16px;
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
</style>
