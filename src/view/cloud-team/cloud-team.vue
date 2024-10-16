<script setup lang="ts">
import { ref } from "vue";
import TabTitle from "@/component/TabTitle.vue";
import CalculationDataSelector from "@/component/CalculationDataSelector.vue";
import { Popup, Icon } from "vant";
import { IUesrSavedCalculations } from "@/constants/db";
import { Character } from "@/constants/characters-config/character";
import { Weapons } from "@/constants/characters-config/weapon";
import { IRelicItem } from "@/constants/characters-config/relic-class";

const show = ref(false);
const characterSelect = ref<IUesrSavedCalculations[]>([null, null, null, null]);
const selectedIndex = ref(0);

const setSlotByIndex = (index) => {
  show.value = true;
  selectedIndex.value = index;
};
const handleCharacterChange = (result: IUesrSavedCalculations) => {
  characterSelect.value[selectedIndex.value] = result;
  show.value = false;
};

const getAvatarIcon = (enkaId: number) => {
  return Character.find((c) => c.enkaId === enkaId).icons.avatarIcon;
};
const getCharacterName = (enkaId: number) => {
  return Character.find((c) => c.enkaId === enkaId).name;
};

const getWeaponIcon = (enkaId: number) => {
  return Weapons.find((c) => c.enkaId === enkaId).icon;
};

const getRelics = (relicList: string) => {
  return JSON.parse(relicList) as IRelicItem[];
};
</script>

<template>
  <TabTitle>云配队</TabTitle>
  <div class="tips">从本地保存数据中，选择角色数据填入</div>
  <div class="team-list">
    <div class="team-list__item" v-for="(item, index) in characterSelect" :key="index">
      <div class="team-list__item-avatar" @click="setSlotByIndex(index)">
        <template v-if="item">
          <img :src="getAvatarIcon(item.characterEnkaId)" />
          <div class="team-list__item-name">{{ getCharacterName(item.characterEnkaId) }}</div>
        </template>
        <div class="empty" v-else></div>
      </div>
      <div class="team-list__item-detail">
        <div>{{ item?.title || "" }}</div>
        <div v-if="item" class="team-list__item-imgs">
          <img :src="getWeaponIcon(item.weaponEnkaId)" />
          <img
            v-for="(relic, index) in getRelics(item.relicList)"
            :key="index"
            class="relic-icon"
            v-lazy="relic?.icon || ''"
          />
        </div>
        <div class="team-list__item-options">
          <span>编辑<Icon name="edit" /></span>
          <span v-if="item">清除<Icon name="close" /></span>
        </div>
      </div>
    </div>
  </div>
  <Popup class="data-popup" teleport="#app" v-model:show="show" style="max-height: 80%" position="top">
    <CalculationDataSelector :show-data-popup="show" @recalculation="handleCharacterChange" />
  </Popup>
</template>

<style src="./style.css" />
