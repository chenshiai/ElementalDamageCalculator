import { IUserSavedCalculationData } from "@/constants/db";
import useCharacterInfo from "../character-calculation/modules/chararcter-info";
import { Character } from "@/constants/characters-config/character";
import { IBuffBase, IBuffExtra, ITeamItem } from "@/types/interface";
import useWeanponInfo from "../character-calculation/modules/weapon-info";
import { Weapons } from "@/constants/weapon-config/weapon";
import useRelicInfo from "../character-calculation/modules/relic-info";
import { useStore } from "@/store";
import { IRelicItem } from "@/constants/relics-config/relic-class";
import { useRouter } from "vue-router";
import { ElementType } from "@/types/enum";
import allImages from "@/constants/imageConstant";

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
  return buffs
    .filter((buff) => (buff.shareable && !buff.condition) || (buff.shareable && buff.condition(result.panel)))
    .map((buff) => deconstructionBuff(buff, result));
};

const useTeamData = () => {
  const router = useRouter();
  const store = useStore();
  const teamList = store.getters.allTeamList as ITeamItem[];

  const edit = (index) => {
    store.commit("setCurrentEdit", teamList[index].calculation.title);
    sessionStorage.setItem("editCharacter", JSON.stringify(teamList[index].calculation));
    sessionStorage.setItem("editTeamIndex", index);

    router.push({
      path: `/character/edit/${encodeURIComponent(teamList[index].calculation.title)}`,
    });
  };
  /** 角色数据入队 */
  const characterJoinTeam = (result: IUserSavedCalculationData, index: number) => {
    // 存储共享的buff，key为buff提供者名称，value为buff对象
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
        name: characterInfo.value.name
      },
      index,
    });
  };

  /** 离开队伍 */
  const leaveTeam = (index) => {
    store.commit("leaveTeam", index);
  };

  const getAvatarIcon = (enkaId: number) => {
    return Character.find((c) => c.enkaId === enkaId).icons.avatarIcon;
  };

  const getCharacterName = (enkaId: number) => {
    return Character.find((c) => c.enkaId === enkaId).name;
  };

  const getWeaponIcon = (enkaId: number) => {
    return Weapons.find((c) => c.enkaId === enkaId).icon;
  };
  const getWeaponName = (enkaId: number) => {
    return Weapons.find((c) => c.enkaId === enkaId).name;
  };

  const getElementIcon = (element: ElementType) => {
    switch (element) {
      case ElementType.Pyro:
        return allImages.pyro;
      case ElementType.Electro:
        return allImages.ele;
      case ElementType.Hydro:
        return allImages.hydro;
      case ElementType.Anemo:
        return allImages.anemo;
      case ElementType.Cryo:
        return allImages.cryo;
      case ElementType.Geo:
        return allImages.geo;
      case ElementType.Dendro:
        return allImages.den;
      default:
        return "";
    }
  };

  const getRelics = (relicList: string) => {
    return JSON.parse(relicList) as IRelicItem[];
  };

  return {
    teamList,
    leaveTeam,
    characterJoinTeam,
    getAvatarIcon,
    getCharacterName,
    getWeaponIcon,
    getWeaponName,
    getRelics,
    getElementIcon,
    edit,
  };
};

export default useTeamData;
