<template>
  <div>{{ playinfo }}</div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: "play-info",

  setup() {
    const playinfo = ref({});

    return {
      playinfo,
    }
  }
});
</script>