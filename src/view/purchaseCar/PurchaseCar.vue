<template>
  <div class="pCar">
    <div class="head">
      <nav-bar>
        <template v-slot:center>
          <div class="header">购物车 (0)</div>
        </template>
      </nav-bar>
    </div>
    <div class="cars">
    <scroll class="goodsCar">
     <div class="uls">
       <li v-for="item in $store.state.goodsData">
         <div class="box">
           <input type="checkbox">
         </div>
         <img class="imgs" :src="item.img" alt="">
         <div>
           <div class="title">{{item.title}}</div>
           <div class="pric">
             <span>￥{{parseInt(item.price/100)}}</span>
             <span>X{{item.num}}</span>
           </div>
         </div>
       </li>
     </div>
    </scroll>
    </div>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll.vue";
import NavBar from "@/components/common/navbar/NavBar.vue";
export default {
  data() {
    return {};
  },

  components: {
    NavBar,
    Scroll
  },
};
</script>
<style  scoped>
.pCar{
  width: 100%;
  height: 100vh;
}
.header {
  color: white;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
}
.head {
  width: 100%;
  height: 2rem;
  background-color: rgb(255, 142, 150);
  font-size: 0.8rem;
  z-index: 10;
}
.cars{
  width: 100%;
  height: calc(100% - 4rem);
}
.goodsCar{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.uls{
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
.uls>li{
  list-style: none;
  width: 100%;
  height: 8rem;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(65, 57, 57);
  display: flex;
}
.box{
  width: 2rem;
  line-height: 8rem;
}
.box>input{
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
}
.uls>li>div:last-child{
  flex: 1;
}
.imgs{
  width: 4rem;
  height: 6rem;
  margin-top: 1rem;
}
.title{
  width: 10rem;
  height: 2rem;
  font-size: .7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 2.5rem;
  margin-left: .8rem;
}
.pric>span{
  display: inline-block;
  width: 3rem;
  height: 1rem;
  line-height: 1rem;
}
.pric{
  position: relative;
  width: 100%;
}
.pric>span:first-child{
  margin-left: 1rem;
  font-size: .8rem;
  color: rgb(150, 150, 9);
}
.pric>span:last-child{
  font-size: .8rem;
  font-weight: bold;
  position: absolute;
  right: 0;
}
</style>