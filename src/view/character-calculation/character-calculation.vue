<template>
  <TabTitle>角色伤害计算</TabTitle>
  <CharacterInfo v-model="characterInfo" v-model:constellation="constellation" />
  <WeaponInfo v-model="weapon" v-model:affix="affix" />
  <RelicInfo v-model="relics" />
</template>

<script setup lang="ts">
import TabTitle from "@/component/TabTitle.vue";
import useCharacterInfo, { CharacterInfo } from "./modules/chararcter-info";
import useWeaponInfo, { WeaponInfo } from "./modules/weapon-info";
import useRelicInfo, { RelicInfo } from "./modules/relic-info";

const { characterInfo, setCharacterInfo, constellation, setConstellation } = useCharacterInfo();
const { weapon, affix, setWeapon, setAffix } = useWeaponInfo();
const { relics } = useRelicInfo();
</script>
