<template>
  <component :is="activeView" :key="$route.fullPath" />
</template>

<script>
import LoginView from "../../views/LoginView.vue";
import RegisterView from "../../views/RegisterView.vue";

export default {
  computed: {
    activeView() {
      if (this.$route.path === "/login") {
        return LoginView;
      }
      if (this.$route.path === "/register") {
        return RegisterView;
      }
      return null;
    },
  },
};
</script>
