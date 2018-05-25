<template>
  <div class="goods-item" v-if="goodsData" @click="detail(goodsData)">
    <div class="item-img"><img v-lazy="goodsData.img" alt=""></div>
    <p class="item-name">{{goodsData.name}}</p>
    <p class="item-price">￥{{goodsData.price}}</p>
  </div>
</template>

<script>
  export default {
    name: "goods",
    props:{
      goodsData:{type:Object}
    },
    methods:{
      detail:function(item){
        this.$router.push('/detail/'+item.goodsId);
      }
    }
  }
</script>

<style lang="scss">
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
