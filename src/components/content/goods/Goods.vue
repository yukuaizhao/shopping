<template>
  <div class="g">
    <div class="g1" v-for="(item,index) in goods[goodtle].list" :key="index">
    <div >
      <goods-item :item="item" ></goods-item>
    </div>
    </div>
  </div>
</template>

<script>
import GoodsItem from '@/components/content/goods/GoodsItem.vue'
export default {
  data () {
    return {
    };
  },
  props:['goods','goodtle'],
  components:{
    GoodsItem
  },
}

</script>
<style>
.g{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.g1{
  width: 46%;
  height: 15rem;
}
.g1 div{
  width: 100%;
  height: 100%;
}
</style>