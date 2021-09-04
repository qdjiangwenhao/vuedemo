<template>
  <div id="app">
    <router-view></router-view>
    <find></find>
  </div>
</template>

<script>
import find from './components/find/find.vue'
export default {
  name: "App",
  components: {find},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
