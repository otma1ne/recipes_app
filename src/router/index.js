import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailsView from "../views/DetailsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/details/:id",
    name: "details",
    component: DetailsView,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
