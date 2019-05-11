import Vue from "vue";
import Router from "vue-router";
import iView from "iview";
import "iview/dist/styles/iview.css";
import Home from "./views/Home.vue";

Vue.use(Router);
Vue.use(iView);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/baseInfo",
      name: "baseInfo",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/BaseInfo.vue")
    }
  ]
});
