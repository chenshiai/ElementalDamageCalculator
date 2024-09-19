<script setup lang="ts">
import { ref } from "vue";
import { IRelicItem, MainstatType, SubstatType } from "@/constants/characters-config/relic";
import { getAppendPropName, percentProps } from "@/constants/characters-config/append-prop";

const relics = ref<IRelicItem[]>(new Array(5).fill(null));

const getStatValueText = (stat): string => {
  const statValue = stat.statValue;
  const shouldAppendPercent = percentProps.includes(stat.mainPropId || stat.appendPropId);
  return `+${statValue}${shouldAppendPercent ? "%" : ""}`;
};
</script>

<template>
  <div class="relic-info">
    <div class="relic-detail" v-for="item in relics" :key="item.name">
      <template v-if="item">
        <img class="relic-icon" :src="item.icon" />
        <div class="relic-detail__hearder">
          <div>{{ item.name }}</div>
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
      <div v-else>空</div>
    </div>
    <div class="relic-detail">套</div>
  </div>
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
</style>
