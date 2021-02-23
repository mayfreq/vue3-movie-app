<script lang="ts">
import { defineComponent } from "vue";

import Header from "./components/Header.vue";
import Card from "./components/Card.vue";

export default defineComponent({
  name: "App",
  components: {
    Card,
    Header,
  },
});
</script>

<template>
  <Header />
  <div class="container">
    <Card v-for="index in 19" :key="index" />
  </div>
</template>

<style lang="scss">
$width: 200px;
$height: 300px;
$content-height: 100%;

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
  background-color: aquamarine;
  padding: 15px 40px 15px 40px;
  display: flex;
  flex-flow: row wrap;
  min-width: 740px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1180px;
}
.container:after {
  content: "";
  flex: 10 0 auto;
}

@media screen and (min-width: 740px) and (max-width: 960px) {
  .container {
    width: 740px;
  }
}
@media screen and (min-width: 960px) and (max-width: 1180px) {
  .container {
    width: 960px;
  }
}
@media screen and (min-width: 1180) {
  .container {
    width: 1180px;
  }
}
</style>
