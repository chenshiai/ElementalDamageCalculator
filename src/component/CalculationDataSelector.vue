<script setup lang="ts">
import { showConfirmDialog, Tab, Tabs, Icon } from "vant";
import db from "@/utils/db";
import { IUserSavedCalculationData, IPlayerInfoData, calDB, playerInfoDB } from "@/constants/db";
import { ref, watchEffect, computed, onMounted } from "vue";
import { getEnkaUI } from "@/utils/decorator";
import useImport from "@/utils/enka/useImport";
import { Character } from "@/constants/characters-config/character";

const emit = defineEmits<{
  recalculation: [value: IUserSavedCalculationData];
}>();

const namecards = ref([]);
const pfps = ref([]);
onMounted(() => {
  const date = new Date();
  fetch(`/json/namecards.json?date=${date.getDay()}`)
    .then((res) => res.json())
    .then((res) => {
      namecards.value = res;
    });
  fetch(`/json/pfps.json?date=${date.getDay()}`)
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

/** 读取本地数据库 */
const getLocalData = () => {
  db.getAll(calDB.storeName).then((res) => {
    /** 旧数据补丁 - 旧数据缺少secondElement属性 */
    res.forEach((item) => {
      if (!item.panel.secondElement)
        item.panel.secondElement = Character.find((cha) => item.characterEnkaId === cha.enkaId)?.secondElement;
    });
    localData.value = res;
  });
  db.getAll(playerInfoDB.storeName).then((res) => {
    playerData.value = res;
  });
};

watchEffect(() => {
  if (props.showDataPopup) getLocalData();
});

// 删除数据
const deleteLocalData = (title: string) => {
  showConfirmDialog({
    title: "提示",
    message: "确定要删除该条数据吗？",
  })
    .then(() => {
      db.delete(calDB.storeName, title);
      const index = localData.value.findIndex((item) => item.title === title);
      localData.value.splice(index, 1);
    })
    .catch(() => {});
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

import { getAppendPropName2, percentProps } from "@/constants/append-prop";
import useTeamData from "@/view/cloud-team/useTeamData";
const { getAvatarIcon, getCharacterName, getWeaponIcon, getWeaponName, getRelics } = useTeamData();

const getStatValueText = (stat): string => {
  const statValue = stat.statValue;
  const shouldAppendPercent = percentProps.includes(stat.mainPropId || stat.appendPropId);
  return `+${statValue}${shouldAppendPercent ? "%" : ""}`;
};

/** 数据导入 */
const { uid, waiting, importLoading, importGameInfo } = useImport();
const update = (playerUid) => {
  uid.value = playerUid;
  if (waiting.value > 0 || importLoading.value) return;
  importGameInfo().then(() => {
    getLocalData();
  });
};
const replayText = computed(() => {
  return importLoading.value ? "读取中..." : waiting.value > 0 ? `${waiting.value}s后可再次获取` : "更新数据";
});
</script>

<template>
  <div class="tips">
    点击展开查看圣遗物详情。
    <span style="color: green">绿色</span>按钮「填入」， <span style="color: red">红色</span>按钮「删除」
  </div>
  <div class="data-selector-title">本地数据存档</div>
  <Tabs v-model:active="filterActive">
    <Tab title="全部数据"></Tab>
    <Tab title="自定义数据"></Tab>
    <Tab v-for="item in playerData" :key="item.uid" :title="item.nickname">
      <section class="player-info">
        <img class="namecard" :src="getEnkaUI(namecards[item.nameCardId].icon, false)" />
        <div style="width: 126px; text-align: center; margin: 6px 0 6px">
          <img class="profile" :src="getEnkaUI(pfps[item.profilePicture.id].iconPath, false)" />
          <data class="uid">UID {{ item.uid }}</data>
        </div>
        <span class="replay-icon" @click="update(item.uid)">
          {{ replayText }}
        </span>
        <div style="flex: 1">
          <data class="nickname">{{ item.nickname }}</data>
          <data class="signature">{{ item.signature }}</data>
        </div>
      </section>
    </Tab>
  </Tabs>

  <section class="data-popup__collapse">
    <details name="a" class="data-popup__collapse-item" v-for="item in localDataFilter" :key="item.title">
      <summary class="data-title">
        <div>
          <data>{{ item.title }}</data>
          <div class="first-row">
            <div class="avatar">
              <img :src="getAvatarIcon(item.characterEnkaId)" />
              <div class="conts">{{ item.panel.constellation }}</div>
              <div class="name">{{ getCharacterName(item.characterEnkaId) }}</div>
            </div>
            <div class="weapon">
              <img class="weapon-icon" :src="getWeaponIcon(item.weaponEnkaId)" />
              <div class="name">{{ getWeaponName(item.weaponEnkaId) }}</div>
              <div class="conts">精炼{{ item.affix }}阶</div>
            </div>
          </div>
        </div>
        <Icon
          class="replay"
          name="add"
          size="24"
          @click.stop="
            (e) => {
              e.preventDefault();
              recalculation(item);
            }
          "
          text="填入"
        />
        <Icon
          class="delete"
          name="delete-o"
          size="24"
          @click.stop="
            (e) => {
              e.preventDefault();
              deleteLocalData(item.title);
            }
          "
          text="删除"
        />
        <Icon class="eye" size="24" name="eye-o" />
      </summary>
      <div class="second-row">
        <div class="relic-detail" v-for="(relic, index) in getRelics(item.relicList)" :key="index">
          <template v-if="relic">
            <div class="relic-detail__hearder">
              <div class="relic-name">
                <img class="relic-icon" v-lazy="relic.icon" />
                <span>{{ relic.name }}</span>
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
.data-popup__collapse {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.data-popup__collapse-item {
  padding: 10px;
  border-bottom: 1px solid #000000ab;
}
.eye {
  position: absolute;
  right: 0;
  display: none;
}
.data-popup__collapse-item[open] .eye {
  display: block;
}
.data-popup__collapse-item .data-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  data {
    width: 100%;
    font-size: 12px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.replay {
  position: absolute;
  color: green;
  bottom: 0;
  right: 0;
  &:hover {
    background-color: var(--light-text);
  }
  display: block;
}
.delete {
  position: absolute;
  color: red;
  top: 0;
  right: 0;
  display: block;
  &:hover {
    background-color: var(--light-text);
  }
}
.replay-icon {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 6px;
  margin-right: 16px;
  color: #fff;
  text-shadow: 0 0 4px #000;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 0 6px;
}
.first-row {
  display: flex;
  gap: 10px; /* 间距 */

  .weapon {
    .conts,
    .name {
      font-size: 12px;
    }
    .weapon-icon {
      display: block;
      height: 24px;
      border: 1px solid #000000ab;
      border-radius: 4px;
      width: 24px;
    }
  }

  .avatar {
    position: relative;
    border-radius: 4px;
    height: 64px;
    width: 64px;
    border: 2px solid #000000ab;
    img {
      width: 100%;
    }
    .conts,
    .name {
      font-size: 12px;
      text-align: center;
      background-color: #000000ab;
      position: absolute;
      color: #fff;
    }
    .name {
      bottom: 0;
      width: 100%;
      line-height: 14px;
    }
    .conts {
      top: 0;
      right: 0;
      width: 14px;
      border-radius: 0 0 0 4px;
    }
  }
}

.second-row {
  position: absolute;
  padding: 16px;
  gap: 10px;
  width: 100%;
  left: 0;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  box-sizing: border-box;
  background-color: #ffffffea;
}
@media screen and (min-width: 768px) {
  .data-popup__collapse {
    grid-template-columns: repeat(3, 1fr);
  }
  .second-row {
    grid-template-columns: repeat(3, 1fr);
  }
  .data-popup__collapse-item .data-title {
    data {
      width: 100%;
      font-size: 14px;
    }
  }
}
@media screen and (min-width: 1200px) {
  .second-row {
    position: fixed;
    top: 0;
    right: 0;
    width: 26%;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 1280px) {
  .data-popup__collapse {
    grid-template-columns: repeat(4, 1fr);
  }
}
.relic-detail {
  position: relative;
  font-size: 12px;
}
.relic-icon {
  border-radius: 100%;
  height: 32px;
  width: 32px;
  padding: 2px;
  box-shadow: inset 0 0 0 2px var(--light-text);
  border: 2px solid #000000ab;
  background: var(--bg);
}
.relic-name {
  font-size: 14px;
  line-height: 32px;
  display: flex;
  align-items: center;
  gap: 4px;
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
  text-shadow: 0 0 4px #000;
}
.player-info .namecard {
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
}
.player-info .profile {
  width: 46px;
  border: solid 2px var(--light-text);
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1);
}
.player-info .nickname {
  font-size: 20px;
  line-height: 30px;
  margin-top: 6px;
}
.player-info .signature {
  font-size: 12px;
  padding-right: 16px;
}
.player-info .uid {
  font-size: 12px;
  line-height: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
}
</style>
