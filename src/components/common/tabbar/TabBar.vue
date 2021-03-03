<template>
    <div class="tabbar">
      <!-- <div class="tabbar-items">
        <div class="glyphicon glyphicon-user"></div>
        <div>首页</div>
      </div>
      <div class="tabbar-items">分类</div>
      <div class="tabbar-items">购物车</div>
      <div class="tabbar-items">我的</div> -->
    
      <slot></slot>
    </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {
  },

  computed: {},


  methods: {}
}

</script>
<style  scoped>
@import '../../../assets/css/base.css';
.tabbar{
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -3px 0.05px rgba(0,0,0,0.06);
  background-color: rgb(245, 243, 243);
}
</style>