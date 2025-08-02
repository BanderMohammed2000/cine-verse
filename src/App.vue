<template>
  <div v-if="$route.name === 'NotFound'">
    <!-- صفحة 404 بدون هيدر وفوتر -->
    <router-view />
  </div>

  <div v-else>
    <the-header />

    <!-- الخلفية: إما الصفحة السابقة أو الصفحة الرئيسية -->
    <router-view v-slot="{ Component, route }">
      <component
        :is="getBackgroundComponent(route)"
        v-if="route.path === '/login' || route.path === '/register'"
      />
      <!-- إذا لم يكن /login، نعرض الصفحة بشكل عادي -->
      <component :is="Component" v-else />
    </router-view>

    <auth-modal />

    <the-footer />
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import HomeView from "./views/HomeView.vue";
import AuthModal from "./components/auth/AuthModal.vue";
export default {
  components: {
    TheHeader,
    HomeView,
    TheFooter,
    AuthModal,
  },
  methods: {
    getBackgroundComponent(route) {
      const background = route.meta.background;
      const component = background?.matched?.[0]?.components?.default;

      // تحقق من اسم المكون (عن طريق اسم route) وتأكد أنه ليس Login أو Register
      const routeName = background?.name;
      if (routeName === "Login" || routeName === "Register") {
        return HomeView; // استخدم الصفحة الرئيسية كخلفية بديلة
      }

      return component || HomeView;
    },
  },
};
</script>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
@import "@fortawesome/fontawesome-free/css/all.css";

:root {
  --main-color: #e2606a;
  --secondary-color: #ffffff;
  --dark-teal: #19947b;
}

body {
  font-family: "Poppins", sans-serif;
}

.container-fluid {
  padding-right: 3.3rem;
  padding-left: 3.3rem;
}

.light-pink-color {
  color: var(--main-color) !important;
}

.light-pink-background {
  background-color: var(--main-color);
}

@media (max-width: 575.98px) {
  .container-fluid {
    padding-right: 2rem;
    padding-left: 2rem;
  }
}
</style>
