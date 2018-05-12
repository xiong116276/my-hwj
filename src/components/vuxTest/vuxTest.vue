<template>
  <div class="login-phone">
    <p>list模式下，默认高度为180px, 如果设置aspect-ratio会根据宽度自动计算高度</p>
    <swiper :list="demo01_list" auto loop dots-position="center" v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper>

    <group >
      <x-switch title="switch" prevent-default v-model="value2" @on-click="switchFun"></x-switch>
    </group>
    <group class="vux-1px">
      <icon type="success"></icon>
      <icon type="info"></icon>
      <icon type="info-circle"></icon>
      <icon type="warn"></icon>
      <icon type="waiting"></icon>
      <icon type="waiting-circle"></icon>
      <icon type="safe-success"></icon>
      <icon type="safe_warn"></icon>
      <icon type="success-circle"></icon>
      <icon type="success-no-circle"></icon>
      <icon type="circle"></icon>
      <icon type="download"></icon>
      <icon type="cancel"></icon>
      <icon type="search"></icon>
      <icon type="clear"></icon>
      <br/>
      <icon type="success" is-msg></icon>
      <icon type="info" is-msg></icon>
      <icon type="warn" is-msg></icon>
      <icon type="waiting" is-msg></icon>
      <icon type="safe_success" is-msg></icon>
      <icon type="safe_warn" is-msg></icon>
    </group>
    <div style="padding:15px;">
      <x-button type="primary" @click.native="toastShow">toast test</x-button>
    </div>

    <group>
      <x-address @on-hide="logHide" @on-show="logShow" :title="title" v-model="value" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择地址" inline-desc="可以设置placeholder" :show.sync="showAddress"></x-address>
    </group>

    <div style="padding: 15px;">
      <x-button @click.native="showLoading" type="primary">Show loading</x-button>
    </div>

    <group>
      <x-switch title="Default popup" v-model="showPopup"></x-switch>
    </group>
    <div>
      <popup v-model="showPopup" height="40%">
        <div class="popup0">
          <popup-header left-text="取消" right-text="确认" title="popup title" @on-click-left="showPopup = false" @on-click-right="showPopup = false"></popup-header>
          <group>
            <x-switch title="Another XSwitcher" v-model="showPopup"></x-switch>
            <x-switch title="Show Toast" prevent-default v-model="value2" @on-click="switchFun"></x-switch>
          </group>
        </div>
      </popup>
    </div>
    <div style="height: 500px"></div>
    <divider>我是有底线的</divider>
  </div>
</template>

<script>
  import { Popup,PopupHeader,Swiper,XSwitch,Icon,Divider,Loading,Group,Cell,Toast,XButton,XAddress,ChinaAddressV4Data } from 'vux';

  export default {
    name: "vuxTest",
    components:{
      Popup,
      PopupHeader,
      Swiper,
      XSwitch,
      Icon,
      Divider,
      Group,
      Cell,
      XButton,
      XAddress,ChinaAddressV4Data
    },
    data:function () {
      return{
        title: '地址选择',
        value: [],
        addressData: ChinaAddressV4Data,
        showAddress: false,
        showPositionValue: false, //是否显示提示
        position: 'center', //提示信息的位置
        toastText: '', // 提示文本
        show1:false,
        text1:'Loading',
        stringValue: '0',
        switchValue: true,
        value2: false,
        demo01_index: 0,
        demo01_list:[{
          url: 'http://www.baidu.com',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
          title: '送你一朵fua'
        }, {
          url: 'javascript:',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
          title: '送你一辆车'
        }, {
          url: 'javascript:',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg',
          title: '送你一次旅行'
        }],
        showPopup:false
      }
    },
    created :function() {
      this.$ajax.get('/api/get-news.php')
        .then(({data}) => {
          console.log(data)
        })
        .catch((error) =>{
          console.log(error)
        });
    },
    mounted:function(){

    },
    methods:{
      demo01_onIndexChange (index) {
        this.demo01_index = index
      },
      doShowAddress () {
        this.showAddress = true;
        setTimeout(() => {
          this.showAddress = false
        }, 2000)
      },
      onShadowChange (ids, names) {
        console.log(ids, names)
      },
      logHide (str) {
        console.log('on-hide', str)
      },
      logShow (str) {
        console.log('on-show')
      },
      toastShow: function() {
        this.$vux.toast.show({
          text:'success',
          type:'success',
        })
      },
      showLoading () {
        this.$vux.loading.show({
          text: 'Loading'
        });
        setTimeout(() => {
          this.$vux.loading.hide()
        }, 2000)
      },
      switchFun (newVal, oldVal) {
        this.value2 = newVal;
        if(this.value2){
          this.$vux.toast.show({
            text: 'switch on',
            type: 'success'
          });
        }else{
          this.$vux.toast.show({
            text: 'switch off',
            type: 'warn'
          });
        }
        setTimeout(() => {
          // this.$vux.loading.hide();
        }, 1000)
      }
    }
  }
</script>

<style lang="scss">
  .popup0 {
    padding-bottom:15px;
    height:200px;
  }
</style>
