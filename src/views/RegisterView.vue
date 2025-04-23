<template>
  <base-overlay @close="closeRegister"></base-overlay>
  <div class="form-model">
    <div>
      <h4 class="mb-4 position-relative">Register</h4>
      <span class="close-icon" @click="closeRegister"
        ><i class="fa-solid fa-xmark fa-lg"></i
      ></span>
    </div>
    <form action="">
      <base-input type="text" placeholder="Enter your name"></base-input>
      <base-input type="email" placeholder="Enter your email"></base-input>
      <!-- <base-input
        v-for="passInput in 2"
        :key="passInput"
        type="password"
        :placeholder="`${
          passInput - 1 ? 'Confirm password' : 'Create password'
        }`"
      ></base-input> -->
      <base-input
        v-for="(label, index) in ['Create password', 'Confirm password']"
        :key="index"
        type="password"
        :placeholder="label"
      ></base-input>
      <base-button type="submit" class="light-pink-background"
        >Register</base-button
      >
      <router-link to="/login">
        <base-button mode="outline" class="ms-4 light-pink-color"
          >Login</base-button
        >
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    closeRegister() {
      const backgroundPath = this.$route.meta.background?.fullPath || "/";
      const route = backgroundPath === "/login" ? "/" : backgroundPath;
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
  width: 100px;
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
