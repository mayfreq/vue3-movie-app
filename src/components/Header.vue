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
    <input type="text" placeholder="Search" />
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

@media screen and (min-width: 740px) {
  .header {
    width: 740px;
  }
}
@media screen and (min-width: 960px) {
  .header {
    width: 960px;
  }
}
@media screen and (min-width: 1180px) {
  .header {
    width: 1180px;
  }
}
</style>
