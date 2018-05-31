<template>
  <div class="home-menu">
    <router-link v-for="(item,index) in menus" class="item" :to="item.href" :key="index">
      <img class="menu-img" :src="item.img"  alt=""><p class="item-text">{{item.text}}</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "home_menu",
    data:function () {
      return{
        menus:[
          {
            href:'/classify',
            img:'http://m.360hwj.com/images/0425/home_icon_clas@2x.png',
            text:'全部分类'
          },
          {
            href:'/self_medicine',
            img:'http://m.360hwj.com/images/0425/home_icon_ser@2x.png',
            text:'自助找药'
          },
          {
            href:'http://m.360hwj.com/my/club/index',
            img:'http://m.360hwj.com/images/0425/home_icon_CSD@2x.png',
            text:'推广分享'
          },
          {
            href:'http://kefu.easemob.com/webim/im.html?tenantId=39070&hide=true&sat=&resources=&ticket=true',
            img:'http://m.360hwj.com/images/0425/home_icon_glasses@2x.png',
            text:'客服咨询'
          },
          {
            href:'http://m.360hwj.com/my/signin/index',
            img:'http://m.360hwj.com/images/0425/home_icon_Sign@2x.png',
            text:'签到有礼'
          },
          {
            href:'http://m.360hwj.com/subjects/zhongyaoyinpian.html',
            img:'http://m.360hwj.com/images/0425/home_icon_tcm@2x.png',
            text:'中药饮片'
          },
          {
            href:'http://m.360hwj.com/subjects/zibu.html',
            img:'http://m.360hwj.com/images/0425/home_icon_adultproducts@2x.png',
            text:'滋补调养'
          },
          {
            href:'http://m.360hwj.com/subjects/chengren.html',
            img:'http://m.360hwj.com/images/0425/home_icon_man@2x.png',
            text:'成人用品'
          },
          {
            href:'http://m.360hwj.com/subjects/nanxing.html',
            img:'http://m.360hwj.com/images/0425/home_icon_wom@2x.png',
            text:'男性'
          },
          {
            href:'http://m.360hwj.com/subjects/nvxing.html',
            img:'http://m.360hwj.com/images/0425/home_icon_chronicdisease@2x.png',
            text:'女性'
          },
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../../static/scss/mixins";
  .home-menu{
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px 20px;
    .item{
      display: inline-block;
      width: 20%;
      margin-top: 30px;
      .menu-img{
        width: 80px;
        height: 80px;
        margin-bottom: 10px;
      }
    }
  }
</style>
