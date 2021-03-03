<template>
  <div class="tabbar-items" @click="getRoute" >
    <div v-if="ifshow" :style="activeStyle()">
    <slot  name="img-font1" >
      <!-- <div class="glyphicon glyphicon-user"></div> -->
    </slot>
    </div>
    <div v-else>
    <slot name="img-font">
      <!-- <div class="glyphicon glyphicon-user "></div> -->
    </slot>
    </div>
    <div  :class="{ifshow:ifshow}" :style="activeStyle()">
    <slot name="font">
      <div >首页</div>
    </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // ifshow:false
    };
  },
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"red"
    }
  },
  components: {
    
  },

  computed: {
    ifshow(){
      return this.$route.path.indexOf(this.path) !==-1
    },
    
  },

  methods: {
    getRoute(){
      this.$router.push(this.path)
    },
    activeStyle(){
      return this.ifshow?{color:this.activeColor}:{}
    }
  },
};
</script>
<style  scoped>
@import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
.tabbar-items {
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: 0.3rem;
  height: 2rem;
  text-align: center;
}
.tabbar-items > div {
  flex: 1;
  font-size: .3rem;
}
.tabbar-items > div>div,.tabbar-items > div>span{
  margin-top: 5px;
}
/* .tabbar-items span{
  color: red;
} */
</style>