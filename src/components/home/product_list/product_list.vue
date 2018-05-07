<template>
  <div class="product-list">
    <div class="list-item" v-for="item in listData">
      <div class="floor-title" >
        <img class="title-img" :src="item.title.img" alt="">
        <span class="icon-more"></span>
      </div>
      <div class="list-goods clearFix">
        <div class="goods-item" v-for="goods in item.goods">
          <div class="item-img"><img :src="goods.img" alt=""></div>
          <p class="item-name">{{goods.name}}</p>
          <p class="item-price">￥{{goods.price}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "product_list",
    data:function () {
      return{
        listData:[
          {
            title:{
              img:'http://m.360hwj.com/images/home_classify_1@2x.png'
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
              img:'http://m.360hwj.com/images/home_classify_210@2x.png'
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
              img:'http://m.360hwj.com/images/home_classify_244@2x.png'
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
              img:'http://m.360hwj.com/images/home_classify_242@2x.png'
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
    }
  }
</script>

<style lang="scss">
  .list-item{
    margin-top: 15px;
    background-color: #fff;
    .floor-title{
      position: relative;
    }
    .icon-more{
      float: right;
      margin: auto;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 20px;
    }
  }
  .goods-item{
    float: left;
    width: 50%;
    border-bottom: 2px solid #e8e8e8;
    font-size: 28px;
    color: #222;
    text-align: left;
    padding: 30px;
    &:nth-child(2n){
      border-left: 2px solid #e8e8e8;
    }
    .item-img{
      text-align: center;
      margin: 0 0 30px 0;
      height: 210px;
      img{
        width: 70%;
      }
    }
    .item-name{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 64px;
      line-height: 32px;
    }
    .item-price{
      margin-top: 20px;
      color: #ed4529;
      font-size: 30px;
    }
  }
</style>
