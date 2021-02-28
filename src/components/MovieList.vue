<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import Movie from "@/components/Movie.vue";
import { getMovie } from "@/utils/getData";

export default defineComponent({
  name: "MovieList",
  components: {
    Movie,
  },
  setup() {
    const movieList = reactive({ value: [] as any[] });
    let result: any[] = [];
    const style = ref("display:none;");

    onMounted(async () => {
      style.value =
        "margin-left:auto; margin-right:auto; font-size:3em; display:block";
      try {
        result = await getMovie();
      } catch (error) {
        console.log(error);
      }

      for (const movie of result) {
        movieList.value.push(movie);
      }
      style.value = "display:none";
    });

    return {
      movieList,
      style,
    };
  },
});
</script>

<template>
  <h1 :style="style">Loading...</h1>
  <Movie v-for="movie in movieList.value" :key="movie.imdbId" :movie="movie" />
</template>

<style lang="scss" scoped></style>
