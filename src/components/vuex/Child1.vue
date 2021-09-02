<template>
  <div>
    <h1>审核单据</h1>
    <p>实际金额: {{ $store.state.name }}</p>
    <button @click="handleChildOneClick">刷新金额</button>
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
    }
  }
}
</script>

<style>

</style>