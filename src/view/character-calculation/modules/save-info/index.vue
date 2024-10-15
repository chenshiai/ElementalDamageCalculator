<script setup lang="ts">
import { Popup, showFailToast, Field, Collapse, CollapseItem, Icon } from "vant";
import { ref } from "vue";
const emit = defineEmits(["save-data", "look-data", "recalculation"]);

// 保存数据
const showPopup = ref(false);
const remark = ref("");
const saveDataPop = () => {
  showPopup.value = true;
};
const saveData = () => {
  if (!remark.value) {
    showFailToast("数据命名为空");
    return;
  }
  emit("save-data", remark.value);
};

// 查看数据
import db from "@/utils/db";
import { IUesrSavedCalculations, calDB } from "@/constants/db";

const localData = ref<IUesrSavedCalculations[]>([]);
const showDataPopup = ref(false);
const opened = ref([]);

const lookDataPop = () => {
  showDataPopup.value = true;
  db.getAll(calDB.storeName).then((res) => {
    localData.value = res;
  });
  // emit("look-data", localData.value);
};

// 获取数据细节文案
import { Character } from "@/constants/characters-config/character";
import { Weapons } from "@/constants/characters-config/weapon";
import { IRelicItem } from "@/constants/characters-config/relic-class";
import { getAppendPropName, percentProps } from "@/constants/characters-config/append-prop";
const getAvatarIcon = (enkaId: number) => {
  return Character.find((c) => c.enkaId === enkaId).icons.avatarIcon;
};
const geCharacterName = (enkaId: number) => {
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

// 删除数据
const deleteLocalData = (title: string) => {
  db.delete(calDB.storeName, title);
  const index= localData.value.findIndex(item=>item.title===title);
  localData.value.splice(index, 1);
};

// 重算数据
const recalculation = (data: IUesrSavedCalculations ) => {
  emit("recalculation", data);
};
</script>

<template>
  <div class="save-data">
    <div class="save-btn" @click="saveDataPop">保存数据</div>
    <div class="save-btn" @click="lookDataPop">查看数据</div>
  </div>
  <Popup class="data-popup" teleport="#app" v-model:show="showPopup" position="top">
    <div class="tips">
      数据将会存储在本地浏览器的缓存中。若清空浏览器缓存，则数据也一会同清空。重复命名的新数据会替换旧数据。
    </div>
    <Field v-model="remark" type="text" label="数据命名" placeholder="给这条数据取个名字吧" />
    <div class="popup-buttons" @click="saveData">保存数据</div>
  </Popup>

  <Popup class="data-popup" teleport="#app" v-model:show="showDataPopup" position="top">
    <div class="tips">点击对应数据，可以展开查看详情。支持「重算」「删除」</div>
    <Collapse class="data-popup__collapse" v-if="localData.length > 0" v-model="opened">
      <CollapseItem v-for="item in localData" :key="item.title" :is-link="false" title-class="data-title">
        <template #title>
          {{ item.title }}
          <Icon name="replay" @click.stop="recalculation(item)" size="26" class="replay-icon" />
          <Icon size="26" @click.stop="deleteLocalData(item.title)" class="delete-icon" name="delete-o" />
        </template>
        <div class="container">
          <div class="first-row">
            <img :src="getAvatarIcon(item.characterEnkaId)" />
            <div class="info">
              <div class="name">{{ geCharacterName(item.characterEnkaId) }}</div>
              <div class="conts">命之座：{{ item.constellation }}</div>
            </div>
            <img :src="getWeaponIcon(item.weaponEnkaId)" />
            <div class="info">
              <div class="name">{{ getWeaponName(item.weaponEnkaId) }}</div>
              <div class="conts">精炼：{{ item.affix }}</div>
            </div>
          </div>
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
    <div class="empty" v-else>暂无数据</div>
  </Popup>
</template>

<style scoped>
.save-data {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.save-btn {
  width: 45%;
  background-color: #fff;
  border: 1px solid var(--button-bg);
  text-align: center;
  line-height: 40px;
  margin-bottom: 12px;
  border-radius: 4px;
}

.popup-buttons {
  line-height: 40px;
  width: 100%;
  text-align: center;
  flex: 1;
  font-size: 20px;
  background-color: var(--button-bg);
  color: #fff;
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
  border-radius: 100%;
  width: 38px;
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
