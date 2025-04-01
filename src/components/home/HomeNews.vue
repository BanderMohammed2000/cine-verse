<template>
  <section id="news">
    <div class="container-fluid py-5">
      <div class="row">
        <div class="col-md-4 order-1 order-md-0 mt-5 mt-md-0">
          <div class="col">
            <h5 class="mb-4">
              Hall Of <span class="light-pink-color">Fame</span>
            </h5>
          </div>
          <list-people :people="reviewers">Top Reviewers</list-people>
          <list-people :people="fandom">Top Fandom</list-people>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-6"><h5 class="mb-4">News</h5></div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NewsCard from "./NewsCard.vue";
import ListPeople from "./ListPeople.vue";
import { Carousel } from "bootstrap";

export default {
  components: {
    NewsCard,
    ListPeople,
  },
  data() {
    return {
      carousel: null,
      reviewers: [
        { name: "Bader Ali", img: "/people/1.jpg", points: "2544" },
        { name: "Nader Fahed", img: "/people/6.jpg", points: "1589" },
        { name: "Ali Ahmed", img: "/people/3.png", points: "4" },
        { name: "Bander Mohammed", img: "/people/4.png", points: "188" },
        { name: "Faisal Salem", img: "/people/5.png", points: "2223" },
      ],
      fandom: [
        { name: "Bader Ali", img: "/people/1.jpg", points: "2544" },
        { name: "Nader Fahed", img: "/people/6.jpg", points: "1589" },
        { name: "Ali Ahmed", img: "/people/3.png", points: "4" },
        { name: "Bander Mohammed", img: "/people/4.png", points: "188" },
        { name: "Faisal Salem", img: "/people/5.png", points: "2223" },
      ],
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
  /* padding: 43px 30px; */
  padding: 30px;
  background-color: #0c0f22;
  border-radius: 5px;
}
h5 {
  color: #ffffff;
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
