<script setup lang="ts">
import { computed, ref } from "vue";
import { ICalculatorValue, ISkillRate } from "@/types/interface";
import { calculateDamage } from "@/utils/calculate/method-calculation";
import { CalculateAnalysisType } from "@/utils/calculate/calculate-analysis";
import AtkTypeSelector from "@/component/AtkTypeSelector.vue";
import { getColorByElement } from "@/utils/get-color";
import { Slider } from "vant";
import { ElementalReactionType } from "@/constants";
const emit = defineEmits(["changed", "analysis"]);

interface IProps {
  skill: ISkillRate[];
  calculatorValue: ICalculatorValue;
  levelAdd?: number;
  name: string;
}
const skillLevel = defineModel<number>();
const { skill, calculatorValue, levelAdd, name } = defineProps<IProps>();
const atkType = ref<ElementalReactionType>(ElementalReactionType.None);

const calculatedResults = computed(() => {
  return skill.map((item: ISkillRate) => {
    if (!item) {
      return {
        label: "-",
        common: "-",
        crit: "-",
        desire: "-",
        elementType: "",
      };
    }

    let {
      RESULT_DMG,
      CRITICAL_DMG,
      DEISTE_DMG,
      elementType,
      HEAL_VALUE,
      SHIELD_VALUE,
      BASE_DMG,
      ADDITIONAL_DMG,
      BONUS_DMG,
      MAGNIFICATION_DMG,
      REACTION_DMG,
      PROMOTE_DMG,
      EVA_DMG,
    } = calculateDamage({
      calculatorValue,
      attackType: item.attackType,
      elementType: item.elementType,
      rate: item.rate,
      level: skillLevel.value ? skillLevel.value + levelAdd : 1,
      atkType: atkType.value,
      special: item.special,
    });

    if (HEAL_VALUE > 0) {
      return {
        label: item.label,
        common: Math.round(HEAL_VALUE),
        crit: "-",
        desire: "-",
        elementType,
      };
    }
    if (SHIELD_VALUE > 0) {
      return {
        label: item.label,
        common: Math.round(SHIELD_VALUE),
        crit: "-",
        desire: "-",
        elementType,
      };
    }
    return {
      label: item.label,
      common: Math.round(RESULT_DMG),
      crit: Math.round(RESULT_DMG + CRITICAL_DMG),
      desire: Math.round(RESULT_DMG + DEISTE_DMG),
      elementType,
      detail: {
        BASE_DMG,
        ADDITIONAL_DMG,
        BONUS_DMG,
        MAGNIFICATION_DMG,
        EVA_DMG,
        CRITICAL_DMG,
        REACTION_DMG,
        RESULT_DMG,
        PROMOTE_DMG,
      } as CalculateAnalysisType,
    };
  });
});

const panelName = computed(() => {
  return name + (skillLevel.value ? `（Lv.${skillLevel.value + levelAdd}）` : "");
});
</script>

<template>
  <div class="skill-info-detail">
    <span>{{ panelName }}</span>
    <span v-if="skillLevel" class="slider-wrap">
      <span>天赋等级：</span>
      <Slider v-model="skillLevel" max="10" min="1" @change="emit('changed')">
        <template #button>
          <div class="custom-button">{{ skillLevel + levelAdd }}</div>
        </template>
      </Slider>
    </span>
    <template v-if="skill.length > 0">
      <div class="skill-info-item">
        <span></span>
        <span>暴击值</span>
        <span>期望值</span>
        <span>一般值</span>
      </div>
      <div
        :class="['skill-info-item', getColorByElement(item.elementType)]"
        v-for="item of calculatedResults"
        :key="item.label"
        @click="emit('analysis', item.detail)"
      >
        <span class="skill-info-item-label">{{ item.label }}</span>
        <data :data-text="item.crit">{{ item.crit }}</data>
        <data :data-text="item.desire">{{ item.desire }}</data>
        <data :data-text="item.common">{{ item.common }}</data>
      </div>
    </template>
    <template v-else>
      <div class="skill-info-empty">无数值。</div>
    </template>
  </div>
  <AtkTypeSelector v-if="skill.length > 0" v-model="atkType" size="small" />
</template>

<style scoped>
.skill-info-detail {
  font-size: 14px;
  padding: 4px 8px;
  margin-bottom: 16px;
  border-radius: 0 0 4px 4px;
  color: #fff;
  text-shadow: var(--stroke-4) 0 0 2px;
  background-color: var(--main-text);
}
.skill-info-item {
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 2fr;
  text-align: left;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: var(--button-bg);
  }
}
.skill-info-item-label {
  color: #fff;
  transform: skewX(0);
}
.skill-info-empty {
  text-align: center;
  margin-top: 12px;
}

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
.custom-button {
  width: var(--van-slider-button-width);
  height: var(--van-slider-button-height);
  background: var(--van-slider-button-background);
  border-radius: var(--van-slider-button-radius);
  box-shadow: var(--van-slider-button-shadow);
  text-align: center;
  color: var(--main-text);
  text-shadow: none;
}
</style>
