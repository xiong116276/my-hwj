<template>
  <div class="login">
    <div class="login-content">
      <div class="login-input">
        <input type="text" placeholder="请输入账号或手机号" autocomplete="off" v-model="loginName" autofocus>
      </div>
      <div class="login-input">
        <input type="password" placeholder="请输入密码" autocomplete="off" v-model="loginPwd">
      </div>
      <div class="btn-login" :class="{active:isLogin}" @click="btnClick($event)">登 录</div>
    </div>

    <div class="login-bottom">
      <p class="login-widget clearFix">
        <router-link to="/loginPhone">手机登录</router-link>
        <router-link to="/forgetPassword">忘记密码?</router-link></p>
      <p class="btn-register">没有账号?<router-link to="/register"> 立即注册</router-link></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data:function () {
      return{
        isLogin:false,
        loginName:'',
        loginPwd:''
      }
    },
    mounted:function () {

    },
    watch:{
      loginName:function (val) {
        this.loginName = val;
      },
      loginPwd:function (val) {
        this.isLogin = (this.loginName!==''&&val!=='')?true:false;
      }
    },
    methods:{
      btnClick:function (event) {
        event.preventDefault();
        let e = event.target;
        if(e.className.indexOf('active')>-1){
          this.$router.push('/personal');
          sessionStorage.setItem('uname',this.loginName)
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
