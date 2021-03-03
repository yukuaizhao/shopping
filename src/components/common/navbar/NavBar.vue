<template>
  <div class="navbars">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  
}

</script>
<style  scoped>
  .navbars{
    display: -webkit-flex;
   flex-direction: row;
    width: 100%;
    height: 100%;
  }
  .navbars>div{
    height: 100%;
  }
  .navbars>.center{
    /* width: 4rem; */
    width: 60%;
    /* background-color: red; */
    /* text-align: center; */
     /* line-height: 2rem; */
  }
  .left,.right{
    flex:1
  }
</style>
