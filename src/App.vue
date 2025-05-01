<!-- <template>
  <the-header></the-header>
  <home-view></home-view>
  <the-footer></the-footer>
</template> -->

<template>
  <div v-if="$route.name === 'NotFound'">
    <!-- ✅ صفحة 404 بدون هيدر وفوتر -->
    <router-view />
  </div>

  <div v-else>
    <the-header />

    <!-- ✅ الخلفية: إما الصفحة السابقة أو الصفحة الرئيسية -->
    <router-view v-slot="{ Component, route }">
      <component
        :is="getBackgroundComponent(route)"
        v-if="route.path === '/login' || route.path === '/register'"
      />
      <!-- ✅ إذا لم يكن /login، نعرض الصفحة بشكل عادي -->
      <component :is="Component" v-else />
    </router-view>

    <!-- ✅ نافذة تسجيل الدخول تظهر كـ modal -->
    <!-- <login-view v-if="$route.path === '/login'" />
  <register-view v-else-if="$route.path === '/register'"></register-view> -->

    <!-- ✅ modal واحد فقط يعرض المطلوب -->
    <!-- <auth-modal
    v-if="$route.path === '/login' || $route.path === '/register'"
    :key="$route.fullPath"
  /> -->

    <auth-modal />

    <the-footer />
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import HomeView from "./views/HomeView.vue";
import AuthModal from "./components/auth/AuthModal.vue";
// import LoginView from "./views/LoginView.vue";
// import RegisterView from "./views/RegisterView.vue";
export default {
  components: {
    TheHeader,
    HomeView,
    TheFooter,
    AuthModal,
    // LoginView,
    // RegisterView,
  },
  methods: {
    /**
     * هذه الدالة تعيد الخلفية المناسبة:
     * - إذا فيه meta.background (يعني جاء من صفحة ثانية) → نعرضها.
     * - إذا لا → نعرض الصفحة الرئيسية.
     */
    // getBackgroundComponent(route) {
    //   return (
    //     route.meta.background?.matched?.[0]?.components?.default || HomeView
    //   );
    // },

    getBackgroundComponent(route) {
      const background = route.meta.background;
      const component = background?.matched?.[0]?.components?.default;

      // تحقق من اسم المكون (عن طريق اسم route) وتأكد أنه ليس Login أو Register
      const routeName = background?.name;

      console.log("routeName: ", routeName);

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
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap");

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

.responsive-text {
  font-size: calc(16px + 1vw);
  /* font-size: clamp(16px, 1vw + 1rem, 30px); */
}

.light-pink-color {
  color: var(--main-color) !important;
}

.light-pink-background {
  background-color: var(--main-color);
}
</style>
