import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { test } from "@vassily/h5-utils";
import { log } from "@vassily/h5-utils/log";

test();
log("this is log from H5-utils");

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
