<template>
  <div class="hello">
    <!-- <h2>How to use Vscode</h2> -->
    <img src="../assets/element.png" /><br />
    <img src="../assets/eicon.png" />
    <!-- <el-row style="margin-top:100px">
      <el-button>默认按钮</el-button>
      <el-button type="primary" @click="toHome">首页</el-button>
      <el-button type="success" @click="toEcharts">echarts相关</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row> -->
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods:{
    toHome(){
      this.$router.push('/')
    },
    toEcharts(){
      this.$router.push('/echarts')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
