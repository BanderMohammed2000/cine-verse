<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(slide, index) in slides"
              :key="index"
              @click="$emit('select', index)"
            >
              <div class="overlay"></div>
              <img
                :src="`/cine-verse-website/images/movies/${slide.image}`"
                :alt="slide.name"
              />
              <div class="info">
                <h2 class="text name">{{ slide.name }}</h2>
                <h4 class="text category">{{ slide.category }}</h4>
                <p class="text description">{{ slide.description }}</p>
              </div>
            </div>
          </div>

          <!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> -->
          <div class="swiper-button-prev" @click="$emit('prev')"></div>
          <div class="swiper-button-next" @click="$emit('next')"></div>
        </div>
      </div>
    </div>
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
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  emits: ["prev", "next"],
  data() {
    return {
      swiper: null,
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
  /* background-color: rgba(0, 0, 0, 0.5); */
  background-color: rgba(0, 0, 0, 0.4);
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
  perspective: 1000px;
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

.swiper .swiper-slide .info {
  /* opacity: 0; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 30px;
  color: var(--secondary-color);
  position: absolute;
  top: 50%;
  /* transform: translateY(50%) translateZ(30px) scale(1.4); */
  transform: translateZ(30px) scale(1.4);
  /* transition: all 0.4s ease-in; */
}

/* .swiper .swiper-slide-active .info {
  opacity: 1;
  transform: translateY(-70%) translateZ(30px) scale(1.4);
} */

.info .text {
  position: relative;
}

.info .name,
.info .category {
  text-transform: uppercase;
}

.info .name,
.info .category,
.info .description {
  transform: translateY(100%);
  transition: all 0.5s ease;
  opacity: 0;
}

.info .name {
  margin-bottom: 0.2rem;
  font-weight: 300;
  /* transition-delay: 0.1s; */
}
.info .category {
  margin-bottom: 1.1rem;
  margin-left: 30px;
  font-weight: 500;
  /* transition-delay: 0.2s; */
}

.info .description {
  font-size: 13px;
  /* transition-delay: 0.3s; */
}

.swiper-slide-active .info .name {
  transition-delay: 0.5s;
}

.swiper-slide-active .info .category {
  transition-delay: 0.7s;
}

.swiper-slide-active .info .description {
  transition-delay: 0.8s;
}

.swiper-slide-active .info .name,
.swiper-slide-active .info .category,
.swiper-slide-active .info .description {
  opacity: 1;
  transform: translateY(-100%);
}

.info .category::after {
  bottom: 0;
  width: 43px;
  height: 1px;
}

.info .category::before {
  top: 50%;
  width: 15px;
  height: 4px;
}

.info .category::before,
.info .category::after {
  content: "";
  position: absolute;
  background: #fff;
  left: 0%;
}
.info .category::before {
  transform: translate(-28px, 5px);
}
.info .category::after {
  transform: translate(-28px, 8px);
}

.swiper-pagination {
  --swiper-pagination-bottom: 6px;
}

.swiper-pagination-bullet {
  width: 14px;
  height: 14px;
  background-color: var(--secondary-color);
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
  color: var(--secondary-color);
}

/* .swiper-button-prev {
  left: 65px;
}

.swiper-button-next {
  right: 65px;
} */

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

@media (max-width: 767.98px) {
  .info .name {
    font-size: 20px;
  }
  .info .category {
    font-size: 18px;
  }
  .info .description {
    display: none;
  }
}

@media (max-width: 575.98px) {
  .swiper-button-next,
  .swiper-rtl .swiper-button-prev {
    right: var(--swiper-navigation-sides-offset, -5px);
  }
  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    left: var(--swiper-navigation-sides-offset, -5px);
  }
}
</style>
