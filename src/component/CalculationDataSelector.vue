<script setup lang="ts">
import { Button, SwipeCell, Tab, Tabs } from "vant";
import db from "@/utils/db";
import { IUserSavedCalculationData, IPlayerInfoData, calDB, playerInfoDB } from "@/constants/db";
import { ref, watchEffect, computed, onMounted, nextTick } from "vue";
import { getEnkaUI } from "@/constants/characters-config/append-prop";

const emit = defineEmits<{
  recalculation: [value: IUserSavedCalculationData];
}>();

const namecards = ref([]);
const pfps = ref([]);
onMounted(() => {
  fetch("/enkaData/namecards.json")
    .then((res) => res.json())
    .then((res) => {
      namecards.value = res;
    });
  fetch("/enkaData/pfps.json")
    .then((res) => res.json())
    .then((res) => {
      pfps.value = res;
    });
});
const props = defineProps({
  showDataPopup: {
    default: false,
  },
});
const localData = ref<IUserSavedCalculationData[]>([]);
const playerData = ref<IPlayerInfoData[]>([]);
const filterActive = ref(0);

watchEffect(() => {
  if (props.showDataPopup) {
    db.getAll(calDB.storeName).then((res) => {
      localData.value = res;
    });
    db.getAll(playerInfoDB.storeName).then((res) => {
      playerData.value = res;
    });
  }
});

// 删除数据
const deleteLocalData = (title: string) => {
  db.delete(calDB.storeName, title);
  const index = localData.value.findIndex((item) => item.title === title);
  localData.value.splice(index, 1);
};

const localDataFilter = computed(() => {
  if (filterActive.value === 0) {
    return localData.value;
  }
  return localData.value.filter((item) => {
    if (filterActive.value === 1) {
      return !item.owner;
    }
    return item.owner === playerData.value[filterActive.value - 2].uid;
  });
});

// 重算数据
const recalculation = (data: IUserSavedCalculationData) => {
  emit("recalculation", data);
};

import { Character } from "@/constants/characters-config/character";
import { Weapons } from "@/constants/characters-config/weapon";
import { IRelicItem } from "@/constants/characters-config/relic-class";
import { getAppendPropName2, percentProps } from "@/constants/characters-config/append-prop";
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
  <div class="tips">点击展开查看圣遗物详情。支持「填入」，左滑「删除」</div>
  <div class="data-selector-title">本地数据存档</div>
  <Tabs v-model:active="filterActive">
    <Tab title="全部数据"></Tab>
    <Tab title="自定义数据"></Tab>
    <Tab v-for="item in playerData" :key="item.uid" :title="item.nickname">
      <section class="player-info">
        <img class="namecard" :src="getEnkaUI(namecards[item.nameCardId].icon)" />
        <img class="profile" :src="getEnkaUI(pfps[item.profilePicture.id].iconPath)" />
        <div>
          <data class="nickname">{{ item.nickname }}</data>
          <data>{{ item.signature }}</data>
        </div>
      </section>
    </Tab>
  </Tabs>

  <section class="data-popup__collapse">
    <SwipeCell v-for="item in localDataFilter" :key="item.title">
      <details class="data-popup__collapse-item">
        <summary class="data-title">
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
            <Button class="replay" square type="primary" @click.stop="recalculation(item)">
              填入
            </Button>
          </div>
        </summary>
        <div class="second-row">
          <div class="relic-detail" v-for="(relic, index) in getRelics(item.relicList)" :key="index">
            <template v-if="relic">
              <img class="relic-icon" v-lazy="relic.icon" />
              <div class="relic-detail__hearder">
                <div class="relic-name">
                  {{ relic.name }}
                </div>
                <div class="relic-main-stats">
                  <span>{{ getAppendPropName2(relic.reliquaryMainstat.mainPropId) }}</span>
                  <span>{{ getStatValueText(relic.reliquaryMainstat) }}</span>
                </div>
              </div>
              <div
                class="relic-detail__stats"
                v-for="(subitem, index) in relic.reliquarySubstats"
                :key="subitem.appendPropId + index"
              >
                <label>{{ getAppendPropName2(subitem.appendPropId) }}</label>
                <span>{{ getStatValueText(subitem) }}</span>
              </div>
            </template>
            <div class="empty" v-else>该部位未佩戴圣遗物</div>
          </div>
        </div>
      </details>
      <template #right>
        <Button
          class="swipecell-right-button"
          square
          type="danger"
          @click.stop="deleteLocalData(item.title)"
          text="删除"
        />
      </template>
    </SwipeCell>
  </section>
  <div class="empty" v-show="localDataFilter.length === 0">无</div>
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
.replay {
  width: 60px;
  margin-left: auto;
  position: absolute;
  top: 0;
  right: 0;
  height: 92px;
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
  padding: 10px 16px 0 0;
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
.swipecell-right-button {
  height: 100%;
}
.player-info {
  position: relative;
  overflow: hidden;
  display: flex;
}
.player-info data {
  display: block;
  color: #fff;
  margin-left: 16px;
  text-shadow: 0 0 4px #000;
}
.player-info .namecard {
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
}
.player-info .profile {
  width: 60px;
  border: solid 2px var(--light-text);
  border-radius: 50%;
  margin: 16px;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1);
}
.player-info .nickname {
  font-size: 24px;
  line-height: 30px;
  margin-top: 6px;
}
.data-popup__collapse-item {
  border-bottom: 1px solid var(--border);
}
.data-popup__collapse-item .data-title {
  padding: 10px;
}
</style>
