import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    goodsData: [],
    showGoodCar: false,
    imgs: [],
    index:null
  },
  getters: {
    getPrice(state) {
      if (state.imgs) {
        return parseInt(state.imgs.nowprice / 100)
      }
    },
  },
  mutations: {
    goodsDatas(state, item) {
      if (state.goodsData.length == 0) {
        state.goodsData = state.goodsData.concat(item)
      }else{
        state.index = state.goodsData.findIndex(function(value,i,arry){
          return value.sizeId==item.sizeId&&
          value.styleId==item.styleId
        })
        if(state.index!=-1){
        state.goodsData[state.index].num = state.goodsData[state.index].num+item.num
        }else{
          state.goodsData = state.goodsData.concat(item)
        }
      }

    },
    showGoodCarT(state, data) {
      state.showGoodCar = data
    },
    imgs(state, data) {
      state.imgs = data
    },
  }
})
export default store