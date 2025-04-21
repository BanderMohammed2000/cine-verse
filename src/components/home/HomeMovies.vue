<template>
  <section id="discover">
    <div class="container-fluid py-5">
      <div class="row mb-5 mb-md-4 mb-lg-5">
        <div class="col-lg-4 col-md-12 col-sm-6">
          <h4 class="movie-title">
            Discover <span class="light-pink-color">Movies</span>
          </h4>
        </div>
        <div
          class="col-lg-4 col-md-6 col-sm-12 mt-3 mt-lg-0 order-1 order-md-0"
        >
          <div :class="['btn-container', buttonClicked]">
            <div class="row">
              <div class="col col-sm-3 col-md-4">
                <base-button
                  :class="['outline', { active: buttonClicked == 'random' }]"
                  @click="onRandomClick"
                  >Random</base-button
                >
              </div>
              <div class="col col-sm-3 col-md-4">
                <base-button
                  :class="['outline', { active: buttonClicked == 'popular' }]"
                  @click="onPopularClick"
                  >Popular</base-button
                >
              </div>
              <div class="col col-sm-3 col-md-4">
                <base-button
                  :class="['outline', { active: buttonClicked == 'recent' }]"
                  @click="onRecentClick"
                  >Recent</base-button
                >
              </div>
            </div>
          </div>
          <!-- <div class="horizontal-line"></div> -->
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 mt-3 mt-sm-1 mt-md-3 mt-lg-0">
          <form @submit.prevent class="d-flex justify-content-sm-end">
            <div>
              <span><i class="fa-solid fa-magnifying-glass"></i></span>
              <input
                type="text"
                class="search"
                placeholder="Search something here ..."
              />
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>

        <template v-else>
          <!-- هنا تعرض الأفلام -->
          <div
            class="col-md-4 col-lg-3"
            v-for="(movie, index) in movies"
            :key="index"
          >
            <movie-card :movie="movie"></movie-card>
          </div>
        </template>

        <div class="col-12 text-center mt-3">
          <!-- <base-button
            v-if="!isLoading"
            class="light-pink-background"
            @click="loadMore"
            >Discover more</base-button
          > -->

          <!-- <div class="pagination" v-if="!isLoading">
            <button @click="goToPage(1)">1</button>
            <button @click="goToPage(2)">2</button>
            <button @click="goToPage(3)">3</button>
          </div> -->

          <div class="pagination" v-if="!isLoading && !!!errorMessage">
            <!-- زر السابق -->
            <button
              @click="goToPage(currentPage - 1)"
              :disabled="currentPage === 1"
            >
              <i class="fa-solid fa-angle-left"></i>
            </button>

            <!-- أزرار الصفحات -->
            <button
              v-for="page in paginatedPages"
              :key="page"
              :disabled="page === '...'"
              :class="{ active: page === currentPage, dots: page === '...' }"
              @click="page !== '...' && goToPage(page)"
            >
              {{ page }}
            </button>

            <!-- زر التالي -->
            <button
              @click="goToPage(currentPage + 1)"
              :disabled="currentPage === totalPages"
            >
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
          <base-loader v-else-if="isLoading"></base-loader>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";
import MovieCard from "./MovieCard.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    MovieCard,
    BaseButton,
  },
  data() {
    return {
      buttonClicked: "random",
      isLoading: false,
      currentPage: 1,
      errorMessage: "",
      // movies: [
      //   {
      //     name: "Bad Boys",
      //     img: "/movie/bad-boys.jpg",
      //     rate: "8.8",
      //     category: "Comedy",
      //     releaseYear: "2024",
      //   },
      //   {
      //     name: "Joker",
      //     img: "/movie/joker.jpg",
      //     rate: "7.4",
      //     category: "Crime",
      //     releaseYear: "2024",
      //   },
      //   {
      //     name: "The Revenant",
      //     img: "/movie/the-revenant.jpg",
      //     rate: "9.0",
      //     category: "Drama",
      //     releaseYear: "2015",
      //   },
      //   {
      //     name: "Fight Club",
      //     img: "/movie/fight-club.jpg",
      //     rate: "8.8",
      //     category: "Drama",
      //     releaseYear: "1990",
      //   },
      //   {
      //     name: "Den of thieves",
      //     img: "/movie/den.jpg",
      //     rate: "7.0",
      //     category: "Action",
      //     releaseYear: "2016",
      //   },
      //   {
      //     name: "Den of thieves",
      //     img: "/movie/den.jpg",
      //     rate: "7.0",
      //     category: "Action",
      //     releaseYear: "2016",
      //   },
      // ],
    };
  },

  // async created() {
  //   await this.loadMovies();
  // },

  // computed: {
  //   ...mapGetters(["movies"]),
  // },

  // created() {
  //   this.loadMovies();
  // },

  // methods: {

  //   onRandomClick(e) {
  //     if (!e.target.className.includes("active")) {
  //       this.currentPage = 1;
  //       this.moveHorizontalLine("random");
  //       this.changeCategory("popular");
  //     }
  //   },

  //   onPopularClick(e) {
  //     if (!e.target.className.includes("active")) {
  //       this.currentPage = 1;
  //       this.moveHorizontalLine("popular");
  //       this.changeCategory("top_rated");
  //     }
  //   },

  //   onRecentClick(e) {
  //     if (!e.target.className.includes("active")) {
  //       this.currentPage = 1;
  //       this.moveHorizontalLine("recent");
  //       this.changeCategory("now_playing");
  //     }
  //   },

  //   async handleWithLoading(actionName) {
  //     this.isLoading = true;
  //     try {
  //       await this.$store.dispatch(actionName);
  //     } catch (error) {
  //       console.error("حدث خطأ أثناء جلب البيانات:", error.message);
  //     } finally {
  //       this.isLoading = false;
  //     }
  //   },

  //   async changeCategory(category) {
  //     await this.$store.dispatch("movies/reset", category);
  //     await this.loadMovies();
  //   },
  //   async loadMovies(page = 1) {
  //     this.isLoading = true;
  //     try {
  //       // التعديل هنا: تمرير رقم الصفحة
  //       await this.$store.dispatch("movies/fetchPage", page);
  //     } catch (error) {
  //       console.error("حدث خطأ أثناء جلب البيانات:", error.message);
  //     } finally {
  //       this.isLoading = false;
  //     }
  //   },

  //   // تُستخدم مع أزرار الصفحات
  //   goToPage(pageNumber) {
  //     if (pageNumber < 1 || pageNumber > this.totalPages) return;
  //     this.currentPage = pageNumber;
  //     this.loadMovies(pageNumber);
  //   },

  //   moveHorizontalLine(value) {
  //     this.buttonClicked = value;
  //   },
  // },

  // غير ضروري بسبب ان watch يقوم بالغرض
  // created() {
  //   this.setFromQuery();
  // },

  computed: {
    ...mapGetters("movies", ["allMovies", "getTotalPages"]),
    movies() {
      return this.allMovies;
    },
    totalPages() {
      return this.getTotalPages;
    },
    paginatedPages() {
      const pages = [];
      const current = this.currentPage;
      const total = this.totalPages;

      if (total <= 5) {
        // لو عدد الصفحات قليل، اعرضهم كلهم
        for (let i = 1; i <= total; i++) {
          pages.push(i);
        }
      } else {
        if (current <= 3) {
          pages.push(1, 2, 3, 4, "...", total);
        } else if (current >= total - 2) {
          pages.push(1, "...", total - 3, total - 2, total - 1, total);
        } else {
          pages.push(1, "...", current - 1, current, current + 1, "...", total);
        }
      }

      return pages;
    },
  },

  watch: {
    "$route.query": {
      handler() {
        this.setFromQuery();
      },
    },
  },

  // watch: {
  //   "$route.query": {
  //     handler(newQuery, oldQuery) {
  //       if (
  //         !oldQuery ||
  //         JSON.stringify(newQuery) !== JSON.stringify(oldQuery)
  //       ) {
  //         console.log("Watcher triggered");
  //         this.setFromQuery();
  //       }
  //     },
  //     immediate: true,
  //     deep: true,
  //   },
  // },

  methods: {
    async setFromQuery() {
      this.isLoading = true;
      this.errorMessage = "";

      try {
        const allowedCategories = ["popular", "top_rated", "now_playing"];
        const query = this.$route.query;
        console.log("query.category: ", query.category);

        // ✅ تعيين القيم الافتراضية
        // const category = allowedCategories.includes(query.category)
        //   ? query.category
        //   : false;
        // console.log(!!this.errorMessage);

        let category = "";
        if (query.category === undefined) {
          category = "popular";
        } else if (allowedCategories.includes(query.category)) {
          category = query.category;
        } else {
          category = false;
        }

        if (!category) {
          this.errorMessage = "التصنيف غير موجود";
          // console.log(!!!this.errorMessage);

          return;
        }

        // console.log("category: ", category);

        // const page = parseInt(query.page);
        // // console.log("Page: ", !!page);

        // // const pageNumber = !isNaN(page) && page > 0 ? page : 1;
        // let pageNumber = page === NaN ? 1 : page;
        // if (pageNumber <= 0) {
        //   this.errorMessage = "الصفحة غير موجودة";
        //   return;
        // }

        // جلب عدد الصفحات للتصنيف المختار
        // const totalPages =
        //   (await this.$store.dispatch("movies/reset", category)) || 1;

        // console.log("totalPages11: ", totalPages);

        // const page = parseInt(query.page);
        // console.log("Page: ", !!page);

        // const pageNumber = !isNaN(page) && page > 0 ? page : 1;
        // let pageNumber = page === NaN ? 1 : page;
        // if (pageNumber <= 0 || pageNumber > totalPages) {
        //   this.errorMessage = "الصفحة غير موجودة";
        //   return;
        // }

        // const totalPages = this.totalPages;
        // console.log(totalPages);

        // تحقق من أن رقم الصفحة لا يتجاوز العدد الحقيقي
        // if (pageNumber > totalPages) {
        //   this.errorMessage = "رقم الصفحة خارج النطاق.";
        //   return;
        // }
        // const page = parseInt(query.page);
        let pageNumber = query.page === undefined ? 1 : parseInt(query.page);
        // console.log("pageNumber: ", query.page);

        this.buttonClicked = this.getButtonNameFromCategory(category);
        this.currentPage = pageNumber;

        await this.$store.dispatch("movies/reset", category);
        await this.loadMovies(pageNumber);
        const totalPages = this.totalPages;
        console.log(totalPages);

        if (pageNumber <= 0 || pageNumber > totalPages) {
          this.errorMessage = "الصفحة غير موجودة";
          return;
        }
      } catch (error) {
        this.errorMessage = "حدث خطأ أثناء تحميل المحتوى.";
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },

    getButtonNameFromCategory(category) {
      if (category === "popular") return "random";
      if (category === "top_rated") return "popular";
      if (category === "now_playing") return "recent";
      return "random";
    },

    goToPage(pageNumber) {
      if (pageNumber < 1 || pageNumber > this.totalPages) return;
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          category: !this.$route.query.category
            ? "popular"
            : this.$route.query.category,
          page: pageNumber,
        },
      });
      this.scrollToDiscover();
    },

    async changeCategory(category) {
      this.$router.push({
        path: this.$route.path,
        query: {
          category,
          page: 1,
        },
      });

      this.scrollToDiscover();
    },

    scrollToDiscover() {
      this.$nextTick(() => {
        const el = document.getElementById("discover");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      });
    },

    onRandomClick(e) {
      if (!e.target.className.includes("active")) {
        this.currentPage = 1;
        this.moveHorizontalLine("random");
        this.changeCategory("popular");
      }
    },

    onPopularClick(e) {
      if (!e.target.className.includes("active")) {
        this.currentPage = 1;
        this.moveHorizontalLine("popular");
        this.changeCategory("top_rated");
      }
    },

    onRecentClick(e) {
      if (!e.target.className.includes("active")) {
        this.currentPage = 1;
        this.moveHorizontalLine("recent");
        this.changeCategory("now_playing");
      }
    },

    async handleWithLoading(actionName) {
      this.isLoading = true;
      try {
        await this.$store.dispatch(actionName);
      } catch (error) {
        console.error("حدث خطأ أثناء جلب البيانات:", error.message);
      } finally {
        this.isLoading = false;
      }
    },

    async loadMovies(page = 1) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("movies/fetchPage", page);
      } catch (error) {
        console.error("حدث خطأ أثناء جلب البيانات:", error.message);
      } finally {
        this.isLoading = false;
      }
    },

    moveHorizontalLine(value) {
      this.buttonClicked = value;
    },
  },
};
</script>

<style scoped>
section#discover {
  background-color: #0a0f23;
}
.movie-title {
  color: #ffffff;
  /* font-size: calc(10px + 1vw); */
}
.btn-container {
  /* display: flex;
  justify-content: space-around; */
  margin: 0 10px;
  position: relative;
}
.btn-container .outline.active {
  opacity: 1;
  color: #ffffff;
}
.btn-container .outline:not(.active) {
  opacity: 0.7;
}
.btn-container .outline:hover {
  opacity: 1;
  color: #ffffff;
}
.btn-container::after {
  content: "";
  position: absolute;
  width: 70px;
  height: 5px;
  border-radius: 5px;
  background-color: #e2606a;
  bottom: -11px;
  transition: all 0.3s ease;
  /* left: 35%; */
  /* left: 70%; */
}

.btn-container.random::after {
  left: 0;
}

.btn-container.popular::after {
  left: 35%;
}

.btn-container.recent::after {
  left: 70%;
}

.pagination button.dots {
  cursor: default;
  pointer-events: none;
  background-color: transparent;
  border: none;
  color: #999;
}
.pagination {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;
}

.pagination button {
  all: unset;
  padding: 6px 12px;
  color: #19947b;
  /* border: 1px solid #ccc; */
  /* background-color: transparent; */
  cursor: pointer;
  border-radius: 4px;
}

.pagination button.active {
  background-color: #e2606a;
  color: white;
  font-weight: bold;
}

.pagination button:disabled:not(.dots) {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination button.dots {
  background-color: transparent;
  color: #19947b;
  border: none;
  pointer-events: none;
}

form {
  position: relative;
  transform: translateY(-7px);
}
form > div {
  display: flex;
  /* width: 60%; */
  position: relative;
}
form > div > span {
  position: absolute;
  color: #ffffff;
  opacity: 0.7;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
}
input.search {
  font-size: 14px;
  background-color: transparent;
  color: #ffffff;
  outline: none;
  border: 0;
  border-left: 1px solid #444444;
  /* border-radius: 3px; */
  width: 100%;
  /* text-align: end; */
  padding: 7px 0;
  padding-left: 45px;
}

input.search::placeholder {
  color: #ffffff;
  opacity: 0.7;
  /* text-align: end; */
}

@media (max-width: 991.98px) {
  .btn-container {
    margin: 0;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .btn-container.popular::after {
    left: 25%;
  }

  .btn-container.recent::after {
    left: 51%;
  }
}
</style>
