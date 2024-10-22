<template>
  <div class="save-data">
    <div class="save-btn" @click="saveDataPop">保存数据</div>
    <div class="save-btn" @click="lookDataPop">查看数据</div>
  </div>
  <Popup
    class="data-popup"
    teleport="#app"
    v-model:show="showPopup"
    position="top"
  >
    <div class="tips">
      数据将会存储在本地浏览器的缓存中。若清空浏览器缓存，则数据也一会同清空。重复命名的新数据会替换旧数据。
    </div>
    <ul class="data-detail">
      <li class="data-detail-item" v-for="item in config" :key="item.label">
        <span>{{ item.label }}</span>
        <span>{{ item.value }}</span>
      </li>
    </ul>
    <Field
      v-model="remark"
      type="text"
      label="数据命名"
      placeholder="给这条数据取个名字吧"
    />
    <div class="popup-buttons" @click="saveData">保存数据</div>
  </Popup>
  <Popup
    class="data-popup"
    teleport="#app"
    v-model:show="showDataPopup"
    position="top"
  >
    <div class="tips">点击对应数据，可以展开查看详情。支持「重算」「删除」</div>
    <Collapse
      class="data-popup__collapse"
      v-if="localData.length > 0"
      v-model="opened"
    >
      <CollapseItem
        v-for="[name, val] in localData"
        :key="name"
        :is-link="false"
        title-class="data-title"
        :label="getLabel(val)"
      >
        <template #title>
          {{ name }}
          <Icon
            name="replay"
            @click.stop="recalculation(val)"
            size="26"
            class="replay-icon"
          />
          <Icon
            size="26"
            @click.stop="deleteLocalData(name)"
            class="delete-icon"
            name="delete-o"
          />
        </template>
        <ul class="data-detail">
          <li
            class="data-detail-item"
            v-for="item in formatData(val)"
            :key="item.label"
          >
            <span>{{ item.label }}</span>
            <span>{{ item.value }}</span>
          </li>
        </ul>
      </CollapseItem>
    </Collapse>
    <div class="empty" v-else>暂无数据</div>
  </Popup>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { Popup, Field, showSuccessToast, showFailToast, Collapse, CollapseItem, Icon } from "vant";
import {
  getLocalStorage,
  deepCopyObject,
  computationalFormula,
  EventBus,
} from "@/utils";
import { AtkTypeText } from "@/constants";

const store = useStore();
const remark = ref("");
const localData = ref(getLocalStorage("GenShinImpactCustomDataV2", []));
const opened = ref([]);

const props = defineProps({
  notesConfig: Object,
});


const config = computed(() => {
  return formatData(store.state.damageModule);
});
const formatData = (value) => {
  const {
    extraATK,
    baseATK,
    extraFixedATK = 0,
    extraPercentATK,
    baseDEF = 0,
    extraDEF = 0,
    extraFixedDEF = 0,
    extraPercentDEF = 0,
    baseHP = 0,
    extraHP = 0,
    extraFixedHP = 0,
    extraPercentHP = 0,
    additionalDemage = 0,
    critDemage,
    elementDemage,
    elementalMystery = 0,
    atkRate,
    armRate,
    hpRate,
    emRate,
    extraRate = 0,
    atkType,
    characterLevel,
    enemyLevel,
    enemyResistance,
    weaken,
    armour = 0,
    armourPiercing = 0,
  } = value;

  return [
    {
      label: "基础生命值",
      value: baseHP,
    },
    {
      label: "绿字生命值",
      value: Math.round(extraHP + extraFixedHP + baseHP * (extraPercentHP / 100)),
    },
    {
      label: "基础防御力",
      value: baseDEF,
    },
    {
      label: "绿字防御力",
      value: Math.round(extraDEF + extraFixedDEF + baseDEF * (extraPercentDEF / 100)),
    },
    {
      label: "基础攻击力",
      value: baseATK,
    },
    {
      label: "绿字攻击力",
      value: Math.round(extraATK + extraFixedATK + baseATK * (extraPercentATK / 100)),
    },
    {
      label: "元素精通",
      value: elementalMystery,
    },
    {
      label: "伤害提高值",
      value: additionalDemage,
    },
    {
      label: "攻击倍率%",
      value: atkRate,
    },
    {
      label: "生命倍率%",
      value: hpRate,
    },
    {
      label: "防御倍率%",
      value: armRate,
    },
    {
      label: "精通倍率%",
      value: emRate,
    },
    {
      label: "倍率增幅%",
      value: extraRate,
    },
    {
      label: "伤害加成%",
      value: elementDemage,
    },
    {
      label: "暴击伤害%",
      value: critDemage,
    },
    {
      label: "元素反应",
      value: AtkTypeText[atkType],
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
      value: armour,
    },
    {
      label: "无视防御%",
      value: armourPiercing,
    },
  ];
};

const showPopup = ref(false);
const saveDataPop = () => {
  showPopup.value = true;
};

const saveData = () => {
  if (!remark.value) {
    showFailToast("数据命名为空");
    return;
  }
  const { damageModule, saveDataModule } = store.state;
  try {
    const sourceData = new Map(getLocalStorage("GenShinImpactCustomDataV2", []));
    sourceData.set(
      remark.value,
      deepCopyObject({
        ...damageModule,
        ...saveDataModule,
      })
    );

    window.localStorage.setItem(
      "GenShinImpactCustomDataV2",
      JSON.stringify([...sourceData])
    );
    showSuccessToast("保存成功");
    remark.value = "";
    showPopup.value = false;
  } catch {
    showFailToast("保存失败");
  }
};

const showDataPopup = ref(false);
const lookDataPop = () => {
  showDataPopup.value = true;
  localData.value = getLocalStorage("GenShinImpactCustomDataV2", []);
};

const getLabel = (val) => {
  const result = computationalFormula(val);
  const { common, crit } = result;
  return `伤害数值：${common}  暴击伤害：${crit}`;
};

const deleteLocalData = (name) => {
  try {
    const sourceData = new Map(getLocalStorage("GenShinImpactCustomDataV2", []));
    sourceData.delete(name);

    window.localStorage.setItem(
      "GenShinImpactCustomDataV2",
      JSON.stringify([...sourceData])
    );
    localData.value = [...sourceData];
    showSuccessToast("删除成功");
  } catch {
    showFailToast("删除失败");
  }
};

const updateNoteGroup = ({ setSelectedNotes, localStorageName, defaultNotes }, selectedNotes) => {
  const supplementNotes = []; // 临时组
  const localNotes = new Map(getLocalStorage(localStorageName, defaultNotes)); // 获取存储在本地的便签组
  for (let [key, value] of selectedNotes) {
    // 遍历已选择的便签组，若存在和本地不同的便签，则加入临时组
    if (!localNotes.get(key)) {
      supplementNotes.push([key, value]);
    }
  }
  // 若临时组的长度大于零，则更新本地便签组，并通知对应组件更新便签
  if (supplementNotes.length > 0) {
    window.localStorage.setItem(
      localStorageName,
      JSON.stringify(supplementNotes.concat(Array.from(localNotes)))
    );
    EventBus.$emit(`${localStorageName}Changed`);
  }
  setSelectedNotes(selectedNotes);
};
const recalculation = (value) => {
  showDataPopup.value = false;
  // let value = deepCopyObject(val);
  store.commit("setUnifiedState", value); // 回填计算器内容
  const NotesConfig = props.notesConfig;
  updateNoteGroup(NotesConfig.fixedATK, value.selectedFixedATKNotes);
  updateNoteGroup(NotesConfig.percentATK, value.selectedExtraATKNotes);
  updateNoteGroup(NotesConfig.fixedDEF, value.selectedFixedDEFNotes);
  updateNoteGroup(NotesConfig.percentDEF, value.selectedExtraDEFNotes);
  updateNoteGroup(NotesConfig.percentHP, value.selectedExtraHPNotes);
  updateNoteGroup(NotesConfig.fixedEM, value.selectedFixedEMNotes);
  updateNoteGroup(NotesConfig.additionalDemage, value.selectedAdditionalDemageNotes);
  updateNoteGroup(NotesConfig.elementDemage, value.selectedElementDemageNotes);
};
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
  border: 1px solid var(--stroke-2);
  text-align: center;
  line-height: 40px;
  margin-bottom: 12px;
  border-radius: 4px;
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
  background-color: var(--stroke-2);
  color: #fff;
}
.empty {
  text-align: center;
}
</style>

<style>
.Popup.data-popup {
  max-height: 90%;
}
</style>
