<template>
  <div class="login login-phone">
    <div class="login-content">
      <div class="login-input">
        <input name="phone" type="number" placeholder="手机号" autocomplete="off" v-model="loginPhone" autofocus>
      </div>
      <div class="login-input">
        <input type="number" placeholder="验证码" autocomplete="off" v-model="loginCode">

        <a class="get-code" href="javascript: " @click="getCode()" v-html="codeText">获取验证码</a>
      </div>

      <div class="btn-login" :class="{active:isLogin}" @click="btnClick($event)">登 录</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "loginphone",
    data() {
      return {
        loginPhone:'',
        loginCode:'',
        isLogin:false,
        time:120,
        codeText:'获取验证码'
      }
    },
    watch:{
      loginPhone:function (val) {
        this.loginPhone = val;
      },
      loginCode:function (val) {
        this.isLogin = (this.loginPhone!==''&&val!=='')?true:false;
      }
    },
    methods:{
      btnClick:function (event) {
        event.preventDefault();
        let e = event.target;
        if(e.className.indexOf('active')>-1){
          this.$router.push('/personal');
        }
      },
      getCode:function(){
        if(this.checkPhone(this.loginPhone)){
          if(this.codeText.indexOf('获取验证码') > -1){
            this.codeText = this.time+'″';
            this.countDown(120);
          }
        }else{
          this.$vux.toast.show({
            text:'请输入正确的手机号',
            type:'warn',
            isShowMask:true
          })
        }
      },
      countDown:function(time){
        let timer = setInterval(()=>{
          this.time --;
          this.codeText = this.time+'″';
          if(this.time === 0){
            clearInterval(timer);
            this.codeText = '获取验证码';
            this.time = time;
          }
        },1000);

      }
    }
  }
</script>

<style lang="scss">


</style>
