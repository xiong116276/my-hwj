<template>
  <div class="classify">
    <div class="left">
      <ul>
        <li class="item" v-for="(item,index) in classifyData" :class="{active:num === index}" @click="selected(index)">
          {{item.title}}
        </li>
      </ul>
    </div>
    <div class="goods-content">
      <div class="item" v-for="(item,index) in classifyTwo">
        <div class="item-title">{{item.title}}</div>
        <div class="item-goods clearFix">
          <div class="goods" v-for="goods in item.goods">
            <div class="goods-img"><img :src="goods.img" alt=""></div>
            <p class="goods-text">{{goods.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  let serverUrl = '/api'; //本地调试时
  // let serverUrl = 'http://xiongkun.top/data';
  export default {
    name: "classify",
    data:function () {
      return{
        classifyData:[],
        num:0,
        classifyTwo:[]
      }
    },
    mounted:function () {
      this.$ajax.get(serverUrl+'/classify-list.json')
        .then((response)=>{
          this.classifyData = response.data;
          this.classifyTwo = this.classifyData[0].classifyTwo;
        })
        .catch((response)=>{
          console.log(response)
        });
    },
    methods:{
      selected:function (index) {
        this.num = index;
        this.classifyTwo = this.classifyData[index].classifyTwo;
        document.getElementsByClassName('goods-content')[0].scrollTop=0;
      }
    }
  }
</script>

<style lang="scss">
  @import "./classify";
</style>
