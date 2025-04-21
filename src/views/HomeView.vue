<template>
  <home-about></home-about>
  <home-movies></home-movies>
  <home-news></home-news>
</template>

<script>
import HomeAbout from "../components/home/HomeAbout.vue";
import HomeMovies from "../components/home/HomeMovies.vue";
import HomeNews from "../components/home/HomeNews.vue";
export default {
  components: {
    HomeAbout,
    HomeMovies,
    HomeNews,
  },
};
</script>
