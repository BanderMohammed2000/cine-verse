<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(data, index) in slides" :key="index">
        <div class="overlay"></div>
        <img :src="data.image" :alt="data.title" />
        <div class="title">
          <span>{{ data.title }}</span>
        </div>
      </div>
      <!-- <div class="swiper-slide">
        <div class="overlay"></div>
        <img src="/movie/fight-club.jpg" alt="" />
        <div class="title">
          <span>Fight Club</span>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="overlay"></div>
        <img src="/movie/the-revenant.jpg" alt="" />
        <div class="title">
          <span>The Revenant</span>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="overlay"></div>
        <img src="/movie/bad-boys.jpg" alt="" />
        <div class="title">
          <span>Bad Boys</span>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="overlay"></div>
        <img src="/movie/joker.jpg" alt="" />
        <div class="title">
          <span>Joker</span>
        </div>
      </div> -->
    </div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
import "swiper/css/navigation"; // استيراد تنسيق أزرار التنقل
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { EffectCoverflow, Navigation } from "swiper/modules";

export default {
  data() {
    return {
      swiper: null,
      slides: [
        { image: "movie/den.jpg", title: "Den" },
        { image: "movie/fight-club.jpg", title: "Fight Club" },
        { image: "movie/the-revenant.jpg", title: "The Revenant" },
        { image: "movie/bad-boys.jpg", title: "Bad Boys" },
        { image: "movie/joker.jpg", title: "Joker" },
      ],
    };
  },
  mounted() {
    this.swiper = new Swiper(".swiper", {
      //   modules: [EffectCoverflow, Pagination, Navigation],
      modules: [EffectCoverflow, Navigation],
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      initialSlide: 2,
      speed: 600,
      preventClicks: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 350,
        modifier: 1,
        slideShadows: true,
      },
      //   pagination: {
      //     el: ".swiper-pagination",
      //   },
      navigation: {
        nextEl: ".swiper-button-next", // تفعيل زر التالي
        prevEl: ".swiper-button-prev", // تفعيل زر السابق
      },
      on: {
        click: (event) => {
          this.swiper.slideTo(this.swiper.clickedIndex);
          console.log(event);
        },
      },
    });
  },
};
</script>

<style scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.swiper {
  width: 100%;
  /* padding: 50px 0; */
}

.overlay {
  /* background-color: rgba(90, 104, 144, 0.5); */
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  /* border-radius: 14px; */
}

/* div.swiper-wrapper {
  cursor: pointer !important;
} */

.swiper-slide {
  position: relative;
  /* height: 450px; */
  width: 320px;
  aspect-ratio: 32/45;
  /* aspect-ratio: 3/4; */
  border-radius: 8px;
  /* border-radius: 14px; */
  /* border: 1px solid rgba(177, 177, 177, 0.4); */
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  user-select: none;
}

.title {
  opacity: 0;
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translate(-50%, -20%);
  -ms-transform: translate(-50%, -20%);
  width: max-content;
  text-align: center;
  padding: 10px 18px;
  background: rgba(46, 39, 39, 0.3);
  border-radius: 8px;
  border: 2px solid rgba(177, 177, 177, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.5s linear;
}

.title span {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
}

.swiper-slide-active .title {
  opacity: 1;
  bottom: -10px;
  box-shadow: 0 20px 30px 2px rgba(25, 43, 206, 0.6);
}

.swiper-pagination {
  --swiper-pagination-bottom: 6px;
}

.swiper-pagination-bullet {
  width: 14px;
  height: 14px;
  background-color: #ffffff;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
}

.swiper-pagination-bullet-active {
  width: 32px;
  background-color: rgba(25, 43, 206, 1);
  border-radius: 14px;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 27px;
  color: #ffffff;
}

.swiper-button-prev {
  left: 65px;
}

.swiper-button-next {
  right: 65px;
}

@media (max-width: 1100px) {
  .swiper-slide {
    width: 300px;
  }
}

@media (max-width: 900px) {
  .swiper-slide {
    width: 250px;
  }
}

@media (max-width: 700px) {
  .swiper-slide {
    width: 230px;
  }
}

@media (max-width: 610px) {
  .swiper-slide {
    width: 200px;
  }
}
</style>
