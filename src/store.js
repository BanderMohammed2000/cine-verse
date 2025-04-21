// import { createStore } from "vuex";

// // const store = createStore({
// //   state() {
// //     return {
// //       movies: [],
// //     };
// //   },
// //   getters: {
// //     movies(state) {
// //       return state.movies;
// //     },
// //   },
// //   mutations: {
// //     setMovies(state, payload) {
// //       state.movies = payload;
// //     },
// //   },
// //   actions: {
// //     async fetchMovies(context) {
// //       const options = {
// //         method: "GET",
// //         headers: {
// //           accept: "application/json",
// //           Authorization:
// //             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDZmOWNiYTdhYzBjZDk3YWI3ODM4ZTAyODQ0YzFkMiIsIm5iZiI6MTc0MjU0NDEwMy44NzAwMDAxLCJzdWIiOiI2N2RkMWNlNzI5OTIzNzg0OTM3YTYyMjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UjjJCsmZ4AgYIQfhLOHANTNwOnHo_qs5tLirVbSg9E0",
// //         },
// //       };
// //       const response = await fetch(
// //         "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
// //         options
// //       );

// //       const responseData = await response.json();

// //       if (!response.ok) {
// //         // const error = new Error(responseData.message || "Failed to fetch!");
// //         // throw error;
// //         console.log("Error");
// //       }

// //       console.log(responseData.results);

// //       // console.log(responseData.results[0].poster_path);
// //       //   const movies = [];

// //       //   for (const data in responseData.results) {
// //       //     const movie = {
// //       //       id: responseData.results[data].id,
// //       //       poster_path: responseData.results[data].poster_path,
// //       //     };

// //       //     movies.push(movie);
// //       //   }

// //       const movies = responseData.results.map((data) => ({
// //         id: data.id,
// //         poster_path: data.poster_path,
// //         title: data.title,
// //         release_date: data.release_date?.slice(0, 4) || "N/A",
// //         vote_average: Number(data.vote_average).toFixed(1),
// //       }));
// //       context.commit("setMovies", movies);
// //     },
// //   },
// // });

// const store = createStore({
//   state: () => ({
//     movies: [],
//     currentPage: 1,
//     allResults: [],
//     currentIndex: 0,
//     perPage: 8,
//     // error: null,
//   }),

//   mutations: {
//     appendAllResults(state, movies) {
//       state.allResults.push(...movies);
//     },
//     pushMovies(state, newMovies) {
//       state.movies.push(...newMovies);
//     },
//     incrementIndex(state) {
//       state.currentIndex += state.perPage;
//     },
//     incrementPage(state) {
//       state.currentPage += 1;
//     },
//     reset(state) {
//       state.movies = [];
//       state.currentPage = 1;
//       state.allResults = [];
//       state.currentIndex = 0;
//     },
//     // setError(state, errorMsg) {
//     //   state.error = errorMsg;
//     // },
//   },

//   actions: {
//     async fetchPage(context) {
//       const options = {
//         method: "GET",
//         headers: {
//           accept: "application/json",
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDZmOWNiYTdhYzBjZDk3YWI3ODM4ZTAyODQ0YzFkMiIsIm5iZiI6MTc0MjU0NDEwMy44NzAwMDAxLCJzdWIiOiI2N2RkMWNlNzI5OTIzNzg0OTM3YTYyMjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UjjJCsmZ4AgYIQfhLOHANTNwOnHo_qs5tLirVbSg9E0",
//         },
//       };

//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${context.state.currentPage}`,
//         options
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();

//       context.commit("appendAllResults", data.results);
//       context.commit("incrementPage");
//     },

//     async loadMoreMovies(context) {
//       if (context.state.currentIndex >= context.state.allResults.length) {
//         await context.dispatch("fetchPage");
//       }

//       const next = context.state.allResults
//         .slice(
//           context.state.currentIndex,
//           context.state.currentIndex + context.state.perPage
//         )
//         .map((data) => ({
//           id: data.id,
//           poster_path: data.poster_path,
//           title: data.title,
//           release_date: data.release_date?.slice(0, 4) || "N/A",
//           vote_average: Number(data.vote_average).toFixed(1),
//         }));

//       context.commit("pushMovies", next);
//       context.commit("incrementIndex");
//     },
//   },

//   getters: {
//     allMovies: (state) => state.movies,
//   },
// });

// // const store = createStore({
// //   state: () => ({
// //     movies: [],
// //     currentPage: 1,
// //     allResults: [],
// //     currentIndex: 0,
// //     perPage: 8,
// //     error: null,
// //   }),

// //   mutations: {
// //     appendAllResults(state, movies) {
// //       state.allResults.push(...movies); // إضافة الأفلام المسترجعة إلى كل النتائج
// //     },
// //     pushMovies(state, newMovies) {
// //       state.movies.push(...newMovies); // إضافة الأفلام الجديدة إلى الأفلام المعروضة
// //     },
// //     incrementIndex(state) {
// //       state.currentIndex += state.perPage; // زيادة الـ index بعد عرض الأفلام
// //     },
// //     incrementPage(state) {
// //       state.currentPage += 1; // زيادة الصفحة عند تحميل المزيد
// //     },
// //     reset(state) {
// //       state.movies = [];
// //       state.currentPage = 1;
// //       state.allResults = [];
// //       state.currentIndex = 0;
// //     },
// //     setError(state, errorMsg) {
// //       state.error = errorMsg;
// //     },
// //   },

// //   actions: {
// //     async fetchPage(context) {
// //       const options = {
// //         method: "GET",
// //         headers: {
// //           accept: "application/json",
// //           Authorization:
// //             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDZmOWNiYTdhYzBjZDk3YWI3ODM4ZTAyODQ0YzFkMiIsIm5iZiI6MTc0MjU0NDEwMy44NzAwMDAxLCJzdWIiOiI2N2RkMWNlNzI5OTIzNzg0OTM3YTYyMjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UjjJCsmZ4AgYIQfhLOHANTNwOnHo_qs5tLirVbSg9E0",
// //         },
// //       };

// //       try {
// //         const response = await fetch(
// //           `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${context.state.currentPage}`,
// //           options
// //         );

// //         if (!response.ok) {
// //           throw new Error(`HTTP error! status: ${response.status}`);
// //         }

// //         const data = await response.json();

// //         context.commit("appendAllResults", data.results); // إضافة الأفلام إلى كل النتائج
// //         context.commit("incrementPage"); // زيادة رقم الصفحة
// //       } catch (error) {
// //         console.error("حدث خطأ أثناء جلب البيانات:", error.message);
// //         context.commit("setError", error.message);
// //       }
// //     },

// //     async loadMoreMovies(context) {
// //       if (context.state.currentIndex >= context.state.allResults.length) {
// //         await context.dispatch("fetchPage"); // تحميل صفحة جديدة إذا كانت الصفحة الحالية مكتملة
// //       }

// //       const next = context.state.allResults
// //         .slice(
// //           context.state.currentIndex,
// //           context.state.currentIndex + context.state.perPage
// //         )
// //         .map((data) => ({
// //           id: data.id,
// //           poster_path: data.poster_path,
// //           title: data.title,
// //           release_date: data.release_date?.slice(0, 4) || "N/A",
// //           vote_average: Number(data.vote_average).toFixed(1),
// //         }));

// //       context.commit("pushMovies", next); // إضافة الأفلام الجديدة
// //       context.commit("incrementIndex"); // تحديث الـ index بعد إضافة الأفلام
// //     },
// //   },

// //   getters: {
// //     allMovies: (state) => state.movies,
// //   },
// // });

// export default store;
