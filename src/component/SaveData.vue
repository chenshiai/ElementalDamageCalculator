<template>
  <div class="save-data" @click="showPopup = true">保存数据到本地</div>
  <van-popup teleport="#app" v-model:show="showPopup" position="top">
    <div class="tips">
      数据将会存储在浏览器的缓存中。若清空浏览器缓存，则数据也一会同清空。
    </div>
    <ul class="data-detail">
      <li class="data-detail-item">
        <span>基础攻击力</span><span>{{ baseATK }}</span>
      </li>
      <li class="data-detail-item">
        <span>额外攻击力</span><span>{{ extraATK }}</span>
      </li>
      <li class="data-detail-item">
        <span>暴击伤害%</span><span>{{ critDemage }}</span>
      </li>
      <li class="data-detail-item">
        <span>伤害加成%</span><span>{{ elementDemage }}</span>
      </li>
      <li class="data-detail-item">
        <span>精通加成%</span><span>{{ evaporationDemage }}</span>
      </li>
      <li class="data-detail-item">
        <span>伤害倍率%</span><span>{{ atkRate }}</span>
      </li>
      <li class="data-detail-item">
        <span>反应类型</span><span>{{ atkType === "none" ? "无反应" : (atkType === "evaporation" ? "2.0倍增幅" : "1.5倍增幅") }}</span>
      </li>
      <li class="data-detail-item">
        <span>人物等级</span><span>{{ characterLevel }}</span>
      </li>
      <li class="data-detail-item">
        <span>敌人等级</span><span>{{ enemyLevel }}</span>
      </li>
      <li class="data-detail-item">
        <span>敌人抗性</span><span>{{ enemyResistance }}</span>
      </li>
      <li class="data-detail-item">
        <span>减少抗性</span><span>{{ weaken }}</span>
      </li>
      <li class="data-detail-item">
        <span>减少防御</span><span>{{ armour }}</span>
      </li>
    </ul>
    <van-field
      v-model="remark"
      type="text"
      label="数据备注"
      placeholder="输入备注说明（不要与其他备注重复）"
    />
    <div class="popup-bottons">
      保存数据
    </div>
  </van-popup>
</template>

<script>
import { defineComponent, ref, toRefs, computed } from "vue";
import { useStore } from "vuex";
import { Popup, Field } from "vant";

export default defineComponent({
  name: "save-data",

  components: {
    [Field.name]: Field,
    [Popup.name]: Popup,
  },

  setup() {
    const showPopup = ref(false);
    const remark = ref("");
    const store = useStore();

    return {
      ...toRefs(store.state),
      showPopup,
      remark,
    };
  },
});
</script>

<style scoped>
.save-data {
  width: 100%;
  background-color: #fff;
  border: 1px solid #997874;
  text-align: center;
  line-height: 40px;
}
.data-detail {
  margin: 0 16px;
  display: flex;
  flex-wrap: wrap;
}
.data-detail-item {
  width: 50%;
  padding: 2px 8px;
  font-size: 12px;
  line-height: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.popup-bottons {
  line-height: 36px;
  text-align: center;
  flex: 1;
  font-size: 20px;
  background-color: #997874;
  color: #fff;
}
</style>
