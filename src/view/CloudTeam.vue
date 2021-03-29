<template>
  <div class="tips">
    角色自身能力的纵向对比。命座的获取难度、操作难度、实际效果等多方面因素都会影响评级，未计入圣遗物以及武器的影响，仅供参考。
  </div>
  <tab-title>标签化云配队</tab-title>
  <div class="team-list">
    <div class="team-list__item" v-for="(item, index) in characterSelect" :key="index">
      <div class="team-list__item-avatar" @click="show = true">
        <template v-if="item.avatar">
          <img :src="item.avatar" />
          <div class="team-list__item-name">{{ item.name }}</div>
        </template>
        <div class="empty" v-else></div>
      </div>
      <div class="team-list__tags">
        <template v-if="item.battle || item.enemy || item.team">
          <div class="tag" v-for="(tag, index) in item.battle" :key="index">
            <span :class="['tag-weight', 'tag-level' + tag.level]">{{ WEIGHT2[tag.level] }}</span>{{ BATTLE_TYPE_TEXT[tag.type] }}
          </div>
          <div class="tag" v-for="(tag, index) in item.enemy" :key="index">
            <span :class="['tag-weight', 'tag-level' + tag.level]">{{ WEIGHT2[tag.level] }}</span>{{ ENEMY_TYPE_TEXT[tag.type] }}
          </div>
          <div class="tag" v-for="(tag, index) in item.team" :key="index">
            <span :class="['tag-weight', 'tag-level' + tag.level]">{{ WEIGHT2[tag.level] }}</span>{{ TEAM_TYPE_TEXT[tag.type] }}
          </div>
        </template>
        <div class="empty-tags" v-else>虚位以待</div>
      </div>
    </div>
  </div>
  <van-popup
    teleport="#app"
    v-model:show="show"
    position="right"
    :style="{ width: '100%', height: '100vh' }"
  >
    <selector @close="show = false"/>
  </van-popup>
</template>

<script>
import { defineComponent, ref, toRefs } from "vue";
import TabTitle from "../component/TabTitle.vue";
import Selector from "../component/Selector.vue";
import {
  BATTLE_TYPE_TEXT,
  WEIGHT,
  WEIGHT2,
  ENEMY_TYPE_TEXT,
  TEAM_TYPE_TEXT,
} from "../../public/CloudTeamConfig";
import { Icon, Popup } from "vant";
import { useStore } from "vuex";

export default defineComponent({
  name: "cloud-team",

  components: {
    [Popup.name]: Popup,
    [Icon.name]: Icon,
    [Selector.name]: Selector,
    [TabTitle.name]: TabTitle,
  },

  setup() {
    const store = useStore();
    const show = ref(false);

    return {
      ...toRefs(store.state),
      show,
      WEIGHT,
      WEIGHT2,
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
  background-color: #f7f1e6;
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
  background-color: #645856;
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
  margin-right: 4px;
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
  background-color: #F7F1E6;
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
</style>