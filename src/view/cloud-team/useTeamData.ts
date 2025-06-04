import { IUserSavedCalculationData } from "@/constants/db";
import useCharacterInfo from "../character-calculation/modules/chararcter-info";
import { Character } from "@/constants/characters-config/character";
import { IBuffBase, IBuffExtra } from "@/types/interface";
import useWeanponInfo from "../character-calculation/modules/weapon-info";
import { Weapons } from "@/constants/characters-config/weapon";
import useRelicInfo from "../character-calculation/modules/relic-info";
import { useStore } from "@/store";

// 解构buff
const deconstructionBuff = (buff: IBuffBase, result: IUserSavedCalculationData): IBuffExtra => {
  const effect = buff.effect.map((eff) => {
    return {
      ...eff,
      getValue: (data, stack) => {
        // 使用闭包，将buff提供者的面板保存下来
        return eff.getValue(result.panel, stack, data);
      },
    };
  });
  return {
    ...buff,
    effect,
    // 共享的buff默认关闭状态，以免被重复计算
    enable: false,
    source: result.title,
  };
};

// 获取共享的buff
const getShareBuff = (buffs: IBuffBase[], result: IUserSavedCalculationData): IBuffExtra[] => {
  return buffs.filter((buff) => buff.shareable).map((buff) => deconstructionBuff(buff, result));
};

const useTeamData = () => {
  const store = useStore();
  const teamList = store.getters.allTeamList;
  /** 角色数据入队 */
  const characterJoinTeam = (result: IUserSavedCalculationData, index: number) => {
    const map = new Map();

    const { characterInfo, characterBuffs } = useCharacterInfo(
      Character.find((c) => c.enkaId === result.characterEnkaId),
      result.panel.constellation
    );
    map.set(characterInfo.value.name, getShareBuff(characterBuffs.value, result));

    const { weapon, weaponBuffs } = useWeanponInfo(
      Weapons.find((w) => w.enkaId === result.weaponEnkaId),
      result.affix
    );
    map.set(weapon.value.name, getShareBuff(weaponBuffs.value, result));

    const { relicBuffs, relicSuitTexts } = useRelicInfo(JSON.parse(result.relicList));
    relicSuitTexts.value.forEach((item) => {
      map.set(item.name, getShareBuff(relicBuffs.value, result));
    });
    
    store.commit("joinTeam", {
      data: {
        calculation: result,
        buffMap: map,
      },
      index,
    });
  };

  /** 离开队伍 */
  const leaveTeam = (index) => {
    store.commit("leaveTeam", index);
  };

  return {
    teamList,
    leaveTeam,
    characterJoinTeam,
  };
};

export default useTeamData;
