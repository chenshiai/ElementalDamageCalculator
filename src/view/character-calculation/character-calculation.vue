<template>
  <TabTitle>角色伤害计算</TabTitle>
  <div class="data-panel__title">角色</div>
  <CharacterInfo v-model="characterInfo" v-model:constellation="constellation" />
  <div class="data-panel__title">武器</div>
  <WeaponInfo v-model="weapon" v-model:affix="affix" />
  <div class="data-panel__title">圣遗物</div>
  <RelicInfo v-model="relicList" :relic-suit-texts="relicSuitTexts" />
  <div class="data-panel__title">增益情况</div>
  <BuffInfo
    v-model="buffs"
    v-model:character-buffs="characterBuffs"
    v-model:weapon-buffs="weaponBuffs"
    v-model:relic-buffs="relicBuffs"
  />
  <div v-for="key in Object.keys(CalculationPanel)">{{ key }}: {{ CalculationPanel[key] }}</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import TabTitle from "@/component/TabTitle.vue";
import useCharacterInfo, { CharacterInfo } from "./modules/chararcter-info";
import useWeaponInfo, { WeaponInfo } from "./modules/weapon-info";
import useRelicInfo, { RelicInfo } from "./modules/relic-info";
import useBuffInfo, { BuffInfo } from "./modules/buff-info";
import CalculatorValueClass from "@/constants/characters-config/calculator-value-class";
import { ICalculatorValue } from "@/types/interface";
import { ActionOn, AppendProp } from "@/types/enum";
import calculateBuffs from "@/utils/calculate/calculate-buffs";
import { calculateRelicStat, calculateWeaponSubStat } from "@/utils/calculate/calculate-equip";

const { characterInfo, constellation, characterBuffs } = useCharacterInfo();
const { weapon, affix, weaponBuffs } = useWeaponInfo();
const { relicList, relicBuffs, relicSuitTexts } = useRelicInfo();
const { buffs } = useBuffInfo();

function getBaseData(data: ICalculatorValue) {
  const characterBaseAtk = characterInfo.value.baseATK;
  const weaponBaseAtk = weapon.value.weaponStats.find((i) => i.appendPropId === AppendProp.BASE_ATTACK).statValue;
  const baseATK = characterBaseAtk + weaponBaseAtk;

  return {
    constellation: constellation.value,
    baseATK,
    baseDEF: characterInfo.value.baseDEF,
    baseHP: characterInfo.value.baseHP,
    level: characterInfo.value.level,
  };
}

const CalculationPanel = computed(() => {
  if (!characterInfo.value || !weapon.value) return {};
  const allBuffs = [...relicBuffs.value, ...characterBuffs.value, ...weaponBuffs.value, ...buffs.value];

  return [
    getBaseData,
    (data: ICalculatorValue) => calculateWeaponSubStat(data, weapon.value),
    (data: ICalculatorValue) => calculateRelicStat(data, relicList.value),
    // 计算直接提升面板的buff
    (data: ICalculatorValue) => calculateBuffs(data, allBuffs, ActionOn.Direct),
    // 计算间接提升面板的buff
    (data: ICalculatorValue) => calculateBuffs(data, allBuffs, ActionOn.Indirect),
    // 计算不作用于面板的buff
    (data: ICalculatorValue) => calculateBuffs(data, allBuffs, ActionOn.External),
  ].reduce(
    (accumulator, currentFunction) => {
      return { ...accumulator, ...currentFunction(accumulator) };
    },
    new CalculatorValueClass()
  );
});
</script>
