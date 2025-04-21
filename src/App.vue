<template>
  <the-header></the-header>
  <home-view></home-view>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import HomeView from "./views/HomeView.vue";
export default {
  components: {
    TheHeader,
    HomeView,
    TheFooter,
  },
};
</script>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
@import "@fortawesome/fontawesome-free/css/all.css";
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap");

body {
  font-family: "Poppins", sans-serif;
}

.container-fluid {
  /* margin-right: 2.5rem;
  margin-left: 2.5rem; */
  padding-right: 3.3rem;
  padding-left: 3.3rem;
}

.responsive-text {
  font-size: calc(16px + 1vw);
  /* font-size: clamp(16px, 1vw + 1rem, 30px); */
}

.light-pink-color {
  color: #e2606a;
}

.light-pink-background {
  background-color: #e2606a;
}
</style>
