<template>
  <TabTitle>角色伤害计算</TabTitle>
  <CharacterInfo v-model="characterInfo" v-model:constellation="constellation" />
</template>

<script setup lang="ts">
import TabTitle from "@/component/TabTitle.vue";
import useCharacterInfo, { CharacterInfo } from "./modules/chararcter-info";

const { characterInfo, setCharacterInfo, constellation, setConstellation } = useCharacterInfo();
</script>
