<template>
  <div class="brand">
    <div class="floor-title">
      <img class="title-img" :src="brands.title.img" alt="">
    </div>
    <div class="content">
      <div class="row-1 clearFix">
        <img :src="brands.baiyunshan.img" alt="">
        <img :src="brands.yunnanbaiyao.img" alt="">
      </div>
      <div class="row-2 clearFix">
        <div><img :src="brands.tongrentang.img" alt=""></div>
        <div><img :src="brands.xiuzheng.img" alt=""></div>
        <div><img :src="brands.huatianbao.img" alt=""></div>
        <div><img :src="brands.hayao.img" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "brand",
    data:function () {
      return{
        brands:{
          title:{
            img:'http://m.360hwj.com/images/home-new/home_classify_3@2x.png'
          },
          baiyunshan:{
            img:'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrq42AHgfJAAB1IHz2UZo485.png'
          },
          yunnanbaiyao:{
            img:'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrq52AawNsAAB6AuzrFTQ339.png'
          },
          tongrentang:{
            img:'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrs-qATd8fAAA4qGx1w_c563.png'
          },
          xiuzheng:{
            img:'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrpkqAJwWEAABWVDLe-JE694.png'
          },
          huatianbao:{
            img:'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrrfeAAzlMAABdvZR2uo0355.png'
          },
          hayao:{
            img:'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrrg2AKCCuAABf5ndq70A977.png'
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .brand{
    margin-top: 10px;
    background-color: #fff;
    .floor-title{
      border-bottom: 0;
    }
    .row-1{
      img{
        float: left;
        width: 50%;
      }
    }
    .row-2{
      >div{
        float: left;
        width: 25%;
        height: 210px;
        text-align: left;
      }
    }
  }
</style>
