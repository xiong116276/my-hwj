import Vue from 'vue';
import Router from 'vue-router';
import appMain from '@/components/main/main';
import home from '@/components/home/home';
import classify from '@/components/classify/classify';
import cart from '@/components/cart/cart';
import personal from '@/components/personal/personal';
import detail from '@/components/detail/detail';
// 登录注册
import login from '@/components/login/login';
import loginPhone from '@/components/loginphone/loginphone';
import forgetPassword from '@/components/forgetPassword/forgetPassword';
import loginPhoneNext from '@/components/loginPhoneNext/loginPhoneNext';
import setPassword from '@/components/setPassword/setPassword';
import register from '@/components/register/register';

import vuxTest from '@/components/vuxTest/vuxTest';
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
    },
    {
      path:'/loginPhone',
      name:'loginPhone',
      component:loginPhone
    },
    {
      path:'/forgetPassword',
      name:'forgetPassword',
      component:forgetPassword
    },
    {
      path:'/loginPhoneNext',
      name:'loginPhoneNext',
      component:loginPhoneNext
    },
    {
      path:'/setPassword',
      name:'setPassword',
      component:setPassword
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'/detail/:id',
      name: 'detail',
      component:detail
    },
    {
      path:'/vuxTest',
      name:'vuxTest',
      component:vuxTest
    }
  ]
})
