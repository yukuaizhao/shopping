<template>
    <scroll class="items">
    <ul class="uls">
      <li v-for="item in data" class="item">
        <img :src="item.image" alt="">
        <div class="text">{{item.title}}</div>
      </li>
     
    </ul>
    </scroll>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll.vue";
export default {
  data () {
    return {
    };
  },
  props:{
    data:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Scroll
  }

}

</script>
<style  scoped>
.items{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.uls{
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
.item{
  list-style: none;
  width: 50%;
  text-align: center;
  margin-top: .3rem;
}
.item>img{
  width: 3rem;
}
.text{
  font-size: .8rem;
  padding-top: .4rem;
  padding-bottom: .4rem;
}
</style>