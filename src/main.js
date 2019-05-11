import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Common from "./common";

Vue.config.productionTip = false;
Vue.prototype.Common = Common;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
