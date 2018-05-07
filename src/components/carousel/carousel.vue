<template>
  <div class="carousel">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in imgList" :key="index">
        <img :src="item.url" alt="" @click="imgClick(item.href)">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default {
    name: "carousel",
    props:{
      imgList:{type:Array}
    },
    data:function() {
      return {
        swiperOption: {
          loop : true,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          }
        }
      }
    },
    computed: {
      swiper:function () {
        return this.$refs.mySwiper.swiper
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    methods:{
      imgClick:function (url) {
        window.location.href = url;
      }
    }
  }
</script>

<style lang="scss">
  .swiper-container{
    .swiper-slide{
      width: 100%;
      text-align: center;
    }
    .swiper-pagination{
      .swiper-pagination-bullet{
        width: 16px;
        height: 16px;
        &.swiper-pagination-bullet-active{
          background-color: #ed4529;
        }
      }
    }
  }
</style>
