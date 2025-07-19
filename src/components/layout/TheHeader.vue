<template>
  <header id="header" class="pb-5">
    <div class="overlay"></div>
    <!-- <div class="header-background"></div> -->
    <div class="background-wrapper">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="app__bg__image"
        :class="getImageClass(index)"
        :style="{
          backgroundImage: `url(${image})`,
        }"
      ></div>
    </div>
    <the-navbar></the-navbar>
    <div class="container-fluid title-header position-relative">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center mb-5">
            Your Weekend Buddy For
            <span class="light-pink-color">This Week</span>
          </h1>
        </div>
      </div>
    </div>
    <home-slider
      :slides="slides"
      @next="nextSlide"
      @prev="prevSlide"
      @select="handleCardSelect"
    ></home-slider>
  </header>
</template>

<script>
import.meta.env.BASE_URL;
import gsap from "gsap";

import HomeSlider from "../home/HomeSlider.vue";
import TheNavbar from "./TheNavbar.vue";
export default {
  components: {
    HomeSlider,
    TheNavbar,
  },
  // props: {
  //   currentIndex: {
  //     type: Number,
  //     required: true,
  //   },
  // },

  data() {
    const base = import.meta.env.BASE_URL;
    return {
      images: [
        `${base}images/movies/den-bk.jpg`,
        `${base}images/movies/fight-club-bk.jpeg`,
        `${base}images/movies/the-Revenant-bk.jpg`,
        `${base}images/movies/bad-boys4-bk.jpg`,
        `${base}images/movies/joker-bk.webp`,
      ],
      slides: [
        {
          image: "den.jpg",
          name: "den of thieves",
          category: "action",
          description: "Professional thieves face fierce cops",
        },
        {
          image: "fight-club.jpg",
          name: "fight club",
          category: "drama",
          description: "A secret club changes everything",
        },
        {
          image: "the-revenant.jpg",
          name: "The revenant",
          category: "drama",
          description: "A survival battle in wilderness",
        },
        {
          image: "bad-boys.jpg",
          name: "Bad Boys",
          category: "comedy",
          description: "Rebels cops take on crime",
        },
        {
          image: "joker.jpg",
          name: "joker",
          category: "crime",
          description: "Joker unleashes chaos in Gotham",
        },
      ],
      currentIndex: 2,
    };
  },
  mounted() {
    // إخفاء كل الصور ما عدا الصورة الأولى
    // this.$refs.bgImages.forEach((el, index) => {
    //   if (index !== this.currentIndex) {
    //     gsap.set(el, { opacity: 0 });
    //   }
    // });
  },
  methods: {
    // nextSlide() {
    //   this.currentIndex = (this.currentIndex + 1) % this.images.length;
    // },
    // prevSlide() {
    //   this.currentIndex =
    //     (this.currentIndex - 1 + this.images.length) % this.images.length;
    // },
    // getBaseUrl() {
    //   return import.meta.env.BASE_URL;
    // },
    handleCardSelect(index) {
      this.currentIndex = index;
    },
    prevSlide() {
      const total = this.slides.length;
      this.currentIndex = (this.currentIndex - 1 + total) % total;
    },
    nextSlide() {
      const total = this.slides.length;
      this.currentIndex = (this.currentIndex + 1) % total;
    },

    // getImageClass(index) {
    //   const total = this.images.length;
    //   const current = this.currentIndex;

    //   const previous = (current - 1 + total) % total;
    //   const next = (current + 1) % total;
    //   const lastPrevious = (current - 2 + total) % total;
    //   const lastNext = (current + 2) % total;

    //   if (index === current) return "current--image";
    //   if (index === previous) return "previous--image";
    //   if (index === next) return "next--image";
    //   if (index === lastPrevious) return "last--previous--image";
    //   if (index === lastNext) return "last--next--image";

    //   return "";
    // },

    getImageClass(index) {
      const total = this.images.length;
      const current = this.currentIndex;

      const previous = (current - 1 + total) % total;
      const next = (current + 1) % total;
      const lastPrevious = (current - 2 + total) % total;
      const lastNext = (current + 2) % total;

      if (index === current) return "current--image";
      if (index === previous) return "previous--image";
      if (index === next) return "next--image";
      if (index === lastPrevious) return "last--previous--image";
      if (index === lastNext) return "last--next--image";

      return "";
    },
  },
};
</script>

<style scoped>
#header {
  position: relative; /* ✅ المرجع النسبي */
  /* height: 100vh;  */
  overflow: hidden;
  width: 100%;
}

.background-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -2; /* تأكد أنها تحت الـ overlay والمحتوى */
}

/* الصور */
.app__bg__image {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) translateX(var(--image-translate-offset, 0));
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 1000ms ease, opacity 1000ms ease;
  will-change: transform, opacity;
  opacity: 0;
  filter: blur(3px);
}

.app__bg__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.app__bg__image.current--image {
  opacity: 1;
  --image-translate-offset: 0;
}
.app__bg__image.previous--image {
  --image-translate-offset: -25%;
}
.app__bg__image.next--image {
  --image-translate-offset: 25%;
}
.app__bg__image.last--previous--image {
  --image-translate-offset: -50%;
}
.app__bg__image.last--next--image {
  --image-translate-offset: 50%;
}
/* الزر */
/* .next-button {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  padding: 10px 20px;
  background-color: white;
  border: none;
  cursor: pointer;
} */

/* ---------------------------------------------- */

/* #header {
  position: relative;
} */
.header-background {
  width: 100%;
  height: 100%;
  background-image: url("/movie/fight-club-bk.jpeg");
  /* background-image: url("/movie/breaking-bad.jpg"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  z-index: -2;
  /* filter: blur(3px); */
  /* filter: blur(5px); */
}
.overlay {
  /* background-color: rgba(10, 15, 34, 0.5); */
  background-color: rgba(14, 23, 54, 0.5);
  /* background-color: rgba(0, 0, 0, 0.5); */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

#header h1 {
  color: var(--secondary-color);
  line-height: 1.5;
  font-size: 1.9rem;
}

#header .title-header {
  margin-top: 4rem;
}

@media (max-width: 575.98px) {
  #header h1 {
    font-size: 1.5rem;
  }
}
</style>
