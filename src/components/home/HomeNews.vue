<template>
  <section id="news">
    <div class="container-fluid py-5">
      <div class="row">
        <div class="col-md-4 order-1 order-md-0 mt-5 mt-md-0">
          <div class="col">
            <div class="wrapper">
              <h5 class="split-text" ref="splitText"></h5>
            </div>
          </div>
          <div class="hall-of-fame" id="reviewers">
            <list-people :people="reviewers"
              ><h6 class="mt-3">Top Reviewers</h6></list-people
            >
            <list-people :people="fandom">
              <h6 class="mt-5">Top Fandom</h6>
            </list-people>
          </div>
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
                <div
                  :class="['carousel-item', { active: index === 0 }]"
                  v-for="(newsGroup, index) in news"
                  :key="index"
                >
                  <div class="row">
                    <div
                      :class="i === 0 ? 'col-md-12' : 'col-md-4'"
                      v-for="(article, i) in newsGroup"
                      :key="i"
                    >
                      <news-card v-if="i === 0" :article="article"></news-card>
                      <news-card
                        v-else
                        verticalCard
                        :article="article"
                      ></news-card>
                    </div>
                  </div>
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
import { isInViewport } from "../../utils/viewport";
import { splitNode } from "../../utils/splitnode";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

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
      rawMessage: `Hall Of <span class="light-pink-color">Fame</span>`,
      carousel: null,
      news: [
        [
          {
            title: '"Bad Boys: Ride or Die" – Latest Updates',
            text: `The fourth installment of the Bad Boys franchise, Bad Boys: Ride or
            Die, was released in June 2024 and became a massive box office
            success, grossing over $404 million worldwide. Will Smith and Martin
            Lawrence reprise their roles as detectives Mike Lowrey and Marcus
            Burnett, facing a new high-stakes mission in Miami. The film
            received positive audience feedback, boasting a 97% rating on Rotten
            Tomatoes.`,
            img: "bad-boys.jpg",
            author: "Yoga",
            ago: "2 Hours Ago",
          },
          {
            title:
              '"Joker 2024: Chaos Returns in a Darker and More Thrilling Sequel!"',
            img: "joker-news.webp",
            author: "Yoga",
            ago: "4 Hours Ago",
          },
          {
            title: '"Gladiator 2 (2024): The Epic Sequel Begins!"',
            img: "gladiator.jpg",
            author: "Bander",
            ago: "5 Hours Ago",
          },
          {
            title: '"Kraven the Hunter (2024): A Fierce New Antihero Rises!"',
            img: "kraven.jpg",
            author: "Ahmed",
            ago: "6 Hours Ago",
          },
        ],
        [
          {
            title: "The Beekeeper (2024): A High-Stakes Action Thriller",
            text: `Jason Statham returns to the big screen in The Beekeeper (2024), an intense action thriller that blends high-stakes espionage with brutal revenge. Directed by David Ayer, the film follows a former operative known as a "Beekeeper," a member of a covert organization, who embarks on a relentless mission of vengeance after a personal tragedy.`,
            img: "beekeeper.jpg",
            author: "Mohammed",
            ago: "8 Hours Ago",
          },
          {
            title: '"Sunrise (2024): A Thrilling New Mystery Unfolds!"',
            img: "sunrise.jpg",
            author: "Fahed",
            ago: "9 Hours Ago",
          },
          {
            title:
              '"Deadpool & Wolverine (2024): The Merc with a Mouth Returns!"',
            img: "deadpool.webp",
            author: "Ali",
            ago: "10 Hours Ago",
          },
          {
            title: '"Ride (2024): A High-Speed Thriller Unleashed!"',
            img: "ride.jpg",
            author: "Saleh",
            ago: "11 Hours Ago",
          },
        ],
      ],
      reviewers: [
        { name: "Bader Mohammed", img: "1.jpg", points: "2544" },
        { name: "Nader Fahed", img: "6.jpg", points: "2450" },
        { name: "Ali Ahmed", img: "3.png", points: "2300" },
        { name: "Bander Mohammed", img: "4.png", points: "2278" },
        { name: "Faisal Salem", img: "5.png", points: "2228" },
      ],
      fandom: [
        { name: "Bader Mohammed", img: "1.jpg", points: "2544" },
        { name: "Nader Fahed", img: "6.jpg", points: "2450" },
        { name: "Ali Ahmed", img: "3.png", points: "2300" },
        { name: "Bander Mohammed", img: "4.png", points: "2278" },
        { name: "Faisal Salem", img: "5.png", points: "2228" },
      ],
    };
  },
  mounted() {
    if (this.$refs.carouselExample) {
      this.carousel = new Carousel(this.$refs.carouselExample);
    }

    document.fonts.ready.then(() => {
      window.addEventListener("scroll", this.checkVisibility);
      // تأكد أيضاً عند التحميل الأول
      this.checkVisibility();
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.checkVisibility);
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
  padding: 30px 20px;
  background-color: #121832;
  border-radius: 5px;
}

.carousel-item {
  padding: 0 10px;
}

h5 {
  color: var(--secondary-color);
}

.title-section {
  color: var(--secondary-color);
}

.prev,
.next {
  color: var(--secondary-color);
  cursor: pointer;
}

h6 {
  position: relative;
  color: #e8e8e8;
  font-size: 16px;
  font-weight: normal;
  padding-bottom: 19px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

h6::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 120px;
  height: 1px;
  background-color: var(--main-color);
}

/*لوضع القسمين نفس الحجم*/
/* ملاحظة: لو كان في margin عناصر الابناء راح يتم احتسابه ضمن الطول !!!*/
.container-fluid > .row {
  display: flex;
  align-items: stretch;
}
.container-fluid > .row > .col-md-4,
.container-fluid > .row > .col-md-8 {
  display: flex;
  flex-direction: column;
}

.hall-of-fame,
.news-section {
  flex: 1;
}

/*النهاية*/

@media (max-width: 991.98px) {
  .news-section {
    padding: 30px 5px;
  }
}
</style>
