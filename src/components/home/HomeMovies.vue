<template>
  <section id="discover">
    <div class="container-fluid py-5">
      <div class="row mb-5 mb-md-4 mb-lg-5">
        <div class="col-lg-4 col-md-12 col-sm-6">
          <div class="wrapper">
            <h4 class="split-text movie-title" ref="splitText"></h4>
          </div>
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
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 mt-3 mt-sm-1 mt-md-3 mt-lg-0">
          <div class="search-model d-flex justify-content-sm-end">
            <div>
              <span><i class="fa-solid fa-magnifying-glass"></i></span>
              <input
                type="text"
                class="search"
                placeholder="Search something here ..."
                v-model="searchQuery"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-if="errorMessage" class="text-center">
          <p class="error-message mb-0">
            {{ errorMessage }}
          </p>
          <base-button
            v-if="tryAgainBtn"
            class="light-pink-background mt-4"
            @click="setFromQuery"
            >Try Again</base-button
          >
        </div>

        <p
          v-else-if="!movies.length && !isLoading"
          class="error-message text-center"
        >
          No results found. Try adjusting your search.
        </p>

        <template v-else>
          <!-- هنا تعرض الأفلام -->
          <div
            class="col-md-4 col-lg-3"
            v-for="movie in movies"
            :key="movie.id"
          >
            <movie-card :movie="movie"></movie-card>
          </div>
        </template>

        <div class="col-12 text-center mt-3">
          <div class="pagination" v-if="!isLoading && !!!errorMessage">
            <!-- زر السابق -->
            <button
              @click="goToPage(currentPage - 1)"
              :disabled="currentPage === 1"
              aria-label="Previous page"
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
              aria-label="Page number"
            >
              {{ page }}
            </button>

            <!-- زر التالي -->
            <button
              @click="goToPage(currentPage + 1)"
              :disabled="currentPage === totalPages"
              aria-label="Next page"
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
import { isInViewport } from "../../utils/viewport";
import { splitNode } from "../../utils/splitnode";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

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
      rawMessage: `Discover <span class="light-pink-color">Movies</span>`,
      buttonClicked: "random",
      isLoading: false,
      currentPage: 1,
      errorMessage: "",
      tryAgainBtn: false,
      searchQuery: "",
    };
  },
  mounted() {
    document.fonts.ready.then(() => {
      window.addEventListener("scroll", this.checkVisibility);
      // تأكد أيضاً عند التحميل الأول
      this.checkVisibility();
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.checkVisibility);
  },

  computed: {
    ...mapGetters("movies", [
      "allMovies",
      "getTotalPages",
      "getResponseStatus",
    ]),

    movies() {
      if (!this.searchQuery) {
        // إذا مافي بحث، رجّع كل الأفلام
        return this.allMovies;
      }

      // فلترة الأفلام بناءً على العنوان
      return this.allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },

    totalPages() {
      return this.getTotalPages;
    },

    responseStatus() {
      return this.getResponseStatus;
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
        if (
          (this.$route.path === "/home" && !this.movies.length) ||
          (Object.keys(this.$route.query).length && !this.$route.hash)
        ) {
          this.setFromQuery();
        }
      },
      immediate: true,
    },
  },

  methods: {
    checkVisibility() {
      const el = this.$refs.splitText;
      if (el && isInViewport(el)) {
        const message = this.rawMessage;
        const el = this.$refs.splitText;
        el.innerHTML = "";

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = message;

        tempDiv.childNodes.forEach((node) => {
          el.appendChild(splitNode(node));
        });

        const spans = el.querySelectorAll("span");
        gsap.fromTo(
          spans,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.04,
            ease: "power2.out",
          }
        );

        window.removeEventListener("scroll", this.checkVisibility);
      }
    },

    async setFromQuery() {
      this.isLoading = true;
      this.errorMessage = "";
      this.tryAgainBtn = false;

      try {
        const allowedCategories = ["popular", "top_rated", "now_playing"];
        const query = this.$route.query;
        let category = "";
        if (query.category === undefined) {
          category = "popular";
        } else if (allowedCategories.includes(query.category)) {
          category = query.category;
        } else {
          category = false;
        }

        if (!category) {
          this.errorMessage =
            "Sorry, we couldn't find any results for this category.";
          return;
        }

        let pageNumber = query.page === undefined ? 1 : parseInt(query.page);

        this.buttonClicked = this.getButtonNameFromCategory(category);
        this.currentPage = pageNumber;

        await this.$store.dispatch("movies/reset", category);

        await this.loadMovies(pageNumber);

        const totalPages = this.totalPages;

        if (this.responseStatus === 400) {
          this.errorMessage =
            "Sorry, that page doesn't exist. Try a different one.";
          this.tryAgainBtn = false;
          return;
        }
      } catch (error) {
        this.errorMessage =
          "Something went wrong while fetching the data. Please try again later.";
        this.tryAgainBtn = true;
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

    async loadMovies(page = 1) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("movies/fetchPage", page);
      } catch (error) {
        this.errorMessage =
          "Something went wrong while fetching the data. Please try again later.";
        this.tryAgainBtn = true;
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
  background-color: #121832;
}

.movie-title {
  color: var(--secondary-color);
}

.btn-container {
  margin: 0 10px;
  position: relative;
}

.btn-container .outline.active {
  opacity: 1;
  color: var(--secondary-color);
}

.btn-container .outline:not(.active) {
  opacity: 0.7;
}

.btn-container .outline:hover {
  opacity: 1;
  color: var(--secondary-color);
}

.btn-container::after {
  content: "";
  position: absolute;
  width: 70px;
  height: 5px;
  border-radius: 5px;
  background-color: var(--main-color);
  bottom: -11px;
  transition: all 0.3s ease;
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

p.error-message {
  font-size: 17px;
  line-height: 1.7;
  color: var(--dark-teal);
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
  color: var(--dark-teal);
  cursor: pointer;
  border-radius: 4px;
}

.pagination button.active {
  background-color: var(--main-color);
  color: white;
  font-weight: bold;
}

.pagination button:disabled:not(.dots) {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination button.dots {
  background-color: transparent;
  color: var(--dark-teal);
  border: none;
  pointer-events: none;
}

.search-model {
  position: relative;
  transform: translateY(-7px);
}
.search-model > div {
  display: flex;
  position: relative;
}
.search-model > div > span {
  position: absolute;
  color: var(--secondary-color);
  opacity: 0.7;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
}
input.search {
  font-size: 14px;
  background-color: transparent;
  color: var(--secondary-color);
  outline: none;
  border: 0;
  border-left: 1px solid #444444;
  width: 100%;
  padding: 7px 0;
  padding-left: 45px;
}

input.search::placeholder {
  color: var(--secondary-color);
  opacity: 0.7;
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
