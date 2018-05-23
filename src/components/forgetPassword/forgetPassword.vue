<template>
  <div class="login">
    <div class="login-content">
      <div class="login-input forget">
        <input name="phone" type="number" placeholder="请输入手机号" autocomplete="off" v-model="loginPhone" autofocus>
      </div>

      <div class="btn-login" :class="{active:isNext}" @click="btnClick($event)">下一步</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "forget-password",
    data (){
      return {
        loginPhone:'',
        isNext:false
      }
    },
    watch:{
      loginPhone:function(val){
        this.isNext = (val !== '')?true:false;
      }
    },
    methods:{
      btnClick:function(event){
        let e = event.target;

        if(e.className.indexOf('active')>-1){
          if(this.checkPhone(this.loginPhone)){
            sessionStorage.setItem('phone',this.loginPhone);
            this.$router.push('/loginPhoneNext');
          }else{
            this.$vux.toast.show({
              text:'请输入正确手机号',
              type:'warn',
              isShowMask:true
            })
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .login-input{
    &.forget{
      margin-top: 150px;
    }
  }
</style>
