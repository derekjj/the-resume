import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue } from "bootstrap-vue";
import store from "./store";
import router from "./router";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  beforeCreate() {
    this.$store.commit.initialiseStore;
  },
  render: (h) => h(App),
}).$mount("#app");
