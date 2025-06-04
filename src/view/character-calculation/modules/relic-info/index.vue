<script setup lang="ts">
import {
  Popup,
  Search,
  showNotify,
  Button,
  SwipeCell,
  Checkbox,
  CheckboxGroup,
  Tab,
  Tabs,
  RadioGroup,
  Radio,
  Icon,
} from "vant";
import { ref, computed, nextTick } from "vue";
import _ from "lodash";

import relics, { IRelicLibraryItemEquip } from "@/constants/characters-config/relic";
import {
  IRelicItem,
  MainstatType,
  ReliceMainStats,
  ReliceMainStats_Four,
  RelicItem,
  RelicStatType,
} from "@/constants/characters-config/relic-class";
import {
  getAppendPropName,
  RelicText,
  EquipTypeMainstats,
  EquipTypeSubstats,
} from "@/constants/characters-config/append-prop";
import { relicDB } from "@/constants/db";

import { IRelicBase } from "@/types/interface";
import { AppendProp, EquipIndexToType } from "@/types/enum";
import db from "@/utils/db";

import { IRelicSuitText } from "./index";
import Relic from "./relic.vue";

interface IProps {
  relicSuitTexts: IRelicSuitText[];
}

/** @module 圣遗物列表数据展示 */
const relicList = defineModel<IRelicItem[]>();
const { relicSuitTexts } = defineProps<IProps>();

/** @module 模糊搜索框 */
const searchRelic = ref("");
const filteredRelics = computed(() => {
  return relics.filter((item) => item.name.indexOf(searchRelic.value) >= 0);
});

/** @module 圣遗物编辑表单 */
const selectStatus = ref(0);
// 基础数据
const setStatBase = ref<IRelicBase>();
// 主副词条表单
const setStatForm = ref<RelicStatType>({
  reliquaryMainstat: {} as MainstatType,
  reliquarySubstats: [],
});
// 副词条多选
const substatsArray = ref<AppendProp[]>([]);

const addRelic = () => {
  const relicItem = new RelicItem({
    ...setStatBase.value,
    ...setStatForm.value,
    timetemp: Date.now().toString(),
  });

  relicList.value.splice(selectedPartIndex.value, 1, relicItem);
  closePopup();

  db.add(relicDB.storeName, {
    timetemp: relicItem.timetemp,
    relicInfo: JSON.stringify(relicItem),
  }).then(() => {
    showNotify({
      type: "success",
      message: `添加成功！\n已保存至本地。`,
    });
  });
};

/** @module 指定部位弹窗 */
const showPopup = ref(false);
const relicTitle = ref("");
const selectedPartIndex = ref(0);
const selectRelic = (index: number) => {
  showPopup.value = true;
  // 暂存选择部位的下标
  selectedPartIndex.value = index;
  // 根据选择部位的下标来显示部位名称
  relicTitle.value = RelicText[index];

  // 若选择部位已有圣遗物，则填充表单数据
  if (relicList.value[index]) {
    const data = _.cloneDeep(relicList.value[index]);

    setStatBase.value = data;
    setStatForm.value = {
      reliquaryMainstat: data.reliquaryMainstat,
      reliquarySubstats: data.reliquarySubstats,
    };
    setStatForm.value.reliquarySubstats.forEach((substat) => {
      substatsArray.value.push(substat.appendPropId);
    });
  } else {
    setStatBase.value = null;
  }
};
// 使用本地圣遗物数据
const selectLocalRelic = (relic: IRelicItem) => {
  relicList.value.splice(selectedPartIndex.value, 1, relic);
  closePopup();
};
const closePopup = () => {
  showPopup.value = false;
  showLocalRelics.value = false;
  setStatForm.value = {
    reliquaryMainstat: {} as MainstatType,
    reliquarySubstats: [],
  };
  substatsArray.value = [];
  selectStatus.value = 0;
};

const removeRelic = () => {
  if (!relicList.value[selectedPartIndex.value]) return;
  const name = relicList.value[selectedPartIndex.value].name;
  relicList.value.splice(selectedPartIndex.value, 1, null);
  closePopup();
  showNotify({
    type: "success",
    message: `已卸下\n[${name}]。`,
  });
};
/** 设置圣遗物基础数据，显示编辑表单 */
const showSetRelicStatPop = (equip: IRelicLibraryItemEquip) => {
  // 根据部位下标来获取部位的具体类型和图标
  setStatBase.value = equip[selectedPartIndex.value];
  if (mainStatFilter.value.length === 1) {
    setStatForm.value.reliquaryMainstat.mainPropId = mainStatFilter.value[0].mainPropId;
    setStatForm.value.reliquaryMainstat.statValue = mainStatFilter.value[0].statValue;
    selectStatus.value = 1;
  }
};

// 主词条变化后设置默认数值，并删除相同的副词条
const mainStatChanged = (appendPropId: AppendProp) => {
  if (!appendPropId) return;
  nextTick(() => {
    const stat = ReliceMainStats.find((item) => {
      return item.mainPropId === appendPropId;
    });
    setStatForm.value.reliquaryMainstat.statValue = stat.statValue;
    const same = substatsArray.value.findIndex((item) => {
      return item === appendPropId;
    });
    if (same >= 0) {
      substatsArray.value.splice(same, 1);
      substatsChange(substatsArray.value);
    }
  });
};

// 副词条变化
const substatsChange = (arr: AppendProp[]) => {
  setStatForm.value.reliquarySubstats = arr.map((appendPropId) => {
    const stat = setStatForm.value.reliquarySubstats.find((item) => {
      return item.appendPropId === appendPropId;
    });
    return (
      stat || {
        appendPropId,
        statValue: 0,
      }
    );
  });
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

/** 查询本地圣遗物数据 */
const localRelics = ref<IRelicItem[]>([]);
const showLocalRelics = ref(false);
const getLocalRelics = () => {
  showLocalRelics.value = !showLocalRelics.value;
  if (showLocalRelics.value) {
    db.getAll(relicDB.storeName).then((res) => {
      localRelics.value = res
        .map((item) => JSON.parse(item.relicInfo))
        .filter((item: IRelicItem) => {
          return item.equipType === EquipIndexToType[selectedPartIndex.value];
        })
        .sort((a, b) => b.timetemp - a.timetemp);
    });
  }
};
const deleteLocalData = (item: IRelicItem) => {
  db.delete(relicDB.storeName, item.timetemp).then(() => {
    const index = localRelics.value.findIndex((i) => item.timetemp === i.timetemp);
    localRelics.value.splice(index, 1);
  });
};
</script>

<template>
  <!-- 圣遗物信息 -->
  <div class="data-panel__title">圣遗物</div>
  <div class="relic-info">
    <Relic
      v-for="(item, index) in relicList"
      :relic="item"
      :key="item?.timetemp + index || index"
      :emptyText="RelicText[index]"
      @select-relic="selectRelic(index)"
    />
    <div class="relic-suit-detail">
      <div class="relic-suit-text" v-for="relicSuitText in relicSuitTexts">
        <div class="relic-suit-text__title">{{ relicSuitText.name }}</div>
        <div class="relic-suit-text__texts">
          <div v-for="text in relicSuitText.texts" :key="text">{{ text }}</div>
        </div>
      </div>
    </div>
  </div>
  <!-- 圣遗物搜索 -->
  <Popup class="relic-popup" v-model:show="showPopup" position="top" @close="closePopup">
    <template v-if="!setStatBase">
      <div class="relic-search">
        <span>~ {{ relicTitle }} ~</span>
        <div class="relic-package" @click="getLocalRelics">
          <span :class="!showLocalRelics && 'active'">创建新的圣遗物</span>
          <span :class="showLocalRelics && 'active'">选择历史圣遗物</span>
        </div>
        <Search v-if="!showLocalRelics" v-model="searchRelic" placeholder="搜索圣遗物套装" />
        <div v-else="showLocalRelics" style="text-align: center; line-height: 54px">
          {{ localRelics.length === 0 ? "该部位没有圣遗物存档" : "Tips：点击添加，右上角可删除" }}
        </div>
      </div>
      <div v-show="showLocalRelics" class="relic-select">
        <div v-for="item in localRelics" class="relic-select__local-item">
          <Relic style="flex: 1" :relic="item" :key="item.timetemp" @select-relic="selectLocalRelic" />
          <Icon class="delete" name="delete-o" size="40" @click.stop="deleteLocalData(item)" text="删除" />
        </div>
      </div>
      <div v-show="!showLocalRelics" class="relic-select">
        <div v-for="item in filteredRelics" class="relic-select__item" @click="showSetRelicStatPop(item.equip)">
          <img v-lazy="item.equip[0].icon" />{{ item.name }}
        </div>
      </div>
    </template>
    <template v-else>
      <div class="set-relic-title">
        <span @click="setStatBase = null">切换圣遗物</span>
        <span><img v-lazy="setStatBase.icon" />{{ setStatBase.name }}</span>
        <span v-if="relicList[selectedPartIndex]" class="set-relic-title__close" @click="removeRelic">卸下圣遗物</span>
        <span v-else class="set-relic-title__close" @click="closePopup">取消编辑</span>
      </div>
      <Tabs class="relic-tabs" type="card" v-model:active="selectStatus">
        <Tab title="选择主属性">
          <RadioGroup
            class="substats-check-group"
            v-model="setStatForm.reliquaryMainstat.mainPropId"
            max="4"
            @change="mainStatChanged"
          >
            <Radio v-for="stat in mainStatFilter" :name="stat.mainPropId">
              {{ getAppendPropName(stat.mainPropId) }}
            </Radio>
          </RadioGroup>
        </Tab>
        <Tab title="选择副属性">
          <CheckboxGroup class="substats-check-group" v-model="substatsArray" max="4" @change="substatsChange">
            <Checkbox
              v-for="substat in EquipTypeSubstats"
              :name="substat"
              :disabled="setStatForm.reliquaryMainstat.mainPropId === substat"
            >
              {{ getAppendPropName(substat) }}
            </Checkbox>
          </CheckboxGroup>
        </Tab>
      </Tabs>
      <form class="set-relic-form" @submit.prevent="addRelic">
        <div class="set-relic-filed" v-if="setStatForm.reliquaryMainstat.mainPropId">
          <span>{{ getAppendPropName(setStatForm.reliquaryMainstat.mainPropId) }}<sup>（主属性）</sup></span>
          <input type="number" v-model="setStatForm.reliquaryMainstat.statValue" step="0.01" required />
        </div>
        <div class="set-relic-filed" v-for="subStat in setStatForm.reliquarySubstats" :key="subStat.appendPropId">
          <span>{{ getAppendPropName(subStat.appendPropId) }}</span>
          <input type="number" v-model="subStat.statValue" step="0.01" required />
        </div>
        <input class="mainStat-check" type="text" required v-model="setStatForm.reliquaryMainstat.mainPropId" />
        <Button class="bottons__add" text="确认添加" block type="submit" native-type="submit" />
      </form>
    </template>
  </Popup>
</template>

<style scoped>
.relic-info {
  margin-bottom: 16px;
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 1fr;
}
.relic-search {
  position: fixed;
  width: 100%;
  background: #fff;
  left: 0;
  z-index: 10;
  box-shadow: var(--button-bg) 0px 0px 10px;
  box-sizing: border-box;
}

.relic-search span {
  display: inline-block;
  width: 100%;
  line-height: 24px;
  text-align: center;
}

.relic-select {
  padding-top: 120px;
  display: grid;
  grid-gap: 6px;
  grid-template-columns: repeat(2, 1fr);
}

@media screen and (min-width: 768px) {
  .relic-info {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .relic-select {
    grid-template-columns: repeat(3, 1fr);
  }
}
.relic-select__item {
  display: flex;
  height: 32px;
  line-height: 32px;
  border: 2px solid var(--border);
  cursor: pointer;

  &:hover {
    color: var(--light-text);
    background-color: var(--button-bg);
  }
}
.relic-select__local-item {
  display: flex;
}
.relic-select__item img {
  height: inherit;
}

.set-relic-title {
  display: flex;
  width: 100%;
  height: 48px;
  line-height: 48px;
  justify-content: space-between;
  box-sizing: border-box;

  & span {
    cursor: pointer;
  }
}
.set-relic-title__close {
  color: var(--cancel);
}
.set-relic-title span {
  display: flex;
}
.set-relic-title img {
  height: 48px;
}
.set-relic-form {
  margin-bottom: 40px;
}
.mainStat-check {
  visibility: hidden;
}
.set-relic-filed {
  display: flex;
  line-height: 32px;
  align-items: center;
  margin-bottom: 4px;
  justify-content: space-between;
}
.set-relic-filed:nth-child(1) {
  color: var(--button-bg);
}
.set-relic-filed span {
  text-align: center;
  padding-right: 8px;
  flex-grow: 1;
  display: block;
}
.set-relic-filed input {
  display: inline-block;
  width: 30%;
  height: 32px;
  padding: 0 8px;
  border-radius: 4px;
  border: solid 1px var(--border);
  box-sizing: border-box;
  background-color: #fff;
  position: relative;
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

.set-relic-filed__select {
  text-align: center;
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
.relic-package {
  text-align: center;
  border: 1px solid var(--button-bg);
  margin: 0 12px 4px 12px;
  display: flex;
  border-radius: 4px;
  cursor: pointer;
}
.relic-package span.active {
  background-color: var(--button-bg);
  color: var(--light-text);
}
.relic-suit-detail {
  font-size: 14px;
  overflow-y: scroll;
  height: 112px;
  border-radius: 4px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%); /* Safari 和 Chrome */
}
.relic-suit-text {
  color: var(--extra-text);
  padding: 0 8px;
}
.relic-suit-text__texts {
  font-size: 12px;
}
.swipecell-right-button {
  height: 100%;
}
</style>

<style>
.substats-check-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 28px);
  gap: 4px;
  margin-top: 4px;
  font-size: 12px;
}

.relic-popup {
  padding: 0 16px;
  max-height: 80%;
  min-height: 40%;
}

.substats-check-group :is(.van-checkbox__icon, .van-radio__icon) {
  display: none;
}
.substats-check-group > div {
  border: 1px solid var(--main-text);
  border-radius: 2px;
}
.substats-check-group > div > span {
  margin: 0;
  text-align: center;
  line-height: 28px;
  width: 100%;
}
.substats-check-group > [aria-checked="true"] > span {
  background-color: var(--main-text);
  color: #fff;
}

.delete {
  color: red;
  cursor: pointer;
  height: 40px;
  &:hover {
    background-color: var(--light-text);
  }
}
</style>
