<template>
  <div class="container-fluid px-0 m-0">
    <div
      id="testimonialCarousel"
      ref="carousel"
      :class="{ slide: isSmallScreen }"
      class="carousel"
    >
      <div class="carousel-inner" ref="carouselInner">
        <div
          class="carousel-item"
          v-for="(movie, index) in moviesWeek"
          :key="index"
          :class="{ active: index === getActiveItemIndex }"
        >
          <home-card :movie="movie"></home-card>
        </div>
      </div>
      <button class="carousel-control-prev" @click="scrollPrev">
        <span>
          <i class="fa-solid fa-angle-left fa-lg"></i>
        </span>
      </button>
      <button class="carousel-control-next" @click="scrollNext">
        <span> <i class="fa-solid fa-angle-right fa-lg"></i> </span>
      </button>
    </div>
  </div>
</template>

<script>
import HomeCard from "./HomeCard.vue";
export default {
  components: {
    HomeCard,
  },
  data() {
    return {
      moviesWeek: [
        {
          title: "Bander Ali",
          description: "Web developer",
          image: "/movie/fight-club.jpg",
        },
      ],
      scrollPosition: 0,
      cardWidth: 0,
      carouselWidth: 0,
      isSmallScreen: false,
      activeItemIndex: 0,
      numOfCardsShown: 0,
      numOfClicksNext: 0,
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);

    this.$nextTick(() => {
      const carouselInner = this.$refs.carouselInner;
      const carouselItems = carouselInner.children;

      // this.numOfClicksNext = Math.floor((this.commentData.length - 3) / 2) + 1;

      let commentDataLength = (this.commentData.length - 3) / 2;
      this.numOfClicksNext =
        commentDataLength % 1 !== 0
          ? Math.floor(commentDataLength) + 1
          : commentDataLength;

      if (carouselItems.length > 0) {
        // offsetWidth يعطينا العرض الفعلي (بالبكسل) لهذا العنصر، بما في ذلك الـ padding والـ border، لكنه لا يشمل الـ margin.
        this.cardWidth = carouselItems[0].offsetWidth;

        // console.log(this.cardWidth);

        // console.log(Math.floor(carouselItems.length / 2 - 1) * 450);
        // console.log("scrollPosition ", this.scrollPosition);

        /*
        scrollWidth يعطينا العرض الكامل القابل للتمرير (scrollable width) داخل carouselInner.
        أي إجمالي عرض جميع العناصر الموجودة داخل الكاروُسل، حتى لو لم تكن كلها مرئية على الشاشة في نفس الوقت.
        */
        this.carouselWidth = carouselInner.scrollWidth;

        this.scrollPosition =
          Math.floor(carouselItems.length / 2 - 1) * this.cardWidth;

        let value = carouselItems.length / 2;
        this.activeItemIndex = value % 1 !== 0 ? Math.ceil(value) : value + 1;

        // console.log("card offsetWidth ", carouselItems[0].offsetWidth);
        // console.log("scrollWidth ", carouselInner.scrollWidth);

        this.$refs.carouselInner.scrollTo({
          left: this.scrollPosition,
        });
      }
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
  computed: {
    getActiveItemIndex() {
      return this.activeItemIndex - 1;
    },
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.matchMedia("(max-width: 575px)").matches;
      let mobileSize = window.matchMedia("(max-width: 575px)").matches;
      // let tabletSize = window.matchMedia("(min-width: 576px)").matches;
      let labSize = window.matchMedia("(min-width: 768px)").matches;

      this.numOfCardsShown = mobileSize ? 1 : labSize ? 3 : 2;
      // console.log(this.numOfCardsShown);
    },
    scrollNext() {
      // this.scrollPosition <
      //   this.carouselWidth - this.cardWidth * this.numOfCardsShown
      if (
        this.numOfClicksNext <
        this.commentData.length - this.numOfCardsShown
      ) {
        this.scrollPosition += this.cardWidth;

        // console.log("scrollPosition  scrollNext  " + this.scrollPosition);

        this.$refs.carouselInner.scrollTo({
          left: this.scrollPosition,
          behavior: "smooth",
        });

        this.activeItemIndex++;
        this.numOfClicksNext++;
        // console.log("scrollNext  " + this.numOfClicksNext);
      }
    },
    scrollPrev() {
      // this.scrollPosition > 0
      if (this.numOfClicksNext > 0) {
        this.scrollPosition -= this.cardWidth;
        // console.log("scrollPosition  scrollPrev  " + this.scrollPosition);

        this.$refs.carouselInner.scrollTo({
          left: this.scrollPosition,
          behavior: "smooth",
        });

        this.activeItemIndex--;
        this.numOfClicksNext--;
        // console.log("scrollPrev  " + this.numOfClicksNext);
      }
    },
  },
};
</script>

<style scoped>
#testimonialCarousel .carousel-inner {
  height: 350px;
  overflow: hidden;
  align-items: center;
}

.carousel-inner {
  padding: 1em;
}

.carousel-control-prev,
.carousel-control-next {
  width: 34px;
  height: 34px;
  background-color: gray;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15),
    -1px -1px 10px rgba(0, 0, 0, 0.15);
}

.carousel-control-next,
.carousel-control-prev {
  opacity: 0.5;
  color: #ffffff;
}

.carousel-control-next:hover,
.carousel-control-prev:hover {
  color: #ffffff;
  opacity: inherit;
}

.carousel-control-next {
  right: 10px;
}

.carousel-control-prev {
  left: 10px;
}

.carousel-item.active .card {
  transform: scale(1.1) translateY(-13px);
  margin: 0 25px;
}

@media screen and (min-width: 576px) {
  .carousel-inner {
    display: flex;
    /* width: 90%; */
    width: 100%;
    margin-inline: auto;
    padding: 1em 0;
    overflow: hidden;
  }
  .carousel-item {
    display: block;
    margin-right: 0;
    flex: 0 0 calc(100% / 2);
  }
}

@media screen and (min-width: 768px) {
  .carousel-item {
    display: block;
    margin-right: 0;
    /* flex: 0 0 calc(99% / 3); */
    flex: 0 0 calc(100% / 3);
    /* flex: 0 0 450px; */
  }
}

@media screen and (max-width: 851px) {
  .carousel-item.active .card {
    transform: scale(1) translateY(0);
    margin: 0 0.5em;
  }
}

@media (max-width: 575px) {
  .carousel-inner {
    display: flex;
    /* width: 90%; */
    width: 90%;
    margin-inline: auto;
    padding: 1em 0;
    /* overflow: hidden; */
  }
  .carousel-item {
    display: block;
    margin-right: 0;
    flex: 0 0 100%;
    /* flex: 0 0 450px; */
  }
  .carousel-control-next {
    right: 7px;
  }

  .carousel-control-prev {
    left: 7px;
  }
}
</style>
