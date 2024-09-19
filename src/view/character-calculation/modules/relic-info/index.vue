<script setup lang="ts">
import relics from "@/constants/characters-config/relic";
import { IRelicItem, ReliceMainStats } from "@/constants/characters-config/relic-class";
import { IRelicBase, EquipType, AppendProp } from "@/constants/characters-config/interface.d";
import { getAppendPropName, percentProps, RelicText } from "@/constants/characters-config/append-prop";
import { Popup, Search } from "vant";
import { ref, computed } from "vue";

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

/** 指定部位的圣遗物 */
const show = ref(false);
const relicTitle = ref("");
const selectedRelic = ref(0);
const selectRelic = (index: number) => {
  show.value = true;
  selectedRelic.value = index;
  relicTitle.value = RelicText[index];
};

/** 设置圣遗物属性 */
const showSetStat = ref(false);
const setStatBase = ref<IRelicBase>();
const showSetRelicStatPop = (equip: IRelicBase[]) => {
  showSetStat.value = true;
  setStatBase.value = equip[selectedRelic.value];
};
const mainStatFilter = computed(() => {
  if (setStatBase.value) {
    switch (setStatBase.value.equipType) {
      case EquipType.EQUIP_BRACER:
        return ReliceMainStats.filter((item) => item.mainPropId === AppendProp.HP);
      case EquipType.EQUIP_NECKLACE:
        return ReliceMainStats.filter((item) => item.mainPropId === AppendProp.ATTACK);
      case EquipType.EQUIP_DRESS:
        return ReliceMainStats.filter(
          (item) => [AppendProp.ATTACK_PERCENT, AppendProp.DEFENSE_PERCENT, AppendProp.HP_PERCENT].includes(item.mainPropId)
        );
      case EquipType.EQUIP_SHOES:
    }
  }
});
const setStatForm = ref({
  reliquaryMainstat: {},
  reliquarySubstats: [],
});
</script>

<template>
  <!-- 圣遗物信息 -->
  <div class="relic-info">
    <div class="relic-detail" v-for="(item, index) in relicList" :key="index" @click="selectRelic(index)">
      <template v-if="item">
        <img class="relic-icon" :src="item.icon" />
        <div class="relic-detail__hearder">
          <div>{{ item.name }}</div>
          <div class="relic-main-stats">
            <span>{{ getAppendPropName(item.reliquaryMainstat.mainPropId) }}</span>
            <span>{{ getStatValueText(item.reliquaryMainstat) }}</span>
          </div>
        </div>
        <div class="relic-detail__stats" v-for="(subitem, index) in item.reliquarySubstats"
          :key="subitem.appendPropId + index">
          <label>{{ getAppendPropName(subitem.appendPropId) }}</label>
          <span>{{ getStatValueText(subitem) }}</span>
        </div>
      </template>
      <div class="empty" v-else>+ 添加圣遗物</div>
    </div>
    <div class="relic-detail">替换整套圣遗物</div>
  </div>
  <!-- 圣遗物搜索 -->
  <Popup class="relic-popup" v-model:show="show" position="bottom" style="height: 50%">
    <div class="relic-search">
      <span>~ {{ relicTitle }} ~</span>
      <Search v-model="searchRelic" placeholder="搜索圣遗物" />
    </div>
    <div class="relic-select">
      <div v-for="item in relicsFilter" class="relic-select__item" @click="showSetRelicStatPop(item.equip)">
        <img :src="item.equip[0].icon" />{{ item.name }}
      </div>
    </div>
  </Popup>
  <!-- 圣遗物属性设置 -->
  <Popup class="set-relic-stat-popup" v-model:show="showSetStat" position="bottom" style="height: 46%">
    <div class="set-relice-title"><img :src="setStatBase.icon" />{{ setStatBase.name }}</div>
    <form class="set-relice-mainstat">
      <div>
        主词条：
        <select v-model="setStatForm.reliquaryMainstat">
          <option v-for="stat in ReliceMainStats" :value="stat">
            {{ getAppendPropName(stat.mainPropId) }}{{ getStatValueText(stat) }}
          </option>
        </select>
      </div>
    </form>
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
  height: 60px;
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
  height: 32px;
  line-height: 32px;
  justify-content: center;
}

.set-relice-title img {
  height: inherit;
}
</style>
