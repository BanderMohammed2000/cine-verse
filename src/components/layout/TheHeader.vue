<template>
  <header id="header" class="pb-5">
    <div class="overlay"></div>
    <div class="header-background"></div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><div class="d-flex align-items-center">
            <img class="logo" src="/logo/logo.png" alt="logo" />
            <p class="mb-0 ms-1">CineVerse</p>
          </div></a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto me-4 mb-2 mb-lg-0">
            <li class="nav-item ms-4">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item ms-4">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item ms-4">
              <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item ms-4">
              <a class="nav-link" href="#discover">Discover</a>
            </li>
            <li class="nav-item ms-4">
              <a class="nav-link" href="#">Community</a>
            </li>
          </ul>
          <form>
            <!-- <button class="btn btn-login light-pink-background">
              Login or Register
            </button> -->
            <base-button class="light-pink-background"
              >Login or Register</base-button
            >
          </form>
        </div>
      </div>
    </nav>
    <div class="container mt-5 position-relative">
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
    <!-- <home-movies></home-movies> -->
  </header>
</template>

<script>
import HomeSlider from "../home/HomeSlider.vue";
// import HomeMovies from "../home/HomeMovies.vue";
export default {
  components: {
    HomeSlider,
    // HomeMovies,
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

/*navbar*/
.navbar .navbar-brand,
.navbar ul.navbar-nav li a {
  color: #ffffff;
}

.navbar .navbar-brand .logo {
  width: 50px;
}

.navbar-nav .nav-item .nav-link {
  opacity: 0.8;
}

.navbar-nav .nav-item .nav-link.active {
  opacity: 1;
}

.navbar-nav .nav-item .nav-link:hover {
  opacity: 1;
}

/*navbar*/

#header h1 {
  color: #ffffff;
}
</style>
