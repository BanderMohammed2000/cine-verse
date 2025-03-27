<template>
  <div class="card-movie" :style="{ backgroundImage: `url(${movie.image})` }">
    <div class="overlay"></div>
  </div>
</template>
<script>
export default {
  props: ["movie"],
};
</script>

<style scoped>
.card-movie {
  /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */
  /* width: 340px; */

  /* height: 100%; */
  height: 480px;
  /* margin: 0 0.5em; */
  margin: 0 0.2em;
  border-radius: 8px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  color: #ffffff;
  /* width: 120%; */
}

.overlay {
  background-color: rgba(90, 104, 144, 0.5);
  /* background-color: rgba(0, 0, 0, 0.5); */
  position: absolute;
  border-radius: 8px;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/*-----------------*/
.card {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15),
    -1px -1px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s linear;
  height: 203px;
  margin: 0 0.5em;
  border: 0;
}
.card img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
  overflow: hidden;
}
.card-title {
  color: #e85f19;
  font-weight: 700;
}
.card-title,
.text-secondary {
  font-size: 15px;
}
.card-text {
  color: #6d6d6d;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.rating {
  color: #f3af41;
}

.gray-color {
  color: #c2c2c2;
}

@media (max-width: 991.98px) {
  .card-text {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
