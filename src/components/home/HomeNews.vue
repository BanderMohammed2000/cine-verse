<template>
  <section id="news">
    <div class="container-fluid py-5">
      <div class="row">
        <div class="col-md-4 order-1 order-md-0 mt-5 mt-md-0">
          <div class="col">
            <h5>Hall Of <span class="light-pink-color">Fame</span></h5>
          </div>
          <div class="hall-of-fame">
            <list-people :people="reviewers">Top Reviewers</list-people>
            <list-people :people="fandom">Top Fandom</list-people>
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
                    <!-- <div class="col-md-4">
                      <news-card verticalCard></news-card>
                    </div> -->
                    <!-- <div class="col-md-4">
                      <news-card verticalCard></news-card>
                    </div>
                    <div class="col-md-4">
                      <news-card verticalCard></news-card>
                    </div> -->
                  </div>
                </div>
                <!-- <div class="carousel-item">
                  <img src="/movie/joker.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img
                    src="/movie/the-revenant.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div> -->
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
            img: "/movie/bad-boys.jpg",
            author: "Yoga",
            ago: "2 Hours Ago",
          },
          {
            title:
              '"Joker 2024: Chaos Returns in a Darker and More Thrilling Sequel!"',
            img: "/movie/joker-news.webp",
            author: "Yoga",
            ago: "4 Hours Ago",
          },
          {
            title: '"Gladiator 2 (2024): The Epic Sequel Begins!"',
            img: "/movie/gladiator.jpg",
            author: "Bander",
            ago: "5 Hours Ago",
          },
          {
            title: '"Kraven the Hunter (2024): A Fierce New Antihero Rises!"',
            img: "/movie/kraven.jpg",
            author: "Ahmed",
            ago: "6 Hours Ago",
          },
        ],
        [
          {
            title: "The Beekeeper (2024): A High-Stakes Action Thriller",
            text: `Jason Statham returns to the big screen in The Beekeeper (2024), an intense action thriller that blends high-stakes espionage with brutal revenge. Directed by David Ayer, the film follows a former operative known as a "Beekeeper," a member of a covert organization, who embarks on a relentless mission of vengeance after a personal tragedy.`,
            img: "/movie/beekeeper.jpg",
            author: "Mohammed",
            ago: "8 Hours Ago",
          },
          {
            title: '"Sunrise (2024): A Thrilling New Mystery Unfolds!"',
            img: "/movie/sunrise.jpg",
            author: "Fahed",
            ago: "9 Hours Ago",
          },
          {
            title:
              '"Deadpool & Wolverine (2024): The Merc with a Mouth Returns!"',
            img: "/movie/deadpool.webp",
            author: "Ali",
            ago: "10 Hours Ago",
          },
          {
            title: '"Ride (2024): A High-Speed Thriller Unleashed!"',
            img: "/movie/ride.jpg",
            author: "Saleh",
            ago: "11 Hours Ago",
          },
        ],
      ],
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
</style>
