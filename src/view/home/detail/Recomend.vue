<template>
  <div class="bodys">
    <div class="title">
     推荐
    </div>
    <div class="content">
      <div class="item" v-for="(item, index) in recommend" :key="index">
        <img :src="item.image" alt="">
        <div class="topic">{{item.title}}</div>
        <div class="price">{{item.price}}</div>
      </div>
     
    </div>
   
    </div>
</template>

<script>
import {getRecommend} from "@/components/network/detail.js";
export default {
  data () {
    return {
      recommend:[]
    };
  },
  created() {
   this.getMes()
  },
  methods: {
    getMes(){
      getRecommend().then(res=>{
        this.recommend=res.data.data.list
      })
    }
  },
}

</script>
<style  scoped>
.bodys {
  width: 95%;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: .6rem;
}
.title{
  height: 2.5rem;
  line-height: 2.5rem;
  border-bottom: .02rem solid rgb(117, 115, 115);
  border-top: .02rem solid rgb(117, 115, 115);
  font-size: 1rem;
}
.content{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin-top: .8rem;
}
.item{
  width: 45%;
}
.item>img{
  width: 100%;
  border-radius: .5rem;
}
.topic{
  width: 5rem;
  height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: .5rem;
  font-size: .6rem;
}
.price{
  font-size: .6rem;
  color: rgb(255, 142, 150);
  margin-bottom: .3rem;
}
</style>