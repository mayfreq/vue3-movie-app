<script lang="ts">
import { defineComponent } from "vue";

import Header from "./components/Header.vue";
import MovieList from "./components/MovieList.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    MovieList,
  },
});
</script>

<template>
  <Header />
  <div class="container">
    <MovieList />
  </div>
</template>

<style lang="scss">
$height: 100%;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
}
body {
  height: 100vh;
}

.container {
  background-color: rgb(231, 235, 240);
  padding: 15px 40px 15px 40px;
  display: flex;
  flex-flow: row wrap;
  margin-left: auto;
  margin-right: auto;
  max-width: 1180px;
  min-width: 840px;
}
</style>
