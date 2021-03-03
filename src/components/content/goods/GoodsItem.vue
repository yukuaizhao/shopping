<template>
  <div class="item" @click="intourl" >
    <a >
      <div>
        <img :src="item.show.img" alt="" @load="imgload">
      </div>
    <div class="tle">
      <div>{{item.title}}</div>
    </div>
    <div class="pric">
      <div>{{item.price}}</div>
    </div>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iid:null
    };
  },
  props:{
    item:Object
  },
  methods: {
    imgload(){
      this.$bus.$emit('imgsload')
    },
    intourl(){
      this.iid=this.item.iid
      this.$router.push({path:'/detail',query:{iid:this.iid}})
    }
  },
}

</script>
<style  scoped>
.item{
  width: 100%;
  height: 100%;
}
.item>a{
  display: inline-block;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  justify-content: space-between;
}
.item>a>div:first-child{
  width: 100%;
  height: 80%;
}
.item>a img{
  width: 100%;
  border-radius: .3rem;
}
.item>a>.tle,.item>a>.pric{
  flex: 1;
}
.tle{
  line-height: 1.4rem;
}
.tle>div{
  width: 100%;
  height: 1.2rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: .7rem;
  margin-top: .2rem;
  color: black;
}
.pric>div{
  width: 100%;
  height: 1.2rem;
  font-size: .7rem;
  color: rgb(255, 142, 150);
}
</style>