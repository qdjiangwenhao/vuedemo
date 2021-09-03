<template>
  <div>
    <h1>审核单据</h1>
    <p>实际金额: {{ $store.state.count }}</p>
    <p>实时状态: {{ $store.state.status }}</p>
    <button @click="handleChildOneClick">刷新金额</button>
    <button @click="check">审核金额</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleChildOneClick() {
      // this.$emit('ChildOneClick', '小夏');
      // this.myName = '小夏';
      // eventBus.$emit('ChildOneClick', '小夏');
      this.$store.commit('changeName');
    },
    check(){
      //审核单据
      this.$store.commit('checkStatus')
    }
  }
}
</script>

<style>

</style>