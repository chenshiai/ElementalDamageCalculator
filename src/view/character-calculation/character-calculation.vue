<template>
  <TabTitle>角色伤害计算</TabTitle>
  <div class="tips">
    角色和武器的成长数据暂无，均以满级数据计算。
  </div>
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
  />
  <Cell
    v-if="characterInfo && weapon"
    class="eva-cell"
    @click="otherChecked = !otherChecked"
    center
    title="敌人等级、防御力、抗性调整"
    is-link
    :arrow-direction="otherChecked ? 'up' : 'down'"
  />
  <div v-show="otherChecked" class="data-panel">
    <DataItem v-model="enemyLevel" title="敌人的等级" :stepperMin="1" />
    <DataItem v-model="enemyResistance" title="敌人抗性%" :stepperMin="-999">
      <div class="extra-btn" @click="handleImagePreview">查看抗性表</div>
    </DataItem>
    <DataItem v-model="enemyWeaken" title="减少抗性%" :stepperMin="0" :stepperMax="300" />
    <DataItem v-model="reduceArmour" title="减少防御%" :stepperMin="0" :stepperMax="90" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { ImagePreview, Cell } from "vant";
import TabTitle from "@/component/TabTitle.vue";
import DataItem from "@/component/DataItem.vue";
import CharacterPanel from "@/component/CharacterPanel.vue";
import CalculatorValueClass from "@/constants/characters-config/calculator-value-class";
import { ICalculatorValue } from "@/types/interface";
import { ActionOn, AppendProp } from "@/types/enum";
import calculateBuffs from "@/utils/calculate/calculate-buffs";
import { calculateRelicStat, calculateWeaponSubStat } from "@/utils/calculate/calculate-equip";

import useCharacterInfo, { CharacterInfo } from "./modules/chararcter-info";
import useWeaponInfo, { WeaponInfo } from "./modules/weapon-info";
import useRelicInfo, { RelicInfo } from "./modules/relic-info";
import useBuffInfo, { BuffInfo } from "./modules/buff-info";
import { SkillInfo } from "./modules/skill-info";

const { characterInfo, constellation, characterBuffs } = useCharacterInfo();
const { weapon, affix, weaponBuffs } = useWeaponInfo();
const { relicList, relicBuffs, relicSuitTexts } = useRelicInfo();
const { buffs } = useBuffInfo();

const otherChecked = ref(false);
const enemyLevel = ref(90);
const enemyResistance = ref(10);
const enemyWeaken = ref(0);
const reduceArmour = ref(0);

const handleImagePreview = () => {
  ImagePreview(["https://saomdpb.com/IMG_1457.PNG"]);
};

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
    element: characterInfo.value.element,
    weapon: characterInfo.value.weapon,
  };
}

const CalculationPanel = computed<ICalculatorValue>(() => {
  if (!characterInfo.value || !weapon.value) return new CalculatorValueClass();
  const allBuffs = [...relicBuffs.value, ...characterBuffs.value, ...weaponBuffs.value, ...buffs.value];

  return [
    getBaseData,
    (data: ICalculatorValue) => calculateBuffs(data, allBuffs, ActionOn.Front),
    
    (data: ICalculatorValue) => calculateWeaponSubStat(data, weapon.value),
    (data: ICalculatorValue) => calculateRelicStat(data, relicList.value),
    // 计算直接提升面板的buff
    (data: ICalculatorValue) => calculateBuffs(data, allBuffs, ActionOn.Direct),
    // 计算间接提升面板的buff
    (data: ICalculatorValue) => calculateBuffs(data, allBuffs, ActionOn.Indirect),
    // 计算不作用于面板的buff
    (data: ICalculatorValue) => calculateBuffs(data, allBuffs, ActionOn.External),
  ].reduce((accumulator, currentFunction) => {
    return {
      ...accumulator,
      ...currentFunction(accumulator),
      enemyLevel: enemyLevel.value,
      enemyResistance: enemyResistance.value,
      enemyWeaken: enemyWeaken.value,
      reduceArmour: reduceArmour.value,
    };
  }, new CalculatorValueClass());
});
</script>
