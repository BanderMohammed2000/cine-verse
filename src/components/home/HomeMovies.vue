<template>
  <section id="discover">
    <div class="container-fluid py-4">
      <div class="row mb-5">
        <div class="col-md-4">
          <h4 class="movie-title">
            Discover <span class="light-pink-color">Movies</span>
          </h4>
        </div>
        <div class="col-md-4">
          <div class="btn-container">
            <base-button class="outline active">Random</base-button>
            <base-button class="outline">Popular</base-button>
            <base-button class="outline">Recent</base-button>
          </div>
        </div>
        <div class="col-md-4">
          <form @submit.prevent class="d-flex justify-content-end">
            <div>
              <span><i class="fa-solid fa-magnifying-glass"></i></span>
              <input
                type="text"
                class="search"
                placeholder="Search something here ..."
              />
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div
          class="col-md-4 col-lg-3"
          v-for="(movie, index) in movies"
          :key="index"
        >
          <movie-card :movie="movie"></movie-card>
        </div>
        <div class="col-12 text-center mt-3">
          <form action="" @submit.prevent>
            <base-button class="light-pink-background"
              >Discover more</base-button
            >
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";
import MovieCard from "./MovieCard.vue";
export default {
  components: {
    MovieCard,
    BaseButton,
  },
  data() {
    return {
      movies: [
        {
          name: "Bad Boys",
          img: "/movie/bad-boys.jpg",
          rate: "8.8",
          category: "Comedy",
          releaseYear: "2024",
        },
        {
          name: "Joker",
          img: "/movie/joker.jpg",
          rate: "7.4",
          category: "Crime",
          releaseYear: "2024",
        },
        {
          name: "The Revenant",
          img: "/movie/the-revenant.jpg",
          rate: "9.0",
          category: "Drama",
          releaseYear: "2015",
        },
        {
          name: "Fight Club",
          img: "/movie/fight-club.jpg",
          rate: "8.8",
          category: "Drama",
          releaseYear: "1990",
        },
        {
          name: "Den of thieves",
          img: "/movie/den.jpg",
          rate: "7.0",
          category: "Action",
          releaseYear: "2016",
        },
        {
          name: "Den of thieves",
          img: "/movie/den.jpg",
          rate: "7.0",
          category: "Action",
          releaseYear: "2016",
        },
      ],
    };
  },
};
</script>

<style scoped>
section#discover {
  background-color: #0a0f23;
}
.movie-title {
  color: #ffffff;
  /* font-size: calc(10px + 1vw); */
}
.btn-container {
  display: flex;
  justify-content: space-around;
  margin: 0 10px;
}
.btn-container .outline.active {
  opacity: 1;
  color: #ffffff;
}
.btn-container .outline:not(.active) {
  opacity: 0.7;
}
form {
  position: relative;
  transform: translateY(-7px);
}
form > div {
  display: flex;
  width: 60%;
  position: relative;
}
form > div > span {
  position: absolute;
  color: #ffffff;
  opacity: 0.7;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
}
input.search {
  font-size: 15px;
  background-color: transparent;
  color: #ffffff;
  outline: none;
  border: 0;
  border-left: 1px solid #444444;
  /* border-radius: 3px; */
  width: 100%;
  /* text-align: end; */
  padding: 7px 0;
  padding-left: 45px;
}

input.search::placeholder {
  color: #ffffff;
  opacity: 0.7;
  /* text-align: end; */
}
</style>
