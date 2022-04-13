import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/login/login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../components/register/register.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../components/home/home.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../components/profile/profile.vue"),
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})


export default router;
