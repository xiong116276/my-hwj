<template>
  <div class="classify-three">
    <div v-if="topData" class="top clearFix">
      <div v-for="(item,index) in topData" class="sort-item" @click="sort(item,index)">
        {{item.text}}
        <img v-if="item.isSort" class="img" :src="[item.iconType===0?iconSort.default:item.iconType===1?iconSort.top_bottom:iconSort.bottom_top]" alt="">
        <img v-else :src="iconSort.filter" alt="">
      </div>
    </div>
    <productList :listData="data"/>
    <floatMenu/>
    <back_top/>
    <filter_popup :popupData="popupData" :showPopup="showPopup" @finish="filter_finish"/>
  </div>
</template>

<script>
  import productList from '@/components/product_list/product_list';
  import floatMenu from '@/components/floatMenu/floatMenu';
  import back_top from '@/components/backTop/backTop';
  import filter_popup from '@/components/filter_popup/filter_popup';

  export default {
    name: "classify-three",
    components:{
      productList,
      floatMenu,
      back_top,
      filter_popup
    },
    data(){
      return{
        iconSort: {
          default:'http://m.360hwj.com/images/top-bottom.png',
          top_bottom:'http://m.360hwj.com/images/bottom-active-top.png',
          bottom_top:'http://m.360hwj.com/images/top-bottom-hl.png',
          filter:'http://m.360hwj.com/images/selection.png'
        },
        topData:[
          {
            iconType:0,
            text:'销量',
            isSort:true
          },
          {
            iconType:0,
            text: '价格',
            isSort:true
          },
          {
            iconType:0,
            text: '筛选',
            isSort:false
          },
        ],
        dataList:[
          {
            goods:[
              {
                goodsId:1,
                img:'http://static.360hwj.com/group1/M00/01/42/wKgCaFkhyhuASJOgAAAldIqpcvw528.JPG',
                name:'修正 抗病毒口服液 10ml*10支',
                price:'25.80'
              },
              {
                goodsId:2,
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
          },
          {
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
          },
          {
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
          },
          {
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
        data:[],
        showPopup:false,
        popupData:[
          {
            title:'品牌',
            content:[
              {
                text:'抚河',
                isSelected:false
              },
              {
                text:'四方箅',
                isSelected:false
              },
              {
                text:'绿婷牌',
                isSelected:false
              },
              {
                text:'神华维康',
                isSelected:false
              },
              {
                text:'九芝堂',
                isSelected:false
              },
              {
                text:'力合健',
                isSelected:false
              },
              {
                text:'999',
                isSelected:false
              },
              {
                text:'四方箅',
                isSelected:false
              },
              {
                text:'绿婷牌',
                isSelected:false
              },
              {
                text:'神华维康',
                isSelected:false
              },
              {
                text:'九芝堂',
                isSelected:false
              },
              {
                text:'力合健',
                isSelected:false
              },
              {
                text:'999',
                isSelected:false
              },
              {
                text:'四方箅',
                isSelected:false
              },
              {
                text:'绿婷牌',
                isSelected:false
              },
              {
                text:'神华维康',
                isSelected:false
              },
              {
                text:'九芝堂',
                isSelected:false
              },
              {
                text:'力合健',
                isSelected:false
              },
              {
                text:'999',
                isSelected:false
              },
              {
                text:'四方箅',
                isSelected:false
              },
              {
                text:'绿婷牌',
                isSelected:false
              },
              {
                text:'神华维康',
                isSelected:false
              },
              {
                text:'九芝堂',
                isSelected:false
              },
              {
                text:'力合健',
                isSelected:false
              },
              {
                text:'999',
                isSelected:false
              },
              {
                text:'四方箅',
                isSelected:false
              },
              {
                text:'绿婷牌',
                isSelected:false
              },
              {
                text:'神华维康',
                isSelected:false
              },
              {
                text:'九芝堂',
                isSelected:false
              },
              {
                text:'力合健',
                isSelected:false
              },
              {
                text:'999',
                isSelected:false
              },
              {
                text:'四方箅',
                isSelected:false
              },
              {
                text:'绿婷牌',
                isSelected:false
              },
              {
                text:'神华维康',
                isSelected:false
              },
              {
                text:'九芝堂',
                isSelected:false
              },
              {
                text:'力合健',
                isSelected:false
              },
              {
                text:'999',
                isSelected:false
              },
              {
                text:'四方箅',
                isSelected:false
              },
              {
                text:'绿婷牌',
                isSelected:false
              },
              {
                text:'神华维康',
                isSelected:false
              },
              {
                text:'九芝堂',
                isSelected:false
              },
              {
                text:'力合健',
                isSelected:false
              },
              {
                text:'999',
                isSelected:false
              },
              {
                text:'四方箅',
                isSelected:false
              },
              {
                text:'绿婷牌',
                isSelected:false
              },
              {
                text:'神华维康',
                isSelected:false
              },
              {
                text:'九芝堂',
                isSelected:false
              },
              {
                text:'力合健',
                isSelected:false
              },
              {
                text:'999',
                isSelected:false
              },
              {
                text:'四方箅',
                isSelected:false
              },
              {
                text:'绿婷牌',
                isSelected:false
              },
              {
                text:'神华维康',
                isSelected:false
              },
              {
                text:'九芝堂',
                isSelected:false
              },
              {
                text:'力合健',
                isSelected:false
              },
              {
                text:'999',
                isSelected:false
              },
              {
                text:'四方箅',
                isSelected:false
              },
              {
                text:'绿婷牌',
                isSelected:false
              },
              {
                text:'神华维康',
                isSelected:false
              },
              {
                text:'九芝堂',
                isSelected:false
              },
              {
                text:'力合健',
                isSelected:false
              },
              {
                text:'999',
                isSelected:false
              },
              {
                text:'四方箅',
                isSelected:false
              },
              {
                text:'绿婷牌',
                isSelected:false
              },
              {
                text:'神华维康',
                isSelected:false
              },
              {
                text:'九芝堂',
                isSelected:false
              },
              {
                text:'力合健',
                isSelected:false
              },
              {
                text:'999',
                isSelected:false
              }
            ],
            contentShow:false,
            isClick:true
          },
          {
            title:'类型',
            content:[
              {
                text:'处方药',
                isSelected:false
              },
              {
                text:'非处方药',
                isSelected:false
              }
            ],
            contentShow:true,
            isClick:true
          },
          {
            title:'价格区间',
            content:{
              price_l:'',
              price_g:''
            },
            contentShow:true,
            isInput:true
          }
        ]
      }
    },
    mounted(){
      this.data.push(this.dataList[this.$route.params.id - 1]);
    },
    methods:{
      sort(item,m){
        if(item.isSort){
          this.topData.forEach((el,n)=>{
            if(el.isSort&&m !== n){
              this.topData[n].iconType = 0;
            }
          });
          switch (item.iconType){
            case 0:item.iconType =1;break;
            case 1:item.iconType =2;break;
            case 2:item.iconType =0;break;
          }
        }else{
          this.showPopup = true;
        }
      },
      filter_finish(data){
        this.showPopup = false ;
        console.log(data)
      }
    }
  }
</script>

<style lang="scss">
  .classify-three{
    padding-top: 80px;
    .top{
      position: fixed;
      width: 100%;
      max-width: 750px;
      top: 0;
      height: 90px;
      line-height: 90px;
      background-color: #fff;
      border-bottom: 2px solid #f3f3f3;
      box-shadow: 0 3px 3px rgba(0,0,0,0.2);
      z-index: 50;
      .sort-item{
        float: left;
        width: 33%;
        height: 100%;
        text-align: center;
        img{
          vertical-align: middle;
          width: 22px;
        }
      }
    }
  }
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
