<template>
  <div class="cart">

  </div>
</template>

<script>
  export default {
    name: "cart",
    data:function () {
      return{

      }
    },
    mounted:function () {
      this.checkLogin();
    },
    methods:{
      checkLogin:function () {
        if(sessionStorage.getItem('uname')==''||sessionStorage.getItem('uname')==undefined){
          sessionStorage.setItem('replacePath',this.$route.name);
          this.$router.replace('/login');
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
