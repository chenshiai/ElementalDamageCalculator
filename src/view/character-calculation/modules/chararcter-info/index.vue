<script setup lang="ts">
import { ref } from "vue";
import { Popup } from "vant";
import Selector from "@/component/Selector.vue";
import { ICharacterInfo } from "@/types/interface";
import getBackGroundByRarity from "@/utils/getBackGroundClassByRarity";

const show = ref(false);
const setConsts = (value: number) => {
  if (constellation.value === value) {
    constellation.value = 0;
  } else {
    constellation.value = value;
  }
};
const character = defineModel<null | ICharacterInfo>();
const handleCharacterChange = (characters: ICharacterInfo) => {
  character.value = characters[0];
};

const constellation = defineModel("constellation", {
  default: 0
});
</script>

<template>
  <div class="character-info">
    <div class="avatar" @click="show = true">
      <template v-if="character">
        <img :class="getBackGroundByRarity(character.rarity)" :src="character?.icons.avatarIcon" />
        <div class="name">{{ character?.name }}</div>
      </template>
      <div class="empty" v-else></div>
    </div>
    <div class="avatar-info">
      <template v-if="character">
        <span>等级：{{ character.level }}</span>
        <div>
          <span>命之座：{{ constellation }}</span>
          <div class="constellations">
            <img
              v-for="(src, index) in character?.icons.constsIcon"
              :src="src"
              :class="['consts-icon', index + 1 === constellation ? 'consts-active' : '']"
              @click="setConsts(index + 1)"
            />
          </div>
          <span style="font-size: 12px;">点击图标开启/关闭命座</span>
        </div>
      </template>
      <div v-else>点击左侧 + 号选择角色</div>
    </div>
  </div>
  <Popup teleport="#app" v-model:show="show" position="right" :style="{ width: '100%', height: '100vh' }">
    <Selector @close="show = false" :handleChange="handleCharacterChange" :maxSelect="1" />
  </Popup>
</template>

<style scoped>
.character-info {
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
.constellations {
  display: flex;
  justify-content: space-between;
}
.consts-icon {
  width: 14%;
  border-radius: 50%;
  border: var(--button-bg) 2px solid;
  background-color: var(--tip-text);
}
.consts-active {
  background-color: var(--light-text);
}

.consts-icon:has(~ .consts-icon.consts-active) {
  background-color: var(--light-text);
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
</style>
