import { createStore } from "vuex";
import { Movie } from "@/utils/getData";

export default createStore({
  state: {
    movieList: [] as Movie[],
    searchText: "",
  },
  getters: {
    get: (state) => {
      if (state.searchText === "") {
        return state.movieList;
      } else {
        return state.movieList.filter((movie) =>
          movie.title.toLowerCase().includes(state.searchText)
        );
      }
    },
  },
  mutations: {
    addMovie(state, payload) {
      state.movieList.push(payload);
    },
    changeSearchText(state, payload) {
      state.searchText = payload;
    },
  },
  actions: {
    async addMovie({ commit }, newMovie) {
      commit("addMovie", newMovie);
    },
    async changeSearchText({ commit }, newSearchText) {
      commit("changeSearchText", newSearchText);
    },
  },
});
