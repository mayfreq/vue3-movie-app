<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Header",
  setup() {
    const store = useStore();
    const searchText = ref("");

    const search = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        store.dispatch("changeSearchText", searchText.value);
      }
    };
    return {
      search,
      searchText,
    };
  },
});
</script>

<template>
  <div class="header">
    <img src="../assets/logo.png" alt="Movie App " />
    <span>Ana Sayfa</span>
    <input
      id="search"
      type="text"
      v-model="searchText"
      placeholder="Search"
      @keyup="search($event)"
    />
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 60px;
  background-color: rgb(45, 206, 206);
  display: flex;
  flex-flow: row nowrap;
  margin-left: auto;
  margin-right: auto;
  max-width: 1180px;
  min-width: 740px;
}

.header > img {
  flex: 0 1 60px;
}
.header > span {
  margin-left: 10px;
  align-self: center;
  font-weight: 600;
}
.header > input {
  flex: 0 1 276px;
  height: 30px;
  margin-left: auto;
  align-self: center;
  margin-right: 15px;
}
</style>
