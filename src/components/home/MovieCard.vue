<template>
  <div class="card mb-3 mx-auto mx-md-0">
    <div>
      <img
        :src="movie.poster_path"
        class="card-img-top"
        alt="movie poster"
        loading="lazy"
      />
      <span :class="['rate', setRateBackground]">{{ movie.vote_average }}</span>
    </div>
    <div class="card-body px-0">
      <h5 class="card-title mb-0">
        {{ movie.release_date }}
      </h5>
      <p class="card-text">
        {{ movie.title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie"],
  computed: {
    setRateBackground() {
      if (this.movie.vote_average >= 9) {
        return "dark-green-background";
      } else if (this.movie.vote_average >= 8) {
        return "light-green-background";
      } else if (this.movie.vote_average < 3) {
        return "dark-red-background";
      } else if (this.movie.vote_average < 5) {
        return "light-red-background";
      } else {
        return "yellow-background";
      }
    },
  },
};
</script>

<style scoped>
.card {
  border: 0;
  background-color: transparent;
}

.card > div {
  position: relative;
}

.card div img {
  height: 370px;
  width: 100%;
  border-radius: 6px;
}

.card > div span.rate {
  position: absolute;
  color: #080808;
  padding: 1px 14px;
  z-index: 1;
  border-radius: 50px;
  bottom: -6px;
  right: -16px;
}

.dark-red-background {
  background-color: #d11a1a;
}

.light-red-background {
  background-color: #fa2929;
}

.yellow-background {
  background-color: #fac929;
}

.light-green-background {
  background-color: #3ab93c;
}

.dark-green-background {
  background-color: #39913a;
}

.card .card-title {
  font-size: 15px;
  color: var(--dark-teal);
}

.card .card-text {
  color: var(--secondary-color);
}

@media (max-width: 767.98px) {
  .card {
    width: 70%;
  }
}

@media (max-width: 575.98px) {
  .card {
    width: 85%;
  }
}
</style>
