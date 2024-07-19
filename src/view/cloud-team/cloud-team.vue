<template>
  <div class="tips">
    以下内容根据玩家的游玩经验总结而出，仅供参考。
  </div>
  <TabTitle>标签化云配队</TabTitle>
  <div class="team-list">
    <div
      class="team-list__item"
      v-for="(item, index) in characterSelect"
      :key="index"
    >
      <div class="team-list__item-avatar" @click="show = true">
        <template v-if="item.avatar">
          <img :src="item.avatar" />
          <div class="team-list__item-name">{{ item.name }}</div>
        </template>
        <div class="empty" v-else></div>
      </div>
      <div class="team-list__tags">
        <div
          class="tag"
          v-for="(tag, index) in item.battle"
          :class="'tag-level' + tag.level"
          :key="index"
        >
          <span :class="['tag-weight', 'tag-level' + tag.level]">
            {{ WEIGHT2[tag.level] }}
          </span>
          {{ BATTLE_TYPE_TEXT[tag.type] }}
          <span v-show="tag.astro" class="tag-astro">({{ tag.astro }})</span>
        </div>
        <div class="tag" v-for="(tag, index) in item.enemy" :key="index">
          <span :class="['tag-weight', 'tag-level' + tag.level]">
            {{ WEIGHT2[tag.level] }}
          </span>
          {{ ENEMY_TYPE_TEXT[tag.type] }}
          <span v-show="tag.astro" class="tag-astro">({{ tag.astro }})</span>
        </div>
        <div class="tag" v-for="(tag, index) in item.team" :key="index">
          <span :class="['tag-weight', 'tag-level' + tag.level]">
            {{ WEIGHT2[tag.level] }}
          </span>
          {{ TEAM_TYPE_TEXT[tag.type] }}
          <span v-show="tag.astro" class="tag-astro">({{ tag.astro }})</span>
        </div>
      </div>
    </div>
  </div>
  <div class="scaleplate">
    <span class="scaleplate-item not-recommend">C·不推荐</span>
    <span class="scaleplate-item effective">B·有效果</span>
    <span class="scaleplate-item general">A·通用</span>
    <span class="scaleplate-item recommend">S·推荐</span>
  </div>
  <div class="cloud-team__title">队伍分析</div>
  <span class="cloud-team__tips"> 还没做完。。。 </span>
  <div class="cloud-team__title">该功能的目的</div>
  <span class="cloud-team__tips">
    并不是为了配出伤害最高的队伍，而是帮助更快地分析自身队伍的构成特点。同时对某个角色的培养方向和使用方向做引导。注意：每个玩家心中的评级标准都是不一样的，本评级旨在给其他玩家提供参考，切勿盲目行事。
  </span>
  <div class="cloud-team__title">标签分类</div>
  <span class="cloud-team__tips">
    <p>
      <b>前台能力</b>：指的是该角色在前台能够做到的事情。<br />
      <b>后台能力</b>：指的是该角色在后台能够做到的事情。
    </p>
    <p>
      <b>输出手段</b>：指角色主要的输出方式，包括但不限于，普攻、元素战技、元素爆发等。<br />
      <b>辅助手段</b>：指角色提供的辅助能力，包括但不限于，增伤、治疗、减伤、抗打断等。<br />
      <b>元素附着</b>：指角色附着元素的能力，分为单次附着、少量附着、持续附着、大量附着。
    </p>
  </span>
  <Popup
    teleport="#app"
    v-model:show="show"
    position="right"
    :style="{ width: '100%', height: '100vh' }"
  >
    <Selector @close="show = false" :handleChange="handleCharacterChange" />
  </Popup>
</template>

<script setup>
import { ref } from "vue";
import TabTitle from "@/component/TabTitle.vue";
import Selector from "@/component/Selector.vue";
import {
  BATTLE_TYPE_TEXT,
  WEIGHT2,
  ENEMY_TYPE_TEXT,
  TEAM_TYPE_TEXT,
} from "@/assets/CloudTeamConfig";
import { Popup } from "vant";

const show = ref(false);
const characterSelect = ref([{}, {}, {}, {}]);

const handleCharacterChange = (result) => {
  if (result.length < 4) {
    result = result.concat(new Array(4 - result.length).fill({}));
  }
  characterSelect.value = result;
};
</script>

<style src="./style.css" />