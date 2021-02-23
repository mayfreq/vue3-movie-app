<script lang="ts">
import { defineComponent } from "vue";
import Movie from "@/components/Movie.vue";

export default defineComponent({
  name: "MovieList",
  components: {
    Movie,
  },
});
</script>

<template>
  <Movie v-for="index in 19" :key="index" />
</template>

<style lang="scss" scoped></style>
