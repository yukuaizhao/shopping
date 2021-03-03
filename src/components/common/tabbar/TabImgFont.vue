<template>
  <div>
    <slot name="img-font">
      <!-- <div class="glyphicon glyphicon-user"></div> -->
    </slot>
    <slot name="img-font1">
      <!-- <div class="glyphicon glyphicon-user "></div> -->
    </slot>
    <slot name="font">
      <div>首页</div>
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style  scoped>

.tabbar-items > div {
  flex: 1;
  font-size: .3rem;
}
.tabbar-items span{
  color: red;
}
</style>