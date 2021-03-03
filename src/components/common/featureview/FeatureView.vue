<template>
  <div class="fw">
    <div class="fview" v-for="(item,index) in names" :key="item"
    :class="{active: index === nowindex}" @click="act(index)">
        <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nowindex:0,
      active:true
    };
  },
props:{
  names:Array,
},
methods: {
  act(index){
    this.nowindex=index
    this.$emit('fetureclick',index)
  }
},
 
}

</script>
<style >
.fw{
  display: flex;
  width: 100%;
  height: 100%;
}
.fview{
flex: 1;
height: 100%;
text-align: center;
}
.fview>span{
  display: inline-block;
  height: 80%;
  width: 36%;
  line-height: 2rem;
}
.active>span{
  color: rgb(255, 142, 150);
  border-bottom: 2px solid rgb(255, 142, 150);
}
</style>