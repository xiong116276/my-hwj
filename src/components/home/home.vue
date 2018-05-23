<template>
  <div class="home-container">
    <!--头部-->
    <home_header/>
    <div class="active-container">
      <!--轮播-->
      <carousel :imgList="bannerList"/>
      <!--导航-->
      <home_menu/>
      <div class="home-banner">
        <img src="http://m.360hwj.com/images/0425/integral-banner@2x.png" alt="">
      </div>
      <div class="active-widget">
        <div class="left">
          <a href="http://m.360hwj.com/subjects/nvxing.html">
            <img src="http://m.360hwj.com/images/0425/industrious-work@2x.png" alt="">
          </a>
        </div>
        <div class="right">
          <a class="top" href="http://m.360hwj.com/combination/xinrenzhuanxiang"><img src="http://m.360hwj.com/images/0425/new-people@2x.png" alt=""></a>
          <a href="http://m.360hwj.com/subjects/jiatingchangbeiyao.html"><img src="http://m.360hwj.com/images/0425/wuyi-holiday@2x.png" alt=""></a>
        </div>
      </div>
    </div>
    <!--秒杀-->
    <seckill/>
    <!--用户福利-->
    <welfare/>
    <div class="home-ad">
      <img src="http://static.360hwj.com/group1/M00/05/C1/J2zAA1qrhUqAQThSAAIGfTUeTp4019.jpg" alt="">
    </div>
    <!--精选分类-->
    <home_classify/>
    <div class="home-ad">
      <img src="http://static.360hwj.com/group1/M00/05/15/J2zAA1pFzLSAHxJRAANAUm_v-jg469.jpg" alt="">
    </div>
    <!--品牌馆-->
    <brand/>
    <!--药品列表-->
    <product_list :list-data="productList"/>
    <!--APP下载-->
    <download/>
  </div>
</template>

<script type="es6">
  import home_header from './home_header/home_header';
  import carousel from './../carousel/carousel';
  import home_menu from './home_menu/home_menu';
  import seckill from './seckill/seckill';
  import welfare from './welfare/welfare';
  import home_classify from './home_classify/home_classify';
  import brand from './brand/brand';
  import product_list from './product_list/product_list';
  import download from './download/download';

  export default {
    name: "home",
    components: {
      home_header:home_header,
      carousel:carousel,
      home_menu:home_menu,
      seckill:seckill,
      welfare:welfare,
      home_classify:home_classify,
      brand:brand,
      product_list:product_list,
      download:download,
    },
    data:function() {
      return {
        bannerList:[
          {
            url:'http://m.360hwj.com/images/0425/banner@2x.png',
            href:'http://m.360hwj.com'
          },
          {
            url:'http://static.360hwj.com/group1/M00/07/82/J2zAA1rmvziAH49YAAT7JUgNFEs092.png',
            href:'http://www.360hwj.com/api/view/subject/107.jhtml'
          },
          {
            url:'http://static.360hwj.com/group1/M00/05/07/J2zAA1o3hTmASZakAAVAg22fJRc599.jpg',
            href:'http://www.360hwj.com/api/view/subject/64.jhtml'
          },
        ],
        productList:[
          {
            title:{
              img:'http://m.360hwj.com/images/home_classify_1@2x.png',
              iconMore:true,
            },
            goods:[
              {
                goodsId:1,
                img:'http://static.360hwj.com/group1/M00/01/42/wKgCaFkhyhuASJOgAAAldIqpcvw528.JPG',
                name:'修正 抗病毒口服液 10ml*10支',
                price:'25.80'
              },
              {
                goodsId:2,
                img:'http://static.360hwj.com/group1/M00/04/8A/J2zAA1oaV8aABcAyAADSeujG0sM204.JPG',
                name:'同仁堂 六味地黄软胶囊0.38g*10粒*6板',
                price:'48.00'
              },
              {
                img:'http://static.360hwj.com/group1/M00/01/24/wKgCaFkhyD2ATXP7AABXqPlAjvc492.jpg',
                name:'众生丸 100s',
                price:'16.50'
              },
              {
                img:'http://static.360hwj.com/group1/M00/02/07/wKgCaFkh3_WABWsPAACYNdu3wbo970.JPG',
                name:'同仁堂 同人乌鸡白凤丸 大蜜丸 9g*6丸',
                price:'48.00'
              },
              {
                img:'http://static.360hwj.com/group1/M00/03/21/wKgCaFlKSeSAbrijAAAzRpP1M6M419.jpg',
                name:'络活喜 苯磺酸氨氯地平片 5mg*7片',
                price:'33.80'
              },
              {
                img:'http://static.360hwj.com/group1/M00/03/3B/wKgCaFlKTM-ALWIJAAA_aihGA0Q125.jpg',
                name:'立普妥 阿托伐他汀钙 20mg*7片',
                price:'62.00'
              },
              {
                img:'http://static.360hwj.com/group1/M00/01/32/wKgCaFkhyPCAcHm_AAB4q0n9V3s678.jpg',
                name:'999 三九板蓝根颗粒 10g*20袋',
                price:'19.50'
              },
              {
                img:'http://static.360hwj.com/group1/M00/01/EE/wKgCaFkh3SKAHmf4AAA1x5VOj6o833.jpg',
                name:'三公仔 小二七星茶颗粒 7g*10袋',
                price:'15.00'
              }
            ]
          },
          {
            title:{
              img:'http://m.360hwj.com/images/home_classify_210@2x.png',
              iconMore:true
            },
            goods:[
              {
                img:'http://static.360hwj.com/group1/M00/01/42/wKgCaFkhyhuASJOgAAAldIqpcvw528.JPG',
                name:'修正 抗病毒口服液 10ml*10支',
                price:'25.80'
              },
              {
                img:'http://static.360hwj.com/group1/M00/04/8A/J2zAA1oaV8aABcAyAADSeujG0sM204.JPG',
                name:'同仁堂 六味地黄软胶囊0.38g*10粒*6板',
                price:'48.00'
              },
              {
                img:'http://static.360hwj.com/group1/M00/01/24/wKgCaFkhyD2ATXP7AABXqPlAjvc492.jpg',
                name:'众生丸 100s',
                price:'16.50'
              },
              {
                img:'http://static.360hwj.com/group1/M00/02/07/wKgCaFkh3_WABWsPAACYNdu3wbo970.JPG',
                name:'同仁堂 同人乌鸡白凤丸 大蜜丸 9g*6丸',
                price:'48.00'
              },
              {
                img:'http://static.360hwj.com/group1/M00/03/21/wKgCaFlKSeSAbrijAAAzRpP1M6M419.jpg',
                name:'络活喜 苯磺酸氨氯地平片 5mg*7片',
                price:'33.80'
              },
              {
                img:'http://static.360hwj.com/group1/M00/03/3B/wKgCaFlKTM-ALWIJAAA_aihGA0Q125.jpg',
                name:'立普妥 阿托伐他汀钙 20mg*7片',
                price:'62.00'
              },
              {
                img:'http://static.360hwj.com/group1/M00/01/32/wKgCaFkhyPCAcHm_AAB4q0n9V3s678.jpg',
                name:'999 三九板蓝根颗粒 10g*20袋',
                price:'19.50'
              },
              {
                img:'http://static.360hwj.com/group1/M00/01/EE/wKgCaFkh3SKAHmf4AAA1x5VOj6o833.jpg',
                name:'三公仔 小二七星茶颗粒 7g*10袋',
                price:'15.00'
              }
            ]
          },
          {
            title:{
              img:'http://m.360hwj.com/images/home_classify_244@2x.png',
              iconMore:true
            },
            goods:[
              {
                img:'http://static.360hwj.com/group1/M00/01/42/wKgCaFkhyhuASJOgAAAldIqpcvw528.JPG',
                name:'修正 抗病毒口服液 10ml*10支',
                price:'25.80'
              },
              {
                img:'http://static.360hwj.com/group1/M00/04/8A/J2zAA1oaV8aABcAyAADSeujG0sM204.JPG',
                name:'同仁堂 六味地黄软胶囊0.38g*10粒*6板',
                price:'48.00'
              },
              {
                img:'http://static.360hwj.com/group1/M00/01/24/wKgCaFkhyD2ATXP7AABXqPlAjvc492.jpg',
                name:'众生丸 100s',
                price:'16.50'
              },
              {
                img:'http://static.360hwj.com/group1/M00/02/07/wKgCaFkh3_WABWsPAACYNdu3wbo970.JPG',
                name:'同仁堂 同人乌鸡白凤丸 大蜜丸 9g*6丸',
                price:'48.00'
              },
              {
                img:'http://static.360hwj.com/group1/M00/03/21/wKgCaFlKSeSAbrijAAAzRpP1M6M419.jpg',
                name:'络活喜 苯磺酸氨氯地平片 5mg*7片',
                price:'33.80'
              },
              {
                img:'http://static.360hwj.com/group1/M00/03/3B/wKgCaFlKTM-ALWIJAAA_aihGA0Q125.jpg',
                name:'立普妥 阿托伐他汀钙 20mg*7片',
                price:'62.00'
              },
              {
                img:'http://static.360hwj.com/group1/M00/01/32/wKgCaFkhyPCAcHm_AAB4q0n9V3s678.jpg',
                name:'999 三九板蓝根颗粒 10g*20袋',
                price:'19.50'
              },
              {
                img:'http://static.360hwj.com/group1/M00/01/EE/wKgCaFkh3SKAHmf4AAA1x5VOj6o833.jpg',
                name:'三公仔 小二七星茶颗粒 7g*10袋',
                price:'15.00'
              }
            ]
          },
          {
            title:{
              img:'http://m.360hwj.com/images/home_classify_242@2x.png',
              iconMore:true
            },
            goods:[
              {
                img:'http://static.360hwj.com/group1/M00/01/42/wKgCaFkhyhuASJOgAAAldIqpcvw528.JPG',
                name:'修正 抗病毒口服液 10ml*10支',
                price:'25.80'
              },
              {
                img:'http://static.360hwj.com/group1/M00/04/8A/J2zAA1oaV8aABcAyAADSeujG0sM204.JPG',
                name:'同仁堂 六味地黄软胶囊0.38g*10粒*6板',
                price:'48.00'
              },
              {
                img:'http://static.360hwj.com/group1/M00/01/24/wKgCaFkhyD2ATXP7AABXqPlAjvc492.jpg',
                name:'众生丸 100s',
                price:'16.50'
              },
              {
                img:'http://static.360hwj.com/group1/M00/02/07/wKgCaFkh3_WABWsPAACYNdu3wbo970.JPG',
                name:'同仁堂 同人乌鸡白凤丸 大蜜丸 9g*6丸',
                price:'48.00'
              },
              {
                img:'http://static.360hwj.com/group1/M00/03/21/wKgCaFlKSeSAbrijAAAzRpP1M6M419.jpg',
                name:'络活喜 苯磺酸氨氯地平片 5mg*7片',
                price:'33.80'
              },
              {
                img:'http://static.360hwj.com/group1/M00/03/3B/wKgCaFlKTM-ALWIJAAA_aihGA0Q125.jpg',
                name:'立普妥 阿托伐他汀钙 20mg*7片',
                price:'62.00'
              },
              {
                img:'http://static.360hwj.com/group1/M00/01/32/wKgCaFkhyPCAcHm_AAB4q0n9V3s678.jpg',
                name:'999 三九板蓝根颗粒 10g*20袋',
                price:'19.50'
              },
              {
                img:'http://static.360hwj.com/group1/M00/01/EE/wKgCaFkh3SKAHmf4AAA1x5VOj6o833.jpg',
                name:'三公仔 小二七星茶颗粒 7g*10袋',
                price:'15.00'
              }
            ]
          }
        ]
      }
    },
    computed: {

    },
    mounted() {

    },
    methods:{

    }

  }
</script>

<style lang="scss">
  @import "home.scss";
  .active-container{
    background: url("../../../static/img/active-bg@2x.jpg") no-repeat top;
    background-size: 100% auto;
  }
  .home-banner{
    img{
      width: 95%;
    }
  }
  .home-ad{
    margin-top: 10px;
  }
  .active-widget{
    text-align: left;
    padding: 10px;
    &:after{
      content: '';
      display: block;
      clear: both;
    }
    >div{
      display: inline-block;
      width: 49.5%;
      a{
        display: inline-block;
      }
    }
    .left{
      float: left;
    }
    .right{
      float: right;
    }
  }
</style>
