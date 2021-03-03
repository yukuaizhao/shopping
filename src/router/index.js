import Vue from 'vue'
import Router from 'vue-router'
const Home =()=>import('view/home/FirstPage.vue') 
const Detail =()=>import('view/home/detail/Detail.vue') 
const Profile =()=>import('../view/profile/Sort.vue') 
const PurchaseCar =()=>import('../view/purchaseCar/PurchaseCar') 
const Mine =()=>import('../view/mine/Mine') 
Vue.use(Router)

export default new Router({
  routes: [
    {path:'',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/detail/',component:Detail},

    {path:'/profile',component:Profile},
    {path:'/purchase',component:PurchaseCar},
    {path:'/mine',component:Mine},

  ],
  mode:'history'
})
