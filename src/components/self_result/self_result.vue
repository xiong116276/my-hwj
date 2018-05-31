<template>
  <div id="self_result">
    <div class="top clearFix">
      <div class="top-item" @click="showList"><span class="type-show" :class="{active:isShowList}">{{typeShow}}</span></div>
      <div class="top-item" @click="sort">价格 <img class="icon-sort" :src="sortImg" alt=""></div>
      <div class="top-item">
        <div @click="filter">筛选 <img class="icon-filter" :src="icons.filter" alt=""></div>
      </div>

      <div class="show-list" v-if="isShowList">
        <div class="mask" @click="isShowList = false"></div>
        <div class="content">
          <div class="left">
            <span v-for="(item,index) in listLeft" class="item" :class="{active: leftNum === index}" @click="leftClick(index)">{{item}}</span>
          </div>
          <div class="right">
            <span v-for="(item,index) in listRight" class="item" :class="{active: rightNum === index}" @click="rightClick(index)">{{item}}</span>
          </div>
        </div>
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
    name: "self_result",
    components:{
      productList,
      floatMenu,
      back_top,
      filter_popup
    },
    data(){
      return{
        icons: {
          default:'http://m.360hwj.com/images/top-bottom.png',
          top_bottom:'http://m.360hwj.com/images/bottom-active-top.png',
          bottom_top:'http://m.360hwj.com/images/top-bottom-hl.png',
          filter:'http://m.360hwj.com/images/selection.png'
        },
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
        ],//商品数据列表
        data:[],//显示的商品列表
        typeNum:0,//列表类型（部位/科室）
        typeData:[],//选择列表（部位/科室）
        typeShow:'',//显示选择的（部位/科室）
        isShowList:false,//选择列表显示
        listLeft:[],
        leftNum:0,
        listRight:[],
        rightNum:'',
        num:'',
        sortImg:'',//排序图标
        parts:[
          {
            text:'神经血液系统',
            classifyTwo:[
              {
                text:'神经痛',
                id: '000',
              },
              {
                text:'血压异常',
                id: '001',
              },
              {
                text:'血糖异常',
                id: '002',
              },
              {
                text:'补益调节',
                id: '003',
              },
              {
                text:'睡眠障碍',
                id: '004',
              },
              {
                text:'体温异常',
                id: '005',
              },
              {
                text:'高血脂',
                id: '006',
              },
              {
                text: '其它',
                id: '007',
              }
            ]
          },
          {
            text:'头部',
            classifyTwo:[
              {
                text:'头痛头疼',
                id: '010'
              },
              {
                text:'头晕头昏',
                id: '011'
              },
              {
                text:'脱发白发',
                id: '012'
              },
              {
                text:'脑部疾病',
                id: '013'
              }
            ]
          },
          {
            text:'眼睛',
            classifyTwo:[
              {
                text:'屈光不正',
                id: '020',
              },
              {
                text:'红眼痛痒',
                id: '021',
              },
              {
                text:'麦粒肿',
                id: '022',
              },
              {
                text:'飞蚊症',
                id: '023',
              }
            ]
          },
          {
            text:'颈肩部',
            classifyTwo:[
              {
                text:'屈光不正',
                id: '030',
              },
              {
                text:'红眼痛痒',
                id: '031',
              },
              {
                text:'麦粒肿',
                id: '032',
              },
              {
                text:'飞蚊症',
                id: '033',
              }
            ]
          },
          {
            text:'鼻子',
            classifyTwo:[
              {
                text:'屈光不正',
                id: '040',
              },
              {
                text:'红眼痛痒',
                id: '041',
              },
              {
                text:'麦粒肿',
                id: '042',
              },
              {
                text:'飞蚊症',
                id: '043',
              }
            ]
          },
          {
            text:'口咽部',
            classifyTwo:[
              {
                text:'屈光不正',
                id: '050',
              },
              {
                text:'红眼痛痒',
                id: '051',
              },
              {
                text:'麦粒肿',
                id: '052',
              },
              {
                text:'飞蚊症',
                id: '053',
              }
            ]
          },
          {
            text:'耳朵',
            classifyTwo:[
              {
                text:'屈光不正',
                id: '060',
              },
              {
                text:'红眼痛痒',
                id: '061',
              },
              {
                text:'麦粒肿',
                id: '062',
              },
              {
                text:'飞蚊症',
                id: '063',
              }
            ]
          },
          {
            text:'胸部',
            classifyTwo:[
              {
                text:'屈光不正',
                id: '070',
              },
              {
                text:'红眼痛痒',
                id: '071',
              },
              {
                text:'麦粒肿',
                id: '072',
              },
              {
                text:'飞蚊症',
                id: '073',
              }
            ]
          },
          {
            text:'腹部',
            classifyTwo:[
              {
                text:'屈光不正',
                id: '080',
              },
              {
                text:'红眼痛痒',
                id: '081',
              },
              {
                text:'麦粒肿',
                id: '082',
              },
              {
                text:'飞蚊症',
                id: '083',
              }
            ]
          },
          {
            text:'四肢',
            classifyTwo:[
              {
                text:'屈光不正',
                id: '090',
              },
              {
                text:'红眼痛痒',
                id: '091',
              },
              {
                text:'麦粒肿',
                id: '092',
              },
              {
                text:'飞蚊症',
                id: '093',
              }
            ]
          },
          {
            text:'生殖、肛部'
          },
          {
            text:'皮肤'
          }
        ],//部位列表
        departments:[
          {
            "title":"内科",
            "classifyTwo":[
              {
                "title":"呼吸内科",
                "goods":[
                  {
                    "id":1000,
                    "text":"哮喘"
                  },
                  {
                    "id":1001,
                    "text":"支气管炎"
                  },
                  {
                    "id":1002,
                    "text":"流行性感冒"
                  },
                  {
                    "id":1003,
                    "text":"感冒"
                  },
                  {
                    "id":1004,
                    "text":"肺炎"
                  }
                ]
              },
              {
                "title":"肾内科",
                "goods":[
                  {
                    "text":"肾病",
                    "id":1010
                  },
                  {
                    "text":"肾炎",
                    "id":1011
                  },
                  {
                    "text":"肾盂肾炎",
                    "id":1012
                  },
                  {
                    "text":"肾功能衰竭",
                    "id":1013
                  },
                  {
                    "text":"狼疮性肾炎",
                    "id":1014
                  },
                  {
                    "text":"尿毒症",
                    "id":1015
                  }
                ]
              },
              {
                "title":"心脑血管",
                "goods":[
                  {
                    "text":"心绞痛"
                  },
                  {
                    "text":"血压异常"
                  },
                  {
                    "text":"血脂异常"
                  },
                  {
                    "text":"脑血管疾病"
                  },
                  {
                    "text":"心血管疾病"
                  }
                ]
              },
              {
                "title":"儿科用药",
                "goods":[
                  {
                    "text":"小儿腹泻腹痛"
                  },
                  {
                    "text":"小儿感冒退热"
                  },
                  {
                    "text":"小儿止咳化痰"
                  },
                  {
                    "text":"小儿清热解毒"
                  },
                  {
                    "text":"小儿咽喉炎"
                  },
                  {
                    "text":"小儿驱虫化积"
                  },
                  {
                    "text":"小儿健脾消食"
                  },
                  {
                    "text":"维生素矿物质"
                  },
                  {
                    "text":"其它补益"
                  }
                ]
              }
            ]
          },
          {
            "title":"外科",
            "classifyTwo":[
              {
                "title":"普外科",
                "goods":[
                  {
                    "text":"验孕排卵"
                  },
                  {
                    "text":"卫生耗材"
                  },
                  {
                    "text":"血糖试纸"
                  },
                  {
                    "text":"家庭常备"
                  },
                  {
                    "text":"辅助器材"
                  }
                ]
              },
              {
                "title":"品牌分类",
                "goods":[
                  {
                    "text":"验孕排卵"
                  },
                  {
                    "text":"卫生耗材"
                  },
                  {
                    "text":"血糖试纸"
                  },
                  {
                    "text":"家庭常备"
                  },
                  {
                    "text":"辅助器材"
                  }
                ]
              },
              {
                "title":"血压计",
                "goods":[
                  {
                    "text":"验孕排卵"
                  },
                  {
                    "text":"卫生耗材"
                  },
                  {
                    "text":"血糖试纸"
                  },
                  {
                    "text":"家庭常备"
                  },
                  {
                    "text":"辅助器材"
                  }
                ]
              },
              {
                "title":"体温计",
                "goods":[
                  {
                    "text":"验孕排卵"
                  },
                  {
                    "text":"卫生耗材"
                  },
                  {
                    "text":"血糖试纸"
                  },
                  {
                    "text":"家庭常备"
                  },
                  {
                    "text":"辅助器材"
                  }
                ]
              }
            ]
          },
          {
            "title":"肝胆科",
            "classifyTwo":[
              {
                "title":"肝胆科",
                "goods":[
                  {
                    "text":"感冒解表"
                  },
                  {
                    "text":"支气管炎/咳嗽"
                  },
                  {
                    "text":"解热镇痛"
                  },
                  {
                    "text":"清热解毒"
                  },
                  {
                    "text":"咽喉炎"
                  }
                ]
              }
            ]
          },
          {
            "title":"男科",
            "classifyTwo":[
              {
                "title":"男科疾病",
                "goods":[
                  {
                    "text":"感冒解表"
                  },
                  {
                    "text":"支气管炎/咳嗽"
                  },
                  {
                    "text":"解热镇痛"
                  },
                  {
                    "text":"清热解毒"
                  },
                  {
                    "text":"咽喉炎"
                  }
                ]
              }
            ]
          },
          {
            "title":"妇产科",
            "classifyTwo":[
              {
                "title":"妇科",
                "goods":[
                  {
                    "text":"感冒解表"
                  },
                  {
                    "text":"支气管炎/咳嗽"
                  },
                  {
                    "text":"解热镇痛"
                  },
                  {
                    "text":"清热解毒"
                  },
                  {
                    "text":"咽喉炎"
                  }
                ]
              }
            ]
          },
          {
            "title":"儿科",
            "classifyTwo":[
              {
                "title":"小儿科疾病",
                "goods":[
                  {
                    "text":"感冒解表"
                  },
                  {
                    "text":"支气管炎/咳嗽"
                  },
                  {
                    "text":"解热镇痛"
                  },
                  {
                    "text":"清热解毒"
                  },
                  {
                    "text":"咽喉炎"
                  }
                ]
              }
            ]
          },
          {
            "title":"皮肤性病",
            "classifyTwo":[
              {
                "title":"皮肤科",
                "goods":[
                  {
                    "text":"感冒解表"
                  },
                  {
                    "text":"支气管炎/咳嗽"
                  },
                  {
                    "text":"解热镇痛"
                  },
                  {
                    "text":"清热解毒"
                  },
                  {
                    "text":"咽喉炎"
                  }
                ]
              }
            ]
          },
          {
            "title":"心理精神",
            "classifyTwo":[
              {
                "title":"心理健康",
                "goods":[
                  {
                    "text":"感冒解表"
                  },
                  {
                    "text":"支气管炎/咳嗽"
                  },
                  {
                    "text":"解热镇痛"
                  },
                  {
                    "text":"清热解毒"
                  },
                  {
                    "text":"咽喉炎"
                  }
                ]
              }
            ]
          },
          {
            "title":"五官科",
            "classifyTwo":[
              {
                "title":"耳鼻喉科",
                "goods":[
                  {
                    "text":"感冒解表"
                  },
                  {
                    "text":"支气管炎/咳嗽"
                  },
                  {
                    "text":"解热镇痛"
                  },
                  {
                    "text":"清热解毒"
                  },
                  {
                    "text":"咽喉炎"
                  }
                ]
              },
              {
                "title":"眼科",
                "goods":[
                  {
                    "text":"感冒解表"
                  },
                  {
                    "text":"支气管炎/咳嗽"
                  },
                  {
                    "text":"解热镇痛"
                  },
                  {
                    "text":"清热解毒"
                  },
                  {
                    "text":"咽喉炎"
                  }
                ]
              }
            ]
          },
          {
            "title":"检查科",
            "classifyTwo":[
              {
                "title":"体检",
                "goods":[
                  {
                    "text":"感冒解表"
                  },
                  {
                    "text":"支气管炎/咳嗽"
                  },
                  {
                    "text":"解热镇痛"
                  },
                  {
                    "text":"清热解毒"
                  },
                  {
                    "text":"咽喉炎"
                  }
                ]
              }
            ]
          }
        ],//科室列表
        showPopup:false,//筛选弹框显示隐藏
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
        ],//筛选弹框数据
      }
    },
    mounted(){
      this.sortImg = this.icons.default;
      this.type(this.$route.params.id.trim());
    },
    methods:{
      type(id){
        this.data.push(this.dataList[0]);
        this.typeNum = parseInt(id.slice(0,1));
        if(this.typeNum===0){
          let i = parseInt(id.slice(1,2));
          let i2 = parseInt(id.slice(2));
          this.typeData = this.parts;
          this.typeShow = this.typeData[i].classifyTwo[i2].text;
          this.leftNum = i;
          this.rightNum = i2;
          this.typeData.forEach((item,index)=>{
            this.listLeft.push(item.text);
          });
          this.typeData[this.leftNum].classifyTwo.forEach((item,index) => {
            this.listRight.push(item.text);
          });
        }else if(this.typeNum===1){
          let i = parseInt(id.slice(1,2));
          let i2 = parseInt(id.slice(2,3));
          let i3 = parseInt(id.slice(3));
          this.typeData = this.departments;
          this.typeShow = this.typeData[i].classifyTwo[i2].goods[i3].text;
          this.leftNum = i;
          this.rightNum = i2;
          this.typeData.forEach((item,index)=>{
            this.listLeft.push(item.title);
          });
          this.typeData[this.leftNum].classifyTwo.forEach((item,index) => {
            item.goods.forEach((v,k) => {
              this.listRight.push(v.text);
            })
          });
        }

      },
      showList(){
        this.isShowList = this.isShowList?false:true;
      },
      leftClick(index){
        this.leftNum = index;
        this.listRight = [];
        this.rightNum = '';
        if(this.typeNum === 0){
          this.typeData[this.leftNum].classifyTwo.forEach((item,index) => {
            this.listRight.push(item.text);
          });
        }else if(this.typeNum === 1){
          this.typeData[this.leftNum].classifyTwo.forEach((item,index) => {
            item.goods.forEach((v,k) => {
              this.listRight.push(v.text);
            })
          });
        }
      },
      rightClick(index){
        this.rightNum = index;
        this.typeShow = this.listRight[index];
      },
      sort(){
        switch(this.sortImg){
          case this.icons.default:this.sortImg = this.icons.top_bottom;break;
          case this.icons.top_bottom:this.sortImg = this.icons.bottom_top;break;
          case this.icons.bottom_top:this.sortImg = this.icons.default;break;
        }
      },
      filter(){
        this.showPopup = true;
      },
      filter_finish(data){
        this.showPopup = false ;
        console.log(data)
      }
    }
  }
</script>

<style lang="scss">
@import "./self_result";
</style>
