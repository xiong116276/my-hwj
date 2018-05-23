<template>
  <div class="login">
    <div class="login-content">
      <div class="login-input">
        <input name="phone" type="number" placeholder="手机号" autocomplete="off" v-model="loginPhone" autofocus>
      </div>
      <div class="login-input">
        <input name="phone" type="password" placeholder="密码" autocomplete="off" v-model="loginPassword" autofocus>
      </div>
      <div class="login-input">
        <input type="number" placeholder="验证码" autocomplete="off" v-model="loginCode">

        <a class="get-code" href="javascript: " @click="getCode" v-html="codeText"></a>
      </div>

      <div class="btn-login" :class="{active:isRegister}" @click="btnClick($event)">注 册</div>

      <div class="login-bottom">
        <p class="btn-register">已有账号?<router-link to="/login"> 马上登录</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "register",
    data(){
      return{
        isRegister:false,
        loginPhone:'',
        loginPassword:'',
        loginCode:'',
        codeText:'获取验证码',
        time:30
      }
    },
    watch:{
      loginPhone:function(val){
        this.loginPhone = val
      },
      loginPassword:function(val){
        this.loginPassword = val
      },
      loginCode:function(val){
        this.loginCode = val;
        this.isRegister = (this.loginPhone !==''&&this.loginPassword !== ''&&this.loginCode !== '')?true:false;
      }
    },
    methods:{
      btnClick:function(event){
        event.preventDefault();
        let e = event.target;
        if(e.className.indexOf('active') > -1){
          this.$vux.toast.show({
            text:'注册成功',
            isShowMask:true,
            time:1000
          });
          setTimeout(()=>{
            this.$router.push('/login');
          },1000)
        }
      },
      getCode:function(){
        if(this.checkPhone(this.loginPhone)){
          if(this.checkPassword(this.loginPassword)){
            if(this.codeText.indexOf('获取验证码') > -1){
              this.codeText = this.time+'″';
              this.countDown(30);
            }
          }else{
            this.$vux.toast.show({
              text:'请输入6~18位包含数字和字母的组合密码',
              type:'warn',
              isShowMask:true
            });
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
          time --;
          this.codeText = time+'″';
          if(time === 0){
            clearInterval(timer);
            this.codeText = '获取验证码';
          }
        },1000);

      }
    }
  }
</script>

<style lang="scss">

</style>
