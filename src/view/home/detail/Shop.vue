<template>
  <div class="shop">
        <div class="bodys">
          <div class="shopName">
            <div class="shoplogo">
              <img :src="goodsData.shopInfo.shopLogo" alt="" />
            </div>
            <span>{{goodsData.shopInfo.name }}</span>
          </div>
          <div class="shopCell">
            <div class="cellGoods">
              <div>
            <span>{{getfloat(goodsData.shopInfo.cSells)}}万</span>
            <span>总销量</span>
            </div>
            <div>
            <span>{{goodsData.shopInfo.cGoods}}</span>
            <span>全部宝贝</span>
            </div>
            </div>
            <div class="score">
              <div v-for="(item, index) in goodsData.shopInfo.score" :key="index">
                <span>{{ item.name }}</span>
                <span class="color" :class="{ scoreShow: !item.isBetter }">
                <span  class="red">{{ item.score }}</span>
                <span  class="red"><span>高</span></span>
                </span>
                <span class="color" :class="{ scoreShow: item.isBetter }">
                <span  class="green">{{ item.score }}</span>
                <span  class="green"><span>低</span></span>
                </span>
              </div>
            </div>
          </div>
          <div class="intoShop">
           <span>进店逛逛</span>
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
  },
  methods: {
    getfloat(data) {
      return Math.floor( data/1000) / 10;
    },
  },
}

</script>
<style  scoped>
.bodys {
  width: 95%;
  margin-left: 50%;
  transform: translateX(-50%);
}
.shop {
  border-top: 0.2rem solid rgb(235, 232, 232);
}
.shopName {
  height: 4rem;
  line-height: 4rem;
}
.shopName > span {
  font-size: 0.7rem;
}
.shoplogo {
  display: inline-block;
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  background-color: rgb(212, 208, 209);
  text-align: center;
  line-height: 2rem;
}
.shoplogo > img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
}
.shopCell {
  display: flex;
}
.shopCell{
  height: 4rem;
}
.shopCell > div {
  display: flex;
  flex: 1;
  font-size: 0.7rem;
}
.cellGoods>div{
  display: flex;
  flex:1;
  flex-direction: column;
}
.cellGoods>div:last-child{
  border-right: .02rem solid rgb(100, 99, 99);

}
.cellGoods>div>span:first-child{
  box-sizing: border-box;
  padding-top: .4rem;
  font-size: 1rem;
}
.cellGoods>div>span{
  flex: 1;
  font-size: .8rem;
  text-align: center;
}
.score{
  flex-direction: column;
}
.score>div{
  flex: 1;
  line-height: 1.3rem;
  display: flex;
}
.score>div>span{
  text-align: right;
  flex:1;
}
.color{
  display: flex;
}
.color>span:first-child{
  flex: 1;
  text-align: left;
  box-sizing: border-box;
  padding-left: 1rem;
}
.color>span:last-child{
  flex:1;
  text-align: right;
}
.green{
  color: green;
}
.green>span{
  color: white;
  background-color: green;
}
.color>.red{
  color: tomato;
}
.red>span{
  color: white;
  background-color: tomato;
}
.scoreShow {
  display: none;
}
.intoShop{
  height: 3rem;
  text-align: center;
}
.intoShop>span{
  display: inline-block;
  height: 1.5rem;
  border-radius: .4rem;
  line-height: 1.5rem;
  width: 50%;
  margin-top: .4rem;
  background-color: rgb(214, 212, 212);
  font-size: .8rem;

}
</style>