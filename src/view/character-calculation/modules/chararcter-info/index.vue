<script setup lang="ts">
import { ref } from "vue";
import { Popup, Icon } from "vant";
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
  character.value = characters;
};

const constellation = defineModel("constellation", {
  default: 0,
});
</script>

<template>
  <div v-if="!character" class="show-click" @click="show = true">选择角色</div>
  <template v-else>
    <div class="character-info">
      <div class="avatar-info">
        <div :class="['name', getBackGroundByRarity(character.rarity)]">
          {{ character?.name }}
          <!-- （Lv.{{ character.level }}） -->
        </div>
        <div>生命值：{{ character.baseHP }}</div>
        <div>攻击力：{{ character.baseATK }}</div>
        <div>防御力：{{ character.baseDEF }}</div>
        <span>命之座：{{ constellation }}</span>
        <span style="margin-left: 32px; font-size: 12px">点击图标开启/关闭命座</span>
      </div>
      <div class="avatar" @click="show = true">
        <img :src="character?.icons.avatarIcon" />
        <Icon name="exchange" />
      </div>
    </div>
    <div class="constellations">
      <span
        v-for="(src, index) in character?.icons.constsIcon"
        :class="['consts-icon', index + 1 === constellation ? 'consts-active' : '']"
        @click="setConsts(index + 1)"
      >
        <Icon name="lock" />
        <img :src="src" />
      </span>
    </div>
  </template>
  <Popup teleport="#app" v-model:show="show" position="right" :style="{ width: '100%', height: '100vh' }">
    <Selector
      @close="show = false"
      :defaultName="character?.name || ''"
      :handleChange="handleCharacterChange"
      :maxSelect="1"
    />
  </Popup>
</template>

<style scoped>
.character-info {
  position: relative;
}
.avatar {
  position: absolute;
  top: 0;
  right: 0;
  width: 130px;
  box-sizing: border-box;
}
.avatar img {
  display: inline-block;
  vertical-align: middle;
  width: 100%;

  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%); /* Safari 和 Chrome */
}
.avatar i {
  position: absolute;
  right: 0px;
  top: 30px;
  border: 1px solid var(--border);
  color: var(--light-text);
  background-color: var(--bg);
}
.avatar-info {
  flex: 1;
}
.constellations {
  display: flex;
  /* margin: 0 auto; */
  width: 60%;
  justify-content: space-around;
  margin-bottom: 16px;
}
.consts-icon {
  width: 14%;
  border-radius: 50%;
  border: var(--button-bg) 2px solid;
  background-color: var(--light-text);
  position: relative;
}
.consts-icon i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.consts-icon img {
  width: 100%;
  display: inline-block;
  vertical-align: middle;
}
.consts-active {
  background-color: var(--tip-text);
}

.consts-icon:has(~ .consts-icon.consts-active) {
  background-color: var(--tip-text);
}
.consts-active i,
.consts-icon:has(~ .consts-icon.consts-active) i {
  display: none;
}
.name {
  line-height: 24px;
  font-size: 16px;
  text-align: center;
  color: var(--light-text);
  border-radius: 4px;
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

.show-click {
  text-align: center;
  border: 1px solid var(--border);
  border-radius: 4px;
  margin-bottom: 16px;
}
</style>
