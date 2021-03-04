<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";
import Movie from "@/components/Movie.vue";
import { getMovie, TMovie } from "@/utils/getData";

export default defineComponent({
  name: "MovieList",
  components: {
    Movie,
  },
  setup() {
    const store = useStore();
    let result: TMovie[];
    const state = ref(true);
    const id = ref(1);
    const style = ref("display:none;");

    const movieList = computed(() => store.getters.get);

    const getData = async () => {
      style.value =
        "margin-left:auto; margin-right:auto; font-size:3em; display:block";
      try {
        result = await getMovie(id.value, 10);
        id.value += 10;
      } catch (error) {
        console.log(error);
      }

      if (result.length === 0) {
        style.value = "display:none";
        return;
      }

      for (const movie of result) {
        await store.dispatch("addMovie", movie);
      }
      style.value = "display:none";
      state.value = true;
    };

    const scroll = async () => {
      const innerHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.scrollingElement?.scrollHeight;

      if (innerHeight + scrollTop >= (scrollHeight ?? 0) - 35) {
        if (state.value) {
          state.value = false;
          await getData();
        }
      }
    };

    onMounted(async () => {
      window.addEventListener("scroll", scroll);
      getData();
    });

    return {
      movieList,
      style,
    };
  },
});
</script>

<template>
  <Movie v-for="movie in movieList" :key="movie.imdbId" :movie="movie" />
  <h1 :style="style">Loading...</h1>
</template>

<style lang="scss" scoped></style>
