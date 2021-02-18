<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore();

    return {
      message: store.getters.getMessage,
    };
  },
});
</script>

<template>
  <h1>
    {{ message }}
  </h1>
</template>

<style lang="scss"></style>
