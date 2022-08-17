import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/who",
    name: "who",
    component: () => import("@/views/WhoPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
