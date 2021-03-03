<template>
  <div id="app">
    <tab-bar class="tab">
      <tab-bar-item path="/home" active-color="rgb(255, 142, 150)">
        <template v-slot:img-font>
          <div class="glyphicon glyphicon-user"></div>
        </template>
        <template v-slot:img-font1>
          <span class="glyphicon glyphicon-user"> </span>
        </template>
        <template v-slot:font>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile" active-color="rgb(255, 142, 150)">
        <template v-slot:img-font>
          <div class="glyphicon glyphicon-th-list"></div>
        </template>
        <template v-slot:img-font1>
          <span class="glyphicon glyphicon-th-list"> </span>
        </template>
        <template v-slot:font>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/purchase" active-color="rgb(255, 142, 150)">
        <template v-slot:img-font>
          <div class="glyphicon glyphicon-shopping-cart"></div>
        </template>
        <template v-slot:img-font1>
          <span class="glyphicon glyphicon-shopping-cart"> </span>
        </template>
        <template v-slot:font>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/mine" active-color="rgb(255, 142, 150)">
        <template v-slot:img-font>
          <div class="glyphicon glyphicon-user"></div>
        </template>
        <template v-slot:img-font1>
          <span class="glyphicon glyphicon-user"> </span>
        </template>
        <template v-slot:font>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
    <div class="body">
      <keep-alive exclude="detail">
        <router-view></router-view>
      </keep-alive> 

    </div>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
.tab{
  z-index: 10;
}
</style>
