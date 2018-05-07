<template>
  <div class="header" :class="{active:headerChange}">
    <div class="header-left">
      <span class="header-icon icon-scan"></span>
      <p class="header-text">扫一扫</p>
    </div>
    <form class="header-middle" action="" method="GET" id="search-form">
      <i class="header-icon icon-search"></i>
      <input v-model="inputValue" type="search" name="keyword" class="search-input" placeholder="请输入搜索药品" autocomplete="off">
    </form>
    <div class="header-right">
      <div class="header-icon icon-msg"></div>
      <div class="header-text">消息</div>
    </div>

    <div v-show="searchResult" class="search-list">
      <div class="item">兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋</div>
      <div class="item">兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋</div>
      <div class="item">兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋</div>
      <div class="item">兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋</div>
      <div class="item">兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋</div>
      <div class="item">兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋</div>
      <div class="item">兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋</div>
      <div class="item">兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋</div>
      <div class="item">兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋</div>
      <div class="item">兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋</div>
      <div class="item">兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋</div>
      <div class="item">兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋</div>
      <div class="item">兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋</div>
      <div class="item">兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋</div>
      <div class="item">兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋</div>
      <div class="item">兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋</div>
      <div class="item">兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋</div>
      <div class="item">兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋</div>
      <div class="item">兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋</div>
      <div class="item">兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋</div>
      <div class="item">兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋</div>
      <div class="item">兵兵 儿童装 兵兵退热贴 112.5mm*40mm*2贴*2袋</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home_header",
    data:function () {
      return{
        scrollTop:0,
        headerChange:false,
        searchResult:false,
        bodyTop:0,
        inputValue:''
      }
    },
    mounted:function () {
      window.addEventListener('scroll', this.handleScroll);
    },
    watch:{
      inputValue:function () {
        if(this.inputValue === ''||this.inputValue == null){
          this.searchResult = false;
        }else{
          this.searchResult = true;
        }
        this.isOverflow(this.searchResult);
      }
    },
    computed:{

    },
    methods:{
      handleScroll:function () {
        this.scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        this.headerChange = (this.scrollTop > 100) ? true:false;
      },
      isOverflow:function (isTrue) {
        if(isTrue){
          document.documentElement.style.overflowY = 'hidden';
          document.documentElement.style.height = '100%';
          document.body.style.overflowY = 'hidden';
          document.body.style.height = '100%';
          // document.body.style.marginTop = '-'+this.scrollTop+'px';
          document.body.scrollTop = this.scrollTop;
        }else{
          document.documentElement.style.overflowY = 'auto';
          document.documentElement.style.height = 'auto';
          document.body.style.overflowY = 'auto';
          document.body.style.height = 'auto';
          document.body.style.marginTop = '0';
          window.scrollTo(0,this.scrollTop);
        }
      }
    }
  }
</script>

<style lang="scss" type="text/css">
  @import "header.scss";
</style>
