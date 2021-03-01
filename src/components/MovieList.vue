<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";
import Movie from "@/components/Movie.vue";
import { getMovie } from "@/utils/getData";

export default defineComponent({
  name: "MovieList",
  components: {
    Movie,
  },
  setup() {
    const store = useStore();
    let result: any[] = [];

    const movieList = computed(() => store.getters.get);

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
        await store.dispatch("addMovie", movie);
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
  <Movie v-for="movie in movieList" :key="movie.imdbId" :movie="movie" />
</template>

<style lang="scss" scoped></style>
