<template>
  <div class="rules">
    <div class="bodys" >
      <div class="item1"  v-for="item1 in itemParams.rule.tables[0]" 
      >
      <div v-for="item2 in item1" >{{item2}}</div>
      </div>
      <div class="item2" v-for="items in itemParams.info.set" 
      >
      <div>{{items.key}}</div>
      <div>{{items.value}}</div>
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
  itemParams:Object,
  default(){
    return {}
  }
}
}

</script>
<style  scoped>
.bodys {
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: .6rem;
}
.bodys>div{
  display: flex;
}
.bodys>div>div{
  font-size: .65rem;
  border-bottom: 1px solid rgb(107, 105, 105);
  padding-top: .5rem;
  padding-bottom: .5rem;
}
.item1>div{
  flex: 1;
}
.item2>div:first-child{
  width: 20%;
}
.item2>div:last-child{
  flex: 1;
  padding-left: .8rem;
}
</style>