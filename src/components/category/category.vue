<template>
  <div class="category">
    <div v-for="item in dataList.classifyTwo" class="item">
      <p class="title"><span>{{item.title}}</span></p>
      <div class="item-goods clearFix">
        <div class="goods" v-for="goods in item.goods" @click="category(goods)">
          <div class="img"><img v-lazy="goods.img" alt=""></div>
          <p class="text">{{goods.text}}</p>
        </div>
      </div>
    </div>
    <floatMenu/>
  </div>
</template>

<script>
  import floatMenu from '@/components/floatMenu/floatMenu'
  export default {
    name: "category",
    components:{
      floatMenu
    },
    data(){
      return{
        dataList:[],
      }
    },
    mounted(){
      this.backTop();
      if(this.dataList.length <= 0){
        this.$ajax.get('/api/classify-list.json')
          .then((response)=>{
            this.dataList = response.data[this.$route.params.id];
          })
          .catch((response)=>{
            console.log(response)
          });
      }
    },
    methods:{
      category(goods){
        this.$router.push('/classifyThree/'+goods.id);
      }
    }

  }
</script>

<style lang="scss">
  .category{
    .item{
      .title{
        height: 80px;
        line-height: 80px;
        span{
          padding-left: 20px;
          border-left: 5px solid #ed4529;
        }
      }
      .item-goods{
        background-color: #fff;
        .goods{
          float: left;
          width: 25%;
          text-align: center;
          margin-bottom: 20px;
          .img{
            display: inline-block;
            width: 50%;
            margin: 20px 0 10px;
            height: 100px;
            overflow: hidden;
          }
          .text{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 0 20px;
          }
        }
      }
    }
  }
</style>
