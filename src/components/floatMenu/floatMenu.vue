<template>
  <div id="floatMenu"  class="btn-menu-filter">
    <input type="checkbox" id="checking">
    <div class="btns">
      <router-link to="/classify" class="btn-item"><img src="http://m.360hwj.com/images/search-white.png" alt=""></router-link>
      <router-link to="/home" class="btn-item"><img src="http://m.360hwj.com/images/home-white.png" alt=""></router-link>
      <a href="http://kefu.easemob.com/webim/im.html?tenantId=39070&hide=true&sat=&resources=&ticket=true" class="btn-item">
        <img src="http://m.360hwj.com/images/kefu_white.png" alt="">
      </a>
    </div>
    <label class="bars" for="checking">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </label>

    <svg>
      <defs>
        <filter id="filt">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="5"></feGaussianBlur>
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="filt"></feColorMatrix>
          <feBlend in2="filt" in="SourceGraphic" result="mix"></feBlend>
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
  export default {
    name: "float-menu"
  }
</script>

<style lang="scss">
  .btn-menu-filter{
    position: fixed;
    bottom: 20%;
    right: 50px;
    background-color: #ed4529;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    filter: url("#filt");
    -webkit-filter: url("#filt");
    .btn-item{
      position: absolute;
      top: 0;
      right:0;
      cursor: pointer;
      border: none;
      outline: none;
      width: 100%;
      height: 100%;
      text-align: center;
      border-radius: 50%;
      transition: all 0.2s cubic-bezier(0.8, 0.84, 0.44, 1.3);
      background-color: #ed4529;
      z-index: 10;
      img{
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right:0;
        width: 60%;
      }
    }
    .bars{
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #ed4529;
      z-index: 50;
      border-radius: 50%;
      .bar{
        display: block;
        margin: 0 auto 15px;
        width: 65%;
        height: 7px;
        background-color: #fff;
        border-radius: 15px;
        &:nth-child(1){
          margin-top: 25px;
        }
        transition: all 0.2s linear;
      }
    }
    #checking{
      display: none;
      &:checked{
        ~ .bars{
          .bar{
            &:nth-child(1){
              transform: rotate(45deg);
              margin-top: 50px;
            }
            &:nth-child(2){
              transform: rotate(-45deg);
              margin-top: -20px;
            }
            &:nth-child(3){
              opacity: 0;
            }
          }
        }
        ~ .btns{
          .btn-item {
            @for $i from 0 through 8 {
              &:nth-child(#{$i+1}) {
                transform: rotate((-45*$i)+deg) translate(0, -200px);
                img {
                  transform: rotate(45*$i+deg);
                }
              }
            }
          }
        }
      }
    }
  }
</style>
