<template>
  <div id="app">
    <hr>
    <h1>单据申请</h1>
    <p>计划金额: {{ name }}</p>
    <hr>
    <Child1 :name="name" @ChildOneClick="handleParentClick" />
    <hr>
    <Child2 :name="name" />
    <hr>
  </div>
</template>

<script>
import Child1 from './Child1';
import Child2 from './Child2';

export default {
  data() {
    return {
      name: '1000'
    }
  },
  methods: {
    handleParentClick(name) {
      this.name = name;
    }
  },
  components: {
    Child1,
    Child2
  },
}
</script>

<style>
#app {
  text-align: center;
}
</style>