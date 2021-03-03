<template>
  <div class="bodys">
    <div class="title">
     用户评价
    </div>
    <div class="items" v-for="item in commit" >
      <div class="topic">
        <img class="img" :src="item.user.avatar" alt="">
        <span>{{item.user.uname}}</span>
      </div>
      <div class="text">{{item.content}}</div>
      <div class="answer">{{item.explain}}</div>
      <div class="time">
        <span>2018/06/07</span>
        <span>16:30</span>
        <span>{{item.style}}</span>
      </div>
    </div>
    <div v-if="commit.length==0" class="none">暂无评价</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
    commit:{
      type:Array,
      default(){
        return []
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
  margin-top: .6rem;
}
.title{
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 1rem;
  border-bottom: .02rem solid rgb(117, 115, 115);
}
.none{
  font-size: .5rem;
  padding-top: .5rem;
}
.answer{
  padding-top: .5rem;
  padding-bottom: .5rem;
}
.topic{
 padding-top: 1rem;
 padding-bottom: 1rem;
}
.img{
  width: 1.5rem;
  height: 1.5rem;
  border-radius: .7rem;
  background-color: pink;
}
</style>