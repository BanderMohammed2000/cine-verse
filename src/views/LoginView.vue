<template>
  <base-overlay @close="closeLogin"></base-overlay>
  <div class="form-model">
    <div>
      <h4 class="mb-4 position-relative">Login</h4>
      <span class="close-icon" @click="closeLogin"
        ><i class="fa-solid fa-xmark fa-lg"></i
      ></span>
    </div>
    <form action="">
      <base-input type="email" placeholder="Enter your email"></base-input>
      <base-input
        type="password"
        placeholder="Enter your password"
      ></base-input>
      <base-button class="light-pink-background">Login</base-button>
      <router-link to="/register">
        <base-button mode="outline" class="ms-4 light-pink-color"
          >Register</base-button
        >
      </router-link>
    </form>
  </div>
</template>

<script>
import BaseInput from "../components/ui/BaseInput.vue";
export default {
  components: { BaseInput },
  methods: {
    // closeLogin() {
    //   const background = this.$route.meta.background;
    //   this.$router.push(background?.fullPath || "/");
    //   document.body.style.overflow = "";
    // },

    closeLogin() {
      const backgroundPath = this.$route.meta.background?.fullPath || "/";
      const route = backgroundPath === "/register" ? "/" : backgroundPath;
      this.$router.push(route);
      document.body.style.overflow = "";
    },
  },
};
</script>

<style scoped>
.form-model {
  width: 400px;
  margin-top: 2rem;
  padding: 1.5rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 4px;
  background-color: #ffffff;
  z-index: 101;
}
.form-model > div {
  display: flex;
  justify-content: space-between;
}

.form-model > div h4::after {
  content: "";
  position: absolute;
  width: 66px;
  height: 3px;
  border-radius: 5px;
  background-color: #e2606a;
  bottom: -11px;
  left: 0;
}

.form-model > div .close-icon {
  cursor: pointer;
}

button.outline {
  font-weight: 500;
}

@media (max-width: 450px) {
  .form-model {
    width: 300px;
    padding: 1rem;
  }
}
</style>
