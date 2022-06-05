<template>
  <div class="save-data">
    <div class="save-btn" @click="saveDataPop">保存数据</div>
    <div class="save-btn" @click="lookDataPop">查看数据</div>
  </div>
  <van-popup
    class="data-popup"
    teleport="#app"
    v-model:show="showPopup"
    position="top"
  >
    <div class="tips">
      数据将会存储在本地浏览器的缓存中。若清空浏览器缓存，则数据也一会同清空。重复命名的新数据会替换旧数据。
    </div>
    <ul class="data-detail">
      <li class="data-detail-item" v-for="(item, index) in config" :key="index">
        <span>{{ item.label }}</span
        ><span>{{ item.value }}</span>
      </li>
    </ul>
    <van-field
      v-model="remark"
      type="text"
      label="数据命名"
      placeholder="给这条数据取个名字吧"
    />
    <div class="popup-buttons" @click="saveData">保存数据</div>
  </van-popup>
  <van-popup
    class="data-popup"
    teleport="#app"
    v-model:show="showDataPopup"
    position="top"
  >
    <div class="tips">点击对应数据，可以展开查看详情。支持「重算」「删除」</div>
    <van-collapse
      class="data-popup__collapse"
      v-if="Object.keys(localData).length > 0"
      v-model="opened"
    >
      <van-collapse-item
        v-for="(val, name, index) in localData"
        :key="index"
        :is-link="false"
        title-class="data-title"
        :label="getLabel(val)"
      >
        <template #title>
          {{ name }}
          <van-icon
            name="replay"
            @click.stop="recalculation(val)"
            size="26"
            class="replay-icon"
          />
          <van-icon
            size="26"
            @click.stop="deleteLocalData(name)"
            class="delete-icon"
            name="delete-o"
          />
        </template>
        <ul class="data-detail">
          <li
            class="data-detail-item"
            v-for="(item, index) in formatData(val)"
            :key="index"
          >
            <span>{{ item.label }}</span>
            <span>{{ item.value }}</span>
          </li>
        </ul>
      </van-collapse-item>
    </van-collapse>
    <div class="empty" v-else>暂无数据</div>
  </van-popup>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import { Popup, Field, Toast, Collapse, CollapseItem, Icon } from "vant";
import {
  getLocalStorage,
  deepCopyObject,
  computationalFormula,
  sub,
} from "../utils";

export default defineComponent({
  name: "save-data",

  emits: ["recalculationData"],

  components: {
    [Collapse.name]: Collapse,
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Icon.name]: Icon,
    [CollapseItem.name]: CollapseItem,
  },

  setup(props, { emit }) {
    const showPopup = ref(false);
    const showDataPopup = ref(false);
    const remark = ref("");
    const store = useStore();
    const localData = ref(getLocalStorage("GenShinImpactCustomData", {}));
    const opened = ref([]);

    const config = computed(() => {
      return formatData(store.state.demageModule);
    });

    const formatData = (value) => {
      const {
        extraATK,
        baseATK,
        extraFixedAtk = 0,
        extraPercentATK,
        additionalDemageList = [],
        critDemage,
        elementDemage,
        evaporationDemage,
        atkRate,
        extraRate = 0,
        atkType,
        characterLevel,
        enemyLevel,
        enemyResistance,
        weaken,
        armourList = [],
      } = value;

      return [
        {
          label: "基础攻击力",
          value: baseATK,
        },
        {
          label: "绿字攻击力",
          value: Math.round(extraATK + extraFixedAtk + baseATK * (extraPercentATK / 100)),
        },
        {
          label: "技能倍率%",
          value: atkRate,
        },
        {
          label: "倍率增幅%",
          value: extraRate,
        },
        {
          label: "附加伤害值",
          value: Math.round(sub(additionalDemageList)),
        },
        {
          label: "伤害倍率%",
          value: elementDemage,
        },
        {
          label: "暴击伤害%",
          value: critDemage,
        },
        {
          label: "精通加成%",
          value: evaporationDemage,
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
          label: "角色等级",
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
          value: armourList.join(','),
        },
      ];
    };

    const saveDataPop = () => {
      showPopup.value = true;
    };

    const saveData = () => {
      if (!remark.value) {
        Toast.fail("请输入备注");
        return;
      }
      const { demageModule, saveDataModule } = store.state;
      try {
        const sourceData = getLocalStorage("GenShinImpactCustomData", {});
        sourceData[remark.value] = deepCopyObject({
          ...demageModule,
          ...saveDataModule,
        });

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

    const lookDataPop = () => {
      showDataPopup.value = true;
      localData.value = getLocalStorage("GenShinImpactCustomData", {});
    };

    const getLabel = (val) => {
      const result = computationalFormula(val);
      const { common, crit } = result;
      return `伤害数值：${common}  暴击伤害：${crit}`;
    };

    const deleteLocalData = (name) => {
      try {
        const sourceData = getLocalStorage("GenShinImpactCustomData", {});
        delete sourceData[name];

        window.localStorage.setItem(
          "GenShinImpactCustomData",
          JSON.stringify(sourceData)
        );
        localData.value = sourceData;
        Toast.success("删除成功");
      } catch {
        Toast.fail("删除失败");
      }
    };

    const recalculation = (value) => {
      showPopup.value = false;
      emit("recalculationData", value);
    };

    return {
      config,
      showPopup,
      saveDataPop,
      showDataPopup,
      remark,
      saveData,
      localData,
      lookDataPop,
      opened,
      formatData,
      getLabel,
      deleteLocalData,
      recalculation,
    };
  },
});
</script>

<style scoped>
.save-data {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.data-title {
  position: relative;
}
.delete-icon {
  position: absolute;
  right: 16px;
  top: 50%;
  color: #f51e1e;
  transform: translateY(-50%);
}
.replay-icon {
  position: absolute;
  right: 66px;
  top: 50%;
  color: #2ee27f;
  transform: translateY(-50%);
}
.save-btn {
  width: 45%;
  background-color: #fff;
  border: 1px solid var(--button-bg);
  text-align: center;
  line-height: 40px;
  margin-bottom: 12px;
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
.popup-buttons {
  line-height: 40px;
  width: 100%;
  text-align: center;
  flex: 1;
  font-size: 20px;
  background-color: var(--button-bg);
  color: #fff;
}
.empty {
  text-align: center;
}
</style>

<style>
.van-popup.data-popup {
  max-height: 90%;
}
</style>
