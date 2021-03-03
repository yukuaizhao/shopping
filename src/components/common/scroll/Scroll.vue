<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Pullup from '@better-scroll/pull-up'
  BScroll.use(Pullup)
export default {
  data () {
    return {
      //在这里用于保持实时的scroll对象
      scroll:null,
    };
  },
  props:{
    probeType:{
      type:Number,
      default:0,
    },
     pullUpLoad:{
        type:Boolean,
        default:false
      }
  },
  mounted() {
    let bs = new BScroll(this.$refs.wrapper,{
      observeDOM:true,
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
      //解决图片加载模糊问题
      useTransition:false
    })
    this.scroll=bs
    //监听滚动位置
    if (this.probeType===2 || this.probeType===3) {
      bs.on('scroll',(position)=>{
     this.$emit('scrol',position)
    })
    }
    
    //监听上拉事件
    if (this.pullUpLoad) {
       bs.on('pullingUp', () => {
       this.$emit('pullingup')
  })
    }
    
  },
  methods: {
    //完成上拉加载更多
    finishPull(){
      this.scroll&&this.scroll.finishPullUp()
    },
    //重新计算BetterScroll方法
    refresh(){
      this.scroll&&this.scroll.refresh()
    },
    
  },
}

</script>
<style  scoped>
</style>