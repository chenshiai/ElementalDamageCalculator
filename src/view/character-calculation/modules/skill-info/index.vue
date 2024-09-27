<script lang="ts" setup>
import { ref } from "vue";
import { Collapse, CollapseItem } from "vant";
import { ICharacterInfo, IWeaponInfo, ICalculatorValue } from "@/types/interface";
import SkillInfoItem from "./skill-info-item.vue";

interface IProps {
  characterInfo: ICharacterInfo;
  weapon: IWeaponInfo;
  calculatorValue: ICalculatorValue;
}
const { characterInfo, weapon, calculatorValue } = defineProps<IProps>();

const normalLevel = ref(1);
const skillLevel = ref(1);
const burstLevel = ref(1);

const activeNames = ref([]);
</script>

<template>
  <div class="skill-info">
    <div class="data-panel__title">伤害计算</div>
    <Collapse v-model="activeNames">
      <CollapseItem :title="`${characterInfo.talentNames[0]}（Lv.${normalLevel + calculatorValue.normalLevel}）`">
        <SkillInfoItem
          :skill="characterInfo.elementSkill"
          :calculator-value="calculatorValue"
          :level="normalLevel + calculatorValue.normalLevel"
        />
      </CollapseItem>
      <CollapseItem name="other" title="其他"></CollapseItem>
    </Collapse>
  </div>
</template>

<style scoped>
.skill-info-detail {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
}
</style>
