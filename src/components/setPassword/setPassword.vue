<template>
  <div class="login">
    <div class="login-content">
      <div class="login-input forget">
        <input name="phone" type="password" placeholder="请设置新密码" autocomplete="off" v-model="password" autofocus>
      </div>

      <div class="btn-login" :class="{active:isComplete}" @click="btnClick($event)">完 成</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "set-password",
    data(){
      return{
        password:'',
        isComplete:false,
      }
    },
    watch:{
      password:function(val){
        this.isComplete = (val!=='')?true:false;
      }
    },
    methods:{
      btnClick:function(event){
        let e = event.target;
        if(e.className.indexOf('active') > -1){
          if(this.checkPassword(this.password)){
            this.$router.push('/login')
          }else{
            this.$vux.toast.show({
              text:'请输入6~18位包含数字和字母的组合密码',
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

</style>
