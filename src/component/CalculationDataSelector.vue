<script setup lang="ts">
import { Collapse, CollapseItem, Icon } from "vant";
import db from "@/utils/db";
import { IUesrSavedCalculations, calDB } from "@/constants/db";
import { ref, watchEffect } from "vue";
const emit = defineEmits<{
  recalculation: [value: IUesrSavedCalculations];
}>();

const opened = ref([]);
const props = defineProps({
  showDataPopup: {
    default: false,
  },
});
const localData = ref<IUesrSavedCalculations[]>([]);

watchEffect(() => {
  if (props.showDataPopup) {
    db.getAll(calDB.storeName).then((res) => {
      localData.value = res;
    });
  }
});

// 删除数据
const deleteLocalData = (title: string) => {
  db.delete(calDB.storeName, title);
  const index = localData.value.findIndex((item) => item.title === title);
  localData.value.splice(index, 1);
};

// 重算数据
const recalculation = (data: IUesrSavedCalculations) => {
  emit("recalculation", data);
};

import { Character } from "@/constants/characters-config/character";
import { Weapons } from "@/constants/characters-config/weapon";
import { IRelicItem } from "@/constants/characters-config/relic-class";
import { getAppendPropName, percentProps } from "@/constants/characters-config/append-prop";
const getAvatarIcon = (enkaId: number) => {
  return Character.find((c) => c.enkaId === enkaId).icons.avatarIcon;
};
const getCharacterName = (enkaId: number) => {
  return Character.find((c) => c.enkaId === enkaId).name;
};
const getWeaponIcon = (enkaId: number) => {
  return Weapons.find((c) => c.enkaId === enkaId).icon;
};
const getWeaponName = (enkaId: number) => {
  return Weapons.find((c) => c.enkaId === enkaId).name;
};
const getRelics = (relicList: string) => {
  return JSON.parse(relicList) as IRelicItem[];
};
const getStatValueText = (stat): string => {
  const statValue = stat.statValue;
  const shouldAppendPercent = percentProps.includes(stat.mainPropId || stat.appendPropId);
  return `+${statValue}${shouldAppendPercent ? "%" : ""}`;
};
</script>

<template>
  <div class="tips">点击展开查看圣遗物详情。支持「填入」「删除」</div>
  <div class="data-selector-title">本地保存数据</div>
  <Collapse class="data-popup__collapse" v-if="localData.length > 0" v-model="opened">
    <CollapseItem v-for="item in localData" :key="item.title" :is-link="false" title-class="data-title">
      <template #title>
        <span>{{ item.title }}</span>
        <div class="first-row">
          <img :src="getAvatarIcon(item.characterEnkaId)" />
          <div class="info">
            <div class="name">{{ getCharacterName(item.characterEnkaId) }}</div>
            <div class="conts">命之座：{{ item.panel.constellation }}</div>
          </div>
          <img :src="getWeaponIcon(item.weaponEnkaId)" />
          <div class="info">
            <div class="name">{{ getWeaponName(item.weaponEnkaId) }}</div>
            <div class="conts">精炼：{{ item.affix }}</div>
          </div>
        </div>
        <Icon name="records-o" @click.stop="recalculation(item)" size="26" class="replay-icon" />
        <Icon size="26" @click.stop="deleteLocalData(item.title)" class="delete-icon" name="delete-o" />
      </template>
      <div class="container">
        <div class="second-row">
          <div class="relic-detail" v-for="(relic, index) in getRelics(item.relicList)" :key="index">
            <template v-if="relic">
              <img class="relic-icon" v-lazy="relic.icon" />
              <div class="relic-detail__hearder">
                <div class="relic-name">
                  {{ relic.name }}
                </div>
                <div class="relic-main-stats">
                  <span>{{ getAppendPropName(relic.reliquaryMainstat.mainPropId) }}</span>
                  <span>{{ getStatValueText(relic.reliquaryMainstat) }}</span>
                </div>
              </div>
              <div
                class="relic-detail__stats"
                v-for="(subitem, index) in relic.reliquarySubstats"
                :key="subitem.appendPropId + index"
              >
                <label>{{ getAppendPropName(subitem.appendPropId) }}</label>
                <span>{{ getStatValueText(subitem) }}</span>
              </div>
            </template>
            <div class="empty" v-else>该部位未佩戴圣遗物</div>
          </div>
        </div>
      </div>
    </CollapseItem>
  </Collapse>
  <div class="empty" v-else>无</div>
</template>

<style scoped>
.data-selector-title {
  text-align: center;
}
.delete-icon {
  position: absolute;
  right: 16px;
  top: 50%;
  color: #f51e1e;
  transform: translateY(-50%);
}
.replay-icon {
  position: absolute;
  right: 66px;
  top: 50%;
  color: #2ee27f;
  transform: translateY(-50%);
}

.container {
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  gap: 10px; /* 间距 */
}
.first-row img {
  border-radius: 4px;
  height: 38px;
  border: 2px solid var(--border);
}

.first-row {
  display: flex;
  gap: 10px; /* 间距 */
}

.second-row {
  display: grid;
  gap: 4px;
  grid-template-columns: repeat(3, 1fr);
}
.relic-detail {
  position: relative;
  font-size: 12px;
  transform: scale(0.8);
}
.relic-icon {
  width: 40%;
  z-index: 1;
  top: -20%;
  right: -20%;
  position: absolute;
}
.relic-name {
  font-size: 14px;
  line-height: 32px;
}
.relic-main-stats {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}
.relic-detail__stats {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 14px;
}
.empty {
  text-align: center;
}
</style>
