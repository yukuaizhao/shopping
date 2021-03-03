<template>
  <div class="sort">
    <div class="head">
      <nav-bar>
        <template v-slot:center>
          <div class="header">商品分类</div>
        </template>
      </nav-bar>
    </div>
    <div class="cs">
      <div class="css">
      <div class="leftTab">
        <scroll class="leftscroll">
       <ul class="uls">
         <li :class="{clicks:index==itemIndex}" @click="selectSort(index)" v-for="(item,index) in sortList" :key="index">{{item.title}}</li>
       </ul>
       </scroll>
      </div>
      <div class="rightTab">
        <sort-item :data="data"></sort-item>
      </div>
     </div>
     </div>
  </div>
</template>

<script >
import NavBar from "@/components/common/navbar/NavBar.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";

import SortItem from "./SortItem.vue"
import { getTopic, getTopicDetail } from "@/components/network/sort.js";
export default {
  data() {
    return {
      sortList: [],
      data: [],
      maitKey:String,
      itemIndex:0
    };
  },
  created() {
    this.getSortTopic();
    this.getSortDetail("3627");

  },
  methods: {
    getSortTopic() {
      getTopic().then((res) => {
        this.sortList = res.data.data.category.list;
        this.maitKey=this.sortList[this.itemIndex].maitKey
      });
    },
    getSortDetail(config) {
      getTopicDetail(config).then((res) => {
        this.data = res.data.data.list;
      });
    },
    selectSort(data){
      this.itemIndex=data
      this.maitKey=this.sortList[this.itemIndex].maitKey
      this.getSortDetail(this.maitKey);
    }
  },
  components: {
    NavBar,
    Scroll,
    SortItem
  },
};
</script>
<style scoped>
.sort{
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
.cs {
  width: 100%;
  height: calc(100% - 4rem);
}
.css{
  width: 100%;
  display: flex;
  height: 100%;
}
.leftTab{
  flex: 1;
  background-color: rgb(233, 232, 232);
}
.leftscroll{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.uls{
  margin: 0;
  padding: 0;
}
.uls>li{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  font-size: .7rem;
  text-align: center;
  box-sizing: border-box;
  border-left: .03rem solid rgb(204, 203, 203);
}
.uls>.clicks{
  color: rgb(255, 142, 150);
  border-left: .12rem solid rgb(255, 142, 150);
}
.rightTab{
  width: 80%;
  height: 100%;
  background-color: rgb(255, 255, 255);
}
</style>