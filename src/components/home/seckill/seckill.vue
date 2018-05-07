<template>
  <div class="seckill">
    <div class="title">
      <div class="left"><img class="icon-seckill" :src="seckill.title.icon" alt=""></div>
      <div class="right">更多 <span class="icon-more-red"></span></div>
    </div>
    <div class="content">
      <div class="scroll-view" :style="{width:conWidth}">
        <div class="item" v-for="item in seckill.content">
          <img :src="item.img" alt="">
          <p class="price-n">￥{{item.price_n}}</p>
          <p class="price-o">￥{{item.price_o}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "seckill",
    data:function () {
      return{
        conWidth:'',
        seckill:{
          title:{
            icon:'http://m.360hwj.com/images/SecKill@2x.png'
          },
          content:[
            {
              img:'http://static.360hwj.com/group1/M00/03/D8/J2zAA1mKtCyAGbgYAAB9oeJ0nqs559.jpg',
              price_n:1,
              price_o:12
            },
            {
              img:'http://static.360hwj.com/group1/M00/02/89/wKgCaFkiqgSAW6VbAACX8g0RCCY919.jpg',
              price_n:3,
              price_o:3.4
            },
            {
              img:'http://static.360hwj.com/group1/M00/01/16/wKgCaFkhwNiAQfNAAAAUkKw700I099.jpg',
              price_n:9.9,
              price_o:18
            },
            {
              img:'http://static.360hwj.com/group1/M00/04/D9/J2zAA1omQSKAF0QEAACylT3Bz54197.JPG',
              price_n:1,
              price_o:12
            },
            {
              img:'http://static.360hwj.com/group1/M00/02/65/wKgCaFkh-cOAAvZlAAB48O-fYGE719.JPG',
              price_n:3,
              price_o:3.4
            },
            {
              img:'http://static.360hwj.com/group1/M00/05/95/J2zAA1qU626Ac53wAADPTLCkLLA447.JPG',
              price_n:9.9,
              price_o:18
            }
          ]
        }
      }
    },
    mounted:function () {
      this.conWidth = this.seckill.content.length*110+'px';
    }
  }
</script>

<style lang="scss">
  .seckill{
    background-color: #fff;
    margin-top: 10px;

    .title{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 20px;
      justify-content: space-between;
      .right{
        color: #ed4529;
      }
    }
    .content{
      overflow: auto;
      .scroll-view{
        display: flex;
        flex-wrap: nowrap;
      }
      .item{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 250px;
        padding-bottom: 20px;
        text-align: center;
        img{
          width: 80%;
        }
        .price-n{
          color: #ed4529;
          font-size: 32px;
          margin: 10px 0;
        }
        .price-o{
          text-decoration: line-through;
        }
      }
    }
  }
  .icon-seckill{
    width: 130px;
  }
</style>
