import.meta.env.BASE_URL;
const state = () => ({
  movies: [],
  discover: "popular",
  totalPages: 1,
  responseStatus: 0,
});

const mutations = {
  pushMovies(state, newMovies) {
    state.movies.push(...newMovies);
  },
  setResponseStatus(state, status) {
    state.responseStatus = status;
  },

  resetMovies(state) {
    state.movies = [];
  },
  setTotalPages(state, pages) {
    // كتبنا هذا الشرط لأن الصفحات بعضها توصل اكثر من 500 صفحة ولكن لاتحتوي على عناصر
    // بسبب ان الحد الاعلى هو 500
    state.totalPages = pages > 500 ? 500 : pages;
  },
  resetMovies(state) {
    state.movies = [];
  },
  reset(state, category) {
    state.movies = [];
    state.discover = category;
  },
};

const actions = {
  async fetchPage({ state, commit }, page = 1) {
    commit("resetMovies");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_TMDB_TOKEN,
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${state.discover}?language=en-US&page=${page}`,
      options
    );

    if (!response.ok) {
      commit("setResponseStatus", response.status);
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      commit("setResponseStatus", response.status);
    }

    const data = await response.json();

    commit("setTotalPages", data.total_pages);

    const movies = data.results.map((movie) => ({
      id: movie.id,
      poster_path: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : `${import.meta.env.BASE_URL}images/movies/no-image.png`,
      title: movie.title,
      release_date: movie.release_date?.slice(0, 4) || "N/A",
      vote_average: Number(movie.vote_average).toFixed(1),
    }));

    commit("pushMovies", movies);
  },

  async reset({ commit }, category) {
    await commit("reset", category);
  },
};

const getters = {
  allMovies: (state) => state.movies,
  getTotalPages: (state) => state.totalPages,
  getResponseStatus: (state) => state.responseStatus,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
