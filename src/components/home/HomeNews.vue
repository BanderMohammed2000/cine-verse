<template>
  <section id="news">
    <div class="container-fluid py-5">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-6"><h5 class="mb-4 title-section">News</h5></div>
            <div class="col-6 text-end">
              <span class="prev me-3" @click="movePrev">
                <i class="fa-solid fa-chevron-left fa-xl"></i>
              </span>
              <span class="next" @click="moveNext">
                <i class="fa-solid fa-chevron-right fa-xl"></i>
              </span>
            </div>
          </div>

          <div class="news-section">
            <div
              id="carouselExample"
              class="carousel slide"
              ref="carouselExample"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-md-12">
                      <news-card></news-card>
                    </div>
                    <div class="col-md-4">
                      <news-card verticalCard></news-card>
                    </div>
                    <div class="col-md-4">
                      <news-card verticalCard></news-card>
                    </div>
                    <div class="col-md-4">
                      <news-card verticalCard></news-card>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="/movie/joker.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img
                    src="/movie/the-revenant.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <!-- <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NewsCard from "./NewsCard.vue";
import { Carousel } from "bootstrap";

export default {
  components: {
    NewsCard,
  },
  data() {
    return {
      carousel: null,
    };
  },
  mounted() {
    if (this.$refs.carouselExample) {
      this.carousel = new Carousel(this.$refs.carouselExample);
    }
  },
  methods: {
    moveNext() {
      if (this.carousel) {
        this.carousel.cycle();
        this.carousel.next();
      }
    },
    movePrev() {
      if (this.carousel) {
        this.carousel.cycle();
        this.carousel.prev();
      }
    },
  },
};
</script>

<style scoped>
section#news {
  background-color: #0f152b;
}
.news-section {
  padding: 30px;
  background-color: #0c0f22;
  border-radius: 5px;
}
.title-section {
  color: #ffffff;
}
.prev,
.next {
  color: #ffffff;
  cursor: pointer;
}
</style>
