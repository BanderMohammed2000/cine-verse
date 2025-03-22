<template>
  <the-header></the-header>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: {
    TheHeader,
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
  margin-right: 2.5rem;
  margin-left: 2.5rem;
}

.responsive-text {
  font-size: calc(16px + 1vw);
}

.light-pink-color {
  color: #e2606a;
}

.light-pink-background {
  background-color: #e2606a;
}
</style>
