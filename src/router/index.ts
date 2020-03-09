import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import Inspiration from "@/views/Inspiration.vue";
import Tasks from "@/views/Tasks.vue";
import Renovation from "@/views/Renovation.vue";
import Chores from "@/views/Chores.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/inspiration",
    name: "Inspiration",
    component: Inspiration
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: Tasks
  },
  {
    path: "/renovation",
    name: "Renovation",
    component: Renovation
  },
  {
    path: "/chores",
    name: "chores",
    component: Chores
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
