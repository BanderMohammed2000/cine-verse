<template>
  <nav class="navbar navbar-expand-lg pt-3">
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
        @click="toggleMenu"
      >
        <span v-if="!isMenuOpen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 18 12"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0.75C0 0.335786 0.335786 0 0.75 0H17.25C17.6642 0 18 0.335786 18 0.75C18 1.16421 17.6642 1.5 17.25 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75ZM0 6C0 5.58579 0.335786 5.25 0.75 5.25H17.25C17.6642 5.25 18 5.58579 18 6C18 6.41421 17.6642 6.75 17.25 6.75H0.75C0.335786 6.75 0 6.41421 0 6ZM8.25 11.25C8.25 10.8358 8.58579 10.5 9 10.5H17.25C17.6642 10.5 18 10.8358 18 11.25C18 11.6642 17.6642 12 17.25 12H9C8.58579 12 8.25 11.6642 8.25 11.25Z"
              fill="white"
            />
          </svg>
        </span>

        <span class="x-icon" v-else>
          <span></span>
          <span></span>
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          class="navbar-nav ms-sm-auto me-4 mb-2 mb-lg-0 align-items-sm-center"
        >
          <li class="nav-item ms-lg-4">
            <router-link
              to="/home?category=popular&page=1"
              class="nav-link active"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item ms-lg-4">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item ms-lg-4">
            <a class="nav-link" href="#news">News</a>
          </li>
          <li class="nav-item ms-lg-4">
            <a class="nav-link" href="#discover">Discover</a>
          </li>
          <li class="nav-item ms-lg-4">
            <a class="nav-link" href="#reviewers">Reviewers</a>
          </li>
        </ul>
        <div class="login-register-btn d-flex justify-content-sm-center">
          <router-link to="/login">
            <base-button class="light-pink-background"
              >Login or Register</base-button
            >
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
nav.navbar::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  bottom: -10px;
  width: calc(100% - 106px);
  height: 1px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--secondary-color);
  opacity: 0.1;
}

.navbar-nav li:first-child {
  position: relative;
}

.navbar-nav li:first-child::after {
  content: "";
  position: absolute;
  bottom: -28px;
  left: 7px;
  height: 4px;
  width: 49px;
  border-radius: 5px;
  background-color: var(--main-color);
}

.navbar .navbar-brand,
.navbar ul.navbar-nav li a {
  color: var(--secondary-color);
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

button.navbar-toggler {
  position: relative;
  color: var(--secondary-color);
  background-color: #314b8c61;
  height: 41px;
  width: 45px;
  border: 2px solid #ffffff75;
}

button.navbar-toggler:focus {
  box-shadow: none;
}

.x-icon {
  position: absolute;
  color: var(--secondary-color);
  left: 11px;
}
.x-icon span {
  position: absolute;
  width: 20px;
  height: 2px;
  border-radius: 5px;
  background-color: var(--secondary-color);
}

.x-icon span:first-child {
  transform: rotate(-50deg);
}

.x-icon span:last-child {
  transform: rotate(50deg);
}

@media (max-width: 991.98px) {
  .navbar-nav li:first-child::after {
    display: none;
  }
}

@media (max-width: 575.98px) {
  .navbar-nav,
  .login-register-btn {
    margin-left: 4px;
  }
}
</style>
