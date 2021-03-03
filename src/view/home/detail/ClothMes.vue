<template>
    <div class="clothData">
        <div class="title">{{ goodsData.itemInfo.title }}</div>
        <div class="price">
          <span class="nowprice">￥{{ goodsData.itemInfo.lowNowPrice }}</span>
          <span class="oldprice">{{ goodsData.itemInfo.oldPrice }}</span>
          <span class="pic" v-if="goodsData.itemInfo.discountDesc" >{{goodsData.itemInfo.discountDesc}}</span>
        </div>
        <div class="sellState">
          <span v-for="(item, index) in goodsData.columns" :key="index">{{
            item
          }}</span>
        </div>
        <div class="service">
          <div v-for="(item,index) in goodsData.shopInfo.services" :key="index">
            <div class="icons"><img  :src="item.icon" alt="" /></div>
           <span> {{item.name}}</span>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
    goodsData:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}

</script>
<style  scoped>
.clothData{
  width: 95%;
  margin-left: 50%;
  transform: translateX(-50%);
}
.title {
  margin-top: 0.6rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: rgb(100, 99, 99);
}
.price {
  position: relative;
  height: 2.5rem;
}
.nowprice {
  height: 2.3rem;
  line-height: 2.5rem;
  width: 4.5rem;
  display: inline-block;
  font-size: 1.3rem;
  color: rgb(255, 142, 150);
  font-weight: 700;
}
.oldprice {
  display: inline-block;
  height: 2.3rem;
  line-height: 2.5rem;
  width: 3rem;
  font-size: 0.8rem;
  color: rgb(190, 185, 185);
  text-decoration: line-through;
}
.pic {
  position: absolute;
  left: 7.3rem;
  top: 0.1rem;
  display: inline-block;
  font-size: 0.8rem;
  color: white;
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  border-radius: 0.5rem;
  width: 3rem;
  background-color: rgb(240, 69, 81);
}
.sellState {
  display: flex;
  height: 1.5rem;
  border-bottom: 1px solid rgb(201, 199, 199);
}
.sellState > span {
  flex: 1;
  line-height: 1.5rem;
  font-weight: 700;
  text-align: center;
  font-size: 0.7rem;
  color: rgb(163, 159, 159);
}
.sellState > span:first-child {
  text-align: left;
}
.sellState > span:last-child {
  text-align: right;
}
.service {
  display: flex;
  flex-wrap: wrap;
}
.service > div {
  height: 1.5rem;
  width: 50%;
  font-size: 0.7rem;
  line-height: 1.5rem;
  color: rgb(100, 99, 99);
  font-weight: 700;
}
.service > div:nth-child(2n) {
  text-align: right;
}
.icons {
  display: inline-block;
  height: 20px;
  width: 20px;
}
.icons > img {
  height: 100%;
  width: 100%;
}
</style>