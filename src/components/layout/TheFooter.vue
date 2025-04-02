<template>
  <footer>
    <div class="container-fluid pt-3">
      <div class="row">
        <div class="col text-center">
          <p class="pt-5 pb-4">
            All rights reserved <span id="date">{{ getCurrentDate }}</span>
            ©
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    getCurrentDate() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
footer {
  background-color: #0f152b;
}
.col {
  color: #ffffff;
  position: relative;
}
.col::before {
  content: "";
  width: 70%;
  height: 1px;
  background-color: #353535;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
}
</style>
