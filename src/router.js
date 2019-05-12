/*
 * @Author: Mr Bean
 * @Date: 2019-05-11 16:43:16
 * @LastEditors: Mr Bean
 * @LastEditTime: 2019-05-12 10:28:11
 * @Description: file content
 */
import Vue from "vue";
import Router from "vue-router";
import iView from "iview";
import "iview/dist/styles/iview.css";
import axios from "axios";
import VueAxios from "vue-axios";
import Home from "./views/Home.vue";

Vue.use(Router);
Vue.use(iView);
Vue.use(VueAxios, axios);

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
