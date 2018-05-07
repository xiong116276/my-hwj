<template>
  <div class="home-classify">
    <div class="floor-title">
      <img src="http://m.360hwj.com/images/home-new/home_classify_2@2x.png" alt="">
    </div>
    <div class="content">
      <div class="row-1">
        <div>
          <img :src="classifyData.richang.img" alt="">
        </div>
        <div>
          <a href="#"><img :src="classifyData.changwei.img" alt=""></a>
          <a href="#"><img :src="classifyData.fenshi.img" alt=""></a>
        </div>
      </div>
      <div class="row-2 clearFix">
        <img :src="classifyData.qixie.img" alt="">
        <img :src="classifyData.zhongyao.img" alt="">
        <img :src="classifyData.chengren.img" alt="">
      </div>
      <div class="row-3 clearFix">
        <img :src="classifyData.xinnao.img" alt="">
        <img :src="classifyData.ganbing.img" alt="">
        <img :src="classifyData.pifu.img" alt="">
        <img :src="classifyData.shengjing.img" alt="">
        <img :src="classifyData.baojian.img" alt="">
        <img :src="classifyData.man.img" alt="">
        <img :src="classifyData.woman.img" alt="">
        <img :src="classifyData.yanjing.img" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home_classify",
    data:function () {
      return{
        classifyData:{
          richang:{
            img:'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrqO-AOxg3AABc1HLPak4706.jpg'
          },
          changwei:{
            img:'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrqQGAQdNUAAAqpXFuL0s690.jpg'
          },
          fenshi:{
            img:'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrqSCAWCuiAAA5SUaGO-Y899.jpg'
          },
          qixie:{
            img:'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrqX6APAQ3AAAq-blvrWg627.jpg'
          },
          zhongyao:{
            img:'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrqZGAG5iLAAA4DsBFvlg363.jpg'
          },
          chengren:{
            img:'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrp-WANLM-AAAtCYTxyE8175.jpg'
          },
          xinnao:{
            img:'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrqduAGeNuAAAnkL_jlo8554.jpg'
          },
          ganbing:{
            img:'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrqeqAJPxUAAAgHV_hIC8518.jpg'
          },
          pifu:{
            img:'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrqheAakYeAAAormK0a0Y345.jpg'
          },
          shengjing:{
            img:'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrqmCAP6xEAAAlzhwlJzs765.jpg'
          },
          baojian:{
            img:'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrqoOAe2xaAAAkNui3oLw898.jpg'
          },
          man:{
            img:'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrqqaAPJIjAAAmh0pxKak598.jpg'
          },
          woman:{
            img:'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrqtaAIJw8AAAna0jE59k632.jpg'
          },
          yanjing:{
            img:'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrq1eAWrfTAAAnZ-ZfiNw361.jpg'
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .home-classify{
    margin-top: 10px;
    background-color: #fff;
    .floor-title{
      img{
        width: 30%;
      }
    }
    .content{
      >div{
        &:not(:last-child){
          border-bottom: 2px solid #e8e8e8;
        }
      }
    }
    .row-1{
      display: flex;
      >div{
        width: 50%;
        &:last-child{
          display: flex;
          flex-direction: column;
          border-left: 2px solid #e8e8e8;
          justify-content: space-between;
          a{
            &:first-child{
              border-bottom: 2px solid #e8e8e8;
            }
          }
        }
      }
    }
    .row-2{
      img{
        float: left;
        height: 299px;
        &:nth-child(2){
          border: 2px solid #e8e8e8{
            top:none;
            bottom:none;
          };
        }
      }
    }
    .row-3{
      img{
        float: left;
        height: 230px;
        border-right: 2px solid #e8e8e8;
        border-bottom: 2px solid #e8e8e8;
        &:nth-child(4n){
          border-right:0;
        }
      }
    }
  }
</style>
