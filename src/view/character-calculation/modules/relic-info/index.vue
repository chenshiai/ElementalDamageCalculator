<script setup lang="ts">
import { Popup, Search, Icon, showSuccessToast, showFailToast, Button } from "vant";
import { ref, computed } from "vue";

import relics from "@/constants/characters-config/relic";
import {
  IRelicItem,
  MainstatType,
  ReliceMainStats,
  ReliceMainStats_Four,
  RelicItem,
  RelicStatType,
} from "@/constants/characters-config/relic-class";
import { IRelicBase } from "@/types/interface";
import { AppendProp } from "@/types/enum";
import {
  getAppendPropName,
  percentProps,
  RelicText,
  EquipTypeMainstats,
  EquipTypeSubstats,
} from "@/constants/characters-config/append-prop";
import { getlinearBackGroundClassByRarity } from "@/utils/getBackGroundClassByRarity";
import { IRelicSuitText } from "./index";

interface IProps {
  relicSuitTexts: IRelicSuitText[];
}

/** 圣遗物信息展示 */
const relicList = defineModel<IRelicItem[]>();
const { relicSuitTexts } = defineProps<IProps>();
const getStatValueText = (stat): string => {
  const statValue = stat.statValue;
  const shouldAppendPercent = percentProps.includes(stat.mainPropId || stat.appendPropId);
  return `+${statValue}${shouldAppendPercent ? "%" : ""}`;
};

/** 圣遗物搜索 */
const searchRelic = ref("");
const filteredRelics = computed(() => {
  return relics.filter((item) => item.name.indexOf(searchRelic.value) >= 0);
});

/** 选择指定部位的圣遗物 */
const showPopup = ref(false);
const relicTitle = ref("");
const selectedPartIndex = ref(0);
const selectRelic = (index: number) => {
  showPopup.value = true;
  // 暂存选择部位的下标
  selectedPartIndex.value = index;
  // 根据选择部位的下标来显示部位名称
  relicTitle.value = RelicText[index];

  // 若选择部位已有圣遗物，则填充数据
  if (relicList.value[index]) {
    const data = JSON.parse(JSON.stringify(relicList.value[index]));
    setStatBase.value = data;
    setStatForm.value = {
      reliquaryMainstat: data.reliquaryMainstat,
      reliquarySubstats: data.reliquarySubstats,
    };
  }
};

const setStatBase = ref<IRelicBase>();
// 主副词条表单
const setStatForm = ref<RelicStatType>({
  reliquaryMainstat: {} as MainstatType,
  reliquarySubstats: [],
});
const addRelic = () => {
  if (!setStatForm.value.reliquaryMainstat.mainPropId) {
    showFailToast("主词条未选择");
    return;
  }

  const relicItem = new RelicItem({
    ...setStatBase.value,
    ...setStatForm.value,
  });

  relicList.value.splice(selectedPartIndex.value, 1, relicItem);
  closePopup();
  showSuccessToast("修改成功");
};
const removeRelic = () => {
  if (!relicList.value[selectedPartIndex.value]) return;
  const name = relicList.value[selectedPartIndex.value].name;
  relicList.value.splice(selectedPartIndex.value, 1, null);
  closePopup();
  showSuccessToast(`已卸下\n[${name}]`);
};
const closePopup = () => {
  showPopup.value = false;
  setStatBase.value = null;
  setStatForm.value = {
    reliquaryMainstat: {} as MainstatType,
    reliquarySubstats: [],
  };
};
/** 设置圣遗物属性弹窗 */
const showSetRelicStatPop = (equip: IRelicBase[]) => {
  // 根据部位下标来获取部位的具体类型和图标
  setStatBase.value = equip[selectedPartIndex.value];
};

// 主词条变化后，删除相同的副词条
const mainStatChanged = () => {
  const index = setStatForm.value.reliquarySubstats.findIndex((item) => {
    return item.appendPropId === setStatForm.value.reliquaryMainstat.mainPropId;
  });
  setStatForm.value.reliquarySubstats.splice(index, 1);
};
// 添加一个副词条
const addSubstat = () => {
  setStatForm.value.reliquarySubstats.push({
    appendPropId: null,
    statValue: 0,
  });
};

// 删除一个副词条
const deleteSubStat = (index) => {
  setStatForm.value.reliquarySubstats.splice(index, 1);
};

// 根据部位类型来获取主词条列表
const mainStatFilter = computed(() => {
  if (!setStatBase.value) return [];
  if (setStatBase.value.rankLevel === 5) {
    return ReliceMainStats.filter((item) => {
      return EquipTypeMainstats[setStatBase.value.equipType].includes(item.mainPropId);
    });
  }
  if (setStatBase.value.rankLevel === 4) {
    return ReliceMainStats_Four.filter((item) => {
      return EquipTypeMainstats[setStatBase.value.equipType].includes(item.mainPropId);
    });
  }
});

// 副词条列表过滤，排除已选择过的词条，但不排除本身选择的词条
const subStatFilter = (selectedId: AppendProp) => {
  const mainPropId = setStatForm.value.reliquaryMainstat.mainPropId;
  const appendPropIds = setStatForm.value.reliquarySubstats.map((substat) => substat.appendPropId);

  return EquipTypeSubstats.filter(
    (appendPropId) => appendPropId !== mainPropId && !appendPropIds.includes(appendPropId)
  ).concat([selectedId]);
};
</script>

<template>
  <!-- 圣遗物信息 -->
  <div class="data-panel__title">圣遗物</div>
  <div class="relic-info">
    <div class="relic-detail" v-for="(item, index) in relicList" :key="index" @click="selectRelic(index)">
      <template v-if="item">
        <img class="relic-icon" v-lazy="item.icon" />
        <div class="relic-detail__hearder">
          <div :class="['relic-name', getlinearBackGroundClassByRarity(item.rankLevel - 1)]">
            {{ item.name }}
            <!-- <span class="relic-level">+{{ item.level }}</span> -->
          </div>
          <div class="relic-main-stats">
            <span>{{ getAppendPropName(item.reliquaryMainstat.mainPropId) }}</span>
            <span>{{ getStatValueText(item.reliquaryMainstat) }}</span>
          </div>
        </div>
        <div
          class="relic-detail__stats"
          v-for="(subitem, index) in item.reliquarySubstats"
          :key="subitem.appendPropId + index"
        >
          <label>{{ getAppendPropName(subitem.appendPropId) }}</label>
          <span>{{ getStatValueText(subitem) }}</span>
        </div>
      </template>
      <div class="empty" v-else>+ 添加圣遗物</div>
    </div>
    <div class="relic-detail relic-suit-detail">
      <div class="relic-suit-text" v-for="relicSuitText in relicSuitTexts">
        <div class="relic-suit-text__title">{{ relicSuitText.name }}</div>
        <div class="relic-suit-text__texts">
          <div v-for="text in relicSuitText.texts" :key="text">{{ text }}</div>
        </div>
      </div>
    </div>
  </div>
  <!-- 圣遗物搜索 -->
  <Popup class="relic-popup" v-model:show="showPopup" position="top" style="height: 46%" @close="closePopup">
    <template v-if="!setStatBase">
      <div class="relic-search">
        <span>~ {{ relicTitle }} ~</span>
        <Search v-model="searchRelic" placeholder="搜索圣遗物" />
      </div>
      <div class="relic-select">
        <div v-for="item in filteredRelics" class="relic-select__item" @click="showSetRelicStatPop(item.equip)">
          <img v-lazy="item.equip[0].icon" />{{ item.name }}
        </div>
      </div>
    </template>
    <template v-else>
      <div class="set-relice-title">
        <span @click="setStatBase = null">切换套装</span>
        <span><img v-lazy="setStatBase.icon" />{{ setStatBase.name }}</span>
        <span style="color: rgb(255, 82, 82)" @click="removeRelic">卸下装备</span>
      </div>
      <form class="set-relice-form" @submit.prevent="addRelic">
        <div class="set-relice-filed">
          <span>主词条：</span>
          <select v-model="setStatForm.reliquaryMainstat" required @change="mainStatChanged">
            <option v-for="stat in mainStatFilter" :value="stat">
              {{ getAppendPropName(stat.mainPropId) }}
            </option>
          </select>
          <input type="number" v-model="setStatForm.reliquaryMainstat.statValue" step="0.01" />
        </div>
        <div class="set-relice-filed" v-for="(subStat, index) in setStatForm.reliquarySubstats">
          <span><Icon @click="deleteSubStat(index)" class="memo-close" name="clear" />副词条：</span>
          <select v-model="subStat.appendPropId" required>
            <option
              v-for="appendPropId in subStatFilter(subStat.appendPropId)"
              :key="appendPropId"
              :value="appendPropId"
            >
              {{ getAppendPropName(appendPropId) }}
            </option>
          </select>
          <input type="number" v-model="subStat.statValue" step="0.01" />
        </div>
        <div class="add-sub-stat" v-show="setStatForm.reliquarySubstats.length < 4" @click="addSubstat">添加副词条</div>
        <Button class="bottons__add" text="确认修改" block type="primary" native-type="submit" />
      </form>
    </template>
  </Popup>
</template>

<style scoped>
.relic-info {
  margin-bottom: 16px;
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(2, 1fr);
}

.relic-detail {
  position: relative;
  font-size: 14px;
  height: 112px;
  border-radius: 4px;
  margin-bottom: 12px;
  box-shadow: 2px 2px 1px var(--bg);
}
.relic-suit-detail {
  overflow: scroll;
  box-shadow: none;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%); /* Safari 和 Chrome */
}
.relic-main-stats {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-weight: bold;
}

.relic-icon {
  width: 40%;
  z-index: 1;
  top: -20%;
  right: -4%;
  position: absolute;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 90%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 90%); /* Safari 和 Chrome */
}
.relic-level {
  background-color: var(--bg);
  color: var(--light-text);
  border-radius: 6px;
  padding: 0 2px;
  font-size: 12px;
}
.relic-name {
  font-size: 16px;
  line-height: 32px;
  /* background-image: linear-gradient(to right, var(--five-rarity) 0%, rgba(0, 0, 0, 0) 70%); */
  color: var(--light-text);
  text-shadow: 2px 2px 4px var(--button-bg);
  border-radius: 4px 0 0;
  padding: 0 8px;
}
.relic-detail__stats {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 14px;
  padding: 0 8px;
}

.empty {
  text-align: center;
  line-height: 102px;
}

.relic-search {
  position: fixed;
  width: 100%;
  background: #fff;
}

.relic-search span {
  display: inline-block;
  width: 100%;
  line-height: 24px;
  text-align: center;
}

.relic-select {
  padding: 12px;
  padding-top: 90px;
  display: grid;
  grid-gap: 6px;
  grid-template-columns: repeat(2, 1fr);
}

.relic-select__item {
  display: flex;
  height: 32px;
  line-height: 32px;
  border: 2px solid var(--border);
}

.relic-select__item img {
  height: inherit;
}

.set-relice-title {
  display: flex;
  width: 100%;
  height: 48px;
  line-height: 48px;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
}
.set-relice-title span {
  display: flex;
}
.set-relice-title img {
  height: 48px;
}
.set-relice-form {
  padding: 0 16px;
}
.set-relice-filed {
  display: flex;
  line-height: 32px;
  align-items: center;
  margin-bottom: 12px;
}
.set-relice-filed input {
  display: inline-block;
  width: 20%;
  height: 32px;
  margin: 0;
  padding: 0 8px;
  border-radius: 4px;
  border: solid 1px var(--border);
  box-sizing: border-box;
}
.bottons__add {
  background-color: var(--button-bg);
  color: #fff;
  line-height: 40px;
  font-size: 20px;
  border: none;
  border-radius: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

select {
  border: solid 1px var(--border);
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border-radius: 4px;
  flex-grow: 1;
  color: var(--main-text);
  font-size: 16px;
  padding: 0 8px;
  height: 32px;
  display: inline-block;
  font-family: "eng", HYWenHei-85W, Avenir, Helvetica, Arial, sans-serif;
  margin-right: 8px;
}
.add-sub-stat {
  width: 100%;
  text-align: center;
  border: 1px solid var(--border);
}
.relic-suit-text {
  overflow: scroll;
  color: var(--extra-text);
  padding: 0 8px;
}
.relic-suit-text__texts {
  font-size: 12px;
}
</style>
