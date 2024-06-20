import {ref} from "vue";

function useHolyRelic() {
  const currentRelic = ref("");
  const setCurrentRelic = (relic) => {
    if (currentRelic.value === relic) {
      currentRelic.value = "";
    } else {
      currentRelic.value = relic;
    }
  }

  return [currentRelic, setCurrentRelic];
}
export default useHolyRelic;
