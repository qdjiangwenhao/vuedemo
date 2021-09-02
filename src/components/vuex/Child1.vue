<template>
  <div>
    <h1>孩子1</h1>
    <p>name: {{ $store.state.name }}</p>
    <button @click="handleChildOneClick">按钮</button>
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