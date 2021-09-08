import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { test, closeWebview } from "@vassily/h5-utils/test-utils";

test(123);
console.log(closeWebview);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
