<template>
  <div class="character-info">
    <div class="avatar" @click="show = true">
      <template v-if="character">
        <img :class="getBackGroundByRarity(character.rarity)" :src="character.icons.avatarIcon" />
        <div class="name">{{ character.name }}</div>
      </template>
      <div class="empty" v-else></div>
    </div>
    <div>
      <span>等级：</span>
      <div>
        <span>命之座（点击图标开关）</span>
        <div>
          <img src="" alt="">
          <img src="" alt="">
          <img src="" alt="">
          <img src="" alt="">
          <img src="" alt="">
          <img src="" alt="">
          <img src="" alt="">
        </div>
      </div>
    </div>
  </div>
  <Popup teleport="#app" v-model:show="show" position="right" :style="{ width: '100%', height: '100vh' }">
    <Selector @close="show = false" :handleChange="handleCharacterChange" :maxSelect="1" />
  </Popup>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Popup } from "vant";
import Selector from "@/component/Selector.vue";
import { ICharacterInfo } from "@/constants/characters-config/interface";
import getBackGroundByRarity from "@/utils/getBackGroundClassByRarity";

const show = ref(false);

const character = ref<null | ICharacterInfo>(null);
const handleCharacterChange = (characters: ICharacterInfo) => {
  character.value = characters[0];
}
</script>

<style scoped>
.character-info {
  display: flex;

  .avatar {
    height: 110px;
    width: 86px;
    box-sizing: border-box;
    border: 2px solid #766461;
    border-radius: 4px;
    overflow: hidden;
    background-color: #b7a19e;

    img {
      display: inline-block;
      vertical-align: middle;
      max-height: 86px;
    }
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
}
</style>