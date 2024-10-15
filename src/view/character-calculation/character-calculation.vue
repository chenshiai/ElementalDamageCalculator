<script setup lang="ts">
import { computed, ref } from "vue";
import { ImagePreview } from "vant";
import TabTitle from "@/component/TabTitle.vue";
import DataItem from "@/component/DataItem.vue";
import CharacterPanel from "@/component/CharacterPanel.vue";
import db from '@/utils/db';

import { ICalculatorValue } from "@/types/interface";
import { ActionOn, AppendProp } from "@/types/enum";
import CalculatorValueClass from "@/constants/characters-config/calculator-value-class";

import calculateBuffs from "@/utils/calculate/calculate-buffs";
import { calculateRelicStat, calculateWeaponSubStat } from "@/utils/calculate/calculate-equip";

import useCharacterInfo, { CharacterInfo } from "./modules/chararcter-info";
import useWeaponInfo, { WeaponInfo } from "./modules/weapon-info";
import useRelicInfo, { RelicInfo } from "./modules/relic-info";
import useBuffInfo, { BuffInfo } from "./modules/buff-info";
import useSkillInfo, { SkillInfo } from "./modules/skill-info";

// 数据展示
const { characterInfo, constellation, characterBuffs } = useCharacterInfo();
const { weapon, affix, weaponBuffs } = useWeaponInfo();
const { relicList, relicBuffs, relicSuitTexts } = useRelicInfo();
const { buffs } = useBuffInfo();
const { normalLevel, skillLevel, burstLevel } = useSkillInfo();

const enemyLevel = ref(90);
const baseResistance = ref(10);

const handleImagePreview = () => {
  ImagePreview(["https://saomdpb.com/IMG_1457.PNG"]);
};

const CalculationPanel = computed<ICalculatorValue>(() => {
  if (!characterInfo.value || !weapon.value) return new CalculatorValueClass();
  const allBuffs = [...relicBuffs.value, ...characterBuffs.value, ...weaponBuffs.value, ...buffs.value];
  const characterBaseAtk = characterInfo.value.baseATK;
  const weaponBaseAtk = weapon.value.weaponStats.find((i) => i.appendPropId === AppendProp.BASE_ATTACK).statValue;

  return [
    (data: ICalculatorValue) => calculateBuffs(data, allBuffs, ActionOn.Front),
    (data: ICalculatorValue) => calculateWeaponSubStat(data, weapon.value),
    (data: ICalculatorValue) => calculateRelicStat(data, relicList.value),
    (data: ICalculatorValue) => calculateBuffs(data, allBuffs, ActionOn.Direct), // 计算直接提升面板的buff
    (data: ICalculatorValue) => calculateBuffs(data, allBuffs, ActionOn.Indirect), // 计算间接提升面板的buff
    (data: ICalculatorValue) => calculateBuffs(data, allBuffs, ActionOn.External), // 计算不作用于面板的buff
  ].reduce(
    (accumulator, currentFunction) => {
      return {
        ...accumulator,
        ...currentFunction(accumulator),
      };
    },
    new CalculatorValueClass({
      level: characterInfo.value.level,
      element: characterInfo.value.element,
      weapon: characterInfo.value.weapon,
      constellation: constellation.value,

      baseATK: characterBaseAtk + weaponBaseAtk,
      baseDEF: characterInfo.value.baseDEF,
      baseHP: characterInfo.value.baseHP,

      normalLevel: normalLevel.value,
      skillLevel: skillLevel.value,
      burstLevel: burstLevel.value,
      
      enemyLevel: enemyLevel.value,
      enemyPhysicalResistance: baseResistance.value,
      enemyPyroResistance: baseResistance.value,
      enemyElectroResistance: baseResistance.value,
      enemyHydroResistance: baseResistance.value,
      enemyAnemoResistance: baseResistance.value,
      enemyCryoResistance: baseResistance.value,
      enemyGeoResistance: baseResistance.value,
      enemyDendroResistance: baseResistance.value,
    })
  );
});

// 数据保存
const saveCalculationResult = () => {
  const data = {
    characterEnkaId: characterInfo.value?.enkaId,
    constellation: constellation.value,
    weaponEnkaId: weapon.value?.enkaId,
    affix: affix.value,
    relicList: relicList.value,
    normalLevel: normalLevel.value,
    skillLevel: skillLevel.value,
    burstLevel: burstLevel.value,
    enemyLevel: enemyLevel.value,
    baseResistance: baseResistance.value,
  }
  db
}
</script>

<template>
  <TabTitle>角色伤害计算</TabTitle>
  <div class="tips">角色和武器的成长数据暂无，均以满级数据计算。</div>
  <CharacterInfo v-model="characterInfo" v-model:constellation="constellation" />
  <WeaponInfo v-model="weapon" v-model:affix="affix" />
  <RelicInfo v-model="relicList" :relic-suit-texts="relicSuitTexts" />
  <CharacterPanel
    v-if="characterInfo && weapon"
    :character-panel-data="CalculationPanel"
    :element-type="characterInfo?.element"
  />
  <BuffInfo
    v-if="characterInfo && weapon"
    v-model="buffs"
    v-model:character-buffs="characterBuffs"
    v-model:weapon-buffs="weaponBuffs"
    v-model:relic-buffs="relicBuffs"
    :character-info="characterInfo"
  />
  <SkillInfo
    v-if="characterInfo && weapon"
    :calculator-value="CalculationPanel"
    :character-info="characterInfo"
    :weapon="weapon"
    :affix="affix"
    v-model:normalLevel="normalLevel"
    v-model:skillLevel="skillLevel"
    v-model:burstLevel="burstLevel"
  />
  <div class="data-panel">
    <DataItem v-model="enemyLevel" title="敌人的等级" :stepperMin="1" />
    <DataItem v-model="baseResistance" title="敌人抗性%" stepperMin="-999">
      <div class="extra-btn" @click="handleImagePreview">查看抗性表</div>
    </DataItem>
  </div>
</template>
