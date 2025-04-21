// store/modules/movies.js

const state = () => ({
  movies: [],
  discover: "popular",
  // currentPage: 1,
  totalPages: 1,
  // allResults: [],
  // currentIndex: 0,
  // perPage: 8,
});

const mutations = {
  // appendAllResults(state, movies) {
  //   state.allResults.push(...movies);
  // },
  pushMovies(state, newMovies) {
    state.movies.push(...newMovies);
  },
  // incrementIndex(state) {
  //   state.currentIndex += state.perPage;
  // },
  // incrementPage(state) {
  //   state.currentPage += 1;
  // },
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
    // state.currentPage = 1;
    // state.allResults = [];
    // state.currentIndex = 0;
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
    console.log("discover: ", state.discover);

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${state.discover}?language=en-US&page=${page}`,
      options
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("data: ", data);

    commit("setTotalPages", data.total_pages);

    const movies = data.results.map((movie) => ({
      id: movie.id,
      poster_path: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "/movie/no-image.png",
      title: movie.title,
      release_date: movie.release_date?.slice(0, 4) || "N/A",
      vote_average: Number(movie.vote_average).toFixed(1),
    }));

    // commit("resetMovies"); // تنظيف القديم

    commit("pushMovies", movies);
    // commit("incrementPage");
  },

  // async reset({ commit, dispatch, state }, category) {
  //   commit("reset", category);
  //   await dispatch("fetchPage", 1); // يجب أن تحدث totalPages هنا
  //   return state.totalPages;
  // },

  // async loadMoreMovies({ state, commit, dispatch }) {
  //   await dispatch("fetchPage");
  // },

  async reset({ commit }, category) {
    await commit("reset", category);
  },
};

const getters = {
  allMovies: (state) => state.movies,
  getTotalPages: (state) => state.totalPages,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
