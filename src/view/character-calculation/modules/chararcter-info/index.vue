<script setup lang="ts">
import { ref } from "vue";
import { Popup, Icon, Stepper } from "vant";
import Selector from "@/component/Selector.vue";
import { ICharacterInfo } from "@/types/interface";
import getBackGroundByRarity from "@/utils/get-color";

const emit = defineEmits(["changed"]);

const show = ref(false);
const setConsts = (value: number) => {
  if (constellation.value === value) {
    constellation.value = 0;
  } else {
    constellation.value = value;
  }
};
const character = defineModel<ICharacterInfo>();
const handleCharacterChange = (characterInfo: ICharacterInfo) => {
  character.value = characterInfo;
  emit("changed");
};

const constellation = defineModel("constellation", {
  default: 0,
});
const levelUp = defineModel("levelUp", { default: 0 });
</script>

<template>
  <div v-if="!character" class="show-click active-btn" @click="show = true">+添加角色</div>
  <template v-else>
    <div class="character-info">
      <div :class="['name', getBackGroundByRarity(character.rarity)]">
        {{ character.name }}
        （Lv.{{ character.level }}）
      </div>
      <div class="avatar-info">
        <div class="avatar-info__base-data">
          <div class="avatar-info__base-data-item">
            <img src="/img/_HP.png" />
            <data>{{ character.baseHP }}</data>
          </div>
          <div class="avatar-info__base-data-item">
            <img src="/img/_ATK.png" />
            <data>{{ character.baseATK }}</data>
          </div>
          <div class="avatar-info__base-data-item">
            <img src="/img/_DEF.png" />
            <data>{{ character.baseDEF }}</data>
          </div>
        </div>
        <span v-if="character.level >= 90">
          上限突破：<Stepper
            @change="emit('changed')"
            theme="round"
            button-size="20"
            input-width="66px"
            v-model="levelUp"
            min="0"
            max="2"
          />
        </span>
        <div>突破等阶：{{ character.overshoot }}</div>
        <div>
          解锁命座：<Stepper
            @change="emit('changed')"
            theme="round"
            button-size="20"
            input-width="66px"
            v-model="constellation"
            min="0"
            max="6"
          />
        </div>
        <div class="constellations">
          <span
            v-for="(src, index) in character?.icons.constsIcon"
            :class="['consts-icon', index + 1 === constellation ? 'consts-active' : '']"
            @click="setConsts(index + 1)"
            :key="index"
          >
            <Icon name="lock" />
            <img :src="src" />
          </span>
        </div>
      </div>
      <div class="avatar active-btn" @click="show = true">
        <img :src="character?.icons.avatarIcon" />
        <Icon name="exchange" />
      </div>
    </div>
  </template>
  <Popup teleport="#app" v-model:show="show" position="right" :style="{ width: '100%' }">
    <Selector @close="show = false" :defaultName="character?.name || ''" :handleChange="handleCharacterChange" />
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
  cursor: pointer;
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
  width: 60%;
}
.avatar-info__base-data {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 4px;
  margin-top: 4px;
}
.avatar-info__base-data-item {
  display: flex;
  align-items: center;
  background-color: var(--light-text);
  border-radius: 4px;
  overflow: hidden;

  &:nth-child(1) {
    grid-column: 1 / -1;
  }
}
.avatar-info__base-data-item img {
  width: 24px;
  height: 24px;
  background-color: var(--main-text);
}
.avatar-info__base-data-item data {
  text-align: center;
  flex: 1;
}

.constellations {
  display: flex;
  justify-content: space-around;
  margin-bottom: 16px;
  gap: 2px;
}
.consts-icon {
  border-radius: 50%;
  min-width: 14%;
  border: var(--stroke-2) 2px solid;
  background-color: var(--light-text);
  position: relative;
  cursor: pointer;
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
  background-color: var(--stroke-1);
}

.consts-icon:has(~ .consts-icon.consts-active) {
  background-color: var(--stroke-1);
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

.show-click {
  text-align: center;
  border: 1px solid var(--border);
  border-radius: 4px;
  margin-bottom: 16px;
  height: 120px;
  line-height: 120px;
  cursor: pointer;
}
.custom-button {
  width: var(--van-slider-button-width);
  height: var(--van-slider-button-height);
  background: var(--van-slider-button-background);
  border-radius: var(--van-slider-button-radius);
  box-shadow: var(--van-slider-button-shadow);
  text-align: center;
  color: var(--main-text);
  text-shadow: none;
}
</style>
