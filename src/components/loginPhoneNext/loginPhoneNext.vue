<template>
  <div class="login">
    <div class="login-content">
      <p class="top-tip">
        已向您的手机 <span v-html="phone"></span> 发送验证码,请输入:
      </p>
      <div class="login-input forget">
        <input name="phone" type="number" placeholder="输入验证码" autocomplete="off" v-model="code" autofocus>
        <a class="get-code" href="javascript: " @click="getCode()" v-html="codeText">获取验证码</a>
      </div>

      <div class="btn-login" :class="{active:isNext}" @click="btnClick($event)">下一步</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login-phone-next",
    data(){
      return {
        phone:'',
        isNext:false,
        code:'',
        time:120,
        codeText:""
      }
    },
    mounted:function(){
      this.codeText = this.time+'″';
      this.countDown(120);
      let arr = sessionStorage.getItem('phone').split('');
      arr.splice(3,4,'****');
      this.phone = arr.join('');
    },
    watch:{
      code:function(val){
        this.isNext = (val!=='')?true:false;
      }
    },
    methods:{
      btnClick:function(event){
        let e = event.target;
        if(e.className.indexOf('active') > -1){
          this.$router.push('/setPassword');
        }
      },
      getCode:function(){
        if(this.codeText.indexOf('获取验证码') > -1){
          this.countDown(120);
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
  .login-content{
    .top-tip{
      position: absolute;
      top:50px;
      width: 100%;
      text-align: center;
    }
  }
</style>
