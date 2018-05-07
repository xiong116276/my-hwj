<template>
  <div class="welfare">
    <div class="floor-title">
      <img src="http://m.360hwj.com/images/home-new/home_classify_1@2x.png" alt="">
    </div>
    <div class="content">
      <div>
        <img src="http://static.360hwj.com/group1/M00/05/C1/J2zAA1qrgTGAU8JUAAB4FDb6MvY874.jpg" alt="">
      </div>
      <div>
        <a href="#">
          <img src="http://static.360hwj.com/group1/M00/05/C1/J2zAA1qrgZaATPSrAAA47Ih5BY8888.jpg" alt="">
        </a>
        <a href="#">
          <img src="http://static.360hwj.com/group1/M00/05/C1/J2zAA1qrgbyACpKDAABIJ9HqOHE054.jpg" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "welfare"
  }
</script>

<style lang="scss">
  .welfare{
    margin-top: 10px;
    background-color: #fff;
    .floor-title{
      img{
        width: 30%;
      }
    }

    .content{
      display: flex;
      >div{
        flex: 1;
        overflow: hidden;
        &:last-child{
          border-left: 2px solid #e8e8e8;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          a:first-child{
            border-bottom: 1px solid #e8e8e8;
          }
        }
      }
    }
  }
</style>
