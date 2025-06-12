/** @module 数据导入 */
import { ref } from "vue";
import { showNotify } from "vant";
import { playerInfoDB } from "@/constants/db";
import request from "@/request";

import importData from "./import";
import db from "../db";

const useImport = () => {
  const uid = ref("");
  const waiting = ref(0);
  const interval = ref(null);
  const importLoading = ref(false);

  const importGameInfo = () => {
    if (!uid.value || waiting.value > 0) return;
    importLoading.value = true;
    return request
      .get(`/player-info/uid/${uid.value}`)
      .then(async (res) => {
        if (res.data.data) {
          const playerInfo = res.data.data.playerInfo;
          const avatarInfoList = res.data.data.avatarInfoList;
          if (avatarInfoList) {
            await importData(res.data.data.avatarInfoList, uid.value).then((nameList) => {
              showNotify({
                type: "success",
                message: `${nameList}，导入成功`,
              });
            });
          } else {
            showNotify({
              type: "warning",
              message: res.data.message,
            });
          }
          if (playerInfo) {
            playerInfo.uid = uid.value;
            await db.add(playerInfoDB.storeName, playerInfo).catch(() => {
              db.put(playerInfoDB.storeName, playerInfo).catch(() => {});
            });
          }
          waiting.value = 30;
          interval.value = setInterval(() => {
            if (waiting.value > 0) {
              waiting.value = waiting.value - 1;
            } else {
              clearInterval(interval.value);
            }
          }, 1000);
        } else {
          showNotify({
            type: "danger",
            message: res.data.message,
          });
        }
      })
      .catch((err) => {
        showNotify({
          type: "danger",
          message: "获取数据失败，请检查是否完成安全信任授权。",
        });
      })
      .finally(() => {
        uid.value = "";
        importLoading.value = false;
      });
  };

  return {
    uid,
    waiting,
    importLoading,
    importGameInfo,
  }
};

export default useImport;
