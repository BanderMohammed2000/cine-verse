import { createStore } from "vuex";
import movies from "./modules/movies";

export default createStore({
  modules: {
    movies,
  },
});
