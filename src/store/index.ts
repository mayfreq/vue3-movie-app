import { createStore } from "vuex";

export default createStore({
  state: {
    message: "Movie App",
  },
  getters: {
    getMessage: (state) => state.message,
  },
  mutations: {},
  actions: {},
  modules: {},
});
