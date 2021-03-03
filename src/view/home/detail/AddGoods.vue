<template>
  <div class="addPage" v-if="goodsData">
    <div class="price" v-if="$store.state.imgs.img">
      <div class="img" ><img  :src="$store.state.imgs.img" alt=""></div>
      <span class="pic">{{$store.getters.getPrice}}￥</span>
      <div class="hd" @click="hd(show)">X</div>
    </div>
    <div class="price" v-else>
      <div class="img" ><img  :src="goodsData.skuInfo.skus[0].img" alt=""></div>
      <span class="pic">{{parseInt((goodsData.skuInfo.skus[0].price)/100)}}￥</span>
      <div class="hd" @click="hd(show)">X</div>
    </div>
    <div class="color">
      <div class="title">
        颜色分类({{ goodsData.skuInfo.props[0].list.length }})
      </div>
      <div>
        <div
          class="style"
          v-for="(item, index) in goodsData.skuInfo.props[0].list"
          :key="index"
          @click="selectColor(index)"
          :class="{ redBorder: index === colorIndex }"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="size">
      <div class="title">尺码</div>
      <div>
        <div
          class="style"
          v-for="(item, index) in goodsData.skuInfo.props[1].list"
          :key="index"
          @click="selectSize(index)"
          :class="{ redBorder: index === sizeIndex }"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="num">
      <div>购买数量</div>
      <div class="bts">
        <div @click="subt">-</div>
        <div>{{ goodsNum }}</div>
        <div @click="add">+</div>
      </div>
    </div>
    <div class="addBt" @click="adds">确认</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      colorIndex: 0,
      sizeIndex: 0,
      goodsNum: 0,
      addGood:[],
    };
  },
  props: {
    showGoodCar: {
      type: Boolean,
      default: false,
    },
    goodsData: {
      type: Object,
      default() {
        return {};
      },
    },
    iid: {
      type: String,
      default: null,
    },
  },
  methods: {
    //减少数量
    subt() {
      if (this.goodsNum > 0) {
        this.goodsNum--;
      }
    },
    add() {
      this.goodsNum++;
    },
    //关闭弹窗
    hd(data) {
      this.$store.commit("showGoodCarT", data);
    },
    //选择颜色款式
    selectColor(data) {
      this.colorIndex = data;
        let styleId=this.returnStyleId()
      let sizeId=this.returnSizeId()
      let goodsList = this.goodsData.skuInfo.skus
      let arry = goodsList.filter(function(item){
        return item.styleId==styleId
      })
      this.$store.commit('imgs',arry[0])
    },
    //选择尺码
    selectSize(data) {
      this.sizeIndex = data;
    
    },
    returnStyleId(){
      let props = this.goodsData.skuInfo.props
      return props[0].list[this.colorIndex].styleId
    },
    returnSizeId(){
      let props = this.goodsData.skuInfo.props
      return props[1].list[this.sizeIndex].sizeId
    },
    adds(){
      let styleId=this.returnStyleId()
      let sizeId=this.returnSizeId()
      let goodsList = this.goodsData.skuInfo.skus
    
      let arry = goodsList.filter(function(item){
        return item.sizeId==sizeId && item.styleId==styleId
      })
      arry[0].num=this.goodsNum
      arry[0].iid=this.iid
      arry[0].title=this.goodsData.itemInfo.desc
      if (arry[0].num!==0) {
      this.$store.commit('goodsDatas',arry[0])
      this.$store.state.showGoodCar=false
      }
    }
  },
};
</script>
<style  scoped>
/* 选择并添加红框样式 */
.redBorder {
  border: 2px solid red;
}
.addPage {
  height: 100%;
}
.hd {
  position: absolute;
  right: 0;
  top: 0;
  height: 1.5rem;
  width: 1.5rem;
  text-align: center;
  line-height: 1.5rem;
  font-size: 1rem;
  background-color: rgb(247, 239, 239);
}
.price {
  height: 20%;
  width: 100%;
  border-bottom: 1px solid rgb(223, 216, 216);
}
.img{
  height: 5rem;
  width: 5rem;
  background-color: yellow;
}
.img>img{
  width: 100%;
  height: 100%;
}
.pic{
  position: absolute;
  left: 6rem;
  top: 2rem;
  font-size: 1.5rem;
}
.title {
  padding: 0.4rem;
  font-size: 0.8rem;
}
.color {
  border-bottom: 1px solid rgb(223, 216, 216);
}
.color > div:last-child,
.size > div:last-child {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.style {
  height: 1.5rem;
  line-height: 0.8rem;
  padding: 0.4rem;
  margin-left: 0.5rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  background-color: rgb(223, 216, 216);
  font-size: 0.8rem;
}
.size {
  height: 20%;
  border-bottom: 1px solid rgb(223, 216, 216);
}
.size .style {
  width: 3rem;
  text-align: center;
}
.num {
  padding-left: 0.4rem;
  display: flex;
  height: 10%;
  border-bottom: 1px solid rgb(223, 216, 216);
}
.num > div {
  margin-top: 0.6rem;
  font-size: 0.8rem;
  flex: 1;
}
.bts {
  text-align: right;
}
.bts > div {
  display: inline-block;
  height: 1.2rem;
  line-height: 1.2rem;
  width: 1.2rem;
  background-color: rgb(231, 228, 228);
  font-size: 1rem;
  text-align: center;
}
.bts > div:first-child {
  background-color: rgb(241, 238, 238);
  color: rgb(202, 200, 200);
}
.bts > div:last-child {
  background-color: rgb(241, 238, 238);
  color: rgb(202, 200, 200);
}
.addBt {
  position: absolute;
  left: 0.45rem;
  bottom: 0.6rem;
  width: 95%;
  height: 2rem;
  border-radius: 1rem;
  background-color: red;
  text-align: center;
  line-height: 2rem;
  font-size: 1rem;
  color: white;
}
</style>