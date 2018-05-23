<template>
  <div class="cart">
    <div class="header border-1px">
      购物车
      <span v-if="isEmpty === false" class="btn-edit" v-html="btnTextTop" @click="btnEditClick($event)"></span>
    </div>

    <div v-if="isEmpty" class="cart-empty">
      <div class="top">
        <img src="http://m.360hwj.com/images/personal/car_empty@2x.png" alt="">
        <div class="btn-bottom border-1px" @click="$router.push('/home')">去商场看看</div>
      </div>
      <recommend :list-data="recommend"/>
    </div>
    <div v-else class="cart-goods">
      <div class="goods-content">
        <div class="goods-title border-1px">
          <span class="icon-select select-all" :class="{selected:selectAll}" @click="selectAllFun"></span>
          <span>好万家</span>
          <span class="icon-arrow-right"></span>
        </div>
        <div class="goods-list">
          <div class="goods-item-h" v-for="(item,index) in cartGoods">
            <span class="icon-select" :class="{selected:item.selected}" @click="select(item)"></span>
            <div class="item-img"><img :src="item.img" alt=""></div>
            <div class="item-detail">
              <p class="item-name">{{item.name}}</p>
              <p v-if="isEdit === false" class="item-spec">规格:{{item.spec}}</p>
              <p class="item-price">￥{{item.price}}</p>
              <span class="item-count">×{{item.count}}</span>

              <div v-show="isEdit" class="count-edit border-1px">
                <span class="btn btn-reduce" @click="onReduce(item)">-</span>
                <input @input="onInput(item)" class="border-1px" type="number" v-model="item.count">
                <span class="btn btn-add" @click="onAdd(item)">+</span>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="cart-bottom border-1px">
        <span class="icon-select select-all" :class="{selected:selectAll}" @click="selectAllFun"></span>
        <span class="goods-selected">全选({{selectedCount}})</span>
        <div class="right">
          <span class="goods-total">￥{{goodsTotal.toFixed(2)}}</span>
          <div class="btn-delete" :class="{active:btnBottom}" v-html="btnTextBottom" @click="submitFun"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import recommend from '../home/product_list/product_list';
  export default {
    name: "cart",
    components:{recommend},
    data:function () {
      return{
        isEmpty:false,
        recommend:[
          {
            title:{
              text:{
                text:'热品推荐',
                icon:'http://m.360hwj.com/images/fenlei/tuijian-icon.png'
              },
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
        ],
        btnTextTop:'编辑',
        btnTextBottom:'结算',
        isEdit:false,
        btnBottom:false,
        selectAll:false,
        cartGoods:[
          {
            img:'http://image.360hwj.com/goods/933519/0e7518a5-677c-418c-8abb-5b9fa120bbd8!400x400.jpg',
            name:'力合健 肤色透气创口贴 70mm*18mm*100片',
            spec:'70mm*18mm*100片',
            price:'2.00',
            count:3,
            selected:false
          },
          {
            img:'http://image.360hwj.com/goods/933519/0e7518a5-677c-418c-8abb-5b9fa120bbd8!400x400.jpg',
            name:'力合健 肤色透气创口贴 70mm*18mm*100片',
            spec:'70mm*18mm*100片',
            price:'1.50',
            count:5,
            selected:false
          },
          {
            img:'http://image.360hwj.com/goods/933519/0e7518a5-677c-418c-8abb-5b9fa120bbd8!400x400.jpg',
            name:'力合健 肤色透气创口贴 70mm*18mm*100片',
            spec:'70mm*18mm*100片',
            price:'2.00',
            count:3,
            selected:false
          },
          {
            img:'http://image.360hwj.com/goods/933519/0e7518a5-677c-418c-8abb-5b9fa120bbd8!400x400.jpg',
            name:'力合健 肤色透气创口贴 70mm*18mm*100片',
            spec:'70mm*18mm*100片',
            price:'1.50',
            count:5,
            selected:false
          },
          {
            img:'http://image.360hwj.com/goods/933519/0e7518a5-677c-418c-8abb-5b9fa120bbd8!400x400.jpg',
            name:'力合健 肤色透气创口贴 70mm*18mm*100片',
            spec:'70mm*18mm*100片',
            price:'2.00',
            count:3,
            selected:false
          },
          {
            img:'http://image.360hwj.com/goods/933519/0e7518a5-677c-418c-8abb-5b9fa120bbd8!400x400.jpg',
            name:'力合健 肤色透气创口贴 70mm*18mm*100片',
            spec:'70mm*18mm*100片',
            price:'1.50',
            count:5,
            selected:false
          }
        ],
        itemCount:1,
        selectedCount:0,
        goodsTotal:0.00
      }
    },
    mounted:function () {
      this.checkLogin();
      this.border1px();
    },
    watch:{

    },
    methods:{
      checkLogin:function () {
        if(sessionStorage.getItem('uname') == ''||sessionStorage.getItem('uname')==undefined){
          // sessionStorage.setItem('replacePath',this.$route.name);
          this.$router.replace('/login');
        }
      },
      checkGoods:function(){

      },
      btnEditClick:function(event){
        let e = event.target;
        if(e.innerHTML.indexOf('编辑') > -1){
          this.isEdit = true;
          this.btnTextTop = '完成';
          this.btnTextBottom = '删除';
        }else if(e.innerHTML.indexOf('完成') > -1){
          this.isEdit = false;
          this.btnTextTop = '编辑';
          this.btnTextBottom = '结算';
        }
      },
      select:function(item){
        // 按钮点击改变自身样式
        item.selected = item.selected?false:true;
        let len = this.goodsSelected().length;
        this.selectedCount = len;
        // 底部按钮颜色
        this.btnBottom = len > 0 ? true: false;
        // 当每个商品选择后，全选按钮自动被选
        this.selectAll = (this.cartGoods.length === len)?true:false;
      },
      selectAllFun:function(){
        this.selectAll = this.selectAll?false:true;
        for (let i = 0;i<this.cartGoods.length;i++){
          this.cartGoods[i].selected = this.selectAll? true:false;
        }
        let len = this.goodsSelected().length;
        this.selectedCount = len;
        // 底部按钮颜色
        this.btnBottom = len > 0 ? true: false;
        // 当每个商品选择后，全选按钮自动被选
        this.selectAll = (this.cartGoods.length === len)?true:false;
      },
      goodsSelected:function(){
        // 获取每个选中的商品
        let total = [];
        let totalLast = 0;
        for(let i = 0;i<this.cartGoods.length;i++){
          if(this.cartGoods[i].selected){
            total.push(this.cartGoods[i]);
            totalLast += parseFloat(this.cartGoods[i].price)* parseFloat(this.cartGoods[i].count);
          }
        }
        // console.log(total);
        this.goodsTotal = totalLast;
        return total;
      },
      onReduce:function(item){
        if(item.count > 1){
          item.count--;
          this.goodsSelected();
        }
      },
      onAdd:function(item){
        // item.count++;
        item.count = item.count + 1;
        this.goodsSelected();
      },
      onInput:function(item){
        if(item.count === ''){
          item.count = 1;
        }
        this.goodsSelected();
      },
      submitFun:function(){
        if(this.btnBottom){
          if(this.btnTextBottom.indexOf('结算') > -1){
            let cartSubmit = [];
            for(let i = 0;i< this.cartGoods.length;i++){
              if(this.cartGoods[i].selected){
                cartSubmit.push(this.cartGoods[i]);
              }
            }
            console.log(cartSubmit);
          }else{
            confirm('确定删除？')
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .cart{
    padding: 90px 0;
    .header{
      position: fixed;
      top: 0;
      width: 100%;
      max-width: 750px;
      height: 90px;
      line-height: 90px;
      z-index: 500;
      background-color: #fff;
      font-size: 32px;
      justify-content: center;
      border: 1px solid #ccc {
        top: none;
        left: none;
        right: none;
      };
    }
    .icon-arrow-right{
      position: absolute;
      right: 30px;
    }
    .icon-select{
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
    }
  }
  .cart-empty{
    .top{
      padding: 40px 0;
      background-color: #fff;
      img{
        width: 40%;
      }
      .btn-bottom{
        margin: 20px auto 0;
        height: 80px;
        line-height: 80px;
        border: 2px solid #ed4529;
        background-color: #fff;
        color: #ed4529;
        width: 40%;
        border-radius: 5px;
        overflow: hidden;
        font-size: 32px;
      }
    }
  }
  .btn-edit{
    position: absolute;
    right: 30px;
    font-size: 28px;
    top:0;
  }
  .cart-goods{
    .goods-content{
      margin-top: 10px;
      background-color: #fff;
      padding-left: 50px;
      .goods-title{
        position: relative;
        height: 70px;
        line-height: 70px;
        font-size: 30px;
        border-bottom: 2px solid #f4f4f4;
        padding-left: 50px;
        text-align: left;
      }
    }
  }
  .goods-item-h{
    position: relative;
    height: 200px;
    padding-left: 50px;
    overflow: hidden;
    .item-img{
      float: left;
      width: 25%;
      margin: 20px 0 0;
      overflow: hidden;
    }
    .item-detail{
      float: left;
      text-align: left;
      width: 70%;
      height: 100%;
      padding-top: 40px;
      margin-left: 10px;
      .item-name{
        width: 85%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 20px;
      }
      .item-spec{
        margin-bottom: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .item-price{
        position: absolute;
        color: #ed4529;
        bottom: 30px;
      }
      .item-count{
        position: absolute;
        right: 20px;
        top: 40px;
      }
    }
  }
  .count-edit{
    position: absolute;
    right: 30px;
    bottom: 30px;
    border: 2px solid #9c9c9c;
    overflow: hidden;
    .btn{
      float: left;
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
    }
    input{
      float: left;
      width: 80px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      outline: none;
      border: 2px solid #9c9c9c {
        top: none;
        bottom: none;
      };
    }
  }
  .cart-bottom{
    position: fixed;
    height: 90px;
    line-height: 90px;
    width: 100%;
    max-width: 750px;
    bottom: 90px;
    background-color: #fff;
    padding-left: 100px;
    .icon-select{
      left: 50px;
    }
    .goods-selected{
      float: left;
    }
    .right{
      float: right;
      .goods-total{
        float: left;
        color: #ed4529;
      }
      .btn-delete{
        float: right;
        width: 250px;
        height: inherit;
        line-height: inherit;
        text-align: center;
        background-color: #a5a5a5;
        color: #ffffff;
        margin-left: 20px;
        &.active{
          background-color: #ed4529;
        }
      }
    }

  }





























</style>
