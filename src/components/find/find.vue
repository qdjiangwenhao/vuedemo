<template>
  <el-row  class="find">
    <!-- <el-button>默认按钮</el-button> -->
    <el-button type="primary" @click="toHome">首页</el-button>
    <el-button type="success" @click="toEcharts">echarts相关</el-button>
    <el-button type="info" @click="toVuex">vuex相关</el-button>
    <el-button type="warning" @click="toEbuild">element相关</el-button>
    <el-button type="danger" @click="toAxios">axios相关</el-button>
  </el-row>
</template>

<script>
export default {
  name: "Find",
  props: {},
  methods: {
    toHome() {
      this.$router.push("/");
    },
    toEcharts() {
      this.$router.push("/echarts");
    },
    toVuex() {
      this.$router.push("/vuex");
    },
    toEbuild(){
      this.$router.push("/ebuild")
    },
    toAxios(){
      this.$router.push("/axios")
    }
  },
};
</script>

<style lang="less">
.find{
 position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
}
</style>