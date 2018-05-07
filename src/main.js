// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'
import router from './router';
import axios from 'axios';

import 'lib-flexible/flexible.js';

Vue.config.productionTip = false;
// 改写VUE的原型属性
Vue.prototype.$ajax= axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
