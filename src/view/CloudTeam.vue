<template>
  <tab-title>角色伤害计算</tab-title>
  <div class="team-list">
    <div class="team-list__item">
      <div class="team-list__item-avatar" @click="show = true">
        <template v-if="characterSelect.avatar">
          <img :src="characterSelect.avatar" />
          <div class="team-list__item-name">{{ characterSelect.name }}</div>
        </template>
        <div class="empty" v-else></div>
      </div>
      <!-- <div class="team-list__tags">
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
      </div> -->
    </div>
  </div>
  <!-- <div class="scaleplate">
    <span class="scaleplate-item not-recommend">C·不推荐</span>
    <span class="scaleplate-item effective">B·有效果</span>
    <span class="scaleplate-item general">A·通用</span>
    <span class="scaleplate-item recommend">S·推荐</span>
  </div>
  <div class="cloud-team__title">队伍分析</div>
  <span class="cloud-team__tips"> 还没做完。。。 </span>
  <div class="cloud-team__title">评级目的</div>
  <span class="cloud-team__tips">
    并不是为了配出伤害最高的队伍，而是帮助更快地分析自身队伍的构成特点。同时对某个角色的培养方向和使用方向做引导。注意：每个玩家心中的评级标准都是不一样的，本评级旨在给其他玩家提供参考，切勿盲目行事。
  </span>
  <div class="cloud-team__title">评级标准</div>
  <span class="cloud-team__tips">
    约定：评级均以0命角色为例。以角色自身所拥有的能力来纵向评价，每个角色应该至少拥有一项突出能力(评级A及以上)，再以此能力所带来的价值为标准来评价其他能力。
    <p>
      <b>持续驻场</b
      >：角色主要的伤害输出，需要依靠长时间站场来完成。受伤害倍率、冷却时间、充能需求、攻击范围等因素影响。
    </p>
    <p>
      <b>后台脱手</b
      >：角色主要的伤害输出，只用在后台即可完成绝大部分。影响因素同上。
    </p>
    <p>
      <b>速切爆发</b
      >：角色主要的伤害输出，可以在较短的时间内完成。影响因素同上。
    </p>
    <p>
      <b>控制效果</b
      >：角色技能可以影响敌人的行动，例如牵引、嘲讽、石化、阻挡和束缚等效果。受控制强度、控制时间、泛用性和冷却时间等因素影响。
    </p>
    <p>
      <b>抗性削减</b
      >：角色技能可以削减敌人的元素或物理抗性。受削减量、覆盖率、易用性和冷却时间等因素影响。
    </p>
    <p><b>防御减少</b>：角色技能可以减少敌人的防御力。影响因素同上。</p>
    <p><b>敌方削弱</b>：角色技能可以削弱敌人的伤害能力。影响因素同上。</p>
    <p>
      <b>治疗能力</b
      >：角色技能可以治疗友方角色。受总治疗量、秒治疗量和覆盖率等因素影响。
    </p>
    <p>
      <b>护盾产生</b
      >：角色技能可以产生吸收伤害的护盾。受总吸收量和覆盖率等因素影响。
    </p>
    <p>
      <b>增伤效果</b
      >：角色技能可以提高友方角色的伤害。受覆盖率和泛用性等因素影响。
    </p>
    <p>
      <b>机动性</b>：角色可以给队伍带来机动性的提升，包括但不限于
      冲刺体力消耗降低、移动速度增加、快速位移、起飞上升等，受提升强度、实用性和冷却时间等因素影响。
    </p>
    <p>
      <b>元素附着</b
      >：角色可以给敌人或者队友持续带来元素附着，受持续时间、影响范围和冷却时间等因素影响
    </p>
  </span> -->
  <van-popup
    teleport="#app"
    v-model:show="show"
    position="right"
    :style="{ width: '100%', height: '100vh' }"
  >
    <selector @close="show = false" :handleChange="handleCharacterChange" />
  </van-popup>
</template>

<script>
import { defineComponent, ref } from "vue";
import TabTitle from "../component/TabTitle.vue";
import Selector from "../component/Selector.vue";
import {
  BATTLE_TYPE_TEXT,
  WEIGHT2,
  ENEMY_TYPE_TEXT,
  TEAM_TYPE_TEXT,
} from "../CloudTeamConfig";
import { Icon, Popup } from "vant";

export default defineComponent({
  name: "cloud-team",

  components: {
    [Popup.name]: Popup,
    [Icon.name]: Icon,
    [Selector.name]: Selector,
    [TabTitle.name]: TabTitle,
  },

  setup() {
    const show = ref(false);
    const characterSelect = ref({});

    const handleCharacterChange = (result) => {
      characterSelect.value = result;
      console.log(result);
    };

    return {
      show,
      WEIGHT2,
      characterSelect,
      handleCharacterChange,
      BATTLE_TYPE_TEXT,
      ENEMY_TYPE_TEXT,
      TEAM_TYPE_TEXT,
    };
  },
});
</script>

<style>
.team-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.team-list__item {
  display: flex;
  background-color: #b7a19e;
  min-width: 49%;
  margin-bottom: 6px;
}
.team-list__item-avatar {
  height: 100px;
  width: 76px;
  box-sizing: border-box;
  border: 2px solid #766461;
  border-radius: 4px 0 0 4px;
  overflow: hidden;
}
.team-list__item-name {
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  background-color: var(--light-text);
}
.team-list__item img {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  vertical-align: middle;
  max-height: 76px;
}
.team-list__tags {
  border: 2px solid #766461;
  box-sizing: border-box;
  border-radius: 0 4px 4px 0;
  padding: 2px;
  flex-grow: 1;
  color: #fff;
  overflow-y: scroll;
  height: 100px;
  background-color: var(--main-text);
}
.tag {
  line-height: 12px;
  font-size: 12px;
  border-radius: 6px;
  margin-bottom: 6px;
}
.tag-weight {
  display: inline-block;
  width: 14px;
}
.tag-astro {
  float: right;
}
.tag-level1,
.tag-level2,
.tag-level3 {
  color: #8cffbc;
}
.tag-level4,
.tag-level5,
.tag-level6 {
  color: #6596ff;
}
.tag-level7,
.tag-level8,
.tag-level9 {
  color: #c875ff;
}
.tag-level10,
.tag-level11,
.tag-level12 {
  color: #ffff2d;
}
.team-list .empty {
  text-align: center;
  position: relative;
  height: 100%;
}
.team-list .empty::after,
.team-list .empty::before {
  content: "";
  background-color: var(--light-text);
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  border-radius: 4px;
}
.team-list .empty::after {
  width: 4px;
  height: 28px;
}
.team-list .empty::before {
  width: 28px;
  height: 4px;
}
.cloud-team__tips {
  font-size: 14px;
  color: var(--tip-text);
  margin-bottom: 16px;
  display: inline-block;
}
.cloud-team__tips b {
  color: var(--main-text);
}
.scaleplate {
  border: 1px solid var(--main-text);
  font-size: 12px;
  border-radius: 4px;
  display: flex;
  overflow: hidden;
}
.scaleplate-item {
  flex: 1;
  text-align: center;
  text-shadow: 1px 0 0 var(--light-text), 0 1px 0 var(--light-text), -1px 0 0 var(--light-text),
    0 -1px 0 var(--light-text);
}
.not-recommend {
  background-color: #8cffbc;
}
.effective {
  background-color: #6596ff;
}
.general {
  background-color: #c875ff;
}
.recommend {
  background-color: #ffff2d;
}
</style>