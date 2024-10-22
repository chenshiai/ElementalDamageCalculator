<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";
import TabTitle from "@/component/TabTitle.vue";
import CharacterPanel from "@/component/CharacterPanel.vue";

import { ICalculatorValue } from "@/types/interface";
import CalculatorValueClass from "@/constants/characters-config/calculator-value-class";

import useCharacterInfo, { CharacterInfo } from "./modules/chararcter-info";
import useWeaponInfo, { WeaponInfo } from "./modules/weapon-info";
import useRelicInfo, { RelicInfo } from "./modules/relic-info";
import useBuffInfo, { BuffInfo } from "./modules/buff-info";
import useSkillInfo, { SkillInfo } from "./modules/skill-info";

/** @module 页面展示用数据 */
const { characterInfo, constellation, characterBuffs, initCharacterInfo } = useCharacterInfo();
const { weapon, affix, weaponBuffs, initWeaponInfo } = useWeaponInfo();
const { relicList, relicBuffs, relicSuitTexts, initRelicInfo } = useRelicInfo();
const { buffs } = useBuffInfo();
const { normalLevel, skillLevel, burstLevel, initSkillInfo } = useSkillInfo();

/** @module 面板计算 */
import calculationPanel from "@/utils/calculate/calculate-panel";
import { useStore } from "vuex";
const store = useStore();
const CalculatorValue = computed<ICalculatorValue>(() => {
  if (!characterInfo.value || !weapon.value) return new CalculatorValueClass();
  return calculationPanel({
    characterInfo: characterInfo.value,
    weapon: weapon.value,
    relicList: relicList.value,
    characterBuffs: characterBuffs.value,
    weaponBuffs: weaponBuffs.value,
    relicBuffs: relicBuffs.value,
    buffs: buffs.value,
    constellation: constellation.value,
    baseResistance: store.state.teamBuffs.baseResistance,
    enemyLevel: store.state.teamBuffs.enemyLevel,
    normalLevel: normalLevel.value,
    skillLevel: skillLevel.value,
    burstLevel: burstLevel.value,
  });
});

/** @module 数据保存 */
import { IUesrSavedCalculations, calDB } from "@/constants/db";
import SaveCalculation from "@/component/SaveCalculation.vue";
import db from "@/utils/db";
const saveCalculationResult = (title: string) => {
  const data: IUesrSavedCalculations = {
    title,
    characterEnkaId: characterInfo.value?.enkaId,
    weaponEnkaId: weapon.value?.enkaId,
    affix: affix.value,
    relicList: JSON.stringify(relicList.value),
    panel: CalculatorValue.value,
  };
  db.add(calDB.storeName, data);
};

/** @module 数据重算（再次编辑） */
import { Character } from "@/constants/characters-config/character";
import { Weapons } from "@/constants/characters-config/weapon";
const recalculation = (data: IUesrSavedCalculations) => {
  characterInfo.value = Character.find((c) => c.enkaId === data.characterEnkaId);
  weapon.value = Weapons.find((w) => w.enkaId === data.weaponEnkaId);
  constellation.value = data.panel.constellation;
  affix.value = data.affix;
  relicList.value = JSON.parse(data.relicList);
  normalLevel.value = data.panel.normalLevel;
  skillLevel.value = data.panel.skillLevel;
  burstLevel.value = data.panel.burstLevel;
};

/** @module 路由判断 */
import { useRoute } from "vue-router";
const route = useRoute();
watchEffect(() => {
  if (route.params.mode === "edit") {
    const data = sessionStorage.getItem("editCharacter");
    if (data) {
      recalculation(JSON.parse(data));
    }
  } else {
    initCharacterInfo();
    initRelicInfo();
    initSkillInfo();
    initWeaponInfo();
  }
});
const pageTitle = computed(() => {
  return route.params.mode === "edit" ? "编辑角色数据" : "创建角色数据";
});
</script>

<template>
  <TabTitle>{{ pageTitle }}</TabTitle>
  <div class="tips">均以满级数据计算。角色、武器和圣遗物可以自由搭配。</div>
  <CharacterInfo v-model="characterInfo" v-model:constellation="constellation" />
  <WeaponInfo v-model="weapon" v-model:affix="affix" />
  <RelicInfo v-model="relicList" :relic-suit-texts="relicSuitTexts" />
  <template v-if="characterInfo && weapon">
    <CharacterPanel :character-panel-data="CalculatorValue" :element-type="characterInfo?.element" />
    <BuffInfo
      v-model="buffs"
      v-model:character-buffs="characterBuffs"
      v-model:weapon-buffs="weaponBuffs"
      v-model:relic-buffs="relicBuffs"
      :character-info="characterInfo"
    />
    <SkillInfo
      :calculator-value="CalculatorValue"
      :character-info="characterInfo"
      :weapon="weapon"
      :affix="affix"
      v-model:normalLevel="normalLevel"
      v-model:skillLevel="skillLevel"
      v-model:burstLevel="burstLevel"
    />
    <SaveCalculation @save-data="saveCalculationResult" @recalculation="recalculation" />
  </template>
</template>
