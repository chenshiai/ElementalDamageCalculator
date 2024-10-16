<script setup lang="ts">
import { ref, computed } from "vue";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import BuffItem from "./buff-item.vue";
import { Collapse, CollapseItem } from "vant";
import { BuffTarget } from "@/types/enum";

const buffs = defineModel<IBuffBase[]>({ default: [] });
const characterBuffs = defineModel<IBuffBase[]>("characterBuffs");
const weaponBuffs = defineModel<IBuffBase[]>("weaponBuffs");
const relicBuffs = defineModel<IBuffBase[]>("relicBuffs");

interface IProps {
  characterInfo: ICharacterInfo;
}
const { characterInfo } = defineProps<IProps>();
const characterBuffsFilter = computed(() => {
  return characterBuffs.value.filter((buff) => buff.target !== BuffTarget.Other);
});
const weaponBuffsFilter = computed(() => {
  return weaponBuffs.value.filter((buff) => {
    return !buff.condition || buff.condition(characterInfo);
  });
});

const relicBuffsFilter = computed(() => {
  return relicBuffs.value.filter((buff) => {
    return !buff.condition || buff.condition(characterInfo);
  });
});

const teamBuffsFilter = computed(() => {
  return buffs.value.filter((buff) => {
    return (!buff.condition || buff.condition(characterInfo)) && !buff.label.includes(characterInfo.name);
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
      <CollapseItem title="队伍增益" name="other">
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
