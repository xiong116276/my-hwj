<template>
  <div class="product-list">
    <div class="list-item" v-for="item in listData">
      <div class="floor-title" >
        <img v-if="item.title.img" class="title-img" :src="item.title.img" alt="">
        <span v-if="item.title.text" class="title-text">
          <img v-if="item.title.text.icon" :src="item.title.text.icon">{{item.title.text.text}}
        </span>
        <span v-if="item.title.iconMore" class="icon-more"></span>
      </div>
      <div class="list-goods clearFix">
        <goods v-for="(goods,index) in item.goods" :goodsData="goods" :key="index"/>
      </div>
    </div>
  </div>
</template>

<script>
  import goods from '@/components/goods/goods'
  export default {
    name: "product_list",
    props:{
      listData:{type:Array}
    },
    components:{
      goods
    },
    data:function () {
      return{
      }
    },
    methods:{

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
    .title-text{
      line-height: 70px;
      img{
        width: 40px;
        vertical-align: text-top;
        margin-right: 10px;
      }
    }
  }

</style>
