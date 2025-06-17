<script setup lang="ts">
import { ref, computed } from "vue";
import { IBuffBase, IBuffExtra, ICharacterInfo } from "@/types/interface";
import BuffItem from "./buff-item.vue";
import { Collapse, CollapseItem } from "vant";
import { BuffTarget } from "@/types/enum";
import { useStore } from "@/store";
const emit = defineEmits(["changed"]);

interface IProps {
  characterInfo: ICharacterInfo;
}

const store = useStore();
const buffs = defineModel<IBuffExtra[]>({ default: [] });
const characterBuffs = defineModel<IBuffBase[]>("characterBuffs");
const weaponBuffs = defineModel<IBuffBase[]>("weaponBuffs");
const relicBuffs = defineModel<IBuffBase[]>("relicBuffs");
const { characterInfo } = defineProps<IProps>();

const currentActiveBuffs = store.state.teamData.currentActiveBuffs;
const currentEdit = computed(() => store.state.teamData.currentEdit);
const activeBuffs = (b: IBuffBase) => {
  if (currentActiveBuffs[currentEdit.value]?.[b.label] !== undefined) {
    b.enable = currentActiveBuffs[currentEdit.value][b.label].enable;
    b.stack = currentActiveBuffs[currentEdit.value][b.label].stack;
  }
  return b;
};

const characterBuffsFilter = computed(() => {
  /** 过滤掉只对队友生效的buff */
  return characterBuffs.value.filter((buff) => buff.target !== BuffTarget.Other).map(activeBuffs);
});
const weaponBuffsFilter = computed(() => {
  /** 根据当前角色数据，过滤掉不符合条件的buff 同时 过滤掉只对队友生效的buff */
  return weaponBuffs.value
    .filter((buff) => {
      return (!buff.condition || buff.condition(characterInfo)) && buff.target !== BuffTarget.Other;
    })
    .map(activeBuffs);
});

const relicBuffsFilter = computed(() => {
  return relicBuffs.value
    .filter((buff) => {
      return !buff.condition || (buff.condition(characterInfo) && buff.target !== BuffTarget.Other);
    })
    .map(activeBuffs);
});

const teamDataFilter = computed(() => {
  buffs.value.forEach((buff) => {
    /** 同一个面板来源的buff 恢复成关闭状态 */
    if (buff.source === store.state.teamData.currentEdit) {
      buff.enable = false;
    }
  });
  // 用于记录已经出现过的 label
  const seenLabels = new Set<string>();

  return buffs.value
    .filter((buff) => {
      return (
        (!buff.shareCondition || buff.shareCondition(characterInfo)) && // 根据当前角色数据，过滤掉不符合生效条件的buff
        !buff.label.includes(characterInfo.name) && // 排除当前角色自身提供的全队共享buff
        buff.source !== store.state.teamData.currentEdit // 排除来自于同一个面板的buff
      );
    })
    .filter((buff) => {
      // 去除同名的团队buff
      if (seenLabels.has(buff.label)) {
        return false;
      }
      seenLabels.add(buff.label);
      return true;
    })
    .map(activeBuffs);
});

const activeNames = ref<string[]>([]);
</script>

<template>
  <!-- buff信息 -->
  <div class="data-panel__title">增益情况</div>
  <Collapse v-model="activeNames" :border="false" class="buffs-container">
    <CollapseItem v-if="characterBuffsFilter?.length > 0" title="角色自身增益" name="character">
      <BuffItem
        v-for="(buff, index) in characterBuffsFilter"
        :key="buff.label + index"
        v-model="buff.enable"
        v-model:stack="buff.stack"
        :buff="buff"
        @changed="emit('changed')"
      />
    </CollapseItem>
    <CollapseItem v-if="weaponBuffsFilter.length > 0" title="武器技能增益" name="weapon">
      <BuffItem
        v-for="(buff, index) in weaponBuffsFilter"
        :key="buff.label + index"
        v-model="buff.enable"
        v-model:stack="buff.stack"
        :buff="buff"
        @changed="emit('changed')"
      />
    </CollapseItem>
    <CollapseItem v-if="relicBuffsFilter.length > 0" title="圣遗物套装增益" name="relic">
      <BuffItem
        v-for="(buff, index) in relicBuffsFilter"
        :key="buff.label + index"
        v-model="buff.enable"
        v-model:stack="buff.stack"
        :buff="buff"
        @changed="emit('changed')"
      />
    </CollapseItem>
    <CollapseItem v-if="teamDataFilter.length > 0" title="队伍增益" name="other">
      <BuffItem
        v-for="(buff, index) in teamDataFilter"
        :key="buff.label + index"
        v-model="buff.enable"
        v-model:stack="buff.stack"
        :buff="buff"
        @changed="emit('changed')"
      />
    </CollapseItem>
  </Collapse>
</template>

<style scoped>
@media screen and (min-width: 768px) {
  .data-panel__title {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: var(--page-bg);
    padding-bottom: 12px;
    margin-bottom: 0;
    box-shadow: 1px 0 0 1px var(--page-bg);
  }
}
</style>
