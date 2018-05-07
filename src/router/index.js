import Vue from 'vue';
import Router from 'vue-router';
import appMain from '@/components/main/main';
import home from '@/components/home/home';
import classify from '@/components/classify/classify';
import cart from '@/components/cart/cart';
import personal from '@/components/personal/personal';
import login from '@/components/login/login';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: appMain,
      children:[
        {
          path: '',
          redirect: 'home'
        },
        {
          path: 'home',
          name: 'home',
          component: home
        },
        {
          path: 'classify',
          name: 'classify',
          component: classify,
        },
        {
          path: 'cart',
          name: 'cart',
          component: cart
        },
        {
          path: 'personal',
          name: 'personal',
          component: personal
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:login
    }
  ]
})
