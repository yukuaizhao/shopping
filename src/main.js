import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' 
Vue.config.productionTip = false
import '@/assets/css/base.css'
Vue.prototype.$bus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
