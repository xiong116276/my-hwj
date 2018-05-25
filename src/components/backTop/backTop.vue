<template>
  <div v-if="isShow" id="backTop" @click="top" class="border-1px">
    <img :src="img" alt="">
  </div>
</template>

<script>
  export default {
    name: "back-top",
    data(){
      return {
        img:'http://note.xiongkun.top/img/icon-top.png',
        scrollTop:0,
        isShow:false
      }
    },
    mounted(){
      window.onscroll = () => {
        this.isShowFun()
      };
    },
    methods:{
      isShowFun(){
        this.scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
        this.scrollTop > 50?this.isShow = true:this.isShow = false;
      },
      top(){
        this.backTop();
      }
    }
  }
</script>

<style lang="scss">
  #backTop{
    position: fixed;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 2px solid rgba(0,0,0,0.3);
    right: 55px;
    bottom: 10%;
  }
</style>
