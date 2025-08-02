<template>
  <header id="header" class="pb-5">
    <div class="overlay"></div>
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
          <div class="wrapper">
            <h1 class="split-text text-center mb-5" ref="splitText"></h1>
          </div>
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
import { splitNode } from "../../utils/splitnode";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

import HomeSlider from "../home/HomeSlider.vue";
import TheNavbar from "./TheNavbar.vue";
export default {
  components: {
    HomeSlider,
    TheNavbar,
  },
  data() {
    const base = import.meta.env.BASE_URL;
    return {
      rawMessage: `Your Weekend Buddy For <span class="light-pink-color">This Week</span>`,
      images: [
        `${base}images/movies/ballerina-bk.webp`,
        `${base}images/movies/sinners-bk.webp`,
        `${base}images/movies/thunderbolts-bk.jpg`,
        `${base}images/movies/28-years-later-bk.avif`,
        `${base}images/movies/the-final-reckoning-bk.webp`,
      ],
      slides: [
        {
          image: "ballerina.jpg",
          name: "Ballerina",
          category: "action",
          description: "Assassin seeks revenge through ballet",
        },
        {
          image: "sinners.jpg",
          name: "sinners",
          category: "horror",
          description: "Secrets unravel in twisted town",
        },
        {
          image: "thunderbolts.jpg",
          name: "Thunderbolts",
          category: "action",
          description: "Misfits unite for dangerous mission",
        },
        {
          image: "28-years-later.jpg",
          name: "28 Years Later",
          category: "horror",
          description: "Virus resurfaces after long silence",
        },

        {
          image: "the-final-reckoning.webp",
          name: "Final Reckoning",
          category: "action",
          description: "Survivors confront ultimate buried truth",
        },
      ],
      currentIndex: 2,
    };
  },
  mounted() {
    document.fonts.ready.then(() => {
      this.runSplitTextAnimation();
    });
  },
  methods: {
    runSplitTextAnimation() {
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
          duration: 0.5,
          stagger: 0.04,
          ease: "power2.out",
        }
      );
    },

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
  position: relative;
  overflow: hidden;
  width: 100%;
}

.background-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -2;
}

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

/* ---------------------------------------------- */

.overlay {
  background-color: rgba(14, 23, 54, 0.5);
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
  .app__bg__image {
    filter: blur(0);
  }
}
</style>
