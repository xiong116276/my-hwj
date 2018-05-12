<template>
  <div id="app">
    <router-view/>
    <div class="footer-tab">
      <router-link to="/home" >
        <span class="footer-icon icon-home"></span>
        <p>首页</p>
      </router-link>
      <router-link to="/classify">
        <span class="footer-icon icon-classify"></span>
        <p>分类</p>
      </router-link>
      <router-link to="/cart">
        <span class="footer-icon icon-cart"></span>
        <p>购物车</p>
      </router-link>
      <router-link to="/personal">
        <span class="footer-icon icon-personal"></span>
        <p>个人</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "appMain"
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-bottom: 100px;
  }
  .icon-more{
    display: inline-block;
    width: 30px;
    height: 25px;
    background: url("../../../static/img/right_icon.png") no-repeat center;
    background-size: 100% 100%;
  }
  .icon-more-red{
    display: inline-block;
    width: 22px;
    height: 22px;
    background: url("../../../static/img/home_clas_more_red@2x.png") no-repeat center;
    background-size: 100% 100%;
    vertical-align: top;
  }
  .footer-tab{
    display: flex;
    position: fixed;
    width: 100%;
    max-width: 750px;
    bottom:0;
    border-top:1px solid #dcdcdc;
    background-color: #fff;
    .footer-icon{
      display: inline-block;
      width: 100%;
      height: 40px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 22% 40px;
    }
    .icon-home{
      background-image: url("../../../static/img/tab01.png");
    }
    .icon-classify{
      background-image: url("../../../static/img/tab02.png");
    }
    .icon-cart{
      background-image: url("../../../static/img/tab03.png");
    }
    .icon-personal{
      background-image: url("../../../static/img/tab04.png");
    }

    a{
      flex: 1;
      height: 90px;
      text-align: center;
      padding-top: 15px;
      &.router-link-active{
        color: #ed4529;
        .icon-home{
          background-image: url("../../../static/img/tab01-hl.png");
        }
        .icon-classify{
          background-image: url("../../../static/img/tab02-hl.png");
        }
        .icon-cart{
          background-image: url("../../../static/img/tab03-hl.png");
        }
        .icon-personal{
          background-image: url("../../../static/img/tab04-hl.png");
        }
      }
    }
  }
</style>
