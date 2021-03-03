<template>
  <div class="tem">
    <div class="head">
      <nav-bar>
        <template v-slot:center>
          <div class="header">我的档案</div>
        </template>
      </nav-bar>
    </div>
    <div class="login">
      <nav-bar>
        <template v-slot:left>
          <div class="imgs">
            <img src="" alt="" />
          </div>
        </template>
        <template v-slot:center>
          <div class="log">登陆/注册</div>
          <div class="logm">暂无绑定手机号</div>
        </template>
        <template v-slot:right>
          <div class="glyphicon glyphicon-menu-right fonts"></div>
        </template>
      </nav-bar>
    </div>
    <div class="money">
      <div>
        <div>0.00元</div>
        <div>我的余额</div>
      </div>
      <div>
        <div>0个</div>
        <div>我的优惠</div>
      </div>
      <div>
        <div>0分</div>
        <div>我的积分</div>
      </div>
    </div>
    <div class="myMes">
      <div>我的消息</div>
      <div>积分商城</div>
      <div>会员卡</div>
    </div>
    <div class="service">
      <div>我的购物车</div>
      <div>下载购物APP</div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
export default {
  data() {
    return {};
  },

  components: {
    NavBar,
  },

  computed: {},

  methods: {},
};
</script>
<style  scoped>
.tem{
  background-color: rgb(240, 239, 239);
  height: 100vh;
}
.header {
  color: white;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
}
.head,
.login {
  width: 100%;
  height: 2rem;
  background-color: rgb(255, 142, 150);
  font-size: 0.8rem;
}
.login {
  height: 3rem;
}
.log {
  color: white;
  text-align: left;
  height: 2rem;
  line-height: 3rem;
}
.logm {
  color: white;
  font-size: 0.5rem;
  height: 1rem;
  line-height: 1rem;
}
.fonts {
  line-height: 3rem;
  text-align: center;
  font-size: 1rem;
}
.imgs {
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  overflow: hidden;
  background-color: rgb(252, 249, 249);
  margin-top: .6rem;
  margin-left: .3rem;
}
.imgs>img{
  width: 100%;
  height: 100%;
}
.money{
  height: 4rem;
  display: flex;
  background-color: white;
}
.money>div{
  flex: 1;
  border-right: .03rem solid rgb(211, 199, 199);
}
.money>div:last-child{
  border-right: 0;
}
.money>div>div{
  height: 50%;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5rem;
}
.money>div>div:first-child{
  line-height: 3rem;
}
.myMes{
  height: 6rem;
  margin-top: .5rem;
  background-color: white;
  display: flex;
  flex-direction: column;
}
.myMes>div{
  flex: 1;
  font-size: .8rem;
  line-height: 2rem;
  padding-left: .5rem;
  border-bottom: .03rem solid rgb(223, 221, 221);
}
.myMes>div:last-child{
  border-bottom: 0;
}
.service{
  height: 45%;
  background-color: white;
  margin-top: 1rem;
}
.service>div:nth-child(-n+2){
  height: 2rem;
  line-height: 2rem;
  font-size: .8rem;
  padding-left: .5rem;
  border-bottom: .03rem solid rgb(219, 218, 218);
}
.service>div:last-child{
  border-bottom: 0;
}
</style>