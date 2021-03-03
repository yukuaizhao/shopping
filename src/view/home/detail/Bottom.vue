<template>
  <div class="bottom">
      <div class="shopleft">
        <div>
          <span class="glyphicon glyphicon-phone"></span>
          <span>客服</span>
        </div>
        <div>
          <span class="glyphicon glyphicon-unchecked"></span>
          <span>店铺</span>
        </div>
        <div>
          <span class="glyphicon glyphicon-record"></span>
          <span>收藏</span>
        </div>
      </div>
      <div class="shopright">
        <div @click="addToCar(showGoodCar)">加入购物车</div>
        <div>购买</div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      showGoodCar:true,
      good:[]

    };
  },
  props:{
    goodsData:{
      type:Object,
      default(){
        return {}
      }
    },
    iid:{
      type:String,
      default:null
    },
    
  },
  methods: {
    addToCar(data){
      this.$store.commit('showGoodCarT',data)
    }
  },
  
}

</script>
<style  scoped>
.bottom {
  display: flex;
  height: 100%;
  width: 100%;
  background-color: pink;
  z-index: 10;
}
.bottom > div {
  display: flex;
  flex: 1;
  height: 100%;
}
.bottom > div > div {
  flex: 1;
  height: 100%;
}
.shopright > div {
  text-align: center;
  line-height: 3rem;
  font-size: 0.8rem;
}
.shopright > div:first-child {
  background-color: yellow;
}
.shopright > div:last-child {
  background-color: rgb(255, 142, 150);
  color: white;
}
.shopleft > div {
  display: flex;
  flex-direction: column;
  background-color: white;
}
.shopleft > div > span {
  flex: 1;
  text-align: center;
  line-height: 1.5rem;
  font-size: 0.7rem;
}
.shopleft > div > span:first-child {
  font-size: 1rem;
}
</style>