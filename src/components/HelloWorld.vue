<template>
  <div class="hello">
    <!-- <h2>How to use Vscode</h2> -->
    <img src="../assets/element.png" /><br />
    <img src="../assets/eicon.png" />
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
