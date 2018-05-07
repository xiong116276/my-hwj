<template>
 <div class="download" v-if="isShow">
   <div class="app-img"><img :src="appData.img" alt=""></div>
   <div class="app-detail">
     <p class="app-name">{{appData.name}}</p>
     <p class="app-description">{{appData.description}}</p>
   </div>
   <div class="btn-download">{{appData.btnText}}</div>
   <span class="icon-close" @click="hidden"></span>
 </div>
</template>

<script>
  export default {
    name: "download",
    data:function () {
      return{
        isShow:true,
        appData:{
          img:'http://m.360hwj.com/images/APPicon.png',
          name:'好万家APP',
          description:'下载APP,扫码找药更方便',
          btnText:'客户端下载'
        }
      }
    },
    methods:{
      hidden:function () {
        this.isShow = false;
      }
    }
  }
</script>

<style lang="scss">
  .download{
    position: fixed;
    bottom:90px;
    max-width: 750px;
    height: 110px;
    background-color: rgba(0,0,0,0.6);
    padding: 20px 10px;
    width: 100%;
    .app-img{
      float: left;
      width: 70px;
      border-radius: 10px;
      overflow: hidden;
      img{
        vertical-align: middle;
      }
    }
    .app-detail{
      float: left;
      color: #fff;
      text-align: left;
      margin-left: 15px;
      .app-name{
        margin-bottom: 20px;
        font-size: 28px;
      }
      .app-description{
        font-size: 24px;
      }
    }
    .btn-download{
      position: absolute;
      margin: auto;
      top:0;
      bottom:0;
      right: 100px;
      width: 180px;
      height: 65px;
      line-height: 65px;
      background-color: #ed4529;
      color: #fff;
      border-radius: 30px;
      font-size: 30px;
      text-align: center;
    }
  }
  .icon-close{
    display: inline-block;
    width: 40px;
    height: 40px;
    background: url("/static/img/close.png") no-repeat center;
    background-size: contain;
    position: absolute;
    right: 20px;
    margin: auto;
    top:0;
    bottom:0;
  }
</style>
