import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Login_Signup/LoginCompo.vue"
      ),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Login_Signup/SignupCompo.vue"
      ),
  },
  {
    path: "/location",
    name: "location",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/SchoolLocation.vue"
      ),
  },
  {
    path: "/niyamatpur",
    name: "niyamatpur",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Extra-links/NiyamatpurSchoolImages.vue"
      ),
  },
  {
    path: "/upcoming",
    name: "upcoming",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Extra-links/ComingSoonCompo.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
