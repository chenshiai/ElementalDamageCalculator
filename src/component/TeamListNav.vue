<script lang="ts" setup>
import { ITeamItem } from "@/types/interface";
import useTeamData from "@/view/cloud-team/useTeamData";
import { onMounted } from "vue";
import { useStore } from "@/store";

const store = useStore();
const { characterJoinTeam, getAvatarIcon, edit, getElementIcon } = useTeamData();
onMounted(() => {
  if (store.getters.allTeamList.length > 1) return;
  const a: ITeamItem[] = JSON.parse(sessionStorage.getItem("teamList"));
  if (a) {
    a.forEach((data, index) => {
      if (data) characterJoinTeam(data.calculation, index);
    });
  }
});
</script>

<template>
  <section v-show="store.getters.allTeamList.length > 1" class="team-list-nav">
    <div class="name">当前队伍组成</div>
    <div class="team-list-nav__item" v-for="(item, index) in store.getters.allTeamList" :key="index">
      <div v-if="item" class="team-list-nav__item-avatar" @click="edit(index)" :title="item.calculation.title">
        <img :src="getAvatarIcon(item.calculation.characterEnkaId)" />
        <img class="team-list-nav__item-element" :src="getElementIcon(item.calculation.panel.element)" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.name {
  width: 100%;
  line-height: 24px;
  font-size: 16px;
  text-align: center;
  color: var(--light-text);
  border-radius: 4px;
  background: var(--bg);
  padding: 0 10px;
}
.team-list-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.team-list-nav__item-avatar {
  width: 36px;
  height: 36px;
  margin-bottom: 10px;
  border-radius: 100%;
  box-shadow: inset 0 0 0 2px var(--light-text);
  border: 2px solid var(--border);
  padding: 2px;
  background: var(--bg);
  text-align: center;
  position: relative;

  & img {
    width: inherit;
    height: inherit;
    border-radius: 100%;
  }
  & :hover {
    background: var(--light-text);
  }

  & .team-list-nav__item-element{
    position: absolute;
    width: 30%;
    height: 30%;
    z-index: 0;

    border: 2px solid var(--border);
    padding: 2px;
    background: var(--light-text);
    right: -10px;
    bottom: -4px;
  }
}
@media screen and (min-width: 1200px) {
  .team-list-nav {
    display: block;
    margin-left: 900px;
    position: fixed;
    top: 60px;
  }
  .name {
    width: 100%;
    line-height: 24px;
    font-size: 16px;
    text-align: center;
    color: var(--main-text);
    border-radius: 0;
    background: none;
    padding: 0;
  }
  .team-list-nav__item-avatar {
    width: 52px;
    height: 52px;
  }
}
</style>
