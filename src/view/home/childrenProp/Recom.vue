<template>
  <div class="recomd">
    <div v-for="item in recommend1" :key="item.image">
    <a v-bind:href="item.link" >
      <img v-bind:src="item.image" alt="" class="recomimg">
      <div>{{item.title}}</div>
    </a>
   </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:['recommend1'],
 
}

</script>
<style  >
.recomd{
  display: flex;
  height: 100%;
}
.recomd>div{
  width: 60%;
  height: 100%;
  flex: 1;
  text-align: center;
}
.recomd a{
  display: flex;
  width: 60%;
  height: 100%;
  display: inline-block;
  flex-direction: column;
}
.recomd a>img,.recomd a>div{
  flex: 1;
  font-size: .24rem;
  margin-top: .2rem;
}
.recomimg{
  width: 100%;
  height: 60%;
}
</style>