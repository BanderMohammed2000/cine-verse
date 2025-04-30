import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import LoginView from "./views/LoginView.vue";
import RegisterView from "./views/RegisterView.vue";
import NotFound from "./views/NotFound.vue";

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
  },
  { path: "/:notFound(.*)", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   // نحفظ الخلفية في meta إذا كان الانتقال إلى /login
//   if ((to.path === "/login" || to.path === "/register") && from.name) {
//     to.meta.background = from;
//   }
//   next();
// });

// خارج تعريف router
const historyStack = [];

router.beforeEach((to, from, next) => {
  if (from.name) {
    historyStack.push(from); // نحفظ الصفحة السابقة في السجل
  }

  if ((to.path === "/login" || to.path === "/register") && from.name) {
    to.meta.background = from;
    to.meta.historyStack = [...historyStack]; // نحفظ نسخة من السجل
  }

  next();
});

export default router;
