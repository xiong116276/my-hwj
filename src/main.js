// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'
import router from './router';
import axios from 'axios';
import vuei18n from 'vue-i18n';
import 'lib-flexible/flexible.js';
import '../static/js/validate.js'

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
    item.style.margin =  '0 3px';
  })
};
// 验证手机号符合格式
Vue.prototype.checkPhone = function(num){
  let reg = /^((13|14|15|17|18)[0-9]\d{8})$/;
  return num.length === 11 && reg.test(num)
};
// 验证密码符合格式
Vue.prototype.checkPassword = function(pwd){
  return /^.*[0-9]+.*$/.test(pwd)&&/^.*[a-zA-Z]+.*$/.test(pwd)&&/^.{6,18}$/.test(pwd)
};
// border-1px
Vue.prototype.border1px = function(){
  // border-1px
  Array.prototype.slice.call(document.getElementsByClassName('border-1px')).forEach((item,index) => {
    item.style.borderWidth = '1px'
  });
};
// class增加删除
Vue.prototype.addClass = function(el,clas){
  if(el.className.indexOf(clas) === -1){
    let arr = el.className.trim().split(' ');
    arr.push(clas);
    el.className = arr.join(' ');
  }
};
Vue.prototype.removeClass = function(el,clas){
  if(el.className.indexOf(clas) > -1){
    let str = el.className.trim();
    let reg = new RegExp(clas);
    el.className = str.replace(reg,'').trim();
  }
};
// 获取某个子元素
Vue.prototype.children = function(fel,cel){
  if(fel.childNodes.length > 0){
    let arr = Array.prototype.slice.call(fel.childNodes);
    let children = [];
    for(let i= 0;i < arr.length;i++){
      if(arr[i].nodeType === 1){
        if(arr[i].className.indexOf(cel) > -1){
          children.push(arr[i]);
        }
      }
    }
    return children;
  }
};
/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>',
  mounted:function(){
    // vux 样式修改
    this.dots('vux-icon-dot',8);
    this.dots('swiper-pagination-bullet',8);
    document.getElementsByClassName('weui-toast')[0].style.width = 'auto';
  },
});




