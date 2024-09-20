<script setup lang="ts">
import { Popup, Search, Icon, Toast } from "vant";
import { ref, computed } from "vue";

import relics from "@/constants/characters-config/relic";
import {
  IRelicItem,
  MainstatType,
  ReliceMainStats,
  RelicItem,
  SubstatType,
  RelicStatType,
} from "@/constants/characters-config/relic-class";
import { AppendProp, IRelicBase } from "@/constants/characters-config/interface.d";
import {
  getAppendPropName,
  percentProps,
  RelicText,
  EquipTypeMainstats,
  EquipTypeSubstats,
} from "@/constants/characters-config/append-prop";

/** 圣遗物信息展示 */
const relicList = defineModel<IRelicItem[]>();
const getStatValueText = (stat): string => {
  const statValue = stat.statValue;
  const shouldAppendPercent = percentProps.includes(stat.mainPropId || stat.appendPropId);
  return `+${statValue}${shouldAppendPercent ? "%" : ""}`;
};

/** 圣遗物搜索 */
const searchRelic = ref("");
const relicsFilter = computed(() => {
  return relics.filter((item) => item.name.indexOf(searchRelic.value) >= 0);
});

/** 选择指定部位的圣遗物 */
const show = ref(false);
const relicTitle = ref("");
const selectedRelic = ref(0);
const selectRelic = (index: number) => {
  show.value = true;
  // 暂存选择部位的下标
  selectedRelic.value = index;
  // 根据选择部位的下标来显示部位名称
  relicTitle.value = RelicText[index];

  if (relicList.value[index]) {
    setStatBase.value = relicList.value[index];
    setStatForm.value = {
      reliquaryMainstat: relicList.value[index].reliquaryMainstat,
      reliquarySubstats: relicList.value[index].reliquarySubstats,
    }
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
    Toast.fail("主词条未选择");
    return;
  }

  const relicIns = new RelicItem({
    ...setStatBase.value,
    ...setStatForm.value,
    rankLevel: 5,
    level: 20,
  });

  relicList.value.splice(selectedRelic.value, 1, relicIns);
  onPopupClose();
  Toast.success("修改成功");
};
const onPopupClose = () => {
  show.value = false;
  setStatBase.value = null;
  setStatForm.value = {
    reliquaryMainstat: {} as MainstatType,
    reliquarySubstats: [],
  };
}
/** 设置圣遗物属性弹窗 */
const showSetRelicStatPop = (equip: IRelicBase[]) => {
  // 根据部位下标来获取部位的具体类型和图标
  setStatBase.value = equip[selectedRelic.value];
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
  if (setStatBase.value) {
    return ReliceMainStats.filter((item) => {
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
  <div class="relic-info">
    <div class="relic-detail" v-for="(item, index) in relicList" :key="index" @click="selectRelic(index)">
      <template v-if="item">
        <img class="relic-icon" :src="item.icon" />
        <div class="relic-detail__hearder">
          <div>{{ item.name }}<span>+{{ item.level }}</span></div>
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
    <div class="relic-detail">替换整套圣遗物</div>
  </div>
  <!-- 圣遗物搜索 -->
  <Popup class="relic-popup" v-model:show="show" position="top" style="height: 40%" @close="onPopupClose">
    <template v-if="!setStatBase">
      <div class="relic-search">
        <span>~ {{ relicTitle }} ~</span>
        <Search v-model="searchRelic" placeholder="搜索圣遗物" />
      </div>
      <div class="relic-select">
        <div v-for="item in relicsFilter" class="relic-select__item" @click="showSetRelicStatPop(item.equip)">
          <img :src="item.equip[0].icon" />{{ item.name }}
        </div>
      </div>
    </template>
    <template v-else>
      <div class="set-relice-title">
        <span @click="setStatBase = null">切换套装</span>
        <span><img :src="setStatBase.icon" />{{ setStatBase.name }}</span>
        <span @click="addRelic">确认修改</span>
      </div>
      <form class="set-relice-form">
        <div class="set-relice-filed">
          <span>主词条：</span>
          <select v-model="setStatForm.reliquaryMainstat" required @change="mainStatChanged">
            <option v-for="stat in mainStatFilter" :value="stat">
              {{ getAppendPropName(stat.mainPropId) }}
            </option>
          </select>
          <input type="number" v-model="setStatForm.reliquaryMainstat.statValue" />
        </div>
        <div class="set-relice-filed" v-for="(subStat, index) in setStatForm.reliquarySubstats">
          <span><Icon @click="deleteSubStat(index)" class="memo-close" name="delete-o" />副词条：</span>
          <select v-model="subStat.appendPropId" required>
            <option
              v-for="appendPropId in subStatFilter(subStat.appendPropId)"
              :key="appendPropId"
              :value="appendPropId"
            >
              {{ getAppendPropName(appendPropId) }}
            </option>
          </select>
          <input type="number" v-model="subStat.statValue" />
        </div>
        <div class="add-sub-stat" v-show="setStatForm.reliquarySubstats.length < 4" @click="addSubstat">添加副词条</div>
      </form>
    </template>
  </Popup>
</template>

<style scoped>
.relic-info {
  margin-bottom: 16px;
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(3, 1fr);
}

.relic-detail {
  position: relative;
  border: 2px solid var(--border);
  border-radius: 4px;
  font-size: 14px;
  padding: 2px;
  height: 102px;
}

.relic-main-stats {
  display: flex;
  justify-content: space-between;
}

.relic-icon {
  width: 100%;
  z-index: -1;
  opacity: 0.2;
  top: -10%;
  position: absolute;
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

.relic-popup {
  position: relative;
}

.relic-search {
  position: fixed;
  width: 100%;
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
  border: solid 1px var(--border);
  box-sizing: border-box;
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
  height: 32px;
  display: inline-block;
  font-family: "eng", HYWenHei-85W, Avenir, Helvetica, Arial, sans-serif;
}
.add-sub-stat {
  width: 100%;
  text-align: center;
  border: 1px solid var(--border);
}
</style>
