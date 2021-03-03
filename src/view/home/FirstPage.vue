<template>
  <div class="cso">
     <div class="head">
      <nav-bar>
        <template v-slot:center>
          <div class="header">购物街</div>
        </template>
      </nav-bar>
    </div>
    <div class="thingSort " v-show="show">
      <feature-view :names="titlesName" 
      @fetureclick="getgoodindex"
      ref="featview1"></feature-view>
    </div>
    <!-- 在这里通过绑定，则传入的参数是数值类型，如果不绑定传参，
    则传入的是字符串类型 -->
    <scroll class="cs" ref="ref1" 
    :probe-type="2"
     @scrol="getp"
     :pull-up-load="true"
     @pullingup="loadmore"
     >
      
    <div class="lunbo" v-if="arryifnull(banners)">
      <lun-bo v-bind:banner1="banners" @loaded="loaded"></lun-bo>
    </div>
    <div class="recommend">
      <recom v-bind:recommend1="recommend"></recom>
    </div>
    <div class="bodys">
      <img src="~@/assets/img/05.jpg" alt="" />
    </div>
    <div class="thingSort" >
      <feature-view :names="titlesName" 
      @fetureclick="getgoodindex"
      ref="featview2"></feature-view>
    </div>
    <div class="goods" >
      <goods :goods="goods" :goodtle="goodtle[goodsindex]"></goods>
    </div>
    </scroll>
    <div class="up " v-show="showy">
    <back-top  @click.native="getscro"></back-top>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import FeatureView from "@/components/common/featureview/FeatureView.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
import BackTop from "@/components/common/backTop/BackTop.vue";
import {debounce} from "@/components/common/utils.js";

import Goods from "@/components/content/goods/Goods.vue"
import { getHomeMultiData, getHomeGoods } from "@/components/network/home.js";
import LunBo from "./childrenProp/Lunbo.vue";
import Recom from "./childrenProp/Recom.vue";
export default {
  data() {
    return {
      banners: [],
      recommend: [],
      titlesName: ["流行", "新款", "精选"],
      goodtle:['pop','new','sell'],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      goodsindex:0,
      bt:this.getp,
      showy:false,
      offtop:0,
      show:false,
      savey:null
    };
  },
  props: {},
  components: {
    NavBar,
    LunBo,
    Recom,
    FeatureView,
    Goods,
    Scroll,
    BackTop
  },
  created: function () {
    this.getHomeMulti();
    this.getGoods('pop')
    this.getGoods('new')
    this.getGoods('sell')
    
  },
  methods: {
    //判断数组是否为空
    arryifnull(data){
      return data.length > 0
    },
    //轮播图片加载完成
    loaded(){
      this.offtop=this.$refs.featview2.$el.parentNode.offsetTop
    },
    getp(data){
      //判断回到顶部上箭头图片是否显示
      this.showy = data.y<-1000
      //标题吸附置顶操作
      this.show=(-data.y>this.offtop)
    },
    getscro(){
      this.$refs.ref1.scroll.scrollTo(0,0)
    },
    //加载更多
    loadmore(){
      this.getGoods(this.goodtle[this.goodsindex])
      // this.$refs.ref1.scroll.finishPullUp()
      
    },
    getHomeMulti() {
      getHomeMultiData().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    getGoods(type) {
      const page = this.goods[type].page+1
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page+=1
        this.$refs.ref1.finishPull()
     });
    },
    getgoodindex(data){
      this.goodsindex=data
      this.$refs.featview1.nowindex=data
      this.$refs.featview2.nowindex=data
    }
  },
  //处理返回首页无法滚动，以及首页保持浏览数据
  activated() {
    this.$refs.ref1.scroll.scrollTo(0,this.savey)
  },
  deactivated() {
    this.savey=this.$refs.ref1.scroll.y
  },
  mounted() {
    //导航标题吸附置顶
     //防抖操作
    const refresh = debounce(this.$refs.ref1.refresh,500)

    //监听图片加载,$bus是vue事件总线,放在mounted中可以防止刷新频繁
    this.$bus.$on('imgsload',()=>{
      refresh()
    })
   

  },
};
</script>
<style  scoped>
/* @import "../../assets/css/base.css"; */
.cso{
  position: relative;
  height: 100vh;
}
.cs{
  overflow: hidden;
  /* margin-top: 2rem; */
  height: calc(100% - 2rem);
}
.header {
  color: white;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
}
.head {
  /* 原生滚动时，为了让导航不跟随一起滚动
  position: fixed;
  left: 0;
  top: 0; */
  height: 2rem;
  width: 100%;
  background-color: rgb(255, 142, 150);
  font-size: 0.8rem;
}
.thingSort {
  height: 2rem;
  font-size: 0.6rem;
  background-color: white;
}
.bodys {
  margin-top: 0.3rem;
  height: 5rem;
  width: 100%;
  background-color: white;
}
.bodys img {
  width: 100%;
  height: 100%;
}
.lunbo {
  width: 100%;
  height: 7rem;
  background-color: rgb(255, 142, 150);
  /* margin-top: 2rem; */
}
.recommend {
  background-color: white;
  height: 4rem;
}
.goods{
  width: 100%;
  background-color: white;
  margin-top: .2rem;
}
.up{
  position: absolute;
  bottom: 4rem;
  right: 0;
  width: 2rem;
  height: 2rem;
}
.bt{
  display: none;
}
</style>