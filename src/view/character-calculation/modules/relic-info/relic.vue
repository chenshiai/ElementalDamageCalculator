<script setup lang="ts">
import { getlinearBackGroundClassByRarity } from "@/utils/get-color";
import { IRelicItem } from "@/constants/characters-config/relic-class";
import { getAppendPropName2, percentProps } from "@/constants/characters-config/append-prop";

const { relic } = defineProps<{
  relic: IRelicItem | null;
  emptyText?: string;
}>();
const getStatValueText = (stat): string => {
  const statValue = stat.statValue;
  const shouldAppendPercent = percentProps.includes(stat.mainPropId || stat.appendPropId);
  return `+${statValue}${shouldAppendPercent ? "%" : ""}`;
};

const emit = defineEmits<{
  selectRelic: [value: IRelicItem];
}>();
const selectLocalRelic = (item: IRelicItem) => {
  emit("selectRelic", item);
};
</script>

<template>
  <div :class="[relic ? '' : 'relic__empty', 'relic-detail']" @click="selectLocalRelic(relic)">
    <template v-if="relic">
      <img class="relic-icon" v-lazy="relic.icon" />
      <div class="relic-detail__hearder">
        <div :class="['relic-name', getlinearBackGroundClassByRarity(relic.rankLevel - 1)]">
          {{ relic.name }}
        </div>
        <div class="relic-main-stats">
          <span class="relic-main-stats__text">{{ getAppendPropName2(relic.reliquaryMainstat.mainPropId) }}</span>
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
    <div v-else>+ 添加{{ emptyText }}</div>
  </div>
</template>

<style scoped>
.relic-detail {
  position: relative;
  font-size: 14px;
  height: 112px;
  border-radius: 4px;
  margin-bottom: 12px;
  box-shadow: inset -1px -1px 1px var(--border);
}
.relic-suit-detail {
  overflow: scroll;
  box-shadow: none;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%);
}
.relic-main-stats {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-weight: bold;
}
.relic-main-stats__text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.relic-icon {
  width: 70px;
  z-index: 1;
  top: -20%;
  right: -4%;
  position: absolute;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 90%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 90%);
}
.relic-level {
  background-color: var(--bg);
  color: var(--light-text);
  border-radius: 4px;
  padding: 0 2px;
  font-size: 12px;
}
.relic-name {
  font-size: 16px;
  line-height: 32px;
  color: var(--light-text);
  text-shadow: 2px 2px 4px var(--stroke-2);
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

.relic__empty {
  text-align: center;
  line-height: 112px;
  border: solid 1px var(--border);
  border-radius: 4px;
  box-shadow: none;
}
</style>
