<template>
  <div class="selector">
    <div class="team-list__item" v-for="(item, index) in config" :key="index">
      <img :src="item.avatar" />
      <div class="team-list__item-name">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import TabTitle from "./TabTitle.vue";
import CloudTeamConfig from "../../public/CloudTeamConfig";

export default defineComponent({
  name: "selector",

  components: {
    [TabTitle.name]: TabTitle,
  },

  setup() {
    const config = ref(CloudTeamConfig);

    return {
      config,
    }
  },
});
</script>

<style>
.selector {
  padding: 16px;
  display: flex;
  justify-content: space-between;
}
</style>