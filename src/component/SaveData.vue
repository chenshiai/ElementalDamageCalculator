<template>
  <div class="save-data" @click="showPopup = true">保存数据到本地</div>
  <van-popup teleport="#app" v-model:show="showPopup" position="top">
    <div class="tips">
      数据将会存储在本地浏览器的缓存中。若清空浏览器缓存，则数据也一会同清空。重复命名的新数据会替换旧数据。
    </div>
    <ul class="data-detail">
      <li class="data-detail-item" v-for="(item, index) in config" :key="index">
        <span>{{ item.label }}</span><span>{{ item.value }}</span>
      </li>
    </ul>
    <van-field
      v-model="remark"
      type="text"
      label="数据命名"
      placeholder="给这条数据取个名字吧"
    />
    <div class="popup-bottons" @click="saveData">保存数据</div>
  </van-popup>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import { Popup, Field, Toast } from "vant";
import { getLocalStorage, deepCopyObject } from "../utils";

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

    const config = computed(() => {
      const {
        extraATK,
        baseATK,
        extraPercentATK,
        critDemage,
        elementDemage,
        evaporationDemage,
        atkRate,
        atkType,
        characterLevel,
        enemyLevel,
        enemyResistance,
        weaken,
        armour,
      } = store.state;

      return [
        {
          label: "基础攻击力",
          value: baseATK,
        },
        {
          label: "绿字攻击力",
          value: Math.round(extraATK + baseATK * (extraPercentATK / 100)),
        },
        {
          label: "暴击伤害%",
          value: critDemage,
        },
        {
          label: "伤害加成%",
          value: elementDemage,
        },
        {
          label: "精通加成%",
          value: evaporationDemage,
        },
        {
          label: "伤害倍率%",
          value: atkRate,
        },
        {
          label: "反应类型",
          value:
            atkType === "none"
              ? "无反应"
              : atkType === "evaporation"
              ? "2.0倍增幅"
              : "1.5倍增幅",
        },
        {
          label: "人物等级",
          value: characterLevel,
        },
        {
          label: "敌人等级",
          value: enemyLevel,
        },
        {
          label: "敌人抗性%",
          value: enemyResistance,
        },
        {
          label: "减少抗性%",
          value: weaken,
        },
        {
          label: "减少防御%",
          value: armour,
        },
      ];
    });

    const saveData = () => {
      if (!remark.value) {
        Toast.fail("请输入备注");
        return;
      }
      try {
        const sourceData = getLocalStorage("GenShinImpactCustomData", {});
        const { extraATK, baseATK, extraPercentATK } = store.state;

        sourceData[remark.value] = deepCopyObject(store.state);
        sourceData[remark.value].extraATK =
          extraATK + baseATK * (extraPercentATK / 100);
        delete sourceData[remark.value].characterSelect;
        delete sourceData[remark.value].extraPercentATK;

        window.localStorage.setItem(
          "GenShinImpactCustomData",
          JSON.stringify(sourceData)
        );
        Toast.success("保存成功");
        remark.value = "";
        showPopup.value = false;
      } catch {
        Toast.fail("保存失败");
      }
    };

    return {
      config,
      showPopup,
      remark,
      saveData,
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
