<template>
  <div class="detail">
    <div class="head" ref="head">
      <nav-bar>
        <template v-slot:left>
          <span
            @click="back"
            class="glyphicon glyphicon-chevron-left left"
          ></span>
        </template>
        <template v-slot:center>
          <div class="center">
            <div
              v-for="(item, index) in detailTitle"
              :key="index"
              class="sort"
              @click="changurl(index)"
            >
              <div :class="{ clicks: index === titleindex }">{{ item }}</div>
            </div>
          </div>
        </template>
        <template v-slot:right> </template>
      </nav-bar>
    </div>
    <scroll class="detalScro" ref="detalScro" 
    v-if="!objifnull(goodsData)"
    :probe-type="2"
     @scrol="getp">
      <div class="lunbo">
        <lun-bo :banner1="goodsData.itemInfo.topImages"></lun-bo>
      </div>
      <cloth-mes :goodsData="goodsData"></cloth-mes>
      <shop :goodsData="goodsData"></shop>
      <show-cloth :goodsData="goodsData" @imgLoad="imgLoad"></show-cloth>
      <rule ref="rule" :itemParams="goodsData.itemParams"></rule>
      <commit ref="commit" :commit="goodsData.rate.list"></commit>
      <recomend ref="recomend"></recomend>
    </scroll>
    <div class="up" v-show="showy">
      <back-top @click.native="getscro"></back-top>
    </div>
    <div class="bt">
      <bottom :goodsData="goodsData" :iid="iid" ></bottom>
    </div>
    <div class="goodCar" v-if="$store.state.showGoodCar" >
      <add-goods :goodsData="goodsData" :iid="iid"></add-goods>
    </div>
  </div>
</template>

<script>
import Bottom from "./Bottom.vue";
import ClothMes from "./ClothMes.vue";
import Shop from "./Shop.vue";
import ShowCloth from "./ShowCloth.vue";
import Rule from "./Rule.vue";
import Commit from "./Commit.vue";
import Recomend from "./Recomend.vue";
import AddGoods from "./AddGoods.vue";

import { getDetail, ItemDel } from "@/components/network/detail.js";

import BackTop from "@/components/common/backTop/BackTop.vue";
import NavBar from "@/components/common/navbar/NavBar.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
import {debounce} from "@/components/common/utils.js";

import LunBo from "@/view/home/childrenProp/Lunbo.vue";
export default {
  name: "detail",
  data() {
    return {
      iid: null,
      detailTitle: ["商品", "参数", "评论", "推荐"],
      titleindex: 0,
      goodsData: {},
      ifchange: false,
      themeTopys: [],
      getThemeTopy:null,
      showy:false,
    };
  },
  computed: {},
  components: {
    NavBar,
    LunBo,
    Scroll,
    Bottom,
    ClothMes,
    Shop,
    ShowCloth,
    Rule,
    Commit,
    Recomend,
    BackTop,
    AddGoods
  },
  created() {
    this.iid = this.$route.query.iid;
    getDetail(this.iid).then((res) => {
      const items = new ItemDel(res);
      this.goodsData = items.goodsData;
      this.getThemeTopy=debounce(()=>{
        this.themeTopys = [];
      this.themeTopys.push(0);
      this.themeTopys.push(
        -this.$refs.rule.$el.offsetTop + this.$refs.detalScro.$el.offsetTop
      );
      this.themeTopys.push(
        -this.$refs.commit.$el.offsetTop + this.$refs.detalScro.$el.offsetTop
      );
      this.themeTopys.push(
        -this.$refs.recomend.$el.offsetTop + this.$refs.detalScro.$el.offsetTop
      );
      })
    });
  },
  updated() {},
  methods: {
    //监听滑至顶部
    getscro(){
      this.$refs.detalScro.scroll.scrollTo(0,0)
      this.showy=false
    },
    //监听滚动
    getp(data){
      if (this.themeTopys) {
        for (let i in this.themeTopys) {
        i = parseInt(i)
        if ((this.titleindex!=i)&&i<(this.themeTopys.length-1)&&data.y<=this.themeTopys[i]&&data.y>this.themeTopys[i+1]
        ||i===(this.themeTopys.length-1)&&data.y<this.themeTopys[i]) {
         this.titleindex=i
        }
      }
      }
      //监听滚动高度来控制滑动置顶图标的显示
      if (data.y<-4000) {
        this.showy=true
      }else{
        this.showy=false
      }
    },
    //监听详情页导航标题
    changurl(data) {
      this.titleindex = data;
      this.$refs.detalScro.scroll.scrollTo(0, this.themeTopys[this.titleindex]);
      //监听滚动高度来控制滑动置顶图标的显示
      if (this.themeTopys[this.titleindex]<-4000) {
        this.showy=true
      }else{
        this.showy=false
      }
    },
    //监听详情页返回图标
    back() {
      this.$router.back();
    },
    //监听图片加载
    imgLoad() {
      this.$refs.detalScro.refresh;
      this.getThemeTopy()
    },
    objifnull(obj) {
      return Object.keys(obj).length == 0;
    },
  },
};
</script>
<style  scoped>
.bt {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 10;
  height: 3rem;
}
.goodCar{
  position: absolute;
  left: 0;
  bottom: 0;
  height:80vh;
  z-index: 10;
  width: 100%;
  background-color: white;
}
.up{
  position: absolute;
  right: 0;
  bottom: 5rem;
  height: 2rem;
  width: 2rem;
  z-index: 10;
}
.detalScro {
  width: 100%;
  height: calc(100% - 5rem);
  overflow: hidden;
}
.detail {
  position: relative;
  height: 100vh;
}
.head {
  height: 2rem;
  box-shadow: 0.004rem 0.02rem 0.12rem rgb(206, 203, 203);
}
.center {
  display: flex;
  height: 100%;
  width: 100%;
}
.clicks {
  color: rgb(255, 142, 150);
}
.sort {
  flex: 1;
  line-height: 2rem;
}
.sort > div {
  font-size: 0.8rem;
}
.left {
  height: 100%;
  width: 100%;
  line-height: 2rem;
  font-size: 1.2rem;
  text-align: center;
}
.lunbo {
  width: 100%;
  height: 12rem;
  overflow: hidden;
}
</style>