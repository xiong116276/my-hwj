import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home/home';
import classify from '@/components/classify/classify';
import cart from '@/components/cart/cart';
import personal from '@/components/personal/personal';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify,
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    }
  ]
})
