<template>
  <div id="app">
    <h1>父亲</h1>
    <p>name: {{ name }}</p>
    <hr>
    <Child1 :name="name" @ChildOneClick="handleParentClick" />
    <hr>
    <Child2 :name="name" />
  </div>
</template>

<script>
import Child1 from './Child1';
import Child2 from './Child2';

export default {
  data() {
    return {
      name: '大姜'
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