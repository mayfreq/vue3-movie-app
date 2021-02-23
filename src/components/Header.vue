<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<template>
  <div class="header">
    <img src="../assets/logo.png" alt="Movie App " />
    <span>Ana Sayfa</span>
    <input type="text" name="asdas" placeholder="Search" />
  </div>
</template>

<style lang="scss">
.header {
  height: 60px;
  background-color: aqua;
  display: flex;
  flex-flow: row nowrap;
}

.header > img {
  flex: 0 1 60px;
}
.header > span {
  flex: 0 1 81px;
  margin-left: 10px;
  align-self: center;
}
.header > input {
  flex: 0 1 276px;
  height: 30px;
  margin-left: auto;
  align-self: center;
  margin-right: 15px;
}
</style>
