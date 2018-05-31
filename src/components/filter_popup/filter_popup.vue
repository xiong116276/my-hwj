<template>
  <popup id="filter_popup" v-model="showPopup" height="100%">
    <div class="popup">
      <popup-header class="popup-header" left-text="重置" right-text="完成" title="" @on-click-left="filter_reset" @on-click-right="filter_finish"></popup-header>
      <div class="filter-content">
        <div class="filter-item" v-for="(item,index) in popupData">
          <div class="title">{{item.title}} <span class="icon-arrow-down" :class="{rotate:item.contentShow===false}" @click="showContent(item)"></span></div>
          <div v-if="item.isClick" v-show="item.contentShow" class="content clearFix">
            <span class="brand" :class="{active:brand.isSelected}" v-for="brand in item.content" @click="select(brand)">{{brand.text}}</span>
          </div>
          <div v-else-if="item.isInput" v-show="item.contentShow" class="content">
            <input type="number" placeholder="最低价格" v-model="item.content.price_l">
            <span class="space">—</span>
            <input type="number" placeholder="最高价格" v-model="item.content.price_g">
          </div>
        </div>
      </div>
    </div>
  </popup>
</template>

<script>
  import {Popup,PopupHeader} from 'vux';
  export default {
    name: "filter_popup",
    props:{
      showPopup:{type:Boolean},
      popupData:{type:Array}
    },
    components:{
      Popup,
      PopupHeader
    },
    data(){
      return {

      }
    },
    methods:{
      filter_reset(){
        for(let i =0,len = this.popupData.length;i < len ;i++){
          if(i===2){
            for(let k in this.popupData[i].content){
              this.popupData[i].content[k] = "";
            }
          }else{
            for(let j = 0,len2 = this.popupData[i].content.length;j<len2;j++){
              this.popupData[i].content[j].isSelected = false;
            }
          }
        }
      },
      filter_finish(){
        let result = {};
        for(let i = 0,len = this.popupData.length;i < len;i++){
          if(i === 2){
            result.price_l = this.popupData[i].content.price_l;
            result.price_g = this.popupData[i].content.price_g;
          }else{
            result[this.popupData[i].title] = '';
            for(let j = 0,len2 = this.popupData[i].content.length;j < len2 ;j++){
              if(this.popupData[i].content[j].isSelected){
                result[this.popupData[i].title] += this.popupData[i].content[j].text+',';
              }
            }
          }
        }
        this.backTop();
        this.$emit('finish',result);
      },
      showContent(item){
        item.contentShow = item.contentShow?false:true;
      },
      select(item){
        item.isSelected = item.isSelected?false:true;
      }
    }
  }
</script>

<style lang="scss">
  #filter_popup{
    .vux-popup-header{
      background-color: #fff;
      .vux-popup-header-right{
        color: #ed4529;
      }
    }
    //vux popup 样式
    .vux-popup-dialog{
      overflow-y: auto!important;
    }
    .popup{
      padding-top: 80px;
    }
    .popup-header{
      position: fixed;
      top: 0;
      width: 100%;
      height: 80px;
      line-height: 80px;
      z-index: 50;
    }
    .filter-content {
      padding: 0 20px 50px;
      background-color: #fff;
      .filter-item{
        .title{
          position: relative;
          height: 80px;
          line-height: 80px;
        }
        .content{
          padding-bottom: 20px;
          .brand{
            float: left;
            padding: 10px 20px;
            background-color: #f0f0f0;
            margin: 0 20px 20px 0;
            border-radius: 5px;
            &.active{
              background-color: #ed4529;
              color: #fff;
            }
          }
          input{
            text-align: center;
            outline: none;
            width: 200px;
            background-color: #f0f0f0;
            padding: 20px;
            border-radius: 5px;
          }
          .space{
            margin: 0 20px;
          }
        }
      }
      .icon-arrow-down{
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        right: 30px;
        width: 50px;
        height: 40px;
        transition: transform 0.2s linear;
        &.rotate{
          transform: rotate(180deg);
        }
      }
    }
  }
</style>
