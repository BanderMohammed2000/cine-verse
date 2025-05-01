<template>
  <header id="header" class="pb-5">
    <div class="overlay"></div>
    <div class="header-background"></div>
    <the-navbar></the-navbar>
    <div class="container-fluid title-header position-relative">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center responsive-text mb-5">
            Your Weekend Buddy For
            <span class="light-pink-color">This Week</span>
          </h1>
        </div>
      </div>
    </div>
    <home-slider></home-slider>
  </header>
</template>

<script>
import HomeSlider from "../home/HomeSlider.vue";
import TheNavbar from "./TheNavbar.vue";
export default {
  components: {
    HomeSlider,
    TheNavbar,
  },
};
</script>

<style scoped>
#header {
  position: relative;
  /* background-color: #0d1836; */
}
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
}

#header .title-header {
  margin-top: 4rem;
}
</style>
