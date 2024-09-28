<script setup lang="ts">
import WeaponSelector from "@/component/WeaponSelector.vue";
import { IWeaponInfo } from "@/types/interface";
import { AppendProp } from "@/types/enum";
import getBackGroundByRarity from "@/utils/getBackGroundClassByRarity";
import { getAppendPropName } from "@/constants/characters-config/append-prop";
import { ref, computed } from "vue";
import { Popup, Rate } from "vant";

const show = ref(false);
const handleWeaponChange = (weapons: IWeaponInfo) => {
  weapon.value = weapons;
};

const weapon = defineModel<null | IWeaponInfo>();
const affix = defineModel<number>("affix", {
  default: 1,
});

const describe = computed(() => {
  return weapon.value?.getSkillDescribe(affix.value);
});
const weaponStats = computed(() => {
  return [
    {
      title: "基础攻击力",
      value: weapon.value.weaponStats[0].statValue,
      suffix: "",
    },
    {
      title: getAppendPropName(weapon.value.weaponStats[1].appendPropId),
      value: weapon.value.weaponStats[1].statValue,
      suffix: weapon.value.weaponStats[1].appendPropId === AppendProp.ELEMENT_MASTERY ? "" : "%",
    },
  ];
});
</script>

<template>
  <div class="data-panel__title">武器</div>
  <div class="weapon-info">
    <div class="avatar" @click="show = true">
      <template v-if="weapon">
        <img :class="getBackGroundByRarity(weapon.rarity)" :src="weapon?.icon" />
        <div class="name">{{ weapon?.name }}</div>
      </template>
      <div class="empty" v-else></div>
    </div>
    <div class="avatar-info">
      <template v-if="weapon">
        <span>等级：{{ weapon.level }}</span>
        <span class="affix">
          精炼
          <Rate v-model="affix" color="#997874" />
        </span>
        <div class="weapon-stats">
          <span v-for="item in weaponStats">{{ item.title }}: {{ item.value }}{{ item.suffix }}</span>
        </div>
        <div class="weapon-describe">
          {{ describe.title }}：<span v-html="describe.text"></span>
        </div>
      </template>
      <div v-else>点击左侧 + 号选择武器</div>
    </div>
  </div>
  <Popup teleport="#app" v-model:show="show" position="right" :style="{ width: '100%', height: '100vh' }">
    <WeaponSelector @close="show = false" :handleChange="handleWeaponChange" />
  </Popup>
</template>

<style scoped>
.weapon-info {
  display: flex;
  margin-bottom: 16px;
}

.avatar {
  height: 110px;
  width: 86px;
  box-sizing: border-box;
  border: 2px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
  background-color: var(--bg);
  margin-right: 16px;
}

.avatar img {
  display: inline-block;
  vertical-align: middle;
  max-height: 86px;
}

.avatar-info {
  flex: 1;
}

.name {
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  background-color: var(--light-text);
}

.empty {
  text-align: center;
  position: relative;
  height: 100%;
}

.empty::after,
.empty::before {
  content: "";
  background-color: var(--light-text);
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  border-radius: 4px;
}

.empty::after {
  width: 4px;
  height: 28px;
}

.empty::before {
  width: 28px;
  height: 4px;
}

.weapon-stats {
  display: flex;
  justify-content: space-between;
}

.weapon-describe {
  font-size: 12px;
}
.affix {
  margin-left: 16px;
}
</style>
