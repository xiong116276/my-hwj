// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'
import router from './router';
import axios from 'axios';
import vuei18n from 'vue-i18n';
import 'lib-flexible/flexible.js';

import  { LoadingPlugin } from 'vux';
import  { ToastPlugin } from 'vux';
Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
Vue.use(vuei18n);
Vue.config.productionTip = false;
// 改写VUE的原型属性
Vue.prototype.$ajax= axios;

// 轮播图的小圆点css中rem下小圆点会变形。
Vue.prototype.dots = function (el,size){
  Array.prototype.slice.call(document.getElementsByClassName(el)).forEach((item,index) => {
    item.style.width =  size+'px';
    item.style.height =  size+'px';
  })
};

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>',
  mounted:function(){
    this.dots('vux-icon-dot',8);
  },
});




