<script setup lang="ts">
import { ref, computed } from "vue";
import { IBuffBase, IBuffExtra, ICharacterInfo } from "@/types/interface";
import BuffItem from "./buff-item.vue";
import { Collapse, CollapseItem } from "vant";
import { BuffTarget } from "@/types/enum";
import { useStore } from "vuex";
const store = useStore();

const buffs = defineModel<IBuffExtra[]>({ default: [] });
const characterBuffs = defineModel<IBuffBase[]>("characterBuffs");
const weaponBuffs = defineModel<IBuffBase[]>("weaponBuffs");
const relicBuffs = defineModel<IBuffBase[]>("relicBuffs");

interface IProps {
  characterInfo: ICharacterInfo;
}
const { characterInfo } = defineProps<IProps>();
const characterBuffsFilter = computed(() => {
  /** 过滤掉只对队友生效的buff */
  return characterBuffs.value.filter((buff) => buff.target !== BuffTarget.Other);
});
const weaponBuffsFilter = computed(() => {
  /** 根据当前角色数据，过滤掉不符合条件的buff 同时 过滤掉只对队友生效的buff */
  return weaponBuffs.value.filter((buff) => {
    return (!buff.condition || buff.condition(characterInfo)) && buff.target !== BuffTarget.Other;
  });
});

const relicBuffsFilter = computed(() => {
  return relicBuffs.value.filter((buff) => {
    return !buff.condition || buff.condition(characterInfo) && buff.target !== BuffTarget.Other;
  });
});

const teamBuffsFilter = computed(() => {
  /** 根据当前角色数据，过滤掉不符合条件的外来buff 同时 排除当前角色提供的共享buff 同时 排除来自于同一个面板的buff */
  return buffs.value.filter((buff) => {
    return (
      (!buff.shareCondition || buff.shareCondition(characterInfo)) &&
      !buff.label.includes(characterInfo.name) &&
      buff.source !== store.state.teamBuffs.currentEdit
    );
  });
});

const activeNames = ref<string[]>([]);
</script>

<template>
  <!-- buff信息 -->
  <div class="data-panel__title">增益情况</div>
  <div class="buffs-container">
    <Collapse v-model="activeNames" :border="false">
      <CollapseItem v-if="characterBuffsFilter?.length > 0" title="角色自身增益" name="character">
        <div v-for="(buff, index) in characterBuffsFilter" :key="buff.label + index" class="buff-item">
          <BuffItem v-model="buff.enable" v-model:stack="buff.stack" :buff="buff" :show-delete="false" />
        </div>
      </CollapseItem>
      <CollapseItem v-if="weaponBuffsFilter.length > 0" title="武器技能增益" name="weapon">
        <div v-for="(buff, index) in weaponBuffsFilter" :key="buff.label + index" class="buff-item">
          <BuffItem v-model="buff.enable" v-model:stack="buff.stack" :buff="buff" :show-delete="false" />
        </div>
      </CollapseItem>
      <CollapseItem v-if="relicBuffsFilter.length > 0" title="圣遗物套装增益" name="relic">
        <div v-for="(buff, index) in relicBuffsFilter" :key="buff.label + index" class="buff-item">
          <BuffItem v-model="buff.enable" v-model:stack="buff.stack" :buff="buff" :show-delete="false" />
        </div>
      </CollapseItem>
      <CollapseItem v-if="teamBuffsFilter.length > 0" title="队伍增益" name="other">
        <div v-for="(buff, index) in teamBuffsFilter" :key="buff.label + index" class="buff-item">
          <BuffItem v-model="buff.enable" v-model:stack="buff.stack" :buff="buff" :show-delete="false" />
        </div>
      </CollapseItem>
    </Collapse>
  </div>
</template>

<style scoped>
.buffs-container {
  display: flex;
  flex-direction: column;
}

.buff-item {
  position: relative;
  border: 1px solid var(--border);
  padding: 8px;
  border-radius: 4px;
  margin-top: 4px;
}
</style>

<style>
.buffs-container .van-cell {
  background-color: var(--light-text);
}
</style>
