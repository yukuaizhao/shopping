<template>
  <div class="showCloth">
        <div class="bodys">
          <div class="clothFeel"  v-for="(item,index) in goodsData.detailInfo.detailImage" :key="index">
            <div class="desc" v-if="item.desc">{{item.desc}}</div>
            <div class="text">{{item.key}}</div>
            <div class="img"  v-for="(items,i) in item.list" :key="i">
            <img  @load="imgLoad" :src="items" alt="" >
            </div>
          </div>
        
        </div>
      </div>
</template>

<script>
export default {
  data () {
    return {
      counter:null,
      imgsLength:0
    };
  },
  methods: {
    imgLoad(){
      if (++this.counter === this.imgsLength) {
        this.$emit('imgLoad')
      }
    }
  },
  mounted() {
    if (this.goodsData.detailInfo.detailImage) {
      for (let i = 0; i < this.goodsData.detailInfo.detailImage.length; i++) {
      this.imgsLength+=this.goodsData.detailInfo.detailImage[i].list.length
    }
    }
    
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
.bodys {
  width: 95%;
  margin-left: 50%;
  transform: translateX(-50%);
}
.showCloth{
  border-top: 0.2rem solid rgb(235, 232, 232);
}
.text{
  height: 1.5rem;
  width: 100%;
  text-align: left;
  font-size: .8rem;
}
.img{
  width: 100%;
}
.img>img{
  width: 100%;
  height: 100%;
}
</style>