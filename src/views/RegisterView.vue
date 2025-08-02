<template>
  <base-overlay @close="closeRegister"></base-overlay>
  <div class="form-model">
    <div>
      <h4 class="mb-4 position-relative">Register</h4>
      <span class="close-icon" @click="closeRegister"
        ><i class="fa-solid fa-xmark fa-lg"></i
      ></span>
    </div>
    <form @submit.prevent="submitForm">
      <base-input
        type="text"
        placeholder="Enter your name"
        v-model.trim="name"
      ></base-input>
      <base-input
        type="email"
        placeholder="Enter your email"
        v-model.trim="email"
      ></base-input>
      <base-input
        type="password"
        placeholder="Create password"
        v-model.trim="password"
      />
      <base-input
        type="password"
        placeholder="Confirm password"
        v-model.trim="confirmPassword"
      />
      <p v-if="!formIsValid" class="error-message">
        {{ this.errorMessage }}
      </p>
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
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      formIsValid: true,
      errorMessage: "",
    };
  },
  methods: {
    submitForm() {
      this.validateFields();
      if (this.formIsValid) {
        alert(
          "This form is just for testing the register UI — no real login is implemented."
        );
      }
    },
    validateFields() {
      if (!this.name.length) {
        this.errorMessage = "Please enter your name.";
        this.formIsValid = false;
        return;
      } else if (this.email === "" || !this.email.includes("@")) {
        this.errorMessage = "Please enter a valid email.";
        this.formIsValid = false;
        return;
      } else if (this.password.length < 6) {
        this.errorMessage = "password (must be at least 6 characters long).";
        this.formIsValid = false;
        return;
      } else if (this.password !== this.confirmPassword) {
        this.errorMessage =
          "Passwords do not match. Please make sure both fields are identical.";
        this.formIsValid = false;
        return;
      }
      this.errorMessage = "";
      this.formIsValid = true;
    },
    closeRegister() {
      const backgroundPath = this.$route.meta.background?.fullPath || "/";
      const history = this.$route.meta.historyStack || [];

      let route = backgroundPath;

      if (backgroundPath === "/login") {
        const previous = history
          .reverse()
          .find((r) => r.fullPath !== "/login" && r.fullPath !== "/register");
        route = previous?.fullPath || "/";
      }

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
  background-color: var(--secondary-color);
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
  background-color: var(--main-color);
  bottom: -11px;
  left: 0;
}

.form-model > div .close-icon {
  cursor: pointer;
}

button.outline {
  font-weight: 500;
}

.error-message {
  font-size: 15px;
  color: #dc3545;
}

@media (max-width: 450px) {
  .form-model {
    width: 300px;
    padding: 1rem;
  }
}
</style>
