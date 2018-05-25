<template>
  <div class="detail">
    <div class="detail-banner">
      <div class="goods-type"><img :src="goodsDetail.type" alt=""></div>
      <swiper :list="goodsDetail.banner_list" :aspect-ratio="1" auto loop dots-position="center"
              v-model="goodsDetail.banner_index" @on-index-change="onIndexChange"></swiper>
    </div>
    <div class="goods-content border-1px">
      <p class="goods-name"><span class="ziying" v-if="goodsDetail.ziying">自营</span>{{goodsDetail.name}}</p>
      <div class="goods-price clearFix">
        <p class="price"><span><small>￥</small>{{goodsDetail.price}}</span> <span class="marketPrice">￥{{goodsDetail.marketPrice}}</span></p>
        <span class="sales">销售{{goodsDetail.sales}}件</span>
      </div>
      <div class="goods-funcs">
        <div v-for="item in goodsDetail.funcs" class="item">
          <span class="title">{{item.title}} :</span><span class="content">{{item.content}}</span>
        </div>
      </div>
      <div class="goods-ensure">
        <div v-for="item in goodsCommon.ensure" class="item">
          <img :src="item.img" alt=""><span>{{item.text}}</span>
        </div>
      </div>
      <div class="goods-discount">
        <div class="title"><span>可享受以下优惠</span></div>
        <div class="content">
          <div class="left">促销</div>
          <div class="right">
            <div v-for="item in goodsDetail.discount" class="item">
              <span class="icon border-1px">{{item.type}}</span>
              <span class="text">{{item.text}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="goods-img-show"><img :src="goodsCommon.imagesShow.prompt" alt=""></div>
      <!--说明书-->
      <div class="goods-spec">
        <table>
          <tr class="item border-1px" v-for="item in goodsDetail.spec">
            <td class="title" v-html="item.title"></td>
            <td class="text" v-html="item.text"></td>
          </tr>
        </table>
      </div>
      <div class="goods-img-show">
        <img v-for="item in goodsDetail.banner_list" :src="item.img" alt="">
      </div>
      <div class="goods-img-show">
        <img :src="goodsCommon.imagesShow.aptitude" alt="">
        <img :src="goodsCommon.imagesShow.widgets" alt="">
      </div>
      <recommond :list-data="goodsDetail.recommend"/>
      <div class="goods-footer border-1px">
        <div class="left">
          <div class="item border-1px">
            <p class="icon icon-kefu"></p>
            <p>客服</p>
          </div>
          <div class="item border-1px" @click="collect">
            <p class="icon" :class="[goodsDetail.isCollected?goodsDetail.iconCollected:goodsDetail.iconCollect]"></p>
            <p>收藏</p>
          </div>
          <div class="item border-1px">
            <p class="icon icon-cart-font"></p>
            <p>购物车</p>
          </div>
        </div>
        <div class="right">
          <div class="btn-add-cart border-1px" title="Default popup" @click="popup($event)">加入购物车</div>
          <div class="btn-buy border-1px" @click="popup($event)">立即购买</div>
        </div>
      </div>
      <div class="detail-btn-search">
        <img :src="iconSearch" alt="" @click="btnSearch">
        <div class="search-content" :class="{active:isSearch}">
          <input type="search" v-model="searchContent" placeholder="搜索商品">
        </div>
      </div>
      <popup class="goods-popup" v-model="showPopup">
        <div class="top border-1px">
          <div class="item-popup-img">
            <img :src="goodsDetail.banner_list[0].img" alt="">
          </div>
          <div class="item-popup-text">
            <p class="name">{{goodsDetail.name}}</p>
            <p class="price"><small>￥</small>{{goodsDetail.price}}</p>
          </div>
        </div>
        <div class="middle">
          <div class="item">
            <p class="title">规格</p>
            <p class="guige clearFix">
              <span class="item border-1px active">{{goodsDetail.guige}}</span>
            </p>
          </div>
          <div class="item">
            <p class="title">购买数量</p>
            <div class="count-edit border-1px clearFix">
              <span class="btn btn-reduce" @click="reduce">-</span>
              <input class="border-1px" type="number" v-model="goodsCount" @input="input">
              <span class="btn btn-add" @click="add">+</span>
            </div>
          </div>
        </div>
        <div class="bottom">{{popupBottomText}}</div>
      </popup>
    </div>
  </div>
</template>

<script>
  import {Swiper,Popup} from 'vux';
  import recommond from '@/components/product_list/product_list';
  export default {
    name: "detail",
    components: {
      Swiper,
      Popup,
      recommond
    },
    data() {
      return {
        goodsCommon: {
          ensure: [
            {
              img: 'http://m.360hwj.com/images/detail/qualification-01@2x.png',
              text: '正品保障'
            },
            {
              img: 'http://m.360hwj.com/images/detail/qualification-02@2x.png',
              text: '实体连锁'
            },
            {
              img: 'http://m.360hwj.com/images/detail/qualification-03@2x.png',
              text: '药师服务'
            },
            {
              img: 'http://m.360hwj.com/images/detail/qualification-04@2x.png',
              text: '隐私发货'
            }
          ],
          imagesShow: {
            prompt: 'http://static.360hwj.com/group1/M00/03/29/J2zAA1mCz7eACGiBAAGxTOxCCt8432.jpg',
            aptitude: 'http://static.360hwj.com/group1/M00/08/DF/J2zAA1m_amqAIpt0AAZm4vtNVSs779.png',
            widgets: 'http://static.360hwj.com/group1/M00/02/A6/J2zAA1l6oPiAGiEaAAX8jNsjhA4910.jpg'
          }
        },
        goodsDetail: {
          banner_index: 0,
          banner_list: [
            {
              img: 'http://image.360hwj.com/goods/926585/407f0664-3132-4300-8327-9a19f934218c!source.hwj.jpg'
            },
            {
              img: 'http://image.360hwj.com/goods/926585/d537735b-c950-444c-9797-186c585d1b50!source.hwj.jpg'
            },
            {
              img: 'http://image.360hwj.com/goods/926585/a74ab7f0-bb47-41a5-b1e4-9afe0c6df44b!source.hwj.jpg'
            },
            {
              img: 'http://image.360hwj.com/goods/926585/4668252a-8c78-4a29-b094-a7e039ed93d9!source.hwj.jpg'
            },
            {
              img: 'http://image.360hwj.com/goods/926585/7b275b18-7c5b-419e-8b58-d7c014e79da3!source.hwj.jpg'
            }
          ],//详情页商品轮播图片
          type: 'http://m.360hwj.com/images/detail/icon_3.png',//商品OTC规格图片
          ziying:true,//自营图标
          name: '同仁堂 牛黄清胃丸 6克*10丸',//商品名称
          price: '9.00',//显示价格
          marketPrice: '9.00',//市场价格
          sales: 0,//已售件数
          stock:48,//库存
          guige:'6克*10丸',
          funcs: [
            {
              title:'功能主治',
              content:'清热祛湿，凉血解毒。用于风热感冒、流感。'
            },
            {
              title:'生产厂家',
              content:'辽宁修正生物制药有限公司'
            }
          ],//功能主治、生产厂家
          discount: [
            {
              type:'立减',
              text:'首单立减'
            },
            {
              type:'免邮',
              text:'全场满58元免运费'
            }
          ],//优惠活动
          spec: [//说明书
            {
              title:'商品编号',
              text: '2020254'
            },
            {
              title:'商品类型',
              text: 'OTC药乙'
            },
            {
              title:'功能主治',
              text: '清热祛湿，凉血解毒。用于风热感冒、流感。'
            },
            {
              title:'生产厂家',
              text: '辽宁修正生物制药有限公司'
            },
            {
              title:'批准文号',
              text: '国药准字Z10890023 <br> <a href="http://app1.sfda.gov.cn/datasearch/face3/dir.html" target="_blank" style="color:#025dbe">国家食药局查询</a>'
            },
            {
              title:'产品规格',
              text: '10ml*10支/盒'
            },
            {
              title:'用法用量',
              text: '口服，一次10毫升，一日2-3次(早饭前和午、晚饭后各服一次)。'
            },
            {
              title:'通用名称',
              text: '抗病毒口服液'
            },
            {
              title:'不良反应',
              text: '尚不明确'
            },
            {
              title:'禁忌',
              text: '孕妇、哺乳期妇女禁用'
            }
          ],
          recommend: [
            {
              title:{
                text:{
                  text:'药师推荐',
                  icon:'http://m.360hwj.com/images/detail/icon_doctor.png'
                }
              },
              goods:[
                {
                  "id": 6337,
                  "img": "http://image.360hwj.com/goods/906342/df6205b7-75a4-4ff3-84d3-2ed3c0852b05!200x200.jpg",
                  "marketPrice": "9.00",
                  "name": "同仁堂 牛黄清胃丸 6克*10丸",
                  "price": "9.00",
                  "sales": 0,
                  "specificationId": 0,
                  "specificationName": "",
                  "stock": 48,
                  "tagId": 4,
                  "unit": "盒",
                  "ziying": true
                },
                {
                  "id": 12626,
                  "img": "http://image.360hwj.com/goods/907880/897e1493-c4a2-41f0-8573-b9beeff455aa!200x200.jpg",
                  "marketPrice": "6.80",
                  "name": "鉴康 清热暗疮丸 36s*1板",
                  "price": "6.80",
                  "sales": 0,
                  "specificationId": 0,
                  "specificationName": "",
                  "stock": 7,
                  "tagId": 1,
                  "unit": "盒",
                  "ziying": true
                },
                {
                  "id": 17796,
                  "img": "http://image.360hwj.com/goods/907880/897e1493-c4a2-41f0-8573-b9beeff455aa!200x200.jpg",
                  "marketPrice": "3.80",
                  "name": "明太医 拔毒膏 0.5g*5贴",
                  "price": "3.80",
                  "sales": 5,
                  "specificationId": 0,
                  "specificationName": "",
                  "stock": 43,
                  "tagId": 1,
                  "unit": "盒",
                  "ziying": true
                },
                {
                  "id": 2474,
                  "img": "http://image.360hwj.com/goods/926518/67b496c8-69a0-492b-8b27-de40c2d06610!200x200.jpg",
                  "marketPrice": "0.00",
                  "name": "泰康 丁细牙痛胶囊 0.45g*12粒*2板",
                  "price": "0.00",
                  "sales": 0,
                  "specificationId": 0,
                  "specificationName": "",
                  "stock": 0,
                  "tagId": 2,
                  "unit": "盒",
                  "ziying": true
                },
                {
                  "id": 20481,
                  "img": "http://image.360hwj.com/goods/902652/2db9db7a-89b1-4e73-af8b-782c204c2b69!200x200.jpg",
                  "marketPrice": "24.00",
                  "name": "修正 板蓝根颗粒 10g*14袋",
                  "price": "24.00",
                  "sales": 0,
                  "specificationId": 0,
                  "specificationName": "",
                  "stock": 56,
                  "tagId": 3,
                  "unit": "盒",
                  "ziying": true
                },
                {
                  "id": 16681,
                  "img": "http://image.360hwj.com/goods/900872/c93e5d78-4bc4-46db-91e0-025a7cef7647!200x200.jpg",
                  "marketPrice": "7.00",
                  "name": "盘龙 痛风舒片 0.33g/片*2*15片",
                  "price": "7.00",
                  "sales": 0,
                  "specificationId": 0,
                  "specificationName": "",
                  "stock": 59,
                  "tagId": 4,
                  "unit": "盒",
                  "ziying": true
                },
                {
                  "id": 12479,
                  "img": "http://image.360hwj.com/goods/933052/a834376a-0ee0-461c-b177-fe0e89f4ffdb!200x200.jpg",
                  "marketPrice": "6.50",
                  "name": "德济 银黄胶囊 0.3g*12s*4板",
                  "price": "6.50",
                  "sales": 5,
                  "specificationId": 0,
                  "specificationName": "",
                  "stock": 0,
                  "tagId": 2,
                  "unit": "盒",
                  "ziying": true
                },
                {
                  "id": 1356,
                  "img": "http://image.360hwj.com/goods/930824/5a31bcf5-df01-48c5-be1e-3a477e8ab189!200x200.jpg",
                  "marketPrice": "7.50",
                  "name": "仁和 板蓝根颗粒 10g*20袋",
                  "price": "7.50",
                  "sales": 0,
                  "specificationId": 0,
                  "specificationName": "",
                  "stock": 5,
                  "tagId": 3,
                  "unit": "包",
                  "ziying": true
                },
                {
                  "id": 1387,
                  "img": "http://image.360hwj.com/goods/908203/ad80728c-e86a-4bd8-bc0c-64e0f61da636!200x200.jpg",
                  "marketPrice": "9.50",
                  "name": "香雪 板蓝根颗粒 10g*20袋",
                  "price": "9.50",
                  "sales": 11,
                  "specificationId": 0,
                  "specificationName": "",
                  "stock": 168,
                  "tagId": 3,
                  "unit": "包",
                  "ziying": true
                },
                {
                  "id": 7293,
                  "img": "http://image.360hwj.com/goods/930912/5733765b-b0e1-490c-8ca0-a812a9b175b5!200x200.jpg",
                  "marketPrice": "6.70",
                  "name": "恩施 三黄片 24片*3板",
                  "price": "6.70",
                  "sales": 0,
                  "specificationId": 0,
                  "specificationName": "",
                  "stock": 25,
                  "tagId": 2,
                  "unit": "盒",
                  "ziying": true
                }
              ]
            }
          ],//推荐商品
          isCollected:false,
          iconCollect:'icon-collect',
          iconCollected:'icon-collected',
        },
        showPopup:false,
        goodsCount:1,
        popupBottomText:'加入购物车',
        iconSearch:'http://m.360hwj.com/images/search/search-active-white.png',
        searchContent:'',
        isSearch:false
      }
    },
    mounted: function () {
      console.log(this.$route.params.id);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this.dots('vux-icon-dot', 8);
      this.border1px();
    },
    methods: {
      onIndexChange: function (index) {

      },
      collect:function(){
        if(this.goodsDetail.isCollected){
          this.goodsDetail.isCollected = false;
          this.$vux.toast.show({
            text:'操作成功',
            isShowMask:true
          })
        }else{
          this.goodsDetail.isCollected = true;
          this.$vux.toast.show({
            text:'收藏成功',
            isShowMask:true
          })
        }
      },
      popup:function(event){
        let e = event.target;
        this.showPopup = true;
        this.popupBottomText = e.innerHTML;
      },
      reduce:function(){
        if(this.goodsCount > 1 ){
          this.goodsCount --
        }else{
          this.$vux.toast.show({
            text:'数量最少为1',
            type: 'warn',
            isShowMask:true
          })
        }
      },
      add:function(){
        if(this.goodsCount < this.goodsDetail.stock ){
          this.goodsCount ++
        }else{
          this.$vux.toast.show({
            text:'已达到库存最大数量',
            type: 'warn',
            isShowMask:true
          })
        }
      },
      input:function(){
        if(this.goodsCount < 1){
          this.goodsCount = 1
        }else if(this.goodsCount > this.goodsDetail.stock){
          this.$vux.toast.show({
            text:'已达到库存最大数量',
            type: 'warn',
            isShowMask:true
          });
          this.goodsCount = this.goodsDetail.stock;
        }
      },
      btnSearch:function(){
        this.isSearch = this.isSearch?false:true;
      }
    }
  }
</script>

<style lang="scss">
  @import "./detail";
</style>
