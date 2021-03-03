<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in banner1" :key="item.image">
         <a v-bind:href="item.link">
           <img class="banimg" v-if="item.image"  v-bind:src="item.image" 
           @load="imgload"/>
           <img class="banimg1 " v-else v-bind:src="item" 
           @load="imgload"/>
          </a>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name:'lunbo',
  data() {
    return {
      ifload:false
    };
  },
  methods: {
    imgload(){
      if (!this.ifload) {
        this.$emit('loaded')
        this.ifload=true
      }
    }
  },
  props: ["banner1"],
  mounted(){
    const swiper = new Swiper(".swiper-container", {
      pagination: ".swiper-pagination",
      paginationClickable: true,
      speed: 3000,
      autoplay:1000
    });
  },
};
</script>
<style >
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: .36rem;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-pagination-bullet{
  background-color: white;
}
.swiper-pagination-bullet-active{
  background-color: rgb(255, 142, 150);
}
.swiper-slide>a{
  width: 100%;
  height: 100%;
}
.banimg {
  width: 100%;
  height: 100%;
}
.banimg1{
  width: 100%;
}
</style>