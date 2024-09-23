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
    :character-buffs="characterBuffs"
    :weapon-buffs="weaponBuffs"
    :relicBuffs="relicBuffs"
  />
</template>

<script setup lang="ts">
import TabTitle from "@/component/TabTitle.vue";
import useCharacterInfo, { CharacterInfo } from "./modules/chararcter-info";
import useWeaponInfo, { WeaponInfo } from "./modules/weapon-info";
import useRelicInfo, { RelicInfo } from "./modules/relic-info";
import useBuffInfo, { BuffInfo } from "./modules/buff-info";

const { characterInfo, constellation, characterBuffs } = useCharacterInfo();
const { weapon, affix, weaponBuffs } = useWeaponInfo();
const { relicList, relicBuffs, relicSuitTexts } = useRelicInfo();

const { buffs } = useBuffInfo();
</script>
