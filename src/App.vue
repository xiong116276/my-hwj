<template>
  <div class="main">
    <router-view/>
  </div>
</template>

<script type="es6">

  export default {
    name: 'App',
    mounted: function () {

    }
  }
</script>

<style lang="scss">
  @import "../static/scss/base";

  .main{
    font-size: 28px;
    /*vux 样式修改*/
    .weui-cells{
      .weui-cell{
        font-size: 28px;
      }
    }
    /*switch 按钮*/
    .weui-cell_switch{
      .weui-switch{
        width: 100px;
        height: 50px;
        border-radius: 25px;
        &:checked{
          &:after{
            transform: translateX(50px);
          }
        }
        &:before{
          width: 95px;
          height: 45px;
          border-radius: 50px;
        }
        &:after{
          width: 46px;
          height: 46px;
          border-radius: 50%;
          top:0;
        }
      }
      .vux-x-switch-overlay{
        width: 100%;
        height: 100%;
      }
    }
    /*btns*/
    .weui-btn{
      font-size: 28px;
    }
  }
  /*loadings*/
  .weui-toast{
    .weui-toast__content{
      font-size: 28px;
    }
    .weui-icon_toast{
      &:before{
        font-size: 100px;
      }
      &.weui-loading{
        width: 80px;
        height: 80px;
      }
    }
  }
</style>
